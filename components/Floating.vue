<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col space-y-2 items-center justify-center w-48 h-auto">
    <div
      class="bg-opacity-25 bg-neutral-50 h-auto w-full cursor-pointer flex flex-col space-x-2 px-2 items-center justify-center bg-light-200 border border-black ">
      <div class="border-b border-black text-center flex w-full pt-1 justify-center items-center space-x-2">
        <Icon icon="clarity:administrator-solid" class="" />
        <span>{{ t('Platform') }}</span>
      </div>
      <div class="flex w-full pt-1 justify-between items-center">
        <div class="flex items-center justify-start space-x-2">
          <span>{{ t('Admin') }}</span>
        </div>
        <span>{{ t('Offline') }}</span>
      </div>
      <div class="flex w-full pt-1 justify-between items-center">
        <div class="flex items-center justify-start space-x-2">
          <span>{{ t('Visitors') }}</span>
        </div>
        <span>0</span>
      </div>
      <div class="flex w-full pt-1 justify-between items-center">
        <div class="flex items-center justify-start space-x-2">
          <span>{{ t('Customers') }}</span>
        </div>
        <span>0</span>
      </div>
    </div>
    <div
      class="bg-opacity-25 bg-neutral-50 h-auto w-full cursor-pointer flex flex-col space-x-2 px-2 items-center justify-center bg-light-200 border border-black ">
      <div class="border-b border-black text-center flex w-full pt-1 justify-center items-center space-x-2">
        <Icon icon="openmoji:flag-switzerland" class="" />
        <span>{{ t('Cluster') }}</span>
      </div>
      <div class="flex w-full pt-1 justify-between items-center">
        <div class="flex items-center justify-start space-x-2">
          <Icon icon="mdi:server" class="" />
          <div>Status</div>
        </div>
        <div>Off</div>
      </div>
      <div class="flex w-full pt-1 justify-between items-center">
        <div class="flex items-center justify-start space-x-2">
          <Icon icon="mdi:database" class="" />
          <div>Database</div>
        </div>
        <div>Off</div>
      </div>
      <div class="flex w-full pt-1 justify-between items-center">
        <div class="flex items-center justify-start space-x-2">
          <Icon icon="mdi:web" class="" />
          <div>Services</div>
        </div>
        <div>0/3</div>
      </div>
      <div class="flex w-full pt-1 justify-between items-center">
        <div class="flex items-center justify-start space-x-2">
          <Icon icon="fa-solid:memory" class="" />
          <div>RAM</div>
        </div>
        <div>0%</div>
      </div>
      <div class="flex w-full pt-1 justify-between items-center">
        <div class="flex items-center justify-start space-x-2">
          <Icon icon="material-symbols:memory" class="" />
          <div>CPU</div>
        </div>
        <div>0%</div>
      </div>
    </div>
  </div>
</template>
