<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Main from "@/pages/main.vue";
const currentPage = "about";
</script>

<template >
  <Header :active="currentPage"/>
  <main>
    <section class="container d-flex">
      <h1 class="h1_about" >
        Кто я такой?
      </h1>

    </section>
    <section class="container">
      <p class="info_p" style="max-width: none;">
        Я веб-разработчик который прошел путь развития через опыт, я занимаюсь коммерческой разработкой более 1.5 лет и
        обширным опытом более 4 лет. Мой стек технологий включает в себя языки программирования C#,
        JavaScript, PHP, Python, HTML, CSS, SCSS, SASS и Node.js,. Я работаю со многими фреймворками фронтенд и бекенд разработки.
      </p>

    </section>
    <section class=" ">
      <div class="container">
        <div class="">
          <div>
            <h1 class="h1_about mb-3">
              Почему я?
            </h1>
            <div class="about_why_i ">
              <div class="d-flex flex-column gap-1 with_me_card element_up">
                <div class="with_me_logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                  </svg>
                </div>
                <p style="font-size: 18px; font-weight: 500;">Клиентоорентированость</p>
                <p>Клиентоориентированность - ключевой принцип, который направляет мою работу. Я стремлюсь понимать потребности и ожидания клиентов, чтобы создавать решения, которые не только соответствуют их требованиям, но и превосходят их ожидания.</p>
              </div>
              <div class="d-flex flex-column gap-1 with_me_card element_up">
                <div class="with_me_logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
                  </svg>
                </div>
                <p style="font-size: 18px; font-weight: 500;">Креативность</p>
                <p>Для меня креативность - это просто способ подходить к вопросам и задачам. Я стараюсь искать необычные идеи и решения, чтобы приносить свежий взгляд в работу. В итоге это помогает создавать что-то интересное и уникальное.</p>
              </div>
              <div class="d-flex flex-column gap-1 with_me_card element_up">
                <div class="with_me_logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-stars" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg>
                </div>
                <p style="font-size: 18px; font-weight: 500;">Профессиональный подход</p>
                <p>Мой профессиональный подход к работе базируется на системности, внимательности к деталям и стремлении к качеству. Я уделяю особое внимание выполнению задач согласно высоким стандартам, использую передовые методы и инструменты, чтобы достичь наилучших результатов.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

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