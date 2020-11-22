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
          <custom-button>{{ item.likes }}</custom-button>
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


</style>