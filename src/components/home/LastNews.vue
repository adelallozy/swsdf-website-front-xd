<template>
  <section class="last-news">
    <div class="container">
      <h2 class="title">اخر الاخبار</h2>
      <div class="content">
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-5" v-for="n in 3" :key="n">
            <div class="card-news">
              <div class="inner">
                <img
                  class="img-fluid"
                  src="@/assets/newsbg.png"
                  alt="news-image"
                />
                <div class="info">
                  <img
                    class="img-fluid"
                    src="@/assets/newsbg1.png"
                    alt="news-image"
                  />
                  <div class="text">
                    <h3>عنوان الخبر كاملا</h3>
                    <p>
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                      توضع الفقرات ...........هناك حقيقة مثبتة منذ زمن طويل وهي
                      أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على
                      الشكل الخارجي للنص أو شكل توضع الفقرات ...........
                    </p>
                    <a href="#" class="btn btn-primary">إقرأ الان</a>
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
.last-news {
  padding: 50px 0;
  position: relative;
  .card-news {
    position: relative;
    .info {
      position: relative;
      img {
        position: absolute;

        bottom: 0;
      }
      .text {
        position: absolute;
        bottom: 0;
        padding: 20px;
        padding-bottom: 50px;
        h3 {
          color: #2a6cca;
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 10px;
          padding-right: 15px;
        }
        p {
          -webkit-line-clamp: 3;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0;
          color: #2a6cca;
          font-size: 14px;
          font-weight: bold;
        }
        a.btn {
          position: absolute;
          bottom: -20px;
          left: 50%;
          color: #314e92 !important;
          transform: translateX(-50%);
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: 0px 0px 20px #0000003b;
          border-radius: 10px;
          border: 0 !important;
          padding: 10px 20px;
          font-weight: bold;
          opacity: 1;
        }
      }
    }
  }
}
</style>
