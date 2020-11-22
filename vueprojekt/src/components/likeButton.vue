<template>
  <v-btn class="like-button" :class="{'like-button' :!isToggled, 'like-button-liked':isToggled}" @click="isToggled = !isToggled">
    <button v-if="!isToggled" class="like-button">Like</button>
    <button v-if="isToggled" class="like-button-liked">Liked</button>
  </v-btn>
</template>

<script>
export default {
  data: function () {
    return {
      isToggled: false
    }
  }
}
</script>

<style>



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

.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}

.like-button-liked {
  background-color: #01579b;
}

</style>