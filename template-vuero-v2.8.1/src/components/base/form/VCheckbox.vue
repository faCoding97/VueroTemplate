<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export type VCheckboxColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

export interface VCheckboxProps {
  id?: string
  raw?: boolean
  label?: string
  color?: VCheckboxColor
  trueValue?: any
  falseValue?: any
  value?: any
  circle?: boolean
  solid?: boolean
  paddingless?: boolean
  wrapperClass?: string
}

const modelValue = defineModel<any>({
  default: false,
  local: true,
})
const props = withDefaults(defineProps<VCheckboxProps>(), {
  id: undefined,
  label: undefined,
  color: undefined,
  trueValue: true,
  falseValue: false,
  value: undefined,
  circle: false,
  solid: false,
  paddingless: false,
  wrapperClass: undefined,
})

const context = useVFieldContext()

const internal = computed({
  get() {
    if (context.field?.value) {
      return context.field.value.value
    } else {
      return modelValue.value
    }
  },
  set(value: any) {
    if (context.field?.value) {
      context.field.value.setValue(value)
    }
    modelValue.value = value
  },
})

const classes = computed(() => {
  if (props.raw) return [props.wrapperClass]

  return [
    'checkbox',
    props.wrapperClass,
    props.solid ? 'is-solid' : 'is-outlined',
    props.circle && 'is-circle',
    props.color && `is-${props.color}`,
    props.paddingless && 'is-paddingless',
  ]
})
</script>

<template>
  <VLabel :id="props.id || context.id.value" raw :class="classes">
    <input :id="props.id || context.id.value" v-model="internal" v-bind="$attrs" :true-value="props.trueValue"
      :false-value="props.falseValue" :value="props.value" type="checkbox">
    <span />
    <slot v-bind="context">
      {{ props.label }}
    </slot>
  </VLabel>
</template>

<style lang="scss">
%controller {
  position: relative;
  font-family: var(--font);
  cursor: pointer;
  padding: 1em;

  &::selection {
    background: transparent;
  }

  input + span {
    position: relative;
    top: -1px;
    background: var(--white);
    content: '';
    display: inline-block;
    margin-inline-end: 0.5rem;
    padding: 0;
    vertical-align: middle;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid var(--fade-grey-dark-8);
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;

    &::after {
      content: '';
      display: block;
      transform: scale(0);
      transition: transform 0.2s;
    }
  }

  @media screen and (width >= 768px) {
    &:hover input + span {
      box-shadow: 0 2px 4px rgba(#000, 0.15);
    }
  }

  input:active + span {
    box-shadow: 0 4px 8px rgba(#000, 0.15);
  }

  input:checked + span::after {
    transform: translate(calc(var(--transform-direction) * -50%), -50%) scale(1) rotate(45deg) !important;
  }

  input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s; // transition-all test
  }
}

.checkbox {
  @extend %controller;

  color: var(--light-text);

  &:hover,
  &:focus {
    color: var(--light-text);
  }

  &.is-paddingless {
    padding: 0 !important;
  }

  &.is-circle {
    input + span {
      border-radius: var(--radius-rounded);
    }
  }

  &.is-solid {
    input + span {
      background: var(--fade-grey-light-3);
    }

    &.is-primary {
      input + span {
        border-color: var(--primary);
        background: var(--primary);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-success {
      input + span {
        border-color: var(--success);
        background: var(--success);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-info {
      input + span {
        border-color: var(--info);
        background: var(--info);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-warning {
      input + span {
        border-color: var(--warning);
        background: var(--warning);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-danger {
      input + span {
        border-color: var(--danger);
        background: var(--danger);

        &::after {
          color: var(--white);
        }
      }
    }
  }

  &.is-outlined {
    &.is-primary {
      input:checked + span {
        border-color: var(--primary);
      }

      input + span {
        &::after {
          color: var(--primary);
        }
      }
    }

    &.is-success {
      input:checked + span {
        border-color: var(--success);
      }

      input + span {
        &::after {
          color: var(--success);
        }
      }
    }

    &.is-info {
      input:checked + span {
        border-color: var(--info);
      }

      input + span {
        &::after {
          color: var(--info);
        }
      }
    }

    &.is-warning {
      input:checked + span {
        border-color: var(--warning);
      }

      input + span {
        &::after {
          color: var(--warning);
        }
      }
    }

    &.is-danger {
      input:checked + span {
        border-color: var(--danger);
      }

      input + span {
        &::after {
          color: var(--danger);
        }
      }
    }
  }

  input + span {
    border-radius: var(--radius-small);
    transition: all 0.3s; // transition-all test

    &::after {
      // background-size: contain;
      // position: absolute;
      // top: 48%;
      // inset-inline-start: 50%;
      // transform: translate(-50%, -50%) scale(0);
      // content: '\f00c';
      // font-family: 'Font Awesome\ 5 Free';
      // font-weight: 900;
      // font-size: 0.7rem;
      // background-size: contain;
      // position: absolute;
      // top: 48%;
      // inset-inline-start: 50%;
      // transform: translate(-50%, -50%) scale(0);
      // content: '\eb9d';
      // font: normal normal normal 1em/1 'LineIconsPro Light';
      // font-weight: 900;
      // font-size: 0.7rem;
      // background-image: url(data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy4wMzAzIDguNzgwMzlMOC45OTk5MyAxNi44MTA3TDUuNDY5NiAxMy4yODA0TDYuNTMwMjYgMTIuMjE5N0w4Ljk5OTkzIDE0LjY4OTRMMTUuOTY5NiA3LjcxOTczTDE3LjAzMDMgOC43ODAzOVoiIGZpbGw9IiMyYWFjOGUiLz4gPC9nPgoNPC9zdmc+);
      // background-size: contain;
      //  position: absolute;
      // top: 48%;
      // inset-inline-start: 50%;
      // transform: translate(-50%, -50%) scale(0);
      // width: 20px;
      // height: 20px;
      // 
      width: 6px;
      height: 13px;
      border: 1px solid;
      border-top-width: 0;
      border-left-width: 0;
      top: 35%;
      inset-inline-start: 50%;
      transform: translate(-50%, -50%) scale(0);
      position: absolute;
    }
  }

  input:focus + span,
  input:active + span {
    outline-offset: var(--accessibility-focus-outline-offset);
    outline-width: var(--accessibility-focus-outline-width);
    outline-color: var(--accessibility-focus-outline-color);
    outline-style: var(--accessibility-focus-outline-style);
  }
}

.is-dark {
  %controller {
    input + span {
      background-color: var(--dark-sidebar-light-2);
      border-color: var(--dark-sidebar-light-4);

      &::after {
        color: var(--dark-dark-text);
      }
    }

    input + span {
      border-color: var(--dark-sidebar-light-16);
    }
  }

  .checkbox {
    &.is-solid.is-primary {
      input + span {
        background-color: var(--primary) !important;
        border-color: var(--primary) !important;
      }
    }

    &.is-outlined.is-primary {
      input:checked + span {
        border-color: var(--primary) !important;

        &::after {
          color: var(--primary) !important;
        }
      }
    }
  }
}
</style>
