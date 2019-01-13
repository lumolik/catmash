<template>
  <div class="classement">
   <ul id="list-cat">
      <li v-for="cat in cats" :key="cat.id">
        <div class="img-container">
        <img v-bind:src="cat.url">
        <span>{{cat.vote}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {store} from '@/store';


@Component({
  data: () => {
    return { cats: store.state.cats.sort((cat1,cat2) => cat2.vote - cat1.vote)}
  }
})
export default class Classement extends Vue {}
</script>

<style scoped>
#list-cat li{
  list-style-type: decimal;
  width: 100%;
}

.img-container{
  width: 25%;
}

.img-container img{
  width: 100%;
}
</style>
