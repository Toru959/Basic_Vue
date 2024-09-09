<template>
    <div>
    <div>コンポジションAPI</div>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>ref: {{ nameRef }}</p>
    <div>{{ number }}</div>
    <div>{{ sports }}</div>
    <p>reactive: {{ book }}</p>
    <p>reactive: {{ book.title }}</p>
    <p>reactive: {{ book.author[0] }}</p>
    <p>reactivetoRefs: {{ titleRef }}</p>
    <p>reactivetoRefs: {{ authorRef[1] }}</p>
    <button v-on:click="btnClick">ボタン</button>
    <p>computed: {{ totalPrice }}</p>
    <p>watch: <input v-model="search">{{ search }}</p>
    <div>watchEffect: <input v-model="searchEffect">{{ searchEffect }}</div>
    </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, watchEffect } from 'vue'

export default {
    
    setup(){
        

        let name = '大谷'
        const age = 30
        const nameRef = ref('松阪') // refはsetupをリアクティブにする。returnで返すとtemplateで使用できる

        const book = reactive({ // refと同じくreturnで返す
            title: 'タイトル',
            author: ['大谷', '藤波'] 
        })

        const booktoRefs = reactive({ 
            titleRef: 'タイトル2',
            authorRef: ['大谷2', '藤波2'] 
        })

        const btnClick = (e) => { // setup関数内ではjavascriptと同じように書ける
            console.log(book.title) // setup関数内ではthisは使えないので、不要
            console.log(e)
        }

        const item = reactive({
            price: 100,
            number: 1
        })

        const totalPrice = computed(() => {
            return item.price * item.number // computedは必ずreturnが必要
        })

        const search = ref('') // searchはrefなのでリアクティブな変数
        watch(search, (newValue, prevValue) => { // 第一引数で監視したい対象
            console.log(`watch: ${search.value}`) // テンプレート構文
            console.log(`new: ${newValue}`)
            console.log(`prev: ${prevValue}`)
        })

        const searchEffect = ref('')
        watchEffect(() => { // watchよりも簡単に扱える
            console.log(`watchEffect: ${searchEffect.value}`)
        })
            

        // console.log('setup') // createdより早い
        // console.log(this)
        console.log(nameRef)
        console.log(nameRef.value)

        return { // returnに書いた変数・関数をtemplate内で扱える
            name, 
            age,
            nameRef,
            book,
            ...toRefs(booktoRefs), // spread構文 reactiveじゃないので編集はできないのでtoRefs()で囲うことでreactiveになる
            btnClick,
            item,
            totalPrice,
            search,
            searchEffect
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