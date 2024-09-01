<template>
    <div>
       <p>本の詳細</p> 
       <p>タイトル: {{ title }}</p>
       <p>本の内容: {{ content }}</p>
       {{ books[bookIndex].title  }}
    </div>
</template>

<script>
export default {
    // index.jsから送られてきた各値を受け取る
    props: {
        id: Number,
        title: String,
        content: String,
    },
    data: function(){ // リロードした時にBookDetailに情報がないとエラーになるので初期値として設定しておく
        return {
            bookIndex: this.$route.params.id -1,
            books:[
                {id:1, title:'タイトル１', content:'本の内容1'},
                {id:2, title:'タイトル2', content:'本の内容2'},
                {id:3, title:'タイトル3', content:'本の内容3'},
            ]
        }
    },
    created(){ // コンポーネントが読み込まれるタイミングで実行される
        if(this.$route.params.id > this.books.length){
            this.$router.push('/book') // 存在しないパラメータならbookに飛ばす
        }
    }
}
    
</script>

<style>

</style>