<template>
  <section class="main-container">
    <div class="profile">
      <h2 v-for="item in info" :key="item.firstname">
        {{ item.firstname + " " +item.lastname}}
      </h2>
      <img v-for="item in info" :key="item.avatar" :src="item.avatar" alt = "item.alt">
      <button v-for="item in info" :key="item.firstname" class="follow-button">Follow</button>
    </div>
  </section>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>
import axios from 'axios';




export default {
name: "get-request",
  data() {
    return {
      info: []
    };
  },
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
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.profile h2{
    font-size: 16px;
}

.follow-button{
    background-color: #82008f;
}

.follow-button.followed{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}

</style>