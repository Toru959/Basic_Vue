<template>
    <div>PropsEmitTest</div>
    <p>{{ setupBooks }}</p>
    <ul>
        <li v-for="book in setupBooks" :key="book.id">
            {{ book.title }}
        </li>
    </ul>
    <p>{{ dataBooks }}</p>
</template>

<script>
export default {
    props:{
        setupBooks: Array,
        dataBooks: Array
    },
    setup(props){
        console.log(props.setupBooks[0].title)
        console.log(props.dataBooks)
    },
    data(){
        return {

        }
    }
}
</script>

<style>
</style>