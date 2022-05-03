<template>
  <section class="container">
    <input type="text" v-model="username">
    <button type="button" @click="enter">입장</button>
  </section>
</template>

<script>
import socket from '../plugins/socket.io'
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    enter(event) {
      socket.emit('enter', this.username)
    }
  },
  beforeMount() {
    console.log('beforMount');
    socket.on('enter', (result) => {
      this.$nuxt.$router.replace({path: '/chat'})
    })
  }
}
</script>
