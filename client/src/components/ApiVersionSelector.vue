<template>
    <div>
        <FloatLabel class="w-full md:w-56">
            <Select v-model="apiVersion" :options="apiVersions" checkmark @value-change="handleVersionSelected($event)"
            size="Normal" showClear class="w-full md:w-56" variant="filled" inputId="over_label"/>
            <label for="over_label">API version</label>
        </FloatLabel>
    </div>
</template>

<script setup>

import Select from 'primevue/select'
import { FloatLabel } from 'primevue';
import {ref} from 'vue'

const emit = defineEmits(['value-change'])

let apiVersion = ref("");
const apiVersions = [
  "v1.0.0",
  "v1.1.0",
  "v1.1.0.breaking",
  "v1.2.0",
  "v2.0.0",
  "v2.0.0.breaking",
  "v2.1.0",
  "v3.0.0",
]

function handleVersionSelected(event) {
    emit('value-change', { event });
}

</script>

<style>
.p-select {
  min-width: 200px;
}
</style>
