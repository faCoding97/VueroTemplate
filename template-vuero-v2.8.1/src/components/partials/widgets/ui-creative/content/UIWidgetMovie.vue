<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const props = withDefaults(
  defineProps<{
    title?: string
    picture?: string
    views?: string
  }>(),
  {
    title: 'عنوان فیلم کوتاه و مناسب',
    picture: 'https://via.placeholder.com/400x300',
    views: '',
  }
)
</script>

<template>
  <div class="widget-content">
    <img
      :src="props.picture"
      alt=""
      @error.once="onceImageErrored(400, 300)"
    >
    <div class="widget-meta">
      <i
        aria-hidden="true"
        class="iconify"
        data-icon="feather:play-circle"
      />
      <h4>{{ props.title }}</h4>
      <span class="views">
        <i
          aria-hidden="true"
          class="iconify"
          data-icon="feather:eye"
        />
        <span>{{ props.views }}</span>
      </span>
    </div>
  </div>
</template>
