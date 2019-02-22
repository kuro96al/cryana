<template>
    <el-row>
        <top-bar></top-bar>
        <el-col :span="8">
            
        </el-col>

            <router-view>
            </router-view>

    </el-row>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
<script>
import SideBar from './components/SideBar.vue'
import TopBar from './components/TopBar.vue'

export default {
    components: {
        SideBar,
        TopBar
    },
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
