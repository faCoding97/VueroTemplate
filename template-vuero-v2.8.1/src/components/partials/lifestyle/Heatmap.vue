<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'
</script>

<template>
  <div class="heatmap-wrapper">
    <div class="heatmap-title">
      <div class="title-avatar">
        <img
          src="/demo/photos/faces/girl1.jpg"
          alt=""
          @error.once="onceImageErrored(150)"
        >
      </div>
      <div class="title-meta">
        <p>
          هانا به طور کلی تصاویر را در این موارد پست می‌کند:
          <span>دوشنبه ها در  11 صبح</span>, <span>سه  شنبه ها 3 بعدازظهر</span>,
          <span>جمعه ها 4 بعداز ظهر</span> ...
        </p>
      </div>
    </div>

    <div class="heatmap-inner">
      <div class="heatmap-row">
        <div class="heatmap-row-label">
          <span>دوشنبه</span>
        </div>
        <div class="heatmap-row-content">
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item heat-3">
            <i
              aria-hidden="true"
              class="fas fa-fire"
            />
          </div>
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
        </div>
      </div>
      <div class="heatmap-row">
        <div class="heatmap-row-label">
          <span>سه شنبه</span>
        </div>
        <div class="heatmap-row-content">
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
        </div>
      </div>
      <div class="heatmap-row">
        <div class="heatmap-row-label">
          <span>چهار شنبه</span>
        </div>
        <div class="heatmap-row-content">
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
        </div>
      </div>
      <div class="heatmap-row">
        <div class="heatmap-row-label">
          <span>پنج شنبه</span>
        </div>
        <div class="heatmap-row-content">
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item heat-2" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-3">
            <i
              aria-hidden="true"
              class="fas fa-fire"
            />
          </div>
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
        </div>
      </div>
      <div class="heatmap-row">
        <div class="heatmap-row-label">
          <span>جمعه</span>
        </div>
        <div class="heatmap-row-content">
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-3">
            <i
              aria-hidden="true"
              class="fas fa-fire"
            />
          </div>
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-2" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
        </div>
      </div>
      <div class="heatmap-row">
        <div class="heatmap-row-label">
          <span>شنبه</span>
        </div>
        <div class="heatmap-row-content">
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-2" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-2" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
        </div>
      </div>
      <div class="heatmap-row">
        <div class="heatmap-row-label">
          <span>یکشنبه</span>
        </div>
        <div class="heatmap-row-content">
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-1" />
          <div class="heatmap-row-item heat-2" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item heat-2" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
          <div class="heatmap-row-item" />
        </div>
      </div>
      <div class="heatmap-row">
        <div class="heatmap-row-label">
          <span />
        </div>
        <div class="heatmap-row-content">
          <div class="heatmap-row-item is-time">
            <span>12ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>1ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>2ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>3ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>4ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>5ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>6ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>7ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>8ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>9ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>10ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>11ق.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>12ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>1ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>2ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>3ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>4ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>5ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>6ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>7ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>8ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>9ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>10ب.ظ</span>
          </div>
          <div class="heatmap-row-item is-time">
            <span>11ب.ظ</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.heatmap-wrapper {
  .heatmap-title {
    display: flex;
    align-items: center;
    padding: 16px;

    .title-avatar {
      border-radius: var(--radius-rounded);
      border: 1px solid var(--fade-grey-dark-3);
      box-shadow: var(--light-box-shadow);

      img {
        display: block;
        height: 50px;
        width: 50px;
        min-width: 50px;
        border-radius: var(--radius-rounded);
        border: 3px solid var(--white);
      }
    }

    .title-meta {
      margin-inline-start: 16px;

      p {
        span {
          color: var(--dark-text);
          font-weight: 500;
        }
      }
    }
  }

  .heatmap-inner {
    .heatmap-row {
      display: flex;
      align-items: center;

      .heatmap-row-label {
        width: 60px;
        text-align: center;
        color: var(--light-text);
        font-size: 0.95rem;
      }

      .heatmap-row-content {
        display: flex;
        flex-grow: 2;

        .heatmap-row-item {
          margin: 5px;
          flex: 1 1 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 34px;
          border-radius: var(--radius-large);
          background: var(--widget-grey-dark-2);

          &.heat-1 {
            background: var(--primary-light-48);
          }

          &.heat-2 {
            background: var(--primary-light-30);
          }

          &.heat-3 {
            background: var(--primary);

            i {
              color: var(--smoke-white);
              font-size: 12px;
            }
          }

          &.is-time {
            background: none;
            color: var(--light-text);
            font-size: 0.95rem;
            min-height: 26px;
          }
        }
      }
    }
  }
}

.is-dark {
  .heatmap-wrapper {
    .heatmap-title {
      .title-avatar {
        border-color: var(--dark-sidebar-light-12);

        img {
          border-color: var(--dark-sidebar-dark-2);
        }
      }

      .title-meta {
        p span {
          color: var(--dark-dark-text);
        }
      }
    }

    .heatmap-inner {
      .heatmap-row {
        .heatmap-row-content {
          .heatmap-row-item:not(.is-time) {
            background: var(--dark-sidebar-light-10);

            &.heat-1 {
              background: var(--dark-sidebar-light-2);
            }

            &.heat-2 {
              background: var(--primary-light-10);
            }

            &.heat-3 {
              background: var(--primary);

              i {
                color: var(--smoke-white);
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .heatmap-wrapper {
    .heatmap-inner {
      .heatmap-row {
        .heatmap-row-label {
          width: 40px;
        }

        .heatmap-row-content {
          .heatmap-row-item {
            &:first-child,
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6),
            &:nth-child(7),
            &:nth-child(8),
            &:nth-child(9) {
              display: none;
            }

            &.is-time {
              font-size: 0.85rem;
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .heatmap-wrapper {
    .heatmap-inner {
      .heatmap-row {
        .heatmap-row-label {
          width: 40px;
        }

        .heatmap-row-content {
          .heatmap-row-item {
            &:first-child,
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6) {
              display: none;
            }

            &.is-time {
              font-size: 0.85rem;
            }
          }
        }
      }
    }
  }
}
</style>
