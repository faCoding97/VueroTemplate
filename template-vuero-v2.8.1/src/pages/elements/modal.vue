<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const leftActionsOpen = ref(false)
const centeredActionsOpen = ref(false)
const rightActionsOpen = ref(false)
const customLabelActionsOpen = ref(false)

const smallOpen = ref(false)
const standardOpen = ref(false)
const mediumOpen = ref(false)
const largeOpen = ref(false)
const bigOpen = ref(false)

const smallFormOpen = ref(false)
const standardFormOpen = ref(false)
const mediumFormOpen = ref(false)

const largeFormOpen = ref(false)
const bigFormOpen = ref(false)
const noscrollOpen = ref(false)
const nocloseOpen = ref(false)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VModal')

useHead({
  title: 'VModal - المنت ها- Vuero',
})
</script>

<template>
  <div>
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
            label: 'VModal',
            to: '/elements/modal',
          },
        ]"
      />

      <div class="columns is-multiline">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column stay-focus-container"
        >
          <!--VModal-->
          <VModalBaseDocumentation />

          <div class="buttons mb-6">
            <VButton
              bold
              @click="leftActionsOpen = true"
            >
              اکشن چپ
            </VButton>
            <VButton
              bold
              @click="centeredActionsOpen = true"
            >
              اکشن وسط
            </VButton>
            <VButton
              bold
              @click="rightActionsOpen = true"
            >
              اکشن راست
            </VButton>
            <VButton
              bold
              @click="customLabelActionsOpen = true"
            >
              برچسب پیش فرض
            </VButton>
          </div>

          <!--VModal sizes-->
          <VModalSizesDocumentation />

          <div class="buttons mb-6">
            <VButton
              bold
              @click="smallOpen = true"
            >
              مدال کوچک
            </VButton>
            <VButton
              bold
              @click="standardOpen = true"
            >
              مدال استاندارد 
            </VButton>
            <VButton
              bold
              @click="mediumOpen = true"
            >
              مدال متوسط 
            </VButton>
            <VButton
              bold
              @click="largeOpen = true"
            >
              مدال لارج
            </VButton>
            <VButton
              bold
              @click="bigOpen = true"
            >
              مدال بزرگ
            </VButton>
          </div>

          <!--VModal forms-->
          <VModalFormsDocumentation />

          <div class="buttons mb-6">
            <VButton
              bold
              @click="smallFormOpen = true"
            >
              مدال کوچک
            </VButton>
            <VButton
              bold
              @click="standardFormOpen = true"
            >
              مدال استاندارد 
            </VButton>
            <VButton
              bold
              @click="mediumFormOpen = true"
            >
                   مدال متوسط 
            </VButton>
            <VButton
              bold
              @click="largeFormOpen = true"
            >
                مدال لارج
            </VButton>
            <VButton
              bold
              @click="bigFormOpen = true"
            >
            مدال بزرگ
            </VButton>
          </div>

          <!--VModal options-->
          <VModalOptionsDocumentation />

          <div class="buttons mb-6">
            <VButton
              bold
              @click="noscrollOpen = true"
            >
             اسکرول غیرفعال
            </VButton>
            <VButton
              bold
              @click="nocloseOpen = true"
            >
            بدون کنترل کننده بستن پس زمینه
            </VButton>
          </div>

          <!--Props-->
          <VModalPropsDocumentation />

          <!--Slots-->
          <VModalSlotsDocumentation />

          <!--Events-->
          <VModalEventsDocumentation />
        </div>
        <div
          v-if="toc.length"
          class="column is-3 toc-column"
        >
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>

    <VModal
      title="اکشن استاندارد"
      :open="leftActionsOpen"
      @close="leftActionsOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="دریافت پرمیوم"
          subtitle="قفل ویژگی‌ها و ابزارهای تجاری بیشتر را با استفاده از دریافت پرمیوم باز کنید"
        />
      </template>
      <template #action="{ close }">
        <VButton
          color="primary"
          raised
          @click="close()"
        >
          تایید
        </VButton>
      </template>
    </VModal>

    <VModal
      title="اکشن وسط چین"
      :open="centeredActionsOpen"
      actions="center"
      @close="centeredActionsOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="دریافت پرمیوم"
          subtitle="قفل ویژگی‌ها و ابزارهای تجاری بیشتر را با استفاده از دریافت پرمیوم باز کنید"
        />
      </template>
      <template #action="{ close }">
        <VButton
          color="primary"
          raised
          @click="close()"
        >
          تایید
        </VButton>
      </template>
    </VModal>

    <VModal
      title="اکشن های راست"
      :open="rightActionsOpen"
      actions="right"
      @close="rightActionsOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="دریافت پرمیوم"
          subtitle="قفل ویژگی‌ها و ابزارهای تجاری بیشتر را با استفاده از دریافت پرمیوم باز کنید"
        />
      </template>
      <template #action="{ close }">
        <VButton
          color="primary"
          raised
          @click="close()"
        >
          تایید
        </VButton>
      </template>
    </VModal>

    <VModal
      title="برچسب پیش فرض"
      :open="customLabelActionsOpen"
      actions="right"
      cancel-label="بازگشت"
      @close="customLabelActionsOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="دریافت پرمیوم"
          subtitle="قفل ویژگی‌ها و ابزارهای تجاری بیشتر را با استفاده از دریافت پرمیوم باز کنید"
        />
      </template>
    </VModal>

    <VModal
      :open="smallOpen"
      title="دعوت نامه"
      size="small"
      actions="center"
      rounded
      @close="smallOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="شما دعوت شده اید"
          subtitle="صابر م. شما را به پیوستن به پروژه Heartman and Sons دعوت کرد."
        >
          <template #image>
            <VAvatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </VPlaceholderSection>
      </template>
      <template #action="{ close }">
        <VButton
          color="primary"
          rounded
          raised
          @click="close()"
        >
          تایید
        </VButton>
      </template>
    </VModal>

    <VModal
      :open="standardOpen"
      title="دعوت نامه"
      actions="center"
      rounded
      @close="standardOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="شما دعوت شده اید"
          subtitle="صابر م. شما را به پیوستن به پروژه Heartman and Sons دعوت کرد."
        >
          <template #image>
            <VAvatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </VPlaceholderSection>
      </template>
      <template #action="{ close }">
        <VButton
          color="primary"
          rounded
          raised
          @click="close()"
        >
          تایید
        </VButton>
      </template>
    </VModal>

    <VModal
      :open="mediumOpen"
      title="دعوت نامه"
      size="medium"
      actions="center"
      rounded
      @close="mediumOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="شما دعوت شده اید"
          subtitle="صابر م. شما را به پیوستن به پروژه Heartman and Sons دعوت کرد."
        >
          <template #image>
            <VAvatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </VPlaceholderSection>
      </template>
      <template #action="{ close }">
        <VButton
          color="primary"
          rounded
          raised
          @click="close()"
        >
          تایید
        </VButton>
      </template>
    </VModal>

    <VModal
      :open="largeOpen"
      title="دعوت نامه"
      size="large"
      actions="center"
      rounded
      @close="largeOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="شما دعوت شده اید"
          subtitle="صابر م. شما را به پیوستن به پروژه Heartman and Sons دعوت کرد."
        >
          <template #image>
            <VAvatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </VPlaceholderSection>
      </template>
      <template #action="{ close }">
        <VButton
          color="primary"
          rounded
          raised
          @click="close()"
        >
          تایید
        </VButton>
      </template>
    </VModal>

    <VModal
      :open="bigOpen"
      title="دعوت نامه"
      size="big"
      actions="center"
      rounded
      @close="bigOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="شما دعوت شده اید"
          subtitle="صابر م. شما را به پیوستن به پروژه Heartman and Sons دعوت کرد."
        >
          <template #image>
            <VAvatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </VPlaceholderSection>
      </template>
      <template #action="{ close }">
        <VButton
          color="primary"
          rounded
          raised
          @click="close()"
        >
          تایید
        </VButton>
      </template>
    </VModal>

    <VModal
      is="form"
      method="post"
      novalidate
      :open="smallFormOpen"
      title="ارسال  نظر"
      size="small"
      actions="right"
      @submit.prevent="smallFormOpen = false"
      @close="smallFormOpen = false"
    >
      <template #content>
        <div class="modal-form">
          <VField label="نام کاربری*">
            <VControl>
              <VInput
                type="text"
                placeholder="نام کاربری"
              />
            </VControl>
          </VField>
          <VField label="ایمیل *">
            <VControl>
              <VInput
                type="text"
                placeholder="ایمیل"
              />
            </VControl>
          </VField>
          <VField label="نظر * *">
            <VControl>
              <VTextarea
                rows="4"
                placeholder="پیام شما ...."
              />
            </VControl>
          </VField>
        </div>
      </template>
      <template #action>
        <VButton
          type="submit"
          color="primary"
          raised
        >
          انتشار
        </VButton>
      </template>
    </VModal>

    <VModal
      is="form"
      method="post"
      novalidate
      :open="standardFormOpen"
      title="ارسال  نظر"
      actions="right"
      @submit.prevent="standardFormOpen = false"
      @close="standardFormOpen = false"
    >
      <template #content>
        <div class="modal-form">
          <VField label="نام کاربری*">
            <VControl>
              <VInput
                type="text"
                placeholder="نام کاربری"
              />
            </VControl>
          </VField>
          <VField label="ایمیل *">
            <VControl>
              <VInput
                type="text"
                placeholder="ایمیل"
              />
            </VControl>
          </VField>
          <VField label="نظر * *">
            <VControl>
              <VTextarea
                rows="4"
                placeholder="پیام شما ...."
              />
            </VControl>
          </VField>
        </div>
      </template>
      <template #action>
        <VButton
          type="submit"
          color="primary"
          raised
        >
          انتشار
        </VButton>
      </template>
    </VModal>

    <VModal
      is="form"
      method="post"
      novalidate
      :open="mediumFormOpen"
      size="medium"
      title="فرم افقی"
      actions="right"
      @submit.prevent="mediumFormOpen = false"
      @close="mediumFormOpen = false"
    >
      <template #content>
        <div class="modal-form">
          <VField
            label="نام کاربری*"
            horizontal
          >
            <VControl expanded>
              <VInput
                type="text"
                placeholder="نام کاربری"
              />
            </VControl>
          </VField>
          <VField
            label="ایمیل *"
            horizontal
          >
            <VControl expanded>
              <VInput
                type="text"
                placeholder="نام کاربری"
              />
            </VControl>
          </VField>
          <VField
            label="نظر * *"
            horizontal
          >
            <VControl expanded>
              <VTextarea
                rows="4"
                placeholder="پیام شما ...."
              />
            </VControl>
          </VField>
        </div>
      </template>
      <template #action>
        <VButton
          type="submit"
          color="primary"
          raised
        >
          انتشار
        </VButton>
      </template>
    </VModal>

    <VModal
      is="form"
      method="post"
      novalidate
      :open="largeFormOpen"
      size="large"
      title="ایجاد پروژه"
      actions="right"
      @submit.prevent="largeFormOpen = false"
      @close="largeFormOpen = false"
    >
      <template #content>
        <div class="modal-form">
          <div class="columns is-multiline">
            <div class="column is-12">
              <VField label="نام پروژه *">
                <VControl>
                  <VInput
                    type="text"
                    placeholder="مثال: یک پروژه جالب"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField label="بودجه پروژه">
                <VControl>
                  <VInput
                    type="text"
                    placeholder="مثال: 3500 تومان"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField label="لینک پروژه  *">
                <VControl>
                  <VInput
                    type="text"
                    class="VInput"
                    placeholder="مثال : https://project.com"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField label="توضیحات *">
                <VControl>
                  <VTextarea
                    rows="3"
                    placeholder="جزئیات پروژه..."
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
      </template>
      <template #action>
        <VButton
          type="submit"
          color="primary"
          raised
        >
         ذخیره تغییرات
        </VButton>
      </template>
    </VModal>

    <VModal
      is="form"
      :open="bigFormOpen"
      size="large"
      title="ایجاد پروژه"
      actions="right"
      @submit.prevent="bigFormOpen = false"
      @close="bigFormOpen = false"
    >
      <template #content>
        <div class="modal-form">
          <div class="columns is-multiline">
            <div class="column is-12">
              <VField label="نام پروژه *">
                <VControl>
                  <VInput
                    type="text"
                    placeholder="مثال: یک پروژه جالب"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField
                class="is-image-select"
                label="اعضای پروژه"
              >
                <VControl>
                  <Multiselect
                    placeholder="انتخاب کارمندان"
                    track-by="name"
                    label="name"
                    :search="true"
                    :options="[
                      {
                        value: 'alice',
                        name: 'آلیا خرسندی',
                        image: '/demo/avatars/7.jpg',
                      },
                      {
                        value: 'erik',
                        name: 'علی زمانی',
                        image: '/images/avatars/svg/vuero-1.svg',
                      },
                      {
                        value: 'melany',
                        name: 'melany Wallace',
                        image: '/demo/avatars/25.jpg',
                      },
                      {
                        value: 'tara',
                        name: 'تارا سهرابی',
                        image: '/demo/avatars/13.jpg',
                      },
                      {
                        value: 'mary',
                        name: 'مریم حسینی',
                        image: '/demo/avatars/5.jpg',
                      },
                      {
                        value: 'irina',
                        name: 'الناز تهامی',
                        image: '/demo/avatars/23.jpg',
                      },
                      {
                        value: 'jonathan',
                        name: 'مهدیار نادری',
                        image: '/demo/avatars/32.jpg',
                      },
                    ]"
                    :max-height="145"
                  >
                    <template #singlelabel="{ value }">
                      <div class="multiselect-single-label">
                        <img
                          class="select-label-icon"
                          :src="value.image"
                          alt=""
                        >
                        {{ value.name }}
                      </div>
                    </template>
                    <template #option="{ option }">
                      <img
                        class="select-option-icon"
                        :src="option.image"
                        alt=""
                      >
                      {{ option.name }}
                    </template>
                  </Multiselect>
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField
                class="is-image-select"
                label="نوع پروژه *"
              >
                <VControl>
                  <Multiselect
                    placeholder="انتخاب زبان"
                    track-by="name"
                    label="name"
                    :search="true"
                    :options="[
                      {
                        value: 'javascript',
                        name: 'Javascript',
                        image: '/images/icons/stacks/js.svg',
                      },
                      {
                        value: 'reactjs',
                        name: 'ReactJS',
                        image: '/images/icons/stacks/reactjs.svg',
                      },
                      {
                        value: 'vuejs',
                        name: 'VueJS',
                        image: '/images/icons/stacks/vuejs.svg',
                      },
                    ]"
                    :max-height="145"
                  >
                    <template #singlelabel="{ value }">
                      <div class="multiselect-single-label">
                        <img
                          class="select-label-icon"
                          :src="value.image"
                          alt=""
                        >
                        {{ value.name }}
                      </div>
                    </template>
                    <template #option="{ option }">
                      <img
                        class="select-option-icon"
                        :src="option.image"
                        alt=""
                      >
                      {{ option.name }}
                    </template>
                  </Multiselect>
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField label="بودجه پروژه">
                <VControl>
                  <VInput
                    type="text"
                    placeholder="مثال: 3500 تومان"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField label="لینک پروژه  *">
                <VControl>
                  <VInput
                    type="text"
                    class="VInput"
                    placeholder="مثال : https://project.com"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField label="توضیحات *">
                <VControl>
                  <VTextarea
                    rows="3"
                    placeholder="جزئیات پروژه..."
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
      </template>
      <template #action>
        <VButton
          type="submit"
          color="primary"
          raised
        >
         ذخیره تغییرات
        </VButton>
      </template>
    </VModal>

    <VModal
      :open="noscrollOpen"
      title="دعوت نامه"
      size="small"
      actions="center"
      noscroll
      @close="noscrollOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="دریافت پرمیوم"
          subtitle="قفل ویژگی‌ها و ابزارهای تجاری بیشتر را با استفاده از دریافت پرمیوم باز کنید"
        />
      </template>
      <template #action="{ close }">
        <VButton
          color="primary"
          raised
          @click="close()"
        >
          تایید
        </VButton>
      </template>
    </VModal>

    <VModal
      :open="nocloseOpen"
      title="دعوت نامه"
      size="small"
      actions="center"
      noclose
      @close="nocloseOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="دریافت پرمیوم"
          subtitle="قفل ویژگی‌ها و ابزارهای تجاری بیشتر را با استفاده از دریافت پرمیوم باز کنید"
        />
      </template>
      <template #action="{ close }">
        <VButton
          color="primary"
          raised
          @click="close()"
        >
          تایید
        </VButton>
      </template>
    </VModal>
  </div>
</template>
