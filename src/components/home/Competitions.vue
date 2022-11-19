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
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.competitions {
  background: url('@/assets/section-bg1.png');
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: end;
  // background-size: cover;
  background-position: center center;
  padding: 50px 0;
  position: relative;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   background: url('@/assets/section-bg1.png');
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  // }
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
}
</style>
