<template>
  <section>
    <div class="container">
      <div class="login-wrapper">
        <div class="content">
          <h3 class="title">تسجيل الدخول</h3>
        </div>
        <img src="@/assets/section-bg1.png" class="bg-1" alt="assets" />
        <img src="@/assets/sectionBg.png" class="bg-2" alt="assets" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.login-wrapper {
  position: relative;
  // background: url('@/assets/section-bg1.png');
  background-position: center;
  background-size: cover;
  min-height: 300px;
  border-radius: 80px;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 150px;

  > img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  img.bg-1 {
    z-index: -1;
    opacity: 0.3;
  }
  img.bg-2 {
    z-index: 5;
    opacity: 1;
  }
  // &::before {
  //   content: '';
  //   background: url('@/assets/sectionBg.png');
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 9;
  //   position: absolute;
  // }
  .content {
    position: relative;
    z-index: 11;
  }
}
</style>
