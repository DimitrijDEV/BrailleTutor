<template>
  <div class="home">
    <div class="wrapper">
      <ul class="home-list">
        <li class="home-list__item">
          <i class="home-list__icon fas fa-font"></i>
          <router-link class="home-list__link" to="/alphabet"
            >Alphabet</router-link
          >
        </li>

        <li class="home-list__item">
          <i class="home-list__icon fas fa-calculator"></i>
          <router-link class="home-list__link" to="/numbers"
            >Numbers</router-link
          >
        </li>

        <li class="home-list__item">
          <i class="home-list__icon fas fa-icons"></i>
          <router-link class="home-list__link" to="/symbols"
            >Symbols</router-link
          >
        </li>

        <li class="home-list__item">
          <i class="home-list__icon fas fa-file-word"></i>
          <router-link class="home-list__link" to="/words">Words</router-link>
        </li>

        <li class="home-list__item">
          <i class="home-list__icon fas fa-book"></i>
          <router-link class="home-list__link" to="/dictionary"
            >Dictionary</router-link
          >
        </li>

        <li class="home-list__item">
          <i class="home-list__icon fas fa-pencil-alt"></i>
          <router-link class="home-list__link" to="/practice"
            >Practice</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
$orange: rgb(243, 182, 91);
.home {
  min-height: 92.5%;
  background-color: rgb(32, 32, 32);

  .wrapper {
    padding-top: 80px;
    width: 700px;
  }

  &-list {
    display: grid;
    grid-template-columns: 49% 49%;
    column-gap: 30px;
    row-gap: 60px;

    &__item {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    &__icon {
      background: white;
      color: black;
      padding: 20px 20px;
      border-radius: 50%;
      font-size: 40px;
      text-align: center;
      margin-bottom: 20px;
    }

    &__link {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: white;
    }

    &__link:hover {
      color: $orange;
    }
  }
}
</style>
