<template>
  <section class="get-in-touch">
    <div class="container">
      <h2 class="title">سجل معنا</h2>
      <div class="content">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card-wrapper">
              <div class="card-body">
                <div class="logo">
                  <img src="@/assets/getintouch/1.png" alt="icon" />
                </div>
                <div class="caption">
                  <h4 class="name">غواص محترف</h4>
                  <ul>
                    <li>الحصول علي رخصة المزاولة</li>
                    <li>الحصول علي رخصة المزاولة</li>
                    <li>الحصول علي رخصة المزاولة</li>
                  </ul>
                  <a
                    href="/profissional-diving"
                    class="btn btn-primary custom-btn"
                  >
                    سجل الان
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card-wrapper active">
              <div class="card-body">
                <div class="logo">
                  <img src="@/assets/getintouch/1.png" alt="icon" />
                </div>
                <div class="caption">
                  <h4 class="name">غواص محترف</h4>
                  <ul>
                    <li>الحصول علي رخصة المزاولة</li>
                    <li>الحصول علي رخصة المزاولة</li>
                    <li>الحصول علي رخصة المزاولة</li>
                  </ul>
                  <a
                    href="/profissional-diving"
                    class="btn btn-primary custom-btn"
                  >
                    سجل الان
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card-wrapper">
              <div class="card-body">
                <div class="logo">
                  <img src="@/assets/getintouch/1.png" alt="icon" />
                </div>
                <div class="caption">
                  <h4 class="name">غواص محترف</h4>
                  <ul>
                    <li>الحصول علي رخصة المزاولة</li>
                    <li>الحصول علي رخصة المزاولة</li>
                    <li>الحصول علي رخصة المزاولة</li>
                  </ul>
                  <a
                    href="/profissional-diving"
                    class="btn btn-primary custom-btn"
                  >
                    سجل الان
                    <span></span>
                  </a>
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
.get-in-touch {
  padding-bottom: 50px;
}
.card-wrapper {
  position: relative;
  background: url('@/assets/getintouch/bg.png');
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
  padding: 3px 3px 0;
  margin-bottom: 50px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 7px 20px #0023d540;
    // border-radius: 80px;
    opacity: 0.2;
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
  }
  .logo {
    width: 70px;
    margin: 0 auto;
    margin-bottom: 5px;
    img {
      width: 100%;
    }
  }
  .card-body {
    position: relative;
    z-index: 10;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 80px;
  }
  .caption {
    h4.name {
      color: #3065b3;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        margin-bottom: 30px;
        color: #15385e;
        font-weight: bold;
        text-align: right;
        position: relative;
        align-items: center;
        display: flex;
        &::before {
          content: '';
          display: block;
          background: transparent
            linear-gradient(180deg, #243e7a 0%, #116cc8 0%, #25427f 100%) 0% 0%
            no-repeat padding-box;
          border: 1px solid #707070;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          opacity: 1;
          margin-left: 10px;
        }
      }
    }
    a.btn {
      position: absolute;
      left: 50%;
      bottom: -20px;
      transform: translateX(-50%);
    }
  }
  &.active {
    padding: 10px;
    .caption {
      a.btn {
        background: #ffffff 0% 0% no-repeat padding-box;
        color: #185baa;
        border: 2px solid #185baa !important;
        bottom: -28px;
      }
    }
  }
}
</style>
