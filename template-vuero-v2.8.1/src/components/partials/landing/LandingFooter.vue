<template>
  <footer class="vuero-footer">
    <div class="container">
      <div class="footer-head">
        <div class="head-text">
          <h3>برای شروع آماده اید؟</h3>
          <p>اکنون نسخه Vuero خود را دریافت کنید</p>
        </div>
        <div class="head-action">
          <div class="buttons">
            <a
              href="https://www.rtl-theme.com/author/virus3000/products/"
              class="button v-button is-primary is-rounded raised action-button"
            >
            خرید Vuero
            </a>
            <a
              target="_blank"
              href="https://go.cssninja.io/discord"
              class="button chat-button"
            >
              <span>به ما در Discord بپیوندید</span>
              <i
                class="iconify ml-1"
                data-icon="feather:external-link"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="columns footer-body">
        <!-- Column -->
        <div class="column is-4">
          <div class="p-t-10 p-b-10">
            <AnimatedLogo
              width="36px"
              height="36px"
            />

            <div class="footer-description p-t-10 p-b-10">
              Vuero برای توسعه دهندگان و طراحان ساخته شده است. این رویکرد ماژولار به شما امکان می‌دهد نوارهای ناوبری فوق‌العاده با طرح‌بندی‌ها و المنت های باورنکردنی ایجاد کنید.
            </div>
          </div>
          <div>
            <span class="moto">
              طراحی و کدنویسی  با
              <i
                aria-hidden="true"
                class="fas fa-heart text-danger"
              /> توسط
              <a
                href="https://cssninja.io"
                target="_blank"
                class="has-text-primary"
              >
                CSS Ninja.
              </a>
            </span>
            <div class="social-links p-t-10 p-b-10">
              <a
                href="https://www.facebook.com/cssninjaStudio/"
                target="_blank"
              >
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="fab fa-facebook"
                  />
                </span>
              </a>
              <a
                href="https://twitter.com/cssninjaStudio"
                target="_blank"
              >
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="fab fa-twitter"
                  />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/digisquad-io/"
                target="_blank"
              >
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="fab fa-linkedin"
                  />
                </span>
              </a>
              <a
                href="https://dribbble.com/DrissChelouati"
                target="_blank"
              >
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="fab fa-dribbble"
                  />
                </span>
              </a>
              <a
                href="https://github.com/cssninjaStudio"
                target="_blank"
              >
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="fab fa-github"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- Column -->
        <div class="column is-6 is-offset-2">
          <div class="columns is-flex-tablet-p">
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  Vuero
                </li>
                <li class="column-item">
                  <a
                    href="https://cssninja.io/faq/quality"
                    target="_blank"
                  >کیفیت</a>
                </li>
                <li class="column-item">
                  <a
                    href="https://cssninja.io/faq/github-access"
                    target="_blank"
                  >
                  دسترسی گیتهاب
                  </a>
                </li>
                <li class="column-item">
                  <a href="https://cssninja.io/faq/licenses">مجوز های ما</a>
                </li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  منابع
                </li>
                <li class="column-item">
                  <a
                    href="https://cssninja.io/faq"
                    target="_blank"
                  >سوالات متداول</a>
                </li>
                <li class="column-item">
                  <a
                    href="https://cssninja.io/faq/github-access"
                    target="_blank"
                  >
                  دسترسی گیتهاب
                  </a>
                </li>
                <li class="column-item">
                  <a
                    href="https://cssninja.io/faq/support"
                    target="_blank"
                  >
                   مرکز پشتیبانی
                  </a>
                </li>
                <li class="column-item">
                  <a
                    href="https://docs.cssninja.io"
                    target="_blank"
                  >آموزش</a>
                </li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  شرایط
                </li>
                <li class="column-item">
                  <a
                    href="https://cssninja.io/about/terms-of-service"
                    target="_blank"
                  >شرایط خدمات</a>
                </li>
                <li class="column-item">
                  <a
                    href="https://cssninja.io/about/privacy-policy"
                    target="_blank"
                  >سیاست حفظ حریم خصوصی</a>
                </li>
                <li class="column-item">
                  <a
                    href="https://cssninja.io/company/contact"
                    target="_blank"
                  >
                 تماس با ما
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright has-text-centered">
        <p>
          <span
            role="img"
            aria-label="copyright"
          >&copy;</span> 2020-2023 |
          <a href="https://cssninja.io">cssninjaStudio</a> | تمامی حقوق محفوظ است.
        </p>
      </div>
    </div>
    <div class="grids gridlines" />
  </footer>
  <!-- /Simple light footer -->
</template>

<style lang="scss">
.vuero-footer {
  position: relative;
  padding-bottom: 0 !important;
  padding-top: 4rem !important;
  background: var(--body-color);

  .grids {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8rem;
  }

  .footer-head {
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--fade-grey-dark-4);

    .head-text {
      h3 {
        font-family: var(--font);
        font-size: 1.8rem;
        color: var(--dark-text);
      }

      p {
        font-size: 1.1rem;
        color: var(--light-text);
      }
    }

    .head-action {
      .buttons {
        .button {
          &.action-button {
            height: 36px;
            min-width: 140px;
          }

          &.chat-button {
            background: transparent;
            border: none;
            box-shadow: none;
            color: var(--primary);
            font-weight: 500;
          }
        }
      }
    }
  }

  .footer-body {
    padding-top: 3rem;

    .footer-column {
      padding-top: 20px;

      .column-header {
        font-family: var(--font-alt);
        text-transform: uppercase;
        color: var(--dark-text);
        font-size: 1rem;
        font-weight: 700;
        margin: 10px 0;
      }

      .column-item {
        padding-bottom: 10px;

        a {
          font-family: var(--font);
          color: var(--light-text);

          &:hover,
          &:focus {
            color: var(--primary);
          }
        }
      }
    }

    .social-links {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        color: var(--light-text);
        margin: 0 5px;

        &:hover,
        &:focus {
          color: var(--primary);
        }
      }
    }

    .footer-description {
      color: var(--light-text);
    }

    .moto {
      color: var(--light-text);
    }

    .small-footer-logo {
      height: 36px;
    }
  }

  .footer-copyright {
    font-family: var(--font);
    color: var(--light-text);
    padding: 4rem 0 2rem;

    a {
      color: var(--light-text);

      &:hover,
      &:focus {
        color: var(--primary);
      }
    }
  }
}

.is-dark {
  .landing-page-wrapper {
    .vuero-footer {
      background: var(--landing-xxx-light-8);

      .footer-head {
        border-color: var(--landing-xxx-light-18);

        .head-text {
          h3 {
            color: var(--dark-dark-text);
          }

          p {
            font-size: 1.1rem;
            color: var(--light-text);
          }
        }

        .head-action {
          .buttons {
            .button {
              &.action-button {
                background: var(--primary);
                border-color: var(--primary);
              }

              &.chat-button {
                color: var(--primary);
                background: none !important;
              }
            }
          }
        }
      }

      .footer-body {
        .footer-column {
          .column-header {
            color: var(--dark-dark-text);
          }

          .column-item {
            a:hover {
              color: var(--primary);
            }
          }
        }

        .social-links {
          a:hover {
            color: var(--primary);
          }
        }
      }

      .footer-copyright {
        a {
          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
}

@media (width <= 767px) {
  .vuero-footer {
    .footer-head {
      flex-direction: column;
      text-align: center;

      .head-text {
        padding-bottom: 20px;
      }
    }

    .footer-body {
      padding-inline-start: 20px;
      padding-inline-end: 20px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .vuero-footer {
    .footer-head,
    .footer-body {
      padding-inline-start: 20px;
      padding-inline-end: 20px;
    }

    .footer-description {
      max-width: 400px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .vuero-footer {
    .footer-head,
    .footer-body {
      padding-inline-start: 20px;
      padding-inline-end: 20px;
    }
  }
}
</style>
