<template>
  <ul class="hero-card">
    <li class="nickname">
      <h3>{{ heroInfo.nickname }}</h3>
    </li>
    <div class="info-body">
      <li class="realname">
        <h4>
          <span class="span-text">Real name: </span>{{ heroInfo.realname }}
        </h4>
      </li>
      <li class="description">
        <p>
          <span class="span-text">Decription: </span> {{ heroInfo.description }}
        </p>
      </li>
      <li class="superpower">
        <p>
          <span class="span-text">Superpowers: </span>{{ heroInfo.superpowers }}
        </p>
      </li>
      <li class="phrase">
        <p>
          <span class="span-text">Catch Phrase!: </span>{{ heroInfo.phrase }}
        </p>
      </li>
    </div>
  </ul>
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
        phrase: null,
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
.nickname {
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 900;
  border: solid 1px black;
  border-radius: 5px;
}
.realname {
  padding: 10px;
}
.span-text {
  font-weight: 500;
}
p {
  font-weight: 100;
  padding: 10px;
  text-align: justify;
}
.info-body {
  margin-top: 10px;
  border: solid 1px black;
  border-radius: 5px;
}
</style>
