<template>
  <section class="champions">
    <div class="container" v-if="competition.data">
      <div class="img-wrapper col-md-6 mx-auto" v-if="competition.data.logo">
        <img src="@/assets/jetskiLogo.png" alt="logo" class="img-fluid" />
      </div>
      <div class="content">
        <count-down :date="competition.data.starts_at" />
        <div class="info p-30 mb-3">
          <div class="budget" v-if="competition.data.stage == 'Finished'">
            انتهت
          </div>
          <div class="row mt-2">
            <div class="col-12">
              <div class="details">
                <h2 class="title">
                  {{
                    $i18n.locale == 'ar'
                      ? competition.data.title_ar
                      : competition.data.title_en
                  }}
                </h2>
                <div class="item">
                  <!-- <h4 class="title">الميعاد</h4> -->
                  <h5>
                    <span>{{ competition.data.starts_at }}</span>
                    -
                    <span>{{ competition.data.ends_at }}</span>
                  </h5>
                </div>

                <div class="item">
                  <h5>
                    <span>{{ competition.data.city_name }}</span>

                    <span v-if="competition.data.venue">
                      - {{ competition.data.venue }}
                    </span>
                  </h5>
                </div>
                <div class="description" v-if="false">
                  <p class="col-md-9 mx-auto description">
                    حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                    سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                    الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                    إيبسوم لأنها تعطي توزيعاَ
                  </p>
                </div>
                <div class="item" v-if="competition.data.terms">
                  <h4 class="title">شروط البطولة</h4>
                  <div v-html="competition.data.terms"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="action">
            <a
              v-if="competition.data.sport == 'Freediving'"
              :href="`/competitions/freediving-participation-application/${competition.data.id}`"
              class="btn btn-primary custom-btn mx-auto mt-4"
            >
              اشترك الان
              <span></span>
            </a>
            <a
              v-else-if="competition.data.sport == 'Jetski'"
              :href="`/competitions/jetski-participation-application/${competition.data.id}`"
              class="btn btn-primary custom-btn mx-auto mt-4"
            >
              اشترك الان
              <span></span>
            </a>
            <a
              v-else
              :href="`/competitions/sport-fishing-participation-application/${competition.data.id}`"
              class="btn btn-primary custom-btn mx-auto mt-4"
            >
              اشترك الان
              <span></span>
            </a>
          </div>
        </div>
        <div class="register-info mt-5" v-if="false">
          <div class="item"></div>
          <!-- <div class="col-md-10 mx-auto">
            <div class="row justify-content-between">
              <div class="col-md-6">
                <div class="item">
                  <h3 class="title">الشروط</h3>
                  <ul class="list-unstyled">
                    <li v-for="n in 8" :key="n">الحصول علي رخصة المزاولة</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item item1">
                  <h3 class="title">الجوائز</h3>
                  <ul class="list-unstyled">
                    <li v-for="n in 3" :key="n">
                      المركز الاول
                      <ul>
                        <li>ميدالية ذهبية</li>
                        <li>جائزة مالية بقدر 100 ريال</li>
                        <li>رحلة بحرية</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div style="height: 50px;"></div>
    <!-- <section class="competitions">
      <div class="container">
        <h3 class="title text-white">النتــــائج</h3>
        <div class="results">
          <div class="row align-items-end">
            <div class="col-md-4">
              <div class="item item1">
                <div class="content">
                  <h3 class="title">المركز الأول</h3>
                  <div class="img-wrapper">
                    <img src="@/assets/face.jpg" alt="player-image" />
                  </div>
                  <div class="caption">
                    <h5 class="name">محمد احمد محمود</h5>
                    <h5 class="age">20 سنة</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="item item2">
                <div class="content">
                  <h3 class="title">المركز الثاني</h3>
                  <div class="img-wrapper">
                    <img src="@/assets/face.jpg" alt="player-image" />
                  </div>
                  <div class="caption">
                    <h5 class="name">محمد احمد محمود</h5>
                    <h5 class="age">20 سنة</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="item item3">
                <div class="content">
                  <h3 class="title">المركز الثالث</h3>
                  <div class="img-wrapper">
                    <img src="@/assets/face.jpg" alt="player-image" />
                  </div>
                  <div class="caption">
                    <h5 class="name">محمد احمد محمود</h5>
                    <h5 class="age">20 سنة</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="container">
        <h3 class="title">
          أخبار المسابقات
        </h3>
        <div class="content">
          <div class="swipper-wrapper">
            <div class="row">
              <div class="col-md-4">
                <div class="item">
                  <img src="@/assets/diving-about.png" alt="news-images" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <img src="@/assets/diving-about.png" alt="news-images" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <img src="@/assets/diving-about.png" alt="news-images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </section>
</template>

<script setup>
import CountDown from '@/components/CountDown.vue'
import axios from 'axios'
import { onMounted, reactive, defineProps } from 'vue'

const competition = reactive({
  data: null,
})

const id = defineProps(['id'])

onMounted(() => getCompetitions())

function getCompetitions() {
  axios.get(`competitions/get-competition/${id.id}`).then((data) => {
    competition.data = data.data.competition
    console.log(competition.data)
  })
}
</script>

<style lang="scss">
.champions {
  .content {
    position: relative;
    padding-top: 50px;
    .countdown {
      position: absolute;
      top: 10px;
      z-index: 20;
      margin-top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .info {
      position: relative;
      background: #f0f5fc 0% 0% no-repeat padding-box;
      box-shadow: 0px 9px 8px #00000012;
      border-radius: 40px;
      padding-top: 40px;
      overflow: hidden;
      .details {
        > h2 {
          margin-top: 30px;
          text-align: start;
          margin-bottom: 10px;
          @include font-size();
        }
        height: 100%;
        display: flex;
        flex-direction: column;

        .item {
          &:not(:last-child) {
            margin-bottom: 10px;
          }

          h4.title {
            font-size: 20px;
            margin-bottom: 0px;
            text-align: start;
          }
          h5 {
            text-align: start;
            color: #010d0f;
            font-size: 22px;
            font-weight: bold;
          }
        }
      }

      p.description {
        margin-block: 40px;
        text-align: center;
        @include font-size();

        letter-spacing: 0px;
        color: #010d0f;
      }
      .budget {
        position: absolute;
        top: 0;
        left: 0;
        background: red;
        color: #fff;
        font-weight: bold;
        padding: 5px 10px 5px 20px;
        border-radius: 5px;
      }
    }
    .register-info {
      .item {
        position: relative;
        background: #f0f5fc 0% 0% no-repeat padding-box;
        box-shadow: 0px 9px 8px #00000012;
        border-radius: 40px;
        padding: 20px;
        height: 100%;
        h3.title {
          font-size: 18px;
          line-height: 33px;
          text-align: start;
          margin-bottom: 15px;
          position: relative;
          &::after {
            content: '';
            display: block;
            width: 60px;
            height: 1px;
            background: #2a6cca;
            opacity: 0.4;
          }
        }
        > ul {
          padding: 0;
          margin: 0;
          > li {
            margin-bottom: 12px;
            color: #15385e;
            position: relative;
            font-size: 16px;
            font-weight: bold;
            &::before {
              content: '';
              display: inline-block;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: transparent
                linear-gradient(180deg, #243e7a 0%, #116cc8 0%, #25427f 100%) 0%
                0% no-repeat padding-box;
              margin-left: 10px;
            }
          }
        }
        &.item1 {
          > ul > li {
            font-size: 18px;
            font-weight: bold;
            ul {
              padding: 0;
              margin: 0;
              margin-top: 12px;
              list-style: none;
              li {
                font-size: 16px;
                &:not(:last-child) {
                  margin-bottom: 12px;
                }
                position: relative;
                &::before {
                  content: '';
                  display: inline-block;
                  margin-left: 10px;
                  width: 8px;
                  height: 2px;
                  background: transparent
                    linear-gradient(
                      180deg,
                      #243e7a 0%,
                      #116cc8 0%,
                      #25427f 100%
                    )
                    0% 0% no-repeat padding-box;
                }
              }
            }
          }
        }
      }
    }
  }
  .competitions {
    .results {
      > div > div {
        @media (min-width: 768px) {
          &:first-child {
            order: 2;
          }
          &:nth-child(2) {
            order: 1;
          }
          &:nth-child(3) {
            order: 3;
          }
        }
      }
      .item {
        margin-bottom: 15px;
        .content {
          padding-top: 0;
          position: relative;
          z-index: 10;
          h3.title {
            color: #fff;
            font-size: 20px;
            margin-bottom: 15px;
          }
        }
        .img-wrapper {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          margin-inline: auto;
          margin-bottom: 15px;
          img {
            width: 100%;
          }
        }
        h5 {
          text-align: center;
          color: #fff;
        }
        &.item1 {
          order: 2;
          .img-wrapper {
            width: 200px;
            height: 200px;
          }
          h3.title {
            font-weight: bold;
            font-size: 22px !important;
          }
        }
        &.item2 {
          order: 2;
        }
        &.item3 {
          order: 3;
        }
      }
    }
  }
  .news {
    padding: 50px 0;
    .content {
      .item {
        height: 100%;
        max-height: 300px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
