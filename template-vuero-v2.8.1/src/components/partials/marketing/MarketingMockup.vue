<template>
  <div class="section">
    <div class="container">
      <!--Title-->
      <div class="section-title has-text-centered">
        <h2 class="title is-2">
          UI/UX بی نقص
        </h2>
        <h4>Vuero با دقت دست ساخته شده است.</h4>
      </div>

      <div class="centered-mockup-wrapper">
        <div class="mockup-container mb-6">
          <!--Hexagon shapes-->
          <img
            class="hexagon hexagon-1 light-image-l"
            src="/images/icons/hexagons/green.svg"
            alt=""
          >
          <img
            class="hexagon hexagon-1 dark-image-l"
            src="/images/icons/hexagons/green-heavy.svg"
            alt=""
          >
          <img
            class="hexagon hexagon-2 light-image-l"
            src="/images/icons/hexagons/orange.svg"
            alt=""
          >
          <img
            class="hexagon hexagon-2 dark-image-l"
            src="/images/icons/hexagons/orange-heavy.svg"
            alt=""
          >
          <img
            class="hexagon hexagon-3 light-image-l"
            src="/images/icons/hexagons/accent.svg"
            alt=""
          >
          <img
            class="hexagon hexagon-3 dark-image-l"
            src="/images/icons/hexagons/accent-heavy.svg"
            alt=""
          >

          <!--Mockup-->
          <img
            class="light-image-l centered-mockup"
            src="/@src/assets/illustrations/landing/app-1.webp"
            alt=""
          >
          <img
            class="dark-image-l centered-mockup"
            src="/@src/assets/illustrations/landing/app-1-dark.webp"
            alt=""
          >
        </div>
        <div class="columns">
          <div class="column is-4">
            <h3 class="title is-4">
              بولما(Bulma) 0.9.1
            </h3>
            <p class="subtitle is-6 light-text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
          <div class="column is-4">
            <h3 class="title is-4">
            کدنویسی تمیز
            </h3>
            <p class="subtitle is-6 light-text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
          <div class="column is-4">
            <h3 class="title is-4">
             مدرن UI
            </h3>
            <p class="subtitle is-6 light-text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
        </div>
      </div>

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
                    'چارچوب جاوا اسکریپت پیشرو برای ساخت رابط کاربری.',
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
                  subtitle: 'چارچوب مدرن CSS',
                  logo: '/images/icons/stacks/bulma.svg',
                  description:
                    'Bulma یک چارچوب رایگان و متن باز است که ک کامپوننت های ظاهری آماده برای استفاده را فراهم می کند.',
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
    </div>
  </div>
</template>
