<template>
  <MainHeader />
  <div class="app-wrapper" :class="routerName == 'home' ? 'home-page' : ''">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import MainHeader from './components/header/MainHeader.vue'
import Footer from './components/Footer.vue'
export default {
  components: { MainHeader, Footer },
  data() {
    return {
      routerName: '',
    }
  },
  mounted() {
    this.routerName = this.$route.name
    if (this.$i18n.locale == 'ar') {
      document.body.classList.add('is-rtl')
    } else {
      if (document.body.classList.length) {
        document.body.classList.remove('is-rtl')
      }
    }
  },
  watch: {
    $route() {
      this.routerName = this.$route.name
    },
  },

  setup() {},
}
</script>

<style lang="scss">
.app-wrapper {
  padding-top: 80px;
  min-height: 50vh;
  @media (min-width: 768px) {
    padding-top: 100px;
  }
  @media (min-width: 992px) {
    padding-top: 150px;
  }
  @media (min-width: 1170px) {
    padding-top: 200px;
  }
  &.home-page {
    padding-top: 0 !important;
  }
}
</style>
