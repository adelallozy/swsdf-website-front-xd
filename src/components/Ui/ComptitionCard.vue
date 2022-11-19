<template>
  <div class="">
    <a
      class="champion"
      :href="`/competitions/review/${item.item.id}`"
      v-if="item.item"
    >
      <div class="img-wrapper">
        <img
          v-if="item.item.logo"
          :src="item.item.logo"
          alt="champion"
          class="img-fluid"
        />
        <img
          v-else
          src="@/assets/logo.png"
          alt="champion"
          class="img-fluid comptition-logo"
        />
      </div>
      <div class="champoin-info">
        <h2 class="title">
          <span
            v-for="title in setTitle(
              $i18n.locale == 'ar' ? item.item.title_ar : item.item.title_en,
            )"
            :key="title"
          >
            {{ title }}
          </span>
        </h2>
        <p>
          <span>{{ item.item.city_name }}</span>

          <span v-if="item.item.venue">- {{ item.item.venue }}</span>
        </p>
        <p>
          <span>{{ item.item.starts_at }}</span>
          -
          <span>{{ item.item.ends_at }}</span>
        </p>
      </div>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const item = defineProps(['item'])
function setTitle(title) {
  return title.split('-')
}
</script>

<style lang="scss">
img.comptition-logo {
  filter: brightness(0) invert(0);
}
.champion {
  text-decoration: none !important;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0px 3px 10px #00000029;
  padding: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  //   .img-wrapper {
  //     // width: 70px;
  //     // margin-top: 30px;
  //     // margin-bottom: 50px;
  //   }
  .champoin-info {
    padding: 0 10px 20px;
    .title {
      text-align: center;
      //   @include font-size();
      font-size: 16px;
      line-height: 1.4;
      color: $main-color;
      span {
        &:first-child {
          margin-bottom: 10px;
          display: block;
        }
      }
      margin-bottom: 15px;
    }
    p {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 0;
      //   &:not(:last-child) {
      //     // margin-bottom: px;
      //   }
      font-weight: bold;
      color: $main-color;
      text-align: center;
    }
  }
}
</style>
