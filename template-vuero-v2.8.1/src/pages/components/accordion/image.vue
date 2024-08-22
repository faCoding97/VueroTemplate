<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const data = [
  {
    image: 'https://source.unsplash.com/FV3GConVSss/1600x900',
    title: 'بخش اداری I',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
  {
    image: 'https://source.unsplash.com/rRiAzFkJPMo/1600x900',
    title: 'بخش اداری II',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
  {
    image: 'https://source.unsplash.com/tvleqH3p1os/1600x900',
    title: '12 مناظر عالی',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
  {
    image: 'https://source.unsplash.com/-Xv7k95vOFA/1600x900',
    title: 'ملاقات تیم',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
  {
    image: 'https://source.unsplash.com/F6NvgzU3RfM/1600x900',
    title: 'طیف های بنفش',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
  {
    image: 'https://source.unsplash.com/5E5N49RWtbA/1600x900',
    title: 'یادداشت آبی',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
]

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VAccordionImage')

useHead({
  title: 'VAccordionImage - کامپوننت ها- Vuero',
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
          label: 'VAccordionImage',
          to: '/components/accordion/image',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Image Accordion-->
        <AccordionImageDocumentation />
      </div>
      <div class="column is-12">
        <VAccordionImage :items="data" />
      </div>
      <div class="column is-12">
        <!--Props-->
        <AccordionImagePropsDocumentation />

        <!--Slots-->
        <AccordionImageSlotsDocumentation />

        <!--Events-->
        <AccordionImageEventsDocumentation />
      </div>
    </div>
  </div>
</template>
