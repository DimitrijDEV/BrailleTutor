<template>
  <div class="dictionary">
    <div v-if="words.length > 0" class="wrapper">
      <ul class="words-list">
        <word-item
          v-for="(word, index) in words"
          v-bind:key="index"
          v-bind:word="word"
        />
      </ul>

      <button class="dictionary__button" @click="clearAllResults()">Clear All</button>
    </div>

    <div v-else class="wrapper">
      <div class="dictionary-icon">
        <i class="fas fa-language"></i>
      </div>

      <search-form @submit="extractInfo" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Word } from "../classes/Word";
import { IWord } from "../interfaces";
import WordItem from "../views/WordItem.vue";
import SearchForm from "../views/Dictionary/SearchForm.vue";

@Component({
  components: {
    SearchForm,
    WordItem,
  },
})
export default class Dictionary extends Vue {
  public words: IWord[] = [];

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

  private async extractInfo(text: string, choice: string) {
    if (text.length > 0 && choice.length > 0) {
      const wordsArr: IWord[] = await this.getData(`/${choice}`);
      this.words = wordsArr.filter((obj) => obj.character.includes(text));
    }
  }

  private clearAllResults(){
      this.words = [];
  }
}
</script>

<style lang="scss" scoped>
.dictionary {
  min-height: 92.5%;
  background-color: rgb(32, 32, 32);

  .wrapper {
    padding: 50px 0;
    width: 600px;
  }

  &-icon {
    padding-top: 100px;
    text-align: center;
    font-size: 300px;
  }

  &__button{
      background: rgb(243, 91, 91);
      font-size: 25px;
      border-radius: 4px;
      color: white;
      font-weight: bolder;
      width: 100%;
      border: none;
  }
}
</style>
