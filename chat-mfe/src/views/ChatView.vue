<template>
  <AuthenticatedLayout>
    <div class="chat-container">
      <ChatSidebar 
        :conversations="conversations" 
        :current-user="currentUser"
        @select-conversation="handleSelectConversation"
      />
      
      <main class="chat-main">
        <ChatHeader 
          v-if="selectedConversation"
          :conversation="selectedConversation"
        />
        
        <ChatMessages 
          v-if="selectedConversation"
          :messages="selectedConversation.messages"
          :current-user-id="currentUser.id"
        />
        
        <ChatInput 
          v-if="selectedConversation"
          @send-message="handleSendMessage"
        />
      </main>
      
      <ChatUserInfo 
        v-if="selectedConversation"
        :user="selectedConversation.user"
      />
    </div>
    
    <template #footer>
      <MobileBottomNav :user-avatar="currentUser.avatar" />
    </template>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AuthenticatedLayout from 'shared_core/AuthenticatedLayout'
import ChatSidebar from '../components/chat/ChatSidebar.vue'
import ChatHeader from '../components/chat/ChatHeader.vue'
import ChatMessages from '../components/chat/ChatMessages.vue'
import ChatInput from '../components/chat/ChatInput.vue'
import ChatUserInfo from '../components/chat/ChatUserInfo.vue'
import MobileBottomNav from '../components/chat/MobileBottomNav.vue'

interface User {
  id: string
  name: string
  avatar: string
  status?: 'online' | 'offline' | 'typing'
  role?: string
}

interface Message {
  id: string
  senderId: string
  text?: string
  image?: string
  timestamp: string
  seen?: boolean
}

interface Conversation {
  id: string
  user: User
  lastMessage: string
  lastMessageTime: string
  unreadCount?: number
  messages: Message[]
  isActive?: boolean
}

const currentUser = ref<User>({
  id: 'current-user',
  name: 'Current User',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0HUqeQPph4DfdDCYkXR2Jf_L1InI-swY8Nd4PtQR4hjuqPGKiDuegVs1DfESiH3sJeVa2RcnLhZX_RILlcZp7rDR40QJ0b390Os065O-BrWmaNqWWE6d8hnoHTUPZJtTcaj7-za-dKcq66faC53mluGQ2M7KmPXl-y-Tb6jS9he-YXUFjPdP3dC8OoQMYFMtMm-7Pv-ew-z9QybtFS-aaltLDn4fNW_bPK1ypCtBVd0d1Ro9At1dwdqmJq5KK-rrhqvCdpIMqMJNj'
})

const conversations = ref<Conversation[]>([
  {
    id: '1',
    user: {
      id: '1',
      name: 'Jane Cooper',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgcixJJW27VQGwG8Xx68Wj2V0jsAC5R9WDuyxFz_q8ZzipDctDL7o6N6bP1FVnta0BiTjVI2RPQnUgy_nizypQcMtecredMkr9g3BJeSuW2LcabEyWxyFFmjbI-W9nZ_OEDpytEBZ58OQxMakoqvtKxdTHXiOxUXPeumnY8rwURU9FvemEwK3diU7i9alKIM-fu8Ra-_tuJVD6fXhJSytYVZAKRMMnpyAOyjHx7A4jJYRE-k57VlkfCAgX3W_2_oLEERZYdikttSII',
      status: 'typing',
      role: 'Product Designer'
    },
    lastMessage: 'Typing...',
    lastMessageTime: 'Just now',
    isActive: true,
    messages: [
      {
        id: '1',
        senderId: '1',
        text: "Hey! Have you seen the new design variant for the social app? I think the minimalist approach looks stunning. 🎨",
        timestamp: '10:42 PM'
      },
      {
        id: '2',
        senderId: 'current-user',
        text: "I just checked it! The dark mode with heavy rounded cards is exactly what we need. It feels very high-end and clean.",
        timestamp: '10:45 PM',
        seen: true
      },
      {
        id: '3',
        senderId: '1',
        text: "Check this out, inspiration for the travel section!",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZCeWt34KAudKxoEbPQNenBhPsg7objTqWtk7xl1H2bq51kVeRQDvYPQ1MAPVeXnB1I4krSDtmHV4MPs5HwuEvvmsnk1Qx8cOsPZKps-SKIZ25wGQpm1e233eWJGWKdn6amfHU1FeLkCjp9go-DpO9u1n-BuzOLxSNhR6X5h5F5VQqNP92JE2dv4MxqZbFsWRuGgLp_TwgkoKCcBRr14COYKiJ_g2J4le4vC1wjiSn3fdAQpPazgaEPZbm5IvHHFAHeCRNuoxlnAZ',
        timestamp: '10:46 PM'
      }
    ]
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'John Stone',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvJWwlm5ml5dSAi4VpvJtbKCbVT-MXsZTVcva7OdJG8b667KwNX-Rt-MczP6a5FIWqSYtTQt0YjlCDONd5RMv5w3Amw7kk1VjL28L7_rDmGmweaeJkbo54CVkIB2-quleyeiJv1t32XTHbyScEadvLO5xWjqKTu7EkYcY1gR5L9-MGxYNQKfnZ-ThQtCBK0UTXhE70LUDy2FBPaYYqXuw5tkN2RAEF0dgIhorUx41dD1rNQGsYoowZCbR9_JkXzm-FpTEZ-oOFmkjZ',
      status: 'online'
    },
    lastMessage: "That's amazing! See you then.",
    lastMessageTime: '12m',
    messages: []
  },
  {
    id: '3',
    user: {
      id: '3',
      name: 'Sarah Connor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3gZMf8MV93twn_jZC-bIpPH33UHDo9JtGomBySlhNjPKWfOf0GxUDIgiTiW-B2KILD4bWuUW-JdWsJiHJbnTztotNU3cROvMeruPc84v3ptmsxpORe1pUMbFvqGoam5FTjqbHTWerZQ_Iava6Ft_a-CwYoR8SNXtcm4OLPm0QCpL0Hfms9M0fcWeK4sxse9cUEjXuFKGs4XQyKgvJ5vqWrhV_aGcvbKrQ-l9P4Ak9HX92FZol6QWUfoyhLNXyBNk8lTwxptTvhnhE',
      status: 'offline'
    },
    lastMessage: 'Can you send the design file?',
    lastMessageTime: '1h',
    messages: []
  },
  {
    id: '4',
    user: {
      id: '4',
      name: 'Mike Wazowski',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDwUS9jBavKFCcRZadxzqR7OgEgWFrmyjXNEldh8MyDJsM746024Cn553QeS4jVxdgwVxZv7GQ9iODTu4LK3M2JSi67am_hi9DTejx39Vz-trn0pZjo1QmLUQygFjr80LYU2cCuS-j-BP4emgeQ_ZTEHlDsaTuwJ9oV1bPZyNL0Wgy7ekBLM6-mUCDykIUgEKoxnf9PH4HfUoSh9xDd3K-XW-vi_H1dKfwAdVvX5Z2RN8q27Pes2TRO6n-YhAuwZs5PXlqPWj3piZl',
      status: 'offline'
    },
    lastMessage: 'The meeting is moved to 4 PM.',
    lastMessageTime: '3h',
    messages: []
  }
])

const selectedConversation = ref<Conversation | null>(conversations.value[0])

const handleSelectConversation = (conversation: Conversation) => {
  selectedConversation.value = conversation
  // Update active state
  conversations.value.forEach(conv => {
    conv.isActive = conv.id === conversation.id
  })
}

const handleSendMessage = (message: string) => {
  if (!selectedConversation.value) return
  
  const newMessage: Message = {
    id: Date.now().toString(),
    senderId: currentUser.value.id,
    text: message,
    timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  }
  
  selectedConversation.value.messages.push(newMessage)
  selectedConversation.value.lastMessage = message
  selectedConversation.value.lastMessageTime = 'Just now'
}
</script>

<style scoped>
.chat-container {
  flex: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(229, 231, 235, 0.3);
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

@media (min-width: 768px) {
  .chat-container {
    padding: 24px;
  }
  
  .chat-main {
    border-radius: 32px;
  }
}

@media (min-width: 1024px) {
  .chat-container {
    padding: 32px;
  }
}
</style>

