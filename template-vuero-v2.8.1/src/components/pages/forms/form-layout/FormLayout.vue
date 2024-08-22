<script setup lang="ts">
const companySize = ref('')
const businessType = ref('')
const productToDemo = ref('')
const date = ref(new Date())

const { y } = useWindowScroll()

const isStuck = computed(() => {
  return y.value > 30
})
const onSubmit = () => {
  console.log('Form submitted!')
}
</script>

<template>
  <form
    method="post"
    novalidate
    class="form-layout"
    @submit.prevent="onSubmit"
  >
    <div class="form-outer">
      <div
        :class="[isStuck && 'is-stuck']"
        class="form-header stuck-header"
      >
        <div class="form-header-inner">
          <div class="left">
            <h3>درخواست نسخه ی نمایشی</h3>
          </div>
          <div class="right">
            <div class="buttons">
              <VButton
                icon="lnir lnir-arrow-right rem-100"
                to="/sidebar/layouts/profile-view"
                light
                dark-outlined
              >
                لغو
              </VButton>
              <VButton
                type="submit"
                color="primary"
                raised
              >
                تنظیم
              </VButton>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body">
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>اطلاعات شخصی</h4>
            <p>این به ما کمک می کند شما را بشناسیم</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField>
                <VLabel>نام</VLabel>
                <VControl icon="feather:user">
                  <VInput
                    type="text"
                    placeholder=""
                    autocomplete="given-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <VLabel>نام خانوادگی</VLabel>
                <VControl icon="feather:user">
                  <VInput
                    type="text"
                    placeholder=""
                    autocomplete="family-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField>
                <VLabel>ایمیل</VLabel>
                <VControl icon="feather:mail">
                  <VInput
                    type="email"
                    placeholder=""
                    autocomplete="email"
                    inputmode="email"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>اطلاعات شرکت</h4>
            <p>در مورد شرکت خود به ما بگویید</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField>
                <VLabel>نام شرکت</VLabel>
                <VControl icon="feather:briefcase">
                  <VInput
                    type="text"
                    placeholder=""
                    autocomplete="organization"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <VLabel>شماره شرکت</VLabel>
                <VControl icon="feather:phone">
                  <VInput
                    type="tel"
                    placeholder=""
                    autocomplete="tel"
                    inputmode="tel"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField v-slot="{ id }">
                <VLabel>اندازه شرکت</VLabel>
                <VControl>
                  <Multiselect
                    v-model="companySize"
                    :attrs="{ id }"
                    placeholder="انتخاب اندازه"
                    :options="[
                      '1-5 کارمند ',
                      '5-25 کارمند ',
                      '25-50 کارمند ',
                      '50-100 کارمند ',
                      '100+ کارمند ',
                    ]"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField v-slot="{ id }">
                <VLabel>نوع بیزینس</VLabel>
                <VControl>
                  <Multiselect
                    v-model="businessType"
                    :attrs="{ id }"
                    placeholder="انتخاب نوع"
                    :options="[
                      'دولتی',
                      'پزشکی',
                      'مالی',
                      'خدماتی',
                      'تکنولوژی',
                    ]"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField>
                <VLabel>ایمیل شرکت</VLabel>
                <VControl icon="feather:mail">
                  <VInput
                    type="email"
                    placeholder=""
                    autocomplete="email"
                    inputmode="email"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>اظهارات</h4>
            <p>چگونه نسخه ی نمایشی خود را دوست دارید؟</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField v-slot="{ id }">
                <VLabel>محصول به دمو</VLabel>
                <VControl>
                  <Multiselect
                    v-model="productToDemo"
                    :attrs="{ id }"
                    placeholder="انتخاب محصول"
                    :options="['استارتر Vuero', 'Vuero پرو', 'Vuero بیزینس']"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <ClientOnly>
                <VDatePicker
                  v-model="date"
                  color="green"
                  trim-weeks
                >
                  <template #default="{ inputValue, inputEvents }">
                    <VField>
                      <VLabel>تاریخ ترجیحی</VLabel>
                      <VControl icon="feather:calendar">
                        <input
                          class="input v-input"
                          type="text"
                          placeholder="انتخاب تاریح"
                          :value="inputValue"
                          v-on="inputEvents"
                        >
                      </VControl>
                    </VField>
                  </template>
                </VDatePicker>
              </ClientOnly>
            </div>
            <div class="column is-12">
              <VField>
                <VLabel>دستورالعمل های ویژه</VLabel>
                <VControl>
                  <VTextarea
                    class="textarea"
                    rows="4"
                    placeholder="هر جزئیاتی را که می خواهید بدانیم به ما بگویید..."
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="true"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/components/forms-outer';

.form-layout {
  max-width: 740px;
  margin: 0 auto;
}
</style>
