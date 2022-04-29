<template>
  <div class="heroes-page">
    <div class="heroes-container">
      <div v-if="!heroes.length">
        <h4>Lets create a Hero!</h4>
        <router-link to="/add-hero">Add hero</router-link>
      </div>
      <div class="hero-item" v-for="hero in heroes" :key="hero.id">
        <router-link :to="{ path: `/hero/${hero.id}` }">{{
          hero.nickname
        }}</router-link>
        <router-link :to="{ path: `/heroes/${hero.id}` }"
          ><button class="edit-button">Edit</button></router-link
        >
        <button class="delete-button" @click="deleteHero(hero.id)">
          Delete
        </button>
      </div>
    </div>
    <VueTailwindPagination
      :current="currentPage"
      :total="total"
      :per-page="perPage"
      @page-changed="pageChange($event)"
    />
  </div>
</template>

<script>
import heroesCollection from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import "@ocrv/vue-tailwind-pagination/styles";

export default {
  name: "HomePage",
  components: {
    VueTailwindPagination,
  },
  data() {
    return {
      heroes: [],
      selectedDoc: null,
      currentPage: 1,
      total: null,
      perPage: 5,
      data: [],
    };
  },
  methods: {
    pageChange(pageNumber) {
      this.currentPage = pageNumber;
      this.heroes;
    },
    async fetchHeroes() {
      let heroesSnap = await getDocs(heroesCollection);
      let heroes = [];
      heroesSnap.forEach((hero) => {
        let heroId = hero.data();
        heroId.id = hero.id;
        heroes.push(heroId);
      });
      this.heroes = heroes;
      this.data = heroes;
      this.total = heroes.length;
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
  mounted() {
    this.currentPage = 1;
    this.heroes;
  },
};
</script>
<style scoped>
.heroes-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.hero-item {
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
}
.hero-item button {
  margin: 10px;
}
</style>
