<template>
  
  <CardModalLayout>
    <template #header>
      <div @click="$emit('close')">
        X
      </div>
    </template>
    <template #content>
    <div>
    {{data.title}} 
    </div> 
    </template>
 </CardModalLayout>



</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import {Post} from '@/api/types'
import CardModalLayout from './CardModalLayout.vue'
@Component({  
  components: {
CardModalLayout
  },
})
export default class CardDetail extends Vue {

@Prop() data!: Post;

}
</script>


<style>

</style>