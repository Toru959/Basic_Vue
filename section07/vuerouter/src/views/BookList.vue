<template>
    <div>
        <h1>本の一覧</h1>
        <ul>
            <li v-on:click="showBookDetail(book.id)"
             v-for="book in books" :key="book.id">
                {{ book.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'BookList',
    data(){
        return{
            bookIndex: -1,
            books:[
                {id:1, title:'タイトル１', content:'本の内容1'},
                {id:2, title:'タイトル2', content:'本の内容2'},
                {id:3, title:'タイトル3', content:'本の内容3'},
            ]
        }
    },
    methods:{
        showBookDetail(id){
            // console.log(id)
            this.bookIndex = id - 1
            console.log(this.bookIndex)
            // index.jsにクリックされた各パラメータの値を送り、BookDetail.vueに送る
            this.$router.push({
                name: 'Book',
                params: {
                    id: this.books[this.bookIndex].id,
                    title: this.books[this.bookIndex].title,
                    content: this.books[this.bookIndex].content
                }
            })
        }
    }
}
</script>

<style>

</style>