<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const notyf = useNotyf()

onMounted(() => {
  notyf.success('This toast is displayed when the page is mounted')
})

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('notyf')

useHead({
  title: 'Notyf - Plugins - Vuero',
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
          label: 'افزونه ها',
        },
        {
          label: 'Notif',
          to: '/components/plugins/notif',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Success Toast-->
        <NotyfSuccessDocumentation />

        <div class="buttons mb-6">
          <VButton
            bold
            @click="notyf.success('Toast موفقیت ')"
          >
            Toast موفقیت 
          </VButton>
        </div>

        <!--Error Toast-->
        <NotyfErrorDocumentation />

        <div class="buttons mb-6">
          <VButton
            bold
            @click="notyf.error('Toast خطا ')"
          >
            Toast خطا 
          </VButton>
        </div>

        <!--Info Toast-->
        <NotyfInfoDocumentation />

        <div class="buttons mb-6">
          <VButton
            bold
            @click="notyf.info('Toast اطلاعات ')"
          >
            Toast اطلاعات 
          </VButton>
        </div>

        <!--Warning Toast-->
        <NotyfWarningDocumentation />

        <div class="buttons mb-6">
          <VButton
            bold
            @click="notyf.warning('Toast هشدار ')"
          >
            Toast هشدار 
          </VButton>
        </div>

        <!--Primary Toast-->
        <NotyfPrimaryDocumentation />

        <div class="buttons mb-6">
          <VButton
            bold
            @click="notyf.primary('Toast ابتدایی ')"
          >
            Toast ابتدایی 
          </VButton>
        </div>

        <!--Purple Toast-->
        <NotyfPurpleDocumentation />

        <div class="buttons mb-6">
          <VButton
            bold
            @click="notyf.purple('Toast بنفش ')"
          >
            Toast بنفش 
          </VButton>
        </div>

        <!--Blue Toast-->
        <NotyfBlueDocumentation />

        <div class="buttons mb-6">
          <VButton
            bold
            @click="notyf.blue('Blue Toast')"
          >
            Blue Toast
          </VButton>
        </div>

        <!--Green Toast-->
        <NotyfGreenDocumentation />

        <div class="buttons mb-6">
          <VButton
            bold
            @click="notyf.green(' Toast سبز ')"
          >
             Toast سبز 
          </VButton>
        </div>

        <!--Orange Toast-->
        <NotyfOrangeDocumentation />

        <div class="buttons mb-6">
          <VButton
            bold
            @click="notyf.orange(' Toast نارنجی ')"
          >
             Toast نارنجی 
          </VButton>
        </div>
      </div>
      <div
        v-if="toc.length"
        class="column is-3 toc-column"
      >
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
