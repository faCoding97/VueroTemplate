<script setup lang="ts">
import type { VAvatarProps, VAvatarColor } from '/@src/components/base/avatar/VAvatar.vue'
import type { UserPopover } from '/@src/models/users'
import { popovers } from '/@src/data/users/userPopovers'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { usePanels } from '/@src/stores/panels'

export type NavbarSearchTheme = 'default' | 'center' | 'fade'

const props = withDefaults(
  defineProps<{
    theme?: NavbarSearchTheme
    nowrap?: boolean
  }>(),
  {
    theme: 'default',
  }
)

const viewWrapper = useViewWrapper()
const panels = usePanels()
const route = useRoute()
const isMobileSidebarOpen = ref(false)
const activeMobileSubsidebar = ref('dashboard')
const filter = ref('')

const users: VAvatarProps[] = [
  {
    picture: '/demo/avatars/12.jpg',
    initials: 'JS',
    color: 'info',
  },
  {
    picture: '/demo/avatars/22.jpg',
    initials: 'JH',
    color: 'info',
  },
  {
    picture: '/demo/avatars/40.jpg',
    initials: 'SM',
    color: 'h-purple',
  },
]

function getAvatarData(user: UserPopover): VAvatarProps {
  return {
    picture: user.avatar,
    initials: user.initials,
    color: user.color as VAvatarColor,
  }
}

const filteredData = computed(() => {
  if (!filter.value) {
    return []
  }

  return Object.values(popovers).filter((user) => {
    return (
      user.fullName.match(new RegExp(filter.value, 'i')) ||
      user.position.match(new RegExp(filter.value, 'i'))
    )
  })
})

watch(
  () => route.fullPath,
  () => {
    isMobileSidebarOpen.value = false
  }
)
</script>

<template>
  <div class="navbar-layout navbar-layout-search">
    <div class="app-overlay" />

    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
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
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #links>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
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
        <li
          :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
          tabindex="0"
          role="button"
          @keydown.space.prevent="activeMobileSubsidebar = 'elements'"
          @click="activeMobileSubsidebar = 'elements'"
        >
          <a>
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:box"
            />
          </a>
        </li>
        <li
          :class="[activeMobileSubsidebar === 'components' && 'is-active']"
          tabindex="0"
          role="button"
          @keydown.space.prevent="activeMobileSubsidebar = 'components'"
          @click="activeMobileSubsidebar = 'components'"
        >
          <a>
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
          <a href="#">
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
        v-if="isMobileSidebarOpen && activeMobileSubsidebar === 'layout'"
      />
      <DashboardsMobileSubsidebar
        v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'dashboard'"
      />
      <ComponentsMobileSubsidebar
        v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'components'"
      />
      <ElementsMobileSubsidebar
        v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'elements'"
      />
    </Transition>

    <!-- Desktop navigation -->
    <NavbarSearch :theme="props.theme">
      <!-- Custom navbar title -->
      <template #title>
        <RouterLink
          to="/"
          class="brand"
        >
          <AnimatedLogo
            width="38px"
            height="38px"
          />
        </RouterLink>
        <div class="separator" />

        <ProjectsQuickDropdown />
        <h1 class="title is-6">
          {{ viewWrapper.pageTitle }}
        </h1>
      </template>

      <template #subtitle>
        <span>14 بهمن 1402</span>
      </template>

      <!-- Custom navbar toolbar -->
      <template #toolbar>
        <Toolbar class="desktop-toolbar">
          <ToolbarNotification />

          <a
            class="toolbar-link right-panel-trigger"
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

        <LayoutSwitcher />
        <UserProfileDropdown />
      </template>

      <template #toolbar-bottom>
        <VAvatarStack
          :avatars="users"
          :limit="3"
          size="small"
        />
        <VDropdown
          spaced
          right
        >
          <template #button="{ open }">
            <VIconButton
              icon="feather:plus"
              circle
              @click="open"
            />
          </template>
          <template #content>
            <a
              href="#"
              class="dropdown-item is-media"
            >
              <div class="icon">
                <i
                  aria-hidden="true"
                  class="lnil lnil-analytics-alt-1"
                />
              </div>
              <div class="meta">
                <span>داشبورد جدید</span>
                <span>افزودن داشبورد جدید</span>
              </div>
            </a>
            <a
              href="#"
              class="dropdown-item is-media"
            >
              <div class="icon">
                <i
                  aria-hidden="true"
                  class="lnil lnil-users-alt"
                />
              </div>
              <div class="meta">
                <span>دعوت</span>
                <span>دعوت اعضای جدید</span>
              </div>
            </a>
            <a
              href="#"
              class="dropdown-item is-media"
            >
              <div class="icon">
                <i
                  aria-hidden="true"
                  class="lnil lnil-briefcase"
                />
              </div>
              <div class="meta">
                <span>پروژه جدید</span>
                <span>افزودن پروژه جدید</span>
              </div>
            </a>
            <hr class="dropdown-divider">
            <a
              href="#"
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
                <span>مدیریت تنظیمات تیم</span>
              </div>
            </a>
          </template>
        </VDropdown>
      </template>

      <!-- Custom navbar search -->
      <template #search>
        <div class="centered-search">
          <div class="field">
            <div class="control has-icon">
              <input
                v-model="filter"
                type="text"
                class="input search-input"
                placeholder="جستجوی سوابق..."
              >
              <div class="form-icon">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:search"
                />
              </div>
              <div
                v-if="filter"
                class="form-icon is-right"
                tabindex="0"
                role="button"
                @keydown.space.prevent="filter = ''"
                @click="filter = ''"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:x"
                />
              </div>
              <div
                v-if="filteredData.length > 0"
                class="search-results has-slimscroll is-active"
              >
                <div
                  v-for="(user, key) in filteredData"
                  :key="key"
                  class="search-result"
                >
                  <VAvatar v-bind="getAvatarData(user)" />
                  <div class="meta">
                    <span>{{ user.username }}</span>
                    <span>{{ user.position }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Desktop navigation -->
      <template #links>
        <div class="buttons">
          <a class="button">داشبورد</a>
          <a class="button">پروژه ها</a>
          <a class="button">تیم</a>
          <a class="button">گزارشات</a>
          <a class="button">تنظیمات</a>
        </div>
      </template>
    </NavbarSearch>

    <LanguagesPanel />
    <ActivityPanel />
    <TaskPanel />

    <VViewWrapper top-nav>
      <VPageContentWrapper>
        <template v-if="props.nowrap">
          <slot />
        </template>
        <VPageContent
          v-else
          class="is-relative"
        >
          <div class="is-navbar-lg">
            <div class="page-title has-text-centered">
              <!-- Mobile Page Title -->
              <div class="title-wrap">
                <h1 class="title is-4">
                  {{ viewWrapper.pageTitle }}
                </h1>
              </div>

              <Toolbar class="mobile-toolbar">
                <ToolbarNotification />

                <a
                  class="toolbar-link right-panel-trigger"
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
          </div>
        </VPageContent>
      </VPageContentWrapper>
    </VViewWrapper>
  </div>
</template>

<style lang="scss" scoped>
.navbar-layout-search {
  ::v-deep(.view-wrapper.has-top-nav) {
    // margin-top: 20px;
    // min-height: calc(100vh - 20px);

    .is-stuck {
      top: 100px;
    }
  }
}
</style>
