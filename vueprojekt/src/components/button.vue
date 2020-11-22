<template>
<v-btn class="filter-button" :class="{'folloow' :!isToggled, 'unfolloow':isToggled}" @click="isToggled = !isToggled">
  <button v-if="!isToggled" class="follow">Follow</button>
  <button v-if="isToggled" class="unfollow">Unfollow</button>
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




.follow{
    background-color: #82008f;
}

.unfollow{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}


</style>
