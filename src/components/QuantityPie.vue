<template>
    <el-card :body-style="{ padding: '0px' }">
<reactive-pie :chartData="chartData"></reactive-pie>
<div style="padding: 14px;">
        <span>{{ name }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>
</template>

<script>

import ReactivePie from './ReactivePie.vue'
var bittrex = require ('./js/bittrexMethod.js')
export default { 
  components: {
   ReactivePie
 },
  props:{name:String},
   data() {
    return {
      chartData: {},
      currentDate: new Date()
    }
  },
  methods: {
    fillData () {
        var quantity = bittrex.sumQuantity(this.name);
      this.chartData = {
            labels: ['SELL', 'BUY'],
        datasets: [
          {
        label: 'BUY vs SELL',
         backgroundColor: ['#f87979','#31d885'],
         data: [quantity.sell,quantity.buy]
          }
        ]
      }
    }
  },
  created() {
    this.fillData() // インスタンス作成時にfillDataを実行
  }
}

</script>