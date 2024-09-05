<template>
  <v-app>
    <HeaderList/>
    <v-main>
      <v-container>
        <router-view @add-book-list="addBook" />
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
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch(e) {
        localStorage.removeItem(STORAGE_KEY);
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
    this.saveBooks();
    },
    removeBooks(n) {
    this.books.splice(n, 1);
    this.saveBooks();
    },
    saveBooks() {
    const parsed = JSON.stringify(this.books);
    localStorage.setItem(STORAGE_KEY, parsed);
    }
  }
  
};
</script>
