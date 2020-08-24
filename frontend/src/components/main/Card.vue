<template>
      <div class="ImageContainer">
          <header class="Header">
              {{data.title}}
          </header>
        <section class="ImageSection">
            <img class="ImageSection_img" src="../../assets/imgs/salad.jpg" />
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
    width:80%;
    height:40%;
    margin:1em auto;
    display:flex;
    flex-direction:column;

    .Header{
        text-align:center;
        background-color:darkgreen;
    }

    .ImageSection{
     display:flex;
     flex-direction:row;
     justify-content: center;
    }
    .ImageSection_img{
        width:100%;
        height:100%
    }
}

</style>
