<template>
  <div class="words-list__flex">
    <div class="words-list__translation">
      <div class="words-list__dot">
        <div v-if="brailleDots[0]" class="words-list__ball"></div>
      </div>
      <div class="words-list__dot">
        <div v-if="brailleDots[1]" class="words-list__ball"></div>
      </div>
      <div class="words-list__dot">
        <div v-if="brailleDots[2]" class="words-list__ball"></div>
      </div>
    </div>

    <div class="words-list__translation">
      <div class="words-list__dot">
        <div v-if="brailleDots[3]" class="words-list__ball"></div>
      </div>
      <div class="words-list__dot">
        <div v-if="brailleDots[4]" class="words-list__ball"></div>
      </div>
      <div class="words-list__dot">
        <div v-if="brailleDots[5]" class="words-list__ball"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BrailleDots extends Vue {
  @Prop({ required: true }) readonly brailleDots!: boolean[];
}
</script>

<style lang="scss" scoped>
.words-list {
  &__flex {
    display: flex;
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
