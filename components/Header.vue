<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const { t } = useI18n()
</script>
<template>
  <div>
    <div class="w-full h-6 flex items-center p-2 justify-between bg-neutral-50 text-neutral-900 border-b border-black ">
      <div class="flex space-x-2 items-center justify-center w-auto">
        <button type="button" class="font-bold">
          ES
        </button>
        <button type="button">
          EN
        </button>
      </div>
      <div class="flex space-x-2 items-center justify-center w-auto">
        <div to="/products"
          class="underline cursor-pointer  flex space-x-2 items-center justify-center hover:font-bold hover:text-rose-500">
          <span>{{ t('Products') }} </span>
          <Icon icon="carbon:caret-right" class="" />
        </div>
        <div to="/solutions"
          class="underline cursor-pointer hover:font-bold flex space-x-2 items-center justify-center hover:text-rose-500">
          <span>{{ t('Solutions') }} </span>
          <Icon icon="carbon:caret-right" class="" />
        </div>
        <div to="/services"
          class="underline cursor-pointer  flex space-x-2 items-center justify-center hover:font-bold hover:text-rose-500">
          <span>{{ t('Services') }} </span>
          <Icon icon="carbon:caret-right" class="" />
        </div>
      </div>
    </div>
  </div>
</template>
