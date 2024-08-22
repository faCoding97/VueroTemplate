<script setup lang="ts">
import sleep from '/@src/utils/sleep'
import { useNotyf } from '/@src/composable/useNotyf'

const notyf = useNotyf()
const router = useRouter()

const isLoading = ref(false)

const confirm = async () => {
  isLoading.value = true
  notyf.success('اکانت شما تایید شد علی !')

  await sleep()
  router.push('/sidebar/dashboards')

  await sleep()
  isLoading.value = false
}
</script>

<template>
  <div class="confirm-account-wrapper">
    <div class="wrapper-inner">
      <div class="action-box">
        <VLoader :active="isLoading">
          <div class="box-content">
            <img
              class="light-image"
              src="/@src/assets/illustrations/placeholders/launch.svg"
              alt=""
            >
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/launch-dark.svg"
              alt=""
            >
            <h3 class="dark-inverted">
            لطفا حساب خود را تایید کنید
            </h3>
            <p>
             سلام  علی، خیلی عالی می شد اگر بتوانی به ما در این پروژه کمک کنی. هر روز کارهای زیادی انجام می شود و من احساس می کنم تیم کمی در حال عقب ماند است. ما خیلی مشتاقیم که تو مسئولیت کارها رو به عهده بگیری.
            </p>
            <div class="buttons">
              <VButton
                color="primary"
                raised
                tabindex="0"
                @keydown.space.prevent="confirm"
                @click="confirm"
              >
                تایید حساب
              </VButton>
            </div>
          </div>
        </VLoader>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

/* ==========================================================================
1. تایید حساب
========================================================================== */
.confirm-account-wrapper {
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

        img {
          display: block;
          width: 100%;
          max-width: 220px;
          margin: 0 auto 8px;

          &.is-larger {
            max-width: 300px;
          }
        }

        h3 {
          font-size: 1.1rem;
          font-family: var(--font-alt);
          font-weight: 600;
          max-width: 320px;
          margin: 0 auto 8px;

          span {
            color: var(--primary);
          }
        }

        p {
          font-size: 0.9rem;
        }

        .buttons {
          margin: 0 auto;
          display: flex;
          justify-content: center;
          padding-top: 30px;

          .button {
            margin: 0 4px;
            min-width: 180px;
          }
        }
      }
    }
  }
}

.is-dark {
  .confirm-account-wrapper {
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

@media only screen and (width <= 767px) {
  .confirm-account-wrapper {
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
</style>
