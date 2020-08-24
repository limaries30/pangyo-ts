<template>
  
  <div>
    <div>
      <header @click="$emit('close')">
        X
        </header>
    {{data.title}} 
    </div> 
  </div>



</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import {Post} from '@/api/types'
@Component
export default class CardDetail extends Vue {

@Prop() data!: Post;

}
</script>


<style>

</style>