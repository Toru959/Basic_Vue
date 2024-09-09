<template>
    <div>コンポジションAPI</div>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>ref: {{ nameRef }}</p>
    <div>{{ number }}</div>
    <div>{{ sports }}</div>
    <p>reactive: {{ book }}</p>
    <p>reactive: {{ book.title }}</p>
    <p>reactive: {{ book.author[0] }}</p>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    
    setup(){
        

        let name = '大谷'
        const age = 30
        const nameRef = ref('松阪') // refはsetupをリアクティブにする。returnで返すとtemplateで使用できる

        const book = reactive({ // refと同じくreturnで返す
            title: 'タイトル',
            author: ['大谷', '藤波'] 
        })

        // console.log('setup') // createdより早い
        // console.log(this)
        console.log(nameRef)
        console.log(nameRef.value)

        return { // returnに書いた変数・関数をtemplate内で扱える
            name, 
            age,
            nameRef,
            book
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