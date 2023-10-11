<script setup lang="ts">
import { Icon } from '@iconify/vue'
const { t } = useI18n()

definePageMeta({
  layout: false,
})
</script>
<template>
  <div>
    <NuxtLayout name="default">
      <div class="w-full h-full flex imageSlideBg ">
        <div class="flex flex-col space-y-2 items-center justify-center w-full h-full px-16">
          <h1 class="text-2xl font-bold">Custom software solutions</h1>
          <div
            class="bg-opacity-25 bg-neutral-50 h-auto w-full lg:w-1/2 p-2 text-center flex flex-col items-center justify-center bg-light-200 border border-black ">
            <p>{{ t('Status') }}: <span class="text-red-900">
                This website site is under active development.
                Please come
                back later or contact me at <span class="font-bold text-emerald-900">jes@alejos.dev</span>
              </span></p>
            <p class="">Please consider leaving a small donation to help keep this site and its underlying web services
              afloat.</p>
          </div>
          <div to="/quotation"
            class="bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/2 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90">
            <span>{{ t('Quotation') }}</span>
            <icon icon="eos-icons:quota" class="" />
          </div>
          <div to="/contact"
            class="bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/2 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90">
            <span>{{ t('Contact') }}</span>
            <icon icon="fluent-mdl2:contact-heart" class="" />
          </div>
          <div to="/donate"
            class="bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/2 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90">
            <span>{{ t('Donate') }} </span>
            <Icon icon="mdi:donation" class="" />
          </div>
          <div to="/blog"
            class="bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/2 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90">
            <span>{{ t('Blog') }}</span>
            <Icon icon="material-symbols:star" class="" />
          </div>
          <div to="/about"
            class="bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/2 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90">
            <span>{{ t('About') }} </span>
            <Icon icon="mdi:about" class="" />
          </div>
        </div>
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
            ❆
          </div>
          <div class="snowflake">
            ❄
          </div>
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
            ❆
          </div>
          <div class="snowflake">
            ❄
          </div>
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
            ❆
          </div>
          <div class="snowflake">
            ❄
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<style scoped>
.imageSlideBg {
  background-image: url('/img/bg.jpg');
  background-size: cover;
  -webkit-animation: slidein 100s;
  animation: slidein 100s;

  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

@-webkit-keyframes slidein {
  from {
    background-position: top;
    background-size: 3000px;
  }

  to {
    background-position: -100px 0px;
    background-size: 2750px;
  }
}

@keyframes slidein {
  from {
    background-position: top;
    background-size: 3000px;
  }

  to {
    background-position: -100px 0px;
    background-size: 2750px;
  }

}



.center {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(75, 75, 250, 0.3);
  border-radius: 3px;
}

.center h1 {
  text-align: center;
  color: white;
  font-family: 'Source Code Pro', monospace;
  text-transform: uppercase;
}

/* customizable snowflake styling */
.snowflake {
  color: #000;
  font-size: 1em;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
}

@-webkit-keyframes snowflakes-fall {
  0% {
    top: -10%
  }

  100% {
    top: 100%
  }
}

@-webkit-keyframes snowflakes-shake {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px)
  }

  50% {
    -webkit-transform: translateX(80px);
    transform: translateX(80px)
  }

  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px)
  }
}

@keyframes snowflakes-fall {
  0% {
    top: -10%
  }

  100% {
    top: 100%
  }
}

@keyframes snowflakes-shake {
  0% {
    transform: translateX(0px)
  }

  50% {
    transform: translateX(80px)
  }

  100% {
    transform: translateX(0px)
  }
}

.snowflake {
  position: fixed;
  top: -10%;
  z-index: 9999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  -webkit-animation-name: snowflakes-fall, snowflakes-shake;
  -webkit-animation-duration: 10s, 3s;
  -webkit-animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-name: snowflakes-fall, snowflakes-shake;
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running
}

.snowflake:nth-of-type(0) {
  left: 1%;
  -webkit-animation-delay: 0s, 0s;
  animation-delay: 0s, 0s
}

.snowflake:nth-of-type(1) {
  left: 10%;
  -webkit-animation-delay: 1s, 1s;
  animation-delay: 1s, 1s
}

.snowflake:nth-of-type(2) {
  left: 20%;
  -webkit-animation-delay: 6s, .5s;
  animation-delay: 6s, .5s
}

.snowflake:nth-of-type(3) {
  left: 30%;
  -webkit-animation-delay: 4s, 2s;
  animation-delay: 4s, 2s
}

.snowflake:nth-of-type(4) {
  left: 40%;
  -webkit-animation-delay: 2s, 2s;
  animation-delay: 2s, 2s
}

.snowflake:nth-of-type(5) {
  left: 50%;
  -webkit-animation-delay: 8s, 3s;
  animation-delay: 8s, 3s
}

.snowflake:nth-of-type(6) {
  left: 60%;
  -webkit-animation-delay: 6s, 2s;
  animation-delay: 6s, 2s
}

.snowflake:nth-of-type(7) {
  left: 70%;
  -webkit-animation-delay: 2.5s, 1s;
  animation-delay: 2.5s, 1s
}

.snowflake:nth-of-type(8) {
  left: 80%;
  -webkit-animation-delay: 1s, 0s;
  animation-delay: 1s, 0s
}

.snowflake:nth-of-type(9) {
  left: 90%;
  -webkit-animation-delay: 3s, 1.5s;
  animation-delay: 3s, 1.5s
}
</style>

