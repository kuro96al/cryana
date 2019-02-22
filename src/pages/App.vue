<template>
  <el-col :span="4">
    <img src="./../assets/cryana.png">
    <h1>{{ msg }}</h1>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Cryptcurrency Analyzer'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
