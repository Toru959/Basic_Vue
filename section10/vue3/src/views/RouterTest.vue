<template>
    <div>Router</div>
    <button v-on:click="goHome">ホームに戻る</button>
    <button v-on:click="checkRoutePath">ルート情報</button>
</template>

<script>
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router'

export default{
    data(){
        return {

        }
    },
    setup(){
        const router = useRouter()
        const route = useRoute()

        const goHome = () =>{
            router.push('/')
        }
        
        const checkRoutePath = () => {
            console.log(route.path)
        }

        onBeforeRouteLeave((to, from) => {
            console.log(`to: ${to}`)
            console.log(`from: ${from}`)
        })

        return {
            goHome,
            checkRoutePath
        }
    }
}
</script>

<style>

</style>