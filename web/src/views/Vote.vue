<template>
  <div class="vote">
    <img v-bind:src="firstcat.url" v-on:click="voteFor(firstcat.id)">
    <span>Or</span>
    <img v-bind:src="secondCat.url" v-on:click="voteFor(secondCat.id)">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/store';
import { CatModel } from '@/services/catService';

@Component({
  data: () => {
    const { firstcat, secondCat } = store.getNextPairOfCat();
    return { firstcat, secondCat };
  },
  methods: {
    voteFor(id: string) {
      store.addVote(id);
      const { firstcat, secondCat } = store.getNextPairOfCat();
      this.$data.firstcat = firstcat;
      this.$data.secondCat = secondCat;
    },
  },
})
export default class Classement extends Vue {}
</script>

<style scoped>
.vote {
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.vote span {
  margin: 0 10px;
}

img {
  width: 175px;
  height: 250px;
  border: 2px solid #aaa;
}
</style>
