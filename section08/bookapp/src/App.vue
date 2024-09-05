<template>
  <v-app>
    <HeaderList/>
    <v-main>
      <v-container>
        <router-view @add-book-list="addBook" :books="books" />
      </v-container>
    </v-main>
    <FooterList/>
  </v-app>
</template>

<script>
import HeaderList from '@/global/HeaderList.vue';
import FooterList from '@/global/FooterList.vue'
const STORAGE_KEY = 'books'

export default {
  name: 'App',

  components: {
    HeaderList,
    FooterList
  },

  data: function(){
    return {
      books: [],
      newBook: null,
    }
  },
  mounted() {
    if (localStorage.getItem(STORAGE_KEY)) {
    try {
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY))
    } catch(e) {
        localStorage.removeItem(STORAGE_KEY)
    }
    }
  },
  methods: {
    addBooks(e) {
  
    this.books.push({
      id: this.books.length,
      title: e.title,
      image: e.image,
      description: e.description,
      readDate: '',
      memo: ''
    });
    this.saveBooks()
    // console.log(this.books.slice(-1)[0].id) 最後に追加した本のidを取得
    this.goToEditPage(this.books.slice(-1)[0].id)
    },
    removeBooks(n) {
    this.books.splice(n, 1)
    this.saveBooks()
    },
    saveBooks() {
    const parsed = JSON.stringify(this.books)
    localStorage.setItem(STORAGE_KEY, parsed)
    },
    goToEditPage(id){
      this.$router.push(`/edit/${id}`)
    }
  }
  
};
</script>
