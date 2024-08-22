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
  title: 'تایید ورود 2 - Vuero',
})
</script>

<template>
  <div class="auth-wrapper-inner columns is-gapless">
    <!-- Image section (hidden on mobile) -->
    <div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner">
      <div class="hero login-hero is-fullheight is-app-grey">
        <div class="hero-body is-justify-content-center is-fullwidth">
          <div class="is-flex is-justify-content-center is-fullwidth">
            <img
              class="light-image has-light-shadow has-light-border"
              src="/@src/assets/illustrations/apps/vuero-banking-light.webp"
              alt=""
            >
            <img
              class="dark-image has-light-shadow"
              src="/@src/assets/illustrations/apps/vuero-banking-dark.webp"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Form section -->
    <div class="column is-4">
      <div class="hero is-fullheight is-white">
        <div class="hero-heading">
          <div class="auth-logo">
            <RouterLink to="/">
              <AnimatedLogo
                width="36px"
                height="36px"
              />
            </RouterLink>
            <label
              class="dark-mode"
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
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="auth-content">
                  <h2>خوش آمدید.</h2>
                  <p>لطفا وارد حساب خود شوید</p>
                  <RouterLink to="/auth/signup-2">
                   هنوز حساب کاربری ندارم
                  </RouterLink>
                </div>
                <div class="auth-form-wrapper">
                  <!-- Login Form -->
                  <form
                    method="post"
                    novalidate
                    @submit.prevent="handleLogin"
                  >
                    <div class="login-form">
                      <!-- Username -->
                      <VField>
                        <VControl icon="feather:user">
                          <VInput
                            type="text"
                            placeholder="نام کاربری"
                            autocomplete="username"
                          />
                        </VControl>
                      </VField>

                      <!-- Password -->
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
                            paddingless
                          />
                        </VControl>
                      </VField>

                      <!-- Submit -->
                      <div class="login">
                        <VButton
                          :loading="isLoading"
                          color="primary"
                          type="submit"
                          bold
                          fullwidth
                          raised
                        >
                       ورود
                        </VButton>
                      </div>

                      <div class="forgot-link has-text-centered">
                        <a>رمز عبور خود را فراموش کردید؟</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
