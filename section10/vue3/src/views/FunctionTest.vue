<template>
    <div>CompositionFunction</div>
    <div>
        <p>商品名：{{ item.name }}</p>
        <p>単価：{{ item.price }}</p>
        <p>合計：{{ totalPrice }}</p>
        <div>数量</div>
        <button v-on:click="decrement">-</button>
        <button v-on:click="increment">+</button>
    </div>
</template>

<script>
// import { reactive, computed } from 'vue'
import { reactive } from 'vue' // モジュール化して切り離し
import useCounter from '@/composables/useCounter' // モジュール読み込み

// script内で合成関数を作成する場合
// const useCounter = (item) => {
//     const increment = () => {
//         item.amount++
//     }
//     const decrement = () => {
//         item.amount--
//     }

//     const totalPrice = computed(() => {
//         return item.price * item.amount
//     })

//     return {
//         increment,
//         decrement,
//         totalPrice
//     }
// }

export default {
    setup(){
        const item = reactive({
            name: '商品名',
            price: 100,
            amount: 0
        })

        const { increment, decrement, totalPrice } = useCounter(item)

        return {
            item,
            increment,
            decrement,
            totalPrice
        }
    }
}
</script>

<style>

</style>