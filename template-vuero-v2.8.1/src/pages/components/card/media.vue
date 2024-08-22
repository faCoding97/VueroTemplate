<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VCardMedia')

useHead({
  title: 'VCardMedia - کامپوننت ها- Vuero',
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
          label: 'کارت‌ها',
        },
        {
          label: 'VCardMedia',
          to: '/components/card/media',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--VCardMedia-->
        <VCardMediaDocumentation />
      </div>

      <div class="column is-4">
        <VCardMedia
          image="/demo/photos/apps/1.jpg"
          avatar="/demo/avatars/19.jpg"
          badge="/images/icons/flags/germany.svg"
          title="سعید ح."
          subtitle="مدیر فروش"
        >
          <p class="pb-4">
   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>

          <a
            class="action-link"
            tabindex="0"
          >اطلاعات بیشتر</a>
        </VCardMedia>
      </div>

      <div class="column is-4">
        <VCardMedia
          image="/demo/photos/apps/2.png"
          avatar="/demo/avatars/23.jpg"
          badge="/images/icons/flags/united-states-of-america.svg"
          title="الهام ص."
          subtitle="مدیر پروژه"
        >
          <p class="pb-4">
   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>

          <a
            class="action-link"
            tabindex="0"
          >اطلاعات بیشتر</a>
        </VCardMedia>
      </div>

      <div class="column is-4">
        <VCardMedia
          image="/demo/photos/apps/3.png"
          avatar="/demo/avatars/12.jpg"
          badge="/images/icons/flags/united-states-of-america.svg"
           title="نازی ر."
          subtitle="توسعه دهنده بک اند"
        >
          <p class="pb-4">
   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>

          <a
            class="action-link"
            tabindex="0"
          >اطلاعات بیشتر</a>
        </VCardMedia>
      </div>

      <div class="column is-12 mt-5">
        <!--Props-->
        <VCardMediaPropsDocumentation />

        <!--Slots-->
        <VCardMediaSlotsDocumentation />
      </div>
    </div>
  </div>
</template>
