<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const isUploading = ref(false)
const isLoading = ref(false)
const experience = ref('')
const firstJob = ref('')
const flexibility = ref('')
const remote = ref('')
const skills = ref(['software', 'saas', 'engineering'])
const skillsOptions = [
  { value: 'software', label: 'نرم افزار' },
  { value: 'saas', label: 'SaaS' },
  { value: 'engineering', label: 'مهندسی' },
]

const notyf = useNotyf()
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

const onAddFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file added', file)
}
const onRemoveFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file removed', file)
}
const onSave = async () => {
  isLoading.value = true
  await sleep()
  notyf.success('تغییرات شما با موفقیت ذخیره شد!')
  isLoading.value = false
}
</script>

<template>
  <div class="account-box is-form is-footerless">
    <div
      class="form-head stuck-header"
      :class="[isScrolling && 'is-stuck']"
    >
      <div class="form-head-inner">
        <div class="left">
          <h3>اطلاعات عمومی</h3>
          <p>اطلاعات عمومی حساب خود را ویرایش کنید</p>
        </div>
        <div class="right">
          <div class="buttons">
            <VButton
              to="/sidebar/layouts/profile-view"
              icon="lnir lnir-arrow-left rem-100"
              light
              dark-outlined
            >
             برگشت
            </VButton>
            <VButton
              color="primary"
              raised
              :loading="isLoading"
              tabindex="0"
              @keydown.space.prevent="onSave"
              @click="onSave"
            >
             ذخیره تغییرات
            </VButton>
          </div>
        </div>
      </div>
    </div>
    <div class="form-body">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>تصویر پروفایل</h4>
          <p>اینگونه دیگران شما را خواهند شناخت</p>
        </div>

        <VAvatar
          size="xl"
          class="profile-v-avatar"
        >
          <template #avatar>
            <img
              v-if="!isUploading"
              class="avatar"
              src="/images/avatars/svg/vuero-1.svg"
              alt=""
              @error.once="onceImageErrored(150)"
            >
            <VFilePond
              v-else
              class="profile-filepond"
              name="profile_filepond"
              :chunk-retry-delays="[500, 1000, 3000]"
              label-idle="<i class='lnil lnil-cloud-upload'></i>"
              :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
              :image-preview-height="140"
              :image-resize-target-width="140"
              :image-resize-target-height="140"
              image-crop-aspect-ratio="1:1"
              style-panel-layout="compact circle"
              style-load-indicator-position="center bottom"
              style-progress-indicator-position="right bottom"
              style-button-remove-item-position="left bottom"
              style-button-process-item-position="right bottom"
              @addfile="onAddFile"
              @removefile="onRemoveFile"
            />
            <VIconButton
              v-if="!isUploading"
              icon="feather:edit-2"
              class="edit-button is-edit"
              circle
              tabindex="0"
              @keydown.space.prevent="isUploading = true"
              @click="isUploading = true"
            />
            <VIconButton
              v-else
              icon="feather:arrow-left"
              class="edit-button is-back"
              circle
              tabindex="0"
              @keydown.space.prevent="isUploading = false"
              @click="isUploading = false"
            />
          </template>
        </VAvatar>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>اطلاعات شخصی</h4>
          <p>دیگران سزاوار این هستند که شما را بیشتر بشناسند</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput
                  type="text"
                  placeholder="نام"
                  autocomplete="given-name"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput
                  type="text"
                  placeholder="نام خانوادگی"
                  autocomplete="family-name"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:briefcase">
                <VInput
                  type="text"
                  placeholder="عنوان شغلی"
                  autocomplete="organization-title"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:map-pin">
                <VInput
                  type="text"
                  placeholder="مکان"
                  autocomplete="country-name"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <VTextarea
                  rows="4"
                  placeholder="درباره / بیو"
                  autocomplete="off"
                  autocapitalize="off"
                  spellcheck="true"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>اطلاعات حرفه ای</h4>
          <p>این می تواند به شما کمک کند تا برخی از فرصت ها را به دست آورید</p>
        </div>
        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="experience"
                  :attrs="{ id }"
                  placeholder="تجربه"
                  :options="['0-2 سال', '2-5 سال', '5-10 سال', '10+ سال']"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="firstJob"
                  :attrs="{ id }"
                  placeholder="آیا این اولین شغل شماست؟"
                  :options="['بله', 'خیر']"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="flexibility"
                  :attrs="{ id }"
                  placeholder="آیا شما منعطف هستید؟"
                  :options="['بله', 'خیر']"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="remote"
                  :attrs="{ id }"
                  placeholder="آیا ریموت کار میکنید؟"
                  :options="['بله', 'خیر']"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="skills"
                  :attrs="{ id }"
                  mode="tags"
                  :searchable="true"
                  :create-tag="true"
                  :options="skillsOptions"
                  placeholder="افزودن تگ"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>پروفایل های اجتماعی
         </h4>
          <p>این می تواند به دیگران کمک کند تا شما را در رسانه های اجتماعی پیدا کنند</p>
        </div>
        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-facebook-f">
                <VInput
                  type="text"
                  placeholder="لینک فیسبوک "
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-twitter">
                <VInput
                  type="text"
                  placeholder=" لینک توئیتر"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-dribbble">
                <VInput
                  type="text"
                  placeholder=" لینک دریبل"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-instagram">
                <VInput
                  type="text"
                  placeholder=" لینک اینستاگرام"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-github">
                <VInput
                  type="text"
                  placeholder=" لینک گیتهاب"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-gitlab">
                <VInput
                  type="text"
                  placeholder="لینک گیتلب"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
