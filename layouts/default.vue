<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const { t } = useI18n()
</script>
<template>
  <main class="relative flex flex-col no-scrollbar overflow-y-scroll h-screen w-screen text-black dark:text-white text-sm bg-neutral-100
      font-sans subpixel-antialiased slashed-zero diagonal-fractions">
    <Header class="w-screen h-auto" />
    <div class="flex w-full h-full">
      <!-- Slide in menu start -->
      <SlideInPanel class="h-full w-auto" position="left">
        <template #isOpenButton>
          <div class="flex items-center justify-end w-full ">
            <Icon class="transform" icon="carbon:caret-left" />
          </div>
        </template>
        <template #isClosedButton>
          <Icon icon="carbon:caret-right" />
        </template>
        <template #content>
          <!-- <UserCard /> -->
          <!-- <SideMenu /> -->
        </template>
      </SlideInPanel>
      <!-- Main panel start -->
      <section as="div" class="w-full h-full">
        <slot />
      </section>
    </div>
    <!-- Floating button group start -->
    <section class="absolute bottom-0 right-0 p-1">
      <div
        class="bg-light-200 dark:bg-dark-200 border border-black dark:border-white rounded  h-12 w-12 flex justify-center items-center cursor-pointer bg-light-900 dark:bg-dark-900">
        <Icon icon="carbon:caret-up" />
      </div>
    </section>
  </main>
</template>
