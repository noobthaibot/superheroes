<template>
  <div class="heroes-page">
    <div v-for="hero in heroes" :key="hero.id">{{ hero.nickname }}</div>
  </div>
</template>

<script>
import heroesCollection from "../firebase";
import { getDocs } from "firebase/firestore";
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      heroes: [],
    };
  },
  methods: {
    async fetchHeroes() {
      let heroesSnap = await getDocs(heroesCollection);
      let heroes = [];
      heroesSnap.forEach((hero) => {
        let heroId = hero.data();
        heroId.id = hero.id;
        heroes.push(heroId);
      });
      this.heroes = heroes;
    },
  },
  created() {
    this.fetchHeroes();
  },
};
</script>
<style scoped>
.heroes-page {
  display: flex;
  justify-content: space-around;
}
</style>
