<script setup lang="ts">
import { avatarList, avatarListCreative } from '/@src/data/widgets/ui/avatarList'
import {
  socialButtonList1,
  socialButtonList2,
} from '/@src/data/widgets/ui/socialButtonList'
import { followersStats } from '/@src/data/widgets/ui/followers'
import { products } from '/@src/data/widgets/ui/productList'

import Widget1 from '/@src/assets/illustrations/widgets/1.svg'
import Widget2 from '/@src/assets/illustrations/widgets/2.svg'
import Widget3 from '/@src/assets/illustrations/widgets/3.svg'
import Widget4 from '/@src/assets/illustrations/widgets/4.svg'
import Widget5 from '/@src/assets/illustrations/widgets/5.svg'
import Widget7 from '/@src/assets/illustrations/widgets/7.svg'
import Widget8 from '/@src/assets/illustrations/widgets/8.svg'
</script>

<template>
  <div class="columns is-multiline widget-demo-columns">
    <div class="column is-3">
      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v1"
        title="شما 2 دستاورد جدید را باز کردید"
        text="تبریک می گوییم، زحمات شما پاداش داده شده است. همینطور ادامه بده!"
        :picture="Widget1"
        :badge-left="Widget2"
        :badge-right="Widget3"
      />

      <!--Widget-->
      <ContactWidget
        picture="/images/avatars/svg/vuero-1.svg"
        username="Ali z."
        email="erikkovalsky@vuero.io"
        company="کمپانی زد دیزاین"
        position="مدیر پروژه"
        location="ایران، تهران"
        phone="+98 21 4425698"
      />

      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v2"
        title="شما 2 دستاورد جدید را باز کردید"
        text="تبریک می گوییم، زحمات شما پاداش داده شده است. همینطور ادامه بده!"
        :picture="Widget7"
      />

      <!--Widget-->
      <AvatarListWidget
        :avatars="avatarList"
        squared
      />
    </div>

    <div class="column is-3">
      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v2"
        title="شما 2 دستاورد جدید را باز کردید"
        text="تبریک می گوییم، زحمات شما پاداش داده شده است. همینطور ادامه بده!"
        :picture="Widget4"
      />

      <!--Widget-->
      <SocialButtonsWidget :buttons="socialButtonList1" />

      <!--Widget-->
      <AvatarListWidget :avatars="avatarList" />

      <!--Widget-->
      <UIWidget class="followers-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="فالوور ها" />
        </template>
        <template #body>
          <UIWidgetFollowerStats :channels="followersStats" />
        </template>
      </UIWidget>

      <!--Widget-->
      <CartWidget :products="products" />
    </div>

    <div class="column is-3">
      <!--Widget-->
      <UIWidget class="text-widget">
        <template #header>
          <UIWidgetToolbarIcon
            title="@cssninjaStudio"
            icon="feather:twitter"
          />
        </template>
        <template #body>
          <div class="widget-content">
            <p>
             Vuero به زودی منتشر خواهد شد، احتمالا در اواخر سال تعطیلات کریسمس.
            </p>
            <p class="hashtags">
              <a>#uikit</a>
              <a>#dashboards</a>
              <a>#bulma</a>
            </p>
          </div>
        </template>
      </UIWidget>

      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v3"
        title="شما 2 دستاورد جدید را باز کردید"
        text="تبریک می گوییم، زحمات شما پاداش داده شده است. همینطور ادامه بده!"
        :picture="Widget5"
      />

      <!--Widget-->
      <ContactWidget
        picture="/images/avatars/svg/vuero-1.svg"
        username="Ali z."
        email="erikkovalsky@vuero.io"
        company="کمپانی زد دیزاین"
        position="مدیر پروژه"
        location="ایران، تهران"
        phone="+98 21 4425698"
        squared
        reversed
      />

      <!--Widget-->
      <SocialButtonsWidget
        :buttons="socialButtonList2"
        rounded
      />

      <!--Widget-->
      <UIWidget class="creative-list-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="طراحان" />
        </template>
        <template #body>
          <UIWidgetCreativeList
            :list="avatarListCreative"
            squared
          />
        </template>
      </UIWidget>
    </div>

    <div class="column is-3">
      <!--Widget-->
      <UIWidget class="creative-list-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="طراحان" />
        </template>
        <template #body>
          <UIWidgetCreativeList :list="avatarListCreative" />
        </template>
      </UIWidget>

      <!--Widget-->
      <CallWidget
        picture="/@src/assets/illustrations/widgets/6.svg"
        badge="/demo/avatars/7.jpg"
        username="آلیا"
      />

      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v2"
        title="شما 2 دستاورد جدید را باز کردید"
        text="تبریک می گوییم، زحمات شما پاداش داده شده است. همینطور ادامه بده!"
        :picture="Widget8"
      />
    </div>
  </div>
</template>
