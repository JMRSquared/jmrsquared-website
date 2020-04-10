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
              width="100%"
              :src="require('../assets/logo-text.png')"
            ></v-img>
            <v-flex mx-5 mt-10 pt-10>
              <p class="big-text align-content-center">
                We develop mobile & web applications
              </p>
            </v-flex>
          </v-flex>
          <v-flex xs12 md8>
            <v-img
              :src="require('../assets/images/computer-type.jpg')"
              contain
              height="100%"
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
            ></v-img>
          </v-col>
          <v-col xs="12" md="4" class="pl-10 ml-n10">
            <v-row>
              <v-col cols="12" xs="12">
                <p class="big-text-2">
                  We can digitalize your company in no time.
                </p>
              </v-col>
              <v-col cols="12" xs="12" class="expertise-list">
                <v-list two-line flat color="transparent" dark shaped>
                  <v-list-item-group color="accent">
                    <v-list-item v-for="(item, i) in expertise" :key="i">
                      <v-list-item-content>
                        <v-list-item-text
                          class="text-start body-1"
                          v-text="item"
                        ></v-list-item-text>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col xs="12" md="12" class="accent">
        <v-row no-gutters align="center" justify="center" xs12>
          <v-col xs="12" md="6">
            <v-card-text
              style="position:absolute;width:60%;margin-top:-10%;margin-left:10%"
            >
              <p class="display-1 text-secondary">
                We specialize in custom software and web development tailored
                exactly according to your unique business requirements.
              </p>
              <v-list max-width="50%" rounded>
                <v-subheader>Our services</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(item, i) in services" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.name"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
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
        <v-row xs12 justify="center">
          <v-col class="mx-auto center" xs="12" md="12">
            <p class="display-1 text-center text-secondary">
              Some of our cool projects
            </p>
          </v-col>
          <v-col xs="12" md="4">
            <v-row>
              <v-col md="12">
                <v-card
                  class="mx-10"
                  href="https://coportal.net"
                  target="_blank"
                  @mouseover="hoveredClient = 0"
                  @mouseleave="hoveredClient = -1"
                  :color="hoveredClient == 0 ? 'primary' : 'white'"
                  :dark="hoveredClient == 0"
                >
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-img
                        size="12"
                        max-width="50%"
                        aspect-ratio="2"
                        height="auto"
                        src="https://coportal.net/img/logo_small.466beb9d.png"
                      ></v-img>

                      <v-row align="center" justify="end">
                        <v-icon mx-2 left>
                          mdi-tablet-cellphone
                        </v-icon>

                        <v-icon mx-2 left>
                          mdi-web
                        </v-icon>
                        <v-icon mx-2 left>
                          mdi-database
                        </v-icon>
                      </v-row>
                    </v-list-item>
                  </v-card-actions>
                  <v-card-text class="body-1 font-weight-bold">
                    Client
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col md="12">
                <v-card
                  class="mx-10"
                  href="https://play.google.com/store/apps/details?id=com.jmrsquared.sinister"
                  target="_blank"
                  @mouseover="hoveredClient = 1"
                  @mouseleave="hoveredClient = -1"
                  :color="hoveredClient == 1 ? 'primary' : 'white'"
                  :dark="hoveredClient == 1"
                >
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-img
                        size="12"
                        max-width="50%"
                        aspect-ratio="1"
                        height="auto"
                        src="https://lh3.googleusercontent.com/q7iUCfD9EeqIfQp5jyjGOESPiF5eMLTpuwp7eVAZdcqPpZV4aepySBdyddkNroG48Q"
                      ></v-img>

                      <v-row align="center" justify="end">
                        <v-icon mx-2 left>
                          mdi-tablet-cellphone
                        </v-icon>
                        <v-icon mx-2 left>
                          mdi-database
                        </v-icon>
                      </v-row>
                    </v-list-item>
                  </v-card-actions>
                  <v-card-text class="body-1 font-weight-bold">
                    In-House
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col md="12">
                <v-card
                  class="mx-10"
                  href="https://tsingamo.com"
                  target="_blank"
                  @mouseover="hoveredClient = 2"
                  @mouseleave="hoveredClient = -1"
                  :color="hoveredClient == 2 ? 'primary' : 'white'"
                  :dark="hoveredClient == 2"
                >
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-img
                        size="12"
                        max-width="50%"
                        aspect-ratio="2"
                        height="auto"
                        src="https://tsingamo.com/static/logo.png"
                      ></v-img>

                      <v-row align="center" justify="end">
                        <v-icon mx-2 left>
                          mdi-web
                        </v-icon>
                      </v-row>
                    </v-list-item>
                  </v-card-actions>
                  <v-card-text class="body-1 font-weight-bold">
                    Client
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <h1 class="display-4" color="accent"></h1>
          </v-col>
          <v-col class="fill-height my-auto" xs="12" md="4">
            <v-img
              :src="require('../assets/images/working-charactor.png')"
              class="my-3"
              contain
              height="700"
            ></v-img>
          </v-col>
          <v-col xs="12" md="4">
            <v-row>
              <v-col md="12">
                <v-card
                  class="mx-10"
                  href="https://play.google.com/store/apps/details?id=com.jmrsquared.jmrsquaredapp"
                  target="_blank"
                  @mouseover="hoveredClient = 3"
                  @mouseleave="hoveredClient = -1"
                  :color="hoveredClient == 3 ? 'primary' : 'white'"
                  :dark="hoveredClient == 3"
                >
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-img
                        size="12"
                        max-width="50%"
                        aspect-ratio="2"
                        height="auto"
                        :src="require('../assets/logo.png')"
                      ></v-img>

                      <v-row align="center" justify="end">
                        <v-icon mx-2 left>
                          mdi-tablet-cellphone
                        </v-icon>

                        <v-icon mx-2 left>
                          mdi-monitor-dashboard
                        </v-icon>
                        <v-icon mx-2 left>
                          mdi-database
                        </v-icon>
                      </v-row>
                    </v-list-item>
                  </v-card-actions>
                  <v-card-text class="body-1 font-weight-bold">
                    In-House
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col md="12">
                <v-card
                  class="mx-10"
                  href="https://play.google.com/store/apps/details?id=com.vhq.varsityandroid"
                  @mouseover="hoveredClient = 5"
                  @mouseleave="hoveredClient = -1"
                  :color="hoveredClient == 5 ? 'primary' : 'white'"
                  :dark="hoveredClient == 5"
                >
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-img
                        size="12"
                        max-width="50%"
                        aspect-ratio="1"
                        height="auto"
                        src="https://lh3.googleusercontent.com/tfRc-azFXBFB4y6-XWTd5cUaVq4VxUvJkKkJBhlojvi0ul3NtF9UMUdcFO0wttCo1g=s180-rw"
                      ></v-img>

                      <v-row align="center" justify="end">
                        <v-icon mx-2 left>
                          mdi-tablet-cellphone
                        </v-icon>
                        <v-icon mx-2 left>
                          mdi-database
                        </v-icon>
                      </v-row>
                    </v-list-item>
                  </v-card-actions>
                  <v-card-text class="body-1 font-weight-bold">
                    Client
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col md="12">
                <v-card
                  class="mx-10"
                  @mouseover="hoveredClient = 4"
                  @mouseleave="hoveredClient = -1"
                  :color="hoveredClient == 4 ? 'primary' : 'white'"
                  :dark="hoveredClient == 4"
                >
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-img
                        size="12"
                        max-width="50%"
                        aspect-ratio="2"
                        height="auto"
                        src="https://raw.githubusercontent.com/Lavhe/Uzzie/master/Uzzie/Content/img/Lushaka.png"
                      ></v-img>

                      <v-row align="center" justify="end">
                        <v-icon mx-2 left>
                          mdi-server
                        </v-icon>
                        <v-icon mx-2 left>
                          mdi-database
                        </v-icon>
                      </v-row>
                    </v-list-item>
                  </v-card-actions>
                  <v-card-text class="body-1 font-weight-bold">
                    Client
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <h1 class="display-4" color="accent"></h1>
          </v-col>
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
                      v-model="name"
                      outlined
                      clearable
                      label="Your name"
                      prepend-inner-icon="mdi-account"
                      type="text"
                    />
                  </v-col>
                  <v-col md="10" offset-md="1">
                    <v-text-field
                      v-model="email"
                      outlined
                      clearable
                      label="Your email"
                      prepend-inner-icon="mdi-email"
                      type="email"
                    />
                  </v-col>
                  <v-col md="10" offset-md="1">
                    <v-textarea
                      v-model="message"
                      outlined
                      clearable
                      label="Your message"
                      prepend-inner-icon="mdi-message"
                      type="text"
                    />
                  </v-col>
                  <v-col md="12">
                    <v-btn
                      @click="submitForm()"
                      :loading="isLoading"
                      block
                      color="primary"
                    >
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
                <v-btn
                  target="_blank"
                  href="mailto:info@jmrsquared.com?subject=I%20visited%20your%20website&body=I%20need%20help%20with%20...."
                  text
                  color="primary"
                >
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

<script>
import Lottie from "./lottie.vue";

import Vue from "vue";
import * as codingAnim from "../assets/lottie/code.json";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    lottie: Lottie
  },
  data: () => ({
    email: "",
    name: "",
    message: "",
    isLoading: false,
    codeAnim: { animationData: codingAnim.default },
    hoveredClient: -1,
    expertise: [
      `Our solutions are tailored exactly according to your unique business requirements.`,
      `Our team has assisted in thhandleAnimatione development and growth of many systems.`,
      `Let us help build your brand and take your business to new heights.`,
      `We translate your business ideas to showcase online at an affordable rate.`,
      `We deliver the highest quality products and services with guaranteed satisfaction.`
    ],
    services: [
      {
        name: "Software development",
        icon: "mdi-code-tags"
      },
      {
        name: "Mobile Application Development ",
        icon: "mdi-tablet-cellphone"
      },
      {
        name: "Web Application Development",
        icon: "mdi-web"
      },
      {
        name: "Database Management and Development",
        icon: "mdi-database"
      },
      {
        name: "Server maintainance and Cloud Deployments",
        icon: "mdi-server"
      },
      {
        name: "Dashboards and Data visualization",
        icon: "mdi-monitor-dashboard"
      },
      {
        name: "Automation and Manual Testing",
        icon: "mdi-test-tube"
      }
    ]
  }),
  methods: {
    submitForm(anim) {
      this.isLoading = true;
    }
  }
});
</script>

<style lang="scss" scoped>
@mixin font($font-family, $font-file) {
  @font-face {
    font-family: $font-family;
    src: url($font-file+".ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
}

.text-secondary {
  color: #0093a4;
}

@include font("Aquawax-Bold", "../assets/fonts/Aquawax_Black_Trial");

.logo-text {
  font-family: "Aquawax-Bold" arial, sans-serif;
}

.big-text {
  position: absolute;
  z-index: 3;
  font-family: "Lobster", cursive;
  margin-left: -5%;
  font-weight: 400;
  font-size: 2.5vw;
  opacity: 0.5;
}

.big-text-2 {
  position: absolute;
  margin-left: -15%;
  margin-top: -15%;
  color: white;
  font-family: "Lato", serif;
  font-weight: 600;
  font-size: 2.5vw;
}

.expertise-list {
  position: absolute;
  margin-left: -5%;
  margin-top: -5%;
  font-size: 2.1vw;
  padding-right: 30px;
  color: white;
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
