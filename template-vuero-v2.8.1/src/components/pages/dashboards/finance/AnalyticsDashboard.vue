<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import { useRevenueChart } from '/@src/data/dashboards/analytics/revenueChart'
import { useGoalCharts } from '/@src/data/dashboards/analytics/goalChart'
import { useProfitBarChart } from '/@src/data/dashboards/analytics/profitBarChart'
import { useGrowthRadialChart } from '/@src/data/dashboards/analytics/growthRadialChart'
import { followersList } from '/@src/data/widgets/ui/followers'
import { notifications } from '/@src/data/widgets/ui/notificationList'

const { revenueOptions } = useRevenueChart()
const { gaugeOptions } = useGoalCharts()
const { barOptions } = useProfitBarChart()
const { optionsCircle } = useGrowthRadialChart()
</script>

<template>
  <div class="finance-dashboard analytics-dashboard">
    <div class="columns">
      <div class="column is-9">
        <div class="columns is-multiline">
          <!--Dashboard Tile-->
          <div class="column is-4">
            <div class="dashboard-tile">
              <div class="tile-head">
                <h3 class="dark-inverted">
                  معاملات
                </h3>
                <VIconBox
                  color="primary"
                  size="small"
                  rounded
                >
                  <i
                    aria-hidden="true"
                    class="fas fa-gem"
                  />
                </VIconBox>
              </div>
              <div class="tile-body">
                <span class="dark-inverted">8,637</span>
              </div>
              <div class="tile-foot">
                <span class="text-h-green">+6.4%
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:trending-up"
                  />
                </span>
                <span>از ماه گذشته</span>
              </div>
            </div>
          </div>
          <!--Dashboard Tile-->
          <div class="column is-4">
            <div class="dashboard-tile">
              <div class="tile-head">
                <h3 class="dark-inverted">
                اشتراک ها
                </h3>
                <VIconBox
                  color="orange"
                  size="small"
                  rounded
                >
                  <i
                    aria-hidden="true"
                    class="fas fa-user-plus"
                  />
                </VIconBox>
              </div>
              <div class="tile-body">
                <span class="dark-inverted">1,378</span>
              </div>
              <div class="tile-foot">
                <span class="text-h-red">-2.1%
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:trending-down"
                  />
                </span>
                <span>نزولی</span>
              </div>
            </div>
          </div>
          <!--Dashboard Tile-->
          <div class="column is-4">
            <div class="dashboard-tile">
              <div class="tile-head">
                <h3 class="dark-inverted">
                  معرف ها
                </h3>
                <VIconBox
                  color="green"
                  size="small"
                  rounded
                >
                  <i
                    aria-hidden="true"
                    class="fas fa-bullhorn"
                  />
                </VIconBox>
              </div>
              <div class="tile-body">
                <span class="dark-inverted">1,911</span>
              </div>
              <div class="tile-foot">
                <span class="text-h-green">+4.2%
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:trending-up"
                  />
                </span>
                <span>صعودی</span>
              </div>
            </div>
          </div>
          <!--Dashboard Card-->
          <div class="column is-8">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">
                 درآمد
                </h3>
              </div>
              <div class="revenue-stats">
                <div class="revenue-stat">
                  <span>این ماه</span>
                  <span class="current">75,648.43 تومان</span>
                </div>
                <div class="revenue-stat">
                  <span>ماه گذشته</span>
                  <span class="dark-inverted">91,512.18 تومان</span>
                </div>
              </div>
              <ApexChart
              dir="ltr"
                id="revenue-chart"
                :height="revenueOptions.chart.height"
                :type="revenueOptions.chart.type"
                :series="revenueOptions.series"
                :options="revenueOptions"
              />
            </div>
          </div>
          <!--Dashboard Card-->
          <div class="column is-4">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">
                 بررسی اجمالی هدف
                </h3>
              </div>

              <div class="radial-wrap">
                <ApexChart
                dir="ltr"
                  id="goal-gauge"
                  :height="gaugeOptions.chart.height"
                  :type="gaugeOptions.chart.type"
                  :series="gaugeOptions.series"
                  :options="gaugeOptions"
                />
                <div class="radial-stats is-dark-bordered-12">
                  <div class="radial-stat is-dark-bordered-12">
                    <span>تکمیل شده</span>
                    <span class="dark-inverted">1,223</span>
                  </div>
                  <div class="radial-stat">
                    <span>در حال پیش رفت</span>
                    <span class="dark-inverted">467</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Dashboard Card-->
          <div class="column is-4">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">
                  فروش
                </h3>
              </div>

              <div class="progress-block">
                <div class="value">
                  <span class="dark-inverted">78%</span>
                </div>
                <VProgress
                  size="tiny"
                  :value="78"
                />
                <div class="progress-foot">
                  <span class="text-h-green">+6.4%
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:trending-up"
                    />
                  </span>
                  <span>از ماه گذشته</span>
                </div>

                <ApexChart
                  id="radial-circle"
                  class="circle-chart-wrapper"
                  :height="optionsCircle.chart.height"
                  :type="optionsCircle.chart.type"
                  :series="optionsCircle.series"
                  :options="optionsCircle"
                />
              </div>
            </div>
          </div>
          <!--Dashboard Card-->
          <div class="column is-8">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">
                  سود
                </h3>
              </div>
              <ApexChart
                id="profit-chart"
                :height="barOptions.chart.height"
                :type="barOptions.chart.type"
                :series="barOptions.series"
                :options="barOptions"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <!--Widget-->
        <ContactWidget
          picture="/images/avatars/svg/vuero-1.svg"
          username="Ali z."
          email="erikkovalsky@vuero.io"
          company="کمپانی زد دیزاین"
          position="مدیر پروژه"
          location="ایران، تهران"
          phone="+98 21 4425698"
          squared
          reversed
          straight
        />

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

        <!--Widget-->
        <UIWidget
          class="text-widget"
          straight
        >
          <template #header>
            <UIWidgetToolbarFollowers
              title="فالوور های جدید"
              :avatars="followersList"
            />
          </template>
          <template #body>
            <div class="widget-content">
              <p>
               یک خبر عالی!  <span>{{ followersList[0].name }}</span>, <span>{{ followersList[1].name }}</span>و <span>{{ followersList[2].name }}</span> اکنون شما را دنبال می کنند. کمی وقت بگذارید و به پروفایل آنها نگاه کنید.
              </p>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <UIWidget
          class="list-widget"
          straight
        >
          <template #header>
            <UIWidgetToolbarDropdown title="نوتیفیکیشن ها" />
          </template>
          <template #body>
            <UIWidgetNotifications :notifications="notifications" />
          </template>
        </UIWidget>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.analytics-dashboard {
  .text-h-green {
    color: var(--green);
  }

  .text-h-red {
    color: var(--red);
  }

  .text-widget {
    color: var(--widget-grey);
  }

  .dashboard-tile {
    @include vuero-s-card;

    font-family: var(--font);

    .tile-head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-family: var(--font-alt);
        color: var(--dark-text);
        font-weight: 600;
      }
    }

    .tile-body {
      font-size: 2rem;
      padding: 4px 0 8px;

      span {
        color: var(--dark-text);
        font-weight: 600;
      }
    }

    .tile-foot {
      span {
        &:first-child {
          font-weight: 500;

          svg {
            height: 16px;
            width: 16px;
            margin-inline-end: 6px;
            stroke-width: 3px;
          }
        }

        &:nth-child(2) {
          color: var(--light-text);
          font-size: 0.9rem;
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-s-card;

    font-family: var(--font);
    height: 100%;

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

    .revenue-stats {
      display: flex;

      .revenue-stat {
        margin-inline-end: 30px;
        font-family: var(--font);

        span {
          display: block;

          &:first-child {
            color: var(--light-text);
            font-size: 0.9rem;
          }

          &:nth-child(2) {
            color: var(--dark-text);
            font-size: 1.2rem;
            font-weight: 600;
          }

          &.current {
            color: var(--primary);
          }
        }
      }
    }

    .radial-wrap {
      display: flex;
      flex-direction: column;
      height: calc(100% - 44px);

      .radial-stats {
        margin-top: auto;
        display: flex;
        padding-top: 20px;
        border-top: 1px solid var(--fade-grey-dark-3);

        .radial-stat {
          width: 50%;
          text-align: center;

          &:first-child {
            border-inline-end: 1px solid var(--fade-grey-dark-3);
          }

          span {
            display: block;

            &:first-child {
              color: var(--light-text);
              font-size: 0.9rem;
            }

            &:nth-child(2) {
              color: var(--dark-text);
              font-size: 1.3rem;
              font-weight: 600;
            }
          }
        }
      }
    }

    .progress-block {
      display: flex;
      flex-direction: column;
      height: calc(100% - 44px);
      font-family: var(--font);

      .value {
        font-size: 1.4rem;
        font-weight: 600;

        span {
          color: var(--dark-text);
        }
      }

      .progress {
        margin-bottom: 8px;
      }

      .progress-foot {
        span {
          &:first-child {
            font-weight: 500;

            svg {
              height: 16px;
              width: 16px;
              margin-inline-end: 6px;
              stroke-width: 3px;
            }
          }

          &:nth-child(2) {
            color: var(--light-text);
            font-size: 0.9rem;
          }
        }
      }

      .circle-chart-wrapper {
        margin-top: auto;
      }
    }
  }
}

.is-dark {
  .analytics-dashboard {
    .dashboard-tile,
    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}
</style>
