<script setup lang="ts">
const emit = defineEmits(['rename', 'collapse'])
</script>

<template>
  <VDropdown
    icon="feather:more-vertical"
    right
    :options="{ clickOutside: false }"
  >
    <template #content>
      <a
        class="dropdown-item kanban-rename kill-drop"
        role="button"
        tabindex="0"
        @keydown.space.prevent="emit('rename')"
        @click="emit('rename')"
      >
        تغییر نام
      </a>
      <a
        class="dropdown-item kanban-collapse kill-drop"
        role="button"
        tabindex="0"
        @keydown.space.prevent="emit('collapse')"
        @click="emit('collapse')"
      >
        جمع
      </a>
      <hr class="dropdown-divider">
      <div class="dropdown-item has-child">
        تنظیمات
        <i
          aria-hidden="true"
          class="iconify rtl-reflect"
          data-icon="feather:chevron-right"
        />

        <div class="child-dropdown">
          <div class="inner">
            <ul>
              <li>
                <div class="column-setting">
                  <VField>
                    <VSwitchSegment />
                  </VField>
                  <div class="text">
                    <span>قفل</span>
                    <span>قفل کردن ستون</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="column-setting">
                  <VField>
                    <VSwitchSegment />
                  </VField>
                  <div class="text">
                    <span>نوتیفیکیشن ها</span>
                    <span>فعال یا غیر فعال کردن اطلاعیه ها </span>
                  </div>
                </div>
              </li>
              <li>
                <div class="column-setting">
                  <VField>
                    <VSwitchSegment />
                  </VField>
                  <div class="text">
                    <span>مرتب سازی</span>
                    <span>فعال یا غیرفعال کردن مرتب سازی</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>
