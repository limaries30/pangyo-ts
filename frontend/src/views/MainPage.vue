<template>
<LayoutDefault>
      <template #header>
          <AppHeader></AppHeader>
      </template>
  <header>
      <div class="navigation">
          <div id="signModal" v-if="$store.state.signModal.show">
              <SignModal />
          </div>
      </div>
</header>
<template #main>
    <Card />
    <Card />
    <Card />
</template>

</LayoutDefault>

</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import AppHeader from '@/components/common/AppHeader.vue'
import LayoutDefault from '@/components/common/LayoutDefault.vue'
import Card from '@/components/main/Card.vue'
import {getPosts,Post} from '@/api/post'

@Component({  
  components: {
      AppHeader,
      LayoutDefault,
      Card
  },
})
export default class MainPage extends Vue{





async created()
{
    console.log("hi")
    try{

        console.log(await getPosts())
    }
    catch(err)
    {
        console.log(err)
    }
}

}
</script>

<style scoped lang="scss">

.ImageContainer{
    width:100%;
    height:40%;
    margin:1em auto;
    display:flex;
    flex-direction:row;

    .ImageContainer_img{
        width:80%;
        height:100%
    }
}
</style>