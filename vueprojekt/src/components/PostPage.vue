<template>
  <body>
  <Header></Header>
  <section class="main-container" v-for="item in info" :key="item.id">
    <div class="post">
      <span class="post-author">
            <span class="post-author-info">
                <img :src="item.author.avatar" alt="item.author.firstname">
                  <small>{{ item.author.firstname + " " + item.author.lastname }}</small>
            </span>
          <small>{{ item.createTime }}</small>
              </span>
      <div class="post-type" v-if="item.media != null">
          <div class="post-image" v-if="item.media.type === 'image'">
            <img :src="item.media.url" alt="item.text">
          </div>
          <div class="post-image" v-if="item.media.type === 'video'">
            <video controls>
            <source type="video/mp4" :src="item.media.url">
            </video>
          </div>
      </div>
        <div class="post-actions">
          <custom-button></custom-button>
      </div>
      <div class="post-title">
        <h3>{{item.text}}</h3>
      </div>
    </div>

  </section>
  </body>
</template>

<script>
import Header from "@/components/Header";
import axios from 'axios';
import CustomButton from './likeButton.vue'

export default {

  name: "get-request",
  data() {
    return {
      info: []
    };
  },
  created() {
    axios.get('https://private-anon-2a389ff8f6-wad20postit.apiary-mock.com/posts')
        .then(response => {
          console.log(response.data)
          this.info = response.data
        })
  },
  components: {Header, CustomButton}
}

</script>

<style scoped>

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: #0277bd;
  color: #263238;
}

a {
  color: #40c4ff;
}


#login-container form div > input {
  padding: 8px 16px;
  margin: 4px 0;
}

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

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

.main-container {
  width: 50%;
  min-height: 10px;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}

.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.post .post-author {
  padding: 10px;
}

.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}

.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
  left: 35px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post .post-image img, video {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}

.post .post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}




.drop-down-container span{
  display: block;
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


</style>