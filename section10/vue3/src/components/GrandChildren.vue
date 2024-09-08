<template>
    <div>
        GrandChildren 孫
    </div>
    <div>
        {{ userName }}
    </div>
</template>

<script>
export default {
    data(){
       
    },
    inject: ['userName'] //App.vueからの値を受け取る
}
</script>

<style>

</style>