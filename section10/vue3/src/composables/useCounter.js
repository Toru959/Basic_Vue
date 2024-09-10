import { computed } from 'vue'

export default function useCounter(item){ // モジュール化した関数を外に出す
    const increment = () => {
        item.amount++
    }

    const decrement = () => {
        item.amount--
    }

    const totalPrice = computed(() => {
        return item.price * item.amount
    })

    return {
        increment,
        decrement,
        totalPrice
    }
}