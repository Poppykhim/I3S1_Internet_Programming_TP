<template>
  <div class="headerContainer">
    <h1>Header</h1>
    <div class="pageContainer">
      <router-link to="/PageOne">Page1</router-link>
      <router-link to="/PageTwo">Page2</router-link>
      <router-link to="/PageThree">Page3</router-link>
    </div>
  </div>
</template>

<style scoped>
.headerContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  padding: 16px;
}
.pageContainer {
  display: flex;
  gap: 16px;
}
.router-link-active {
  color: red;
}
</style>
