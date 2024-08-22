<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'
import { useSharingChart } from '/@src/data/dashboards/company/sharingChart'
import { useUsersChart } from '/@src/data/dashboards/company/usersChart'
import { useUsersBarChart } from '/@src/data/dashboards/company/usersBarChart'
import { usePersonalScoreGauge } from '/@src/data/widgets/charts/personalScoreGauge'
import { popovers } from '/@src/data/users/userPopovers'
const { personalScoreGaugeOptions, onPersonalScoreGaugeReady } = usePersonalScoreGauge()
const { barData, barData2, usersBarOptions } = useUsersBarChart()
const { sharingOptions } = useSharingChart()
const { usersOptions } = useUsersChart()
onMounted(async () => {
  setTimeout(() => {
    usersBarOptions.series = [
      {
        name: 'سفارشات',
        data: barData.value,
      },
    ]
  }, 1000)
  setTimeout(() => {
    usersBarOptions.series = [
      ...usersBarOptions.series,
      {
        name: 'ترک شده',
        data: barData2.value,
      },
    ]
  }, 2500)
})
</script>

<template>
  <div class="business-dashboard company-dashboard">
    <div class="company-header is-dark-card-bordered is-dark-bg-6">
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <i
            aria-hidden="true"
            class="lnil lnil-users-alt is-dark-primary"
          />
          <span class="dark-inverted">162</span>
          <p>کاربر جدید</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <i
            aria-hidden="true"
            class="lnil lnil-diamond-alt is-dark-primary"
          />
          <span class="dark-inverted">1,835.41 تومان</span>
          <p>درآمد روزانه</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <i
            aria-hidden="true"
            class="lnil lnil-briefcase-alt is-dark-primary"
          />
          <span class="dark-inverted">378</span>
          <p>پروژه های  تکمیل شده</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <i
            aria-hidden="true"
            class="lnil lnil-ticket is-dark-primary"
          />
          <span class="dark-inverted">192</span>
          <p>تیکت های  فعال</p>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-4">
        <div class="dashboard-card is-company">
          <VAvatar
            size="big"
            picture="/demo/photos/brands/udemy.svg"
            picture-dark="/demo/photos/brands/udemy-dark.svg"
          >
            <template #badge>
              <button class="button icon-button is-circle is-dark-outlined">
                <span class="icon is-small">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:plus"
                  />
                </span>
              </button>
            </template>
          </VAvatar>

          <h3 class="dark-inverted">
           یادگیری U
          </h3>
          <p>دوره های آنلاین</p>
          <div class="description">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div class="company-stats is-dark-bordered-12">
            <div class="company-stat">
              <div>
                <span>پست ها</span>
                <span class="dark-inverted">864</span>
              </div>
            </div>
            <div class="company-stat">
              <div>
                <span>پروژه ها</span>
                <span class="dark-inverted">261</span>
              </div>
            </div>
            <div class="company-stat">
              <div>
                <span>فالوور ها</span>
                <span class="dark-inverted">32K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="dashboard-card is-base-chart">
          <div class="content-box">
            <div class="revenue-stats is-dark-bordered-12">
              <div class="revenue-stat">
                <span>جدید</span>
                <span class="current">153</span>
              </div>
              <div class="revenue-stat">
                <span>تمدیدها</span>
                <span class="dark-inverted">641</span>
              </div>
              <div class="revenue-stat">
                <span>استعفاها</span>
                <span class="dark-inverted">64</span>
              </div>
            </div>
          </div>
          <div class="chart-container">
            <ApexChart
              id="users-chart"
              :height="usersOptions.chart.height"
              :type="usersOptions.chart.type"
              :series="usersOptions.series"
              :options="usersOptions"
            />
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="dashboard-card is-base-chart">
          <div class="content-box">
            <div class="revenue-stats is-dark-bordered-12">
              <div class="revenue-stat">
                <span>فیسبوک</span>
                <span class="current">64K</span>
              </div>
              <div class="revenue-stat">
                <span>اینستاگرام</span>
                <span class="dark-inverted">78K</span>
              </div>
              <div class="revenue-stat">
                <span>توئیتر</span>
                <span class="dark-inverted">25K</span>
              </div>
            </div>
          </div>
          <div class="chart-container">
            <ApexChart
              id="shares-chart"
              :height="sharingOptions.chart.height"
              :type="sharingOptions.chart.type"
              :series="sharingOptions.series"
              :options="sharingOptions"
            />
          </div>
        </div>
      </div>

      <div class="column is-12">
        <!-- Datatable -->
        <!-- @todo: table data -->
      </div>

      <div class="column is-3">
        <!--Widget-->
        <UIWidget
          class="gauge-widget"
          straight
        >
          <template #header>
            <UIWidgetToolbarDropdown title="ویجت  سنج" />
          </template>
          <template #body>
            <div class="gauge-wrap">
              <VBillboardJS
                class="gauge-holder"
                :options="personalScoreGaugeOptions"
                @ready="onPersonalScoreGaugeReady"
              />
            </div>
            <div class="widget-content">
              <p>امتیاز شما بر اساس آخرین معیارها محاسبه شده است</p>
            </div>
          </template>
        </UIWidget>
      </div>
      <div class="column is-6">
        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">
            اشتراک ها
            </h3>
          </div>
          <ApexChart
            id="bar-chart"
            :height="usersBarOptions.chart.height"
            :type="usersBarOptions.chart.type"
            :series="usersBarOptions.series"
            :options="usersBarOptions"
          />
        </div>
      </div>
      <div class="column is-3">
        <!--Widget-->
        <UIWidget
          class="picker-widget"
          straight
        >
          <template #header>
            <div class="widget-toolbar">
              <div class="left">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify ltr-hidden"
                    data-icon="feather:chevron-right"
                  />
                  <i
                    aria-hidden="true"
                    class="iconify rtl-hidden"
                    data-icon="feather:chevron-left"
                  />
                </a>
              </div>
              <div class="center">
                <h3>شهریور 1402</h3>
              </div>
              <div class="right">
                <a class="action-icon">
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
                </a>
              </div>
            </div>
          </template>
          <template #body>
            <table class="calendar">
              <thead>
                <tr>
                  <th scope="col">
                    شنبه
                  </th>
                  <th scope="col">
                    یک‌شنبه
                  </th>
                  <th scope="col">
                    دوشنبه
                  </th>
                  <th scope="col">
                    سه شنبه
                  </th>
                  <th scope="col">
                    چهارشنبه
                  </th>
                  <th scope="col">
                    پنجشنبه
                  </th>
                  <th scope="col">
                    جمعه
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="prev-month">
                    29
                  </td>
                  <td class="prev-month">
                    30
                  </td>
                  <td class="prev-month">
                    31
                  </td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>

                <tr>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td class="current-day">
                    18
                  </td>
                </tr>

                <tr>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>

                <tr>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td class="next-month">
                    1
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
        </UIWidget>
      </div>

      <div class="column is-12">
        <div class="dashboard-card is-tickets">
          <div class="card-head">
            <h3 class="dark-inverted">
             تیکت های در انتظار بررسی
            </h3>
            <a
              class="action-link"
              tabindex="0"
            >مشاهده همه</a>
          </div>

          <div class="ticket-list">
            <!--Ticket-->
            <VBlock
              title="[#45651] نمی توان تغییرات را در نمایه کاربر ذخیره کرد"
              subtitle="نمی توانم تغییراتی را که در نمایه کاربری خود ایجاد می کنم ذخیره کنم. وقتی روی دکمه ذخیره کلیک می کنم، خطا ایجاد میشود."
              infratitle="5 ساعت پیش به روز شد"
              m-responsive
              class="is-dark-bordered-12"
            >
              <template #icon>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar
                    size="medium"
                    picture="/demo/avatars/31.jpg"
                  />
                  <template #content>
                    <UserPopoverContent :user="popovers.user31" />
                  </template>
                </Tippy>
              </template>
              <template #action>
                <VButton
                  color="primary"
                  raised
                >
                  مدیریت
                </VButton>
              </template>
            </VBlock>

            <!--Ticket-->
            <VBlock
              title="[#45783]نمی توانم یک موقعیت جدید ایجاد کنم"
              subtitle="وقتی می‌خواهم موقعیت  جدیدی ایجاد کنم، پس از کلیک بر روی دکمه عمل به صفحه 404 هدایت می‌شوم."
              infratitle="2 ساعت پیش به روز شد"
              m-responsive
              class="is-dark-bordered-12"
            >
              <template #icon>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar
                    size="medium"
                    picture="/demo/avatars/23.jpg"
                  />
                  <template #content>
                    <UserPopoverContent :user="popovers.user23" />
                  </template>
                </Tippy>
              </template>
              <template #action>
                <VButton
                  color="primary"
                  raised
                >
                  مدیریت
                </VButton>
              </template>
            </VBlock>

            <!--Ticket-->
            <VBlock
              title="[#45723]پرداخت ناموفق با پی پال"
              subtitle="وقتی می‌خواهم از PayPal به عنوان روش پرداخت استفاده کنم، صفحه لودینگ میشود  و بعد از آن یک پیغام خطا دریافت می‌کنم."
              infratitle="30  دقیقه پیش به روز شد"
              m-responsive
              class="is-dark-bordered-12"
            >
              <template #icon>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar
                    size="medium"
                    picture="/demo/avatars/32.jpg"
                  />
                  <template #content>
                    <UserPopoverContent :user="popovers.user32" />
                  </template>
                </Tippy>
              </template>
              <template #action>
                <VButton
                  color="primary"
                  raised
                >
                  مدیریت
                </VButton>
              </template>
            </VBlock>

            <!--Ticket-->
            <VBlock
              title="[#45862] assets  های موجود در پوشه تم را نمی توانم پیدا کنم"
              subtitle="من مستندات را دنبال کردم اما نمی توانم assets ها را در پوشه اصلی پیدا کنم. آیا می توانم کمک بگیرم؟"
              infratitle="6 ساعت پیش به روز شد"
              m-responsive
              class="is-dark-bordered-12"
            >
              <template #icon>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar
                    size="medium"
                    picture="/demo/avatars/13.jpg"
                  />
                  <template #content>
                    <UserPopoverContent :user="popovers.user13" />
                  </template>
                </Tippy>
              </template>
              <template #action>
                <VButton
                  color="primary"
                  raised
                >
                  مدیریت
                </VButton>
              </template>
            </VBlock>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.company-dashboard {
  .company-header {
    display: flex;
    padding: 20px;
    background: var(--white);
    border: 1px solid var(--fade-grey-dark-3);
    border-radius: var(--radius-large);
    margin-bottom: 1.5rem;

    .header-item {
      width: 25%;
      border-inline-end: 1px solid var(--fade-grey-dark-3);

      &:last-child {
        border-inline-end: none;
      }

      .item-inner {
        text-align: center;

        .lnil,
        .lnir {
          font-size: 1.8rem;
          margin-bottom: 6px;
          color: var(--primary);
        }

        span {
          display: block;
          font-family: var(--font);
          font-weight: 600;
          font-size: 1.6rem;
          color: var(--dark-text);
        }

        p {
          font-family: var(--font-alt);
          font-size: 0.95rem;
        }
      }
    }
  }

  .widget {
    height: 100%;
  }

  .dashboard-card {
    @include vuero-s-card;

    height: 100%;

    &.is-company {
      text-align: center;
      padding: 30px;

      .v-avatar {
        display: block;
        margin: 0 auto 10px;

        .button {
          position: absolute;
          bottom: 0;
          inset-inline-end: 0;
          max-width: 35px;
        }
      }

      > h3 {
        color: var(--dark-text);
        font-family: var(--font-alt);
        font-size: 1.2rem;
        font-weight: 600;
      }

      > p {
        font-size: 0.9rem;
      }

      .description {
        padding: 10px 0 0;
      }

      .company-stats {
        display: flex;
        padding-top: 20px;
        margin-top: 20px;
        border-top: 1px solid var(--fade-grey-dark-3);

        .company-stat {
          width: 33.3%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          span {
            display: block;
            font-family: var(--font);

            &:first-child {
              text-transform: uppercase;
              font-family: var(--font-alt);
              font-size: 0.75rem;
              color: var(--light-text);
            }

            &:nth-child(2) {
              color: var(--dark-text);
              font-size: 1.4rem;
              font-weight: 600;
            }
          }
        }
      }
    }

    &.is-base-chart {
      padding: 0;
      display: flex;
      flex-direction: column;

      .content-box {
        padding: 30px;

        .revenue-stats {
          display: flex;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--fade-grey-dark-3);

          .revenue-stat {
            margin-inline-end: 30px;
            font-family: var(--font);

            span {
              display: block;

              &:first-child {
                text-transform: uppercase;
                font-family: var(--font-alt);
                font-size: 0.75rem;
                color: var(--light-text);
              }

              &:nth-child(2) {
                color: var(--dark-text);
                font-size: 1.6rem;
                font-weight: 600;
              }

              &.current {
                color: var(--primary);
              }
            }
          }
        }
      }

      .chart-container {
        margin-top: auto;
      }
    }

    &.is-tickets {
      padding: 30px;

      .ticket-list {
        padding: 10px 0;

        .media-flex {
          + .media-flex {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid var(--fade-grey-dark-3);
          }

          .flex-meta {
            span {
              &:nth-child(2) {
                font-size: 1rem;
                margin: 4px 0;
                color: var(--light-text-dark-20);
                max-width: 430px;
              }

              &:nth-child(3) {
                font-size: 0.9rem;
                color: var(--light-text);
              }
            }
          }
        }
      }
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
      }
    }
  }

  .table-wrapper {
    min-height: 0;
  }

  .dataTable-wrapper {
    .dataTable-top {
      padding: 0 !important;
      margin: 0 !important;
    }
  }
}

.is-dark {
  .company-dashboard {
    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (width <= 767px) {
  .company-dashboard {
    .company-header {
      flex-wrap: wrap;

      .header-item {
        width: 50%;
        border-inline-end: none;
        border: none;
        padding: 16px 0;
      }
    }

    .dashboard-card {
      &.is-tickets {
        padding: 30px;

        .ticket-list {
          .media-flex {
            .flex-meta {
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
