<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    content?: string
  }>(),
  {
    title: 'Title',
    content: 'Get familiar with Vuero components.نمونه کد گنجانده شده است.',
  }
)
</script>

<template>
  <div class="hub-card">
    <div class="hub-card-body">
      <div class="inner-content">
        <h3 class="title is-5 is-narrow is-thin">
          {{ props.title }}
        </h3>
        <p class="light-text">
          {{ props.content }}
        </p>
      </div>
      <slot name="icon" />
    </div>
    <div class="hub-card-foot">
      <slot />
    </div>
  </div>
</template>
