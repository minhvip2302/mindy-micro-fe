export interface ValidationRule {
  validate: (val: any, state?: any) => boolean
  message: string
  events: string[]
}

export interface ValidationRules {
  [key: string]: ValidationRule[]
}

// Validation rules cho Register Form
export const registerValidationRules: ValidationRules = {
  firstName: [
    {
      validate: (val: string) => {
        return !!(val && val.trim().length > 0)
      },
      message: '<span class="bold">【Tên】</span>không được để trống',
      events: ['blur'],
    },
    {
      validate: (val: string) => {
        const trimmed = val.trim()
        return !trimmed.includes(' ')
      },
      message: '<span class="bold">【Tên】</span>chỉ được chứa 1 từ, không có dấu cách',
      events: ['blur', 'input'],
    },
    {
      validate: (val: string) => {
        const trimmed = val.trim()
        const lettersOnlyRegex = /^[a-zA-ZÀ-ỹĂăÂâĐđÊêÔôƠơƯư]+$/
        return !trimmed || lettersOnlyRegex.test(trimmed)
      },
      message: '<span class="bold">【Tên】</span>chỉ được chứa chữ cái, không được có số',
      events: ['blur', 'input'],
    },
    {
      validate: (val: string) => {
        const trimmed = val.trim()
        return !trimmed || trimmed.length >= 2
      },
      message: '<span class="bold">【Tên】</span>phải có ít nhất 2 ký tự',
      events: ['blur'],
    },
  ],
  lastName: [
    {
      validate: (val: string) => {
        return !!(val && val.trim().length > 0)
      },
      message: '<span class="bold">【Họ】</span>không được để trống',
      events: ['blur'],
    },
    {
      validate: (val: string) => {
        const trimmed = val.trim()
        return !trimmed.includes(' ')
      },
      message: '<span class="bold">【Họ】</span>chỉ được chứa 1 từ, không có dấu cách',
      events: ['blur', 'input'],
    },
    {
      validate: (val: string) => {
        const trimmed = val.trim()
        const lettersOnlyRegex = /^[a-zA-ZÀ-ỹĂăÂâĐđÊêÔôƠơƯư]+$/
        return !trimmed || lettersOnlyRegex.test(trimmed)
      },
      message: '<span class="bold">【Họ】</span>chỉ được chứa chữ cái, không được có số',
      events: ['blur', 'input'],
    },
    {
      validate: (val: string) => {
        const trimmed = val.trim()
        return !trimmed || trimmed.length >= 2
      },
      message: '<span class="bold">【Họ】</span>phải có ít nhất 2 ký tự',
      events: ['blur'],
    },
  ],
  email: [
    {
      validate: (val: string) => {
        return !!(val && val.trim().length > 0)
      },
      message: '<span class="bold">【Email】</span>không được để trống',
      events: ['blur'],
    },
    {
      validate: (val: string) => {
        const trimmed = val.trim()
        return !trimmed || /^.+@.+$/.test(trimmed)
      },
      message: '<span class="bold">【Email】</span>không hợp lệ',
      events: ['blur'],
    }
  ],
  password: [
    {
      validate: (val: string) => {
        return !!(val && val.trim().length > 0)
      },
      message: '<span class="bold">【Mật khẩu】</span>không được để trống',
      events: ['blur'],
    },
    {
      validate: (val: string) => {
        return !val || val.length >= 8
      },
      message: '<span class="bold">【Mật khẩu】</span>phải có ít nhất 8 ký tự',
      events: ['blur', 'input'],
    },
  ],
  confirmPassword: [
    {
      validate: (val: string, state: { password?: string }) => {
        return !!(val && val.trim().length > 0)
      },
      message: '<span class="bold">【Xác nhận mật khẩu】</span>không được để trống',
      events: ['blur'],
    },
    {
      validate: (val: string, state: { password?: string }) => {
        return !val || !state?.password || val === state.password
      },
      message: '<span class="bold">【Xác nhận mật khẩu】</span>không khớp với mật khẩu',
      events: ['blur', 'input'],
    },
  ],
}

// Composable để sử dụng validation
export function useValidation(rules: ValidationRules) {
  const getError = (fieldName: string, value: any, state: any, event: string = 'blur'): string => {
    const fieldRules = rules[fieldName]
    if (!fieldRules) return ''

    for (const rule of fieldRules) {
      if (!rule.events.includes(event)) continue
      
      const isValid = rule.validate(value, state)
      if (!isValid) {
        return rule.message
      }
    }

    return ''
  }

  const validateField = (fieldName: string, value: any, state: any, event: string = 'blur'): boolean => {
    return getError(fieldName, value, state, event) === ''
  }

  const validateAll = (data: Record<string, any>, state: any = {}): boolean => {
    for (const fieldName in rules) {
      const error = getError(fieldName, data[fieldName], state, 'blur')
      if (error) return false
    }
    return true
  }

  return {
    getError,
    validateField,
    validateAll,
  }
}

