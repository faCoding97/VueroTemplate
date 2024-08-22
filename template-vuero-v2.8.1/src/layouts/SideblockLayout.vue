<script setup lang="ts">
import type { SideblockTheme } from '/@src/components/navigation/desktop/Sideblock.vue'
import { usePanels } from '/@src/stores/panels'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const props = withDefaults(
  defineProps<{
    theme?: SideblockTheme
    defaultSideblock?: string
    closeOnChange?: boolean
    openOnMounted?: boolean
    nowrap?: boolean
  }>(),
  {
    defaultSideblock: 'dashboard',
    theme: 'default',
  }
)

const viewWrapper = useViewWrapper()
const panels = usePanels()
const route = useRoute()
const openSideblockLinks = ref('')
const isMobileSideblockOpen = ref(false)
const isDesktopSideblockOpen = ref(props.openOnMounted)
const activeMobileSubsidebar = ref(props.defaultSideblock)

/**
 * watchPostEffect callback will be executed each time dependent reactive values has changed
 */
watchPostEffect(() => {
  viewWrapper.setPushedBlock(isDesktopSideblockOpen.value ?? false)
})
onMounted(() => {
  viewWrapper.setPushed(false)
})
watch(
  () => route.fullPath,
  () => {
    isMobileSideblockOpen.value = false

    if (props.closeOnChange && isDesktopSideblockOpen.value) {
      isDesktopSideblockOpen.value = false
    }
  }
)
</script>

<template>
  <div class="sidebar-layout">
    <div class="app-overlay" />

    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSideblockOpen"
      @toggle="isMobileSideblockOpen = !isMobileSideblockOpen"
    >
      <template #brand>
        <RouterLink
          to="/"
          class="navbar-item is-brand"
        >
          <AnimatedLogo
            width="38px"
            height="38px"
          />
        </RouterLink>

        <div class="brand-end">
          <NotificationsMobileDropdown />
          <UserProfileDropdown />
        </div>
      </template>
    </MobileNavbar>

    <!-- Mobile sidebar links -->
    <MobileSidebar
      :is-open="isMobileSideblockOpen"
      @toggle="isMobileSideblockOpen = !isMobileSideblockOpen"
    >
      <template #links>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
            aria-label="Display dashboard content"
            tabindex="0"
            role="button"
            @keydown.space.prevent="activeMobileSubsidebar = 'dashboard'"
            @click="activeMobileSubsidebar = 'dashboard'"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:activity"
            />
          </a>
        </li>
        <li>
          <a
            aria-label="Display layout content"
            :class="[activeMobileSubsidebar === 'layout' && 'is-active']"
            tabindex="0"
            role="button"
            @keydown.space.prevent="activeMobileSubsidebar = 'layout'"
            @click="activeMobileSubsidebar = 'layout'"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:grid"
            />
          </a>
        </li>
        <li>
          <a
            aria-label="Display element content"
            :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
            tabindex="0"
            role="button"
            @keydown.space.prevent="activeMobileSubsidebar = 'elements'"
            @click="activeMobileSubsidebar = 'elements'"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:box"
            />
          </a>
        </li>
        <li>
          <a
            aria-label="Display components content"
            :class="[activeMobileSubsidebar === 'components' && 'is-active']"
            tabindex="0"
            role="button"
            @keydown.space.prevent="activeMobileSubsidebar = 'components'"
            @click="activeMobileSubsidebar = 'components'"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:cpu"
            />
          </a>
        </li>
        <li>
          <RouterLink to="/messaging-v1">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:message-circle"
            />
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <li>
          <a
            aria-label="Display search panel"
            tabindex="0"
            role="button"
            @keydown.space.prevent="panels.setActive('search')"
            @click="panels.setActive('search')"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:search"
            />
          </a>
        </li>
        <li>
          <a
            aria-label="View settings"
            href="#"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:settings"
            />
          </a>
        </li>
      </template>
    </MobileSidebar>

    <!-- Mobile subsidebar links -->
    <Transition name="slide-x">
      <LayoutsMobileSubsidebar
        v-if="isMobileSideblockOpen && activeMobileSubsidebar === 'layout'"
      />
      <DashboardsMobileSubsidebar
        v-else-if="isMobileSideblockOpen && activeMobileSubsidebar === 'dashboard'"
      />
      <ComponentsMobileSubsidebar
        v-else-if="isMobileSideblockOpen && activeMobileSubsidebar === 'components'"
      />
      <ElementsMobileSubsidebar
        v-else-if="isMobileSideblockOpen && activeMobileSubsidebar === 'elements'"
      />
    </Transition>

    <!-- Desktop navigation -->
    <CircularMenu />

    <Transition name="slide-x">
      <Sideblock
        v-if="isDesktopSideblockOpen"
        :theme="props.theme"
      >
        <template #header>
          <RouterLink
            to="/"
            class="sidebar-block-logo"
          >
            <AnimatedLogo width="36px" />
          </RouterLink>
          <h3>Vuero</h3>
        </template>
        <template #links>
          <li>
            <RouterLink
              to="/sidebar/dashboards"
              class="single-link"
            >
              <span class="icon">
                <i
                  class="iconify"
                  data-icon="feather:grid"
                />
              </span>
              داشبورد
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/sidebar/dashboards/personal-2"
              class="single-link"
            >
              <span class="icon">
                <i
                  class="iconify"
                  data-icon="feather:briefcase"
                />
              </span>
              پروژه ها
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/sidebar/dashboards/human-ressources"
              class="single-link"
            >
              <span class="icon">
                <i
                  class="iconify"
                  data-icon="feather:message-circle"
                />
              </span>
              پیام ها
              <span class="badge">3</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/sidebar/dashboards/personal-3"
              class="single-link"
            >
              <span class="icon">
                <i
                  class="iconify"
                  data-icon="feather:book"
                />
              </span>
              مجموعه ها
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/sidebar/layouts/profile-view"
              class="single-link"
            >
              <span class="icon">
                <i
                  class="iconify"
                  data-icon="feather:users"
                />
              </span>
              کاربران
            </RouterLink>
          </li>

          <VCollapseLinks
            v-model:open="openSideblockLinks"
            collapse-id="reports"
          >
            <template #header>
              <div class="icon">
                <i
                  class="iconify"
                  data-icon="feather:briefcase"
                />
              </div>
              گزارشات
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
              <i class="lnil lnil-analytics-alt-1" />
              <span>گزارش مالی</span>
            </RouterLink>
            <RouterLink
              to="/sidebar/dashboards/company"
              class="is-submenu"
            >
              <i class="lnil lnil-pie-chart" />
              <span>گزارش سهام</span>
            </RouterLink>
            <RouterLink
              to="/sidebar/layouts/list-view-3"
              class="is-submenu"
            >
              <i class="lnil lnil-stats-up" />
              <span>گزارش رشد</span>
            </RouterLink>
          </VCollapseLinks>
          <li>
            <RouterLink
              to="/inbox"
              class="single-link"
            >
              <span class="icon">
                <i
                  class="iconify"
                  data-icon="feather:mail"
                />
              </span>
              صندوق ورودی
            </RouterLink>
          </li>
          <li class="divider" />

          <VCollapseLinks
            v-model:open="openSideblockLinks"
            collapse-id="settings"
          >
            <template #header>
              <div class="icon">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:settings"
                />
              </div>
              تنظیمات
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
              <i class="lnil lnil-home" />
              <span>عمومی</span>
            </RouterLink>
            <RouterLink
              to="/sidebar/dashboards/stocks"
              class="is-submenu"
            >
              <i class="lnil lnil-lock-alt" />
              <span>امنیت</span>
            </RouterLink>
            <RouterLink
              to="/sidebar/dashboards/sales"
              class="is-submenu"
            >
              <i class="lnil lnil-coin" />
              <span>معاملات</span>
            </RouterLink>
          </VCollapseLinks>

          <VCollapseLinks
            v-model:open="openSideblockLinks"
            collapse-id="starters"
          >
            <template #header>
              <div class="icon">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:zap"
                />
              </div>
              استارتر
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
                class="ml-2"
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
                class="ml-2"
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
                class="ml-2"
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
                class="ml-2"
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
        </template>

        <template #bottom-links>
          <UserProfileDropdown up />
          <LayoutSwitcher />

          <a
            class="search-link"
            aria-label="Display search panel"
            data-content="Search"
            tabindex="0"
            role="button"
            @keydown.space.prevent="panels.setActive('search')"
            @click="panels.setActive('search')"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather-search"
            />
          </a>
        </template>
      </Sideblock>
    </Transition>

    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />
    <TaskPanel />

    <VViewWrapper full>
      <VPageContentWrapper>
        <template v-if="props.nowrap">
          <slot />
        </template>
        <VPageContent
          v-else
          class="is-relative"
        >
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="vuero-hamburger nav-trigger push-resize"
              tabindex="0"
              role="button"
              @keydown.space.prevent="isDesktopSideblockOpen = !isDesktopSideblockOpen"
              @click="isDesktopSideblockOpen = !isDesktopSideblockOpen"
            >
              <span class="menu-toggle has-chevron">
                <span
                  :class="[isDesktopSideblockOpen && 'active']"
                  class="icon-box-toggle"
                >
                  <span class="rotate">
                    <i
                      aria-hidden="true"
                      class="icon-line-top"
                    />
                    <i
                      aria-hidden="true"
                      class="icon-line-center"
                    />
                    <i
                      aria-hidden="true"
                      class="icon-line-bottom"
                    />
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">
                {{ viewWrapper.pageTitle }}
              </h1>
            </div>

            <Toolbar class="desktop-toolbar">
              <ToolbarNotification />

              <a
                class="toolbar-link right-panel-trigger"
                aria-label="View activity panel"
                tabindex="0"
                role="button"
                @keydown.space.prevent="panels.setActive('activity')"
                @click="panels.setActive('activity')"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:grid"
                />
              </a>
            </Toolbar>
          </div>

          <slot />
        </VPageContent>
      </VPageContentWrapper>
    </VViewWrapper>
  </div>
</template>
