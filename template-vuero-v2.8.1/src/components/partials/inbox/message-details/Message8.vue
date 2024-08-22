<script setup lang="ts">
import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'
import { isMediumScreen } from '/@src/utils/responsive'

const emit = defineEmits<{
  (e: 'update:mobileMessageOpen', value: boolean): void
}>()
const props = defineProps<{
  selected?: boolean
  mobileMessageOpen?: boolean
}>()

const dropdownElement1 = ref<HTMLElement>()
const dropdown1 = useDropdown(dropdownElement1)

const dropdownElement2 = ref<HTMLElement>()
const dropdown2 = useDropdown(dropdownElement2)
</script>

<template>
  <div
    :class="[
      props.mobileMessageOpen && props.selected && 'mobile-active tablet-active',
      isMediumScreen && !props.selected && 'is-hidden',
    ]"
    class="inbox-message-details"
  >
    <div class="header-area">
      <img
        class="sender-pic"
        src="/demo/avatars/28.jpg"
        alt=""
        @error.once="onceImageErrored(150)"
      >
      <div class="message-meta">
        <span class="message-title"> گزارش اشکال داشبورد مشتری در فروردین </span>
        <span class="sender-email">&lt;edouard@vuero.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <i
          aria-hidden="true"
          class="iconify"
          data-icon="feather:paperclip"
        />
        <span>1</span>
      </div>
      <div
        ref="dropdownElement1"
        class="dropdown inbox-dropdown dropdown-trigger is-right"
      >
        <div>
          <button
            class="button"
            @click="dropdown1.toggle"
          >
            <span class="icon is-small">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:more-vertical"
              />
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:bookmark"
              />
              <span>بوک مارک</span>
            </a>
            <a class="dropdown-item">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:share-2"
              />
              <span>اشتراک پیام</span>
            </a>
            <hr class="dropdown-divider">
            <a class="dropdown-item">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:thumbs-down"
              />
              <span>علامت به عنوان اسپم</span>
            </a>
          </div>
        </div>
      </div>
      <a
        class="inbox-action inbox-close-details-mobile"
        role="button"
        tabindex="0"
        @keydown.space.prevent="emit('update:mobileMessageOpen', false)"
        @click="emit('update:mobileMessageOpen', false)"
      >
        <i
          aria-hidden="true"
          class="iconify"
          data-icon="feather:x"
        />
      </a>
    </div>
    <!--Message-->
    <div class="message-wrapper has-slimscroll">
      <div class="message-inner">
        <div class="message-head">
          <div class="info">
            <span>ارسال شده در</span>
            <span>17 شهریور 1402, در  02:29 ب.ظ</span>
          </div>
          <div class="message-actions">
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:corner-up-left"
              />
            </a>
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:file-text"
              />
            </a>
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:tag"
              />
            </a>
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:message-circle"
              />
            </a>
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:lock"
              />
            </a>
          </div>
        </div>
        <!--Mail Content-->
        <div class="mail-content content">
          <p>سلام,</p>
          <p>
          این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی..
            <a href="#">همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است.</a>
      این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!

          </p>
          <ul>
            <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
            <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</li>
          </ul>

          <p>احسان</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>report.pdf</span>
            <div class="download-icon">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:arrow-down"
              />
            </div>
          </div>
        </div>
      </div>

      <!--Reply-->
      <div class="reply-box-wrap">
        <div class="reply-bubble">
          <div class="reply-as">
            <img
              src="/images/avatars/svg/vuero-1.svg"
              alt=""
              @error.once="onceImageErrored(150)"
            >
            <div class="reply-details">
              <span>پاسخ به عنوان</span>
              <span>ali@vuero.io</span>
            </div>
            <div
              ref="dropdownElement2"
              class="dropdown inbox-dropdown dropdown-trigger is-right"
            >
              <div>
                <button
                  class="button"
                  @click="dropdown2.toggle"
                >
                  <span class="icon is-small">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:more-vertical"
                    />
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:refresh-cw"
                    />
                    <span>بازنشانی</span>
                  </a>
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:align-left"
                    />
                    <span>املا</span>
                  </a>
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:at-sign"
                    />
                    <span>اشاره</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!--textarea-->
          <div class="control">
            <textarea
              class="textarea"
              rows="6"
              placeholder="پیام خود را بنویسید..."
            />
            <button
              type="button"
              class="button"
            >
          ارسال پیام
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
