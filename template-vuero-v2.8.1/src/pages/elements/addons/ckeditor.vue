<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'
import  '@ckeditor/ckeditor5-build-classic/build/translations/fa.js'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editor = shallowRef<any>()
const CKEditor = defineAsyncComponent(() =>
  import('@ckeditor/ckeditor5-vue').then((m) => m.default.component)
)

const editorConfig = {
  language: 'fa',
  fontFamily: {
    options: ['"Montserrat", sans-serif', '"Roboto", sans-serif'],
  },
}

const editorData = ref(`
  <h2>سه چیز بزرگی که از سفر یاد می گیرید</h2>

	<p>مانند همه چیزهای بزرگ روی زمین، سفر با مثال به ما می آموزد. در اینجا برخی از با ارزش ترین درس هایی است که در طول سال های سفر آموخته ام.</p>

	<figure class="image image-style-side"><img src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="A lone wanderer looking at Mount Bromo volcano in Indonesia.">
		<figcaption>ترک منطقه راحتی ممکن است شما را به مناظر زیبایی مانند این سوق دهد.</figcaption>
	</figure>

	<h3>قدردانی از تنوع</h3>

	<p>عادت کردن به فرهنگ کاملاً متفاوت می تواند چالش برانگیز باشد. در حالی که یادگیری در مورد فرهنگ ها به صورت آنلاین یا از طریق کتاب نیز خوب است، هیچ چیز به تجربه تنوع فرهنگی به صورت شخصی نزدیک نیست. شما یاد می گیرید که قدر تک تک تفاوت ها را بدانید در حالی که از نظر فرهنگی روان تر می شوید.</p>

	<blockquote>
		<p>سفر واقعی اکتشاف در جستجوی مناظر جدید نیست، بلکه داشتن چشمانی جدید است.</p>
		<p><strong>مارسل پروست</strong></p>
	</blockquote>

	<h3>ابتکار</h3>

	<p>زندگی به ما اجازه نمی دهد تک تک برنامه ها را به خوبی اجرا کنیم. به نظر می رسد که این مورد به ویژه در هنگام سفر صدق می کند. شما آن را تا هر دقیقه با یک چک لیست بزرگ برنامه ریزی می کنید. اما وقتی نوبت به اجرای آن می‌رسد، همیشه چیزی پیش می‌آید و شما با مهارت‌های بداهه‌پردازی خود باقی می‌مانید. شما یاد می گیرید که با رفتن خود سازگار شوید. چک لیست سفر من اکنون چگونه به نظر می رسد:</p>

	<ul>
		<li>بلیط را بخر</li>
		<li>ماجراجویی خود را شروع کن</li>
	</ul>

	<figure class="image image-style-side"><img src="https://images.pexels.com/photos/2967596/pexels-photo-2967596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Three Monks walking on ancient temple.">
		<figcaption>ترک منطقه راحتی ممکن است شما را به چنین مناظر زیبایی مانند این سوق دهد.</figcaption>
	</figure>

	<h3>اعتماد به نفس</h3>

	<p>رفتن به یک مکان جدید می تواند بسیار وحشتناک باشد. در حالی که تغییر و عدم اطمینان باعث ترس ما می شود، سفر به ما می آموزد که چقدر مضحک است ترس از چیزی قبل از وقوع آن اتفاق بیفتد. لحظه ای که با ترس خود روبرو می شوید و می بینید که چیزی برای ترسیدن وجود ندارد، لحظه ای است که سعادت را کشف می کنید.</p>
`)

onMounted(async () => {
  // lazy load the editor when the component is mounted
  editor.value = await import('@ckeditor/ckeditor5-build-classic').then((m) => m.default)
})

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('CKEditor')

useHead({
  title: 'CKEditor - افزونه ها- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: '/',
        },
        {
          label: 'المنت ها',
          to: '/elements/',
        },
        {
          label: 'افزونه ها',
        },
        {
          label: 'CKEditor',
          to: '/elements/addons/ckeditor',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Simple Datatable-->
        <CKEditorBasicDocumentation />

        <div class="columns">
          <div class="column is-12 content">
            <CKEditor
            
              v-if="editor"
              v-model="editorData"
              :editor="ClassicEditor"
              :config="editorConfig"
            />
            <VPlaceload
              v-else
              height="500px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
