<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          default-active="/user/student"
          class="el-menu-demo"
          mode="horizontal"
          router
        >
          <el-menu-item index="/user/student">用户</el-menu-item>
          <el-menu-item index="3">教学</el-menu-item>
          <el-menu-item index="4">题库</el-menu-item>
          <el-menu-item index="4">运营</el-menu-item>
          <el-menu-item index="4">营销</el-menu-item>
          <el-menu-item index="4">商品</el-menu-item>
          <el-menu-item index="4">财务</el-menu-item>
          <el-menu-item index="4">统计</el-menu-item>
          <el-menu-item index="4">系统</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- 头部组件 -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>

</style>
