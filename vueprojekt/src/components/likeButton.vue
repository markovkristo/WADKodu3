<template>
  <button class="like-button" :class="{'like-button' :!isToggled, 'like-button-liked' :isToggled}" @click="isToggled = !isToggled">
    <slot></slot>
  </button>
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





.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 70px;
  height: 25px;
  line-height: 10px;
  text-align: center;
  border: none;
}

.like-button-liked {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #01579b;
  width: 70px;
  height: 25px;
  line-height: 10px;
  text-align: center;
  border: none;

}

</style>