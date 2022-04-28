<template>
  <form @submit.prevent="createHero">
    <ul class="edit-form">
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
      <li class="input-image">
        <label for="hero-image">Upload hero's image</label>
        <input
          type="file"
          name="hero-image"
          id="hero-image"
          @change="uploadImage"
          multiple
          accept="image/*"
        />
      </li>
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
      image: null,
    };
  },
  methods: {
    async createHero() {
      if (this.nickname.length <= 2 || this.nickname.length >= 30) {
        alert("Please, enter valid nickname");
      } else if (this.realname.length <= 2 || this.realname.length >= 30) {
        alert("Please, enter valid real name");
      } else if (this.description.length <= 10) {
        alert("Description must have at least 10 symbols");
      } else if (this.superpowers.length <= 10) {
        alert("Superpowers must have at least 10 symbols");
      } else {
        console.log("Creating Hero");
        const addedHero = await addDoc(heroesCollection, this.$data);
        alert("Congratulations!Hero has been created :)");
        console.log(addedHero);
        this.$router.push("/");
      }
    },
    uploadImage(event) {
      // let file = event.target.files[0];
      // let storageRef = app.storage().file("images" + file.name);
      // storageRef.put(file);
      // console.log(file);
      const files = event.traget.files[0];
      let filename = files.name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid photo!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
  },
};
</script>
