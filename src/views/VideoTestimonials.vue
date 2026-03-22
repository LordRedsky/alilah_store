<template>
  <div class="video-testimonials">
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <div class="logo">Alilah Store</div>
        <nav>
          <a href="/" class="nav-link">Beranda</a>
        </nav>
      </div>
    </header>

    <div class="testimonials-container">
      <!-- Back Button -->
      <router-link to="/" class="back-btn">
        ← Kembali ke Beranda
      </router-link>

      <!-- Page Title -->
      <div class="page-header">
        <h1 class="page-title">Video Testimoni</h1>
        <p class="page-subtitle">Lihat apa kata mereka tentang produk Alilah Store</p>
      </div>

      <!-- Video Grid -->
      <div class="video-grid">
        <div 
          v-for="(video, index) in videos" 
          :key="index" 
          class="video-card"
          @click="selectedVideo = video"
        >
          <div class="video-thumbnail">
            <video :src="video.src" :poster="video.poster"></video>
            <div class="play-button">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="rgba(212, 165, 165, 0.9)"/>
                <path d="M24 18L42 30L24 42V18Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div class="video-info">
            <h3 class="video-title">{{ video.title }}</h3>
            <p class="video-name">{{ video.customer }}</p>
          </div>
        </div>
      </div>

      <!-- Video Modal -->
      <div v-if="selectedVideo" class="video-modal" @click="selectedVideo = null">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="selectedVideo = null">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <div class="modal-body">
            <video 
              ref="videoPlayer"
              :src="selectedVideo.src" 
              controls 
              autoplay
              class="modal-video"
            ></video>
            <div class="modal-info">
              <h2>{{ selectedVideo.title }}</h2>
              <p>{{ selectedVideo.customer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Alilah Store</h3>
            <p>Produk Kesehatan Premium dari Jepang untuk kualitas hidup lebih baik</p>
          </div>
          <div class="footer-section">
            <h3>Kontak</h3>
            <p>WhatsApp: +62 822-9350-9164</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Alilah Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const selectedVideo = ref(null)
const videoPlayer = ref(null)

watch(selectedVideo, (newVal) => {
  if (!newVal && videoPlayer.value) {
    videoPlayer.value.pause()
  }
})

const videos = [
  {
    src: '/video testimoni/1.mp4',
    title: 'Testimoni Produk Hikari',
    customer: 'Aulia R.'
  },
  {
    src: '/video testimoni/2.mp4',
    title: 'Testimoni Produk Subashi',
    customer: 'Siti M.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.48.mp4',
    title: 'Hasil Penggunaan Hikari',
    customer: 'Dina K.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.49.mp4',
    title: 'Review Produk Utsukushi',
    customer: 'Rina S.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.49a.mp4',
    title: 'Testimoni Kecantikan',
    customer: 'Fitri A.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.50.mp4',
    title: 'Pengalaman Pakai Subashi',
    customer: 'Nurul H.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.50b.mp4',
    title: 'Before After Hikari',
    customer: 'Maya P.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.50ba.mp4',
    title: 'Testimoni Puas',
    customer: 'Lestari W.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.51.mp4',
    title: 'Review Jujur Produk',
    customer: 'Andini R.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.51a.mp4',
    title: 'Hasil Memuaskan',
    customer: 'Putri D.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.51v.mp4',
    title: 'Testimoni Pelanggan',
    customer: 'Sari N.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.52.mp4',
    title: 'Pengalaman Berkesan',
    customer: 'Widya K.'
  },
  {
    src: '/video testimoni/WhatsApp Video 2026-02-19 at 17.08.52w.mp4',
    title: 'Rekomendasi Produk',
    customer: 'Eka S.'
  }
]
</script>

<style scoped>
.video-testimonials {
  min-height: 100vh;
  background: var(--secondary-color);
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 40px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 30px;
  transition: var(--transition);
}

.back-btn:hover {
  color: var(--primary-dark);
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
}

.page-title {
  font-size: 2.5rem;
  color: var(--primary-dark);
  margin-bottom: 10px;
}

.page-subtitle {
  color: var(--text-light);
  font-size: 1.1rem;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 40px;
}

.video-card {
  background: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: var(--transition);
}

.video-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.video-thumbnail {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #000;
}

.video-thumbnail video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: var(--transition);
}

.video-card:hover .play-button {
  transform: translate(-50%, -50%) scale(1.1);
}

.video-info {
  padding: 20px;
}

.video-title {
  font-size: 1.1rem;
  color: var(--primary-dark);
  margin-bottom: 8px;
  font-weight: 600;
}

.video-name {
  color: var(--text-light);
  font-size: 0.9rem;
}

/* Video Modal */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  position: relative;
  max-width: 900px;
  width: 90%;
  background: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  animation: slideUp 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: var(--white);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 10;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: rotate(90deg);
}

.modal-body {
  display: flex;
  flex-direction: column;
}

.modal-video {
  width: 100%;
  max-height: 70vh;
  background: #000;
}

.modal-info {
  padding: 25px;
  text-align: center;
}

.modal-info h2 {
  color: var(--primary-dark);
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.modal-info p {
  color: var(--text-light);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .video-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .video-thumbnail {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonials-container {
    padding-top: 100px;
  }
}
</style>
