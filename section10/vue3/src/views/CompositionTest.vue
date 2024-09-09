<template>
    <div>コンポジションAPI</div>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ nameRef }}</p>
    <div>{{ number }}</div>
    <div>{{ sports }}</div>
</template>

<script>
import { ref } from 'vue'
export default {
    
    setup(){
        // console.log('setup') // createdより早い
        // console.log(this)

        let name = '大谷'
        const age = 30
        const nameRef = ref('松阪') // refはsetupをリアクティブにする。returnで返すとtemplateで使用できる
        console.log(nameRef)
        console.log(nameRef.value)

        return { // returnに書いた変数・関数をtemplate内で扱える
            name, 
            age,
            nameRef
        } 
    },
    data(){
        return {
            number: 1,
            sports: '野球'
        }
    },
    created(){
        // console.log('created')
        // console.log(this)
    },
    mounted(){
        // console.log('mounted')
    }
}
</script>

<style>

</style>