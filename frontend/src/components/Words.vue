<template>
  <div class="words">
    <div class="wrapper">
      <ul v-if="words.length > 0" class="words-list">
        <word-item
          v-for="(word, index) in words"
          v-bind:key="index"
          v-bind:word="word"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WordItem from "../views/WordItem.vue";
import { IWord } from "../interfaces";
import { Word } from "../classes/Word";

@Component({
  components: {
    WordItem,
  },
})
export default class Header extends Vue {
  public words: IWord[] = [];

  private async getData(route: string): Promise<IWord[]> {
    const response = await fetch(`http://localhost:5000${route}`),
      resObj = await response.json(),
      wordsArr: IWord[] = [];

    for (const word of resObj.info) {
      const { character, value } = word,
        newWord: IWord = new Word(character, value);

      wordsArr.push(newWord);
    }

    return wordsArr;
  }

  async created() {
    switch (this.$route.name) {
      case "Alphabet":
        this.words = await this.getData(this.$route.path);
        console.log(this.words);
        break;
      case "Numbers":
        this.words = await this.getData(this.$route.path);
        break;
      case "Symbols":
        this.words = await this.getData(this.$route.path);
        break;
      case "Words":
        this.words = await this.getData(this.$route.path);
        break;

      default:
        console.log("We didn't find anything");
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
.words {
  min-height: 92.5%;
  background-color: rgb(32, 32, 32);

  .wrapper {
    padding: 50px 0;
    width: 700px;
  }
}
</style>
