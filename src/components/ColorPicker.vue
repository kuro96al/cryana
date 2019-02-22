<template>
  <div id="app">
    <div class="block">
      <el-color-picker v-model="color"></el-color-picker>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'app',
  data () {
    return {
      color: '#20a0ff'
    }
  }
}
</script>