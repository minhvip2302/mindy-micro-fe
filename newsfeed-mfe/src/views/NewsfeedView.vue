<template>
  <AuthenticatedLayout>
    <template #header>
      <FeedHeader :user-avatar="userAvatar" />
    </template>
    
    <div class="newsfeed-container">
      <FeedSidebar />
      
      <div class="feed-content">
        <StoriesSection :user-avatar="userAvatar" :stories="stories" />
        
        <PostComposer :user-avatar="userAvatar" @post="handlePost" />
        
        <div class="posts-list">
          <PostCard v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
      
      <aside class="right-sidebar">
        <TrendsWidget :trends="trends" />
        <SuggestionsWidget :suggestions="suggestions" />
        <div class="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Advertising</a>
          <a href="#">Cookies</a>
          <a href="#">More</a>
          <span>© 2023 SocialApp</span>
        </div>
      </aside>
    </div>
    
    <template #footer>
      <MobileBottomNav :user-avatar="userAvatar" />
    </template>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AuthenticatedLayout from 'shared_core/AuthenticatedLayout'
import FeedHeader from '../components/FeedHeader.vue'
import FeedSidebar from '../components/FeedSidebar.vue'
import StoriesSection from '../components/StoriesSection.vue'
import PostComposer from '../components/PostComposer.vue'
import PostCard from '../components/PostCard.vue'
import TrendsWidget from '../components/TrendsWidget.vue'
import SuggestionsWidget from '../components/SuggestionsWidget.vue'
import MobileBottomNav from '../components/MobileBottomNav.vue'

const userAvatar = ref('https://lh3.googleusercontent.com/aida-public/AB6AXuB0HUqeQPph4DfdDCYkXR2Jf_L1InI-swY8Nd4PtQR4hjuqPGKiDuegVs1DfESiH3sJeVa2RcnLhZX_RILlcZp7rDR40QJ0b390Os065O-BrWmaNqWWE6d8hnoHTUPZJtTcaj7-za-dKcq66faC53mluGQ2M7KmPXl-y-Tb6jS9he-YXUFjPdP3dC8OoQMYFMtMm-7Pv-ew-z9QybtFS-aaltLDn4fNW_bPK1ypCtBVd0d1Ro9At1dwdqmJq5KK-rrhqvCdpIMqMJNj')

const stories = ref([
  { id: '1', name: 'Jane', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgcixJJW27VQGwG8Xx68Wj2V0jsAC5R9WDuyxFz_q8ZzipDctDL7o6N6bP1FVnta0BiTjVI2RPQnUgy_nizypQcMtecredMkr9g3BJeSuW2LcabEyWxyFFmjbI-W9nZ_OEDpytEBZ58OQxMakoqvtKxdTHXiOxUXPeumnY8rwURU9FvemEwK3diU7i9alKIM-fu8Ra-_tuJVD6fXhJSytYVZAKRMMnpyAOyjHx7A4jJYRE-k57VlkfCAgX3W_2_oLEERZYdikttSII' },
  { id: '2', name: 'Mike', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDwUS9jBavKFCcRZadxzqR7OgEgWFrmyjXNEldh8MyDJsM746024Cn553QeS4jVxdgwVxZv7GQ9iODTu4LK3M2JSi67am_hi9DTejx39Vz-trn0pZjo1QmLUQygFjr80LYU2cCuS-j-BP4emgeQ_ZTEHlDsaTuwJ9oV1bPZyNL0Wgy7ekBLM6-mUCDykIUgEKoxnf9PH4HfUoSh9xDd3K-XW-vi_H1dKfwAdVvX5Z2RN8q27Pes2TRO6n-YhAuwZs5PXlqPWj3piZl' },
  { id: '3', name: 'Sarah', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-M6VWt4MgvkjgOxUl3a36kgZ2lC-Co1nlHlOF7_ROj4n5rpqG9x7yjmRGmqL2BpSCnXHZ2XOmQP9rFVtNsHfPs8MpoPKilAWcUtmUQNzxVkflruqyimFHIH3eNtHLOz3QdfGjdG_HggokJLjt7msfZ-Rc415InBa4ZZuLMRHB8SFUWYqXQheLGhMNeWO4xkz7DA9neynVstb83W9mqmN7QvoERGNfo5-DSP41lYvJLOnQlwelS4_7T3PLqIwUEmglv6_3z2MPal1R', viewed: true },
  { id: '4', name: 'Alex', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBretmxJhb0kluHbBJ5zfYHhuLIvON6QPUO8Ez50Hzbb_t7SEetsqWF3XHVl8LGaAqT_cbcn99fMAcBgnXGkSvcsbHusw2R4ZN7xtPRt-unaSmwECLqjSOqY8o36hKkYzFLAvsgjXDqqgH4OICD_YaOdt3vDZmk994DqDy9DEGTvTkNFM2wG72hhwbclqEmennWt7TKCxCo1wjvYdvx7GNyi_LtChoHpdMWSaYZrHt5THwIfD2Mk3EKLg1rz-3l1NsV_alTFj-ZgH8C' },
  { id: '5', name: 'Minh', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBretmxJhb0kluHbBJ5zfYHhuLIvON6QPUO8Ez50Hzbb_t7SEetsqWF3XHVl8LGaAqT_cbcn99fMAcBgnXGkSvcsbHusw2R4ZN7xtPRt-unaSmwECLqjSOqY8o36hKkYzFLAvsgjXDqqgH4OICD_YaOdt3vDZmk994DqDy9DEGTvTkNFM2wG72hhwbclqEmennWt7TKCxCo1wjvYdvx7GNyi_LtChoHpdMWSaYZrHt5THwIfD2Mk3EKLg1rz-3l1NsV_alTFj-ZgH8C' },
  { id: '6', name: 'Thanh', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBretmxJhb0kluHbBJ5zfYHhuLIvON6QPUO8Ez50Hzbb_t7SEetsqWF3XHVl8LGaAqT_cbcn99fMAcBgnXGkSvcsbHusw2R4ZN7xtPRt-unaSmwECLqjSOqY8o36hKkYzFLAvsgjXDqqgH4OICD_YaOdt3vDZmk994DqDy9DEGTvTkNFM2wG72hhwbclqEmennWt7TKCxCo1wjvYdvx7GNyi_LtChoHpdMWSaYZrHt5THwIfD2Mk3EKLg1rz-3l1NsV_alTFj-ZgH8C' },
  { id: '7', name: 'Hieu', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBretmxJhb0kluHbBJ5zfYHhuLIvON6QPUO8Ez50Hzbb_t7SEetsqWF3XHVl8LGaAqT_cbcn99fMAcBgnXGkSvcsbHusw2R4ZN7xtPRt-unaSmwECLqjSOqY8o36hKkYzFLAvsgjXDqqgH4OICD_YaOdt3vDZmk994DqDy9DEGTvTkNFM2wG72hhwbclqEmennWt7TKCxCo1wjvYdvx7GNyi_LtChoHpdMWSaYZrHt5THwIfD2Mk3EKLg1rz-3l1NsV_alTFj-ZgH8C' }
])

const posts = ref([
  {
    id: '1',
    author: {
      name: 'John Stone',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvJWwlm5ml5dSAi4VpvJtbKCbVT-MXsZTVcva7OdJG8b667KwNX-Rt-MczP6a5FIWqSYtTQt0YjlCDONd5RMv5w3Amw7kk1VjL28L7_rDmGmweaeJkbo54CVkIB2-quleyeiJv1t32XTHbyScEadvLO5xWjqKTu7EkYcY1gR5L9-MGxYNQKfnZ-ThQtCBK0UTXhE70LUDy2FBPaYYqXuw5tkN2RAEF0dgIhorUx41dD1rNQGsYoowZCbR9_JkXzm-FpTEZ-oOFmkjZ',
      isFollowing: true
    },
    time: '2 hours ago · Bali, Indonesia',
    text: 'Loving the vibes here in Bali! ☀️🌊 Just checked into this amazing villa. Can\'t wait for the surf tomorrow. #travel #vacation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZCeWt34KAudKxoEbPQNenBhPsg7objTqWtk7xl1H2bq51kVeRQDvYPQ1MAPVeXnB1I4krSDtmHV4MPs5HwuEvvmsnk1Qx8cOsPZKps-SKIZ25wGQpm1e233eWJGWKdn6amfHU1FeLkCjp9go-DpO9u1n-BuzOLxSNhR6X5h5F5VQqNP92JE2dv4MxqZbFsWRuGgLp_TwgkoKCcBRr14COYKiJ_g2J4le4vC1wjiSn3fdAQpPazgaEPZbm5IvHHFAHeCRNuoxlnAZ',
    stats: {
      likes: '1.2k others',
      likedBy: 'Jane Doe',
      comments: '42'
    }
  },
  {
    id: '2',
    author: {
      name: 'Sarah Connor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3gZMf8MV93twn_jZC-bIpPH33UHDo9JtGomBySlhNjPKWfOf0GxUDIgiTiW-B2KILD4bWuUW-JdWsJiHJbnTztotNU3cROvMeruPc84v3ptmsxpORe1pUMbFvqGoam5FTjqbHTWerZQ_Iava6Ft_a-CwYoR8SNXtcm4OLPm0QCpL0Hfms9M0fcWeK4sxse9cUEjXuFKGs4XQyKgvJ5vqWrhV_aGcvbKrQ-l9P4Ak9HX92FZol6QWUfoyhLNXyBNk8lTwxptTvhnhE'
    },
    time: '5 hours ago',
    gradient: 'linear-gradient(to bottom right, #6366f1, #a855f7, #ec4899)',
    gradientText: '"The best way to predict the future is to create it." ✨',
    stats: {
      likes: '856',
      comments: '124',
      likesCount: '856'
    }
  },
  {
    id: '3',
    author: {
      name: 'Tech Daily',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOFbl7Mb-F8f9mI83D7W7RjvixfnRHnDqpTNgFcFc_ON-3Dk57FCGlnrSWUV9salvJVfQRXEBqiZzcgPkRIXBE5ajkEygxLUvIQxvRisilzxIZtCiMWvP9hpzPflliiAo0820xx__NI8ql72At4JOkrjAaL077MixD-DVEklsJj5vVrO29ZDvuPkVggLZOpvieuOonaWQ0ENOXSgJg2UYzUqPo2T_pwSTGIJ4iscF1KSHd0ygB1IL88h89zgSY4D2AZogadrMWzdCv'
    },
    time: '8 hours ago',
    text: 'The new era of AI computing is here. Check out our deep dive review of the latest processors.',
    link: {
      domain: 'techdaily.com',
      title: 'The Future of AI Hardware: A Comprehensive Review',
      description: 'We tested the newest silicon from the top manufacturers to see who comes out on top.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2eKHPaKJkDaSg5hdhapqDbGq_IZn0pb_rl3BrQ_srdNfd9ycWA2T5_7ZzmhZJyE4hf4xzMhgl5eV0fq2x8pSPjmbmBEd09kQWMTqZGRgxpXMG19tNlEun-mvVXMlEiB0NMJnWul6E1DNnAZykoLpGvPSQ2dojB7UvApgLKBpSrl2oHxJMMyzOFHLdpX7HU7qB6N6QGjpidEmNFIcaJvPVTf4SjxL2dbitYbnsr6g3BZq7tWD23T1shNpmkFKmxyzj7zisG7BPIOL1'
    },
    stats: {
      likes: '2.4k',
      comments: '542',
      likesCount: '2.4k'
    }
  }
])

const trends = ref([
  { id: '1', category: 'Technology · Trending', name: '#ArtificialIntelligence', count: '52.4k' },
  { id: '2', category: 'Travel · Trending', name: '#BaliLife', count: '18.2k' },
  { id: '3', category: 'Music · Trending', name: 'New Album Drop', count: '102k' }
])

const suggestions = ref([
  {
    id: '1',
    name: 'Emily Wilson',
    detail: '@emilyw_design',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuConLsL4ydO9JCJuMgABnlyblsHFx6Z-kKbDkaF9h68G7EX0aI26LsIouNrKIwPon2vDWRQCGlFnhczRiegxv1ylIN-qt7b3k-VW2z-3_v4TMxt371wxPpZEotPcGRH65wPvxIfSe_RlwAOmzKKN98I3t35bXzsR3KIN1s4LoYfWR2khWmePEXE8HhMtH7qoCpq2bdJzh6q3R4vH7IIQhcy2y45Yt1DrEhqMbDlKjoePHt-SMGjGPStf7lqgYgrMSZaI_CEt_6_xCp0'
  },
  {
    id: '2',
    name: 'David Chen',
    detail: 'Followed by John',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhP3BYTJmoNXCc0TK5karaoFTP2yc1-hrVFfJZzL2mf2eHf1q4oQch1hvJjV-wldvl4ORO1HyysqepoUxcu8pedmN8d3bt6nMhcTm7ZraYrgr6f1ep8ehwh9v_WNmszdo-bHTm0BwRA7CKlffTJE3znWWFWVVRTlEQKHl843rVdXu-dz7rogL4w23Bng8ZQkloUgi9r5dUmk48H6aDEqRHk_ewyeE3rxkY7YuH6R0w4r56Uex2UxI6PBczuwlv-VJBdC6xegU3U_GV'
  },
  {
    id: '3',
    name: 'Creative Studio',
    detail: 'Design Agency',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0YI0X6qLNbI2F9OYclrVB4Agc4mlMCxPGiYJCuMMdwhfUVxzC_vNrC6OQl3J6XuuAeIQTh9fsE0VawdDcYatEfhc3mQwP25urbbiUzd-DWCYgCjux-ziY_5xugvKzolY3ukg2qxvdNnye6pfQDbUQDzUJXtuDBTiKVU1psu40fXY3tIGWYRrYsVvQxLJxVHTPNyiU92xdeLGS3hnNYdXP4ZA-CQooKOJymjZd4cW7N3QtZRSEey_Y1q76VSQ3xznWdAiN1kusL96u'
  },
  {
    id: '4',
    name: 'a',
    detail: 'a',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0YI0X6qLNbI2F9OYclrVB4Agc4mlMCxPGiYJCuMMdwhfUVxzC_vNrC6OQl3J6XuuAeIQTh9fsE0VawdDcYatEfhc3mQwP25urbbiUzd-DWCYgCjux-ziY_5xugvKzolY3ukg2qxvdNnye6pfQDbUQDzUJXtuDBTiKVU1psu40fXY3tIGWYRrYsVvQxLJxVHTPNyiU92xdeLGS3hnNYdXP4ZA-CQooKOJymjZd4cW7N3QtZRSEey_Y1q76VSQ3xznWdAiN1kusL96u'
  },
  {
    id: '5',
    name: 'b',
    detail: 'b',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0YI0X6qLNbI2F9OYclrVB4Agc4mlMCxPGiYJCuMMdwhfUVxzC_vNrC6OQl3J6XuuAeIQTh9fsE0VawdDcYatEfhc3mQwP25urbbiUzd-DWCYgCjux-ziY_5xugvKzolY3ukg2qxvdNnye6pfQDbUQDzUJXtuDBTiKVU1psu40fXY3tIGWYRrYsVvQxLJxVHTPNyiU92xdeLGS3hnNYdXP4ZA-CQooKOJymjZd4cW7N3QtZRSEey_Y1q76VSQ3xznWdAiN1kusL96u'
  },
  {
    id: '6',
    name: 'c',
    detail: 'c',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0YI0X6qLNbI2F9OYclrVB4Agc4mlMCxPGiYJCuMMdwhfUVxzC_vNrC6OQl3J6XuuAeIQTh9fsE0VawdDcYatEfhc3mQwP25urbbiUzd-DWCYgCjux-ziY_5xugvKzolY3ukg2qxvdNnye6pfQDbUQDzUJXtuDBTiKVU1psu40fXY3tIGWYRrYsVvQxLJxVHTPNyiU92xdeLGS3hnNYdXP4ZA-CQooKOJymjZd4cW7N3QtZRSEey_Y1q76VSQ3xznWdAiN1kusL96u'
  }
])

const handlePost = (content: string) => {
  console.log('New post:', content)
  // TODO: Implement post creation logic
}
</script>

<style scoped>
.newsfeed-container {
  flex: 1;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* padding: 16px 0 80px; */
}

.feed-content {
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.right-sidebar {
  display: none;
  flex-direction: column;
  width: 320px;
  position: sticky;
  top: 64px; /* Height của FeedHeader */
  align-self: flex-start;
  max-height: calc(100vh - 64px); /* Full height trừ header */
  overflow-y: auto;
  overflow-x: hidden;
  /* Ngăn scroll chaining - khi scroll đến top/bottom của sidebar thì không scroll content bên ngoài */
  overscroll-behavior: contain;
  gap: 24px;
}

.footer-links {
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 12px;
  color: #90a4cb;
}

.footer-links a {
  color: #90a4cb;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  /* .newsfeed-container {
    padding: 16px;
  } */
  
  .right-sidebar {
    display: flex;
  }
}
</style>
