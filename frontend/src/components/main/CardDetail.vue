<template>
  <div>
    {{data.title}}  
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