<template>
    <section class="hero">
        <div class="hero-background">
            <!-- <div class="hero-particles"></div> -->
            <!-- <div class="hero-gradient"></div> -->
        </div>

        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">
                    <span class="title-line">Chào mừng đến với</span>
                    <span class="title-highlight">SocialApp</span>
                </h1>
                <p class="hero-subtitle">
                    Kết nối với bạn bè, chia sẻ khoảnh khắc và khám phá thế giới
                </p>
                <div class="hero-actions">
                    <button v-if="!isLoggedIn" @click="$emit('goToLogin')" class="btn-primary">
                        <span class="btn-text">Đăng nhập ngay</span>
                        <span class="btn-icon">→</span>
                    </button>
                    <button v-else @click="$emit('goToProfile')" class="btn-secondary">
                        <span class="btn-text">Xem hồ sơ</span>
                        <span class="btn-icon">👤</span>
                    </button>
                </div>
            </div>

            <div class="hero-visual">
                <div class="floating-cards">
                    <div class="card card-1">
                        <div class="card-content">
                            <div class="card-icon">💬</div>
                            <div class="card-text">Tin nhắn</div>
                        </div>
                    </div>
                    <div class="card card-2">
                        <div class="card-content">
                            <div class="card-icon">📸</div>
                            <div class="card-text">Chia sẻ</div>
                        </div>
                    </div>
                    <div class="card card-3">
                        <div class="card-content">
                            <div class="card-icon">👥</div>
                            <div class="card-text">Kết nối</div>
                        </div>
                    </div>
                    <!-- 3 cards mới -->
                    <div class="card card-4">
                        <div class="card-content">
                            <div class="card-icon">🔔</div>
                            <div class="card-text">Thông báo</div>
                        </div>
                    </div>
                    <div class="card card-5">
                        <div class="card-content">
                            <div class="card-icon">🎨</div>
                            <div class="card-text">Sáng tạo</div>
                        </div>
                    </div>
                    <div class="card card-6">
                        <div class="card-content">
                            <div class="card-icon">🌟</div>
                            <div class="card-text">Khám phá</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    isLoggedIn?: boolean
}>()

defineEmits<{
    showLogin: []
    goToProfile: []
    goToLogin: []
}>()
</script>

<style scoped>
.hero {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.hero-particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
}

/* .hero-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,
            rgba(102, 126, 234, 0.8) 0%,
            rgba(118, 75, 162, 0.8) 50%,
            rgba(102, 126, 234, 0.6) 100%);
} */

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.hero-text {
    color: white;
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
}

.title-line {
    opacity: 0.9;
    animation: slideInLeft 1s ease-out;
}

.title-highlight {
    background: linear-gradient(45deg, #ffd700, #ffed4e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: slideInRight 1s ease-out 0.3s both;
}

.hero-subtitle {
    font-size: 1.5rem;
    opacity: 0.9;
    margin-bottom: 3rem;
    line-height: 1.6;
    animation: fadeInUp 1s ease-out 0.6s both;
}

.hero-actions {
    display: flex;
    gap: 1.5rem;
    animation: fadeInUp 1s ease-out 0.9s both;
    margin-bottom: 2rem;
}

.btn-primary,
.btn-secondary {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 2rem 4rem;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
    color: white;
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
}

.btn-icon {
    font-size: 1.2rem;
    transition: transform 0.3s;
}

.btn-primary:hover .btn-icon {
    transform: translateX(3px);
}

.hero-visual {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.floating-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    /* animation: float 6s ease-in-out infinite; */
}

.card-1 {
    animation-delay: 0s;
}

/* Card 1: bắt đầu ngay */
.card-2 {
    animation-delay: 2s;
}

/* Card 2: chậm 2s */
.card-3 {
    animation-delay: 4s;
}

/* Card 3: chậm 4s */

.card-content {
    text-align: center;
    color: white;
}

.card-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.card-text {
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.9;
}

/* Animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
    }

    .hero-title {
        font-size: 3rem;
    }

    .hero-visual {
        height: 300px;
    }

    .floating-cards {
        width: 250px;
        height: 250px;
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.25rem;
    }

    .hero-actions {
        flex-direction: column;
        align-items: center;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
        max-width: 300px;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 2rem 0;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1.1rem;
    }
}
</style>
