<template>
  <form @submit.prevent="updateHero">
    <ul class="edit-form">
      <li class="input-nickname">
        <label for="name">Enter hero's nickname</label>
        <input type="text" name="name" id="name" v-model="heroInfo.nickname" />
      </li>
      <li class="input-realname">
        <label for="realname">Enter hero's realname</label>
        <input
          type="text"
          name="realname"
          id="realname"
          v-model="heroInfo.realname"
        />
      </li>
      <li class="input-description">
        <label for="desc">Enter hero's origin description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          v-model="heroInfo.description"
        />
      </li>
      <li class="input-superpower">
        <label for="superpower">Enter hero's superpowers</label>
        <input
          type="text"
          name="superpower"
          id="superpower"
          v-model="heroInfo.superpowers"
        />
      </li>
      <li class="input-phrase">
        <label for="phrase">Enter hero's catch phrase</label>
        <input
          type="text"
          name="phrase"
          id="phrase"
          v-model="heroInfo.phrase"
        />
      </li>
      <li class="input-image">
        <label for="hero-image">Upload hero's image</label>
        <input type="file" name="hero-image" id="hero-image" multiple />
      </li>
    </ul>
    <button class="edit-button" type="submit">Update Hero!</button>
  </form>
</template>

<script>
import heroesCollection from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedHero: {},
      heroId: null,
      docRef: null,
      heroInfo: {
        nickname: null,
        realname: null,
        description: null,
        superpowers: null,
        ßphrase: null,
      },
    };
  },
  methods: {
    async getHero() {
      let heroRef = doc(heroesCollection, this.heroId);
      this.docRef = heroRef;
      let hero = await getDoc(this.docRef);
      let heroData = hero.data();
      this.heroInfo.nickname = heroData.nickname;
      this.heroInfo.realname = heroData.realname;
      this.heroInfo.description = heroData.description;
      this.heroInfo.superpowers = heroData.superpowers;
      this.heroInfo.phrase = heroData.phrase;
    },
    async updateHero() {
      if (
        this.heroInfo.nickname.length <= 2 ||
        this.heroInfo.nickname.length >= 30
      ) {
        alert("Please, enter valid nickname");
      } else if (
        this.heroInfo.realname.length <= 2 ||
        this.heroInfo.realname.length >= 30
      ) {
        alert("Please, enter valid real name");
      } else if (this.heroInfo.description.length <= 10) {
        alert("Description must have at least 10 symbols");
      } else if (this.heroInfo.superpowers.length <= 10) {
        alert("Superpowers must have at least 10 symbols");
      } else {
        await setDoc(this.docRef, this.heroInfo);
        alert(`${this.heroInfo.nickname} has been updated!`);
        this.$router.push("/");
      }
    },
  },
  created() {
    let heroId = this.$route.params.heroId;
    this.heroId = heroId;
    this.getHero();
  },
};
</script>

<style scoped>
.edit-form {
  display: flex;
  flex-direction: column;
}
.edit-form li {
  display: flex;
  padding: 10px;
  flex-direction: column-reverse;
}
.edit-button {
  margin-left: 10px;
}
</style>
