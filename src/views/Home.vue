<template>
  <div class="home">
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <div class="logo">Alilah Store</div>
        <nav>
          <a href="#products" class="nav-link">Produk</a>
          <router-link to="/testimoni" class="nav-link">Testimoni</router-link>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Alilah Store</h1>
        <p>Produk Kesehatan Premium dari Jepang untuk kualitas hidup lebih baik</p>
        <a href="#products" class="hero-btn">Lihat Produk</a>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products">
      <div class="container">
        <h2 class="section-title">Produk Kami</h2>
        <p class="section-subtitle">Pilihan terbaik untuk kesehatan tubuh anda</p>

        <div class="products-grid">
          <div v-for="product in products" :key="product.id" class="product-card">
            <img 
              :src="product.images[0]" 
              :alt="product.name" 
              class="product-image"
            />
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-tagline">{{ product.tagline }}</p>
              <p class="product-description">{{ product.shortDescription }}</p>
              <p class="product-price">{{ product.price }}</p>
              <div class="product-buttons">
                <router-link 
                  :to="`/product/${product.slug}`" 
                  class="btn btn-outline"
                >
                  Detail Produk
                </router-link>
                <a 
                  :href="getWhatsAppLink(product)" 
                  target="_blank" 
                  class="btn btn-whatsapp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">Apa Kata Mereka</h2>
        <p class="section-subtitle">Testimoni dari pelanggan setia kami</p>
        
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
            <div class="testimonial-stars">
              <span v-for="n in 5" :key="n">★</span>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <p class="testimonial-name">{{ testimonial.name }}</p>
          </div>
        </div>
      </div>
    </section>

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
            <p>WhatsApp: +62 812-4317-9596</p>
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
import { products, testimonials } from '../data/products'

const getWhatsAppLink = (product) => {
  const message = `Halo Alilah Store, saya ingin memesan produk ${product.name} dengan harga ${product.price}. Mohon info lebih lanjut.`
  return `https://wa.me/6281243179596?text=${encodeURIComponent(message)}`
}
</script>
