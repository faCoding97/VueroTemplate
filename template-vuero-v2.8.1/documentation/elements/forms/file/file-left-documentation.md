### فایل سمت چپ

اینپوت های فایل می توانند یک ناحیه اضافی را برای نمایش نام فایل انتخابی نشان دهند.
برای اعمال این سبک فقط باید کلاس `has-name` را به المنت اینپوت فایل خود اضافه کنید.لطفاً برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VField grouped>
    <VControl>
      <div class="file has-name">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-cloud-upload-alt"></i>
            </span>
            <span class="file-label"> انتخاب فایل… </span>
          </span>
          <span class="file-name light-text"> 22082020_project_budget.xls </span>
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
        <div class="file has-name">
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
                <span class="file-name light-text">
                    22082020_project_budget.xls
                </span>
            </label>
        </div>
    </VControl>
</VField>

<!--/example-->
