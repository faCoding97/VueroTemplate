<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const isLoaderActive = ref(false)

const toggleLoaders = () => {
  isLoaderActive.value = !isLoaderActive.value
}

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VLoader')

useHead({
  title: 'VLoader - المنت ها- Vuero',
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
          label: 'المنت ها',
          to: '/elements/',
        },
        {
          label: 'VLoader',
          to: '/elements/loader',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Loader-->
        <VLoaderDocumentation />

        <div class="mb-4">
          <VButton
            color="primary"
            elevated
            @click="toggleLoaders"
          >
            <span v-if="!isLoaderActive">نمایش لودر ها</span>
            <span v-else>مخفی کردن لودر</span>
          </VButton>
        </div>

        <div class="columns is-multiline">
          <div class="column is-4">
            <VLoader
              size="small"
              :active="isLoaderActive"
              grey
            >
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="سعید ح."
                subtitle="مدیر فروش"
              >
                <p>
             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
              </VCardAction>
            </VLoader>
          </div>
          <div class="column is-4">
            <VLoader
              card="regular"
              size="small"
              :active="isLoaderActive"
            >
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="سعید ح."
                subtitle="مدیر فروش"
              >
                <p>
             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
              </VCardAction>
            </VLoader>
          </div>
          <div class="column is-4">
            <VLoader
              card="regular"
              size="small"
              :active="isLoaderActive"
              translucent
            >
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="سعید ح."
                subtitle="مدیر فروش"
              >
                <p>
             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
              </VCardAction>
            </VLoader>
          </div>
          <div class="column is-4">
            <VLoader
              card="smooth"
              :active="isLoaderActive"
            >
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="سعید ح."
                subtitle="مدیر فروش"
                radius="smooth"
              >
                <p>
             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
              </VCardAction>
            </VLoader>
          </div>
          <div class="column is-4">
            <VLoader
              card="rounded"
              size="large"
              :active="isLoaderActive"
            >
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="سعید ح."
                subtitle="مدیر فروش"
                radius="rounded"
              >
                <p>
             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
              </VCardAction>
            </VLoader>
          </div>
          <div class="column is-4">
            <VLoader
              card="rounded"
              size="xl"
              :active="isLoaderActive"
            >
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="سعید ح."
                subtitle="مدیر فروش"
                radius="rounded"
              >
                <p>
             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
              </VCardAction>
            </VLoader>
          </div>
        </div>

        <VLoaderPropsDocumentation />
        <VLoaderSlotsDocumentation />
      </div>
    </div>
  </div>
</template>
