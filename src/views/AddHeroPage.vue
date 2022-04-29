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
        <input
          type="file"
          ref="input1"
          @change="previewImage"
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
import firebase from "../firebase";

export default {
  data() {
    return {
      nickname: null,
      realname: null,
      description: null,
      superpowers: null,
      phrase: null,
      caption: "",
      img1: "",
      imageData: null,
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

    create() {
      const post = {
        photo: this.img1,
        caption: this.caption,
      };
      firebase
        .database()
        .ref("PhotoGallery")
        .push(post)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    click1() {
      this.$refs.input1.click();
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.img1 = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            console.log(this.img1);
          });
        }
      );
    },

    handleChange(event) {
      let selected = event.target.files[0];
      console.log(selected);
    },
  },
};
</script>
