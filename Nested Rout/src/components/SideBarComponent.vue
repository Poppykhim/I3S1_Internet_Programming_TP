<template>
  <div class="sectionContainer">
    <div>Menu</div>
    <div
      v-for="i in 7"
      :key="i"
      @click="toSection(i)"
      class="menu-item"
      :class="{ active: isActive(i) }"
    >
      Section {{ i }}
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'SidebarMenu',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const toSection = (sectionId: number) => {
      const currentPage = route.params.page || 'PageOne'
      router.push(`/${currentPage}/section/${sectionId}`)
    }

    const isActive = (sectionId: number) => {
      return Number(route.params.sectionId) === sectionId
    }

    return { toSection, isActive }
  },
}
</script>

<style>
.sectionContainer {
  font: 26px bold;
  display: flex;
  flex-direction: column;
  border-right: 2px solid black;
}
.sectionContainer div {
  border-bottom: 2px solid black;
  padding: 10px 35px;
}
.menu-item,
.menu-item-header {
  border-top: 1px solid black;
  border-right: 1px solid black;
  box-sizing: border-box;
  /* border-bottom: 1px solid black; */
  padding: 10px;
}
.menu-item {
  cursor: pointer;
}
.menu-item:hover {
  background-color: rgb(15, 97, 97);
}
.menu-item.active {
  background-color: rgb(16, 230, 230);
}
</style>
