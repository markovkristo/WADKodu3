<template>
  <body>
  <Header></Header>
  <section class="main-container">
    <div class="profile" v-for="item in info" :key="item.avatar">

      <img :src="item.avatar" alt = "item.alt">
      <h2>
        {{ item.firstname + " " +item.lastname}}
      </h2>

        <custom-button></custom-button>

    </div>
  </section>
  </body>
</template>



<script>
import Header from "@/components/Header";
import axios from 'axios';
import CustomButton from './button.vue'


export default {
name: "get-request",
  data() {
    return {
      selected: false,
      info: []
    }
  },
  components: {Header, CustomButton},


  created() {
    // Simple GET request using axios
    axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
      .then(response => {
      console.log(response.data)
      this.info = response.data
    })
  }
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

.main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}

.profile {
    width: 45%;
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
}
.profile img{

    height: 75px;
    display: block;
    padding-top: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 75px;


    border-radius: 100%;
    object-fit: cover;
    object-position: top;

}

.profile h2{
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
}


</style>