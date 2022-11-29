<template>
  <section class="champions">
    <div class="container" v-if="mainRoute">
      <h2 class="title mb-5">
        <span><img src="@/assets/getintouch/2.png" alt="" /></span>
        المسابقات
      </h2>
      <div class="content">
        <div class="row justify-content-center">
          <div
            class="col-sm-6 col-md-4 col-lg-3"
            v-for="item in competitions.data"
            :key="item.id"
          >
            <comptition-card :item="item" />
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script setup>
import ComptitionCard from '@/components/Ui/ComptitionCard.vue'
import axios from 'axios'
import { onMounted, reactive, watchEffect, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const competitions = reactive({
  data: null,
})
const mainRoute = ref(true)

onMounted(() => getCompetitions())

function getCompetitions() {
  axios.get('competitions/get-competitions').then((data) => {
    competitions.data = data.data.competitions
  })
}
watchEffect(() => {
  if (route.params.id) {
    mainRoute.value = false
  }
})
</script>

<style lang="scss">
.champions {
  padding-top: 50px;
  padding-bottom: 100px;
}
</style>
