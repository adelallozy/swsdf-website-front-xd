<template>
  <footer>
    <img
      src="@/assets/headers/top-curve.png"
      class="curve-top"
      alt="footerAssets"
    />
    <div class="container">
      <div class="content">
        <div class="row w-100">
          <div class="col-md-3">
            <div class="logo">
              <img class="img-fluid" src="@/assets/logo.png" alt="logo" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="links">
              <div class="col-sm-9 mx-auto">
                <ul>
                  <li><router-link to="/">الرئيسية</router-link></li>
                  <li><router-link to="/">المسابقات</router-link></li>
                  <li><router-link to="/">الغوص</router-link></li>
                  <li><router-link to="/">الرياضات البحرية</router-link></li>
                  <li><router-link to="/">مراكز الغوص</router-link></li>
                  <li><router-link to="/">تواصل معنا</router-link></li>
                  <li><router-link to="/">تسجيل حساب</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="contact">
              <a href="mailto:test@test.com">test@test.com</a>
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
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
footer {
  background: url('@/assets/footerbg.png');
  background-size: cover;
  background-position: top center;
  position: relative;
  display: flex;
  align-items: flex-end;
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

    .content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 30px;
      position: relative;
      z-index: 10;
      .logo {
        margin-bottom: 30px;
        text-align: center;
        // img {
        //   max-width: 200px;
        // }
        @media (min-width: 768px) {
          margin-bottom: 0;
        }
      }
      .links {
        // flex: auto;
        margin-bottom: 30px;
        @media (min-width: 768px) {
          // flex: 2;
          margin-bottom: 0;
        }
        padding: 0 20px;
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: block;
          column-count: 3;
          li {
            margin-bottom: 15px;
            a {
              text-decoration: none;
              color: #ffffff;
              font-weight: bold;
              font-size: 14px;
            }
          }
        }
      }
      .contact {
        // flex: auto;
        align-self: center;
        @media (min-width: 768px) {
          // flex: 0 200px;
          margin-bottom: 0;
        }
        > a {
          display: block;
          text-align: center;
          margin-bottom: 10px;
          color: #ffffff;
          font-weight: bold;
          text-decoration: none;
        }
        .social {
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
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
  }
  img.curve-top {
    position: absolute;
    left: 0;
    top: -5px;
    z-index: -1;
    height: 200px;
    width: 100%;
    @media (max-width: 992px) {
      top: -42px;
    }
    @media (max-width: 768px) {
      width: 150%;
    }
    @media (max-width: 576px) {
      width: 170%;
    }
  }
}
</style>
