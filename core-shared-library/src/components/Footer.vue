<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Company Info -->
        <div class="footer-section">
          <h3>SocialApp</h3>
          <p>Kết nối mọi người trên toàn thế giới</p>
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Instagram</a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms of Service</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        
        <!-- Support -->
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Report Bug</a></li>
            <li><a href="#">Feature Request</a></li>
          </ul>
        </div>
        
        <!-- Newsletter -->
        <div class="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates</p>
          <div class="newsletter">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="newsletter-input"
              v-model="email"
            />
            <button @click="subscribe" class="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 SocialApp. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const subscribe = () => {
  if (email.value) {
    alert(`Thank you for subscribing with email: ${email.value}`)
    email.value = ''
  }
}
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: white;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: #4CAF50;
  margin-bottom: 1rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  color: #ccc;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #4CAF50;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  color: #4CAF50;
  text-decoration: none;
  padding: 0.5rem;
  border: 1px solid #4CAF50;
  border-radius: 4px;
  transition: all 0.3s;
}

.social-link:hover {
  background: #4CAF50;
  color: white;
}

.newsletter {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: white;
}

.newsletter-input::placeholder {
  color: #999;
}

.newsletter-btn {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter-btn:hover {
  background: #45a049;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #999;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-links a {
  color: #999;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #4CAF50;
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .newsletter {
    flex-direction: column;
  }
}
</style>
