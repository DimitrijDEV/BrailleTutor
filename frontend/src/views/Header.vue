<template>
  <header class="header">
    <div class="wrapper">
      <router-link class="header__logo" to="/">
        <i class="fas fa-language"></i>
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  background-color: rgb(0, 0, 0);
  padding: 14px 0;
  position: relative;
  z-index: 2;

  .wrapper {
    display: flex;
  }

  &__logo {
    font-size: 40px;
    margin: auto auto auto 0;
    color: white;
  }

  &__list {
    display: flex;
  }

  &__item {
    margin: auto 60px auto 0;
    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    font-size: 19px;
    letter-spacing: 1px;
    color: white;
  }
}
</style>
