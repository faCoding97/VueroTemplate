<script setup lang="ts">
import { posts } from '/@src/data/layouts/tile-grid-v3'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return posts
  } else {
    return posts.filter((item) => {
      return (
        item.title.match(new RegExp(filters.value, 'i')) ||
        item.author.name.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})

const valueSingle = ref(0)
const optionsSingle = ['همه نوشته ها', 'نوشته های اخیر', 'نوشته های قدیمی', 'نوشته های محبوب']
</script>

<template>
  <div>
    <div class="tile-grid-toolbar">
      <VControl icon="feather:search">
        <input
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
          <span>افزودن کاربر</span>
        </VButton>
      </div>
    </div>

    <div class="tile-grid tile-grid-v3">
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
            src="/@src/assets/illustrations/placeholders/search-6.svg"
            alt=""
          >
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-6-dark.svg"
            alt=""
          >
        </template>
      </VPlaceholderPage>

      <!--Tile Grid v3-->
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <a
            href="#"
            class="tile is-child tile-grid-item is-medium"
          >
            <div class="tile-grid-item-inner">
              <img
                src="/demo/photos/11.jpg"
                alt=""
                @error.once="onceImageErrored(400, 300)"
              >
              <div class="meta">
                <div class="tile-title">
                  <h3
                    class="dark-inverted"
                    data-filter-match
                  >
                    نحوه سرو قهوه در دفتر به روش صحیح
                  </h3>
                  <p class="h-hidden-tablet-l h-hidden-desktop">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                  </p>
                </div>
                <div class="tile-meta">
                  <VAvatar
                    picture="/demo/avatars/39.jpg"
                    size="small"
                  />
                  <div class="meta-inner">
                    <span
                      class="dark-inverted"
                      data-filter-match
                    > امید ش.</span>
                    <span>30 دقیقه پیش</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="tile is-parent">
          <a
            href="#"
            class="tile is-child tile-grid-item is-medium"
          >
            <div class="tile-grid-item-inner">
              <img
                src="/demo/photos/12.jpg"
                alt=""
                @error.once="onceImageErrored(400, 300)"
              >
              <div class="meta">
                <div class="tile-title">
                  <h3
                    class="dark-inverted"
                    data-filter-match
                  >
                    کار گروهی می تواند به طور چشمگیری بهره وری را افزایش دهد
                  </h3>
                  <p class="h-hidden-tablet-l h-hidden-desktop">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                  </p>
                </div>
                <div class="tile-meta">
                  <VAvatar
                    picture="/demo/avatars/15.jpg"
                    size="small"
                  />
                  <div class="meta-inner">
                    <span
                      class="dark-inverted"
                      data-filter-match
                    > هیلدا و.</span>
                    <span>4 ساعت پیش</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="tile is-parent">
          <a
            href="#"
            class="tile is-child tile-grid-item is-medium"
          >
            <div class="tile-grid-item-inner">
              <img
                src="/demo/photos/13.jpg"
                alt=""
                @error.once="onceImageErrored(400, 300)"
              >
              <div class="meta">
                <div class="tile-title">
                  <h3
                    class="dark-inverted"
                    data-filter-match
                  >
                    آیا ساخت تیم کلاهبرداری است یا چیز بعدی؟
                  </h3>
                  <p class="h-hidden-tablet-l h-hidden-desktop">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                  </p>
                </div>
                <div class="tile-meta">
                  <VAvatar
                    picture="/demo/avatars/24.jpg"
                    size="small"
                  />
                  <div class="meta-inner">
                    <span
                      class="dark-inverted"
                      data-filter-match
                    > سارینا س.</span>
                    <span>5 ساعت پیش</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <a
                href="#"
                class="tile is-child tile-grid-item is-medium"
              >
                <div class="tile-grid-item-inner">
                  <img
                    src="/demo/photos/14.jpg"
                    alt=""
                    @error.once="onceImageErrored(400, 300)"
                  >
                  <div class="meta">
                    <div class="tile-title">
                      <h3
                        class="dark-inverted"
                        data-filter-match
                      >
                        3 نکته که هنگام درخواست برای مشاغل توسعه دهنده باید بدانید
                      </h3>
                      <p class="h-hidden-tablet-l h-hidden-desktop">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ Optime,
                        inquam. Duo Reges constructio.
                      </p>
                    </div>
                    <div class="tile-meta">
                      <VAvatar
                        picture="/demo/avatars/27.jpg"
                        size="small"
                      />
                      <div class="meta-inner">
                        <span
                          class="dark-inverted"
                          data-filter-match
                        > کاویان ف.</span>
                        <span>8 ساعت پیش</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                class="tile is-child tile-grid-item is-medium"
              >
                <div class="tile-grid-item-inner">
                  <img
                    src="/demo/photos/15.jpg"
                    alt=""
                    @error.once="onceImageErrored(400, 300)"
                  >
                  <div class="meta">
                    <div class="tile-title">
                      <h3
                        class="dark-inverted"
                        data-filter-match
                      >
                        کسب و کار ساخت و ساز به طور گسترده در برنامه های تلفن همراه سرمایه گذاری می کند
                      </h3>
                      <p class="h-hidden-tablet-l h-hidden-desktop">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ Optime,
                        inquam. Duo Reges constructio.
                      </p>
                    </div>
                    <div class="tile-meta">
                      <VAvatar
                        picture="/demo/avatars/10.jpg"
                        size="small"
                      />
                      <div class="meta-inner">
                        <span
                          class="dark-inverted"
                          data-filter-match
                        > حمید ف.</span>
                        <span>1 روز پیش</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="tile is-parent">
              <a
                href="#"
                class="tile is-child tile-grid-item is-large"
              >
                <div class="tile-grid-item-inner">
                  <img
                    src="/demo/photos/16.jpg"
                    alt=""
                    @error.once="onceImageErrored(400, 300)"
                  >
                  <div class="meta">
                    <div class="tile-title">
                      <h3
                        class="dark-inverted"
                        data-filter-match
                      >
                        پیدا کردن مکان مناسب برای راه اندازی استارتاپ
                      </h3>
                      <p class="h-hidden-tablet-l h-hidden-desktop">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ Optime,
                        inquam. Duo Reges constructio.
                      </p>
                    </div>
                    <div class="tile-meta">
                      <VAvatar
                        picture="/demo/avatars/22.jpg"
                        size="small"
                      />
                      <div class="meta-inner">
                        <span
                          class="dark-inverted"
                          data-filter-match
                        > صابر م.</span>
                        <span>1 روز پیش</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="tile is-parent">
            <a
              href="#"
              class="tile is-child tile-grid-item is-wide"
            >
              <div class="tile-grid-item-inner">
                <img
                  src="/demo/photos/18.jpg"
                  alt=""
                  @error.once="onceImageErrored(400, 300)"
                >
                <div class="meta">
                  <div class="tile-title">
                    <h3
                      class="dark-inverted"
                      data-filter-match
                    >
                      4 نکته برای عالی کردن ناهارهای کاری شما
                    </h3>
                    <p>
             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    <p class="h-hidden-mobile h-hidden-tablet-p">
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                  </div>
                  <div class="tile-meta">
                    <VAvatar
                      picture="/demo/avatars/16.jpg"
                      size="small"
                    />
                    <div class="meta-inner">
                      <span
                        class="dark-inverted"
                        data-filter-match
                      > محمدجواد ق.</span>
                      <span>2 روز پیش</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="tile is-parent">
          <a
            href="#"
            class="tile is-child tile-grid-item is-tall"
          >
            <div class="tile-grid-item-inner">
              <img
                src="/demo/photos/19.jpg"
                alt=""
                @error.once="onceImageErrored(400, 300)"
              >
              <div class="meta">
                <div class="tile-title">
                  <h3
                    class="dark-inverted"
                    data-filter-match
                  >
                    راه اندازی یک سیستم طراحی برای پروژه برنامه شما
                  </h3>
                  <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                  </p>
                  <p class="h-hidden-mobile h-hidden-tablet-p">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                  </p>
                </div>
                <div class="tile-meta">
                  <VAvatar
                    picture="/demo/avatars/26.jpg"
                    size="small"
                  />
                  <div class="meta-inner">
                    <span
                      class="dark-inverted"
                      data-filter-match
                    > کتایون و.</span>
                    <span>2 روز پیش</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <a
            href="#"
            class="tile is-child tile-grid-item is-wide"
          >
            <div class="tile-grid-item-inner">
              <img
                src="/demo/photos/20.jpg"
                alt=""
                @error.once="onceImageErrored(400, 300)"
              >
              <div class="meta">
                <div class="tile-title">
                  <h3
                    class="dark-inverted"
                    data-filter-match
                  >
                  پایه و اساس یک سیستم آموزش الکترونیکی عالی
                  </h3>
                  <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                  </p>
                </div>
                <div class="tile-meta">
                  <VAvatar
                    picture="/images/avatars/svg/vuero-1.svg"
                    size="small"
                  />
                  <div class="meta-inner">
                    <span
                      class="dark-inverted"
                      data-filter-match
                    >علی ز.</span>
                    <span>2 روز پیش</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="tile is-parent is-6">
          <a
            href="#"
            class="tile is-child tile-grid-item is-wide"
          >
            <div class="tile-grid-item-inner">
              <img
                src="/demo/photos/23.jpg"
                alt=""
                @error.once="onceImageErrored(400, 300)"
              >
              <div class="meta">
                <div class="tile-title">
                  <h3
                    class="dark-inverted"
                    data-filter-match
                  >
                    چرا  نمایه کردن مشتریانتان سودمند است
                  </h3>
                  <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                  </p>
                </div>
                <div class="tile-meta">
                  <VAvatar
                    picture="/demo/avatars/40.jpg"
                    size="small"
                  />
                  <div class="meta-inner">
                    <span
                      class="dark-inverted"
                      data-filter-match
                    > ژاله م.</span>
                    <span>3 روز پیش</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <a
            href="#"
            class="tile is-child tile-grid-item is-medium"
          >
            <div class="tile-grid-item-inner">
              <img
                src="/demo/photos/22.jpg"
                alt=""
                @error.once="onceImageErrored(400, 300)"
              >
              <div class="meta">
                <div class="tile-title">
                  <h3
                    class="dark-inverted"
                    data-filter-match
                  >
                    استفاده از رنگ های پر زرق و برق در وب سایت ها و برنامه های خود
                  </h3>
                  <p class="h-hidden-tablet-l h-hidden-desktop">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                  </p>
                </div>
                <div class="tile-meta">
                  <VAvatar
                    picture="/demo/avatars/9.jpg"
                    size="small"
                  />
                  <div class="meta-inner">
                    <span
                      class="dark-inverted"
                      data-filter-match
                    >آنا ب.</span>
                    <span>3 روز پیش</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="tile is-parent">
          <a
            href="#"
            class="tile is-child tile-grid-item is-medium"
          >
            <div class="tile-grid-item-inner">
              <img
                src="/demo/photos/24.jpg"
                alt=""
                @error.once="onceImageErrored(400, 300)"
              >
              <div class="meta">
                <div class="tile-title">
                  <h3
                    class="dark-inverted"
                    data-filter-match
                  >
                    ایجاد یک تیم ثابت و با استعداد
                  </h3>
                  <p class="h-hidden-tablet-l h-hidden-desktop">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                  </p>
                </div>
                <div class="tile-meta">
                  <VAvatar
                    picture="/demo/avatars/19.jpg"
                    size="small"
                  />
                  <div class="meta-inner">
                    <span
                      class="dark-inverted"
                      data-filter-match
                    > نازنین گ.</span>
                    <span>3 روز پیش</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="tile is-parent">
          <a
            href="#"
            class="tile is-child tile-grid-item is-medium"
          >
            <div class="tile-grid-item-inner">
              <img
                src="/demo/photos/27.jpg"
                alt=""
                @error.once="onceImageErrored(400, 300)"
              >
              <div class="meta">
                <div class="tile-title">
                  <h3
                    class="dark-inverted"
                    data-filter-match
                  >
                    شیرجه در ساخت یک نام تجاری تجارت الکترونیک - قسمت 1
                  </h3>
                  <p class="h-hidden-tablet-l h-hidden-desktop">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                  </p>
                </div>
                <div class="tile-meta">
                  <VAvatar
                    picture="/demo/avatars/33.jpg"
                    size="small"
                  />
                  <div class="meta-inner">
                    <span
                      class="dark-inverted"
                      data-filter-match
                    > حسن ر.</span>
                    <span>4 روز پیش</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.tile-grid {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.tile-grid-v3 {
  .tile {
    &.is-ancestor {
      margin-inline-start: -0.5rem;
      margin-inline-end: -0.5rem;
      margin-top: -0.5rem;
    }

    &.is-parent {
      padding: 0.5rem;
    }
  }

  .tile-grid-item {
    @include vuero-s-card;

    padding: 10px;
    border-radius: 16px;

    &.is-medium {
      max-height: 132px;

      .tile-grid-item-inner {
        display: flex;
        height: 100%;

        > img {
          display: block;
          border-radius: 12px;
          width: 100%;
          max-width: 110px;
          min-width: 110px;
          height: 100%;
          min-height: 110px;
          max-height: 110px;
          object-fit: cover;
        }

        .meta {
          margin-inline-start: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .tile-title {
            h3 {
              font-family: var(--font-alt);
              font-size: 1rem;
              font-weight: 600;
              color: var(--dark-text);
              line-height: 1.3;
            }
          }

          .tile-meta {
            display: flex;
            align-items: center;
            margin-top: auto;
            padding: 0 0 5px;

            .v-avatar {
              max-width: 26px;
              max-height: 26px;
              min-width: 26px;

              .avatar {
                max-width: 26px;
                max-height: 26px;
                min-width: 26px;
              }
            }

            .meta-inner {
              margin-inline-start: 8px;
              line-height: 1.2;

              span {
                display: block;
                font-weight: 400;

                &:first-child {
                  color: var(--dark-text);
                  font-family: var(--font-alt);
                  font-size: 0.85rem;
                  font-weight: 600;
                }

                &:nth-child(2) {
                  font-size: 0.8rem;
                  font-family: var(--font);
                  color: var(--light-text);
                }
              }
            }
          }
        }
      }
    }

    &.is-large {
      .tile-grid-item-inner {
        display: flex;
        flex-direction: column;
        height: 100%;

        > img {
          display: block;
          border-radius: 12px;
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .meta {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1 1 0;
          padding: 0 5px;

          .tile-title {
            padding-top: 10px;

            h3 {
              font-family: var(--font);
              font-size: 1.2rem;
              font-weight: 500;
              color: var(--dark-text);
              line-height: 1.1;
            }
          }

          .tile-meta {
            display: flex;
            align-items: center;
            margin-top: auto;
            padding: 0 0 5px;

            .v-avatar {
              max-width: 26px;
              max-height: 26px;
              min-width: 26px;

              .avatar {
                max-width: 26px;
                max-height: 26px;
                min-width: 26px;
              }
            }

            .meta-inner {
              margin-inline-start: 8px;
              line-height: 1.2;

              span {
                display: block;
                font-weight: 400;

                &:first-child {
                  color: var(--dark-text);
                  font-size: 0.9rem;
                  font-weight: 500;
                }

                &:nth-child(2) {
                  font-size: 0.8rem;
                  color: var(--light-text);
                }
              }
            }
          }
        }
      }
    }

    &.is-wide {
      .tile-grid-item-inner {
        display: flex;
        height: 100%;

        > img {
          display: block;
          border-radius: 12px;
          width: 100%;
          max-width: 280px;
          height: 100%;
          min-height: 160px;
          object-fit: cover;
        }

        .meta {
          margin-inline-start: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .tile-title {
            padding-top: 5px;

            h3 {
              font-family: var(--font);
              font-size: 1.3rem;
              font-weight: 500;
              color: var(--dark-text);
              line-height: 1.1;
            }

            p {
              color: var(--light-text);
              font-size: 0.95rem;
              padding-top: 5px;
            }
          }

          .tile-meta {
            display: flex;
            align-items: center;
            margin-top: auto;
            padding: 0 0 5px;

            .v-avatar {
              max-width: 26px;
              max-height: 26px;
              min-width: 26px;

              .avatar {
                max-width: 26px;
                max-height: 26px;
                min-width: 26px;
              }
            }

            .meta-inner {
              margin-inline-start: 8px;
              line-height: 1.2;

              span {
                display: block;
                font-weight: 400;

                &:first-child {
                  color: var(--dark-text);
                  font-size: 0.9rem;
                  font-weight: 500;
                }

                &:nth-child(2) {
                  font-size: 0.8rem;
                  color: var(--light-text);
                }
              }
            }
          }
        }
      }
    }

    &.is-tall {
      .tile-grid-item-inner {
        display: flex;
        flex-direction: column;
        height: 100%;

        > img {
          display: block;
          border-radius: 12px;
          width: 100%;

          // max-width: 110px;
          height: 220px;
          object-fit: cover;
        }

        .meta {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1 1 0;
          padding: 0 5px;

          .tile-title {
            padding-top: 10px;

            h3 {
              font-family: var(--font);
              font-size: 1.2rem;
              font-weight: 500;
              color: var(--dark-text);
              line-height: 1.1;
            }

            p {
              color: var(--light-text);
              font-size: 0.95rem;
              padding-top: 5px;
            }
          }

          .tile-meta {
            display: flex;
            align-items: center;
            margin-top: auto;
            padding: 0 0 5px;

            .v-avatar {
              max-width: 26px;
              max-height: 26px;
              min-width: 26px;

              .avatar {
                max-width: 26px;
                max-height: 26px;
                min-width: 26px;
              }
            }

            .meta-inner {
              margin-inline-start: 8px;
              line-height: 1.2;

              span {
                display: block;
                font-weight: 400;

                &:first-child {
                  color: var(--dark-text);
                  font-size: 0.9rem;
                  font-weight: 500;
                }

                &:nth-child(2) {
                  font-size: 0.8rem;
                  color: var(--light-text);
                }
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .tile-grid {
    .tile-grid-item {
      @include vuero-card--dark;
    }
  }

  .tile-grid-v3 {
    .tile-grid-item {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (width <= 767px) {
  .tile-grid-v3 {
    .tile-grid-item {
      max-height: 132px !important;

      .tile-grid-item-inner {
        display: flex !important;
        flex-direction: row !important;
        height: 100% !important;

        > img {
          display: block !important;
          border-radius: 12px !important;
          width: 100% !important;
          max-width: 110px !important;
          min-width: 110px !important;
          height: 100% !important;
          min-height: 110px !important;
          max-height: 110px !important;
          object-fit: cover !important;
        }

        .meta {
          margin-inline-start: 12px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;

          .tile-title {
            h3 {
              font-family: var(--font) !important;
              font-size: 1.1rem !important;
              font-weight: 500;
              color: var(--dark-text) !important;
              line-height: 1.1 !important;
            }

            p {
              display: none !important;
            }
          }

          .tile-meta {
            display: flex !important;
            align-items: center !important;
            margin-top: auto !important;
            padding: 0 0 5px !important;

            .v-avatar {
              max-width: 26px !important;
              max-height: 26px !important;
              min-width: 26px !important;

              .avatar {
                max-width: 26px !important;
                max-height: 26px !important;
                min-width: 26px !important;
              }
            }

            .meta-inner {
              margin-inline-start: 8px !important;
              line-height: 1.2 !important;

              span {
                display: block !important;
                font-weight: 400 !important;

                &:first-child {
                  color: var(--dark-text) !important;
                  font-size: 0.9rem !important;
                  font-weight: 500 !important;
                }

                &:nth-child(2) {
                  font-size: 0.8rem !important;
                  color: var(--light-text) !important;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .tile-grid-v3 {
    .tile-grid-item {
      max-height: 132px !important;

      .tile-grid-item-inner {
        display: flex !important;
        flex-direction: row !important;
        height: 100% !important;

        > img {
          display: block !important;
          border-radius: 12px !important;
          width: 100% !important;
          max-width: 110px !important;
          min-width: 110px !important;
          height: 100% !important;
          min-height: 110px !important;
          max-height: 110px !important;
          object-fit: cover !important;
        }

        .meta {
          margin-inline-start: 12px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;

          .tile-title {
            h3 {
              font-family: var(--font) !important;
              font-size: 1.1rem !important;
              font-weight: 500;
              color: var(--dark-text) !important;
              line-height: 1.1 !important;
            }

            p {
              display: block;
              max-width: 460px;
            }
          }

          .tile-meta {
            display: flex !important;
            align-items: center !important;
            margin-top: auto !important;
            padding: 0 0 5px !important;

            .v-avatar {
              max-width: 26px !important;
              max-height: 26px !important;
              min-width: 26px !important;

              .avatar {
                max-width: 26px !important;
                max-height: 26px !important;
                min-width: 26px !important;
              }
            }

            .meta-inner {
              margin-inline-start: 8px !important;
              line-height: 1.2 !important;

              span {
                display: block !important;
                font-weight: 400 !important;

                &:first-child {
                  color: var(--dark-text) !important;
                  font-size: 0.9rem !important;
                  font-weight: 500 !important;
                }

                &:nth-child(2) {
                  font-size: 0.8rem !important;
                  color: var(--light-text) !important;
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
  .tile-grid-v3 {
    .tile-grid-item {
      &.is-medium {
        .tile-grid-item-inner {
          .tile-title {
            h3 {
              font-size: 1rem !important;
            }
          }
        }
      }

      &.is-large {
        .tile-grid-item-inner {
          .tile-title {
            h3 {
              font-size: 1.1rem !important;
            }
          }
        }
      }

      &.is-tall {
        .tile-grid-item-inner {
          .tile-title {
            h3 {
              font-size: 1.2rem !important;
            }
          }
        }
      }

      &.is-wide {
        .tile-grid-item-inner {
          > img {
            max-width: 180px;
            min-height: 160px;
          }

          .tile-title {
            h3 {
              font-size: 1.2rem !important;
            }
          }
        }
      }
    }
  }
}
</style>
