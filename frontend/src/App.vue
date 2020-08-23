<template>
  <div class="app">
    <div class="app-contents">
      <router-view />
    </div>
  </div>
</template>


<script lang='ts'>
import AppHeader from '@/components/common/AppHeader.vue'
import LayoutDefault from '@/components/common/LayoutDefault.vue'
import { Vue, Component } from 'vue-property-decorator';

@Component({  
  components: {
AppHeader,
LayoutDefault
  },
})

export default class App extends Vue {}
</script>


<style>
@import './css/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');
</style>


