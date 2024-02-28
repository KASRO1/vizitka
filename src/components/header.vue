<script >
export default {
  props: ['active'],

}
</script>

<template>
  <header class="header_block">
    <section class="fixed_header">
      <nav class="burger">
        <div class="navbar">
          <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines ">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <div class="logo">
              <h1 class="h2">XCode <span style="position: relative; bottom: 10px"><svg
                  xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
                  fill="none">
                                        <path
                                            d="M13.395 12.7998C11.942 14.2528 10.1547 14.9792 8.0329 14.9792C5.91113 14.9792 4.11223 14.2528 2.63621 12.7998C1.18326 11.3469 0.456787 9.57103 0.456787 7.47232C0.456787 5.37362 1.18326 3.60932 2.63621 2.17943C4.11223 0.726475 5.91113 0 8.0329 0C10.1547 0 11.942 0.726475 13.395 2.17943C14.871 3.60932 15.609 5.37362 15.609 7.47232C15.609 9.57103 14.871 11.3469 13.395 12.7998ZM3.81241 3.21725C2.7054 4.34732 2.1519 5.76568 2.1519 7.47232C2.1519 9.17897 2.7054 10.6089 3.81241 11.762C4.94249 12.8921 6.34932 13.4571 8.0329 13.4571C9.71648 13.4571 11.1118 12.8921 12.2188 11.762C13.3489 10.6089 13.9139 9.17897 13.9139 7.47232C13.9139 5.76568 13.3489 4.34732 12.2188 3.21725C11.1118 2.08718 9.71648 1.52214 8.0329 1.52214C6.34932 1.52214 4.94249 2.08718 3.81241 3.21725ZM5.36915 10.8971V3.80535H8.89775C9.63576 3.80535 10.2354 4.00138 10.6966 4.39345C11.1579 4.78552 11.3885 5.2929 11.3885 5.91559C11.3885 6.35378 11.2501 6.73432 10.9734 7.05719C10.6966 7.38007 10.3276 7.58764 9.86638 7.67989C10.6044 7.84133 10.9965 8.32565 11.0426 9.13284L11.1118 10.1361C11.1579 10.5743 11.204 10.828 11.2501 10.8971H9.58963C9.54351 10.828 9.49738 10.5973 9.45125 10.2053L9.38206 9.23662C9.33594 8.61393 9.03612 8.30258 8.48262 8.30258H7.02967V10.8971H5.36915ZM7.02967 7.19557H8.5864C9.32441 7.19557 9.69341 6.81504 9.69341 6.05397C9.69341 5.75415 9.58963 5.51199 9.38206 5.32749C9.1745 5.14299 8.90928 5.05074 8.5864 5.05074H7.02967V7.19557Z"
                                            fill="black" />
                                    </svg></span></h1>
            </div>
            <div class="menu-items">
              <li><router-link :class="{ 'active': active === 'main' }" to="/">Основное</router-link></li>
              <li><router-link :class="{ 'active': active === 'projects' }" to="/projects">Проекты</router-link></li>
              <li><router-link :class="{ 'active': active === 'about' }" to="/about" >Обо мне</router-link></li>
              <li><router-link :class="{ 'active': active === 'contact' }" to="/contact" >Связь</router-link></li>
            </div>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row text-center ">
          <div class="header__logo">
            <h1 class="mb-4 h2">XCode <span style="position: relative; bottom: 10px"><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
                fill="none">
                                        <path
                                            d="M13.395 12.7998C11.942 14.2528 10.1547 14.9792 8.0329 14.9792C5.91113 14.9792 4.11223 14.2528 2.63621 12.7998C1.18326 11.3469 0.456787 9.57103 0.456787 7.47232C0.456787 5.37362 1.18326 3.60932 2.63621 2.17943C4.11223 0.726475 5.91113 0 8.0329 0C10.1547 0 11.942 0.726475 13.395 2.17943C14.871 3.60932 15.609 5.37362 15.609 7.47232C15.609 9.57103 14.871 11.3469 13.395 12.7998ZM3.81241 3.21725C2.7054 4.34732 2.1519 5.76568 2.1519 7.47232C2.1519 9.17897 2.7054 10.6089 3.81241 11.762C4.94249 12.8921 6.34932 13.4571 8.0329 13.4571C9.71648 13.4571 11.1118 12.8921 12.2188 11.762C13.3489 10.6089 13.9139 9.17897 13.9139 7.47232C13.9139 5.76568 13.3489 4.34732 12.2188 3.21725C11.1118 2.08718 9.71648 1.52214 8.0329 1.52214C6.34932 1.52214 4.94249 2.08718 3.81241 3.21725ZM5.36915 10.8971V3.80535H8.89775C9.63576 3.80535 10.2354 4.00138 10.6966 4.39345C11.1579 4.78552 11.3885 5.2929 11.3885 5.91559C11.3885 6.35378 11.2501 6.73432 10.9734 7.05719C10.6966 7.38007 10.3276 7.58764 9.86638 7.67989C10.6044 7.84133 10.9965 8.32565 11.0426 9.13284L11.1118 10.1361C11.1579 10.5743 11.204 10.828 11.2501 10.8971H9.58963C9.54351 10.828 9.49738 10.5973 9.45125 10.2053L9.38206 9.23662C9.33594 8.61393 9.03612 8.30258 8.48262 8.30258H7.02967V10.8971H5.36915ZM7.02967 7.19557H8.5864C9.32441 7.19557 9.69341 6.81504 9.69341 6.05397C9.69341 5.75415 9.58963 5.51199 9.38206 5.32749C9.1745 5.14299 8.90928 5.05074 8.5864 5.05074H7.02967V7.19557Z"
                                            fill="black" />
                                    </svg></span></h1>

          </div>
        </div>
      </div>
      <div class="header">
        <router-link to="/" :class="{ 'header-nav__el': true, 'active': active === 'main' }"> Основное</router-link >
        <router-link to="projects" :class="{ 'header-nav__el': true, 'active': active === 'projects' }">Проекты</router-link>
        <router-link to="about"  :class="{ 'header-nav__el': true, 'active': active === 'about' }">Обо мне</router-link>
        <router-link to="contact" :class="{ 'header-nav__el': true, 'active': active === 'contact' }">Связь</router-link>

      </div>
    </section>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");



.container {
  max-width: 1050px;
  width: 100%;
  margin: auto;
}

.navbar {
  width: 100%;
  box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
}
.menu-items{
  background: white;
}
.navbar .menu-items {
  display: flex;
}

.navbar .nav-container li {
  list-style: none;
}

.navbar .nav-container a {
  text-decoration: none;
  color: #0e2431;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.7rem;
}
.navbar .nav-container a.active {
  color: #0e2431;
  border-bottom: 2px solid #0e2431;
}
.navbar .nav-container a:hover {
  color: #0e2431;
  border-bottom: 2px solid #0e2431;
}

.nav-container {
  display: block;
  position: relative;
  height: 60px;
  padding: 0px;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #0e2431;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.navbar .menu-items {
  padding-top: 120px;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 1);
  height: 100vh;
  width: 100%;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  //margin-left: -40px;
  //padding-left: 50px;
  transition: transform 0.5s ease-in-out;
  text-align: center;
}

.navbar .menu-items li {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;

}

.logo {
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 1.2rem;
  color: #0e2431;
}


.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo{
  display: none;
}

</style>