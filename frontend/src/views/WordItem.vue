<template>
  <li class="words-list__item">
    <div class="words-list__character">
      <h3 class="words-list__title">Character</h3>
      <p class="words-list__text">{{ word.character }}</p>
    </div>

    <div class="words-list__braille">
      <h3 class="words-list__title">Braille</h3>
      <braille-dots v-bind:brailleDots="word.braille" />
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IWord } from "../interfaces";
import BrailleDots from "./BrailleDots.vue";

@Component({
  components: {
    BrailleDots,
  },
})
export default class WordItem extends Vue {
  @Prop({ required: true }) readonly word!: IWord;
}
</script>

<style lang="scss" scoped>
.words-list {
  $color: rgb(243, 91, 91);

  &__item {
    display: flex;
    background-color: white;
    margin-bottom: 30px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 10px;
  }

  &__title {
    text-align: left;
    margin-bottom: 10px;
  }

  &__character {
    margin: 0 100px 0 40px;
  }

  &__text {
    font-size: 34px;
    color: $color;
    font-weight: bolder;
    text-align: center;
  }

  &__braille {
    margin: 0 150px 0 auto;
  }
}
</style>
