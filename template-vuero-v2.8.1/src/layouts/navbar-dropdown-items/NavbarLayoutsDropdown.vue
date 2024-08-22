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
          Layouts
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
            @keydown.space.prevent="selectedCategory = 'lists'"
            @click="selectedCategory = 'lists'"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-list-alt"
            />
            <span>لیست ها</span>
          </div>
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'grids'"
            @click="selectedCategory = 'grids'"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-grid-alt"
            />
            <span>گرید ها</span>
          </div>
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'pages'"
            @click="selectedCategory = 'pages'"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>صفحات</span>
          </div>
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'subpages'"
            @click="selectedCategory = 'subpages'"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>صفحات فرعی</span>
          </div>
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'utility'"
            @click="selectedCategory = 'utility'"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-reload"
            />
            <span>کاربردی </span>
          </div>
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
          id="lists-menu"
          :class="[selectedCategory === 'lists' && 'is-active']"
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
                <span>نمای لیست ها</span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/layouts"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-list-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>نمای لیست V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-view-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-list-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>نمای لیست V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-view-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-list-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>نمای لیست V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-view-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-list-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span>نمای لیست V4</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-green">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>فلکس لیست </span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/layouts/list-flex-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-list-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span>فلکس  لیست V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-flex-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-list-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span>فلکس  لیست V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-flex-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-list-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span>فلکس  لیست V3</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-orange">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>Datatables</span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/layouts/list-datatable-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>لیست جدول V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-datatable-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>لیست جدول V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-datatable-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>لیست جدول V3</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          id="grids-menu"
          :class="[selectedCategory === 'grids' && 'is-active']"
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
                <span>کارت ها</span>
              </h4>

              <div class="column-content">
                <RouterLink
                  to="/navbar/layouts/grid-cards-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-grid-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید کارت V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-cards-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-grid-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید کارت V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-cards-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-grid-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید کارت V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-cards-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-grid-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید کارت V4</span>
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
                <span>تایل ها</span>
              </h4>

              <div class="column-content">
                <RouterLink
                  to="/navbar/layouts/grid-tiles-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-2"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید تایل V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-tiles-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-2"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید تایل V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-tiles-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-2"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید تایل V3</span>
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
                <span>کاربران</span>
              </h4>

              <div class="column-content">
                <RouterLink
                  to="/navbar/layouts/grid-users-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-users-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید کاربر V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-users-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-users-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید کاربر V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-users-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-users-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید کاربر V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-users-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-users-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>گرید کاربر V4</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          id="pages-menu"
          :class="[selectedCategory === 'pages' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-yellow">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>Personal</span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/layouts/profile-view"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-user-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>User Profile</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/profile-edit"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-pencil"
                    />
                  </div>
                  <div class="meta">
                    <span>ویرایش پروفایل</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/profile-notifications"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-notification"
                    />
                  </div>
                  <div class="meta">
                    <span> اطلاعیه ها</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/profile-settings"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-cog"
                    />
                  </div>
                  <div class="meta">
                    <span>تنظیمات</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-primary">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>صفحات</span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/auth/login"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-pointer-right"
                    />
                  </div>
                  <div class="meta">
                    <span>ورود v1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/auth/login-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-pointer-right"
                    />
                  </div>
                  <div class="meta">
                    <span>ورود v2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/auth/login-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-pointer-right"
                    />
                  </div>
                  <div class="meta">
                    <span>ورود v3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/auth/signup-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-crown"
                    />
                  </div>
                  <div class="meta">
                    <span>ثبت نام v1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/auth/signup-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-crown"
                    />
                  </div>
                  <div class="meta">
                    <span>ثبت نام v2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/auth/signup-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-crown"
                    />
                  </div>
                  <div class="meta">
                    <span>جریان ثبت نام</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/search-results"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-search-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>نتایج جستجو</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/search-empty"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-search-alt"
                    />
                  </div>
                  <div class="meta">
                    <span> جستجوی خالی</span>
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
                <span>پروژه ها</span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/layouts/projects-projects-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-grid-alt"
                    />
                  </div>
                  <div class="meta">
                    <span> پروژه ها V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/projects-projects-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-grid-alt"
                    />
                  </div>
                  <div class="meta">
                    <span> پروژه ها V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/projects-projects-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-grid-alt"
                    />
                  </div>
                  <div class="meta">
                    <span> پروژه ها V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/projects-details"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout"
                    />
                  </div>
                  <div class="meta">
                    <span> جزئیات پروژه </span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/kanban-board"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-layout-alt-1"
                    />
                  </div>
                  <div class="meta">
                    <span> بورد کانبان</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          id="subpages-menu"
          :class="[selectedCategory === 'subpages' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-green">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>صفحات فرعی</span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/layouts/saas-billing"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-credit-card"
                    />
                  </div>
                  <div class="meta">
                    <span> صورتحساب SaaS </span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="navbar"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-door-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>خوش آمدید</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/action-page-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-thunderbolt"
                    />
                  </div>
                  <div class="meta">
                    <span>صفحه اکشن  V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/action-page-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-thunderbolt"
                    />
                  </div>
                  <div class="meta">
                    <span>صفحه اکشن  V2</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-yellow">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>کاربردی </span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/layouts/utility-account-confirm"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-thunderbolt"
                    />
                  </div>
                  <div class="meta">
                    <span>تأیید حساب</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/utility-promotion"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-magnet"
                    />
                  </div>
                  <div class="meta">
                    <span>صفحه ارتقا</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/utility-invoice"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-calculator-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>فاکتور</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/status"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-checkmark-circle"
                    />
                  </div>
                  <div class="meta">
                    <span>وضعیت اپ</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/roadmap"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-pyramids"
                    />
                  </div>
                  <div class="meta">
                    <span>نقشه راه</span>
                    <VTag
                      label="v2.4"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
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
                <span>معارفه</span>
              </h4>

              <div class="column-content">
                <RouterLink
                  to="/navbar/layouts/onboarding-page-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-train"
                    />
                  </div>
                  <div class="meta">
                    <span>معارفه V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/onboarding-page-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-train-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>معارفه V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/onboarding-page-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-car"
                    />
                  </div>
                  <div class="meta">
                    <span>معارفه V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/onboarding-page-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-car-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>معارفه V4</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/onboarding-page-5"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-train-alt"
                    />
                  </div>
                  <div class="meta">
                    <span>معارفه V5</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          id="utility-menu"
          :class="[selectedCategory === 'utility' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-secondary">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                />
                <span>کاربردی </span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/error/page-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-cross-circle"
                    />
                  </div>
                  <div class="meta">
                    <span>صفحه خطا  V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/error/page-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-cross-circle"
                    />
                  </div>
                  <div class="meta">
                    <span>صفحه خطا  V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/error/page-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-cross-circle"
                    />
                  </div>
                  <div class="meta">
                    <span>صفحه خطا  V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/error/page-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-cross-circle"
                    />
                  </div>
                  <div class="meta">
                    <span>صفحه خطا  V4</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/error/page-5"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-cross-circle"
                    />
                  </div>
                  <div class="meta">
                    <span>صفحه خطا  V5</span>
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
                <span>جایگزین</span>
              </h4>

              <div
                class="column-content"
                data-simplebar
              >
                <RouterLink
                  to="/navbar/layouts/placeload-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-reload"
                    />
                  </div>
                  <div class="meta">
                    <span>جایگزین V1</span>
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
                  to="/navbar/layouts/placeload-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-reload"
                    />
                  </div>
                  <div class="meta">
                    <span>جایگزین V2</span>
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
                  to="/navbar/layouts/placeload-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-reload"
                    />
                  </div>
                  <div class="meta">
                    <span>جایگزین V3</span>
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
                  to="/navbar/layouts/placeload-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i
                      aria-hidden="true"
                      class="lnil lnil-reload"
                    />
                  </div>
                  <div class="meta">
                    <span>جایگزین V4</span>
                    <VTag
                      label="v1.2"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
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
