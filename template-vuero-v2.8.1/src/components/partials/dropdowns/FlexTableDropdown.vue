<script setup lang="ts">
const emits = defineEmits<{
  (e: 'view'): void
  (e: 'projects'): void
  (e: 'schedule'): void
  (e: 'remove'): void
}>()
</script>

<template>
  <VDropdown
    icon="feather:more-vertical"
    class="is-pushed-mobile"
    spaced
    right
  >
    <template #content="{ close }">
      <a
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
        @click.prevent="
          () => {
            emits('view')
            close()
          }
        "
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-eye"
          />
        </div>
        <div class="meta">
          <span>مشاهده</span>
          <span>مشاهده جزئیات کاربر</span>
        </div>
      </a>

      <a
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
        @click.prevent="
          () => {
            emits('projects')
            close()
          }
        "
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-briefcase"
          />
        </div>
        <div class="meta">
          <span>پروژه ها</span>
          <span>مشاهده پروژه های کاربر</span>
        </div>
      </a>

      <a
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
        @click.prevent="
          () => {
            emits('schedule')
            close()
          }
        "
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-calendar"
          />
        </div>
        <div class="meta">
          <span>برنامه</span>
          <span>تنظیم قرار ملاقات</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <a
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
        @click.prevent="
          () => {
            emits('remove')
            close()
          }
        "
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-trash-can-alt"
          />
        </div>
        <div class="meta">
          <span>حذف</span>
          <span>حذف از لیست</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
