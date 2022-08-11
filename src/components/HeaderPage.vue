<template>
  <div class="header">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="buttons">
      <input type="button" value="All" @click="goToHome" />
      <input type="button" value="Branding" @click="goToHome" />
      <input type="button" value="Web" @click="goToHome" />
      <input type="button" value="Photography" @click="goToHome" />
      <input type="button" value="App" @click="goToHome" />
    </div>
    <div class="search">
      <img src="../assets/search.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "headerPage",
  methods: {
    goToHome() {
      window.location = "#";
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  transition: background-color 300ms;
  position: sticky;
  top: 0;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 70px;
  }
}

.search {
  display: flex;
  margin-left: 2rem;
  cursor: pointer;
  > img {
    width: 2rem;
  }
}
.buttons {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: right;
  > input {
    margin-left: 2rem;
    width: 7rem;
    height: 2rem;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0 1rem;
  }
  > input:first-child {
    background: #e31135d9;
    color: #fff;
  }
  > input:hover {
    background: #e31135d9;
    color: #fff;
  }
}
</style>
