<template>
  <div id="app">
    <div
      :style="{ backgroundColor: state.randomColor }"
      class="np-color-preview"
    ></div>
    <button @click="getRandomColor" class="np-btn">
      Generate random color
    </button>
    <h1>
      <span class="hexValue">{{ state.randomColor }}</span>
    </h1>
  </div>
</template>
//헥사코드 값을 던지면 어울릴색
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      randomColor: "#ff0000",
    });

    function getRandomColor() {
      state.randomColor = generateRandomHexColor()!;
    }

    function generateRandomHexColor() {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      if (randomColor.length !== 7) {
        return generateRandomHexColor();
      } else {
        return randomColor;
      }
    }

    return {
      state,
      getRandomColor,
      generateRandomHexColor,
    };
  },
});
</script>

<style>
.np-color-preview {
  padding: 6px;
  border-radius: 4px;
  color: #fff;
}
.np-btn {
  margin-top: 12px;
  background: #eee;
  border: 0px;
  padding: 6px 10px;
  border-radius: 4px;
  background: rgb(0, 70, 201);
  color: #fff;
  cursor: pointer;
}
</style>
