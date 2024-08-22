<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const notyf = useNotyf()
const { y } = useWindowScroll()

const isLoading = ref(false)
const isEditingLanguages = ref(false)
const isEditingSkills = ref(false)
const isEditingTools = ref(false)

const selectedLanguage = ref('')
const selectedLanguageLevel = ref('')

const selectedSkill = ref('')
const selectedSkillLevel = ref('')

const selectedTool = ref('')
const selectedToolLevel = ref('')

const isScrolling = computed(() => {
  return y.value > 30
})
const addLanguage = async () => {
  isEditingLanguages.value = false
  await onSave()
  selectedLanguage.value = ''
  selectedLanguageLevel.value = ''
}
const addSkill = async () => {
  isEditingSkills.value = false
  await onSave()
  selectedSkill.value = ''
  selectedSkillLevel.value = ''
}
const addTool = async () => {
  isEditingTools.value = false
  await onSave()
  selectedTool.value = ''
  selectedToolLevel.value = ''
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
          <h3>مهارت و ابزار</h3>
          <p>مهارت و ابزار خود را ویرایش کنید.</p>
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
        <div
          v-if="!isEditingLanguages"
          class="fieldset-heading"
        >
          <h4>زبان </h4>
          <p>به چند زبان صحبت میکنی؟</p>
        </div>
        <div
          v-else
          class="fieldset-heading"
        >
          <a
            class="action-link"
            tabindex="0"
            role="button"
            @keydown.space.prevent="isEditingLanguages = false"
            @click="isEditingLanguages = false"
          >
            لغو
          </a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form
            v-if="isEditingLanguages"
            method="post"
            novalidate
            class="setting-form"
            @submit.prevent="addLanguage"
          >
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <VField
                    v-slot="{ id }"
                    class="is-image-select"
                  >
                    <VControl>
                      <Multiselect
                        v-model="selectedLanguage"
                        :attrs="{ id }"
                        placeholder="انتخاب زبان"
                        label="name"
                        :options="[
                         
                          {
                            value: 'english',
                            name: 'انگلیسی',
                            icon: '/images/icons/flags/united-states-of-america.svg',
                          },
                          {
                            value: 'french',
                            name: 'فرانسوی',
                            icon: '/images/icons/flags/france.svg',
                          },
                          {
                            value: 'german',
                            name: 'آلمانی',
                            icon: '/images/icons/flags/germany.svg',
                          },
                          {
                            value: 'spanish',
                            name: 'اسپانیایی',
                            icon: '/images/icons/flags/spain.svg',
                          },
                        ]"
                      >
                        <template #singlelabel="{ value }">
                          <div class="multiselect-single-label">
                            <img
                              class="select-label-icon"
                              :src="value.icon"
                              alt=""
                            >
                            <span class="select-label-text">
                              {{ value.name }}
                            </span>
                          </div>
                        </template>
                        <template #option="{ option }">
                          <img
                            class="select-option-icon"
                            :src="option.icon"
                            alt=""
                          >
                          <span class="select-label-text">
                            {{ option.name }}
                          </span>
                        </template>
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField v-slot="{ id }">
                    <VControl>
                      <Multiselect
                        v-model="selectedLanguageLevel"
                        :attrs="{ id }"
                        placeholder="سطح خود را انتخاب کنید"
                        :options="[
                          {
                            value: '1',
                            label: 'سطح 1',
                          },
                          {
                            value: '2',
                            label: 'سطح 2',
                          },
                          {
                            value: '3',
                            label: 'سطح 3',
                          },
                          {
                            value: '4',
                            label: 'سطح 4',
                          },
                        ]"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VField>
                    <VControl icon="feather:message-circle">
                      <VInput
                        type="text"
                        placeholder="یک نظر سریع بنویس..."
                        autocomplete="off"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VButton
                    type="submit"
                    color="primary"
                    icon="fas fa-plus"
                    raised
                    fullwidth
                  >
                 افزودن زبان
                  </VButton>
                </div>
              </div>
            </div>
          </form>

          <template v-else>
            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/united-states-of-america.svg" />

              <div class="meta">
                <span class="dark-inverted">انگلیسی</span>
                <span>زبان مادری، مسلط</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/france.svg" />

              <div class="meta">
                <span class="dark-inverted">فرانسوی</span>
                <span>روان، نوشتاری و گفتاری</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/germany.svg" />

              <div class="meta">
                <span class="dark-inverted">آلمانی</span>
                <span>سطح مقدماتی</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/spain.svg" />

              <div class="meta">
                <span class="dark-inverted">اسپانیایی</span>
                <span>سطح مقدماتی</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Create Item-->
            <div class="setting-item is-create">
              <VIconWrap icon="lnil lnil-circle-plus" />

              <div class="meta">
                <span class="dark-inverted">مورد جدید</span>
                <span>یک مورد زبان جدید اضافه کنید</span>
              </div>
              <div class="end">
                <VButton
                  raised
                  dark-outlined
                  icon="fas fa-plus"
                  class="add-setting-item"
                  tabindex="0"
                  @keydown.space.prevent="isEditingLanguages = true"
                  @click="isEditingLanguages = true"
                >
                  افزودن
                </VButton>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div
          v-if="!isEditingSkills"
          class="fieldset-heading"
        >
          <h4>مهارت ها</h4>
          <p>بهترین مهارت خودرا اضافه کنید</p>
        </div>
        <div
          v-else
          class="fieldset-heading"
        >
          <a
            class="action-link"
            tabindex="0"
            role="button"
            @keydown.space.prevent="isEditingSkills = false"
            @click="isEditingSkills = false"
          >
            لغو
          </a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form
            v-if="isEditingSkills"
            method="post"
            novalidate
            class="setting-form"
            @submit.prevent="addSkill"
          >
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <VField
                    v-slot="{ id }"
                    class="is-image-select"
                  >
                    <VControl>
                      <Multiselect
                        v-model="selectedSkill"
                        :attrs="{ id }"
                        placeholder="انتخاب مهارت"
                        label="name"
                        :options="[
                          {
                            value: 'html',
                            name: 'Html5',
                            icon: '/images/icons/stacks/html5.svg',
                          },
                          {
                            value: 'css',
                            name: 'CSS3',
                            icon: '/images/icons/stacks/css3.svg',
                          },
                          {
                            value: 'javascript',
                            name: 'Javascript',
                            icon: '/images/icons/stacks/js.svg',
                          },
                          {
                            value: 'react',
                            name: 'React',
                            icon: '/images/icons/stacks/reactjs.svg',
                          },
                          {
                            value: 'angular',
                            name: 'Angular',
                            icon: '/images/icons/stacks/angular.svg',
                          },
                          {
                            value: 'vueJs',
                            name: 'VueJs',
                            icon: '/images/icons/stacks/vuejs.svg',
                          },
                          {
                            value: 'nodejs',
                            name: 'NodeJS',
                            icon: '/images/icons/stacks/nodejs.svg',
                          },
                          {
                            value: 'csharp',
                            name: 'C#',
                            icon: '/images/icons/stacks/csharp.svg',
                          },
                        ]"
                      >
                        <template #singlelabel="{ value }">
                          <div class="multiselect-single-label">
                            <img
                              class="select-label-icon"
                              :src="value.icon"
                              alt=""
                            >
                            <span class="select-label-text">
                              {{ value.name }}
                            </span>
                          </div>
                        </template>
                        <template #option="{ option }">
                          <img
                            class="select-option-icon"
                            :src="option.icon"
                            alt=""
                          >
                          <span class="select-label-text">
                            {{ option.name }}
                          </span>
                        </template>
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField v-slot="{ id }">
                    <VControl>
                      <Multiselect
                        v-model="selectedSkillLevel"
                        :attrs="{ id }"
                        placeholder="چند سال تجربه کاری دارید"
                        :options="[
                          {
                            value: '1',
                            label: '1 سال تجربه کاری',
                          },
                          {
                            value: '2',
                            label: '2 سال تجربه کاری',
                          },
                          {
                            value: '3',
                            label: '3 سال تجربه کاری',
                          },
                          {
                            value: '4',
                            label: '4 سال تجربه کاری',
                          },
                          {
                            value: '5',
                            label: '5 سال تجربه کاری',
                          },
                          {
                            value: '6',
                            label: '6 سال تجربه کاری',
                          },
                          {
                            value: '7',
                            label: '7 سال تجربه کاری',
                          },
                          {
                            value: '8',
                            label: '8 سال تجربه کاری',
                          },
                          {
                            value: '9',
                            label: '9 سال تجربه کاری',
                          },
                          {
                            value: '+10',
                            label: '+10 سال تجربه کاری',
                          },
                        ]"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VButton
                    type="submit"
                    color="primary"
                    icon="fas fa-plus"
                    raised
                    fullwidth
                  >
                   افزودن مهارت
                  </VButton>
                </div>
              </div>
            </div>
          </form>
          <template v-else>
            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/js.svg" />

              <div class="meta">
                <span class="dark-inverted">جاوااسکریپت</span>
                <span>7 سال تجربه</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/html5.svg" />

              <div class="meta">
                <span class="dark-inverted">Html5</span>
                <span>بیش از 10 سال تجربه</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/css3.svg" />

              <div class="meta">
                <span class="dark-inverted">CSS3</span>
                <span>بیش از 10 سال تجربه</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Create Item-->
            <div class="setting-item is-create">
              <VIconWrap icon="lnil lnil-circle-plus" />

              <div class="meta">
                <span class="dark-inverted">مورد جدید</span>
                <span>یک مورد مهارت جدید اضافه کنید</span>
              </div>
              <div class="end">
                <VButton
                  raised
                  dark-outlined
                  icon="fas fa-plus"
                  class="add-setting-item"
                  tabindex="0"
                  @keydown.space.prevent="isEditingSkills = true"
                  @click="isEditingSkills = true"
                >
                  افزودن
                </VButton>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div
          v-if="!isEditingTools"
          class="fieldset-heading"
        >
          <h4>ابزار</h4>
          <p>ابزارهایی را که با آنها کار می کنید اضافه کنید</p>
        </div>
        <div
          v-else
          class="fieldset-heading"
        >
          <a
            class="action-link"
            tabindex="0"
            role="button"
            @keydown.space.prevent="isEditingTools = false"
            @click="isEditingTools = false"
          >
            لغو
          </a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form
            v-if="isEditingTools"
            method="post"
            novalidateclass="setting-form"
            @submit.prevent="addTool"
          >
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <VField
                    v-slot="{ id }"
                    class="is-image-select"
                  >
                    <VControl>
                      <Multiselect
                        v-model="selectedTool"
                        :attrs="{ id }"
                        placeholder="انتخاب ابزار"
                        label="name"
                        :options="[
                          {
                            value: 'illustrator',
                            name: 'Illustrator',
                            icon: '/images/icons/stacks/illustrator.svg',
                          },
                          {
                            value: 'photoshop',
                            name: 'Photoshop',
                            icon: '/images/icons/stacks/photoshop.svg',
                          },
                          {
                            value: 'jira',
                            name: 'Jira Software',
                            icon: '/demo/photos/tools/jira.svg',
                          },
                          {
                            value: 'office',
                            name: 'MS Office',
                            icon: '/demo/photos/tools/office.svg',
                          },
                        ]"
                      >
                        <template #singlelabel="{ value }">
                          <div class="multiselect-single-label">
                            <img
                              class="select-label-icon"
                              :src="value.icon"
                              alt=""
                            >
                            <span class="select-label-text">
                              {{ value.name }}
                            </span>
                          </div>
                        </template>
                        <template #option="{ option }">
                          <img
                            class="select-option-icon"
                            :src="option.icon"
                            alt=""
                          >
                          <span class="select-label-text">
                            {{ option.name }}
                          </span>
                        </template>
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField v-slot="{ id }">
                    <VControl>
                      <Multiselect
                        v-model="selectedToolLevel"
                        :attrs="{ id }"
                        placeholder="انتخاب سطح"
                        :options="[
                          {
                            value: '1',
                            label: 'سطح 1',
                          },
                          {
                            value: '2',
                            label: 'سطح 2',
                          },
                          {
                            value: '3',
                            label: 'سطح 3',
                          },
                          {
                            value: '4',
                            label: 'سطح 4',
                          },
                          {
                            value: '5',
                            label: 'سطح 5',
                          },
                        ]"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VButton
                    type="submit"
                    color="primary"
                    icon="fas fa-plus"
                    raised
                    fullwidth
                  >
                    افزودن ابزار
                  </VButton>
                </div>
              </div>
            </div>
          </form>

          <template v-else>
            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/illustrator.svg" />

              <div class="meta">
                <span class="dark-inverted">Illustrator</span>
                <span>سطح پیشرفته</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/demo/photos/tools/jira.svg" />

              <div class="meta">
                <span class="dark-inverted">Jira Software</span>
                <span>سطح  متوسط</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/demo/photos/tools/office.svg" />

              <div class="meta">
                <span class="dark-inverted">MS Office</span>
                <span>سطح  کارشناس</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Create Item-->
            <div class="setting-item is-create">
              <VIconWrap icon="lnil lnil-circle-plus" />

              <div class="meta">
                <span class="dark-inverted">مورد جدید</span>
                <span>یک مورد ابزار جدید اضافه کنید</span>
              </div>
              <div class="end">
                <VButton
                  raised
                  dark-outlined
                  icon="fas fa-plus"
                  class="add-setting-item"
                  tabindex="0"
                  @keydown.space.prevent="isEditingTools = true"
                  @click="isEditingTools = true"
                >
                  افزودن
                </VButton>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
