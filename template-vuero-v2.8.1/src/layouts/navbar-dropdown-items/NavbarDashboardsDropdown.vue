<script setup lang="ts">
const dropdownElement = ref()
const selectedCategory = ref('')
const route = useRoute()

watch([() => route.fullPath, dropdownElement], () => {
  if (dropdownElement.value) {
    dropdownElement.value.close?.()
  }
})
</script>

<template>
  <VDropdown
    ref="dropdownElement"
    class="has-mega-dropdown"
    modern
    spaced
  >
    <template #button="{ toggle }">
      <div
        class="dropdown-trigger is-trigger"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <VButton
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          icon-caret="feather:chevron-down"
          rounded
          @click="toggle"
        >
          Dashboards
        </VButton>
      </div>
    </template>

    <template #content>
      <div
        class="category-selector"
        :class="[selectedCategory !== '' && 'is-hidden']"
      >
        <div class="title-wrap">
          <h4>Select a category</h4>
        </div>
        <div class="category-selector-inner">
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'base'"
            @click="selectedCategory = 'base'"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Dashboards</span>
          </div>
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'extras'"
            @click="selectedCategory = 'extras'"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-grid-alt"
            />
            <span>قالب ها</span>
          </div>

          <img
            class="placeholder-image light-image"
            src="/@src/assets/illustrations/components/plugins.svg"
            alt=""
          >
          <img
            class="placeholder-image dark-image"
            src="/@src/assets/illustrations/components/plugins-dark.svg"
            alt=""
          >
        </div>
      </div>

      <div
        class="content-wrap"
        :class="[selectedCategory === '' && 'is-hidden']"
      >
        <button
          class="button is-circle back-button"
          @click="selectedCategory = ''"
        >
          <span class="icon is-small">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:arrow-left"
            />
          </span>
        </button>

        <div
          id="dashboards-base-menu"
          :class="[selectedCategory === 'base' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>All Dashboards</span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/dashboards"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-analytics-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span>شخصی (ورژن 1)</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/personal-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-pie-chart"
                    />
                  </div>
                  <div class="meta">
                    <span>شخصی (ورژن 2)</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/personal-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-stats-up"
                    />
                  </div>
                  <div class="meta">
                    <span>شخصی (ورژن 3)</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/influencer"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-cardiology"
                    />
                  </div>
                  <div class="meta">
                    <span>اینفلوئنسر</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/hobbies"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-apartment"
                    />
                  </div>
                  <div class="meta">
                    <span>سرگرمی ها</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/health"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-hospital-alt-3"
                    />
                  </div>
                  <div class="meta">
                    <span>سلامتی</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/writer"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-books"
                    />
                  </div>
                  <div class="meta">
                    <span>نویسنده</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/video"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-video-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span>ویدیو</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/soccer"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-tshirt"
                    />
                  </div>
                  <div class="meta">
                    <span>فوتبال</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i
                  aria-hidden="true"
                  class="iconify is-vhidden"
                  data-icon="feather:circle"
                />
                <span class="is-vhidden">All Dashboards</span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/dashboards/analytics"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-analytics-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span>تجزیه و تحلیل</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/stocks"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-stats-up"
                    />
                  </div>
                  <div class="meta">
                    <span>سهام</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/sales"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-credit-card"
                    />
                  </div>
                  <div class="meta">
                    <span>فروش</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/banking-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-bank"
                    />
                  </div>
                  <div class="meta">
                    <span>بانکداری (ورژن 1)</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/banking-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-bank"
                    />
                  </div>
                  <div class="meta">
                    <span>بانکداری (ورژن 2)</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/banking-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-bank"
                    />
                  </div>
                  <div class="meta">
                    <span>بانکداری (ورژن 3)</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/flights"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-plane-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>رزرو پرواز</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/company"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-apartment"
                    />
                  </div>
                  <div class="meta">
                    <span>هیئت مدیره شرکت</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/human-ressources"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-users-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>هیئت منابع انسانی</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/course"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-graduate"
                    />
                  </div>
                  <div class="meta">
                    <span>بورد دوره</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/jobs"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-briefcase"
                    />
                  </div>
                  <div class="meta">
                    <span>بورد مشاغل</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i
                  aria-hidden="true"
                  class="iconify is-vhidden"
                  data-icon="feather:circle"
                />
                <span class="is-vhidden">All Dashboards</span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/dashboards/ecommerce-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-cart"
                    />
                  </div>
                  <div class="meta">
                    <span>تجارت الکترونیک V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/food-delivery"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-pizza"
                    />
                  </div>
                  <div class="meta">
                   <span>تحویل غذا</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="navbar-maps-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-map"
                    />
                  </div>
                  <div class="meta">
                    <span>نقشه (ورژن1)</span>
                    <VTag
                      label="v1.2"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>
                <RouterLink
                  to="navbar-maps-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-map"
                    />
                  </div>
                  <div class="meta">
                    <span>نقشه (ورژن2)</span>
                    <VTag
                      label="v1.2"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>
                <RouterLink
                  to="/inbox"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-envelope"
                    />
                  </div>
                  <div class="meta">
                    <span>صندوق ورودی</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/messaging-v1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-bubble"
                    />
                  </div>
                  <div class="meta">
                    <span>پیام رسانی (ورژن1)</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/messaging-v2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-bubble"
                    />
                  </div>
                  <div class="meta">
                    <span>پیام رسانی (ورژن2)</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          id="dashboards-extras-menu"
          :class="[selectedCategory === 'extras' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-purple">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>Navigation</span>
              </h4>

              <div
                class="column-content"
                data-simplebar=""
              >
                <RouterLink
                  to="/starters/sidebar-blank-page-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout"
                    />
                  </div>
                  <div class="meta">
                <span>ساید بار معمولی</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/sidebar-blank-page-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout"
                    />
                  </div>
                  <div class="meta">
                <span>ساید بار منحنی</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/sidebar-blank-page-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout"
                    />
                  </div>
                  <div class="meta">
                <span>ساید بار رنگی </span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/sidebar-blank-page-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout"
                    />
                  </div>
                  <div class="meta">
                    <span>منحنی رنگی </span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/sidebar-blank-page-5"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout"
                    />
                  </div>
                  <div class="meta">
                <span>ساید بار برچسبی </span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/sidebar-blank-page-6"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout"
                    />
                  </div>
                  <div class="meta">
                    <span>Labels Hover</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/sidebar-blank-page-7"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout"
                    />
                  </div>
                  <div class="meta">
                   <span> ساید بار شناور </span>
                  </div>
                </RouterLink>
                <hr class="dropdown-divider">
                <RouterLink
                  to="/starters/navbar-blank-page-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-1"
                    />
                  </div>
                  <div class="meta">
                   <span> منوی معمولی </span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/navbar-blank-page-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-1"
                    />
                  </div>
                  <div class="meta">
                   <span> منوی محو شونده</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/navbar-blank-page-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-1"
                    />
                  </div>
                  <div class="meta">
                   <span> منوی رنگی </span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/navbar-blank-page-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span>ناوبری دراپ</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/navbar-blank-page-5"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span> دراپ رنگی </span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/navbar-blank-page-6"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span>منوی تمیز</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/navbar-blank-page-7"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span> مرکز تمیز</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/starters/navbar-blank-page-8"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span> تمیز محو شونده</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-secondary">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>ویجت ها</span>
              </h4>

              <div
                class="column-content"
                data-simplebar=""
              >
                <RouterLink
                  to="/navbar/dashboards/charts-apex"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-pie-chart-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>نمودار Apex </span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/charts-billboardsjs"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-bar-chart"
                    />
                  </div>
                  <div class="meta">
                    <span>Billboard JS</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/widgets-sample-ui"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-select"
                    />
                  </div>
                  <div class="meta">
                    <span>ویجت‌های رابط کاربری</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/widgets-sample-creative"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layers-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span>ویجت های فانتزی</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/widgets-sample-list"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-select"
                    />
                  </div>
                  <div class="meta">
                   <span>ویجت  های لیست </span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/dashboards/widgets-sample-stats"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-select"
                    />
                  </div>
                  <div class="meta">
                  <span>ویجت  های آمار </span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-success">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>فرم ها</span>
              </h4>

              <div class="column-content">
                <RouterLink
                  to="/wizard-v1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-timer"
                    />
                  </div>
                  <div class="meta">
                    <span>ویزارد V4</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/form-layouts-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-licencse"
                    />
                  </div>
                  <div class="meta">
                    <span>Layout V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/form-layouts-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-licencse"
                    />
                  </div>
                  <div class="meta">
                    <span>Layout V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/form-layouts-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-licencse"
                    />
                  </div>
                  <div class="meta">
                    <span>Layout V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/form-layouts-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-licencse"
                    />
                  </div>
                  <div class="meta">
                    <span>Layout V4</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>
