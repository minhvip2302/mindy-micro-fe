<template>
  <div class="terms-privacy">
    <p class="terms-text">
      Bằng việc tiếp tục, bạn đồng ý với
      <a href="#" class="terms-link" @click.prevent="handleTermsClick">Điều khoản dịch vụ</a>
      và
      <a href="#" class="terms-link" @click.prevent="handlePrivacyClick">Chính sách bảo mật</a>
      của chúng tôi.
    </p>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  termsClick: []
  privacyClick: []
}>()

const handleTermsClick = () => {
  emit('termsClick')
}

const handlePrivacyClick = () => {
  emit('privacyClick')
}
</script>

<style scoped>
.terms-privacy {
  margin-top: auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
  text-align: center;
}

.terms-text {
  font-size: 0.75rem;
  color: rgb(100, 116, 139);
  line-height: 1.75;
  margin: 0;
}

.dark .terms-text {
  color: rgb(144, 164, 203);
}

.terms-link {
  color: rgb(37, 106, 244);
  text-decoration: none;
  transition: color 0.2s;
}

.terms-link:hover {
  color: rgb(59, 130, 246);
  text-decoration: underline;
}
</style>

