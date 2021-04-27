<template>
  <div>{{ fullName }}</div>
  <div>{{ checkAge }}</div>
</template>

<script>
export default {
   data(){
      return {
         firstName: 'Kiyu',
         lastName: 'Tran',
         age: 18
      }
   },
   computed:{
      fullName(){
         return this.firstName + " " + this.lastName
      },
      checkAge(){
         return ( 50 - this.age) > 35 ? "still young" : "too young"
      }
   }

}
</script>

<style lang="scss">
div{
   font-size: 2rem
}

</style>