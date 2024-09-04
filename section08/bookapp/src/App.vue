<template>
  <v-app>
    <HeaderList/>
    <v-main>
      <router-view/>
    </v-main>
    <FooterList/>
  </v-app>
</template>

<script>
import HeaderList from '@/global/HeaderList.vue';
import FooterList from '@/global/FooterList.vue'

export default {
  name: 'App',

  components: {
    HeaderList,
    FooterList
  },

  data: () => ({
    //
  }),
  
};
</script>
