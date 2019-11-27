<template>
  <v-layout wrap>
    <v-row>
      <v-col xs="12" md="12" class="accent">
        <v-row>
          <v-flex xs12 class="fill-height shapes">
            <img
              v-for="i in 7"
              :key="i"
              :src="require(`../assets/images/small/shaps${i}.png`)"
              alt=""
              :class="`shape shape${i} anim-${i}`"
            />
          </v-flex>
          <v-flex class="align-content-center" md1></v-flex>
          <v-flex class="align-content-center" my-auto pl-5 xs12 md3>
            <v-img
              aspect-ratio="6"
              class="big-logo"
              lazy
              :src="require('../assets/logo-text.png')"
            ></v-img>
            <v-flex mx-5 mt-10 pt-10>
              <p class="big-text align-content-center">
                We develop mobile/web applications
              </p>
            </v-flex>
          </v-flex>
          <v-flex xs12 md8>
            <v-img
              :src="require('../assets/images/computer-type.jpg')"
              contain
              height="90%"
            ></v-img>
          </v-flex>
        </v-row>
      </v-col>

      <v-col xs="12" md="12" class="accent">
        <v-row
          align="center"
          justify="center"
          no-gutters
          xs12
          class="secondary"
        >
          <v-col xs="12" md="8">
            <v-img
              :src="require('../assets/images/platforms.png')"
              contain
              width="100%"
            ></v-img
            ><!--
          <lottie :options="walkAnim" v-on:animCreated="handleAnimation" /> -->
          </v-col>
          <v-col xs="12" md="4" pl-10>
            <v-row>
              <v-col>
                <p class="big-text-2">
                  We can digitilize your company in no time.
                </p>
              </v-col>
            </v-row>
            <p class="big-text-3">
              Our team has helped in the development of many systems that are
              used today
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col xs="12" md="12" class="accent">
        <v-row no-gutters align="center" justify="center" xs12>
          <v-col xs="12" md="6">
            <v-card-text>
              <p color="secondary" class="display-1">
                We specialize in custom software and web development tailored
                exactly according to your unique business requirements.
              </p>
            </v-card-text>
          </v-col>
          <v-col xs="12" md="6">
            <lottie :options="codeAnim" v-on:animCreated="handleAnimation" />
          </v-col>
        </v-row>
      </v-col>

      <v-col xs="12" md="12" class="accent">
        <v-row xs12 class="secondary">
          <v-flex xs12 md6>
            <h1 class="display-4" color="accent"></h1>
          </v-flex>
          <v-flex xs12 md6> </v-flex>
        </v-row>
      </v-col>

      <v-col xs="12" md="12" class="accent">
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
      </v-col>

      <v-col xs="12" md="12" class="accent">
        <v-row no-gutters>
          <v-col md="6">
            <v-img
              :src="require('../assets/images/white-investing.png')"
              class="my-3"
              contain
              height="700"
            ></v-img>
          </v-col>
          <v-col md="3" offset-md="1">
            <v-card class="mx-auto">
              <v-card-text>
                <p class="display-1 text--primary">
                  Contact Us
                </p>
                <p class="caption text--primary">
                  Please fill in your details below and we will be sure to
                  contact you.
                </p>
                <v-row>
                  <v-col md="10" offset-md="1">
                    <v-text-field
                      v-model="message"
                      outlined
                      clearable
                      label="Your name"
                      prepend-inner-icon="mdi-account"
                      type="text"
                    />
                  </v-col>
                  <v-col md="10" offset-md="1">
                    <v-text-field
                      v-model="message"
                      outlined
                      clearable
                      label="Your email"
                      prepend-inner-icon="mdi-email"
                      type="email"
                    />
                  </v-col>
                  <v-col md="12">
                    <v-btn block color="primary">
                      Submit
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-card-text>
                <p class="display-1 text--primary">
                  Not a forms person?
                </p>
                <v-btn text color="primary">
                  Send us a direct email
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
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

<style lang="scss" scoped>
@mixin font($font-family, $font-file) {
  @font-face {
    font-family: $font-family;
    src: /* url($font-file+".eot");
    src: url($font-file+".eot?#iefix") format("embedded-opentype"),
      url($font-file+".woff") format("woff"),
      url($font-file+".svg#aller") format("svg");*/ url($font-file+".ttf")
      format("truetype");
    font-weight: normal;
    font-style: normal;
  }
}

@include font("Aquawax-Bold", "../assets/fonts/Aquawax_Black_Trial");

.logo-text {
  font-family: "Aquawax-Bold" arial, sans-serif;
}

.big-text {
  /*font-family: "Merriweather", serif;
  font-family: 'Faster One', cursive;
font-family: 'Merriweather', serif;
  font-family: "Kaushan Script", cursive;*/
  position: absolute;
  z-index: 3;
  font-family: "Lobster", cursive;
  margin-left: -5%;
  font-weight: 400;
  font-size: 2.5vw;
  opacity: 0.5;
}

.big-text-2 {
  /*font-family: "Merriweather", serif;
  font-family: 'Faster One', cursive;
  font-family: 'Merriweather', serif;
  font-family: "Kaushan Script", cursive;*/
  position: absolute;
  margin-left: -15%;
  margin-top: -10%;
  color: white;
  font-family: "Lato", serif;
  font-weight: 600;
  font-size: 2.5vw;
}

.big-text-3 {
  /*font-family: "Merriweather", serif;
  font-family: 'Faster One', cursive;
  font-family: 'Merriweather', serif;
  font-family: "Kaushan Script", cursive;*/
  position: absolute;
  margin-left: -10%;
  margin-top: -5%;
  padding-right: 30px;
  color: white;
  font-family: "Lato", serif;
  font-weight: 300;
  font-size: 1.5vw;
}

.shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shapes .shape {
  position: absolute;
  z-index: 2;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}

.shapes .shape1 {
  left: 46%;
  top: 10%;
}
.shapes .shape2 {
  left: 17%;
  top: 20%;
}
.shapes .shape3 {
  left: 65%;
  top: 10%;
}
.shapes .shape4 {
  left: 50%;
  top: 5%;
}
.shapes .shape5 {
  left: 40%;
  top: 23%;
}
.shapes .shape6 {
  left: 10%;
  top: 10%;
}
.shapes .shape7 {
  left: 30%;
  top: 15%;
}

.anim-1 {
  -webkit-animation: animate-1 2s linear infinite;
  animation: animate-1 1s linear infinite;
}

.anim-2 {
  -webkit-animation: animate-2 2s linear infinite;
  animation: animate-2 1s linear infinite;
}

.anim-3 {
  -webkit-animation: animate-3 4s linear infinite;
  animation: animate-3 4s linear infinite;
}

.anim-4 {
  -webkit-animation: animate-4 4s linear infinite;
  animation: animate-4 4s linear infinite;
}

.anim-5 {
  -webkit-animation: animate-5 2s linear infinite;
  animation: animate-5 1s linear infinite;
}

.anim-6 {
  -webkit-animation: animate-6 2s linear infinite;
  animation: animate-6 3s linear infinite;
}

.anim-7 {
  -webkit-animation: animate-7 2s linear infinite;
  animation: animate-7 1s linear infinite;
}

@keyframes animate-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes animate-2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes animate-3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes animate-4 {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes animate-5 {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  50% {
    -webkit-transform: translateX(40px);
    transform: translateX(40px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes animate-6 {
  0% {
    -webkit-transform: translateX(0) rotate(0);
    transform: translateX(0) rotate(0);
  }

  50% {
    -webkit-transform: translateX(40px) rotate(360deg);
    transform: translateX(90px) rotate(360deg);
  }

  100% {
    -webkit-transform: translateX(0) rotate(0);
    transform: translateX(0) rotate(0);
  }
}

@keyframes animate-7 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }

  50% {
    -webkit-transform: translate(50px);
    transform: translate(50px);
  }

  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
</style>
