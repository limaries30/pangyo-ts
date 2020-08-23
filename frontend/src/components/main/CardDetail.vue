<template>
  <div>
    {{name}}  
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class CardDetail extends Vue {

@Prop() name!: string;

}
</script>


<style>

</style>