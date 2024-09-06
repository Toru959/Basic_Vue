<template>
    <div>
        <v-app-bar app color="primary" dark>
            <v-spacer></v-spacer>
            <v-btn color="error" v-on:click="deleteLocalStorage">
                削除する
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        deleteLocalStorage(){
            this.$emit('delete-local-storage')
        }
    }
}
</script>

<style>

</style>