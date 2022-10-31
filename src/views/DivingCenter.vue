<template>
  <section class="diving-center">
    <div class="container">
      <h2 class="title">
        <span><img src="@/assets/getintouch/2.png" alt="" /></span>
        مراكز الغوص
      </h2>

      <div class="content">
        <div class="about">
          <div class="row">
            <div class="col-md-6">
              <div class="image p-30">
                <img
                  src="@/assets/diving-about.png"
                  class="img-fluid mb-4 mb-md-0"
                  alt="diving-center"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="info p-30">
                <p>
                  حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
                  القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
                  في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم
                  لأنها تعطي توزيعاَ
                </p>
                <a href="#" class="btn btn-primary custom-btn">
                  تسجيل
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 80px;"></div>

        <div class="features">
          <img
            src="@/assets/section-vector.png"
            alt="sectionBg"
            class="img-fluid"
          />
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

        <div style="height: 40px;"></div>
        <a href="#" class="btn btn-primary custom-btn mx-auto">
          تسجيل
          <span></span>
        </a>
        <div style="height: 40px;"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.diving-center {
  .info {
    p {
      color: #010d0f;
      font-weight: bold;
      line-height: 1.7;
    }
    a {
      margin-top: 30px;
    }
  }
  .features {
    position: relative;
    background: #f0f5fc 0% 0% no-repeat padding-box;
    box-shadow: 0px 9px 8px #00000012;
    border-radius: 45px;
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
