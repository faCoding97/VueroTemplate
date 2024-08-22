<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const notyf = useNotyf()
const { y } = useWindowScroll()

const isLoading = ref(false)
const twoFactor = ref(true)
const notifications = ref(false)
const notificationsLow = ref(false)
const marketing = ref(false)
const partners = ref(false)

const isScrolling = computed(() => {
  return y.value > 30
})
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
          <h3>تنظیمات</h3>
          <p>تنظیمات و تنظیمات حساب خود را ویرایش کنید</p>
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
    <form
      method="post"
      novalidate
      class="form-body"
      @submit.prevent="onSave"
    >
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>تغییر رمز عبور</h4>
          <p>برای بهبود امنیت حساب</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:unlock">
                <VInput
                  type="password"
                  placeholder="رمز عبور قدیمی"
                  autocomplete="current-password"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:lock">
                <VInput
                  type="password"
                  placeholder="رمز عبور جدید"
                  autocomplete="new-password"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:lock">
                <VInput
                  type="password"
                  placeholder="تکرار رمز عبور جدید"
                  autocomplete="new-password"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>احراز هویت 2 عاملی</h4>
          <p>احراز هویت ۲ عاملی را فعال یا غیرفعال کنید</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="twoFactor"
                  label="فعال / غیر فعال کردن 2 عاملی"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div
            v-if="twoFactor"
            class="column is-12"
          >
            <VField>
              <VControl icon="feather:smartphone">
                <VInput
                  type="text"
                  placeholder="شماره تلفن"
                  autocomplete="tel"
                  inputmode="tel"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>نوتیفیکیشن ها</h4>
          <p>نحوه دریافت اعلان ها را پیکربندی کنید</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="notifications"
                  label="غیر فعال کردن همه اطلاعیه ها"
                  color="primary"
                />
              </VControl>
            </VField>

            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="notificationsLow"
                  label="غیر فعال کردن اطلاعیه ها با اولویت پایین"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>مارکتینگ</h4>
          <p>نحوه دریافت تبلیغات را پیکربندی کنید</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="marketing"
                  label="ایمیل های بازاریابی را فعال کنید"
                  color="primary"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="partners"
                  label="ایمیل های شرکا را فعال کنید"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
