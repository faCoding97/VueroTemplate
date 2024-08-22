<script setup lang="ts">
type TabId = 'dashboards' | 'templates'
const activeTab = ref<TabId>('dashboards')
</script>

<template>
  <div class="navbar-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-3">
        <ul>
          <li :class="[activeTab === 'dashboards' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'dashboards'"
              @click="activeTab = 'dashboards'"
            >داشبورد</a>
          </li>
          <li :class="[activeTab === 'templates' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'templates'"
              @click="activeTab = 'templates'"
            >قالب ها</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div
        class="tab-content"
        :class="[activeTab === 'dashboards' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">
                  شخصی
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/dashboards">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-analytics-alt-1"
                      />
                      <span>شخصی (ورژن 1)</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/personal-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pie-chart"
                      />
                      <span>شخصی (ورژن 2)</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/personal-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-stats-up"
                      />
                      <span>شخصی (ورژن 3)</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/hobbies">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cloud-sun"
                      />
                      <span>سرگرمی ها</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/health">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-hospital-alt-3"
                      />
                      <span>سلامتی</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/writer">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-books"
                      />
                      <span>نویسنده</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/soccer">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-tshirt"
                      />
                      <span>فوتبال</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  مالی
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/dashboards/analytics">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-analytics-alt-1"
                      />
                      <span>تجزیه و تحلیل</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/stocks">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-stats-up"
                      />
                      <span>سهام</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/sales">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-credit-card"
                      />
                      <span>فروش</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/banking-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bank"
                      />
                      <span>بانکداری (ورژن 1)</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/banking-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bank"
                      />
                      <span>بانکداری (ورژن 2)</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/banking-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bank"
                      />
                      <span>بانکداری (ورژن 3)</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  بیزینس
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/dashboards/influencer">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cardiology"
                      />
                      <span>اینفلوئنسر</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/flights">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-plane-alt"
                      />
                      <span>رزرو پرواز</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/company">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-apartment"
                      />
                      <span>هیئت مدیره شرکت</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/human-ressources">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-users-alt"
                      />
                      <span>هیئت منابع انسانی</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/course">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-graduate"
                      />
                      <span>بورد دوره</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/ecommerce-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cart"
                      />
                      <span>تجارت الکترونیک V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/jobs">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-briefcase"
                      />
                      <span> مشاغل</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  برنامه ها
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/dashboards/food-delivery">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pizza"
                      />
                     <span>تحویل غذا</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="navbar-maps-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-map"
                      />
                      <span>نقشه (ورژن1)</span>
                      <VTag
                        label="v1.2"
                        color="primary"
                        outlined
                        curved
                      />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="navbar-maps-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-map"
                      />
                      <span>نقشه (ورژن2)</span>
                      <VTag
                        label="v1.2"
                        color="primary"
                        outlined
                        curved
                      />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/inbox">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-envelope"
                      />
                      <span>صندوق ورودی</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/messaging-v1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bubble"
                      />
                      <span>پیام رسانی (ورژن1)</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/messaging-v2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bubble"
                      />
                      <span>پیام رسانی (ورژن2)</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="tab-content"
        :class="[activeTab === 'templates' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">
                 سایدبار
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                  <span>ساید بار معمولی</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                  <span>ساید بار منحنی</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                  <span>ساید بار رنگی </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-4">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                      <span>منحنی رنگی </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-5">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                  <span>ساید بار برچسبی </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-6">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                  <span>ساید بار برچسب هاور</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-7">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                     <span> ساید بار شناور </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  نوار ناوبری
                </h4>
                <ul
                  class="has-slimscroll"
                  simplebar
                >
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                     <span> منوی معمولی </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                     <span> منوی محو شونده</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                     <span> منوی رنگی </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-4">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>ناوبری دراپ</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-5">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span> دراپ رنگی </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-6">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>منوی تمیز</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-7">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span> مرکز تمیز</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-8">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span> تمیز محو شونده</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  ویجت ها
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/dashboards/charts-apex">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pie-chart-alt"
                      />
                      <span>نمودار Apex </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/charts-billboardsjs">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bar-chart"
                      />
                      <span>Billboard JS</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/widgets-sample-ui">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>ویجت‌های رابط کاربری</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/widgets-sample-creative">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-2"
                      />
                      <span>ویجت های کریتیو</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/widgets-sample-list">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                     <span>ویجت  های لیست </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/widgets-sample-stats">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                    <span>ویجت  های آمار </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  ویزارد
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/wizard-v1">
                      <span>ویزارد V4</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/form-layouts-1">
                      <span>فرم V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/form-layouts-2">
                      <span>فرم V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/form-layouts-3">
                      <span>فرم V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/form-layouts-4">
                      <span>فرم V4</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/layout/navbar';
@import '/@src/scss/layout/responsive';
</style>
