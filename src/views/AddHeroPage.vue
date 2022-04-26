<template>
  <form @submit.prevent="createHero">
    <ul>
      <li class="input-nickname">
        <label for="name">Enter hero's nickname</label>
        <input type="text" name="name" id="name" v-model="nickname" />
      </li>
      <li class="input-realname">
        <label for="realname">Enter hero's realname</label>
        <input type="text" name="realname" id="realname" v-model="realname" />
      </li>
      <li class="input-description">
        <label for="desc">Enter hero's origin description</label>
        <input type="text" name="desc" id="desc" v-model="description" />
      </li>
      <li class="input-superpower">
        <label for="superpower">Enter hero's superpowers</label>
        <input
          type="text"
          name="superpower"
          id="superpower"
          v-model="superpowers"
        />
      </li>
      <li class="input-phrase">
        <label for="phrase">Enter hero's catch phrase</label>
        <input type="text" name="phrase" id="phrase" v-model="phrase" />
      </li>
      <!-- <li class="input-image">
        <label for="hero-image">Upload hero's image</label>
        <input type="file" name="hero-image" id="hero-image" multiple />
      </li> -->
    </ul>
    <button class="edit-button">Create Hero!</button>
  </form>
</template>

<script>
import heroesCollection from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      nickname: null,
      realname: null,
      description: null,
      superpowers: null,
      phrase: null,
    };
  },
  methods: {
    async createHero() {
      console.log("Creating Hero");
      const addedHero = await addDoc(heroesCollection, this.$data);
      alert("Congratulations!Hero created :)");
      console.log(addedHero);
      this.$router.push("/");
    },
  },
};
</script>
