<script setup lang="ts">
type TabId = 'list' | 'grid' | 'app' | 'utility'
const activeTab = ref<TabId>('list')
</script>

<template>
  <div class="navbar-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-4">
        <ul>
          <li :class="[activeTab === 'list' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'list'"
              @click="activeTab = 'list'"
            >نمای لیست ها</a>
          </li>
          <li :class="[activeTab === 'grid' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'grid'"
              @click="activeTab = 'grid'"
            >نمای گرید ها</a>
          </li>
          <li :class="[activeTab === 'app' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'app'"
              @click="activeTab = 'app'"
            >صفحات</a>
          </li>
          <li :class="[activeTab === 'utility' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'utility'"
              @click="activeTab = 'utility'"
           >کاربردی</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div
        id="list-pages-tab"
        class="tab-content"
        :class="[activeTab === 'list' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">
                  لیست ها
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-list-alt"
                      />
                      <span>نمای لیست V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-view-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-list-alt"
                      />
                      <span>نمای لیست V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-view-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-list-alt"
                      />
                      <span>نمای لیست V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-view-4">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-list-alt"
                      />
                      <span>نمای لیست V4</span>
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
                  فلکس لیست 
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/list-flex-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-list-alt-1"
                      />
                      <span>فلکس  لیست V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-flex-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-list-alt-1"
                      />
                      <span>فلکس  لیست V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-flex-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-list-alt-1"
                      />
                      <span>فلکس  لیست V3</span>
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
                 جدول های داده
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/list-datatable-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt"
                      />
                      <span>لیست جدول V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-datatable-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt"
                      />
                      <span>لیست جدول V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-datatable-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt"
                      />
                      <span>لیست جدول V3</span>
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
                <a
                  href="https://cssninja.io"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="/images/icons/misc/buoy.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/icons/misc/buoy-dark.svg"
                    alt=""
                  >
                  <h3>پشتیبانی</h3>
                </a>
                <a
                  href="https://docs.cssninja.io/vuero"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="/images/icons/misc/docs.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/icons/misc/docs-dark.svg"
                    alt=""
                  >
                  <h3>مستندات</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="grid-pages-tab"
        class="tab-content"
        :class="[activeTab === 'grid' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">
                  کارت ها
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-cards-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-grid-alt"
                      />
                      <span>گرید کارت V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-cards-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-grid-alt"
                      />
                      <span>گرید کارت V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-cards-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-grid-alt"
                      />
                      <span>گرید کارت V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-cards-4">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-grid-alt"
                      />
                      <span>گرید کارت V4</span>
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
                  تایل ها
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-tiles-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-2"
                      />
                      <span>گرید تایل V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-tiles-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-2"
                      />
                      <span>گرید تایل V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-tiles-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-2"
                      />
                      <span>گرید تایل V3</span>
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
                  کاربران
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-users-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-users-alt"
                      />
                      <span>گرید کاربر V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-users-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-users-alt"
                      />
                      <span>گرید کاربر V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-users-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-users-alt"
                      />
                      <span>گرید کاربر V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-users-4">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-users-alt"
                      />
                      <span>گرید کاربر V4</span>
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
                <a
                  href="https://cssninja.io"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="/images/icons/misc/buoy.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/icons/misc/buoy-dark.svg"
                    alt=""
                  >
                  <h3>پشتیبانی</h3>
                </a>
                <a
                  href="https://docs.cssninja.io/vuero"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="/images/icons/misc/docs.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/icons/misc/docs-dark.svg"
                    alt=""
                  >
                  <h3>مستندات</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="app-pages-tab"
        class="tab-content"
        :class="[activeTab === 'app' && 'is-active']"
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
                    <RouterLink to="/navbar/layouts/profile-view">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-user-alt"
                      />
                      <span>پروفایل</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/profile-edit">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pencil"
                      />
                      <span>ویرایش پروفایل</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/profile-notifications">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-notification"
                      />
                      <span> اطلاعیه ها</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/profile-settings">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cog"
                      />
                      <span>تنظیمات</span>
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
                 صفحات
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/auth/login">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pointer-right"
                      />
                      <span>ورود v1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/auth/login-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pointer-right"
                      />
                      <span>ورود v2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/auth/login-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pointer-right"
                      />
                      <span>ورود v3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/auth/signup-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-crown"
                      />
                      <span>ثبت نام v1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/auth/signup-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-crown"
                      />
                      <span>ثبت نام v2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/auth/signup-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-crown"
                      />
                      <span>جریان ثبت نام</span>
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
                  صفحات فرعی
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/saas-billing">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-credit-card"
                      />
                      <span> صورتحساب SaaS </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="navbar">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-door-alt"
                      />
                      <span>خوش آمدید</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/action-page-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-thunderbolt"
                      />
                      <span>صفحه اکشن  V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/action-page-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-thunderbolt"
                      />
                      <span>صفحه اکشن  V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/search-results">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-search-alt"
                      />
                      <span>نتایج جستجو</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/search-empty">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-search-alt"
                      />
                      <span> جستجوی خالی</span>
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
                 پروژه ها
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/projects-projects-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-grid-alt"
                      />
                      <span> پروژه ها V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/projects-projects-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-grid-alt"
                      />
                      <span> پروژه ها V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/projects-projects-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-grid-alt"
                      />
                      <span> پروژه ها V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/projects-details">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                      <span> جزئیات پروژه </span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/kanban-board">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>بورد پروژه</span>
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
        id="utility-pages-tab"
        class="tab-content"
        :class="[activeTab === 'utility' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">
                  کاربردی
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/utility-account-confirm">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-thunderbolt"
                      />
                      <span>تأیید حساب</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/utility-promotion">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-magnet"
                      />
                      <span>صفحه ارتقا</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/utility-invoice">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-calculator-alt"
                      />
                      <span>فاکتور</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/status">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-checkmark-circle"
                      />
                      <span>وضعیت اپ</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/roadmap">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pyramids"
                      />
                      <span>نقشه راه</span>
                      <VTag
                        label="v2.4"
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
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  معارفه
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/onboarding-page-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-train"
                      />
                      <span>معارفه V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/onboarding-page-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-train-alt"
                      />
                      <span>معارفه V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/onboarding-page-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-car"
                      />
                      <span>معارفه V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/onboarding-page-4">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-car-alt"
                      />
                      <span>معارفه V4</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/onboarding-page-5">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-train-alt"
                      />
                      <span>معارفه V5</span>
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
                  خطا
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/error/page-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cross-circle"
                      />
                      <span>صفحه خطا  V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/error/page-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cross-circle"
                      />
                      <span>صفحه خطا  V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/error/page-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cross-circle"
                      />
                      <span>صفحه خطا  V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/error/page-4">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cross-circle"
                      />
                      <span>صفحه خطا  V4</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/error/page-5">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cross-circle"
                      />
                      <span>صفحه خطا  V5</span>
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
                  جایگزین
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/placeload-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil lnil-reload"
                      />
                      <span>جایگزین V1</span>
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
                    <RouterLink to="/navbar/layouts/placeload-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil lnil-reload"
                      />
                      <span>جایگزین V2</span>
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
                    <RouterLink to="/navbar/layouts/placeload-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil lnil-reload"
                      />
                      <span>جایگزین V3</span>
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
                    <RouterLink to="/navbar/layouts/placeload-4">
                      <i
                        aria-hidden="true"
                        class="lnil lnil lnil-reload"
                      />
                      <span>جایگزین V4</span>
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
@import '/@src/scss/abstracts/mixins';
@import '/@src/scss/layout/navbar';
@import '/@src/scss/layout/responsive';
</style>
