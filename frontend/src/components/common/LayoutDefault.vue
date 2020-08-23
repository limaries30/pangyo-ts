<template>
  <div id="app">
      <main>
          <slot name='header' />
          <slot name='main' />
    </main>
  </div>

</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import SignModal from '@/components/sign/SignModal.vue'

@Component({  
  components: {
SignModal
  },
})

export default class LayoutDefault extends Vue {}
</script>

<style>

</style>