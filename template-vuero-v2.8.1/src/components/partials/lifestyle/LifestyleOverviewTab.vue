<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import {
  valueSingle,
  optionsSingle,
} from '/@src/data/dashboards/lifestyle-v1/dashboardData'
import { useGroupedSocialChart } from '/@src/data/dashboards/lifestyle-v1/groupedSocialCharts'
import { useReputationChart } from '/@src/data/dashboards/lifestyle-v1/reputationChart'
import { useInfluenceChart } from '/@src/data/dashboards/lifestyle-v1/influenceChart'
import { useGroupedCircleCharts } from '/@src/data/widgets/charts/groupedCircleCharts'

const { reputationChartOptions } = useReputationChart()
const { influenceChartOptions } = useInfluenceChart()
const { creativityRadialOptions, engagmentRadialOptions, popularityRadialOptions } =
  useGroupedSocialChart()
const {
  widgetRadialGroup1Options,
  widgetRadialGroup2Options,
  widgetRadialGroup3Options,
} = useGroupedCircleCharts()
</script>

<template>
  <div
    id="overview-tab"
    class="tab-content is-active"
  >
    <div class="body-title">
      <h3>آمار اینستاگرام</h3>
      <VField class="is-minimal-select">
        <VControl>
          <Multiselect
            id="instagram-stats-select"
            v-model="valueSingle"
            :options="optionsSingle"
            placeholder="انتخاب یک گزینه"
            :max-height="145"
          />
        </VControl>
      </VField>
    </div>

    <div class="columns is-multiline is-flex-tablet-p">
      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
          <div class="card-head">
            <h4>پست های محتوا (30 روز)</h4>
            <VIconBox
              color="purple"
              rounded
            >
              <i
                aria-hidden="true"
                class="fab fa-instagram"
              />
            </VIconBox>
          </div>
          <div class="card-metric">
            <span>112</span>
          </div>
          <div class="card-foot is-down">
            <span>
              <span>
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                />
                -0.4%</span>
              کمتر از حد معمول
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
          <div class="card-head">
            <h4>فالوور ها (30 روز)</h4>
            <VIconBox
              color="info"
              rounded
            >
              <i
                aria-hidden="true"
                class="fas fa-users"
              />
            </VIconBox>
          </div>
          <div class="card-metric">
            <span>14.3k</span>
          </div>
          <div class="card-foot is-up">
            <span>
              <span>
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                />
                22.7%</span>
              رشد فالوور.
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
          <div class="card-head">
            <h4>دنبال کننده (30 روز)</h4>
            <VIconBox
              color="yellow"
              rounded
            >
              <i
                aria-hidden="true"
                class="fas fa-user-plus"
              />
            </VIconBox>
          </div>
          <div class="card-metric">
            <span>44</span>
          </div>
          <div class="card-foot is-up">
            <span>
              <span>
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                />
                1.4%</span>
              رشد فالو کننده.
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
          <div class="card-head">
            <h4>لایک ها (30 روز)</h4>
            <VIconBox
              color="red"
              rounded
            >
              <i
                aria-hidden="true"
                class="fas fa-heart"
              />
            </VIconBox>
          </div>
          <div class="card-metric">
            <span>140.8K</span>
          </div>
          <div class="card-foot is-up">
            <span>
              <span>
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                />
                3.6%</span>
             رشد لایک.
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
          <div class="card-head">
            <h4>کامنت ها (30 روز)</h4>
            <VIconBox
              color="yellow"
              rounded
            >
              <i
                aria-hidden="true"
                class="fas fa-comment"
              />
            </VIconBox>
          </div>
          <div class="card-metric">
            <span>9.3K</span>
          </div>
          <div class="card-foot is-down">
            <span>
              <span>
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                />
                -1.1%</span>
              کمتر از حد معمول
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
          <div class="card-head">
            <h4>بازدید از پروفایل (30 روز)</h4>
            <VIconBox
              color="success"
              rounded
            >
              <i
                aria-hidden="true"
                class="fas fa-glasses"
              />
            </VIconBox>
          </div>
          <div class="card-metric">
            <span>12.1k</span>
          </div>
          <div class="card-foot is-up">
            <span>
              <span>
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                />
                22.7%</span>
            بازدید بیشتر پروفایل
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-6 is-full-tablet-p">
        <div class="stat-widget flex-stat-widget is-straight">
          <div class="chart-media">
            <div class="meta">
              <h4 class="dark-inverted">
             رشد شهرت
              </h4>
              <span class="is-dark-primary">+ 2,654</span>
              <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              </p>
            </div>
            <div class="chart-container">
              <ApexChart
                id="flex-stat-circle"
                :height="reputationChartOptions.chart.height"
                :type="reputationChartOptions.chart.type"
                :series="reputationChartOptions.series"
                :options="reputationChartOptions"
              />
            </div>
          </div>
        </div>

        <!--Grouped Stat Widget-->
        <div class="stat-widget grouped-stat-widget is-straight">
          <div class="widget-head">
            <h3 class="dark-inverted">
            امتیازات اجتماعی
            </h3>
          </div>
          <div class="chart-group">
            <div class="group">
              <div class="group-content">
                <div class="chart-container">
                  <ApexChart
                    id="widget-group-radial-1"
                    :height="creativityRadialOptions.chart.height"
                    :type="creativityRadialOptions.chart.type"
                    :series="creativityRadialOptions.series"
                    :options="creativityRadialOptions"
                  />
                </div>
                <span class="dark-inverted">+ 234</span>
                <p>خلاقیت</p>
              </div>
            </div>
            <div class="group">
              <div class="group-content">
                <div class="chart-container">
                  <ApexChart
                    id="widget-group-radial-2"
                    :height="engagmentRadialOptions.chart.height"
                    :type="engagmentRadialOptions.chart.type"
                    :series="engagmentRadialOptions.series"
                    :options="engagmentRadialOptions"
                  />
                </div>
                <span class="dark-inverted">+37%</span>
                <p>انگیجمنت</p>
              </div>
            </div>
            <div class="group">
              <div class="group-content">
                <div class="chart-container">
                  <ApexChart
                    id="widget-group-radial-3"
                    :height="popularityRadialOptions.chart.height"
                    :type="popularityRadialOptions.chart.type"
                    :series="popularityRadialOptions.series"
                    :options="popularityRadialOptions"
                  />
                </div>
                <span class="dark-inverted">+82%</span>
                <p>محبوبیت</p>
              </div>
            </div>
          </div>
        </div>

        <!--Flex Stat Widget-->
        <FlexStatWidget
          title="رشد تاثیرگذاری"
          straight
        >
          <ApexChart
            id="flex-stat-radial"
            :height="influenceChartOptions.chart.height"
            :type="influenceChartOptions.chart.type"
            :series="influenceChartOptions.series"
            :options="influenceChartOptions"
          />
        </FlexStatWidget>
      </div>

      <!--Card-->
      <div class="column is-6 h-hidden-mobile h-hidden-tablet-p">
        <OverviewCard>
          <div class="card-head">
            <h3 class="dark-inverted">
              هشتگ های اخیر
            </h3>
          </div>

          <CloudContainer />
        </OverviewCard>
      </div>

      <div class="column is-12 is-full-tablet-p">
        <GroupedStatWidget
          title="آمار اضافی"
          :values="['264', '1,203', '3,078']"
          :labels="['معاملات جدید', 'پیشنهادات', 'معاملات بسته']"
        >
          <template #chart1>
            <ApexChart
              id="group-radial-1"
              :height="widgetRadialGroup1Options.chart.height"
              :type="widgetRadialGroup1Options.chart.type"
              :series="widgetRadialGroup1Options.series"
              :options="widgetRadialGroup1Options"
            />
          </template>
          <template #chart2>
            <ApexChart
              id="group-radial-2"
              :height="widgetRadialGroup2Options.chart.height"
              :type="widgetRadialGroup2Options.chart.type"
              :series="widgetRadialGroup2Options.series"
              :options="widgetRadialGroup2Options"
            />
          </template>
          <template #chart3>
            <ApexChart
              id="group-radial-3"
              :height="widgetRadialGroup3Options.chart.height"
              :type="widgetRadialGroup3Options.chart.type"
              :series="widgetRadialGroup3Options.series"
              :options="widgetRadialGroup3Options"
            />
          </template>
        </GroupedStatWidget>
      </div>
    </div>
  </div>
</template>
