<script setup lang="ts">
import sleep from '/@src/utils/sleep'
import { useNotyf } from '/@src/composable/useNotyf'
import { popovers } from '/@src/data/users/userPopovers'

const notyf = useNotyf()
const router = useRouter()

const isLoading = ref(false)

const accept = async () => {
  isLoading.value = true
  notyf.success('دعوت به سایت راه حل بانکی پذیرفته شد')

  await sleep()
  router.push('/sidebar/dashboards/banking-1')

  isLoading.value = false
}
</script>

<template>
  <div class="action-page-wrapper action-page-v1">
    <div class="wrapper-inner">
      <div class="action-box">
        <div class="box-content">
          <VAvatar
            size="big"
            picture="/demo/avatars/16.jpg"
            badge="/demo/photos/apps/9.png"
          />

          <h3 class="dark-inverted">
        محمدجواد ق. شما را به پروژه <span class="is-dark-primary">وب سایت راه حل بانکی</span> دعوت کرده است.
          </h3>

          <div class="sender-message is-dark-card-bordered is-dark-bg-4">
            <h4 class="dark-inverted">
              پیامی از رضا
            </h4>
            <p>
                سلام  علی، خیلی عالی می شد اگر بتوانی به ما در این پروژه کمک کنی. هر روز کارهای زیادی انجام می شود و من احساس می کنم تیم کمی در حال عقب ماند است. ما خیلی مشتاقیم که تو مسئولیت کارها رو به عهده بگیری.
            </p>
          </div>
          <div class="people-wrap">
            <div class="people">
              <div>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  placement="bottom"
                >
                  <VAvatar
                    size="small"
                    picture="/demo/avatars/21.jpg"
                  />
                  <template #content>
                    <UserPopoverContent :user="popovers.user21" />
                  </template>
                </Tippy>
              </div>

              <div>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  placement="bottom"
                >
                  <VAvatar
                    size="small"
                    color="h-purple"
                    initials="SC"
                  />
                  <template #content>
                    <UserPopoverContent :user="popovers.user120" />
                  </template>
                </Tippy>
              </div>

              <div>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  placement="bottom"
                >
                  <VAvatar
                    size="small"
                    picture="/demo/avatars/39.jpg"
                  />
                  <template #content>
                    <UserPopoverContent :user="popovers.user39" />
                  </template>
                </Tippy>
              </div>
            </div>
            <div class="people-text">
              <p>و 5 نفر دیگر در حال حاضر عضو این پروژه هستند</p>
            </div>
          </div>
          <div class="buttons">
            <VButton dark-outlined>
              رد
            </VButton>
            <VButton
              color="primary"
              :loading="isLoading"
              raised
              tabindex="0"
              @keydown.space.prevent="accept"
              @click="accept"
            >
              قبول
            </VButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.action-page-wrapper {
  &.action-page-v1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 540px;
    min-height: 560px;
    margin: 0 auto;

    .wrapper-inner {
      .action-box {
        @include vuero-s-card;

        padding: 40px;

        .box-content {
          text-align: center;
          font-family: var(--font);

          .v-avatar {
            display: block;
            margin: 0 auto 8px;
          }

          h3 {
            font-family: var(--font-alt);
            font-weight: 600;
            max-width: 320px;
            margin: 0 auto 16px;

            span {
              color: var(--primary);
            }
          }

          .sender-message {
            text-align: inset-inline-start;
            padding: 20px;
            border: 1px solid var(--fade-grey-dark-3);
            max-width: 360px;
            margin: 0 auto;
            border-radius: var(--radius-large);
            box-shadow: var(--light-box-shadow);

            h4 {
              font-family: var(--font-alt);
              font-size: 0.7rem;
              font-weight: 500;
              color: var(--dark-text);
              text-transform: uppercase;
              margin-bottom: 6px;
            }

            p {
              font-size: 0.9rem;
            }
          }

          .people-wrap {
            .people {
              display: flex;
              justify-content: center;
              padding: 16px 0 8px;

              .v-avatar {
                margin: 0 4px;
              }
            }

            .people-text {
              p {
                font-size: 0.9rem;
              }
            }
          }

          .buttons {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            padding-top: 30px;

            .button {
              margin: 0 4px;
              min-width: 150px;
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .action-page-wrapper {
    &.action-page-v1 {
      .wrapper-inner {
        .action-box {
          @include vuero-card--dark;
        }
      }

      .wrapper-outer {
        @include vuero-card--dark;
      }
    }
  }
}

/* ==========================================================================
3. Media Queries
========================================================================== */

@media only screen and (width <= 767px) {
  .action-page-wrapper {
    &.action-page-v1 {
      .wrapper-inner {
        .action-box {
          padding: 20px;

          .box-content {
            .buttons {
              .button {
                min-width: 130px;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .action-page-wrapper {
    &.action-page-v1 {
      .wrapper-inner {
        .action-box {
          .box-content {
            .buttons {
              .button {
                min-width: 130px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
