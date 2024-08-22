<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import { useTaskCompletionChart } from '/@src/data/dashboards/personal-v2/taskCompletionChart'
import { useTeamEfficiencyChart } from '/@src/data/dashboards/personal-v2/teamEfficiencyChart'
import { popovers } from '/@src/data/users/userPopovers'
import * as usersData from '/@src/data/dashboards/personal-v2/users'

const { completionOptions } = useTaskCompletionChart()
const { barOptions } = useTeamEfficiencyChart()
const avatarStack1 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack2 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack3 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack4 = usersData.avatarStack1 as VAvatarProps[]

const democheck = ref(['value_2'])
</script>

<template>
  <div class="personal-dashboard personal-dashboard-v2">
    <!--Personal Dashboard V2-->
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="dashboard-header">
          <VAvatar
            picture="/images/avatars/svg/vuero-1.svg"
            badge="/images/icons/flags/united-states-of-america.svg"
            size="xl"
          />
          <div class="user-meta is-dark-bordered-12">
            <h3 class="title is-4 is-narrow is-bold">
              خوش اومدی علی ز.
            </h3>
            <p class="light-text">
              واقعاً خوشحالم که دوباره شما را می بینم
            </p>
          </div>
          <div class="user-action">
            <h3 class="title is-2 is-narrow">
              3
            </h3>
            <p class="light-text">
             تسک در انتظار بررسی هستند
            </p>
            <a
              class="action-link"
              tabindex="0"
            >مشاهده تسک ها</a>
          </div>
          <div class="cta h-hidden-tablet-p">
            <div class="media-flex inverted-text">
              <i
                aria-hidden="true"
                class="lnil lnil-crown-alt-1"
              />
              <p class="white-text">
              استفاده از ابزارهای مدیریت پروژه و تیم ما را شروع کنید
              </p>
            </div>
            <a class="link inverted-text">اطلاعات بیشتر</a>
          </div>
        </div>
      </div>

      <div class="column is-8">
        <div class="dashboard-card has-margin-bottom">
          <div class="card-head">
            <h3 class="dark-inverted">
             پروژه های فعال
            </h3>
            <a
              class="action-link"
              tabindex="0"
            >مشاهده همه</a>
          </div>
          <div class="active-projects">
            <!--Project-->
            <VBlock
              title="پروژه اپلیکیشن تحویل"
              subtitle="به روز رسانی 30 دقیقه قبل"
              center
            >
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/1.jpg"
                  badge="/images/icons/stacks/illustrator.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack
                  :avatars="avatarStack1"
                  size="small"
                />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>

            <!--Project-->
            <VBlock
              title="داشبورد سلامت و تناسب اندام"
              subtitle="به روز رسانی 5 ساعت قبل"
              center
            >
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/2.png"
                  badge="/images/icons/stacks/reactjs.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack
                  :avatars="avatarStack2"
                  size="small"
                />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>

            <!--Project-->
            <VBlock
              title="دشبورد ردیابی آموزش"
              subtitle="به روز رسانی 7 ساعت قبل"
              center
            >
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/3.png"
                  badge="/images/icons/stacks/angular.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack
                  :avatars="avatarStack3"
                  size="small"
                />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>

            <!--Project-->
            <VBlock
              title="دشبورد  اپلیکیشن بانکداری"
              subtitle="به روز رسانی 10  ساعت قبل"
              center
            >
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/4.png"
                  badge="/images/icons/stacks/js.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack
                  :avatars="avatarStack4"
                  size="small"
                />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">
            تکمیل کار
            </h3>
            <a
              class="action-link"
              tabindex="0"
            >گزارشات</a>
          </div>
          <ApexChart
            id="completion-chart"
            :height="completionOptions.chart.height"
            :type="completionOptions.chart.type"
            :series="completionOptions.series"
            :options="completionOptions"
          />
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">
             کارایی تیم
            </h3>
            <a
              class="action-link"
              tabindex="0"
            >گزارشات</a>
          </div>
          <ApexChart
            id="efficiency-chart"
            :height="barOptions.chart.height"
            :type="barOptions.chart.type"
            :series="barOptions.series"
            :options="barOptions"
          />
        </div>
      </div>

      <div class="column is-4">
        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">
             تیم من
            </h3>
            <a
              class="action-link"
              tabindex="0"
            >مشاهده همه</a>
          </div>
          <div class="active-team">
            <ul class="user-list">
              <li>
                <div>
                  <Tippy
                    class="has-help-cursor"
                    interactive
                    :offset="[0, 10]"
                  >
                    <VAvatar picture="/demo/avatars/18.jpg" />
                    <template #content>
                      <UserPopoverContent :user="popovers.user18" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">
                  کاوه خ.
                  </div>
                  <div class="position">
                  طراح UI/UX
                  </div>
                </div>
                <div class="user-list-icons">
                  <a><i
                    aria-hidden="true"
                    class="fas fa-phone"
                  /></a>
                  <a><i
                    aria-hidden="true"
                    class="fas fa-video"
                  /></a>
                </div>
              </li>
              <li>
                <div>
                  <Tippy
                    class="has-help-cursor"
                    interactive
                    :offset="[0, 10]"
                  >
                    <VAvatar
                      initials="SC"
                      color="h-orange"
                    />
                    <template #content>
                      <UserPopoverContent :user="popovers.user120" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">
                   سارا نظری
                  </div>
                  <div class="position">
                  طراح UI/UX
                  </div>
                </div>
                <div class="user-list-icons">
                  <a><i
                    aria-hidden="true"
                    class="fas fa-phone"
                  /></a>
                  <a><i
                    aria-hidden="true"
                    class="fas fa-video"
                  /></a>
                </div>
              </li>
              <li>
                <div>
                  <Tippy
                    class="has-help-cursor"
                    interactive
                    :offset="[0, 10]"
                  >
                    <VAvatar picture="/demo/avatars/13.jpg" />
                    <template #content>
                      <UserPopoverContent :user="popovers.user13" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">
                  تارا س.
                  </div>
                  <div class="position">
                  طراح UI/UX
                  </div>
                </div>
                <div class="user-list-icons">
                  <a><i
                    aria-hidden="true"
                    class="fas fa-phone"
                  /></a>
                  <a><i
                    aria-hidden="true"
                    class="fas fa-video"
                  /></a>
                </div>
              </li>
              <li>
                <div>
                  <Tippy
                    class="has-help-cursor"
                    interactive
                    :offset="[0, 10]"
                  >
                    <VAvatar
                      initials="NL"
                      color="success"
                    />
                    <template #content>
                      <UserPopoverContent :user="popovers.user121" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">
                   نیاز عسگری
                  </div>
                  <div class="position">
                 توسعه دهنده فرانت اند
                  </div>
                </div>
                <div class="user-list-icons">
                  <a><i
                    aria-hidden="true"
                    class="fas fa-phone"
                  /></a>
                  <a><i
                    aria-hidden="true"
                    class="fas fa-video"
                  /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">
             انجام دادنی های امروز
            </h3>
            <a
              class="action-link"
              tabindex="0"
            >مشاهده همه</a>
          </div>
          <div class="active-list">
            <div class="checkboxes-list">
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox
                  v-model="democheck"
                  value="value_1"
                />
                <div class="item-meta">
                  <span class="dark-inverted">تماس با آقای محمدی</span>
                  <span>وایرفریم های اولیه پروژه را مرور کنید</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox
                  v-model="democheck"
                  value="value_2"
                />
                <div class="item-meta">
                  <span class="dark-inverted">به اتمام رساندن وایرفریم ها</span>
                  <span>همه تغییرات درخواستی را انجام دهید و منتشر کنید</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox
                  v-model="democheck"
                  value="value_3"
                />
                <div class="item-meta">
                  <span class="dark-inverted">به روز رسانی جدول زمانی</span>
                  <span>به روز رسانی تمام جداول زمانی تیم</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox
                  v-model="democheck"
                  value="value_4"
                />
                <div class="item-meta">
                  <span class="dark-inverted">درخواست پرداخت</span>
                  <span>ارسال فاکتور پروژه به مشتری</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-card">
          <VPlaceholderSection
            title="دریافت پرمیوم"
            subtitle="قفل ویژگی‌ها و ابزارهای تجاری بیشتر را با استفاده از دریافت پرمیوم باز کنید"
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/placeholders/chart-guy.svg"
                alt=""
              >
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/chart-guy-dark.svg"
                alt=""
              >
            </template>

            <template #action>
              <VButton
                color="primary"
                elevated
              >
              دریافت پرمیوم
              </VButton>
            </template>
          </VPlaceholderSection>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .personal-dashboard {
    margin-top: 30px;
  }
}

.personal-dashboard-v2 {
  .dashboard-header {
    @include vuero-s-card;

    display: flex;
    align-items: center;
    padding: 30px;

    .user-meta {
      padding: 0 3rem;
      border-inline-end: 1px solid var(--fade-grey-dark-3);

      h3 {
        max-width: 180px;
      }
    }

    .user-action {
      padding: 0 3rem;
    }

    .cta {
      position: relative;
      flex-grow: 2;
      max-width: 275px;
      margin-inline-start: auto;
      background: var(--primary-light-8);
      padding: 20px;
      border-radius: var(--radius-large);
      box-shadow: var(--primary-box-shadow);

      .lnil,
      .lnir {
        position: absolute;
        bottom: 1rem;
        inset-inline-end: 1rem;
        font-size: 4rem;
        opacity: 0.3;
      }

      .link {
        font-family: var(--font-alt);
        display: block;
        font-weight: 500;
        margin-top: 0.5rem;

        &:hover,
        &:focus {
          color: var(--smoke-white);
          opacity: 0.6;
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-s-card;

    padding: 30px;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 0;
      }
    }

    .active-projects,
    .active-team,
    .active-list {
      padding: 10px 0;
    }
  }
}

.is-dark {
  .personal-dashboard-v2 {
    .dashboard-header,
    .dashboard-card {
      @include vuero-card--dark;
    }

    .home-header {
      .cta {
        background: var(--primary-light-2);
        box-shadow: var(--primary-box-shadow);
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .personal-dashboard-v2 {
    .dashboard-header {
      flex-direction: column;
      text-align: center;

      .v-avatar {
        margin-bottom: 10px;
      }

      .user-meta {
        padding-top: 10px;
        padding-bottom: 10px;
        border: none;
      }

      .user-action {
        padding-bottom: 30px;
      }

      .cta {
        margin-inline-start: 0;
      }
    }

    .active-projects {
      .media-flex-center {
        .flex-end {
          .avatar-stack {
            display: none;
          }
        }
      }
    }
  }
}
</style>
