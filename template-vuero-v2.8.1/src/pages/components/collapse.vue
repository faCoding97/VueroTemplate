<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const data = [
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
]

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VCollapse')

useHead({
  title: 'VCollapse - کامپوننت ها- Vuero',
})
</script>

<template>
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
          label: 'VCollapse',
          to: '/components/collapse',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Collapse-->
        <AccordionCollapseDocumentation />
      </div>

      <div class="column is-6">
        <VCollapse :items="data" />
      </div>

      <div class="column is-6">
        <VCollapse
          :items="data"
          with-chevron
        />
      </div>

      <div class="column is-12">
        <!--Props-->
        <AccordionCollapsePropsDocumentation />
      </div>
    </div>
  </div>
</template>
