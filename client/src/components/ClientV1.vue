<template>
    <div>
        <div class="user-card" v-if="isUserValid(props.user)">

            <div class="user-field">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" :placeholder="props.user.fullname"/>
            </div>
            <div class="user-field">
                <label for="birthdate" class="font-semibold w-24">Birthdate</label>
                <InputText v-if="isBirthDateValid(user.birthdate)" id="birthdate" class="flex-auto" autocomplete="off" :placeholder="props.user.birthdate"/>
                <Message severity="error" v-else>Breaking : wrong date format</Message>
            </div>
            <div class="user-field">
                <label for="job" class="font-semibold w-24">Job</label>
                <InputText id="job" class="flex-auto" autocomplete="off" :placeholder="props.user.job"/>
            </div>
            
        </div>
        <Message v-else-if="isUserEmpty(props.user)">Choose an API version to call</Message>
        <Message severity="error" v-else>Breaking change detected</Message>
    </div>
</template>

<script setup>
import { InputText, Message } from 'primevue';


const props = defineProps({
    user: Object
})

function isUserEmpty(user) {
    //Checks that object is empty
    return (Object.keys(user).length === 0);
}

function isUserValid(user) {
    return (user.fullname && user.birthdate && user.job);
}

function isBirthDateValid(date) {
    return (date.includes("/"));
}

</script>
