<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'
const props = defineProps<{
  position: 'right' | 'left' | 'top' | 'bottom'
}>()
const toggle = ref(false)
const menuBtn = () => {
  toggle.value = !toggle.value
}
</script>

<template>
  <div>
    <TransitionRoot :show="toggle" appear as="template" enter="transform transition ease-in-out duration-[400ms]"
      enter-from="opacity-0 -translate-x-full" enter-to="opacity-100 translate-x-0"
      leave="transform duration-300 transition ease-in-out" leave-from="opacity-100 translate-x-0"
      leave-to="opacity-0 -translate-x-full ">
      <aside
        class="shadow w-60 h-full border-r border-black  dark:border-white bg-neutral-200  no-scrollbar overflow-y-scroll"
        aria-label="Sidebar">
        <button class="text-xl w-full" @click="menuBtn">
          <slot name="isOpenButton" />
        </button>
        <div class="h-full">
          <slot name="content" />
        </div>
      </aside>
    </TransitionRoot>
    <div v-show="!toggle" class="w-full h-full">
      <button @click="menuBtn"
        class="w-5 h-full flex gap-2 items-center justify-center px-1 py-2 border-r border-black dark:border-white animate-slide-in-left bg-light-400 dark:dark-900 hover:bg-light-900 dark:bg-dark-200">
        <slot name="isClosedButton" />
      </button>
    </div>
  </div>
</template>
