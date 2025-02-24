<template>
    <div>
        <FloatLabel class="w-full md:w-56">
            <Select v-model="clientVersion" :options="clientVersions" checkmark @value-change="handleVersionSelected($event)"
            size="Normal" showClear class="w-full md:w-56" variant="filled" inputId="over_label"/>
            <label for="over_label">Client version</label>
        </FloatLabel>
    </div>
</template>

<script setup>

import Select from 'primevue/select'
import { FloatLabel } from 'primevue';
import {ref} from 'vue'

const emit = defineEmits(['value-change'])

let clientVersion = ref("");
const clientVersions = [
  "v1.2.0",
  "v2.0.0",
  "v3.0.0",
]

function handleVersionSelected(event) {
    emit('value-change', { event })
}

</script>

<style>
.p-select {
  min-width: 200px;
}
</style>
