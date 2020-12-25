<template>
  <form @submit.prevent="handleForm($event)" class="practice-form">
    <h3 class="practice-form__title">What do you want to check out?</h3>
    <select class="practice-form__select" name="choice" id="choice">
      <option
        v-for="(option, index) in options"
        v-bind:key="index"
        v-bind:value="option"
      >
        {{ option }}
      </option>
    </select>
    <button class="practice-form__button">Confirm</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PracticeForm extends Vue {
  private options: Array<string> = ["alphabet", "numbers", "symbols", "words"];

  private handleForm(event: any): void{
    const optionValue: string = event.target[0].value;
    this.$emit("submit", optionValue);
  } 
}
</script>

<style lang="scss" scoped>
.practice-form{
    display: flex;
    margin-top: 50px;

    &__title{
        font-size: 25px;
        margin-right: auto;
        color: white;
    }

    &__select{
        width: 100px;
        border-radius: 4px;
        margin-right: auto;
    }

    &__button{
        border: none;
        background: rgb(243, 182, 91);
        color: white;
        font-size: 18px;
        padding: 5px 20px;
    }
}
</style>
