<template>
  <div class="all-projects">
    <ProjectsToolbar />

    <div class="all-projects-header">
      <div class="header-item">
        <div class="item-inner">
          <i
            aria-hidden="true"
            class="lnil lnil-analytics-alt-1"
          />
          <span>147</span>
          <p>پروژه های منتشر شده</p>
        </div>
      </div>
      <div class="header-item">
        <div class="item-inner">
          <i
            aria-hidden="true"
            class="lnil lnil-target-alt-1"
          />
          <span>1638</span>
          <p>تسک های کامل شده</p>
        </div>
      </div>
      <div class="header-item">
        <div class="item-inner">
          <i
            aria-hidden="true"
            class="lnil lnil-pie-chart-alt"
          />
          <span>88%</span>
          <p>عملکرد تیم</p>
        </div>
      </div>
      <div class="header-item">
        <div class="item-inner">
          <i
            aria-hidden="true"
            class="lnil lnil-leaf"
          />
          <span>17</span>
          <p>اعضای تیم</p>
        </div>
      </div>
    </div>

    <div class="columns is-multiline projects-card-grid">
      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3># 118 Agios Inc. تغییر نام تجاری</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">
                توسعه دهندگان
              </h4>
              <div class="developers">
                <VAvatar
                  size="small"
                  color="primary"
                  initials="FE"
                />
                <VAvatar
                  size="small"
                  color="success"
                  initials="SD"
                />
                <VAvatar
                  size="small"
                  color="info"
                  initials="NJ"
                />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               مهلت
              </h4>
              <p>7 مرداد 1402</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               بودجه
              </h4>
              <p>15,000 تومان</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
                وضعیت
              </h4>
              <p>در حال انجام</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>به‌روزرسانی‌های وب‌سایت Sweet Candy #117</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">
                توسعه دهندگان
              </h4>
              <div class="developers">
                <VAvatar
                  size="small"
                  picture="/demo/avatars/7.jpg"
                />
                <VAvatar
                  size="small"
                  picture="/images/avatars/svg/vuero-1.svg"
                />
                <VAvatar
                  size="small"
                  color="danger"
                  initials="DC"
                />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               مهلت
              </h4>
              <p>7 مرداد 1402</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               بودجه
              </h4>
              <p>15,000 تومان</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
                وضعیت
              </h4>
              <p>در حال انجام</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#116 پلاگین طراحی ما را به روز کنید</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">
                توسعه دهندگان
              </h4>
              <div class="developers">
                <VAvatar
                  size="small"
                  picture="/demo/avatars/25.jpg"
                />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               مهلت
              </h4>
              <p>7 مرداد 1402</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               بودجه
              </h4>
              <p>15,000 تومان</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
                وضعیت
              </h4>
              <p>در حال انجام</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#115 برنامه چت Refactor</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">
                توسعه دهندگان
              </h4>
              <div class="developers">
                <VAvatar
                  size="small"
                  picture="/demo/avatars/7.jpg"
                />
                <VAvatar
                  size="small"
                  picture="/demo/avatars/23.jpg"
                />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               مهلت
              </h4>
              <p>7 مرداد 1402</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               بودجه
              </h4>
              <p>15,000 تومان</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
                وضعیت
              </h4>
              <p>در حال انجام</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#114 یک وب سایت بازاریابی ایجاد کنید</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">
                توسعه دهندگان
              </h4>
              <div class="developers">
                <VAvatar
                  size="small"
                  picture="/demo/avatars/11.jpg"
                />
                <VAvatar
                  size="small"
                  color="h-orange"
                  initials="AG"
                />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               مهلت
              </h4>
              <p>7 مرداد 1402</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               بودجه
              </h4>
              <p>15,000 تومان</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
                وضعیت
              </h4>
              <p>در حال انجام</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#113 یک صحه لندلینگ ایجاد کنید</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">
                توسعه دهندگان
              </h4>
              <div class="developers">
                <VAvatar
                  size="small"
                  picture="/demo/avatars/12.jpg"
                />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               مهلت
              </h4>
              <p>7 مرداد 1402</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               بودجه
              </h4>
              <p>15,000 تومان</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
                وضعیت
              </h4>
              <p>در حال انجام</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#112 یک اپلیکیشن موبایل اجتماعی بسازید</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">
                توسعه دهندگان
              </h4>
              <div class="developers">
                <VAvatar
                  size="small"
                  picture="/demo/avatars/24.jpg"
                />
                <VAvatar
                  size="small"
                  picture="/demo/avatars/18.jpg"
                />
                <VAvatar
                  size="small"
                  picture="/demo/avatars/16.jpg"
                />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               مهلت
              </h4>
              <p>7 مرداد 1402</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               بودجه
              </h4>
              <p>15,000 تومان</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
                وضعیت
              </h4>
              <p>در حال انجام</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3># 111 Bulma Inc. تغییر نام تجاری</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">
                توسعه دهندگان
              </h4>
              <div class="developers">
                <VAvatar
                  size="small"
                  color="info"
                  initials="ET"
                />
                <VAvatar
                  size="small"
                  color="warning"
                  initials="BH"
                />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               مهلت
              </h4>
              <p>7 مرداد 1402</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               بودجه
              </h4>
              <p>15,000 تومان</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
                وضعیت
              </h4>
              <p>در حال انجام</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#110 یک پلاگین محلی سازی ایجاد کنید</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">
                توسعه دهندگان
              </h4>
              <div class="developers">
                <VAvatar
                  size="small"
                  picture="/demo/avatars/25.jpg"
                />
                <VAvatar
                  size="small"
                  color="info"
                  initials="ET"
                />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               مهلت
              </h4>
              <p>7 مرداد 1402</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
               بودجه
              </h4>
              <p>15,000 تومان</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">
                وضعیت
              </h4>
              <p>در حال انجام</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.all-projects {
  .all-projects-header {
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
          font-size: 2.2rem;
          margin-bottom: 6px;
          color: var(--primary);
        }

        span {
          display: block;
          font-family: var(--font);
          font-weight: 600;
          font-size: 1.4rem;
          color: var(--dark-text);
        }

        p {
          font-family: var(--font-alt);
        }
      }
    }
  }

  .projects-card-grid {
    .grid-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 220px;
      padding: 20px;
      background: var(--white);
      border: 1px solid var(--fade-grey-dark-3);
      border-radius: var(--radius-large);

      .top-section {
        .head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;

          h3 {
            font-size: 1rem;
            font-family: var(--font-alt);
            color: var(--dark-text);
            font-weight: 600;
          }
        }

        .body {
          p {
            font-family: var(--font);
            color: var(--light-text);
          }
        }
      }

      .bottom-section {
        display: flex;

        .foot-block {
          margin-inline-end: 30px;

          .heading {
            font-family: var(--font-alt);
            font-size: 0.75rem;
            color: var(--light-text-dark-22);
          }

          > p {
            padding-top: 5px;
          }

          .developers {
            display: flex;

            .v-avatar {
              margin-inline-end: 6px;
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .all-projects {
    .all-projects-header {
      background: var(--dark-sidebar-light-6);
      border-color: var(--dark-sidebar-light-12);

      .header-item {
        border-color: var(--dark-sidebar-light-18);

        span {
          color: var(--dark-dark-text);
        }

        i {
          color: var(--primary) !important;
        }
      }
    }

    .projects-card-grid {
      .grid-item {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-12);

        .top-section {
          .head {
            h3 {
              color: var(--dark-dark-text);
            }
          }
        }

        .bottom-section {
          .foot-block {
            .heading {
              color: var(--light-text-dark-12);
            }
          }
        }
      }
    }
  }
}
</style>
