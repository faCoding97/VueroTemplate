<script setup lang="ts">
import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import * as dashboardData from '/@src/data/dashboards/lifestyle-v2/dashboardData'

const avatarStack1 = dashboardData.avatarStack1 as VAvatarProps[]
const avatarStack2 = dashboardData.avatarStack1 as VAvatarProps[]
const avatarStack3 = dashboardData.avatarStack1 as VAvatarProps[]
const avatarStack4 = dashboardData.avatarStack1 as VAvatarProps[]
const topicList = dashboardData.topicList as any[]
</script>

<template>
  <div class="lifestyle-dashboard lifestyle-dashboard-v2">
    <div class="dashboard-title is-main">
      <div class="left">
        <h2 class="dark-inverted">
         جستجو در سرگرمی ها
        </h2>
        <p class="h-hidden-mobile">
        برخی از بهترین فعالیت های اطراف را در منطقه خود کاوش کنید</p>
      </div>
      <div class="right">
        <a
          class="action-link"
          tabindex="0"
        >مشاهده همه</a>
      </div>
    </div>

    <div class="columns">
      <div class="column is-9">
        <div class="columns is-multiline is-flex-tablet-p">
          <!--Card-->
          <div class="column is-3">
            <div
              v-background="{
                src: '/demo/photos/dashboards/lifestyle/1.jpg',
                placeholder: 'https://via.placeholder.com/800x600',
              }"
              class="long-card has-background-image"
            >
              <div class="long-card-overlay" />
              <a
                href="#"
                class="long-card-text-overlay"
              >
                <div class="top">
                  <span>پیاده روی</span>
                  <i
                    aria-hidden="true"
                    class="fas fa-running"
                  />
                </div>
                <div class="bottom">
                  <span>28.3K</span>
                  <VAvatarStack
                    size="small"
                    :avatars="avatarStack1"
                  />
                </div>
              </a>
            </div>
          </div>

          <!--Card-->
          <div class="column is-3">
            <div
              v-background="{
                src: '/demo/photos/dashboards/lifestyle/2.jpg',
                placeholder: 'https://via.placeholder.com/800x600',
              }"
              class="long-card has-background-image"
            >
              <div class="long-card-overlay" />
              <a
                href="#"
                class="long-card-text-overlay"
              >
                <div class="top">
                  <span>سفرهای رفتینگ</span>
                  <i
                    aria-hidden="true"
                    class="fas fa-ship"
                  />
                </div>
                <div class="bottom">
                  <span>8.1K</span>
                  <VAvatarStack
                    size="small"
                    :avatars="avatarStack2"
                  />
                </div>
              </a>
            </div>
          </div>

          <!--Card-->
          <div class="column is-3">
            <div
              v-background="{
                src: '/demo/photos/dashboards/lifestyle/3.jpg',
                placeholder: 'https://via.placeholder.com/800x600',
              }"
              class="long-card has-background-image"
            >
              <div class="long-card-overlay" />
              <a
                href="#"
                class="long-card-text-overlay"
              >
                <div class="top">
                  <span>سنگ نوردی</span>
                  <i
                    aria-hidden="true"
                    class="fas fa-running"
                  />
                </div>
                <div class="bottom">
                  <span>19.7K</span>
                  <VAvatarStack
                    size="small"
                    :avatars="avatarStack3"
                  />
                </div>
              </a>
            </div>
          </div>

          <!--Card-->
          <div class="column is-3">
            <div
              v-background="{
                src: '/demo/photos/dashboards/lifestyle/4.jpg',
                placeholder: 'https://via.placeholder.com/800x600',
              }"
              class="long-card has-background-image"
            >
              <div class="long-card-overlay" />
              <a
                href="#"
                class="long-card-text-overlay"
              >
                <div class="top">
                  <span>دوچرخه سواری</span>
                  <i
                    aria-hidden="true"
                    class="fas fa-biking"
                  />
                </div>
                <div class="bottom">
                  <span>48.4K</span>
                  <VAvatarStack
                    size="small"
                    :avatars="avatarStack4"
                  />
                </div>
              </a>
            </div>
          </div>

          <!--List-->
          <div class="column is-6">
            <div class="dashboard-list">
              <div class="dashboard-title">
                <div class="left">
                  <h2 class="dark-inverted">
                   ترند های روز
                  </h2>
                  <p class="h-hidden-mobile">
                  آخرین فعالیت ها را بررسی کنید
                  </p>
                </div>
              </div>

              <div class="inner-list">
                <VBlock
                  title="پیاده روی افراطی"
                  subtitle="31 خرداد 1402"
                  center
                >
                  <template #icon>
                    <VAvatar
                      picture="/demo/photos/dashboards/lifestyle/1.jpg"
                      squared
                    />
                  </template>
                  <template #action>
                    <VRangeRating
                      :model-value="5"
                      readonly
                    >
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                      />
                    </VRangeRating>

                    <VIconButton
                      icon="feather:arrow-right"
                      circle
                      dark-outlined
                      class="rtl-reflect"
                    />
                  </template>
                </VBlock>

                <VBlock
                  title="مسافرت رفتینگ"
                  subtitle="30 خرداد 1402"
                  center
                >
                  <template #icon>
                    <VAvatar
                      picture="/demo/photos/dashboards/lifestyle/2.jpg"
                      squared
                    />
                  </template>
                  <template #action>
                    <VRangeRating
                      :model-value="4"
                      readonly
                    >
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                      />
                    </VRangeRating>
                    <VIconButton
                      icon="feather:arrow-right"
                      circle
                      dark-outlined
                      class="rtl-reflect"
                    />
                  </template>
                </VBlock>

                <VBlock
                  title="گروه سنگنوردی [حرفه ای]"
                  subtitle="31 خرداد 1402"
                  center
                >
                  <template #icon>
                    <VAvatar
                      picture="/demo/photos/dashboards/lifestyle/3.jpg"
                      squared
                    />
                  </template>
                  <template #action>
                    <VRangeRating
                      :model-value="5"
                      readonly
                    >
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                      />
                    </VRangeRating>
                    <VIconButton
                      icon="feather:arrow-right"
                      circle
                      dark-outlined
                      class="rtl-reflect"
                    />
                  </template>
                </VBlock>

                <VBlock
                  title="دوچرخه سواری جنون"
                  subtitle="31 خرداد 1402"
                  center
                >
                  <template #icon>
                    <VAvatar
                      picture="/demo/photos/dashboards/lifestyle/4.jpg"
                      squared
                    />
                  </template>
                  <template #action>
                    <VRangeRating
                      :model-value="5"
                      readonly
                    >
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                      />
                    </VRangeRating>
                    <VIconButton
                      icon="feather:arrow-right"
                      circle
                      dark-outlined
                      class="rtl-reflect"
                    />
                  </template>
                </VBlock>
              </div>
            </div>
          </div>

          <!--List-->
          <div class="column is-6">
            <div class="dashboard-list">
              <div class="dashboard-title">
                <div class="left">
                  <h2 class="dark-inverted">
                    محبوب ها
                  </h2>
                  <p class="h-hidden-mobile">
                  پرفروش ترین های محبوب ما
                  </p>
                </div>
                <div class="right">
                  <a
                    class="action-link"
                    tabindex="0"
                  >مشاهده همه</a>
                </div>
              </div>
              <div class="inner-list">
                <VBlock
                  title="ورزش سه گانه افراطی"
                  subtitle="3 تیر 1402"
                  center
                >
                  <template #icon>
                    <VAvatar
                      picture="/demo/photos/dashboards/lifestyle/5.jpg"
                      squared
                    />
                  </template>
                  <template #action>
                    <VRangeRating
                      :model-value="5"
                      readonly
                    >
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                      />
                    </VRangeRating>
                    <VIconButton
                      icon="feather:arrow-right"
                      circle
                      dark-outlined
                      class="rtl-reflect"
                    />
                  </template>
                </VBlock>

                <VBlock
                  title="دو گروهی"
                  subtitle="29 مرداد 1402"
                  center
                >
                  <template #icon>
                    <VAvatar
                      picture="/demo/photos/dashboards/lifestyle/6.jpg"
                      squared
                    />
                  </template>
                  <template #action>
                    <VRangeRating
                      :model-value="4"
                      readonly
                    >
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                      />
                    </VRangeRating>
                    <VIconButton
                      icon="feather:arrow-right"
                      circle
                      dark-outlined
                      class="rtl-reflect"
                    />
                  </template>
                </VBlock>

                <VBlock
                  title="غواصی"
                  subtitle="28 مرداد 1402"
                  center
                >
                  <template #icon>
                    <VAvatar
                      picture="/demo/photos/dashboards/lifestyle/7.jpg"
                      squared
                    />
                  </template>
                  <template #action>
                    <VRangeRating
                      :model-value="5"
                      readonly
                    >
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                      />
                    </VRangeRating>
                    <VIconButton
                      icon="feather:arrow-right"
                      circle
                      dark-outlined
                      class="rtl-reflect"
                    />
                  </template>
                </VBlock>

                <VBlock
                  title="کویر پیمایی"
                  subtitle="27 مرداد 1402"
                  center
                >
                  <template #icon>
                    <VAvatar
                      picture="/demo/photos/dashboards/lifestyle/7.jpg"
                      squared
                    />
                  </template>
                  <template #action>
                    <VRangeRating
                      :model-value="5"
                      readonly
                    >
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                      />
                    </VRangeRating>
                    <VIconButton
                      icon="feather:arrow-right"
                      circle
                      dark-outlined
                      class="rtl-reflect"
                    />
                  </template>
                </VBlock>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <!--Widget-->
        <UIWidget class="search-widget">
          <template #body>
            <div class="field">
              <div class="control">
                <input
                  type="text"
                  class="input"
                  placeholder="جستجو..."
                >
                <button class="searcv-button">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:search"
                  />
                </button>
              </div>

              <div class="topics">
                <a>#پیاده_روی</a>
                <a>#سنگ_نوردی</a>
                <a>#دورچه_سواری</a>
              </div>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <UIWidget class="text-widget">
          <template #header>
            <UIWidgetToolbarIcon
              title="پیام ها"
              icon="feather:message-square"
            />
          </template>
          <template #body>
            <div class="widget-content">
              <p>
                شما در حال حاضر بیش از <span>10 پیام خوانده نشده</span> در صندوق ورودی خود دارید. می تواند زمان خوبی برای بررسی آنها باشد.
              </p>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <ListWidgetSingle
          title="مقالات داغ"
          class="list-widget-v1 p-t-20 p-l-20 p-r-20 p-b-20"
        >
          <listWidgetTopicList :topics="topicList" />
        </ListWidgetSingle>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.lifestyle-dashboard-v2 {
  .dashboard-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: var(--font);

    &.is-main {
      margin-bottom: 30px;

      h2 {
        font-size: 1.8rem;
      }
    }

    h2 {
      font-family: var(--font-alt);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--dark-text);
    }
  }

  .long-card {
    @include vuero-l-card;

    position: relative;
    min-height: 300px;

    &:hover,
    &:focus {
      .long-card-overlay {
        opacity: 0.5;
        pointer-events: all;
      }

      .long-card-text-overlay {
        opacity: 1;
        pointer-events: all;

        .top,
        .bottom {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }

    .long-card-overlay {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      height: 100%;
      width: 100%;
      background: var(--dark-sidebar);
      opacity: 0;
      pointer-events: none;
      z-index: 1;
      cursor: pointer;
      border-radius: 16px;
      transition: all 0.3s; // transition-all test
    }

    .long-card-text-overlay {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      font-family: var(--font);
      opacity: 0;
      pointer-events: none;
      z-index: 2;
      overflow: hidden;
      cursor: pointer;

      .top,
      .bottom {
        transition: all 0.2s;
        opacity: 0;
        transition-delay: 0.15s;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--smoke-white);
      }

      .top {
        transform: translateY(-30px);
        font-weight: 500;
        font-size: 0.75rem;
       
        text-transform: uppercase;
      }

      .bottom {
        font-size: 0.9rem;
        transform: translateY(30px);
      }
    }
  }

  .dashboard-list {
    .inner-list {
      .media-flex-center {
        @include vuero-l-card;

        display: flex;
        padding: 12px;
        max-height: 66px;

        &:hover,
        &:focus {
          .flex-end {
            .rating {
              opacity: 1;
            }
          }
        }

        .flex-meta {
          max-width: 160px;
          width: 100%;
        }

        .flex-end {
          .rating {
            padding: 0 20px;
            opacity: 0;
            transition: all 0.3s; // transition-all test

            i {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .lifestyle-dashboard-v2 {
    .long-card {
      @include vuero-card--dark;
    }

    .dashboard-list {
      .inner-list {
        .media-flex-center {
          @include vuero-card--dark;
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .lifestyle-dashboard-v2 {
    .long-card {
      .long-card-overlay {
        opacity: 0.5 !important;
        pointer-events: all !important;
      }

      .long-card-text-overlay {
        opacity: 1 !important;
        pointer-events: all !important;
        padding: 30px;

        .top,
        .bottom {
          font-size: 1rem;
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .lifestyle-dashboard-v2 {
    .is-flex-tablet-p {
      .column {
        &.is-3 {
          min-width: 25% !important;
          width: 25% !important;

          .long-card {
            .long-card-overlay {
              opacity: 0.5 !important;
              pointer-events: all !important;
            }

            .long-card-text-overlay {
              opacity: 1 !important;
              pointer-events: all !important;

              .top,
              .bottom {
                opacity: 1 !important;
                transform: translateY(0) !important;
              }

              .top {
                i {
                  display: none !important;
                }
              }

              .bottom {
                .avatar-stack {
                  display: none !important;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .lifestyle-dashboard-v2 {
    .long-card {
      .long-card-overlay {
        opacity: 0.5 !important;
        pointer-events: all !important;
      }

      .long-card-text-overlay {
        opacity: 1 !important;
        pointer-events: all !important;

        .top,
        .bottom {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .top {
          i {
            display: none !important;
          }
        }

        .bottom {
          .avatar-stack {
            display: none !important;
          }
        }
      }
    }
  }
}
</style>
