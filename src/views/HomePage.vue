<template>
  <div class="heroes-page">
    <div v-if="!heroes.length">
      <h4>Lets create a Hero!</h4>
      <router-link to="/add-hero">Add hero</router-link>
    </div>
    <div v-for="hero in heroes" :key="hero.id">
      {{ hero.nickname }}
      <button class="edit-button">
        <router-link :to="{ path: `/heroes/${hero.id}` }">Edit</router-link>
      </button>
      <button class="delete-button" @click="deleteHero(hero.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import heroesCollection from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      heroes: [],
      selectedDoc: null,
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
    async deleteHero(heroId) {
      let heroRef = doc(heroesCollection, heroId);
      await deleteDoc(heroRef);
      alert("Hero deleted successfuly!");
      this.$router.go();
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
