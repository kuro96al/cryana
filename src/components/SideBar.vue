<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">Menu</span>
      </template>
      <el-menu-item-group>
        <span slot="title">Charts</span>
        <el-menu-item index="1-1">
          <router-link to="/ranking" exact>ランキング</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link to="/charts" exact>売りVS買い</router-link>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">item four</span>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-date"></i>
      <span slot="title">Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">Navigator Three</span>
    </el-menu-item>
  </el-menu>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>


