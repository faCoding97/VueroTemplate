<script setup lang="ts">
import { useSidebar } from '/@src/stores/sidebar'

const sidebar = useSidebar()

onMounted(() => {
  sidebar.setActive('components')
})

useHead({
  title: 'V-Accordion - کامپوننت ها- Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
        tabindex="0"
        role="button"
        @keydown.space.prevent="sidebar.toggle('components')"
        @click="sidebar.toggle('components')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[sidebar.active !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top" />
              <i class="icon-line-center" />
              <i class="icon-line-bottom" />
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">
          VAccordion
        </h1>
      </div>

      <Toolbar />
    </div>
    <div class="page-content-inner">
      <VBreadcrumb
        with-icons
        separator="bullet"
        :items="[
          {
            label: 'Vuero',
            hideLabel: true,
            icon: 'feather:home',
            to: '/',
          },
          {
            label: 'کامپوننت ها',
            to: '/components/',
          },
          {
            label: 'آکاردئون',
          },
          {
            label: 'V-Accordion',
            to: '/components/accordion/',
          },
        ]"
      />

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--Accordion-->
          <AccordionDefaultDocumentation />
        </div>

        <div class="column is-6 is-full-tablet">
          <VAccordion
            :items="[
              {
                title: 'آیتم آکاردئون 1',
                content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .....',
              },
              {
                title: 'آیتم آکاردئون 2',
                content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .....',
              },
              {
                title: 'آیتم آکاردئون 3',
                content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .....',
              },
            ]"
          />
        </div>

        <div class="column is-6 is-full-tablet">
          <VAccordion
            :items="[
              {
                title: 'آیتم آکاردئون 1',
                content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .....',
              },
              {
                title: 'آیتم آکاردئون 2',
                content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .....',
              },
              {
                title: 'آیتم آکاردئون 3',
                content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .....',
              },
            ]"
            exclusive
          />
        </div>

        <div class="column is-12 mt-5">
          <!--Props-->
          <AccordionPropsDocumentation />

          <!--Slots-->
          <AccordionSlotsDocumentation />
        </div>
      </div>
    </div>
  </div>
</template>
