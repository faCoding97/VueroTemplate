<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VCardSocial')

useHead({
  title: 'VCardSocial - کامپوننت ها- Vuero',
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
          label: 'VCardSocial',
          to: '/components/card/social',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--VCard Social-->
        <VCardSocialDocumentation />
      </div>

      <div class="column is-4">
        <VCardSocial
          title="توییت ویژه"
          network="twitter"
          avatar="/demo/avatars/19.jpg"
          username="@gretak"
          :hashtags="['#bulmaio', '#css', '#responsive']"
          share-label="بازتوییت"
          like-label="ذخیره"
        >
          <span class="dark-inverted">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </span>
        </VCardSocial>
      </div>

      <div class="column is-4">
        <VCardSocial
          title="استوری ویژه"
          network="instagram"
          avatar="/demo/avatars/5.jpg"
          username="مریم ل."
          :hashtags="['#bulmaio', '#css', '#responsive']"
          share-label="اشتراک"
          like-label="لایک"
        >
          <span class="dark-inverted">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </span>
        </VCardSocial>
      </div>

      <div class="column is-4">
        <VCardSocial
          title="پست ویژه"
          network="facebook"
          avatar="/demo/avatars/36.jpg"
          username="باراد ل."
          :hashtags="['#bulmaio', '#css', '#responsive']"
          share-label="اشتراک"
          like-label="لایک"
        >
          <template #default>
            <span class="dark-inverted">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </span>
          </template>
        </VCardSocial>
      </div>

      <div class="column is-12 mt-5">
        <!--Props-->
        <VCardSocialPropsDocumentation />

        <!--Slots-->
        <VCardSocialSlotsDocumentation />

        <!--Events-->
        <VCardSocialEventsDocumentation />
      </div>
    </div>
  </div>
</template>
