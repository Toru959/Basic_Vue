<template>
    <div>Vuex</div>
    <div>{{ count }}</div>
    <button v-on:click="increment">+</button>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default{
    setup(){
        const store = useStore()
        const count = computed(() => {
            return store.state.count
        })
        const increment = () => {
            store.commit('increment')
        }

        return {
            count,
            increment
        }
    }
}
</script>

<style>

</style>