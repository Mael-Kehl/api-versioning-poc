<template>
  <div>
    <div class="title-container">
      <h1>API versioning - PoC</h1>
      <p>
        Proof of Concept (PoC) that aims to demonstrate the impact of both breaking and backward-compatible changes on an application 
        by comparing received data and analyzing its effect on client-side rendering.
        <br>Version naming : vX.Y.Z (X : Breaking change, Y : Backward-compatible change, Z : bug fix)<br>
        <br>The API documentation is available at: <strong>server_url:3000/doc</strong>.
      </p>
    </div>
    <div class="selectors-container">
      <ClientVersionSelector @value-change="changeClientVersion($event.event)"/>
      <ApiVersionSelector @value-change="callApiVersion($event.event)"/>
    </div>
    <section>
      <div class="client-components-container">
        <h2>Rendered client {{ clientVersion }}</h2>
        <ClientV1 v-if="clientVersion == 'v1.2.0'" :user="user"/> 
        <ClientV2 v-else-if="clientVersion == 'v2.0.0'":user="user"/>
        <ClientV3 v-else :user="user"/>
      </div>
      <div class="received-code-container">
        <h2>Data received {{ apiVersion }}</h2>
        <VueJsonPretty :data="user"/>
        <h2 v-if="apiHeader !== ''">Response's custom header</h2>
        <Message severity="warn" v-if="apiHeader !== '' && isApiHeaderWarning">{{ apiHeader }}</Message>
        <Message severity="success" v-if="apiHeader !== '' && !isApiHeaderWarning">{{ apiHeader }}</Message>
      </div>
      
    </section>

  </div>
</template>

<script setup>

import { ref } from 'vue';
import { Message } from 'primevue';

import VueJsonPretty from "vue-json-pretty";
import 'vue-json-pretty/lib/styles.css';

import ApiVersionSelector from './components/ApiVersionSelector.vue';
import ClientVersionSelector from './components/ClientVersionSelector.vue';

import ClientV1 from './components/ClientV1.vue';
import ClientV2 from './components/ClientV2.vue';
import ClientV3 from './components/ClientV3.vue';

// If a .env file exists, we take the value from there -> dev environment
// If no .env file exists, we switch to the global variable in index.html -> Only works with docker -> prod
const apiUrl = import.meta.env.VITE_API_URL || window.__API_BASE_URL__ || "__API_BASE_URL__";
//All logic related to client call 

let clientVersion = ref("");

function changeClientVersion(version) {
  console.log("Asking to change client version " + version)
  if (!version) {
    return false;
  }
  clientVersion.value = version;
}


//All logic related to api call
let apiVersion = ref("")
let user = ref({})
let apiHeader = ref("")
const isApiHeaderWarning = ref(false)

let stringifiedUser = "{}"

async function callApiVersion(version){

  //Check if clear function is used (so no version provided)
  if (!version) {
    user.value = {}
    return false;
  }

  //Sets apiVersion
  apiVersion.value = version;

  //Creates API call URL
  const url = apiUrl+"/user/"+version+"/";
  console.log("Call to "+ url)

  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {

      }
    })
  
    //Check if response is OK
    if (!response.ok) {
      throw new Error(`HTTP error : status ${response.status}`);
    }

    //Get response body and convert it to JSON
    const data = await response.json()
    user.value = data;
    stringifiedUser = JSON.stringify(data, null, 2);

    //Get reponse headers
    if (response.headers.get("warning")) {
      apiHeader.value = "Warning : "+ response.headers.get("warning");
      isApiHeaderWarning.value = true;
    }
    else if (response.headers.get("information")) {
      apiHeader.value = "Information : "+ response.headers.get("information");
      isApiHeaderWarning.value = false;
    }
    else {
      apiHeader.value = "";
    }




  } catch (error) {
    console.error("Error while fetching data", error)
  }
}

</script>

<style>

h1 {
  font-size: 2rem;
}

p {
  font-size: 0.9rem;
}

.title-container {
  margin-bottom: 30px;
}

.selectors-container {
  display: flex;
  min-width: 100%;
  gap: 4%;
  justify-content: center;
}

.client-components-container, .received-code-container {
  min-width: 48%;
}

section {
  display: flex;
  gap: 4%;
}

</style>
