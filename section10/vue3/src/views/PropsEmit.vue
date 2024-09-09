<template>
    <div>PropsEmitTest</div>
    <p>{{ setupBooks }}</p>
    <ul>
        <li v-for="book in setupBooks" :key="book.id">
            {{ book.title }}
        </li>
    </ul>
    <p>{{ dataBooks }}</p>
    <button v-on:click="emitTest">emitボタン</button>
</template>

<script>
export default {
    props:{
        setupBooks: Array,
        dataBooks: Array
    },
    setup(props, context){ // setup内ではthisが使用できないので、contextを使用する
        console.log(props.setupBooks[0].title)
        console.log(props.dataBooks)
        
        const emitTest = () => {
            context.emit('custom-event', '子の値')
        }
        return {
            emitTest
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style>
</style>