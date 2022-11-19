<template>
  <div
    id="countdown"
    class="countdown"
    data-date="Fri Sep 30 2022 16:58:05 GMT+0200 (Eastern European Standard Time)"
  >
    <div>
      {{ days }}
      <span>{{ $t('headers.day') }}</span>
    </div>
    <div>
      {{ hours }}
      <span>{{ $t('headers.Hour') }}</span>
    </div>
    <div>
      {{ minutes }}
      <span>{{ $t('headers.Min') }}</span>
    </div>
    <div>
      {{ seconds }}
      <span>{{ $t('headers.Sec') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: null,
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      event: this.date,
      finish: false,
    }
  },
  mounted() {
    const _self = this
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true
        _self.$emit('onFinish')
      }
    }, 1000)
  },
  computed: {
    secondCount() {
      return this.calculatedDate - this.now
    },
    calculatedDate() {
      return Math.trunc(Date.parse(this.event) / 1000)
    },
    seconds() {
      if (this.secondCount < 0) return 0
      return this.secondCount % 60
    },
    minutes() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60) % 60
    },
    hours() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60) % 24
    },
    days() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    },
  },
}
</script>

<style></style>
