import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref(localStorage.getItem('username') || '')
  const token = ref(localStorage.getItem('token') || '')

  const isLoggedIn = computed(() => !!token.value)

  function login(user, pass) {
    if (user === 'admin' && pass === 'admin123') {
      username.value = user
      token.value = 'mock-token-' + Date.now()
      localStorage.setItem('username', user)
      localStorage.setItem('token', token.value)
      return true
    }
    return false
  }

  function logout() {
    username.value = ''
    token.value = ''
    localStorage.removeItem('username')
    localStorage.removeItem('token')
  }

  return { username, token, isLoggedIn, login, logout }
})
