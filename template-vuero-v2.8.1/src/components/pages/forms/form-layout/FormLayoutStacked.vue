<script setup lang="ts">
import { popovers } from '/@src/data/users/userPopovers'

const selectedColor = ref('')
const calendarTarget = ref('')
const notificationMedium = ref('')
const notificationTarget = ref('')
const date = ref({
  start: new Date(),
  end: new Date(),
})

const { y } = useWindowScroll()
const isStuck = computed(() => {
  return y.value > 30
})

const options = ref(['All day'])

const onSubmit = () => {
  console.log('Form submitted!')
}
</script>

<template>
  <form
    method="post"
    novalidate
    class="form-layout is-stacked"
    @submit.prevent="onSubmit"
  >
    <div class="form-outer">
      <div
        :class="[isStuck && 'is-stuck']"
        class="form-header stuck-header"
      >
        <div class="form-header-inner">
          <div class="left">
            <h3>تنظیم قرار ملاقات</h3>
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
        <div class="form-section">
          <div class="columns is-multiline">
            <div class="column is-12">
              <VField>
                <VControl icon="feather:slack">
                  <VInput
                    type="text"
                    placeholder="این جلسه درباره چیست؟"
                  />
                </VControl>
              </VField>
            </div>

            <ClientOnly>
              <div class="column is-6">
                <VDatePicker
                  v-model="date"
                  is-range
                  color="green"
                  trim-weeks
                >
                  <template #default="{ inputValue, inputEvents }">
                    <div class="columns v-calendar-combo">
                      <div class="column is-6">
                        <VField>
                          <VLabel>تاریخ شروع جلسه</VLabel>

                          <VControl icon="feather:calendar">
                            <input
                              type="text"
                              placeholder="Start Date"
                              :value="inputValue.start"
                              class="input form-datepicker"
                              v-on="inputEvents.start"
                            >
                          </VControl>
                        </VField>
                      </div>
                      <div class="column is-6">
                        <VField>
                          <VLabel class="is-vhidden">
                        تاریخ پایان جلسه
                          </VLabel>

                          <VControl icon="feather:calendar">
                            <VInput
                              placeholder="End Date"
                              :value="inputValue.end"
                              class="input form-datepicker"
                              v-on="inputEvents.end"
                            />
                          </VControl>
                        </VField>
                      </div>
                    </div>
                  </template>
                </VDatePicker>
              </div>

              <div class="column is-3">
                <VDatePicker
                  v-model="date.start"
                  color="green"
                  mode="time"
                  is24hr
                >
                  <template #default="{ inputValue, inputEvents }">
                    <VField>
                      <VLabel>زمان شروع جلسه</VLabel>
                      <VControl>
                        <input
                          type="text"
                          class="input form-timepicker"
                          :value="inputValue"
                          v-on="inputEvents"
                        >
                      </VControl>
                    </VField>
                  </template>
                </VDatePicker>
              </div>

              <div class="column is-3">
                <VDatePicker
                  v-model="date.end"
                  color="green"
                  mode="time"
                  is24hr
                >
                  <template #default="{ inputValue, inputEvents }">
                    <VField>
                      <VLabel class="is-vhidden">
                        زمان پایان جلسه
                      </VLabel>
                      <VControl>
                        <input
                          type="text"
                          class="input form-timepicker"
                          :value="inputValue"
                          v-on="inputEvents"
                        >
                      </VControl>
                    </VField>
                  </template>
                </VDatePicker>
              </div>
            </ClientOnly>

            <div class="column is-12">
              <VField>
                <VControl>
                  <VRadio
                    v-model="options"
                    value="All day"
                    label="هرروز"
                    color="primary"
                  />
                  <VRadio
                    v-model="options"
                    value="Repeat every week"
                    label="تکرار هر هفته"
                    color="primary"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>

        <div class="form-section is-grey">
          <div class="form-section-header">
            <div class="left">
              <h3>جزئیات پروژه</h3>
            </div>
            <div class="right">
              <VButton dark-outlined>
                افزودن اشخاص
              </VButton>
            </div>
          </div>

          <div class="form-section-inner is-horizontal">
            <VField
              v-slot="{ id }"
              horizontal
             label="شرکت کنندگان"
            >
              <VControl>
                <div class="participants">
                  <div>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      placement="top-start"
                    >
                      <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
                      <template #content>
                        <UserPopoverContent :user="popovers.user8" />
                      </template>
                    </Tippy>
                  </div>

                  <div>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      placement="top-start"
                    >
                      <VAvatar
                        color="warning"
                        initials="BT"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user122" />
                      </template>
                    </Tippy>
                  </div>

                  <div>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      placement="top-start"
                    >
                      <VAvatar picture="/demo/avatars/18.jpg" />
                      <template #content>
                        <UserPopoverContent :user="popovers.user18" />
                      </template>
                    </Tippy>
                  </div>

                  <div>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      placement="top-start"
                    >
                      <VAvatar
                        color="info"
                        initials="JD"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user123" />
                      </template>
                    </Tippy>
                  </div>

                  <div>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      placement="top-start"
                    >
                      <VAvatar picture="/demo/avatars/7.jpg" />
                      <template #content>
                        <UserPopoverContent :user="popovers.user7" />
                      </template>
                    </Tippy>
                  </div>

                  <button
                    :id="id"
                    type="button"
                    class="add-participant"
                  >
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:plus"
                    />
                  </button>
                </div>
              </VControl>
            </VField>

            <VField
              horizontal
              label="کجا"
            >
              <VControl
                icon="feather:map-pin"
                fullwidth
              >
                <VInput
                  type="text"
                  placeholder="به عنوان مثال، اتاق کنفرانس"
                />
              </VControl>
            </VField>
            <VField
              horizontal
              label="لینک جلسه"
            >
              <VControl
                icon="feather:map-pin"
                fullwidth
              >
                <VInput
                  type="url"
                  placeholder="https://zoom.com/m/156546"
                  inputmode="url"
                />
              </VControl>
            </VField>
            <VField
              v-slot="{ id }"
              horizontal
              label="Clendar"
            >
              <VControl fullwidth>
                <Multiselect
                  v-model="calendarTarget"
                  :attrs="{ id }"
                  placeholder="انتخاب تقویم"
                  :options="['تقویم من', 'تقویم تیم', 'تقویم شرکت']"
                />
              </VControl>
            </VField>

            <VField
              horizontal
              label="توضیحات"
            >
              <VControl fullwidth>
                <VTextarea
                  class="textarea"
                  rows="4"
                  placeholder="در مورد جزئیاتی که دوست دارید ما بدانیم به ما بگویید..."
                  autocomplete="off"
                  autocapitalize="off"
                  spellcheck="true"
                />
                <a class="add-link">افزودن پیوست ها</a>
              </VControl>
            </VField>
          </div>
        </div>

        <div class="form-section is-grey">
          <div class="form-section-inner is-horizontal">
            <VField
              horizontal
              label="کد رنگی"
            >
              <VControl fullwidth>
                <div class="color-codes">
                  <div
                    :class="[selectedColor === 'primary' && 'is-active']"
                    tabindex="0"
                    role="button"
                    class="color-code is-primary"
                    @click="selectedColor = 'primary'"
                    @keydown.space.prevent="selectedColor = 'primary'"
                  />
                  <div
                    :class="[selectedColor === 'secondary' && 'is-active']"
                    tabindex="0"
                    role="button"
                    class="color-code is-secondary"
                    @click="selectedColor = 'secondary'"
                    @keydown.space.prevent="selectedColor = 'secondary'"
                  />
                  <div
                    :class="[selectedColor === 'info' && 'is-active']"
                    tabindex="0"
                    role="button"
                    class="color-code is-info"
                    @click="selectedColor = 'info'"
                    @keydown.space.prevent="selectedColor = 'info'"
                  />
                  <div
                    :class="[selectedColor === 'success' && 'is-active']"
                    tabindex="0"
                    role="button"
                    class="color-code is-success"
                    @click="selectedColor = 'success'"
                    @keydown.space.prevent="selectedColor = 'success'"
                  />
                  <div
                    :class="[selectedColor === 'purple' && 'is-active']"
                    tabindex="0"
                    role="button"
                    class="color-code is-purple"
                    @click="selectedColor = 'purple'"
                    @keydown.space.prevent="selectedColor = 'purple'"
                  />
                </div>
              </VControl>
            </VField>

            <VField
              horizontal
              label="اطلاعیه ها"
            >
              <VField v-slot="{ id }">
                <VControl>
                  <Multiselect
                    v-model="notificationMedium"
                    :attrs="{ id }"
                    placeholder="انتخاب کانال"
                    :options="['ایمیل', 'پیامک', 'اسلک', 'بورد پروژه']"
                  />
                  <a class="add-link">افزودن اعلان</a>
                </VControl>
              </VField>
              <VField
                v-slot="{ id }"
                subcontrol
              >
                <VControl class="is-image-select">
                  <Multiselect
                    v-model="notificationTarget"
                    :attrs="{ id }"
                    placeholder="Select a target"
                    label="name"
                    value="name"
                    :options="[
                      {
                        name: 'همه',
                        value: '',
                        icon: '/images/avatars/placeholder.jpg',
                      },
                      {
                        name: 'علی ز.',
                        value: 'eric',
                        icon: '/images/avatars/svg/vuero-1.svg',
                      },
                      {
                        name: 'حامد ج.',
                        value: 'joshua',
                        icon: '/demo/avatars/12.jpg',
                      },
                      {
                        name: 'ملانی و.',
                        value: 'melany',
                        icon: '/demo/avatars/25.jpg',
                      },
                      {
                        name: 'آلیا خ.',
                        value: 'alice',
                        icon: '/demo/avatars/7.jpg',
                      },
                      {
                        name: 'کامران ل.',
                        value: 'esteban',
                        icon: '/demo/avatars/18.jpg',
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
            </VField>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/components/forms-outer';

.is-navbar {
  .form-layout {
    margin-top: 30px;
  }
}

.form-layout {
  max-width: 740px;
  margin: 0 auto;

  &.is-stacked {
    .form-outer {
      .form-body {
        padding: 0;

        .form-section {
          padding: 40px;
          border-bottom: 1px solid var(--fade-grey-dark-4);

          &.is-grey {
            background: #fafafa;
          }

          .form-section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--fade-grey-dark-4);
            padding-bottom: 20px;
            margin-bottom: 30px;

            .left {
              h3 {
                font-family: var(--font-alt);
                font-weight: 600;
                color: var(--dark-text);
              }
            }
          }

          .form-section-inner {
            &.is-horizontal {
              max-width: 540px;
            }

            .field {
              &.is-horizontal {
                .field-label {
                  padding-top: 0.75em;
                }
              }
            }
          }

          .columns {
            .column {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
          }

          .field {
            .control {
              .checkbox {
                padding: 0;
                padding-inline-end: 10px;
                font-size: 0.9rem;
              }
            }
          }

          .participants {
            display: flex;
            padding-bottom: 10px;

            .v-avatar {
              margin-inline-end: 8px;
            }

            .add-participant {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 40px;
              width: 40px;
              min-width: 40px;
              border-radius: var(--radius-rounded);
              border: 1.6px dashed var(--light-text);
              color: var(--light-text);
              padding: 0;
              background: none;
              margin-inline-start: 4px;
              cursor: pointer;
              transition:
                color 0.3s,
                background-color 0.3s,
                border-color 0.3s,
                height 0.3s,
                width 0.3s;

              &:hover,
              &:focus {
                border: 1.6px solid var(--primary);
                color: var(--primary);
              }

              &:focus-visible {
                outline-offset: var(--accessibility-focus-outline-offset);
                outline-width: var(--accessibility-focus-outline-width);
                outline-style: var(--accessibility-focus-outline-style);
                outline-color: var(--accessibility-focus-outline-color);
              }

              svg {
                height: 16px;
                width: 16px;
              }
            }
          }

          .color-codes {
            display: flex;
            align-items: center;
            height: 38px;

            .color-code {
              height: 14px;
              width: 14px;
              border-radius: var(--radius-rounded);
              background: var(--white);
              margin-inline-end: 10px;
              border: 3px solid var(--light-text);
              cursor: pointer;
              opacity: 0.6;
              transition:
                color 0.3s,
                background-color 0.3s,
                border-color 0.3s,
                height 0.3s,
                width 0.3s;

              &:hover,
              &:focus {
                opacity: 1;
              }

              &:focus-visible {
                outline-offset: var(--accessibility-focus-outline-offset);
                outline-width: var(--accessibility-focus-outline-width);
                outline-style: var(--accessibility-focus-outline-style);
                outline-color: var(--accessibility-focus-outline-color);
              }

              &.is-primary {
                border-color: var(--primary);

                &.is-active {
                  background: var(--primary);
                }
              }

              &.is-secondary {
                border-color: var(--secondary);

                &.is-active {
                  background: var(--secondary);
                }
              }

              &.is-info {
                border-color: var(--info);

                &.is-active {
                  background: var(--info);
                }
              }

              &.is-success {
                border-color: var(--success);

                &.is-active {
                  background: var(--success);
                }
              }

              &.is-purple {
                border-color: var(--purple);

                &.is-active {
                  background: var(--purple);
                }
              }
            }
          }

          .add-link {
            display: inline-block;
            padding: 4px 0;
            font-family: var(--font);
            font-weight: 500;
            font-size: 0.9rem;
            color: var(--primary);
          }
        }
      }
    }
  }
}

.is-dark {
  .form-layout {
    &.is-stacked {
      .form-outer {
        .form-body {
          .form-section {
            border-color: var(--dark-sidebar-light-12);

            &.is-grey {
              background: var(--dark-sidebar-light-4);
            }

            .form-section-header {
              border-color: var(--dark-sidebar-light-12);

              .left {
                h3 {
                  color: var(--dark-dark-text);
                }
              }
            }

            .form-section-inner {
              .add-link {
                color: var(--primary);
              }

              .color-codes {
                .color-code {
                  background: var(--dark-sidebar-light-6);

                  &.is-primary {
                    border-color: var(--primary);
                  }
                }
              }

              .participants {
                .add-participant {
                  &:hover {
                    border: 1.6px solid var(--primary);
                    color: var(--primary);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .form-layout {
    &.is-stacked {
      .form-outer {
        .form-body {
          .is-vhidden {
            display: none !important;
          }
        }
      }

      .v-calendar-combo {
        margin: 0 !important;

        .column {
          padding-top: 0 !important;
          padding-bottom: 0 !important;

          &:first-child {
            padding-inline-start: 0 !important;
          }

          &:last-child {
            padding-inline-end: 0 !important;
          }
        }
      }
    }
  }
}
</style>
