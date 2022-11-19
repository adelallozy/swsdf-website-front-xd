<template>
  <div class="intro">
    <div class="container">
      <div class="content" v-if="competitions.data">
        <h2>
          <span
            class="d-block"
            v-for="item in setTitle(
              $i18n.locale == 'ar'
                ? competitions.data[0].title_ar
                : competitions.data[0].title_en,
            )"
            :key="item"
          >
            {{ item }}
          </span>
          <!-- <br />
          الغوص الحر -->
        </h2>
        <count-down :date="competitions.data[0].starts_at" />

        <a
          v-if="competitions.data[0].sport == 'Freediving'"
          :href="`/competitions/freediving-participation-application/${competitions.data[0].id}`"
          class="btn btn-primary custom-btn mx-auto mt-4"
        >
          اشترك الان
          <span></span>
        </a>
        <a
          v-else-if="competitions.data[0].sport == 'Jetski'"
          :href="`/competitions/jetski-participation-application/${competitions.data[0].id}`"
          class="btn btn-primary custom-btn mx-auto mt-4"
        >
          اشترك الان
          <span></span>
        </a>
        <a
          v-else
          :href="`/competitions/sport-fishing-participation-application/${competitions.data[0].id}`"
          class="btn btn-primary custom-btn mx-auto mt-4"
        >
          اشترك الان
          <span></span>
        </a>
      </div>
      <div class="social">
        <ul>
          <li>
            <a href="#" class="btn btn-primary custom-btn">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" class="btn btn-primary custom-btn">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" class="btn btn-primary custom-btn">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <img src="@/assets/bottom-1.png" alt="assets" />
    <img src="@/assets/header-bottom.png" alt="assets" /> -->
  </div>
</template>

<script setup>
import CountDown from '@/components/CountDown.vue'
import axios from 'axios'
import { onMounted, reactive } from 'vue'
const competitions = reactive({
  data: null,
})

onMounted(() => getCompetitions())

function getCompetitions() {
  axios.get('competitions/get-competitions').then((data) => {
    competitions.data = data.data.competitions
  })
}

function setTitle(title) {
  return title.split('-')
}

// export default {}
</script>

<style lang="scss">
.intro {
  position: relative;
  min-height: 100vh;
  background-image: url('@/assets/intro.png');
  background-position: center center;
  background-size: cover;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent linear-gradient(180deg, #04002a 0%, #54545400 100%)
      0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .container {
    position: relative;
    .content {
      position: relative;
      z-index: 12;
      padding-top: 120px;
      h2 {
        color: #fff;
        text-align: center;
        // font-size: 48px;
        margin: 0;
        font-weight: 700;
        span {
          @include font-size();
          font-weight: bold;
          // font: normal normal bold 24px/35px Cairo;
          &:first-child {
            font-size: 40px;
            line-height: 60px;
            font-weight: bold;
            // font: normal normal bold 40px/60px Cairo;
          }
          // font-size: 80px;
          // letter-spacing: 4px;
        }
      }

      .custom-btn {
        background: none !important;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: #ffffff 0% 0% no-repeat padding-box;
          border-radius: 10px;
          opacity: 0.35;
          backdrop-filter: blur(11px);
          -webkit-backdrop-filter: blur(11px);
        }
      }
    }
    .social {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 100;
      @media (max-width: 768px) {
        right: unset;
        left: 50%;
        bottom: -60px;
        transform: translateX(-50%);
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        li {
          &:not(:last-child) {
            margin-right: 5px;
          }
          a {
            width: 40px;
            height: 40px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 50% !important;
            background: none !important;
            font-size: 20px;
            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              background: #ffffff 0% 0% no-repeat padding-box;
              border-radius: 10px;
              opacity: 0.35;
              backdrop-filter: blur(11px);
              -webkit-backdrop-filter: blur(11px);
            }
          }
        }
      }
    }
  }
}
</style>
