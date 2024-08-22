<script setup lang="ts">
import { useWizard } from '/@src/composable/useWizard'
import { useNotyf } from '/@src/composable/useNotyf'

const notyf = useNotyf()
const wizard = useWizard()
const router = useRouter()
wizard.setStep({
  number: 2,
  canNavigate: true,
  validateStepFn: async () => {
    router.push('/wizard-v1/project-details')
  },
})

const onAddFile = (error: any, fileInfo: any) => {
  if (error) {
    notyf.error(`${error.main}: ${error.sub}`)
    console.error(error)
    return
  }

  const _file = fileInfo.file as File
  if (_file) {
    wizard.data.logo = _file
  }
}

const onRemoveFile = (error: any, fileInfo: any) => {
  if (error) {
    notyf.error(error)
    console.error(error)
    return
  }

  console.log(fileInfo)

  wizard.data.logo = null
}
</script>

<template>
  <div
    id="wizard-step-1"
    class="inner-wrapper is-active"
  >
    <div class="step-content">
      <div class="step-title">
        <h2 class="dark-inverted">
        این پروژه در مورد چیست؟
        </h2>
        <p>با افزودن تمام اطلاعات مربوط به پروژه، بهتر مدیریت کنید</p>
      </div>

      <div class="project-info">
        <div class="project-info-head">
          <div class="project-avatar-upload">
            <VField>
              <VControl>
                <VFilePond
                  size="small"
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
              </VControl>
              <p>
                <span>آپلود لوگوی پروژه</span>
                <span>اندازه فایل نمی تواند بیش از 2M باشد</span>
              </p>
            </VField>
          </div>
          <div class="project-info">
            <div class="project-name">
              <VField>
                <VControl>
                  <VInput
                    v-model="wizard.data.name"
                    placeholder="نام پروژه"
                  />
                </VControl>
              </VField>
            </div>
            <div class="project-description p-t-10">
              <VField>
                <VControl>
                  <VTextarea
                    v-model="wizard.data.description"
                    class="textarea"
                    rows="4"
                    placeholder="پروژه خود را شرح دهید..."
                  />
                  <p
                    v-if="wizard.data.description.length === 0"
                    class="help"
                  >
                   حداقل 50 کاراکتر
                  </p>
                  <p
                    v-else-if="wizard.data.description.length === 49"
                    class="help"
                  >
                    {{ 50 - wizard.data.description.length }} کاراکتر باقی مانده
                  </p>
                  <p
                    v-else-if="wizard.data.description.length < 50"
                    class="help"
                  >
                    {{ 50 - wizard.data.description.length }} کاراکتر باقی مانده
                  </p>
                </VControl>
              </VField>
              <VField v-slot="{ id }">
                <label>صنایع مرتبط</label>
                <VControl>
                  <Multiselect
                    v-model="wizard.data.relatedTo"
                    :attrs="{ id }"
                    label="value"
                    placeholder="یک مورد را انتخاب کنید"
                    :options="[
                      {
                        value: 'طراحی UI/UX ',
                       
                      },
                      {
                        value: 'توسعه وب',
                      },
                      {
                        value: 'مارکتینگ',
                      },
                    ]"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
