<template>
    <div>
        <div class="user-card" v-if="isUserValid(props.user)">

            <div>
                <div class="user-field">
                    <label for="firstname" class="font-semibold w-24">Firstname</label>
                    <InputText id="firstname" class="flex-auto" autocomplete="off" :placeholder="props.user.firstname"/>
                </div>
                <div class="user-field">
                    <label for="lastname" class="font-semibold w-24">Lastname</label>
                    <InputText id="lastname" class="flex-auto" autocomplete="off" :placeholder="props.user.lastname"/>
                </div>
            </div>
            <div class="user-field">
                <label for="username" class="font-semibold w-24">Birthdate</label>
                <InputText v-if="isBirthDateValid(props.user)" id="username" class="flex-auto" autocomplete="off" :placeholder="fullBirthDateString(props.user)"/>
                <Message severity="error" v-else>Breaking : wrong date format</Message>
            </div>
            <div class="user-field">
                <label for="username" class="font-semibold w-24">Jobs</label>
                <ul>
                    <li v-for="job in props.user.jobs">
                        {{ job }}
                    </li>
                </ul>
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
    return (user.firstname && user.lastname && user.birthdateday && user.birthdatemonth && user.birthdateyear && user.jobs !== undefined);
}

function isBirthDateValid(user) {
    return (!isNaN(user.birthdateday) && !isNaN(user.birthdatemonth) && !isNaN(user.birthdateyear))
}

function fullBirthDateString(user) {
    return (user.birthdateday+"/"+user.birthdatemonth+"/"+user.birthdateyear);
}

</script>

