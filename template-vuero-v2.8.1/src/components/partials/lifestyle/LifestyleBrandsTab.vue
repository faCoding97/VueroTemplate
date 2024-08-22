<template>
  <div
    id="brands-tab"
    class="tab-content is-active"
  >
    <!--Empty Placeholder -->
    <VPlaceholderPage
      title="هیچ برندی برای نمایش وجود ندارد."
      subtitle="خیلی بد. به نظر می رسد هانا تنظیمات حریم خصوصی برند خود را فعال کرده است. شما نمی توانید برند هایی را که او با آنها کار می کند ببینید مگر اینکه مستقیماً با او تماس بگیرید."
    >
      <template #image>
        <img
          class="light-image"
          src="/@src/assets/illustrations/placeholders/having-coffee.svg"
          alt=""
        >
        <img
          class="dark-image"
          src="/@src/assets/illustrations/placeholders/having-coffee-dark.svg"
          alt=""
        >
      </template>
    </VPlaceholderPage>
  </div>
</template>
