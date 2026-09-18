<template>
  <h1>Firebase Login</h1>

  <p>
    <input
      type="text"
      placeholder="Email"
      v-model="email"
    />
  </p>

  <p>
    <input
      type="password"
      placeholder="Password"
      v-model="password"
    />
  </p>

<p>
  <select v-model="role">
    <option value="">Select Role</option>
    <option value="admin">Admin</option>
    <option value="user">User</option>
  </select>
</p>

  <p>
    <button @click="login">
      Login
    </button>
  </p>
  <p>
    <button @click="logout">
      Logout
    </button>
  </p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const email = ref('')
const password = ref('')
const role = ref('')
const auth = getAuth()

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log('Firebase Sign in Successful!')
      console.log(auth.currentUser)
      console.log('Signed in as role:', role.value)
    })
    .catch((error) => {
      console.log(error.code)
    })
}

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log('Firebase Sign out Successful!')
      console.log('Current user after logout:', auth.currentUser)
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>