<template>
  <li class="words-list__item">
    <div class="words-list__character">
      <h3 class="words-list__title">Character</h3>
      <p class="words-list__text">{{ word.character }}</p>
    </div>

    <div class="words-list__braille">
      <h3 class="words-list__title">Braille</h3>
      <div class="words-list__flex">
        <div class="words-list__translation">
          <div class="words-list__dot">
            <div v-if="word.braille[0]" class="words-list__ball"></div>
          </div>
          <div class="words-list__dot">
            <div v-if="word.braille[1]" class="words-list__ball"></div>
          </div>
          <div class="words-list__dot">
            <div v-if="word.braille[2]" class="words-list__ball"></div>
          </div>
        </div>

        <div class="words-list__translation">
          <div class="words-list__dot">
            <div v-if="word.braille[3]" class="words-list__ball"></div>
          </div>
          <div class="words-list__dot">
            <div v-if="word.braille[4]" class="words-list__ball"></div>
          </div>
          <div class="words-list__dot">
            <div v-if="word.braille[5]" class="words-list__ball"></div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IWord } from "../interfaces";

@Component
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

  &__text {
    font-size: 34px;
    color: $color;
    font-weight: bolder;
    text-align: center;
  }

  &__flex {
    display: flex;
  }

  &__character {
    margin: 0 100px 0 40px;
  }

  &__braille {
    margin: 0 150px 0 auto;
  }

  &__translation {
    display: flex;
    flex-direction: column;
  }

  &__dot {
    border: 1px solid black;
    margin: 0 5px 10px 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  &__ball {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: black;
  }
}
</style>
