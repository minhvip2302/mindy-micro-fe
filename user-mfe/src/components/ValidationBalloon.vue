<template>
  <div class="validation-balloon" ref="containerRef">
    <transition :name="`toggle-balloon${transitionNameSuffix}`">
      <div 
        v-if="invalid" 
        class="balloon-wrapper"
        :class="`balloon-${position}`"
        :style="{ width: width }"
      >
        <div class="balloon">
          <p v-html="message"></p>
        </div>
        <div class="balloon-tail" :class="`tail-${position}`"></div>
      </div>
    </transition>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, watch, provide, ref, nextTick } from 'vue'

export interface ValidationRule {
  validate: (val: any, state?: any) => boolean
  message: string
  events: string[]
}

const props = withDefaults(defineProps<{
  validations?: ValidationRule[]
  targetData: any
  state?: any
  triggerEvent?: string
  locations?: string[]
  position?: 'top' | 'left'
  width?: string
}>(), {
  position: 'top',
  width: '200px'
})

const containerRef = ref<HTMLElement | null>(null)

const invalid = computed(() => {
  return errorMessage.value !== ''
})


const message = computed(() => {
  return errorMessage.value
})

const errorMessage = computed(() => {
  if (!props.validations || props.validations.length === 0) {
    return ''
  }

  // Nếu không có triggerEvent, không hiển thị lỗi
  if (!props.triggerEvent) {
    return ''
  }

  // Tìm rule đầu tiên không pass
  for (const rule of props.validations) {
    // Kiểm tra xem rule này có trigger với event hiện tại không
    if (!rule.events.includes(props.triggerEvent)) {
      continue
    }

    const isValid = rule.validate(props.targetData, props.state)
    if (!isValid) {
      return rule.message
    }
  }

  return ''
})

// Transition name suffix để tránh conflict
const transitionNameSuffix = computed(() => {
  return props.locations ? `-${props.locations.join('-')}` : ''
})

// Provide error state để slot có thể access
provide('validationError', invalid)
provide('validationMessage', message)

// Tự động thêm class 'error' vào input trong slot và cập nhật width
watch(invalid, async (hasError) => {
  await nextTick()
  if (containerRef.value) {
    const inputEl = containerRef.value.querySelector('input') as HTMLInputElement | null
    if (inputEl) {
      if (hasError) {
        inputEl.classList.add('error')
      } else {
        inputEl.classList.remove('error')
      }
      // Cập nhật width khi có thay đổi
      // updateInputWidth()
    }
  }
}, { immediate: false })
</script>

<style scoped>
.validation-balloon {
  position: relative;
  width: 100%;
}

.balloon-wrapper {
  position: absolute;
  z-index: 10;
}

/* Position: Top */
.balloon-top {
  bottom: 100%;
  left: 0;
  margin-bottom: 0.5rem;
}

/* Position: Left */
.balloon-left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 0.5rem;
}

.balloon {
  background: rgb(239, 68, 68);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.balloon p {
  margin: 0;
}

.balloon :deep(.bold) {
  font-weight: 700;
}

.balloon-tail {
  position: absolute;
  width: 0;
  height: 0;
}

/* Tail for top position */
.tail-top {
  top: 100%;
  left: 1rem;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgb(239, 68, 68);
}

/* Tail for left position */
.tail-left {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid rgb(239, 68, 68);
}

/* Transition */
.toggle-balloon-enter-active,
.toggle-balloon-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.toggle-balloon-enter-from {
  opacity: 0;
}

.toggle-balloon-leave-to {
  opacity: 0;
}

/* Transition for top position */
.balloon-top.toggle-balloon-enter-from,
.balloon-top.toggle-balloon-leave-to {
  transform: translateY(4px);
}

/* Transition for left position */
.balloon-left.toggle-balloon-enter-from,
.balloon-left.toggle-balloon-leave-to {
  transform: translateY(-50%) translateX(-4px);
}
</style>

