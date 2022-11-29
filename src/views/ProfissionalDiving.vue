<template>
  <section class="profissional-diving">
    <h2 class="title">
      <span><img src="@/assets/getintouch/2.png" alt="header" /></span>
      الغواص المحترف
    </h2>

    <div class="content">
      <div class="about">
        <div class="container">
          <div class="col-md-8 ms-auto">
            <div class="info p-30">
              <p>
                حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
                القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
                الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
                تعطي توزيعاَ
              </p>
              <a href="#" class="btn btn-primary custom-btn" id="register-btn">
                تسجيل
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="features">
        <div>
          <h3 class="title">مميزات خاصة</h3>

          <div class="feature">
            <ul class="list-unstyled">
              <li>حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء</li>
              <li>
                لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              </li>
              <li>
                للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
              </li>
              <li>ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ</li>
            </ul>
          </div>
          <div class="feature">
            <h3 class="title">خطوات التسجيل</h3>
            <ul class="list-unstyled">
              <li>فتح رابط التسجيل</li>
              <li>تعبئة النموج</li>
              <li>مراجعة الطلب</li>
              <li>اصدار الفاتورة</li>
              <p>رسوم الرخصة 2000 ريال في عام 2022</p>
            </ul>
          </div>
          <div class="feature">
            <h3 class="title">خطوات التسجيل</h3>
            <ul class="list-unstyled">
              <li>فتح رابط التسجيل</li>
              <li>تعبئة النموج</li>
              <li>مراجعة الطلب</li>
              <li>اصدار الفاتورة</li>
              <p>رسوم الرخصة 2000 ريال في عام 2022</p>
            </ul>
          </div>
          <div class="feature">
            <h3 class="title">المستندات المطلوبة</h3>
            <ul class="list-unstyled">
              <li>شهادة عضوية سارية</li>
              <li>بطاقة الهوية</li>
              <li>شهادة عضوية سارية</li>
              <li>بطاقة الهوية</li>
              <li>شهادة عضوية سارية</li>
              <li>بطاقة الهوية</li>
            </ul>
          </div>
          <div class="feature">
            <h3 class="title">الفحص الفني لمركز الغوص</h3>

            <div class="feature">
              <ul class="list-unstyled">
                <li>حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء</li>
                <li>
                  لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
                </li>
                <li>
                  للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                </li>
                <li>
                  ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  let registerBtn = document.getElementById('register-btn')
  document.addEventListener('scroll', () => {
    if (window.scrollY > registerBtn.offsetTop) {
      registerBtn.classList.add('position-fixed')
    } else if (window.scrollY <= registerBtn.offsetTop) {
      if (registerBtn.classList.contains('position-fixed')) {
        registerBtn.classList.remove('position-fixed')
      }
    }
  })
})
</script>

<style lang="scss">
.profissional-diving {
  .info {
    p {
      color: #010d0f;
      font-weight: bold;
      line-height: 1.7;
    }
    a {
      position: absolute;
      padding-left: 50px !important;
      left: 0;
      top: 50%;
      z-index: 20;
      transform: translateY(-50%);
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      border-top-right-radius: 30px !important;
      border-bottom-right-radius: 30px !important;
      &.position-fixed {
        top: 30px;
        left: 0;
        transform: unset;
      }
    }
  }
  .features {
    position: relative;
    // background: #f0f5fc 0% 0% no-repeat padding-box;
    // box-shadow: 0px 9px 8px #00000012;
    // border-radius: 45px;
    padding: 50px 30px 100px;
    > img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    h3 {
      font-size: 18px;
      @media (min-width: 768px) {
        font-size: 24px;
      }
      text-align: start;
    }
    ul {
      padding: 0 10px 25px;
      padding-inline-start: 30px;
      margin: 0;
      p {
        font-weight: bold;
        position: relative;
        color: #010d0f;
      }
      li {
        margin-bottom: 20px;
        font-weight: bold;
        position: relative;
        color: #010d0f;

        &::before {
          content: '';
          display: inline-block;
          margin-left: 10px;
          background: transparent
            linear-gradient(180deg, #243e7a 0%, #116cc8 0%, #25427f 100%) 0% 0%
            no-repeat padding-box;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
