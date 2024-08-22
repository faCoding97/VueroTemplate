<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('کامپوننت هاب')

useHead({
  title: 'کامپوننت ها- Vuero',
})
</script>

<template>
  <div class="page-content-inner card-hub">
    <div class="columns">
      <div class="column is-12">
        <div class="hub-wrapper">
          <div class="hub-header has-text-centered">
            <VAvatar
              size="xl"
              picture="/images/avatars/svg/vuero-2.svg"
              badge="/demo/photos/misc/buoy.jpg"
            />

            <h3 class="title is-4 is-narrow is-thin">
           کامپوننت های Vuero
            </h3>
            <p class="light-text">
             این کتابخانه کامپوننت  Vuero با نمونه‌های کد دقیق است.
            </p>
          </div>

          <div class="hub-body">
            <div class="body-inner">
              <!--Component/content-->
              <HubCard
                title="محتوا"
                content="با استایل های محتوای Vuero آشنا شوید. نمونه کد گنجانده شده است."
              >
                <RouterLink to="/components/content">
                شروع
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/lists.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/lists-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/tags-->
              <HubCard
                title="تگ ها"
                content="با استایل های تگ Vuero آشنا شوید.نمونه کد گنجانده شده است."
              >
                <RouterLink to="/components/tag">
                شروع
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/tags.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/tags-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/tabs-->
              <HubCard
                title="تب ها"
                content="با استایل‌های تب ناوبری Vuero آشنا شوید.نمونه کد گنجانده شده است."
              >
                <RouterLink to="/components/tabs">
                شروع
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/tabs.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/tabs-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/cards-->
              <HubCard
                title="کارت ها"
                content="با استایل های کارت Vuero آشنا شوید.نمونه کد گنجانده شده است."
              >
                <RouterLink to="/components/card/">
                شروع
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/cards.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/cards-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>
              <!--Component/avatars-->
              <HubCard
                title="آواتار"
                content="با استایل های آواتار Vuero آشنا شوید.نمونه کد گنجانده شده است."
              >
                <RouterLink to="/components/avatar/">
                شروع
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/avatar.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/avatar-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/accordions-->
              <HubCard
                title="آکاردئون"
                content="با استایل های آکاردئون Vuero آشنا شوید.نمونه کد گنجانده شده است."
              >
                <RouterLink to="/components/accordion/">
                شروع
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/accordion.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/accordion-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/breadcrumbs-->
              <HubCard
                title="بردکرامب"
                content="با استایل های  بردکرامب Vuero آشنا شوید.نمونه کد گنجانده شده است."
              >
                <RouterLink to="/components/breadcrumb">
                شروع
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/breadcrumb.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/breadcrumb-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/iconbox-->
              <HubCard
                title="باکس  آیکون"
                content="با استایل های باکس  آیکون Vuero آشنا شوید.نمونه کد گنجانده شده است."
              >
                <RouterLink to="/components/icon-box">
                شروع
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/icon-box.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/icon-box-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/flextables-->
              <HubCard
                title="جدول فلکس"
                content="با استایل های جدول فلکس  Vuero آشنا شوید.نمونه کد گنجانده شده است."
              >
                <RouterLink to="/components/flextable/">
                شروع
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/table.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/table-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/snacks-->
              <HubCard
                title="اسنک ها"
                content="با استایل های اسنک Vuero آشنا شوید.نمونه کد گنجانده شده است."
              >
                <RouterLink to="/components/snack">
                شروع
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/snacks.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/snacks-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>
            </div>
          </div>

          <div class="hub-footer">
            <p>
              <a
                class="action-link"
                tabindex="0"
              >مستندات آنلاین</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-hub {
  max-width: 840px;
  margin: 0 auto;

  .hub-header {
    text-align: center;

    > img {
      display: block;
      margin: 0 auto;
      max-width: 300px;
    }

    .v-avatar {
      margin: 0 auto 12px;
    }

    .anim-icon {
      margin-bottom: 12px;
    }

    p {
      font-size: 1.15rem;
    }
  }

  .hub-body {
    padding: 10px 0 20px;

    .body-inner {
      display: flex;
      flex-wrap: wrap;

      .hub-card {
        background-color: var(--white);
        border-radius: var(--radius-large);
        border: 1px solid var(--fade-grey-dark-3);
        width: calc(50% - 20px);
        max-width: calc(50% - 20px);
        margin: 10px;
        transition: all 0.3s; // transition-all test

        &:hover {
          box-shadow: var(--light-box-shadow);

          .hub-card-body {
            img {
              filter: grayscale(0);
              opacity: 1;
            }
          }
        }

        .hub-card-body {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 24px;

          .inner-content {
            .title {
              font-size: 1.3rem;
              margin-bottom: 8px;
            }

            p {
              max-width: 220px;
            }

            .partner-name {
              span {
                font-weight: 500;
                color: var(--dark-text);
              }
            }
          }

          img {
            display: block;
            width: 100%;
            max-width: 100px;
            height: 100px;
            filter: grayscale(1);
            opacity: 0.6;
            transition: all 0.3s; // transition-all test
          }
        }

        .hub-card-foot {
          border-top: 1px dashed var(--fade-grey-dark-4);
          border-top-width: 1.6px;
          padding: 18px 24px;

          a {
            color: var(--primary);
            opacity: 0.6;
            font-weight: 500;
            transition: opacity 0.3s;

            &:hover,
            &:focus {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .hub-footer {
    text-align: center;
    padding-top: 20px;

    p {
      font-weight: 500;

      a {
        position: relative;
        transition: color 0.3s;
      }
    }
  }
}

.is-dark {
  .card-hub {
    .hub-header {
      .v-avatar {
        .badge {
          border-color: var(--dark-sidebar-light-6) !important;
        }
      }
    }

    .hub-body {
      .body-inner {
        .hub-card {
          background: var(--dark-sidebar-light-6);
          border-color: var(--dark-sidebar-light-12);

          .hub-card-foot {
            border-color: var(--muted-grey-dark-25);

            a {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .card-hub {
    .hub-body {
      .body-inner {
        .hub-card {
          width: calc(100% - 20px);
          max-width: calc(100% - 20px);
        }
      }
    }
  }
}
</style>
