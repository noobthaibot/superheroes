<template>
  <nav class="nav-list">
    <router-link to="/">All heroes</router-link>
    <router-link to="/add-hero">Add hero</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  color: #000000;
  text-decoration: none;
}
h3,
h4 {
  margin: 0;
}
ul {
  list-style: none;
  padding: 0;
}
.nav-menu {
  width: 100%;
}
.nav-list {
  margin: 0 auto;
  width: 300px;
  display: flex;
  justify-content: space-around;
}
.hero-img {
  display: flex;
  justify-content: space-around;
}
.hero-img img {
  padding: 10px;
  width: 250px;
  flex-shrink: 0;
  border-radius: 20px;
}
.hero-nickname h3,
.hero-realname h4 {
  text-align: center;
}
.hero-nickname h3 {
  text-transform: uppercase;
  font-size: 24px;
}
.hero-text {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.buttons {
  display: flex;
  justify-content: center;
}
.buttons li button {
  width: 200px;
  margin: 20px;
}
.edit-button {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 20px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 150px;
  will-change: transform;
}

.edit-button:hover {
  background-color: #ffffff96;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.edit-button:active {
  box-shadow: none;
  transform: translateY(0);
}
.delete-button {
  appearance: none;
  background-color: #000000;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 20px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 150px;
  will-change: transform;
}

.delete-button:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.delete-button:active {
  box-shadow: none;
  transform: translateY(0);
}

@media screen and (max-width: 840px) {
  .hero-img {
    flex-direction: column;
    align-items: center;
  }
  .hero-img img {
    width: 350px;
  }
}
@media screen and (max-width: 460px) {
  .buttons {
    flex-direction: column;
    align-items: center;
  }
  .buttons li button {
    margin: 7px;
  }
}
</style>
