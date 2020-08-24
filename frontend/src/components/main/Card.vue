<template>
      <div class="ImageContainer">
        <section class="ImageSection">
            <img class="ImageSection_img" src="@/assets/imgs/salad.jpg" />
        </section>
    </div>
</template>

<script lang='ts'>
import { Vue, Component,Prop } from 'vue-property-decorator';
import {Post} from '@/api/types'

@Component({  
  components: {
  },
})
export default class Card extends Vue {

@Prop() data!: Post;

}
</script>

<style lang="scss" scoped>

.ImageContainer{
    width:100%;
    height:40%;
    margin:1em auto;
    .ImageSection{
     display:flex;
     flex-direction:row;
     justify-content: center;
    }
    .ImageSection_img{
        width:80%;
        height:100%
        ImageSection
    }
}

</style>
