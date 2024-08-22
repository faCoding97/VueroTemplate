### فایل Boxed

اینپوت های فایل Vuero می‌توانند یک استایل Boxed داشته باشند.
برای اعمال این سبک، فقط باید کلاس `is-boxed` را به المنت اینپوت فایل خود اضافه کنید. لطفاً برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VField grouped>
    <VControl>
      <div class="file is-boxed">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-cloud-upload-alt"></i>
            </span>
            <span class="file-label"> انتخاب فایل… </span>
          </span>
        </label>
      </div>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField grouped>
    <VControl>
        <div class="file is-boxed">
            <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                        انتخاب فایل… 
                    </span>
                </span>
            </label>
        </div>
    </VControl>
    <VControl>
        <div class="file is-default is-boxed">
            <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                        انتخاب فایل… 
                    </span>
                </span>
            </label>
        </div>
    </VControl>
    <VControl>
        <div class="file is-primary is-boxed">
            <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                        انتخاب فایل… 
                    </span>
                </span>
            </label>
        </div>
    </VControl>
</VField>

<!--/example-->
