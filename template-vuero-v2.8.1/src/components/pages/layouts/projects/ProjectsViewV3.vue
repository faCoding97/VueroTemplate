<script setup lang="ts">
const filterProjects = ref(0)
</script>

<template>
  <div class="all-projects">
    <div class="illustration-header">
      <img
        class="light-image"
        src="/@src/assets/illustrations/projects/header.svg"
        alt=""
      >
      <img
        class="dark-image"
        src="/@src/assets/illustrations/projects/header-dark.svg"
        alt=""
      >
      <div class="header-stats">
        <div class="stats-inner">
          <div class="stat-item">
            <span class="is-success">12</span>
            <p>در حال انجام</p>
          </div>
          <div class="stat-item">
            <span class="is-warning">4</span>
            <p>مسدود</p>
          </div>
          <div class="stat-item">
            <span class="is-info">89</span>
            <p>ارسال شد</p>
          </div>
          <div class="stat-item">
            <span class="is-primary">141</span>
            <p>کل پروژه ها</p>
          </div>
        </div>
      </div>
    </div>

    <div class="recent-projects">
      <h3 class="recent-heading">
       پروژه های اخیر
      </h3>

      <div class="columns">
        <div class="column is-4">
          <a class="project-box">
            <div class="circle-chart-wrapper is-success">
              <CircleChart :value="55" />
            </div>
            <h3>داشبورد مدیریت مشتری</h3>
          </a>
        </div>
        <div class="column is-4">
          <a class="project-box">
            <div class="circle-chart-wrapper is-danger">
              <CircleChart :value="80" />
            </div>
            <h3>طراحی مجدد وب سایت و برنامه CandyBar</h3>
          </a>
        </div>
        <div class="column is-4">
          <a class="project-box">
            <div class="circle-chart-wrapper is-info">
              <CircleChart :value="28" />
            </div>
            <h3>بستر بازاریابی و سرمایه گذاری</h3>
          </a>
        </div>
      </div>
    </div>

    <div class="project-minimal-grid">
      <div class="grid-header">
        <h3>پروژه ها</h3>
        <div class="filter">
          <span>فیلتر بر اساس</span>

          <VControl>
            <Multiselect
              v-model="filterProjects"
              :options="['ارسال  به زودی', 'در حال انجام', 'مسدود', 'آرشیو شده']"
              placeholder="ارسال به زودی"
            />
          </VControl>
        </div>
      </div>

      <div class="columns is-multiline grid-body">
        <!--Project-->
        <div class="column is-4">
          <a class="grid-item">
            <div class="item-head">
              <span class="type">طراحی UI/UX</span>
              <span class="status is-success">در حال انجام</span>
            </div>
            <div class="item-title">
              <h3>اصلاح اپلیکیشن مالی</h3>
              <div class="tags">
                <VTag
                  label="مالی"
                  color="solid"
                  rounded
                />
                <VTag
                  label="مارکتینگ"
                  color="solid"
                  rounded
                />
                <VTag
                  label="پرداختی"
                  color="solid"
                  rounded
                />
              </div>
            </div>
            <div class="item-description">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>

              <div class="item-people">
                <VAvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/13.jpg' },
                    { picture: '/demo/avatars/11.jpg' },
                  ]"
                />

                <span class="label">1 ماه باقی مانده</span>
              </div>
            </div>
          </a>
        </div>
        <!--Project-->
        <div class="column is-4">
          <a class="grid-item">
            <div class="item-head">
              <span class="type">توسعه وب</span>
              <span class="status is-info">ارسال به زودی</span>
            </div>
            <div class="item-title">
              <h3>وب سایت تجارت الکترونیک برای خوانندگان غروب آفتاب</h3>
              <div class="tags">
                <VTag
                  label="ورزش"
                  color="solid"
                  rounded
                />
                <VTag
                  label="موج سواری"
                  color="solid"
                  rounded
                />
              </div>
            </div>
            <div class="item-description">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>

              <div class="item-people">
                <VAvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/7.jpg' },
                    { picture: '/demo/avatars/9.jpg' },
                    { color: 'info', initials: 'JD' },
                    { picture: '/demo/avatars/12.jpg' },
                    { picture: '/images/avatars/svg/vuero-1.svg' },
                    { picture: '/demo/avatars/25.jpg' },
                    { picture: '/demo/avatars/25.jpg' },
                    { picture: '/demo/avatars/25.jpg' },
                    { picture: '/demo/avatars/25.jpg' },
                  ]"
                />

                <span class="label">3 روز باقی مانده</span>
              </div>
            </div>
          </a>
        </div>
        <!--Project-->
        <div class="column is-4">
          <a class="grid-item">
            <div class="item-head">
              <span class="type">Business</span>
              <span class="status is-warning">Overdue</span>
            </div>
            <div class="item-title">
              <h3>مدل کسب و کار برای رشد استارتاپ</h3>
              <div class="tags">
                <VTag
                  label="بیزینس"
                  color="solid"
                  rounded
                />
                <VTag
                  label="استارتاپ"
                  color="solid"
                  rounded
                />
                <VTag
                  label="مدیریت"
                  color="solid"
                  rounded
                />
              </div>
            </div>
            <div class="item-description">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>

              <div class="item-people">
                <VAvatarStack
                  size="small"
                  :avatars="[{ picture: '/demo/avatars/14.jpg' }]"
                />

                <span class="label">1 هفته باقی مانده</span>
              </div>
            </div>
          </a>
        </div>
        <!--Project-->
        <div class="column is-4">
          <a class="grid-item">
            <div class="item-head">
              <span class="type">توسعه وب</span>
              <span class="status is-danger">مسدود</span>
            </div>
            <div class="item-title">
              <h3>یک تجزیه کننده سند با React Hooks بسازید</h3>
              <div class="tags">
                <VTag
                  label="جاوااسکریپت"
                  color="solid"
                  rounded
                />
                <VTag
                  label="Tesseract"
                  color="solid"
                  rounded
                />
              </div>
            </div>
            <div class="item-description">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>

              <div class="item-people">
                <VAvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/images/avatars/svg/vuero-1.svg' },
                    { picture: '/demo/avatars/22.jpg' },
                    { picture: '/demo/avatars/12.jpg' },
                    { picture: '/demo/avatars/10.jpg' },
                    { picture: '/demo/avatars/26.jpg' },
                  ]"
                />

                <span class="label">2 ماه باقی مانده</span>
              </div>
            </div>
          </a>
        </div>
        <!--Project-->
        <div class="column is-4">
          <a class="grid-item">
            <div class="item-head">
              <span class="type">هوش مصنوعی</span>
              <span class="status is-success">در حال انجام</span>
            </div>
            <div class="item-title">
              <h3>پروژه هوش مصنوعی را تثبیت کنید و ویژگی ها را یکپارچه کنید</h3>
              <div class="tags">
                <VTag
                  label="هوش مصنوعی"
                  color="solid"
                  rounded
                />
                <VTag
                  label="ماشین لرنینگ"
                  color="solid"
                  rounded
                />
              </div>
            </div>
            <div class="item-description">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>

              <div class="item-people">
                <VAvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/13.jpg' },
                    { picture: '/demo/avatars/11.jpg' },
                    { picture: '/images/avatars/svg/vuero-1.svg' },
                    { picture: '/demo/avatars/22.jpg' },
                  ]"
                />

                <span class="label">3 ماه باقی مانده</span>
              </div>
            </div>
          </a>
        </div>
        <!--Project-->
        <div class="column is-4">
          <a class="grid-item">
            <div class="item-head">
              <span class="type">طراحی UI/UX</span>
              <span class="status is-success">در حال انجام</span>
            </div>
            <div class="item-title">
              <h3>برندسازی و هویت BigBro را دوباره کار کنید</h3>
              <div class="tags">
                <VTag
                  label="موسیقی"
                  color="solid"
                  rounded
                />
                <VTag
                  label="محل برگزاری"
                  color="solid"
                  rounded
                />
                <VTag
                  label="شهری"
                  color="solid"
                  rounded
                />
              </div>
            </div>
            <div class="item-description">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>

              <div class="item-people">
                <VAvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/13.jpg' },
                    { picture: '/demo/avatars/11.jpg' },
                  ]"
                />

                <span class="label">2 ماه باقی مانده</span>
              </div>
            </div>
          </a>
        </div>
        <!--Project-->
        <div class="column is-4">
          <a class="grid-item">
            <div class="item-head">
              <span class="type">طراحی UI/UX</span>
              <span class="status is-success">در حال انجام</span>
            </div>
            <div class="item-title">
              <h3>داشبورد مدیریت مشتری</h3>
              <div class="tags">
                <VTag
                  label="بیزینس"
                  color="solid"
                  rounded
                />
                <VTag
                  label="مشتری"
                  color="solid"
                  rounded
                />
              </div>
            </div>
            <div class="item-description">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>

              <div class="item-people">
                <VAvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/13.jpg' },
                    { picture: '/demo/avatars/16.jpg' },
                    { picture: '/demo/avatars/10.jpg' },
                    { picture: '/demo/avatars/9.jpg' },
                  ]"
                />

                <span class="label">2 ماه باقی مانده</span>
              </div>
            </div>
          </a>
        </div>
        <!--Project-->
        <div class="column is-4">
          <a class="grid-item">
            <div class="item-head">
              <span class="type">توسعه وب</span>
              <span class="status is-danger">مسدود</span>
            </div>
            <div class="item-title">
              <h3>طراحی مجدد وب سایت و برنامه CandyBar</h3>
              <div class="tags">
                <VTag
                  label="موبایل"
                  color="solid"
                  rounded
                />
                <VTag
                  label="هایبرید"
                  color="solid"
                  rounded
                />
              </div>
            </div>
            <div class="item-description">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>

              <div class="item-people">
                <VAvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/22.jpg' },
                    { picture: '/demo/avatars/10.jpg' },
                    { picture: '/demo/avatars/26.jpg' },
                  ]"
                />

                <span class="label">5 روز باقی مانده</span>
              </div>
            </div>
          </a>
        </div>
        <!--Project-->
        <div class="column is-4">
          <a class="grid-item">
            <div class="item-head">
              <span class="type">بیزینس</span>
              <span class="status is-info">ارسال به زودی</span>
            </div>
            <div class="item-title">
              <h3>بستر بازاریابی و سرمایه گذاری</h3>
              <div class="tags">
                <VTag
                  label="بیزینس"
                  color="solid"
                  rounded
                />
                <VTag
                  label="مالی"
                  color="solid"
                  rounded
                />
              </div>
            </div>
            <div class="item-description">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>

              <div class="item-people">
                <VAvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/14.jpg' },
                    { picture: '/demo/avatars/16.jpg' },
                    { picture: '/demo/avatars/10.jpg' },
                  ]"
                />

                <span class="label">1 هفته باقی مانده</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.is-navbar {
  .all-projects {
    padding-top: 20px;
  }
}

.all-projects {
  .illustration-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      display: block;
      max-width: 260px;
    }

    .header-stats {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-grow: 2;

      .stats-inner {
        display: flex;
        align-items: center;
        padding: 20px;
        background: var(--white);
        border: 1px solid var(--fade-grey-dark-3);
        border-radius: var(--radius-large);

        .stat-item {
          text-align: center;
          margin: 0 20px;

          span {
            position: relative;
            display: block;
            font-family: var(--font);
            font-weight: 600;
            font-size: 2rem;
            color: var(--dark-text);
            line-height: 1;
            width: 75px;
            margin: 0 auto;

            &::after {
              content: '';
              position: absolute;
              top: 0;
              inset-inline-end: 6px;
              height: 8px;
              width: 8px;
              border-radius: var(--radius-rounded);
            }

            &.is-success {
              &::after {
                background: var(--success);
              }
            }

            &.is-info {
              &::after {
                background: var(--info);
              }
            }

            &.is-warning {
              &::after {
                background: var(--warning);
              }
            }

            &.is-primary {
              &::after {
                background: var(--primary);
              }
            }
          }

          p {
            font-family: var(--font-alt);
            font-size: 0.9rem;
            color: var(--light-text);
          }
        }
      }
    }
  }

  .recent-projects {
    padding: 20px 0;

    .recent-heading {
      font-family: var(--font-alt);
      font-size: 0.8rem;
      font-weight: 500;
      text-transform: uppercase;
      color: var(--light-text);
      margin-bottom: 1rem;
    }

    .project-box {
      display: flex;
      align-items: center;
      padding: 20px;
      background: var(--white);
      border: 1px solid var(--fade-grey-dark-3);
      border-radius: 8px;
      transition: all 0.3s; // transition-all test

      &:hover {
        box-shadow: var(--light-box-shadow);
      }

      h3 {
        font-family: var(--font-alt);
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--dark-text);
        margin-inline-start: 16px;
        line-height: 1.2;
      }
    }
  }

  .project-minimal-grid {
    .grid-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-family: var(--font-alt);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--dark-text);
        margin-inline-start: 16px;
        line-height: 1.2;
      }

      .filter {
        display: flex;
        align-items: center;
        background: var(--white);
        padding: 8px 24px;
        border-radius: 100px;

        > span {
          font-family: var(--font-alt);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-text);
          margin-inline-end: 20px;
        }

        .multiselect {
          min-width: 170px;
          border: none;
        }
      }
    }

    .grid-body {
      padding: 20px 0;

      .grid-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 26px;
        background: var(--white);
        border: 1px solid var(--fade-grey-dark-3);
        border-radius: 8px;
        transition: all 0.3s; // transition-all test

        &:hover {
          box-shadow: var(--light-box-shadow);

          .item-title {
            h3 {
              opacity: 0.6;
            }
          }
        }

        .item-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font);

          .type {
            text-transform: uppercase;
            color: var(--light-text);
            font-size: 0.8rem;
            font-weight: 600;
          }

          .status {
            text-transform: uppercase;
            font-size: 0.75rem;
            font-family: var(--font-alt);
            font-weight: 600;

            &.is-success {
              color: var(--success);
            }

            &.is-info {
              color: var(--info);
            }

            &.is-warning {
              color: var(--warning);
            }

            &.is-danger {
              color: var(--danger);
            }
          }
        }

        .item-title {
          padding: 40px 0;

          h3 {
            font-family: var(--font-alt);
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--dark-text);
            line-height: 1.2;
            margin-bottom: 8px;
            transition: all 0.3s; // transition-all test
          }
        }

        .item-description {
          p {
            font-size: 1rem;
          }

          .item-people {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 20px;

            .label {
              font-family: var(--font);
              color: var(--light-text);
              font-weight: 400;
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .all-projects {
    .illustration-header {
      .header-stats {
        .stats-inner {
          background: var(--dark-sidebar-light-6);
          border-color: var(--dark-sidebar-light-12);

          .stat-item {
            span {
              color: var(--dark-dark-text);
            }
          }
        }
      }
    }

    .recent-projects {
      .project-box {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-12);

        h3 {
          color: var(--dark-dark-text);
        }
      }
    }

    .project-minimal-grid {
      .grid-header {
        h3 {
          color: var(--dark-dark-text);
        }

        .filter {
          background: var(--dark-sidebar-light-1) !important;
          border-color: var(--dark-sidebar-light-4) !important;

          > span {
            color: var(--dark-dark-text);
          }
        }
      }

      .grid-body {
        .grid-item {
          background: var(--dark-sidebar-light-6);
          border-color: var(--dark-sidebar-light-12);

          .item-title {
            h3 {
              color: var(--dark-dark-text);
            }
          }

          .v-avatar {
            img {
              border-color: var(--dark-sidebar-light-6);
            }
          }
        }
      }
    }
  }
}
</style>
