<template>
  <section class="competitions">
    <div class="container">
      <div class="swiper-wraper">
        <div class="item">
          <div class="content">
            <h2>مسابقة الغوص تحت 12 متر</h2>
            <p>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن
            </p>
            <div class="description">
              <div class="row">
                <div class="col-md-6">
                  <div class="inner">
                    <h3>الشروط والاحكام</h3>
                    <ul>
                      <li>السن من 14 ل24 سنة</li>
                      <li>السن من 14 ل24 سنة</li>
                      <li>السن من 14 ل24 سنة</li>
                      <li>السن من 14 ل24 سنة</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="inner">
                    <h3>الشروط والاحكام</h3>
                    <ul>
                      <li>السن من 14 ل24 سنة</li>
                      <li>السن من 14 ل24 سنة</li>
                      <li>السن من 14 ل24 سنة</li>
                      <li>السن من 14 ل24 سنة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/headers/top-curve.png" class="top-curve" alt="curve" />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.competitions {
  background: url('@/assets/section-bg.png');
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: end;
  background-size: cover;
  background-position: top left;
  padding: 50px 0;
  position: relative;
  &::before {
    content: '';
    top: 0;
    backdrop-filter: blur(16px);
    left: 0;
    position: absolute;
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }
  .container {
    padding-top: 150px;
  }
  .item {
    padding: 20px;
    position: relative;
    border-radius: 42px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 42px;
      opacity: 0.2;
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
    }
    .content {
      position: relative;
      z-index: 10;
      h2 {
        letter-spacing: 0;
        text-align: right;
        font: normal normal bold 28px/44px Cairo;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
      }
      p {
        font-size: 18px;
        font-weight: bold;
        color: #d9e2f1;
        opacity: 1;
      }
      .description {
        .inner {
          h3 {
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 20px;
            margin-right: 20px;
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            li {
              color: #d9e2f1;
              opacity: 1;
              font-weight: bold;
              margin-bottom: 10px;
              position: relative;
              &::before {
                content: '';
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #fff;
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
  img.top-curve {
    position: absolute;
    left: 0;
    top: -50px;
    z-index: -1;
    height: 300px;
    width: 100%;
    @media (max-width: 992px) {
      top: -80px;
      width: 150%;
    }
    @media (max-width: 768px) {
      width: 180%;
      height: 240px;
      top: -25px;
    }
    @media (max-width: 576px) {
      width: 220%;
    }
  }
}
</style>
