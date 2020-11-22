<template>
  <body>
  <Header></Header>
  <section class="main-container" v-for="item in info" :key="item.id">
    <div class="post">
      <div class="post-title">
        <div class="post-actions">
          <span class="post-author">
            <span class="post-author-info">
              <small>
                <img src='item.author.avatar' alt="'item.author.firstname'+ ' ' +'item.author.lastname'"><br>
                <small>
                  <h3>{{item.text}}</h3>
                </small>
              </small>
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
  </body>
</template>

<script>
import Header from "@/components/Header";
import axios from 'axios';
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
  components: {Header}
}

</script>

<style scoped>

</style>