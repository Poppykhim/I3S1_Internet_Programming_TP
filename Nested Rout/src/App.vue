<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import SideBarComponent from './components/SideBarComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
  },
}
</script>

<template>
  <div class="body">
    <HeaderComponent />
    <div class="content">
      <SideBarComponent />
      <div class="eachPage">
        <router-view />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped>
.body {
  width: 1280px;
  border: 2px solid black;
}
.content {
  display: flex;
  height: 500px;
  flex: 1;
}
.eachPage {
  flex: 1;
  text-align: center;
  align-self: center;
}
</style>
