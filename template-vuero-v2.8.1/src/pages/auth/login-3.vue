<script setup lang="ts">
import { useDarkmode } from '/@src/stores/darkmode'
import { useUserSession } from '/@src/stores/userSession'
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const isLoading = ref(false)
const darkmode = useDarkmode()
const router = useRouter()
const route = useRoute()
const notyf = useNotyf()
const userSession = useUserSession()
const redirect = route.query.redirect as string

const handleLogin = async () => {
  if (!isLoading.value) {
    isLoading.value = true

    await sleep(2000)
    userSession.setToken('logged-in')

    notyf.dismissAll()
    notyf.success('خوش آمدید علی زمانی')

    if (redirect) {
      router.push(redirect)
    } else {
      router.push('/sidebar/dashboards')
    }

    isLoading.value = false
  }
}

useHead({
  title: 'تایید ورود 3 - Vuero',
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
          <h2>خوش آمدید.</h2>
          <p>لطفا وارد حساب خود شوید</p>
          <RouterLink to="/auth/signup-3">
           هنوز حساب کاربری ندارم
          </RouterLink>
        </div>

        <!--Form-->
        <div class="form-card">
          <form
            method="post"
            novalidate
            @submit.prevent="handleLogin"
          >
            <div class="login-form">
              <VField>
                <VControl icon="feather:user">
                  <VInput
                    type="text"
                    placeholder="نام کاربری"
                    autocomplete="username"
                  />
                </VControl>
              </VField>
              <VField>
                <VControl icon="feather:lock">
                  <VInput
                    type="password"
                    placeholder="رمز عبور"
                    autocomplete="current-password"
                  />
                </VControl>
              </VField>

              <!-- Switch -->
              <VField>
                <VControl class="setting-item">
                  <VCheckbox
                     label="مرا بخاطر بسپار"
                    color="primary"
                    paddingless
                  />
                </VControl>
              </VField>

              <!-- Submit -->
              <div class="login">
                <VButton
                  :loading="isLoading"
                  type="submit"
                  color="primary"
                  bold
                  fullwidth
                  raised
                >
                  ورود
                </VButton>
              </div>
            </div>
          </form>
        </div>

        <div class="forgot-link has-text-centered">
          <a>رمز عبور خود را فراموش کردید؟</a>
        </div>
      </div>
    </div>
  </div>
</template>
