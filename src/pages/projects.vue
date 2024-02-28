<script >
import axios from "axios";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  name: 'Projects',
  components:{
    Header, Footer
  },
  data() {
    return {
      currentPage: 'projects',
      orders: "",
      totalPriceOrder: 0,
    }
  },
  methods: {
    async getOrders() {
      const response = axios.get('https://api.xcode-dev.com/api/orders').then(response => {
        this.orders = response.data;
        this.orders.forEach(order => {
          this.totalPriceOrder += parseInt(order.price);
        });
      });

    }
  },
  mounted() {
    this.getOrders();

  }

}

</script>

<template>
  <Header :active="currentPage"/>
  <main>

    <section class="container">
      <div class="d-flex mb-5 justify-content-between ">
        <div>
          <h1  class="h2">
            Основные проекты
          </h1>

        </div>
        <div
            class="d-flex flex-column justify-content-end align-items-end ">
          <div class="flex gap-2 align-items-center element_up"
               style="cursor: pointer;">
            Общая сумма заказов: $ {{totalPriceOrder}}

          </div>
        </div>

      </div>
      <div class="grid-cards">
        <div v-for="order in orders" :key="order.id"  class="grid-card element_up">
          <img class="grid_img" v-bind:src="'/src/assets/img/project_image/' + order.img + '.png'" alt>

          <div class="grid-card__content">
            <h3 class="h3">{{order.title}}</h3>
            <p class="info_p">{{order.description}}</p>
            <div style="line-height: 30px; overflow-wrap: anywhere;" >
              <span class="tag tag-money">$ {{order.price}}</span>
              <span v-for="stack in order.stack.split(',')" :key="stack" :class="['tag', 'tag-' + stack.toLowerCase()]">{{ stack }}</span>


            </div>
          </div>

        </div>

      </div>
    </section>
  </main>
  <Footer/>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>