<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update:conversationId', value: number): void
  (e: 'update:selectedConversationList', value: number[]): void
}>()
const props = withDefaults(
  defineProps<{
    conversationId?: number
    selectedConversationList?: number[]
  }>(),
  {
    conversationId: 0,
    selectedConversationList: () => [],
  }
)

const unread = ref(true)
const internalSelection = ref(props.selectedConversationList)

watchEffect(() => {
  emit('update:selectedConversationList', internalSelection.value)
})
</script>

<template>
  <div
    class="inbox-message"
    :class="[conversationId === 2 && 'is-selected', unread && 'is-unread']"
    role="button"
    tabindex="0"
    @keydown.space.prevent="
      () => {
        unread = false
        emit('update:conversationId', 2)
      }
    "
    @click="
      () => {
        unread = false
        emit('update:conversationId', 2)
      }
    "
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input
          v-model="internalSelection"
          type="checkbox"
          :value="2"
        >
        <span />
      </label>
    </div>
    <div class="message-meta">
      <span class="name">مهدیار نادری</span>
      <span class="email">&lt;jonathan@vuero.io&gt;</span>
      <span class="subject">
        <strong>نتونستم به شام دفعه قبل برسم</strong>
      </span>
    </div>
    <div class="pushed">
     22 شهریور
    </div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 1 && 'is-selected']"
    role="button"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 1)"
    @click="() => emit('update:conversationId', 1)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input
          v-model="internalSelection"
          type="checkbox"
          :value="1"
        >
        <span />
      </label>
    </div>
    <div class="message-meta">
      <span class="name">ملانی محمدی</span>
      <span class="email">&lt;melany@vuero.io&gt;</span>
      <span class="subject">بررسی پروژه مهم پنجشنبه آینده</span>
    </div>
    <div class="pushed">
     21 شهریور
    </div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 3 && 'is-selected']"
    role="button"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 3)"
    @click="() => emit('update:conversationId', 3)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input
          v-model="internalSelection"
          type="checkbox"
          :value="3"
        >
        <span />
      </label>
    </div>
    <div class="message-meta">
      <span class="name">سحر نفیسی</span>
      <span class="email">&lt;greta@vuero.io&gt;</span>
      <span class="subject">فراموش نکنید که  یادداشت های بودجه را برای من ارسال کنید</span>
    </div>
    <div class="pushed">
    20 شهریور
    </div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 4 && 'is-selected']"
    role="button"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 4)"
    @click="() => emit('update:conversationId', 4)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input
          v-model="internalSelection"
          type="checkbox"
          :value="4"
        >
        <span />
      </label>
    </div>
    <div class="message-meta">
      <span class="name">الیزابت رادی</span>
      <span class="email">&lt;elizabeth@vuero.io&gt;</span>
      <span class="subject">ملاقات با مشتری جدید در روز دوشنبه</span>
    </div>
    <div class="pushed">
    19 شهریور
    </div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 5 && 'is-selected']"
    role="button"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 5)"
    @click="() => emit('update:conversationId', 5)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input
          v-model="internalSelection"
          type="checkbox"
          :value="5"
        >
        <span />
      </label>
    </div>
    <div class="message-meta">
      <span class="name">کاوان عسگری</span>
      <span class="email">&lt;carmen@vuero.io&gt;</span>
      <span class="subject">
       من چیزهای لذت بخش جدیدی دریافت کردم که حتما باید ببینید
      </span>
    </div>
    <div class="pushed">
      19 شهریور
    </div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 6 && 'is-selected']"
    role="button"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 6)"
    @click="() => emit('update:conversationId', 6)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input
          v-model="internalSelection"
          type="checkbox"
          :value="6"
        >
        <span />
      </label>
    </div>
    <div class="message-meta">
      <span class="name">الناز تهامی</span>
      <span class="email">&lt;irina@vuero.io&gt;</span>
      <span class="subject">گزارش تولید لید این ماه</span>
    </div>
    <div class="pushed">
      18 شهریور
    </div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 7 && 'is-selected']"
    role="button"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 7)"
    @click="() => emit('update:conversationId', 7)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input
          v-model="internalSelection"
          type="checkbox"
          :value="7"
        >
        <span />
      </label>
    </div>
    <div class="message-meta">
      <span class="name">امید شاملو</span>
      <span class="email">&lt;alejandro@vuero.io&gt;</span>
      <span class="subject"> ایده های طراحی جدید از تیم تجربه کاربر</span>
    </div>
    <div class="pushed">
    18 شهریور
    </div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 8 && 'is-selected']"
    role="button"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 8)"
    @click="() => emit('update:conversationId', 8)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input
          v-model="internalSelection"
          type="checkbox"
          :value="8"
        >
        <span />
      </label>
    </div>
    <div class="message-meta">
      <span class="name">احسان ناظری</span>
      <span class="email">&lt;edouard@vuero.io&gt;</span>
      <span class="subject">گزارش اشکال داشبورد مشتری در فروردین</span>
    </div>
    <div class="pushed">
     17 شهریور
    </div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 9 && 'is-selected']"
    role="button"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 9)"
    @click="() => emit('update:conversationId', 9)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input
          v-model="internalSelection"
          type="checkbox"
          :value="9"
        >
        <span />
      </label>
    </div>
    <div class="message-meta">
      <span class="name">سانیا احمدی</span>
      <span class="email">&lt;sandrine@vuero.io&gt;</span>
      <span class="subject">شما پاسخ ایمیل من را نداده اید!</span>
    </div>
    <div class="pushed">
   17 شهریور
    </div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 10 && 'is-selected']"
    role="button"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 10)"
    @click="() => emit('update:conversationId', 10)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input
          v-model="internalSelection"
          type="checkbox"
          :value="10"
        >
        <span />
      </label>
    </div>
    <div class="message-meta">
      <span class="name">کیانا کاویانی</span>
      <span class="email">&lt;kelly@vuero.io&gt;</span>
      <span class="subject">برای بررسی پروژه بعدی وارد شوید</span>
    </div>
    <div class="pushed">
      16 شهریور
    </div>
  </div>
</template>
