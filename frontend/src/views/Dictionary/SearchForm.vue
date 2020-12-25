<template>
  <form @submit.prevent="handleForm($event)" class="home-form">
    <input
      class="home-form__input"
      v-model="fieldValue"
      :maxlength="inputLength"
      type="search"
      placeholder="What are you looking for?"
      name="search"
    />

    <select class="home-form__select" name="choice" id="choice">
      <option
        v-for="(option, index) in options"
        v-bind:key="index"
        v-bind:value="option"
      >
        {{ option }}
      </option>
    </select>
    <button class="home-form__button">Search</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchForm extends Vue {
  private fieldValue: string = "";
  private inputLength: number = 15;
  private options: Array<string> = ["alphabet", "numbers", "symbols", "words"];

  private handleForm(event: any): void{
    const optionValue: string = event.target[1].value;
    this.$emit("submit", this.fieldValue, optionValue);
    this.fieldValue = "";
  }  
}
</script>

<style lang="scss" scoped>
.home-form {

  display: grid;
  grid-template-columns: 60% 20% 20%;

  &__input {
    padding: 3px 5px;
    font-size: 17px;
  }

  &__select{
    font-size: 15px;
  }

  &__button{
    cursor: pointer;
    font-size: 17px;
    color: white;
    background: rgb(243, 182, 91);
    border: 0;
  }
}
</style>
