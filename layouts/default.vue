<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const { t } = useI18n()
</script>
<template>
  <main class="relative flex flex-col no-scrollbar overflow-y-scroll h-screen w-screen text-black text-sm bg-neutral-100
      font-sans subpixel-antialiased slashed-zero diagonal-fractions">
    <Header class="w-screen h-auto" />
    <div class="flex w-full h-full">
      <!-- Slide in menu start -->
      <SlideInPanel class="absolute h-full w-auto" position="left">
        <template #isOpenButton>
          <div class="flex items-center justify-end w-full ">
            {{ t('Toggle') }}
            <Icon class="transform" icon="carbon:caret-left" />
          </div>
        </template>
        <template #isClosedButton>
          <Icon icon="carbon:caret-right" />
        </template>
        <template #content>
          <UserCard />
          <SideMenu />
        </template>
      </SlideInPanel>
      <!-- Main panel start -->
      <section as="div" class="w-full h-full">
        <slot />
      </section>
    </div>
    <!-- Floating button group start -->
    <section class="absolute bottom-0 right-0 p-1 z-10 w-auto h-auto">
      <Floating />
    </section>
  </main>
</template>
