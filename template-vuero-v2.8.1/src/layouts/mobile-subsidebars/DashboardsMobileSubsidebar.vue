<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>داشبورد</h3>
      </div>

      <ul
        class="submenu"
        data-simplebar
      >
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
            to="/sidebar/dashboards"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-analytics-alt-1"
            />
            <span>شخصی (ورژن 1)</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/personal-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pie-chart"
            />
            <span>شخصی (ورژن 2)</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/personal-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-stats-up"
            />
            <span>شخصی (ورژن 3)</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            داشبرد مالیاتی
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
            to="/sidebar/dashboards/analytics"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-analytics-alt-1"
            />
            <span>داشبورد تجزیه و تحلیل</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/stocks"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-stats-up"
            />
            <span>داشبورد سهام</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/sales"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-credit-card"
            />
           <span>داشبورد فروش </span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            بانکداری
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
            to="/sidebar/dashboards/banking-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bank"
            />
            <span>بانکداری (ورژن 1)</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/banking-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bank"
            />
            <span>بانکداری (ورژن 1)</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/banking-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bank"
            />
            <span>بانکداری (ورژن 2)</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/banking-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bank"
            />
            <span>بانکداری (ورژن 3)</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            بیزینس
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
            to="/sidebar/dashboards/flights"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-plane-alt"
            />
            <span>رزرو پرواز</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/company"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-apartment"
            />
            <span>هیئت مدیره شرکت</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/human-ressources"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-users-alt"
            />
            <span>هیئت منابع انسانی</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/course"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-graduate"
            />
            <span>داشبورد دوره</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/jobs"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-briefcase"
            />
            <span>داشبورد  مشاغل</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            سبک زندگی
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
            to="/sidebar/dashboards/influencer"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cardiology"
            />
            <span>اینفلوئنسر</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/hobbies"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cloud-sun"
            />
            <span>سرگرمی ها</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/health"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-hospital-alt-3"
            />
            <span>سلامتی</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/writer"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-books"
            />
            <span>نویسنده</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/video"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-video-alt-1"
            />
            <span>ویدیو</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/soccer"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-tshirt"
            />
            <span>داشبورد فوتبال</span>
          </RouterLink>
        </VCollapseLinks>
        <VCollapseLinks>
          <template #header>
           تجارت الکترونیک
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
            to="/sidebar/dashboards/ecommerce-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cart"
            />
            <span>تجارت الکترونیک V1</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            اپلیکیشن ها
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
            to="/sidebar/dashboards/food-delivery"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pizza"
            />
           <span>تحویل غذا</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/maps-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-map"
            />
            <span>نقشه (ورژن1)</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/maps-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-map"
            />
            <span>نقشه (ورژن2)</span>
          </RouterLink>
          <RouterLink
            to="/inbox"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-envelope"
            />
            <span>صندوق ورودی</span>
          </RouterLink>
          <RouterLink
            to="/messaging-v1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bubble"
            />
            <span>پیام رسانی (ورژن1)</span>
          </RouterLink>
          <RouterLink
            to="/messaging-v2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bubble"
            />
            <span>پیام رسانی (ورژن2)</span>
          </RouterLink>
        </VCollapseLinks>

        <li class="divider" />

        <li>
          <RouterLink to="/wizard-v1">
            ویزارد
          </RouterLink>
        </li>

        <li class="divider" />

        <VCollapseLinks>
          <template #header>
            نمودارها
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
            to="/sidebar/dashboards/charts-apex"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pie-chart-alt"
            />
            <span>نمودار Apex </span>
          </RouterLink>
          <RouterLink
            class="is-submenu"
            to="/sidebar/dashboards/charts-billboardsjs"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bar-chart"
            />
            <span>Billboard JS</span>
          </RouterLink>
        </VCollapseLinks>
        <VCollapseLinks>
          <template #header>
          ویجت  ها
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
            to="/sidebar/dashboards/widgets-sample-ui"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>ویجت‌های رابط کاربری</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/widgets-sample-creative"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-2"
            />
            <span>ویجت های کریتیو</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/widgets-sample-list"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
           <span>ویجت  های لیست </span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/widgets-sample-stats"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-2"
            />
          <span>ویجت  های آمار </span>
          </RouterLink>
        </VCollapseLinks>
        <VCollapseLinks>
          <template #header>
            استارترها
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
            to="/starters/sidebar-blank-page-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
        <span>ساید بار معمولی</span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
        <span>ساید بار منحنی</span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
        <span>ساید بار رنگی </span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>منحنی رنگی </span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
           <span> ساید بار منحنی رنگی </span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-5"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
        <span>ساید بار برچسبی </span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-6"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
        <span>ساید بار برچسب هاور</span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-7"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
           <span> ساید بار شناور </span>
          </RouterLink>

          <hr class="navbar-divider">

          <RouterLink
            to="/starters/sideblock-blank-page-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
           <span> ساید بلاک معمولی </span>
            <VTag
              label="v2.2"
              color="primary"
              size="tiny"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/starters/sideblock-blank-page-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>سایدبلاک منحنی</span>
            <VTag
              label="v2.2"
              color="primary"
              size="tiny"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/starters/sideblock-blank-page-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>سایدبلاک رنگی </span>
            <VTag
              label="v2.2"
              color="primary"
              size="tiny"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/starters/sideblock-blank-page-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>منحنی رنگی </span>
            <VTag
              label="v2.2"
              color="primary"
              size="tiny"
              outlined
              curved
            />
          </RouterLink>

          <hr class="navbar-divider">

          <RouterLink
            to="/starters/navbar-blank-page-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
           <span> منوی معمولی </span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
           <span> منوی محو شونده</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
           <span> منوی رنگی </span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
           <span> منوی دراپ داون</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-5"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>دراپ داون رنگی</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-6"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>منوی تمیز</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-7"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
           <span>منوی تمیز وسط چین</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-8"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
           <span>منوی تمیز محو </span>
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>
