<script setup lang="ts">
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { usePanels } from '/@src/stores/panels'

const panels = usePanels()
const layoutSwitcher = useLayoutSwitcher()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('نقشه 1')

useHead({
  title: 'نقشه 1 - سایدبار - Vuero',
})
</script>

<template>
  <component
    :is="layoutSwitcher.dynamicLayoutComponent as any"
    v-bind="layoutSwitcher.dynamicLayoutProps"
    close-on-change
    default-sidebar="dashboard"
    nowrap
  >
    <MapsDashboard reversed>
      <template #header>
        <div class="content-section-header">
          <h2 class="title is-4 is-narrow">
          نقشه 2
          </h2>

          <Toolbar class="desktop-toolbar">
            <ToolbarNotification />

            <a
              class="toolbar-link right-panel-trigger"
              aria-label="View activity"
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
      </template>
    </MapsDashboard>
  </component>
</template>
