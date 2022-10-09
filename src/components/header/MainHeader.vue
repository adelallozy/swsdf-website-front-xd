<template>
  <div
    class="top-header"
    id="top-header"
    :class="routerName == 'home' ? 'home-page' : ''"
  >
    <img src="@/assets/top-header.png" alt="top-headerBg" />
    <nav>
      <div class="container">
        <div class="navbar p-0 navbar-expand-lg navbar-dark">
          <div class="container p-0">
            <router-link class="navbar-brand m-0" to="/">
              <img src="@/assets/logo.png" alt="logo" />
            </router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse justify-content-center navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mb-lg-0">
                <li class="nav-item">
                  <router-link
                    class="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    {{ $t('navs.main') }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">
                    {{ $t('navs.diving') }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">
                    {{ $t('navs.marineSports') }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/diving-center">
                    {{ $t('navs.divingCenters') }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">
                    {{ $t('navs.competitions') }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="user">
          <router-link to="/login">
            <i class="fa-regular fa-user"></i>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerName: '',
    }
  },

  mounted() {
    this.routerName = this.$route.name
  },
  watch: {
    $route() {
      this.routerName = this.$route.name
    },
  },
}
</script>

<style lang="scss">
.top-header {
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 125px;
    max-height: 300px;
  }
  &.home-page {
    > img {
      display: none;
    }
  }
  nav {
    position: relative;
    z-index: 10;
    max-height: 50px;
    @media (min-width: 768px) {
      max-height: 80px;
    }
    @media (min-width: 992px) {
      min-height: 100px;
    }
  }
  nav .container {
    display: flex;
    align-items: baseline;
    .user {
      font-size: 28px;
      color: #fff;
      margin-left: 10px;
    }
    .navbar {
      flex: 1;
      color: #fff;

      .navbar-brand {
        img {
          max-height: 50px;
          @media (min-width: 768px) {
            max-height: 80px;
          }
        }
      }
      .navbar-nav {
        .nav-item {
          //   width: calc(100% / 5);
          padding: 0 20px;
          a {
            font-size: 18px;
            color: #fff;
          }
        }
      }
    }
  }

  &.home-page {
    position: absolute;
    top: 0;
    z-index: 100;
    left: 0;
    width: 100%;
  }
}

.is-rtl {
  .top-header {
    nav .container {
      .user {
        margin-left: 0px;
        margin-right: 10px;
      }
    }
  }
}
</style>
