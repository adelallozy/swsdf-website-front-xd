<template>
  <div class="home">
    <Intro />
    <Register />
    <Competitions />
    <LastNews />
    <SocialPosts />
  </div>
</template>

<script>
import Intro from '@/components/home/Intro.vue'
import Register from '@/components/home/Register.vue'
import Competitions from '@/components/home/Competitions.vue'
import LastNews from '@/components/home/LastNews.vue'
import SocialPosts from '@/components/home/SocialPosts.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: { Intro, Register, Competitions, LastNews, SocialPosts },
}
</script>
