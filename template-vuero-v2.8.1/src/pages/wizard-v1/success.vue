<script setup lang="ts">
import { useWizard } from '/@src/composable/useWizard'

const wizard = useWizard()
wizard.setStep({
  number: 8,
  canNavigate: false,
})
</script>

<template>
  <div
    id="wizard-step-7"
    class="inner-wrapper is-active"
    data-step-title="Finish"
  >
    <div class="step-content">
      <div class="step-title">
        <h2 class="dark-inverted">
          تبریک میگم همه چیز آماده است.
        </h2>
        <p>بسیار عالی، شما به تازگی ایجاد این پروژه را به پایان رساندید.</p>
      </div>

      <VPlaceholderPage
        class="end-placeholder"
        title="برای مراحل بعدی آماده شوید.."
        subtitle="شما و اعضای تیمی که اضافه کرده اید می توانید از قبل شروع به کار و ایجاد وظایف کنید.."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/wizard/finish.svg"
            alt=""
          >
          <img
            class="dark-image"
            src="/@src/assets/illustrations/wizard/finish-dark.svg"
            alt=""
          >
        </template>
        <template #action>
          <VButton
            color="primary"
            rounded
            bold
            elevated
            to="/sidebar/layouts/projects-details"
          >
           مشاهده پروژه
          </VButton>
        </template>
      </VPlaceholderPage>
    </div>
  </div>
</template>
