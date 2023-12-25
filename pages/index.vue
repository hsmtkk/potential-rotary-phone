<template>
    <v-main>
        <v-app-bar>
            <v-app-bar-title>Chat GUI with Nuxt</v-app-bar-title>
        </v-app-bar>
        <v-form v-on:submit.prevent="submitClicked">
            <v-textarea v-model="prompt"></v-textarea>
            <v-btn type="submit">Submit</v-btn>
            <v-textarea v-model="response"></v-textarea>
        </v-form>
    </v-main>
</template>

<script setup lang="ts">
const prompt = ref("")

const response = ref("")

const submitClicked = () => {
    response.value = "Hi World!"
}
</script>