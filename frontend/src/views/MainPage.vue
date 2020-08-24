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
       <Card v-for="item in datas" v-bind:data="item" v-bind:key="item.id"/>
       <CardDetail v-for="item in datas" v-bind:data="item" v-bind:key="item.id"/>
</template>

</LayoutDefault>

</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import AppHeader from '@/components/common/AppHeader.vue'
import LayoutDefault from '@/components/common/LayoutDefault.vue'
import Card from '@/components/main/Card.vue'
import CardDetail from '@/components/main/CardDetail.vue'
import {getPosts} from '@/api/post'
import {Post} from '@/api/types'

@Component({  
  components: {
      AppHeader,
      LayoutDefault,
      Card,
      CardDetail
  },
})
export default class MainPage extends Vue{

datas: Post[]=[];

async created()
{
    try{

         const res = await getPosts()
         this.datas = res.data
    }
    catch(err)
    {
        console.log(err)
    }
}

}
</script>

<style scoped lang="scss">

</style>