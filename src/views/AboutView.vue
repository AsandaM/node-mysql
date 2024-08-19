<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getFruits()">Get fruits</button>

    <div>
      {{ $store.state.cart }}
    </div>
  </div>
</template>

<script>
export default{
  methods:{
    getFruits(){
      this.$store.dispatch('getFruits')
    },
   getCart(){
    this.$store.dispatch('addToCart')
   } 
  }
}
</script>
