<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>چیدمان</h3>
      </div>

      <ul class="submenu">
        <VCollapseLinks>
          <template #header>
            لیست ها
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/sidebar/layouts"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt"
            />
            <span>نمای لیست V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/list-view-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt"
            />
            <span>نمای لیست V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/list-view-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt"
            />
            <span>نمای لیست V3</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/list-view-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt"
            />
            <span>نمای لیست V4</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
           فلکس  لیست
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
          <RouterLink
            to="/sidebar/layouts/list-flex-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt-1"
            />
            <span>فلکس  لیست V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/list-flex-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt-1"
            />
            <span>فلکس  لیست V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/list-flex-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt-1"
            />
            <span>فلکس  لیست V3</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
          جدول داده
             <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/sidebar/layouts/list-datatable-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt"
            />
            <span>لیست جدول V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/list-datatable-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt"
            />
            <span>لیست جدول V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/list-datatable-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt"
            />
            <span>لیست جدول V3</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
           چیدمان های فرم
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
          <RouterLink
            to="/sidebar/layouts/form-layouts-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-passport"
            />
            <span>چیدمان فرم  V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/form-layouts-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-passport"
            />
            <span>چیدمان فرم  V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/form-layouts-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-passport"
            />
            <span>چیدمان فرم  V3</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/form-layouts-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-passport"
            />
            <span>چیدمان فرم  V4</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/form-layouts-5"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-passport"
            />
            <span>چیدمان فرم  V5</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            جایگزین
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
          <RouterLink
            to="/sidebar/layouts/placeload-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-reload"
            />
            <span>جایگزین V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/placeload-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-reload"
            />
            <span>جایگزین V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/placeload-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-reload"
            />
            <span>جایگزین V3</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/placeload-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-reload"
            />
            <span>جایگزین V4</span>
          </RouterLink>
        </VCollapseLinks>

        <li class="divider" />

        <VCollapseLinks>
          <template #header>
          گرید کارت
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
          <RouterLink
            to="/sidebar/layouts/grid-cards-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-grid-alt"
            />
            <span>گرید کارت V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/grid-cards-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-grid-alt"
            />
            <span>گرید کارت V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/grid-cards-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-grid-alt"
            />
            <span>گرید کارت V3</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/grid-cards-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-grid-alt"
            />
            <span>گرید کارت V4</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
          گرید تایل
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/sidebar/layouts/grid-tiles-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-2"
            />
            <span>گرید تایل V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/grid-tiles-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-2"
            />
            <span>گرید تایل V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/grid-tiles-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-2"
            />
            <span>گرید تایل V3</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
          گرید کاربر 
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/sidebar/layouts"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-users-alt"
            />
            <span>گرید کاربر V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/grid-users-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-users-alt"
            />
            <span>گرید کاربر V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/grid-users-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-users-alt"
            />
            <span>گرید کاربر V3</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/grid-users-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-users-alt"
            />
            <span>گرید کاربر V4</span>
          </RouterLink>
        </VCollapseLinks>

        <li class="divider" />
        <VCollapseLinks>
          <template #header>
           داشبرد شخصی
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/sidebar/layouts/profile-view"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-user-alt"
            />
            <span>پروفایل</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/profile-edit"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pencil"
            />
            <span>ویرایش پروفایل</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/profile-notifications"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-notification"
            />
            <span> اطلاعیه ها</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/profile-settings"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cog"
            />
            <span>تنظیمات</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            صفحات
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            صفحات
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
          <RouterLink
            to="/auth/login"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pointer-right"
            />
            <span>ورود v1</span>
          </RouterLink>
          <RouterLink
            to="/auth/login-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pointer-right"
            />
            <span>ورود v2</span>
          </RouterLink>
          <RouterLink
            to="/auth/login-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pointer-right"
            />
            <span>ورود v3</span>
          </RouterLink>
          <RouterLink
            to="/auth/signup-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-crown"
            />
            <span>ثبت نام v1</span>
          </RouterLink>
          <RouterLink
            to="/auth/signup-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-crown"
            />
            <span>ثبت نام v2</span>
          </RouterLink>
          <RouterLink
            to="/auth/signup-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-crown"
            />
            <span>جریان ثبت نام</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/search-results"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-search-alt"
            />
            <span>نتایج جستجو</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/search-empty"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-search-alt"
            />
            <span> جستجوی خالی</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            صفحات فرعی
             <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/sidebar/layouts/saas-billing"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-credit-card"
            />
            <span> صورتحساب SaaS </span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/action-page-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-thunderbolt"
            />
            <span>صفحه اکشن  V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/action-page-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-thunderbolt"
            />
            <span>صفحه اکشن  V2</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            پروژه ها
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/sidebar/layouts/projects-projects-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-grid-alt"
            />
            <span> پروژه ها V1</span>
            <i
              aria-hidden="true"
              class="iconify is-auto"
              data-icon="feather:map-pin"
            />
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/projects-projects-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-grid-alt"
            />
            <span> پروژه ها V2</span>
            <i
              aria-hidden="true"
              class="iconify is-auto"
              data-icon="feather:map-pin"
            />
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/projects-projects-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-grid-alt"
            />
            <span> پروژه ها V3</span>
            <i
              aria-hidden="true"
              class="iconify is-auto"
              data-icon="feather:map-pin"
            />
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/projects-details"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span> جزئیات پروژه </span>
            <i
              aria-hidden="true"
              class="iconify is-auto"
              data-icon="feather:map-pin"
            />
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/kanban-board"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span> بورد کانبان</span>
            <i
              aria-hidden="true"
              class="iconify is-auto"
              data-icon="feather:map-pin"
            />
          </RouterLink>
        </VCollapseLinks>

        <li class="divider" />
        <VCollapseLinks>
          <template #header>
            کاربردی
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/sidebar/layouts/utility-account-confirm"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-thunderbolt"
            />
            <span>تأیید حساب</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/utility-promotion"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-magnet"
            />
            <span>صفحه ارتقا</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/utility-invoice"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-calculator-alt"
            />
            <span>فاکتور</span>
          </RouterLink>
          <RouterLink
            to="/status"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-checkmark-circle"
            />
            <span>وضعیت اپ</span>
          </RouterLink>
          <RouterLink
            to="/roadmap"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pyramids"
            />
            <span>نقشه راه</span>
          </RouterLink>
        </VCollapseLinks>
        <VCollapseLinks>
          <template #header>
            معارفه 
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/sidebar/layouts/onboarding-welcome"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-door-alt"
            />
            <span>معارفه خوش آمدگویی</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/onboarding-page-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-train"
            />
            <span>معارفه V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/onboarding-page-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-train-alt"
            />
            <span>معارفه V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/onboarding-page-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-car"
            />
            <span>معارفه V3</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/onboarding-page-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-car-alt"
            />
            <span>معارفه V4</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/layouts/onboarding-page-5"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-train"
            />
            <span>معارفه V5</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            صفحات خطا  
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/error/page-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cross-circle"
            />
            <span>خطای 404 V1</span>
          </RouterLink>
          <RouterLink
            to="/error/page-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cross-circle"
            />
            <span>خطای 404 V2</span>
          </RouterLink>
          <RouterLink
            to="/error/page-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cross-circle"
            />
            <span>خطای 404 V3</span>
          </RouterLink>
          <RouterLink
            to="/error/page-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cross-circle"
            />
            <span>خطای 404 V4</span>
          </RouterLink>
          <RouterLink
            to="/error/page-5"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cross-circle"
            />
            <span>خطای 500 V1</span>
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>
