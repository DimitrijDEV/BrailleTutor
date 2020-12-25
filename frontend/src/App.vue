<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./views/Header.vue";

@Component({
  components: {
    Header
  },
})
export default class App extends Vue {}
</script>

 
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

li {
  list-style: none;
}

a {
  color: black;
  text-decoration: none;
  outline: none;
  cursor: pointer;
}

button {
  background: none;
  cursor: pointer;
  outline: none;
  border: 1px solid black;
}

input {
  border: 1px solid rgb(112, 112, 112);
}

html,
body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}

.wrapper {
  width: 700px;
  margin: 0 auto;
}
</style>

