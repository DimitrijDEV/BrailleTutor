<template>
  <div class="practice">
    <div v-if="words.length === 0" class="wrapper">
      <div class="practice-icon">
        <i class="fas fas fa-tasks"></i>
      </div>
      <practice-form @submit="extractInfo" />
    </div>

    <div v-else class="wrapper">
      <h3 class="practice__title">
        The current count words for testing is {{ words.length }}
      </h3>

      <div class="words-list">
        <braille-dots v-bind:brailleDots="randomWord.braille" />
      </div>

      <div class="practice-message">
        <p v-if="isWrongAnswer" class="practice-message__text">
          Your answer is wrong!
        </p>
      </div>

      <input
        v-model="fieldValue"
        :maxlength="inputLength"
        class="practice__input"
        placeholder="You need to type the answer"
        type="text"
        name="answer"
        id="answer"
      />
      <div class="practice-buttons">
        <button class="practice__cancel" @click="cancelAll()">Cancel</button>
        <button class="practice__next" @click="nextWord()">Next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Word } from "../classes/Word";
import { IWord } from "../interfaces";
import PracticeForm from "../views/Practice/PracticeForm.vue";
import BrailleDots from "../views/BrailleDots.vue";
@Component({
  components: {
    PracticeForm,
    BrailleDots,
  },
})
export default class Practice extends Vue {
  public words: IWord[] = [];
  public randomWord!: IWord;
  private fieldValue: string = "";
  private inputLength: number = 25;
  private isWrongAnswer: boolean = false;

  private async getData(route: string): Promise<IWord[]> {
    const response = await fetch(`http://localhost:5000${route}`),
      resObj = await response.json(),
      wordsArr: IWord[] = [];

    for (const word of resObj.info) {
      const { character, value } = word,
        newWord: IWord = new Word(`${character}`, value);

      wordsArr.push(newWord);
    }

    return wordsArr;
  }

  private async extractInfo(choice: string) {
    if (choice.length > 0) {
      this.words = await this.getData(`/${choice}`);
      this.randomWord = this.words[
        Math.floor(Math.random() * this.words.length)
      ];
    }
  }

  private nextWord() {
    if (this.randomWord.character === this.fieldValue) {
      this.words = this.words.filter(
        (obj) => obj.character !== this.fieldValue
      );
      this.randomWord = this.words[
        Math.floor(Math.random() * this.words.length)
      ];
      this.fieldValue = "";
      this.isWrongAnswer = false;
    } else {
      this.isWrongAnswer = true;
    }
  }

  private cancelAll() {
    this.words = [];
    this.isWrongAnswer = false;
  }
}
</script>

<style lang="scss" scoped>
@mixin set-button-style($color) {
  border: none;
  background: $color;
  color: white;
  font-size: 20px;
  border-radius: 4px;
  margin-top: 20px;
  padding: 5px 20px;
}

.practice {
  min-height: 92.5%;
  background-color: rgb(32, 32, 32);

  .wrapper {
    padding: 50px 0;
    width: 700px;
  }

  &-message {
    height: 22px;
    &__text {
      font-size: 18px;
      text-align: center;
      color: red;
    }
  }

  &-icon {
    padding-top: 100px;
    text-align: center;
    font-size: 300px;
  }

  .words-list {
    background: white;
    width: 50%;
    margin: 30px auto 30px auto;
    padding: 50px 0;
    border-radius: 10px;

    &__flex {
      justify-content: center;
    }
  }

  &__title {
    color: white;
    text-align: center;
    font-size: 26px;
  }

  &__input {
    display: block;
    background: none;
    color: white;
    border: none;
    font-size: 20px;
    padding: 0 5px 5px 5px;
    border-bottom: 1px solid black;
    width: 70%;
    margin: 30px auto 0 auto;
    height: 20px;
  }

  &-buttons {
    display: grid;
    grid-template-columns: 49% 49%;
    column-gap: 30px;
    width: 70%;
    margin: 0 auto;
  }

  &__next {
    @include set-button-style(green);
  }

  &__cancel {
    @include set-button-style(red);
  }
}
</style>
