<template>
   <div class="status">
    <h2 class="title">Clique para ver as imagens de status</h2>
    <button @click="getRandomItem" class="btn">Clique para ver a imagem</button>
    <div>
        <img v-if='randomItem' :src="`https://http.cat/`+ randomItem" alt="imagem cat status">
    </div>

   </div>
  </template>

<script>



export default {
  name: "random-status",
  data() {
        return {
            myArray: [400, 500, 300, 404, 409, 200],
            randomItem: '',
        }
    },
    methods: {
        getRandomItem() {
            const randomIndex = Math.floor(Math.random() * this.myArray.length);
            this.randomItem = this.myArray[randomIndex];
        },
    },
};
</script>


<style scoped>
.status {
    display: block;
    width: 100%;
    text-align: center;
}
.btn {
    display: inline-block;
    margin: 20px 0px;
}
</style>