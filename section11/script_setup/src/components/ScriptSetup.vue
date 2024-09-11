<script setup>
import { ref } from "vue";

const props = defineProps({
    title: String
})

const emitTest = defineEmits(['custom-event'])

const count = ref(0);

const increment = () => {
    count.value++;
}

const decrement = () => {
    count.value--;
}
</script>

<template>
    <span>{{ props.title }}</span><br>
    <button v-on:click="emitTest('custom-event', '子からの値')">Emit実行</button>
    <h1>{{ count }}</h1>
    <button v-on:click="increment">+</button>
    <button v-on:click="decrement">-</button>

</template>

<style></style>