<template>
  <v-layout wrap>
    <v-row>
      <v-row xs12 class="accent">
        <v-flex my-auto px-10 xs12 md4>
          <div>
            <h3>
              <v-img
                aspect-ratio="7"
                py-5
                :src="require('../assets/logo-text.png')"
              ></v-img>
            </h3>
          </div>
          <lottie
            :options="defaultOptions"
            :height="500"
            v-on:animCreated="handleAnimation"
          />
        </v-flex>
        <v-flex xs12 md8>
          <v-img
            :src="require('../assets/images/computer-type.jpg')"
            class="my-3"
            contain
            height="70%"
          ></v-img>
        </v-flex>
      </v-row>
      <v-row xs12 class="secondary">
        <v-flex xs12 md6>
          <h1 class="display-4" color="accent"></h1>
          <lottie :options="walkAnim" v-on:animCreated="handleAnimation" />
        </v-flex>
        <v-flex xs12 md6> </v-flex>
      </v-row>
      <v-row xs12>
        <v-flex xs12 md6> </v-flex>
        <v-flex xs12 md6>
          <lottie :options="codeAnim" v-on:animCreated="handleAnimation" />
        </v-flex>
      </v-row>
      <v-row xs12 class="secondary">
        <v-flex xs12 md6>
          <h1 class="display-4" color="accent"></h1>
        </v-flex>
        <v-flex xs12 md6> </v-flex>
      </v-row>
      <v-row xs12>
        <v-flex xs12 md4>
          <h1 class="display-4" color="accent"></h1>
        </v-flex>
        <v-flex xs12 md4>
          <v-img
            :src="require('../assets/images/working-charactor.png')"
            class="my-3"
            contain
            height="700"
          ></v-img>
        </v-flex>
        <v-flex xs12 md4>
          <h1 class="display-4" color="accent"></h1>
        </v-flex>
      </v-row>
      <v-row>
        <v-flex md6>
          <v-img
            :src="require('../assets/images/white-investing.png')"
            class="my-3"
            contain
            height="700"
          ></v-img>
        </v-flex>
      </v-row>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import Lottie from "./lottie.vue";

import Vue from "vue";
import * as animationData from "../assets/lottie/jump.json";
import * as walkingAnim from "../assets/lottie/walk.json";
import * as codingAnim from "../assets/lottie/code.json";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    lottie: Lottie
  },
  data: () => ({
    defaultOptions: { animationData: animationData.default },
    walkAnim: { animationData: walkingAnim.default },
    codeAnim: { animationData: codingAnim.default }
  }),
  methods: {
    handleAnimation(anim: any) {
      console.log("Animation started");
    }
  }
});
</script>
