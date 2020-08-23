<template>
      <div class="ImageContainer">
        <section class="ImageSection">
            <img class="ImageSection_img" src="@/assets/imgs/salad.jpg" />
        </section>
    </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({  
  components: {
  },
})
export default class Card extends Vue {

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
