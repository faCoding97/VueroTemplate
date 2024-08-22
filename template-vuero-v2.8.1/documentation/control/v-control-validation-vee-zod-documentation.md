### VeeValidate و Zod

[VeeValidate] (https://vee-validate.logaretm.com/v4/) مجموعه‌ای عالی از ابزارها را برای اعتبارسنجی فرم‌های شما ارائه می‌دهد که کاملاً با vuero کار می‌کنند.
ما به شما توصیه می کنیم از [zod](https://github.com/colinhacks/zod) برای اعلان طرح برای فرم های VeeValidate استفاده کنید، اما اگر قبلاً با آن آشنایی دارید، می توانید از [yup]() نیز استفاده کنید.

<!--code-->

```vue
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useFieldArray, useForm } from 'vee-validate'
import { z } from 'zod'
import VueScrollTo from 'vue-scrollto'

import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const notyf = useNotyf()
const { scrollTo } = VueScrollTo

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    email: z
      .string({
        required_error: 'نام خود را وارد کنید',
      })
      .email('یک آدرس ایمیل معتبر باید ارائه شود'),
    rating: z
      .number({
        required_error: 'ابتدا یک امتیاز  معتبر وارد کنید',
      })
      .gte(1, 'امتیاز باید حداقل 1 باشد'),
    password: z
      .string({
        required_error: 'رمز عبور خود را برای ورود وارد کنید',
      })
      .min(8, 'رمز عبور شما باید حداقل 8 کاراکتر داشته باشد'),
    passwordCheck: z.string(),
    birthdate: z
      .date({
        invalid_type_error: 'لطفا یک تاریخ معتبر وارد کنید',
        required_error: 'لطفا یک تاریخ وارد کنید',
      })
      .max(new Date(), 'شما نمی توانید در آینده متولد شوید')
      .nullable(),
    agreeTerms: z
      .boolean()
      .refine((value) => value, 'شما باید با شرایط خدمات ما موافقت کنید'),
    area: z.object({
      timezone: z.string().min(1, 'لطفاً یک منطقه زمانی انتخاب کنید'),
    }),
    interests: z
      .string()
      .array()
      .min(2, 'شما باید حداقل 2 مرکز مورد علاقه را انتخاب کنید')
      .max(3, 'می توانید حداکثر 3 مرکز مورد علاقه را انتخاب کنید'),
    allergens: z.string().array().max(4, 'شما می توانید حداکثر 4 آلرژن را انتخاب کنید'),
    feedback: z
      .array(
        z.object({
          title: z.string().min(10, 'عنوان تجربه شما باید حداقل 10 کاراکتر باشد'),
          rating: z.number().gte(1, 'امتیاز باید حداقل 1 باشد'),
        })
      )
      .min(1, 'شما باید حداقل 1 بازخورد ارسال کنید')
      .max(3, 'می توانید حداکثر 3 بازخورد ارسال کنید'),
    emailOptin: z.boolean(),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: 'تایید با رمز عبور مطابقت ندارد',
    path: ['passwordCheck'],
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

// we need to declare the schema for the form
const validationSchema = toTypedSchema(zodSchema)

// Set initial values for the form
const initialValues = computed<FormInput>(() => ({
  email: '',
  password: '',
  rating: 1,
  passwordCheck: '',
  birthdate: null,
  interests: [],
  allergens: [],
  feedback: [],
  agreeTerms: false,
  emailOptin: false,
}))

// here we create a vee-validate form context that
// will be used in all vuero form components
const { handleSubmit, setFieldError, handleReset, values, errors } = useForm({
  validationSchema,
  initialValues,
})

const { remove, push, fields } = useFieldArray<FormInput['feedback'][0]>('feedback')
const { errorMessage } = useField<FormInput['feedback'][0]>('feedback')

const loading = ref(false)

// here we handle our form submission
const handleSignup = handleSubmit(async (values) => {
  if (loading.value) return

  loading.value = true

  await sleep(1600)

  if (values.email !== 'awesome@cssninja.io') {
    setFieldError(
      'email',
      'این ایمیل قبلا گرفته شده است! نکته: از awesome@cssninja.io استفاده کنید'
    )
    scrollTo('#email')
    loading.value = false
    return
  }

  notyf.success('شما با موفقیت ثبت نام شدید!')
  loading.value = false
})
</script>

<template>
  <form method="post" novalidate @submit.prevent="handleSignup">
    <VField id="email" v-slot="{ field }" label="ایمیل شما">
      <VControl icon="feather:user">
        <VInput type="email" placeholder="john.doe@gmail.com" autocomplete="username" />
        <p v-if="field?.errorMessage" class="help is-danger">
          {{ field.errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField id="password" v-slot="{ field }" label="انتخاب رمز عبور">
      <VControl icon="feather:lock">
        <VInput type="password" placeholder="Not$3cret" autocomplete="new-password" />
        <p v-if="field?.errorMessage" class="help is-danger">
          {{ field.errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField id="passwordCheck" v-slot="{ field }" label="رمز عبور جدید خود را تأیید کنید">
      <VControl icon="feather:check">
        <VInput type="password" placeholder="Not$3cret" autocomplete="new-password" />
        <p v-if="field?.errorMessage" class="help is-danger">
          {{ field.errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField id="birthdate" v-slot="{ field }" label="تاریخ تولد">
      <VControl icon="feather:calendar">
        <ClientOnly>
          <VDatePicker
            :model-value="field?.value"
            color="green"
            trim-weeks
            @update:model-value="field?.handleChange"
          >
            <template #default="{ inputValue, inputEvents }">
              <input
                class="input"
                type="text"
                :value="inputValue"
                placeholder="انتخاب تاریخ تولد"
                v-on="inputEvents"
              />
              <p v-if="field?.errorMessage" class="help is-danger">
                {{ field.errorMessage }}
              </p>
            </template>
          </VDatePicker>
        </ClientOnly>
      </VControl>
    </VField>
    <VField
      id="interests"
      v-slot="{ field }"
      class="pb-4"
      label="2 یا 3 مورد علاقه انتخاب کنید"
    >
      <VControl>
        <VSelect multiple size="9">
          <VOption value="Food"> غذا</VOption>
          <VOption value="Home Appliances"> لوازم خانه </VOption>
          <VOption value="Computer & Office"> کامپیوتر و دفتر </VOption>
          <VOption value="Home Improvement">بهبود منزل </VOption>
          <VOption value="Home & Garden">خانه و باغ </VOption>
          <VOption value="Sports & Entertainment"> ورزش و سرگرمی </VOption>
          <VOption value="Toys & Hobbies">آموزش و لوازم اداری </VOption>
          <VOption value="Security & Protection"> حفاظت و امنیت </VOption>
          <VOption value="Lights & Lighting"> چراغ و روشنایی</VOption>
        </VSelect>
        <p v-if="field?.errorMessage" class="help is-danger">
          {{ field.errorMessage }}
        </p>
        <p class="help">
          دکمه <kbd>Ctrl</kbd> (ویندوز) / <kbd>Command</kbd> (Mac) را برای انتخاب چندین
          گزینه نگه دارید.
        </p>
      </VControl>
    </VField>
    <VField
      id="area"
      v-slot="{ field }"
      class="pb-4"
      label="منطقه زمانی خود را انتخاب کنید"
    >
      <VControl>
        <VSelect>
          <VOption :value="{ timezone: 'europe/paris', label: 'پاریس' }">
            europe
          </VOption>
          <VOption :value="{ timezone: 'asia/tokyo', label: 'توکیو' }"> asia </VOption>
          <VOption :value="{ timezone: 'america/new_york', label: 'New York' }">
            america
          </VOption>
          <VOption :value="{ timezone: 'australia/sydney', label: 'Sydney' }">
            australia
          </VOption>
        </VSelect>
        <p v-if="field?.errorMessage" class="help is-danger">
          {{ field.errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField id="allergens" v-slot="{ field }" label="آلرژن های خود را انتخاب کنید">
      <VControl>
        <VCheckbox class="pl-0" color="primary" value="peanuts"> بادام زمینی </VCheckbox>
        <VCheckbox id="allergens-milk" color="primary" value="milk"> شیر </VCheckbox>
        <VCheckbox id="allergens-egg" color="primary" value="egg"> تخم مرغ </VCheckbox>
        <VCheckbox id="allergens-fish" color="primary" value="fish"> ماهی </VCheckbox>
        <VCheckbox id="allergens-soybeans" color="primary" value="soybeans">
          دانه سویا
        </VCheckbox>
      </VControl>
      <p v-if="field?.errorMessage" class="help is-danger">
        {{ field.errorMessage }}
      </p>
    </VField>
    <div class="py-4">
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <div v-for="(element, index) in fields" class="my-3">
        <div class="columns">
          <VField
            :id="`feedback[${index}].title`"
            v-slot="{ field }"
            label="تجربه خود را نام ببرید"
            class="column is-two-fifths"
          >
            <VControl>
              <VInput
                type="email"
                placeholder="john.doe@gmail.com"
                autocomplete="username"
              />
              <p v-if="field?.errorMessage" class="help is-danger">
                {{ field.errorMessage }}
              </p>
            </VControl>
          </VField>
          <VField
            :id="`feedback[${index}].rating`"
            v-slot="{ field }"
            class="ml-4"
            label="امتیاز بدهید"
          >
            <VControl>
              <VRangeRating class="mt-5" size="medium" />
              <p v-if="field?.errorMessage" class="help is-danger">
                {{ field.errorMessage }}
              </p>
            </VControl>
          </VField>
          <VIconButton
            class="is-remove"
            :style="{}"
            light
            raised
            circle
            color="danger"
            icon="feather:trash-2"
            @click="() => remove(index)"
          />
        </div>
      </div>
      <div class="mb-5">
        <VButton @click="() => push({ rating: 3, title: '' })">افزودن بازخورد</VButton>
        <p v-if="errorMessage" class="help is-danger">
          {{ errorMessage }}
        </p>
      </div>
    </div>
    <VField id="agreeTerms" v-slot="{ field }">
      <VControl>
        <VCheckbox paddingless> موافقت میکنم با <a href="#">شرایط و ضوابط</a> </VCheckbox>

        <p v-if="field?.errorMessage" class="help is-danger">
          {{ field.errorMessage }}
        </p>
      </VControl>
    </VField>
    <VField id="emailOptin">
      <VControl>
        <VCheckbox color="primary" paddingless>
          من می خواهم اخبار و به روز رسانی های اختصاصی را دریافت کنم
        </VCheckbox>
      </VControl>
    </VField>
    <VButtons class="pt-4">
      <VButton :loading="loading" type="submit" color="primary"> ارسال</VButton>
      <VButton type="reset" @click="handleReset"> ریست </VButton>
    </VButtons>
    <div class="demo-code-wrapper">
      <div class="demo-state">
        <pre>{{ values }}</pre>
      </div>
      <div class="demo-state">
        <pre>{{ errors }}</pre>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.is-remove {
  margin-inline-start: 1.5rem;
  margin-top: 2.25rem;
}

.demo-code-wrapper {
  display: flex;
  flex-direction: column-reverse;
  margin-top: 2rem;
  overflow-x: auto;

  .demo-code {
    flex-grow: 1;
  }

  .demo-state {
    // flex-grow: 1;
    position: relative;
    margin-bottom: 1.5rem;
    max-width: 100%;

    &::before {
      position: absolute;
      top: 0.6em;
      inset-inline-end: 1em;
      z-index: 2;
      font-size: 0.8rem;
      color: #888;
      content: 'values';
    }
  }
}

@media only screen and (width <= 767px) {
  .is-remove {
    margin-inline-start: 1rem;
    margin-top: 1em;
    margin-bottom: 2.25rem;
  }
}
</style>
```

<!--/code-->
