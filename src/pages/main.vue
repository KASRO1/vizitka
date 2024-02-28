<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
const currentPage = "main";
</script>

<template>
  <Header :active="currentPage"/>
  <main>
    <section class="container ">
      <h1 class="h1_main text-center ">
        Websites&
        Desktop

      </h1>
    </section>
    <div class="container pt-4 d-flex justify-content-end ">
      <a id="scroll_down" class="scroll__down_btn element_up">
        SCROLL DOWN
        <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                        <g clip-path="url(#clip0_20_530)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.02722 13.1657C7.3145 12.8537 7.66169 12.4914 8.05373 12.1103C9.1898 11.0057 10.745 9.70094 12.335 9.03846L12.7196 9.96154C11.3095 10.5491 9.86474 11.7443 8.75081 12.8272C8.1993 13.3634 7.73931 13.8617 7.41747 14.2257C7.25668 14.4076 7.13071 14.5555 7.04541 14.6574C7.00277 14.7083 6.97032 14.7477 6.94878 14.7741L6.92477 14.8036L6.91909 14.8106L6.91785 14.8122L6.52727 15.3004L6.1369 14.8124L6.13545 14.8106L6.12976 14.8036L6.10575 14.7741C6.08422 14.7477 6.05177 14.7083 6.00912 14.6574C5.92383 14.5555 5.79786 14.4076 5.63707 14.2257C5.31523 13.8617 4.85524 13.3634 4.30373 12.8272C3.1898 11.7443 1.74502 10.5491 0.334961 9.96154L0.719576 9.03846C2.30951 9.70094 3.86474 11.0057 5.00081 12.1103C5.39281 12.4914 5.73996 12.8537 6.02722 13.1656V0.5H7.02722V13.1657Z"
                                  fill="black" stroke="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_20_530">
                                <rect width="13" height="15" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
      </a>
    </div>
    <section class="container info_container">
      <div>
        <p class="talk_me m-0 ">Напиши мне</p>
        <a href="#" class="d-flex  gap-1 element_up"><i class="bi text-primary  bi-telegram"></i>KASRO3</a>
      </div>
      <p class="info_p">
        👋 Привет! Это визитка проф.разработчика <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                     fill="none" viewBox="0 0 47 47" class="css-ssgmig">
        <path fill="currentColor" fill-rule="evenodd"
              d="M23.5 42.36a18.86 18.86 0 1 0 0-37.72 18.86 18.86 0 0 0 0 37.72Zm0 3.64a22.5 22.5 0 1 0 0-45 22.5 22.5 0 0 0 0 45Z"
              clip-rule="evenodd"></path>
        <path fill="currentColor" fill-rule="evenodd"
              d="m12.64 29.86-4.23-5.09-1.07-1.28 1.07-1.28 4.23-5.08h5.21l-5.3 6.36 5.3 6.37h-5.2Zm6.33 0 5.09-12.73h4.3l-5.09 12.73h-4.3Zm15.38 0h-5.21l5.3-6.37-5.3-6.36h5.2l4.24 5.08 1.07 1.28-1.07 1.28-4.23 5.09Z"
              clip-rule="evenodd"></path>
      </svg>
        <br>Я могу создать для тебя сайт любой сложности, будь то лендинг, интернет-магазин или крипто-биржа
      </p>
    </section>

    <section style="margin-bottom: 150px;" class="container ">
      <div class="d-flex mb-5 justify-content-between ">
        <div>
          <h1 class="h2">
            Мои проекты
          </h1>
          <p class="info_p m-0 ">
            Ниже представлены мои крупные проекты, которые я делал для себя и для других людей.<br> Надеюсь
            и твой проект окажется здесь 🙃
          </p>
        </div>
        <div class="d-flex flex-column justify-content-end align-items-end ">
          <div class="flex gap-2 align-items-center element_up" style="cursor: pointer;">
            Ещё
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
              <g clip-path="url(#clip0_20_519)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12.6657 6.47278C12.3537 6.1855 11.9914 5.83831 11.6103 5.44627C10.5057 4.3102 9.20094 2.755 8.53846 1.165L9.46154 0.7804C10.0491 2.1905 11.2443 3.63526 12.3272 4.74919C12.8634 5.3007 13.3617 5.76069 13.7257 6.08253C13.9076 6.24332 14.0555 6.36929 14.1574 6.45459C14.2083 6.49723 14.2477 6.52968 14.2741 6.55122L14.3036 6.57523L14.3106 6.58091L14.3122 6.58215L14.8004 6.97273L14.3124 7.3631L14.3106 7.36455L14.3036 7.37024L14.2741 7.39425C14.2477 7.41578 14.2083 7.44823 14.1574 7.49088C14.0555 7.57617 13.9076 7.70214 13.7257 7.86293C13.3617 8.18477 12.8634 8.64476 12.3272 9.19627C11.2443 10.3102 10.0491 11.755 9.46154 13.165L8.53846 12.7804C9.20094 11.1905 10.5057 9.63526 11.6103 8.49919C11.9914 8.10719 12.3537 7.76004 12.6656 7.47278L-2.48817e-07 7.47278L-2.92528e-07 6.47278L12.6657 6.47278Z"
                      fill="black" stroke="black" />
              </g>
              <defs>
                <clipPath id="clip0_20_519">
                  <rect width="13" height="15" fill="white"
                        transform="translate(0 13.5) rotate(-90)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

      </div>


      <div class="row">
        <div class="col-md-6 mb-3 ">
          <div class="card border-0">
            <div style="background: linear-gradient(104deg, #3A5418 -2.44%, #52F3D6 100%);" class="portfolio_image">
              <img style="width: 400px; border-radius: 20px; transform: scale(1) rotate(  6deg); position: relative; top: 30px; left: 40px;" class="transform_animate" src="@/assets/img/work1/screen1.png">
              <img style="width: 300px; border-radius: 20px; transform: scale(1) rotate(  -24deg); position: relative; top: 50px; left: 50px;" class="transform_animate" src="@/assets/img/work1/screen2.png">
              <img style="width: 400px; border-radius: 20px; transform: scale(.7) rotate(  24deg); position: relative; top: -40px; left: 210px;" class="transform_animate" src="@/assets/img/work1/screen3.png">

            </div>

            <p class="title_portfolio mb-1">
              Криптобиржа №1
            </p>
            <p class="description_portfolio">
              Уникальная разработка под команду. Реализовано множество фунционала, воркер, админ панель, генерация кошельков, автовывод, шаблоны, и многое другое.
            </p>
          </div>
        </div>
        <div class="col-md-6 mb-3 ">
          <div class="card border-0">
            <div style="background: linear-gradient(104deg, #f75fcc -2.44%, #8d52f3 100%);" class="portfolio_image">
              <img style="width: 400px; border-radius: 20px; transform: scale(1) rotate(  -20deg); position: relative; top: 30px; left: 0px;" class="transform_animate" src="@/assets/img/work2/screen1.png">
              <img style="width: 300px; border-radius: 20px; transform: scale(1) rotate(  24deg); position: relative; top: -30px; left: 250px;" class="transform_animate" src="@/assets/img/work2/screen2.png">
              <img style="width: 400px; border-radius: 20px; transform: scale(.7) rotate(  -4deg); position: relative; top: -140px; left: 0px;" class="transform_animate" src="@/assets/img/work2/screen3.png">

            </div>
            <p class="title_portfolio mb-1">
              Криптобиржа №2
            </p>
            <p class="description_portfolio">
              Уникальная разработка под команду. Реализовано множество фунционала, P2P, Фиатная платежка, воркер, админ панель, генерация кошельков, автовывод, шаблоны, и многое другое.
            </p>
          </div>
        </div>
        <div class="col-md-6 mb-3 ">
          <div class="card border-0">
            <div style="background: linear-gradient(104deg, #5ff7d6 -2.44%, #ff0000 100%);" class="portfolio_image">
              <img style="width: 400px; border-radius: 20px; transform: scale(.7) rotate(  20deg); position: relative; top: 30px; left: 150px;" class="transform_animate" src="@/assets/img/work3/screen1.png">
              <img style="width: 300px; border-radius: 20px; transform: scale(1) rotate(  -24deg); position: relative; top: -20px; left: 0px;" class="transform_animate" src="@/assets/img/work3/screen2.png">
              <img style="width: 400px; border-radius: 20px; transform: scale(.7) rotate(  4deg); position: relative; top: -80px; left: 200px;" class="transform_animate" src="@/assets/img/work3/screen3.png">

            </div>
            <p class="title_portfolio mb-1">
              Фишинг Epic Games
            </p>
            <p class="description_portfolio">
              Реализована админ панель, уведомления, возможность управлением мамонта, 2FA, история данных</p>
          </div>
        </div>
        <div class="col-md-6 mb-3 ">
          <div class="card border-0">
            <div style="background: linear-gradient(104deg, #ffc800 -2.44%, #ffae00 100%);" class="portfolio_image d-flex justify-content-center align-items-center ">
              <h1 class="h1">DRAINER BOT</h1>
            </div>
            <p class="title_portfolio mb-1">
              Бот под дрейнер
            </p>
            <p class="description_portfolio">
              Бот телеграм который связан с апи дрейнера, предоставляет возможности привязка доменов, выбор дизайна, уведомления, статистика, смена ника и т.д.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="container ">
      <div class="d-flex mb-5 justify-content-between ">
        <div>
          <h1 class="h2">
            Что я умею
          </h1>

        </div>
      </div>
      <div class="row ">
        <div class="col-md-6  mb-5">
          <div class="card border-0">
            <h3 class="h4 mb-4" style="font-weight: 500;">
              Разработка сайтов с нуля
            </h3>
            <p class="description_portfolio">
              Разрабатываю сайты любой сложности под ключ на профессиональном уровне. Занимаюсь
              разработкой более 3-ех лет, знаю как создать сайт, который будет продавать

            </p>
          </div>
        </div>
        <div class="col-md-6  mb-5">
          <div class="card border-0">
            <h3 class="h4 mb-4" style="font-weight: 500;">
              Разработка ботов
            </h3>
            <p class="description_portfolio">
              Занимаюсь разработкой ботов Telegram любой сложности под ваши цели. Будь то это магазин, или
              бот для команды трафферов

            </p>
          </div>
        </div>

        <div class="col-md-6  mb-5">
          <div class="card border-0">
            <h3 class="h4 mb-4" style="font-weight: 500;">
              Копирование сайтов
            </h3>
            <p class="description_portfolio">
              Делаю копии любой сложности, индивиндуальный подход к каждой копии, уникализация, перепись
              под тебя, изменение цветовых палитр, вырезание лишних блоков, скриптов, добавление новых,
              добавление админ панели, перестроение под вайты, короче все что тебе нужно.<br> Не
              справились другие? Пиши мне!
            </p>
          </div>
        </div>
        <div class="col-md-6  mb-5">
          <div class="card border-0">
            <h3 class="h4 mb-4" style="font-weight: 500;">
              Доработка чужих проектов
            </h3>
            <p class="description_portfolio">
              Работаю с чужими проектами, поломанными, недоработанными, не важно, сделаю все что нужно.
              Быстро осваиваюсь и вливаюсь в работу </p>
          </div>
        </div>
        <div class="col-md-6  mb-5">
          <div class="card border-0">
            <h3 class="h4 mb-4" style="font-weight: 500;">
              Автоматизации
            </h3>
            <p class="description_portfolio">
              Разрабатываю скрипты которые автоматизируют твою работу, будь то это парсинг, автоматическое
              создание аккаунтов, заполнение заявок, и т.д.
            </p>
          </div>
        </div>
        <div class="col-md-6  mb-5">
          <div class="card border-0">
            <h3 class="h4 mb-4" style="font-weight: 500;">
              Курсовые/Практические работы
            </h3>
            <p class="description_portfolio">
              Сдам твою курсовую работу за тебя, от сайта до программы. Документации, пояснительные
              записки и прочую ерунду не пишу.
            </p>
          </div>
        </div>
        <div class="col-md-6  mb-5">
          <div class="card border-0">
            <h3 class="h4 mb-4" style="font-weight: 500;">
              Верстаю макеты
            </h3>
            <p class="description_portfolio">
              Верстаю макеты любой сложности, с анимациями, 3D-моделями, и прочими приколами
            </p>
          </div>
        </div>
        <div class="col-md-6  mb-5">
          <div class="card border-0">
            <h3 class="h4 mb-4" style="font-weight: 500;">
              Установка на сервер
            </h3>
            <p class="description_portfolio">
              Поставлю тебе любой проект на сервер, будь то это VPS, VDS, или обычный хостинг, с
              инструкцией и без, большой опыт в деплое проектов.
            </p>
          </div>
        </div>

      </div>
      <div class="text-center   mb-5">
        <h1 class="h4" style="font-weight: 300;">Не увидел то что тебе нужно? Напиши мне, может что придумаем
        </h1>
      </div>
    </section>

    <section class="banner_section">
      <div id="banner_content">BACKEND FRONTEND FULLSTACK. I can do anything. BACKEND FRONTEND FULLSTACK. Я смогу
        все. </div>
    </section>

    <section class="container text-center " style="margin-bottom: 150px;">
      <h1 style="font-size: 12vw;">Напиши мне!</h1>
      <a style="background-color: black; color: white;"
         class="scroll__down_btn element_up justify-content-center m-auto ">
        Telegram
        <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_20_468)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.28 5.97445C12.8563 5.99193 12.3546 6.00262 11.8079 5.99488C10.2235 5.97263 8.20119 5.79554 6.60845 5.13969L6.98921 4.21502C8.40177 4.79664 10.2685 4.97311 11.8219 4.99505C12.591 5.00587 13.2686 4.97878 13.7536 4.94897C13.9959 4.93404 14.1896 4.91854 14.3219 4.9068C14.3881 4.90096 14.4389 4.89604 14.4728 4.89261L14.5106 4.88873L14.5196 4.88779L14.5216 4.88754L15.143 4.81851L15.074 5.43961L15.0737 5.44191L15.0728 5.45088L15.0689 5.48872C15.0655 5.52261 15.0605 5.57342 15.0547 5.63957C15.043 5.77193 15.0275 5.96559 15.0125 6.2079C14.9827 6.69287 14.9556 7.37048 14.9665 8.13961C14.9884 9.693 15.1649 11.5597 15.7465 12.9723L14.8218 13.353C14.166 11.7603 13.9889 9.73802 13.9666 8.15362C13.9589 7.60696 13.9696 7.1053 13.987 6.68163L5.03112 15.6376L4.32401 14.9305L13.28 5.97445Z"
                                  fill="white" stroke="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_20_468">
                                <rect width="13" height="15" fill="white"
                                      transform="translate(9.29297 19.8994) rotate(-135)" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
      </a>
    </section>
  </main>
  <Footer/>
</template>

<style scoped>

</style>