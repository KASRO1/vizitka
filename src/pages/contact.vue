<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Main from "@/pages/main.vue";
const currentPage = "contact";
</script>

<template>
  <Header :active="currentPage"/>

  <main>



    <section class="container text-center " style="margin-bottom: 150px;">
      <h1 style="font-size: 12vw;">Связь со мной!</h1>
      <div class="d-flex gap-2">
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
        <a style="background-color: black; color: white;"
           class="scroll__down_btn element_up justify-content-center m-auto ">
          Zelenka
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
      </div>

    </section>

  </main>
  <Footer/>
</template>

<style scoped>

</style>