<template>
  <div class="intro">
    <div class="container">
      <div class="content">
        <h2>
          <span>بطولة</span>
          <br />
          الغوص الحر
        </h2>
        <div class="countdown">
          <div class="month">
            <span>1</span>
            <span>شهر</span>
          </div>
          <div class="week">
            <span>15</span>
            <span>اسبوع</span>
          </div>
          <div class="day">
            <span>5</span>
            <span>يوم</span>
          </div>
          <div class="hour">
            <span>22</span>
            <span>ساعه</span>
          </div>
        </div>
        <router-link
          to="/champions/1"
          class="btn btn-primary custom-btn mx-auto mt-4"
        >
          اشترك الان
          <span></span>
        </router-link>
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
  </div>
</template>

<script>
export default {}
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
        font-size: 48px;
        margin: 0;
        font-weight: 700;
        span {
          // font-size: 80px;
          font: normal normal bold 90px/124px Cairo;
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
.countdown {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid #cbdcf5;
    background: #fff;
    border-radius: 10px;
    min-width: 60px;
    padding: 10px;

    color: #2a6cca;
    font-weight: bold;
    font-size: 18px;

    margin: 0 10px;
  }
}
</style>
