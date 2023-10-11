<script setup lang="ts">
definePageMeta({
  layout: false,
})
const formattedContent = ref()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.public.apiUrl
const { data: pageResponse } = await useFetch<any>(`${baseURL}/api/${route.params.application}/page/${route.params.id}`)
if (pageResponse.value !== null)
  formattedContent.value = pageResponse.value.content.rendered
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div class="w-full h-full group mt-36 border-t">
        <div
          class="w-full h-auto text-center text-var(--color) min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed">
          <div v-html="formattedContent"></div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
