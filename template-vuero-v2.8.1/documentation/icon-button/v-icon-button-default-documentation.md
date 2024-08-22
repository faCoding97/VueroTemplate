### VIconButton

کامپوننت های `<VIconButton />` به خوبی با آیکون های Font Awesome کار می کنند.

برای تنظیم آیکون Font Awesome یک نام آیکون را در قسمت `icon` اضافه کنید.
همچنین می توانید با استفاده از کامپوننت `<VIconButton />` دکمه های مربع و دایره را با یک آیکون ایجاد کنید.
لطفاً برای نمونه های دقیق به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VButtons>
    <VIconButton icon="feather:mail" />
    <VIconButton color="success" icon="feather:phone" />
    <VIconButton color="info" light icon="fab fa-twitter" />
    <VIconButton color="primary" circle icon="feather:message-circle" />
    <VIconButton color="warning" outlined circle icon="feather:triangle" />
    <VIconButton color="danger" light raised circle icon="feather:x" />
    <VIconButton color="primary" outlined loading circle icon="feather:plus" />
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VIconButton icon="feather:mail" />
  <VIconButton color="success" icon="feather:phone" />
  <VIconButton color="info" light icon="fab fa-twitter" />
  <VIconButton color="primary" circle icon="feather:message-circle" />
  <VIconButton color="warning" outlined circle icon="feather:triangle" />
  <VIconButton color="danger" light circle icon="feather:x"  />
  <VIconButton color="primary" outlined loading circle icon="feather:plus"  />
</VButtons>

<!--/example-->
