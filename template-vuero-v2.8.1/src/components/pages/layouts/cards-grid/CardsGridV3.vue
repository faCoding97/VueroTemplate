<script setup lang="ts">
import type { VAvatarProps, VAvatarColor } from '/@src/components/base/avatar/VAvatar.vue'
import { projects } from '/@src/data/layouts/card-grid-v3'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return projects
  } else {
    return projects.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.remaining.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})

const valueSingle = ref(0)
const optionsSingle = [
  'همه پروژه ها',
  'وب اپ ها',
  'اپلیکیشن موبایل',
  'داشبورد',
  'صفحه لندینگ',
]

function getAvatarData(user: any): VAvatarProps {
  return {
    picture: user?.picture,
    initials: user?.initials,
    color: user?.color as VAvatarColor,
  }
}
</script>

<template>
  <div>
    <div class="card-grid-toolbar">
      <VControl icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="جستجو..."
        >
      </VControl>

      <div class="buttons">
        <VField class="h-hidden-mobile">
          <VControl>
            <Multiselect
              v-model="valueSingle"
              :options="optionsSingle"
              :max-height="145"
              placeholder="انتخاب یک گزینه"
            />
          </VControl>
        </VField>
        <VButton
          color="primary"
          raised
        >
          <span class="icon">
            <i
              aria-hidden="true"
              class="fas fa-plus"
            />
          </span>
          <span>پروژه جدید</span>
        </VButton>
      </div>
    </div>

    <div class="card-grid card-grid-v3">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage
        :class="[filteredData.length !== 0 && 'is-hidden']"
        title="ما نتوانستیم نتایج منطبقی پیدا کنیم."
        subtitle="خیلی بد. به نظر می‌رسد ما نتوانستیم هیچ نتیجه منطبقی برای عبارات جستجویی که وارد کرده‌اید پیدا کنیم. لطفاً عبارات یا معیارهای جستجوی مختلف را امتحان کنید."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-3.svg"
            alt=""
          >
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-3-dark.svg"
            alt=""
          >
        </template>
      </VPlaceholderPage>

      <!--Card Grid v3-->
      <TransitionGroup
        name="list"
        tag="div"
        class="columns is-multiline is-flex-tablet-p is-half-tablet-p"
      >
        <!--Grid Item-->
        <div
          v-for="item in filteredData"
          :key="item.id"
          class="column is-4"
        >
          <div class="card-grid-item">
            <label
              v-if="item.lockable"
              class="h-toggle"
            >
              <input
                type="checkbox"
                :checked="item.locked"
              >
              <span class="toggler">
                <span class="active">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:lock"
                  />
                </span>
                <span class="inactive">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  />
                </span>
              </span>
            </label>
            <VAvatar
              size="large"
              :picture="item.image"
              :badge="item.badge"
              squared
            />
            <h3 class="dark-inverted">
              {{ item.name }}
            </h3>
            <p>{{ item.remaining }} باقی مانده</p>
            <div class="description">
              <p>{{ item.description }}</p>
            </div>
            <div class="people">
              <VAvatar
                v-for="user in item.team"
                :key="user.id"
                size="small"
                v-bind="getAvatarData(user)"
              />
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:eye"
                  />
                </span>
                <span>مشاهده</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:edit-2"
                  />
                </span>
                <span>ویرایش</span>
              </button>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.card-grid {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.card-grid-v3 {
  .card-grid-item {
    @include vuero-s-card;

    position: relative;
    text-align: center;
    padding: 30px;

    .h-toggle {
      position: absolute;
      top: 28px;
      inset-inline-end: 10px;
      transform: scale(0.85);
    }

    > .v-avatar {
      display: block;
      margin: 0 auto 10px;
      border-radius: 16px;

      .avatar {
        object-fit: cover;
        border: 1px solid var(--fade-grey-dark-4);
        box-shadow: var(--light-box-shadow);
      }

      .badge {
        bottom: 22px;
        inset-inline-end: -12px;
      }
    }

    > h3 {
      font-size: 1.1rem;
      font-weight: 600;
      font-family: var(--font-alt);
      color: var(--dark-text);
    }

    > p {
      font-size: 0.9rem;
    }

    .description {
      padding: 12px 0;
    }

    .people {
      display: flex;
      justify-content: center;
      padding: 8px 0 30px;

      .v-avatar {
        margin: 0 4px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      .button {
        width: calc(50% - 4px);
        color: var(--light-text);

        &:hover,
        &:focus {
          border-color: var(--fade-grey-dark-4);
          color: var(--primary);
          box-shadow: var(--light-box-shadow);
        }
      }
    }
  }
}

.is-dark {
  .card-grid-v3 {
    .card-grid-item {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .card-grid-v3 .card-grid-item > h3 {
    font-size: 1rem;
  }
}
</style>
