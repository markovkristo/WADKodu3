<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="vueprojekt/src/assets/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img class="avatar">
        <div class="drop-down-container">
          <span id="user-name">John Doe</span>
          <span id="user-email"></span>
          <span class="separator"></span>
          <span>
              <a href="browse.html">Browse</a>
            </span>
          <span class="separator"></span>
          <span>
              <a href="login.html">Log Out</a>
            </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
name: "Browse"
}
</script>

<style scoped>
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