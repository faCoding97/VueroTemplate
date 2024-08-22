### اینپوت فایل

Vuero سبک‌های پیش‌فرض را برای اینپوت های فایل ارائه می‌کند، در صورتی که به کنترلی برای آپلود یک فایل در فرم‌های خود نیاز دارید.
اینپوت های فایل می تواند شبیه دکمه های آپلود باشد.
لطفاً برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VField grouped>
    <VControl>
      <div class="file">
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
        <div class="file">
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
        <div class="file is-default">
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
        <div class="file is-primary">
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
        <div class="file is-info">
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
