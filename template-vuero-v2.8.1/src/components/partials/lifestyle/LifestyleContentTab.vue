<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'
import {
  valueSingle,
  optionsSingle,
} from '/@src/data/dashboards/lifestyle-v1/dashboardData'
</script>

<template>
  <div
    id="content-tab"
    class="tab-content is-active"
  >
    <div class="body-title">
      <h3>آمار محتوا</h3>
      <VField class="is-minimal-select">
        <VControl>
          <Multiselect
            id="content-stats-select"
            v-model="valueSingle"
            :options="optionsSingle"
            placeholder="انتخاب یک گزینه"
            :max-height="145"
          />
        </VControl>
      </VField>
    </div>

    <div class="columns is-multiline">
      <!--Posting hours-->
      <div class="column is-12 h-hidden-mobile">
        <OverviewCard heatmap>
          <div class="card-head">
            <h3 class="dark-inverted">
              ارسال کردن  عادات و علایق
            </h3>
          </div>

          <Heatmap />
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4">
        <OverviewCard>
          <div class="card-head">
            <h4>روز پست</h4>
            <VIconBox
              color="green"
              rounded
            >
              <i
                aria-hidden="true"
                class="fas fa-calendar-day"
              />
            </VIconBox>
          </div>
          <div class="card-metric is-smaller">
            <span>دوشنبه</span>
          </div>
          <div class="card-foot is-down">
            <span>بهترین روز برای پست کردن.</span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4">
        <OverviewCard>
          <div class="card-head">
            <h4>هشتگ ها</h4>
            <VIconBox
              color="info"
              rounded
            >
              <i
                aria-hidden="true"
                class="fab fa-slack-hash"
              />
            </VIconBox>
          </div>
          <div class="card-metric is-smaller">
            <span>#Music</span>
          </div>
          <div class="card-foot is-down">
            <span>بیشترین هشتگ استفاده شده.</span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4">
        <OverviewCard>
          <div class="card-head">
            <h4>فیلترها</h4>
            <VIconBox
              color="orange"
              rounded
            >
              <i
                aria-hidden="true"
                class="fas fa-camera"
              />
            </VIconBox>
          </div>
          <div class="card-metric is-smaller">
            <span>نرمال</span>
          </div>
          <div class="card-foot is-down">
            <span>بیشترین فیلتر استفاده شده.</span>
          </div>
        </OverviewCard>
      </div>

      <div class="column is-12">
        <OverviewCard metrics>
          <div class="columns is-flex-tablet-p">
            <!--Metric-->
            <div class="column is-3">
              <div class="metric">
                <div class="metric-head">
                  <h4>میانگین پرداخت به ازای هر پست</h4>
                </div>
                <div class="metric is-smaller">
                  <span>640.42 تومان</span>
                </div>
                <div class="metric-foot is-up">
                  <span>
                    <span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:arrow-right"
                      />
                      +0.8%</span>
                    پیش از معمول
                  </span>
                </div>
              </div>
            </div>
            <!--Metric-->
            <div class="column is-3">
              <div class="metric">
                <div class="metric-head">
                  <h4>کمترین پرداخت</h4>
                </div>
                <div class="metric is-smaller">
                  <span>451.32 تومان</span>
                </div>
                <div class="metric-foot is-down">
                  <span>
                    <span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:arrow-right"
                      />
                      -0.2%</span>
                   کمتر از معمول
                  </span>
                </div>
              </div>
            </div>
            <!--Metric-->
            <div class="column is-3">
              <div class="metric">
                <div class="metric-head">
                  <h4>بالاترین پرداخت</h4>
                </div>
                <div class="metric is-smaller">
                  <span>731.87 تومان  </span>
                </div>
                <div class="metric-foot is-up">
                  <span>
                    <span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:arrow-right"
                      />
                      +1.2%</span>
                    بیش از معمول.
                  </span>
                </div>
              </div>
            </div>
            <!--Metric-->
            <div class="column is-3">
              <div class="metric">
                <div class="metric-head">
                  <h4>درآمد مادام العمر</h4>
                </div>
                <div class="metric is-smaller">
                  <span>23.4K تومان</span>
                </div>
                <div class="metric-foot is-up">
                  <span>
                    <span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:arrow-right"
                      />
                      +4.2%</span>
                    بیش از معمول.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </OverviewCard>
      </div>

      <!--Posts-->
      <div class="column is-4">
        <div class="card v-card">
          <header class="card-header">
            <div class="post-stats">
              <span>بیشترین  لایک پست</span>
              <div class="post-stat">
                <i
                  aria-hidden="true"
                  class="fas fa-heart text-h-red"
                />
                <span class="count dark-inverted">15.9K</span>
              </div>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="/demo/photos/30.jpg"
                alt=""
                @error.once="onceImageErrored(1280, 960)"
              >
            </figure>
          </div>
          <div class="card-content post-group-wrap">
            <div class="post-group">
              <a>
                <img
                  src="/demo/photos/33.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
              <a>
                <img
                  src="/demo/photos/34.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
              <a>
                <img
                  src="/demo/photos/35.jpeg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
              <a>
                <img
                  src="/demo/photos/36.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--Posts-->
      <div class="column is-4">
        <div class="card v-card">
          <header class="card-header">
            <div class="post-stats">
              <span>بیشترین کامنت پست</span>
              <div class="post-stat">
                <i
                  aria-hidden="true"
                  class="fas fa-comment text-h-yellow"
                />
                <span class="count dark-inverted">2.3K</span>
              </div>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="/demo/photos/31.png"
                alt=""
                @error.once="onceImageErrored(1280, 960)"
              >
            </figure>
          </div>
          <div class="card-content post-group-wrap">
            <div class="post-group">
              <a>
                <img
                  src="/demo/photos/33.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
              <a>
                <img
                  src="/demo/photos/34.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
              <a>
                <img
                  src="/demo/photos/35.jpeg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
              <a>
                <img
                  src="/demo/photos/36.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--Posts-->
      <div class="column is-4">
        <div class="card v-card">
          <header class="card-header">
            <div class="post-stats">
              <span>بیشترین پست engage شده</span>
              <div class="post-stat">
                <i
                  aria-hidden="true"
                  class="fas fa-hand-paper text-h-green"
                />
                <span class="count dark-inverted">51.6%</span>
              </div>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="/demo/photos/32.jpg"
                alt=""
                @error.once="onceImageErrored(1280, 960)"
              >
            </figure>
          </div>
          <div class="card-content post-group-wrap">
            <div class="post-group">
              <a>
                <img
                  src="/demo/photos/33.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
              <a>
                <img
                  src="/demo/photos/34.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
              <a>
                <img
                  src="/demo/photos/35.jpeg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
              <a>
                <img
                  src="/demo/photos/36.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
