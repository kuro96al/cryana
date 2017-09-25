
<script>
import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default Pie.extend({
  mixins: [reactiveProp],
  props: {
    chartData: Object, // 親コンポーネントからchartDataを受け取る
  },
 mounted () {
   // Overwriting base render method with actual data.
   this.renderChart(this.chartData)
 }
})
</script>