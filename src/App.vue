<template>
  <v-app>
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
// @see https://docs.nativescript.org/ui/styling
@import "assets/variables";
.faded-blue {
  background: linear-gradient(
    to bottom right,
    #eeeeee,
    #0093a4,
    #0093a4,
    #eeeeee
  );
}

.bgBlueDark {
  background-color: $blueDarkColor;
}

.mdi {
  font-family: "Material Design Icons", "materialdesignicons";
}

.smallText {
  font-size: 12.5em;
}

.tinyText {
  font-size: 8.5em;
}

.smallTitle {
  text-decoration-color: $blueColor;
  text-decoration: underline;
}

.iconPic {
  vertical-align: middle;
  text-align: center;
  font-size: 100;
}

.activeText {
  color: $blueLightColor;
}

.bg-white {
  background-color: $whiteColor;
}

.chip-selected {
  background-color: rgba(158, 158, 158, 0.5);
}

.bg-light-blue {
  background-color: $blueColor;
}

.bg-dark-blue {
  background-color: $blueDarkColor;
}

.bg-light-green {
  background-color: $greenColor;
}

.bg-light-red {
  background-color: $redColor;
}

.text-light-blue {
  color: $blueColor;
}

.text-dark-blue {
  color: $blueDarkColor;
}

.text-light-red {
  color: $redColor;
}

.text-light-green {
  color: $greenColor;
}

.text-white {
  color: white;
}

.bg-white {
  background-color: white;
}

.left-red-border {
  border-left-color: $redColor;
  border-left-width: 10px;
}

.left-blue-border {
  border-left-color: $blueDarkColor;
  border-left-width: 10px;
}

.bottom-blue-border {
  border-bottom-color: $blueDarkColor;
  border-bottom-width: 5px;
}

.right-red-border {
  border: 3px solid $redColor;
}

.right-grey-border {
  border-right-color: rgba(158, 158, 158, 0.5);
  border-right-width: 2px;
}

.right-blue-border {
  border-right: 3px solid $blueDarkColor;
}

.circle {
  position: relative;
  border-radius: 50%;
  width: 25%;
  height: auto;
}

.bottom-line-red {
  border-bottom-color: $redColor;
  border-bottom-width: 5px;
}

.bottom-line-blue {
  border-bottom-color: $blueColor;
  border-bottom-width: 8px;
}

.patternBG {
  background: linear-gradient(to bottom, #eeeeee, white);
  clip-path: polygon(31% 31%, 34% 50%, 58% 50%, 69% 78%, 79% 56%, 51% 62%);
}

.m-top-5 {
  margin-top: -5px;
  z-index: 99;
}

.m-top-10 {
  margin-top: -10px;
  z-index: 99;
}

.m-top-15 {
  margin-top: -15px;
  z-index: 99;
}

.m-top-20 {
  margin-top: -20px;
  z-index: 99;
}
</style>
