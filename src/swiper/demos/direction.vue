<template>
  <t-swiper :autoplay="false" :height="180" direction="vertical" :navigation="{ type: 'fraction' }">
    <t-swiper-item class="swiper-item--demo">
      <img src="https://tdesign.gtimg.com/site/swiper/01.png" @click="handleClick(1)" class="img" />
    </t-swiper-item>
    <t-swiper-item class="swiper-item--demo">
      <img src="https://tdesign.gtimg.com/site/swiper/02.png" @click="handleClick(2)" class="img" />
    </t-swiper-item>
    <t-swiper-item class="swiper-item--demo">
      <img src="https://tdesign.gtimg.com/site/swiper/03.png" @click="handleClick(3)" class="img" />
    </t-swiper-item>
  </t-swiper>
</template>
<script lang="ts" setup>
const handleClick = (index) => {
  console.log(index)
}
</script>
<style lang="less">
.swiper-item--demo {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f33;
  font-size: 20px;
  color: #fff;

  img {
    height: 100%;
  }
}
</style>
