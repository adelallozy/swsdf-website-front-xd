<template>
  <section class="profissional-diving">
    <div class="content">
      <h2 class="title" >
      <span><img src="@/assets/getintouch/2.png" alt="header" /></span>
      الغواص المحترف
    </h2>
    </div>


    <div class="content">
      <div class="about">
        <div class="container">
          <div class="col-md-8 ms-auto">
            <div class="info p-30">
              <p styl="text-align: justify;">تعد وثيقة رسمية تصدر من الاتحاد السعودي للرياضات البحرية والغوص، توضح بأن الغواص الحاصل عليها مؤهل ومصرح له ومعتمد نظاماً من الاتحاد بممارسة أنشطة الغوص الاحترافية. ويعتبر هذا الترخيص شرط أساسي لكل غواص محترف يرغب في ممارسة أي من أنشطة الغوص الإحترافية (التدريب ، الإرشاد)، ولا يشترط الحصول على هذا الترخيص للأشخاص الذين يمارسون الغوص بشكل شخصي .</p>
              <a href="#" class="btn btn-primary custom-btn" id="register-btn">
                التقديم
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="features">
          <div class="list-block">
            <h3 class="title">خطوات التقديم:</h3>

            <div class="feature">
              <ol  >
                <li>إنشاء حساب للمستخدم .</li>
                <li>عبئة نماذج ترخيص الغواص المحترف .</li>
                <li>إرفاق جميع المستندات المطلوبة (نسخة الهوية ، صورة شخصية ، نسخة الرخصة الدولية ).</li>
                <li>إرسال طلب الحصول على الترخيص.</li>
                <li>يقوم مسئولي الاتحاد بمراجعة معلومات المتقدم والتحقق من صحة البيانات المدخلة . </li>
                <li>تسديد رسوم الترخيص .</li>
                <li>قبول الطلب وإصدار الترخيص. </li>
              </ol>
            </div>
          </div>

          <div class="list-block">
            <h3 class="title">المستندات المطلوبة:</h3>

            <div class="feature">
              <ol  >
                <li>نسخة الهوية الوطنية أو إقامة سارية . </li>
                <li>صورة شخصية بخلفية بيضاء . </li>
                <li>نسخة من رخصة الغواص المحترف الصادرة من أحد منظمات الغوص الدولية المعتمدة من الاتحاد في المملكة.</li>
                <li>نسخة عقد العمل مع أحد مراكز الغوص المرخصة من وزارة الرياضة . </li>
              </ol>
            </div>
          </div>
 
          <div class="list-block">
            <h3 class="title">الترخيص:</h3>

            <div class="feature">
              <ol  >
                <li>يصدر الترخيص إلكترونياً بمجرد الموافقة على طلب المتقدم، وتكون متاحة على موقع الاتحاد ولا يشترط الحصول على نسخة مطبوعة من الترخيص  لممارسة أنشطة الغوص الإحترافية . </li>
                <li>يوفر الاتحاد رابط للتحقق من صلاحية الترخيص. </li>
                <li>يمكن للمتقدم طلب الحصول نسخة مطبوعة من الترخيص أثناء تقديم الطلب ، ويكون ذلك مقابل رسوم إضافية 50 ريال، ويتم إرسال الترخيص مطبوع بنسخة بلاستيكية إلى المتقدم على العنوان المحدد بالطلب. </li>
                
              </ol>
            </div>
          </div>

           
          <div class="list-block">
            <h3 class="title">رسوم العضوية :</h3>

            <div class="feature">
              <ol  >
                <li>رسوم إصدار وتجديد رخصة الغواص المحترف بمبلغ 300 ريال لمدة عام واحد من تاريخه وذلك للعام الميلادي 2022م . </li>
                <li>رسوم طباعة بطاقة الترخيص 50 ريال عند الطلب . </li>
              </ol>
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
  li {
    max-width: 780px;
    text-align: justify;
  }
  p {
    max-width: 780px;
    text-align: justify;
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
    .list-block {
      margin-bottom: 1.5rem;
      .title {
        margin-bottom: 0.25rem ;
      }
    }
    h3 {
      font-size: 18px;
      @media (min-width: 768px) {
        font-size: 1.5rem;
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
        // margin-bottom: 20px;
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
