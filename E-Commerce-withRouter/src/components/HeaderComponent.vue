<template>
  <div class="parent-page">
    <div class="header">
      <div class="Logo-Container">
        <img src="../assets/images/Logo.png" class="img"> </img>
            <div class="Logo-title">
              <h2 class="Logo-Text1">Melon</h2>
              <h4 class="Logo-Text2">Mart & Grocery</h4>
            </div>
        </div>
        <div class="search-box">
            <pre>All Categories  >   | </pre>
            <input type="text" placeholder="Search for items">
            <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" />
          </div>
          <div class="right-components">
          <div>
            <FontAwesomeIcon :icon="['fas', 'user']" />
            <h3>Account</h3>
          </div>
          <div>
            <FontAwesomeIcon :icon="['fas', 'arrows-spin']" />  
            <h3>Compare</h3>
          </div>
          <div>
            <FontAwesomeIcon :icon="['fas', 'heart']" />
            <h3>Wishlist</h3>
          </div>
          <div>
            <FontAwesomeIcon :icon="['fas','shopping-cart']" />
            <h3>Cart</h3>
          </div>
        </div>
      </div>
      <div class="sub-header">
        <div class="browse-box">
          <FontAwesomeIcon :icon="['fas','table-cells-large']" />
          <h3>Browse All Categories </h3>
          <FontAwesomeIcon :icon="['fas','angle-down']" />
        </div>
        <div class="sub-categories">
          <div>
            <FontAwesomeIcon :icon="['fas','fire']" />
            <h3>Hot Deals</h3>
          </div>
          <div>
            <h3>Home</h3>
          </div>
          <div>
            <h3>Food</h3>
            <FontAwesomeIcon :icon="['fas','angle-down']" />
          </div>
          <div>
            <h3>Vegetables</h3>
            <FontAwesomeIcon :icon="['fas','angle-down']" />
          </div>
          <div>
            <h3>Drink</h3>
          </div>
          <div>
            <h3>Cookies</h3>
          </div>
          <div>
            <h3>Meat & Seafoood</h3>
            <FontAwesomeIcon :icon="['fas','angle-down']" />
          </div>
          <div>
            <h3>Bakery</h3>
          </div>
        </div>
        <div class="hot-line">
          <FontAwesomeIcon class="headphoneIcon" :icon="['fas','headphones']" />
            <div class="hotline-title">
              <h2 class="hotline-Text1">099 777 888</h2>
              <h4 class="hotline-Text2">24/7 Support Center</h4>
            </div>
        </div>
      </div>
    </div>
</template>


<script lang="ts">

export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.parent-page{
  display: flex;
  flex-direction: column;
  gap: 40px;

}
.header{
    display: inline-flex;
}
.img{
  max-width: 100%;
  height: 60px;
  object-fit: contain;
}

.Logo-Container{
  display: flex;
  align-items: center;
  gap: 10px;
}
.Logo-title{
    display: flex;
    flex-direction: column;
    line-height: 1.2;
}
.Logo-Text1{
    color: #3BB77E;
    font-size: 35px;
    font-weight: bold;
}
.Logo-Text2{
    letter-spacing: 2px;
}

.hot-line{
  display: flex;
  align-items: center;
  gap: 10px;
}
.hotline-Text1{
    color: #3BB77E;
    font-size: 24px;
    font-weight: bold;
}
.search-box{
    display: flex;
    align-items: center;
    gap: 10px;
    border: 2px solid #ccc;
    padding:  0 10px 0 10px;
    border: 3px solid #3BB77E;
    border-radius: 8px;
    transform: translateX(80px);
}
.search-box pre{
    font-weight: bold;
    font-size: 16px;
    color: #555;
}
.search-box input {
  width: 250px;
  padding: 10px 15px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  outline: none;
}
.right-components{
    display: flex;
    align-items: center;
    gap: 25px;
    margin-left: auto;

}
.right-components div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}
.browse-box{
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 25px 0 25px;
  background-color: #3BB77E;
  border-radius: 15px;
  
}
.sub-header{
  display: flex;
  justify-content: space-between;
}
.sub-categories{
  display: flex;
  gap: 40px;
}
.sub-categories div{
   display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    /* transform: translateX(80px); */
}
.headphoneIcon{
  max-width: 100%;
  height: 70px;
  /* object-fit: contain; */
}

/* .search-box input:focus {
  border-color: #4A90E2;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
} */

</style>