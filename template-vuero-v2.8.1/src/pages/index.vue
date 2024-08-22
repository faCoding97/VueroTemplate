<script setup lang="ts">
import packageJson from '../../package.json'

type TabId = 'elements' | 'components' | 'forms' | 'plugins'
const activeTab = ref<TabId>('elements')

useHead({
  title: 'Vuero - یک سیستم طراحی کامل Vue 3',
})
</script>

<template>
  <MinimalLayout theme="light">
    <div class="landing-page-wrapper">
      <!-- Hero and Navbar -->
      <div
        id="vuero-landing"
        class="hero is-fullheight is-active"
      >
        <!-- Navbar partial -->
        <LandingNavigation />
        <div class="grids gridlines" />
        <div class="hero-body has-text-centered">
          <div class="container">
            <h1 class="title is-1 is-bold dark-white is-leading">
            با <span>Vuero</span>  وب‌اپ های  سریع و زیبا بسازید
            </h1>
            <h3 class="subtitle is-4">
              داشبورد پرمیوم Vue و UI کیت وب‌اپ
              <span class="tag is-primary is-rounded">{{ packageJson.version }}</span>
            </h3>

            <div class="buttons mb-2">
              <VButton
                href="https://go.cssninja.io/buy-vuero"
                color="primary"
                rounded
              >
               Vuero  را امروز بخرید
              </VButton>
            </div>

            <div class="trusted-by mb-4">
              <span>مورد اعتماد <span>2000+ مشتری</span></span>
              <div class="rating">
                <i
                  class="iconify"
                  data-icon="uiw:star-on"
                />
                <i
                  class="iconify"
                  data-icon="uiw:star-on"
                />
                <i
                  class="iconify"
                  data-icon="uiw:star-on"
                />
                <i
                  class="iconify"
                  data-icon="uiw:star-on"
                />
                <i
                  class="iconify"
                  data-icon="uiw:star-on"
                />
              </div>
            </div>

            <div class="hero-mockup-wrap">
              <div class="hero-mockup">
                <img
                  class="light-image-block-l"
                  src="/@src/assets/illustrations/landing/app-1.png"
                  alt=""
                >
                <img
                  class="dark-image-block-l"
                  src="/@src/assets/illustrations/landing/app-1-dark.png"
                  alt=""
                >
              </div>
              <div class="hero-mockup-gradient" />
            </div>
          </div>
        </div>

        <canvas id="demo-canvas" />
      </div>

      <!--Stacks Section-->
      <div
        id="stacks-section"
        class="section"
      >
        <div class="container">
          <!--Stacks-->
          <div class="stacks">
            <div>
              <Tippy
                class="has-help-cursor"
                interactive
                placement="top"
              >
                <div class="stack">
                  <img
                    src="/images/icons/stacks/vuejs.svg"
                    alt=""
                  >
                </div>
                <template #content>
                  <StackPopoverContent
                    :stack="{
                      name: 'Vue 3',
                      subtitle: 'ترکیب بندی API',
                      logo: '/images/icons/stacks/vuejs.svg',
                      description:
                        'فریم‌ورک جاوا اسکریپت پیشرو برای ساخت رابط کاربری.',
                      homepage: 'https://v3.vuejs.org/',
                      github: 'https://github.com/vuejs/vue-next',
                    }"
                  />
                </template>
              </Tippy>
            </div>

            <div>
              <Tippy
                class="has-help-cursor"
                interactive
                placement="top"
              >
                <div class="stack">
                  <img
                    src="/images/icons/stacks/vite.svg"
                    alt=""
                  >
                </div>
                <template #content>
                  <StackPopoverContent
                    :stack="{
                      name: 'Vite',
                      subtitle: 'نسل بعدی ابزار فرانت اند',
                      logo: '/images/icons/stacks/vite.svg',
                      description:
                        'Vite نسل جدیدی از ابزار ساخت فرانت اند است که به طور قابل توجهی تجربه توسعه فرانت اند را بهبود می بخشد.',
                      homepage: 'https://vitejs.dev/',
                      github: 'https://github.com/vitejs/vite',
                    }"
                  />
                </template>
              </Tippy>
            </div>

            <div>
              <Tippy
                class="has-help-cursor"
                interactive
                placement="top"
              >
                <div class="stack">
                  <img
                    src="/images/icons/stacks/bulma.svg"
                    alt=""
                  >
                </div>
                <template #content>
                  <StackPopoverContent
                    :stack="{
                      name: 'Bulma',
                      subtitle: 'فریم‌ورک مدرن CSS',
                      logo: '/images/icons/stacks/bulma.svg',
                      description:
                        'Bulma یک فریم‌ورک رایگان و متن باز است که ک کامپوننت های ظاهری آماده برای استفاده را فراهم می کند.',
                      homepage: 'https://bulma.io/',
                      github: 'https://github.com/jgthms/bulma',
                    }"
                  />
                </template>
              </Tippy>
            </div>

            <div>
              <Tippy
                class="has-help-cursor"
                interactive
                placement="top"
              >
                <div class="stack">
                  <img
                    src="/images/icons/stacks/sass.svg"
                    alt=""
                  >
                </div>
                <template #content>
                  <StackPopoverContent
                    :stack="{
                      name: 'Sass',
                      subtitle: 'CSS را دوباره سرگرم کننده می کند',
                      logo: '/images/icons/stacks/sass.svg',
                      description:
                        'Sass یک توسعه CSS است که قوانین تودرتو، متغیرها، میکسین ها، وراثت انتخابگر و موارد دیگر را اضافه می کند.',
                      homepage: 'https://sass-lang.com/',
                      github: 'https://github.com/sass/sass',
                    }"
                  />
                </template>
              </Tippy>
            </div>

            <div>
              <Tippy
                class="has-help-cursor"
                interactive
                placement="top"
              >
                <div class="stack">
                  <img
                    src="/images/icons/stacks/typescript.svg"
                    alt=""
                  >
                </div>
                <template #content>
                  <StackPopoverContent
                    :stack="{
                      name: 'تایپ اسکریپت',
                      subtitle: 'Javascript enhanced',
                      logo: '/images/icons/stacks/typescript.svg',
                      description:
                        'TypeScript تایپ های اختیاری را به جاوا اسکریپت اضافه می کند که از ابزارهایی برای برنامه های کاربردی جاوا اسکریپت در مقیاس بزرگ پشتیبانی می کند.',
                      homepage: 'https://www.typescriptlang.org/',
                      github: 'https://github.com/microsoft/TypeScript',
                    }"
                  />
                </template>
              </Tippy>
            </div>
          </div>

          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">
             امکانات بی نظیر
            </h2>
            <h4>هرآنچه که برای ساخت پروژه خود نیاز دارید، اینجاست.</h4>
          </div>

          <!--Boxed Features-->
          <div class="boxed-features">
            <div class="flex-card light-bordered hover-inset">
              <div class="flex-cell is-bordered">
                <i
                  aria-hidden="true"
                  class="lnil lnil-toolbox"
                />
                <h3>+500 کامپوننت Vue</h3>
                <p>مجموعه ای باورنکردنی از بلاک بیلدینگ ها  با پشتیبانی از حالت تاریک.</p>
              </div>
              <div class="flex-cell is-bordered">
                <i
                  aria-hidden="true"
                  class="lnil lnil-display-alt"
                />
                <h3>220+ دمو</h3>
                <p>Vuero با تعداد زیادی دمو برای شروع پروژه شما ارسال می شود.</p>
              </div>
              <div class="flex-cell is-bordered">
                <i
                  aria-hidden="true"
                  class="lnil lnil-moon"
                />
                <h3>حالت تاریک  نیتیو</h3>
                <p>تک تک تکه‌های رابط کاربری به‌طور طبیعی حالت تاریک آماده است.</p>
              </div>
              <div class="flex-cell is-bordered no-border-edge">
                <i
                  aria-hidden="true"
                  class="lnil lnil-rocket"
                />
                <h3>پشتیبانی فعال</h3>
                <p>پشتیبانی ما به شما کمک می کند تا هر مشکلی را که دارید حل کنید</p>
              </div>
              <div class="flex-cell">
                <i
                  aria-hidden="true"
                  class="lnil lnil-code"
                />
                <h3>کد تمیز</h3>
                <p>پایگاه کد Vuero بزرگ است، اما ساختار یافته و به راحتی قابل درک است</p>
              </div>
              <div class="flex-cell">
                <i
                  aria-hidden="true"
                  class="lnil lnil-plug"
                />
                <h3>آیکون های پرمیوم</h3>
                <p>Vuero با مجموعه آیکون های خط برتر (30 دلار) ارسال می شود.</p>
              </div>
              <div class="flex-cell">
                <i
                  class="lnil lnil-switch"
                  aria-hidden="true"
                />
                <h3>پشتیبانی راستچین</h3>
                <p>Vuero از طرح‌بندی‌های راست چین پشتیبانی می‌کند. در کمتر از یک دقیقه آن را پیکربندی کنید.</p>
              </div>
              <div class="flex-cell no-border-edge">
                <i
                  aria-hidden="true"
                  class="lnil lnil-file-name"
                />
                <h3>اسناد گسترده</h3>
                <p>یک داکیومنت خوب برای کمک به شما برای شروع سریع</p>
              </div>
            </div>
          </div>

          <!--CTA-->
          <div class="cta-block">
            <div class="head-text">
              <h3>خرید از راستچین</h3>
              <p>موجود در بازار Envato</p>
            </div>
            <div class="head-action">
              <div class="buttons">
                <a
                  href="https://www.rtl-theme.com/author/virus3000/products/"
                  class="button v-button is-primary is-rounded is-elevated action-button"
                >
                  خرید
                </a>
                <a
                  target="_blank"
                  href="https://go.cssninja.io/discord"
                  class="button chat-button"
                >
                 گفتگو با ما
                </a>
              </div>
            </div>
          </div>

          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">
           تجربه توسعه دهنده
            </h2>
            <h4>مجموعه ای از ابزارهای حرفه ای برای ساخت اپلیکیشن های حرفه ای.</h4>
          </div>

          <!--Boxed Features-->
          <div class="boxed-features is-flat pb-6">
            <div class="flex-card light-bordered hover-inset">
              <div class="flex-cell is-bordered">
                <div class="icon-holder">
                  <i
                    class="iconify"
                    data-icon="mdi:vuejs"
                  />
                </div>
                <h3>Vue 3</h3>
                <p>
                 Vue 3 و API ترکیب قدرتمند آن تجربه شما را دلپذیر می کند.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify"
                    data-icon="bxl:typescript"
                  />
                </div>
                <h3>تایپ اسکریپت</h3>
                <p>تایپ‌اسکریپت موارد را بسیار ساده‌تر می‌کند اما استفاده از آن اختیاری باقی می‌ماند..</p>
              </div>
              <div class="flex-cell is-bordered">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="simple-icons:vite"
                  />
                </div>
                <h3>Vite JS</h3>
                <p>
               Vite 4 بسیار سریع است، بارگذاری مجدد HOT انجام می دهد و تمام کامپوننت های شما را تجزیه می کند.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="akar-icons:vscode-fill"
                  />
                </div>
                <h3>یکپارچه سازی VS Code</h3>
                <p>
                  Vuero به طور کامل با VS Code ادغام شده است تا به شما کمک کند کد با کیفیت بررسی شده تولید کنید.
                </p>
              </div>
              <div class="flex-cell is-bordered">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="file-icons:eslint"
                  />
                </div>
                <h3>ES Lint</h3>
                <p>
                 ESLint کد جاوا اسکریپت شما را تماشا می کند و مطمئن می شود که با بهترین استانداردها مطابقت دارد.
                </p>
              </div>
              <div class="flex-cell is-bordered">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="file-icons:prettier"
                  />
                </div>
                <h3>Prettier</h3>
                <p>
                Prettier  کد شما را  مرتب می کند و باعث می شود بسیار تمیزتر و خواناتر به نظر برسد.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="file-icons:stylelint"
                  />
                </div>
                <h3>Stylelint</h3>
                <p>
                Styelint به دنبال استایل های با قالب بندی ضعیف است و همه چیز را برای شما اصلاح می کند.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="simple-icons:iconify"
                  />
                </div>
                <h3>Iconify</h3>
                <p>
                  Iconify آیکون هایی را در ویرایشگر کد شما نمایش می دهد تا همیشه بدانید در حال انجام چه کاری هستید.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="simple-icons:cypress"
                  />
                </div>
                <h3>Cypress</h3>
                <p>
                  دسته‌های Cypress تست‌های سرتاسری را انجام می‌دهند تا مطمئن شوند همه چیز همانطور که انتظار می‌رود کار می‌کند.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="file-icons:pnpm"
                  />
                </div>
                <h3>Pnpm + Yarn</h3>
                <p>
                  Vuero برای مدیریت وابستگی کارآمد با Pnpm یا Yarn بسیار خوب کار می کند.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="simple-icons:docker"
                  />
                </div>
                <h3>داکر</h3>
                <p>
                  Vuero با یک فایل Docker ارسال می شود تا استقرار آزمایشی شما را سریعتر و آسان تر کند.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="mdi:robot"
                  />
                </div>
                <h3>ربات دوستانه</h3>
                <p>
                  "کاملاً ویژگی‌دار با داده‌های ساختاری. به سایت خود کمک کنید با ویژگی‌های غنی‌تر در نتایج جستجو نمایش داده شود."
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="ic:twotone-check-circle"
                  />
                </div>
                <h3> اعتبار سنجی Props</h3>
                <p>
                کامپوننت های پایه Vuero با تأیید اعتبار برای جلوگیری از خطاهای غیر منتظره ارسال می شوند.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="solar:folder-error-bold"
                  />
                </div>
                <h3>مدیریت کردن خطا</h3>
                <p>
                 در حین توسعه Vuero، ما بر ارائه یک مدیریت خطای مطابق با استانداردها تمرکز کردیم.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="solar:sidebar-minimalistic-bold"
                  />
                </div>
                <h3>ساختار پروژه</h3>
                <p>
                  یک ساختار پروژه تمیز و سازمان یافته به شما امکان می دهد هر فایل یا محتوایی را به سرعت پیدا کنید.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="ic:round-menu-book"
                  />
                </div>
                <h3>راهنمای کامپوننت</h3>
                <p>
                  یک مستندات کامل کامپوننت  / پلاگین با نمونه های کد زیادی در داخل Vuero قرار دارد  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="vuero-demos"
        class="section"
      >
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">
پیش‌نمایش های عالی
            </h2>
            <h4>طیف گسترده ای از صفحات نمایشی را بررسی کنید..</h4>
          </div>

          <!--Demos partial-->
          <LandingDemos />
        </div>
      </div>

      <!--Side Features Section-->
      <div class="section">
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">
             محصول درجه یک
            </h2>
            <h4>Vuero با دقت دست ساخته شده است.</h4>
          </div>

          <!-- Feature -->
          <div class="columns is-vcentered side-feature">
            <div class="column is-6 has-text-centered gridlines">
              <img
                class="light-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-1.webp"
                alt=""
              >
              <img
                class="dark-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-1-dark.webp"
                alt=""
              >
            </div>
            <div class="column is-5 is-offset-1">
              <h2 class="title m-b-10 is-centered-tablet-portrait">
              رابط کاربری باورنکردنی
              </h2>
              <p class="section-feature-description is-centered-tablet-portrait">
                رابط کاربری Vuero با دقت فکر و طراحی شده است و به سادگی یکی از بهترین هایی است که در بازار پیدا خواهید کرد. قدرت بصری و ماژولار بودن آن به شما امکان می دهد برنامه های عالی را به طور یکپارچه بسازید.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="columns is-vcentered side-feature">
            <div class="column is-6 has-text-centered h-hidden-desktop h-hidden-tablet-p">
              <img
                class="light-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-2.svg"
                alt=""
              >
              <img
                class="dark-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-2-dark.svg"
                alt=""
              >
            </div>
            <div class="column is-5 is-offset-1">
              <h2 class="title m-b-10 is-centered-tablet-portrait">
               وکتور های سرگرم کننده
              </h2>
              <p class="section-feature-description is-centered-tablet-portrait">
                Vuero با بسیاری از تصاویر svg ارائه می شود که نشان دهنده المنت های  مختلفی هستند که می توانند در یک وب سایت مورد استفاده قرار گیرند و استانداردهای کیفیت بسیار بالا را دنبال می کنند.
              </p>
            </div>
            <div class="column is-6 has-text-centered h-hidden-mobile">
              <img
                class="light-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-2.svg"
                alt=""
              >
              <img
                class="dark-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-2-dark.svg"
                alt=""
              >
            </div>
          </div>
          <!-- Feature -->
          <div class="columns is-vcentered side-feature">
            <div class="column is-6 has-text-centered gridlines">
              <img
                class="light-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-3.svg"
                alt=""
              >
              <img
                class="dark-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-3-dark.svg"
                alt=""
              >
            </div>
            <div class="column is-5 is-offset-1">
              <h2 class="title m-b-10 is-centered-tablet-portrait">
               "رابط کاربری دست‌ساز"
              </h2>
              <p class="section-feature-description is-centered-tablet-portrait">
                Vuero با کتابخانه کامپوننت خود بر اساس فریم‌ورک CSS Bulma.io عرضه می شود. هر کامپوننت به دقت دست ساز شده است و به طور بومی از حالت تاریک پشتیبانی می کند.
              </p>
            </div>
          </div>

          <!--CTA-->
          <div class="cta-block no-border">
            <div class="head-text">
              <h3>می‌خواهید بیشتر بیاموزید؟</h3>
              <p>اسناد Vuero را بررسی کنید</p>
            </div>
            <div class="head-action">
              <div class="buttons">
                <a
                  href="https://docs.cssninja.io/vuero"
                  class="button v-button is-primary is-rounded is-elevated action-button"
                >
                خواندن اسناد
                </a>
                <a
                  target="_blank"
                  href="https://go.cssninja.io/discord"
                  class="button chat-button is-secondary"
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
        </div>
      </div>

      <div
        id="vuero-components"
        class="section"
      >
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6 is-offset-3 has-text-centered">
              <!--Title-->
              <div class="section-title has-text-centered p-b-40">
                <h2 class="title is-3">
                 کامپوننت های  قابل استفاده مجدد
                </h2>
                <h4>Vuero با یک کتابخانه کامل کامپوننت عرضه می شود.</h4>
              </div>
            </div>
          </div>
          <div class="columns is-vcentered component-features is-flex-tablet-p">
            <div class="column is-4">
              <!-- Side icon box -->
              <div class="media-flex">
                <div class="left-icon">
                  <i
                    aria-hidden="true"
                    class="lnil lnil-construction"
                  />
                </div>
                <div class="flex-meta">
                  <h4>ماژولار</h4>
                  <p>
             Vuero از یک ساختار CSS مدولار استفاده می کند که از قدرت Sass استفاده می کند. هر خانواده کامپوننت  فایل ها و استایل های محصور شده خود را دارد.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <!-- Side icon box -->
              <div class="media-flex">
                <div class="left-icon">
                  <i
                    aria-hidden="true"
                    class="lnil lnil-code"
                  />
                </div>
                <div class="flex-meta">
                  <h4>بلاک های کد</h4>
                  <p>
                    بسیاری از نمونه های کد خارج از باکس  با برجسته سازی نحو ارائه شده است. ساختن طرح‌بندی برنامه‌تان به سادگی کپی و چسباندن است.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <!-- Side icon box -->
              <div class="media-flex">
                <div class="left-icon">
                  <i
                    aria-hidden="true"
                    class="lnil lnil-color-palette"
                  />
                </div>
                <div class="flex-meta">
                  <h4> قالب بندی آسان</h4>
                  <p>
                   کامپوننت های Vuero تنوع رنگی و اصلاح کننده های مبتنی بر کلاس را برای استفاده آسان ارائه می دهند تا به شما کمک کنند CSS کمتری بنویسید. قالب بندی نیز بسیار آسان است.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--CTA-->
          <p class="p-t-40 p-b-40 has-text-centered">
            <a
              href="https://www.rtl-theme.com/author/virus3000/products/"
              class="button v-button is-rounded is-primary is-elevated is-bold is-huge"
            >
              خرید
            </a>
          </p>

          <!--Components-->
          <div class="vuero-components p-t-40 p-b-60">
            <div class="vertical-tabs-wrapper">
              <div class="tabs">
                <ul>
                  <li :class="[activeTab === 'elements' && 'is-active']">
                    <a
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'elements'"
                      @click="activeTab = 'elements'"
                    >
                      المنت ها
                    </a>
                  </li>
                  <li :class="[activeTab === 'components' && 'is-active']">
                    <a
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'components'"
                      @click="activeTab = 'components'"
                    >
                      کامپوننت ها
                    </a>
                  </li>
                  <li :class="[activeTab === 'forms' && 'is-active']">
                    <a
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'forms'"
                      @click="activeTab = 'forms'"
                    >
                      فرم ها
                    </a>
                  </li>
                  <li :class="[activeTab === 'plugins' && 'is-active']">
                    <a
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'plugins'"
                      @click="activeTab = 'plugins'"
                    >
                      پلاگین ها
                    </a>
                  </li>
                </ul>
              </div>
              <div class="content-wrap">
                <LandingComponents :active-tab="activeTab" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered pt-40">
            <h2 class="title is-3">
             3 دلیل دیگر برای انتخاب Vuero
            </h2>
            <h4>اگر هنوز متقاعد نشده اید، برای شما موارد بیشتری داریم.</h4>
          </div>

          <div class="customers-choice p-t-40 p-b-40">
            <!-- Feature -->
            <div class="columns is-vcentered side-feature">
              <div class="column is-5 is-offset-1 has-text-centered">
                <img
                  class="light-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-4.svg"
                  alt=""
                >
                <img
                  class="dark-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-4-dark.svg"
                  alt=""
                >
              </div>
              <div class="column is-5">
                <h2 class="title m-b-10 is-centered-tablet-portrait">
                 حرفه ای
                </h2>
                <p class="section-feature-description is-centered-tablet-portrait">
                  Vuero یک محصول حرفه ای برای ساخت برنامه های حرفه ای است.
  شما هر آنچه را که برای ساختن پروژه ای که مطابق با بالاترین استانداردهای توسعه وب نیاز دارید، پیدا خواهید کرد.
                </p>
              </div>
            </div>

            <!-- Feature -->
            <div class="columns is-vcentered side-feature">
              <div
                class="column is-5 has-text-centered h-hidden-desktop h-hidden-tablet-p"
              >
                <img
                  class="light-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-5.svg"
                  alt=""
                >
                <img
                  class="dark-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-5-dark.svg"
                  alt=""
                >
              </div>
              <div class="column is-5 is-offset-1">
                <h2 class="title m-b-10 is-centered-tablet-portrait">
                  توسعه  سریع
                </h2>
                <p class="section-feature-description is-centered-tablet-portrait">
                Vuero با سرور توسعه Vitejs عرضه می شود که در زمان به شما کمک می کند
  سفارشی کردن قالب این کامپایل فایل های .vue و همچنین کدهای SCSS و Typescript را مدیریت می کند. هر بار که دکمه ذخیره را در ویرایشگر مورد علاقه خود فشار دهید، صفحه به روز می شود.
                </p>
              </div>
              <div class="column is-5 has-text-centered h-hidden-mobile">
                <img
                  class="light-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-5.svg"
                  alt=""
                >
                <img
                  class="dark-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-5-dark.svg"
                  alt=""
                >
              </div>
            </div>

            <!-- Feature -->
            <div class="columns is-vcentered side-feature">
              <div class="column is-5 is-offset-1 has-text-centered">
                <img
                  class="light-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-6.svg"
                  alt=""
                >
                <img
                  class="dark-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-6-dark.svg"
                  alt=""
                >
              </div>
              <div class="column is-5">
                <h2 class="title m-b-10 is-centered-tablet-portrait">
              مستندات گسترده
                </h2>
                <p class="section-feature-description is-centered-tablet-portrait">
               مستندات Vuero یک متحد ارزشمند خواهد بود، زیرا این الگو دارای یک پایگاه کد بزرگ و فایل های زیادی است. اسناد را به دقت بخوانید، تمام آنچه که برای یک تجربه توسعه مطلوب باید بدانید وجود دارد، حتی اگر هنوز مبتدی باشید.
                </p>
              </div>
            </div>
          </div>

          <div class="cta-wrapper">
            <div class="cta-title">
              <h3>به طور انحصاری در بازار Envato</h3>
              <a
                href="https://www.rtl-theme.com/author/virus3000/products/"
                class="custom-button"
              >
                <img
                  src="/images/icons/logos/envato.svg"
                  alt=""
                >
                <span>دریافت</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <LandingFooter />

      <!-- Back To Top Button -->
      <div id="backtotop">
        <a
          href="#"
          aria-label="back to top"
        >
          <i
            aria-hidden="true"
            class="fas fa-angle-up"
          />
        </a>
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/_demo/landing';
</style>
