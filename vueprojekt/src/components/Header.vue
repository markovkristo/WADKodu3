<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="../assets/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search">
        <button type="button" class="button">Search</button>
      </div>
      <div class="avatar-container">
        <img @click="toggleInfo" :src="info.avatar" alt = "avatar.alt" class = "avatar">
        <div class="drop-down-container" v-show="showInfo">
          <span id="user-name">
            {{info.firstname| capitalize}}
            {{ info.lastname | capitalize}}
          </span>
          <span id="user-email">
            {{ info.email }}
          </span>
          <span class="separator"></span>
          <span>
            <router-link to="/browse">Browse</router-link>
            </span>
          <span class="separator"></span>
          <span>
              <router-link to="/"> Log Out</router-link>
            </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from 'axios';
import capitalize from "@/models/Filter";
export default {
  name: 'get-request',
  data:function(){
    return{
      showInfo: false,
      info: []
    }
  },
  methods: {
    toggleInfo: function (){
      this.showInfo = !this.showInfo
    }
  },
  filters: {
    capitalize: capitalize
  },
  created() {
    axios.get('https://private-anon-90de795816-wad20postit.apiary-mock.com/users/1')
      .then(response => {
        console.log(response.data)
        this.info = response.data
     })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.button{
  cursor: pointer;
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}
.avatar{
  cursor: pointer;
}
.drop-down-container {
  position: absolute;
  min-width: 150px;
  height: auto;
  background-color: #ffffff;
  padding: 10px;
  right: 0;
  top: 50px;
  text-align: left;
}
.drop-down-container span{
  display: block;
}
.drop-down-container span.separator{
  border-bottom: 1px solid #d7d7d7;
  margin: 10px -10px;
}
</style>