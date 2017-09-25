<template>
 <el-col :span="12">
    <el-row>
         <el-carousel :interval="4000" type="card" height="600px">
    <el-carousel-item><quantity-pie :name="name4"></quantity-pie></el-carousel-item>
    <el-carousel-item><quantity-pie :name="name5"></quantity-pie></el-carousel-item>
    <el-carousel-item><quantity-pie :name="name6"></quantity-pie></el-carousel-item>
    <el-carousel-item><quantity-pie :name="name7"></quantity-pie></el-carousel-item>
    <el-carousel-item><quantity-pie :name="name8"></quantity-pie></el-carousel-item>
    <el-carousel-item><quantity-pie :name="name9"></quantity-pie></el-carousel-item>
    <el-carousel-item><quantity-pie :name="name10"></quantity-pie></el-carousel-item>
    <el-carousel-item><quantity-pie :name="name11"></quantity-pie></el-carousel-item>
  </el-carousel>
    </el-row>
    <el-row>
        <el-col :span="8"><quantity-pie :name="name1"></quantity-pie></el-col>
        <el-col :span="8"><quantity-pie :name="name2"></quantity-pie></el-col>
        <el-col :span="8"><quantity-pie :name="name3"></quantity-pie></el-col>
    </el-row>
 </el-col>
</template>


<script>


import QuantityPie from './../components/QuantityPie.vue'
export default { 
  components: {
   QuantityPie
 },
   data() {
    return {
        name1: `BTC-BCC`,
        name2: `BTC-ETH`,      
        name3: `BTC-START`,
        name4:"BTC-OMG",
        name5:"BTC-BLK",
        name6:"BTC-NEO",
        name7:"BTC-EDG",
        name8:"BTC-OK",
        name9:"BTC-TRIG",
        name10:"BTC-EBST",
        name11:"BTC-XZC",
        name12:"BTC-QTUM"
    }
  }
}

</script>