<template>
   <h2>Food page</h2>
   <!-------------- Menu  -------------->
   <div class="main-wrap">
      <h3>Please choose your menu:</h3>
      <div class="content">
         <div class="food-item">
            <div class="label">{{ item1.label }}</div>
            <div class="label">${{ item1.price }}</div>
         </div>
         <div class="button-wrap">
            <div
               class="button-containted"
               v-if="item1.amount > 0"
               @click="updateAmount('minus', item1)">-</div>
            <div class="amount-item">{{ item1.amount }}</div>
            <div class="button-containted" @click="updateAmount('add', item1)">+</div>
         </div>
      </div>
   </div>
   <div class="main-wrap">
      <div class="content">
         <div class="food-item">
            <div class="label">{{ item2.label }}</div>
            <div class="label">${{ item2.price }}</div>
         </div>
         <div class="button-wrap">
            <div
               class="button-containted"
               v-if="item2.amount > 0"
               @click="updateAmount('minus', item2)">-</div>
            <div class="amount-item">{{ item2.amount }}</div>
            <div class="button-containted" @click="updateAmount('add', item2)">+</div>
         </div>
      </div>
   </div>
   <div class="main-wrap">
      <div class="content">
         <div class="food-item">
            <div class="label">{{ item3.label }}</div>
            <div class="label">${{ item3.price }}</div>
         </div>
         <div class="button-wrap">
            <div
               class="button-containted"
               v-if="item3.amount > 0"
               @click="updateAmount('minus', item3)">-</div>
            <div class="amount-item">{{ item3.amount }}</div>
            <div class="button-containted" @click="updateAmount('add', item3)">+</div>
         </div>
      </div>
   </div>
   <!-------------- Total  -------------->
   <div class="main-wrap">
      <div class="total">
         <div>Total:</div>
         <div>
            <b style="font-size: 1.1rem">${{ totalAmount() }}</b>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         item1: {
            label: "Beef Steak",
            price: 30,
            amount: 0,
         },
         item2: {
            label: "Roasted Carrots",
            price: 11,
            amount: 0,
         },
         item3: {
            label: "Phở",
            price: 28,
            amount: 0,
         },
      }
   },
   methods: {
      updateAmount(mode, item) {
         if (mode === "minus") {
            item.amount--
         } else {
            item.amount++
         }
      },
      totalAmount() {
         return (
            this.item1.amount * this.item1.price +
            this.item2.amount * this.item2.price +
            this.item3.amount * this.item3.price
         )
      },
   },
}
</script>

<style lang="scss" scroped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap');
body {
   font-family: 'Mulish', sans-serif;
   font-size: 0.95rem;
   color: #333;

   h2 {
      color: rgb(255, 81, 0);
      font-size: 2rem;
      padding: 0 1rem;
   }
}
.main-wrap {
   display: flex;
   flex-direction: column;
   margin: 0.5rem;

   .content {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #eee;
      border-radius: 4rem;
      font-weight: 600;

      .food-item {
         display: flex;
         flex: 2;
         margin: 0 0 0 1rem;

         .label {
            padding: 0.5rem 0.5rem;
         }
      }
   }
   .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #333;
      padding: 1rem 1.5rem;
      color: white;
      border-radius: 2rem;
   }
   .amount-item {
      display: flex;
      width: 1.5rem;
      align-self: center;
      justify-content: center;
   }
   .button-wrap {
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      padding: 0 0.5rem;

      .button-containted {
         display: flex;
         justify-content: center;
         align-items: center;
         background-color: rgb(202, 202, 202);
         padding: 0.75rem;
         margin: 0.5rem 0.25rem;
         border-radius: 1.5rem;
         width: 0.75rem;
         height: 0.75rem;
         font-size: 1.25rem;
         &:hover {
            background-color: rgb(255, 81, 0);
            color: white;
         }
      }
   }
}
</style>

