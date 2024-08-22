<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'

import { useDarkmode } from '/@src/stores/darkmode'
import sleep from '/@src/utils/sleep'

const darkmode = useDarkmode()
const router = useRouter()
const notyf = useNotyf()
const isLoading = ref(false)

const handleSignup = async () => {
  if (!isLoading.value) {
    isLoading.value = true
    sleep(2000)

    notyf.dismissAll()
    notyf.success('خوش آمدید, علی زمانی')
    router.push('/sidebar/dashboards')
    isLoading.value = false
  }
}

useHead({
  title: 'تایید ثبت نام 3 - Vuero',
})
</script>

<template>
  <div class="auth-wrapper-inner is-single">
    <!--Fake navigation-->
    <div class="auth-nav">
      <div class="left" />
      <div class="center">
        <RouterLink
          to="/"
          class="header-item"
        >
          <AnimatedLogo
            width="38px"
            height="38px"
          />
        </RouterLink>
      </div>
      <div class="right">
        <label
          class="dark-mode ml-auto"
          tabindex="0"
          role="button"
          @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
        >
          <input
            data-cy="dark-mode-toggle"
            type="checkbox"
            :checked="!darkmode.isDark"
            @change="darkmode.onChange"
          >
          <span />
        </label>
      </div>
    </div>

    <!--Single Centered Form-->
    <div class="single-form-wrap">
      <div class="inner-wrap">
        <!--Form Title-->
        <div class="auth-head">
          <h2>همین حالا به ما بپیوند.</h2>
          <p>با ایجاد حساب کاربری خود شروع کنید</p>
          <RouterLink to="/auth/login-3">
            من یک اکانت از قبل دارم
          </RouterLink>
        </div>

        <!--Form-->
        <div class="form-card">
          <form
            method="post"
            novalidate
            @submit.prevent="handleSignup"
          >
            <div class="login-form">
              <!-- Input -->
              <VField>
                <VControl icon="feather:user">
                  <VInput
                    type="text"
                    placeholder="نام"
                    autocomplete="name"
                  />
                </VControl>
              </VField>
              <!-- Input -->
              <VField>
                <VControl icon="feather:mail">
                  <VInput
                    type="text"
                    placeholder="ایمیل"
                    autocomplete="email"
                  />
                </VControl>
              </VField>
              <!-- Input -->
              <VField>
                <VControl icon="feather:lock">
                  <VInput
                    type="password"
                    placeholder="رمز عبور"
                    autocomplete="new-password"
                  />
                </VControl>
              </VField>
              <!-- Input -->
              <VField>
                <VControl icon="feather:lock">
                  <VInput
                    type="password"
                    placeholder="تکرار رمز عبور"
                  />
                </VControl>
              </VField>

              <VField>
                <VControl class="setting-item">
                  <VCheckbox
                    label="پیشنهادهای تبلیغاتی را دریافت کنید"
                    color="primary"
                    paddingless
                  />
                </VControl>
              </VField>

              <!-- Submit -->
              <div class="login">
                <VButton
                  color="primary"
                  type="submit"
                  bold
                  fullwidth
                  raised
                >
                  ثبت نام
                </VButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
