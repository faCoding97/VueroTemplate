<script setup lang="ts">
const props = defineProps<{
  rows: any[]
  squared?: boolean
  circled?: boolean
}>()
</script>

<template>
  <tr
    v-for="row in props.rows"
    :key="row.id"
  >
    <td class="is-media">
      <VAvatar
        :picture="row.picture"
        :initials="row.initials"
        size="medium"
        :color="row.color"
        :squared="props.squared"
      />
    </td>
    <td>
      <div class="double-line">
        <span class="dark-inverted">{{ row.name }}</span>
        <span>عضو از  {{ row.membership }}</span>
      </div>
    </td>
    <td>
      <div class="double-line">
        <span class="dark-inverted">{{ row.income }} تومان</span>
        <span>درآمد ماهانه</span>
      </div>
    </td>
    <td>
      <div class="avatars">
        <VAvatar
          v-for="skill in row.skills"
          :key="skill.id"
          :picture="skill.icon"
          size="small"
        />
      </div>
    </td>
    <td>
      <VRangeRating
        v-slot="{ isSelected }"
        v-model="row.rating"
        label="امتیاز"
        readonly
      >
        <VIcon
          v-if="isSelected"
          icon="ph:star-fill"
          class="is-size-5"
        />
        <VIcon
          v-else
          icon="ph:star"
          class="is-size-5"
        />
      </VRangeRating>
    </td>
    <td>
      <div class="tag-wrap">
        <VTag
          :class="[
            row.status === 'تایید شده' && 'is-green',
            row.status === 'در انتظار' && 'is-info',
            row.status === 'معلق' && 'is-orange',
          ]"
          :label="row.status"
          elevated
        />
      </div>
    </td>
    <td class="is-end">
      <div class="buttons">
        <button
          class="button is-dark-outlined"
          :class="[props.circled && 'is-circle']"
        >
          <span class="icon is-small">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:edit-2"
            />
          </span>
        </button>
        <button
          class="button is-dark-outlined"
          :class="[props.circled && 'is-circle']"
        >
          <span class="icon is-small">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:eye"
            />
          </span>
        </button>
        <button
          class="button is-dark-outlined"
          :class="[props.circled && 'is-circle']"
        >
          <span class="icon is-small">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:trash-2"
            />
          </span>
        </button>
      </div>
    </td>
  </tr>
</template>
