<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="/user/student"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/user/student">
            <i class="el-icon-menu"></i>
            <span slot="title">学员管理</span>
          </el-menu-item>
          <el-menu-item index="/user/teacher">
            <i class="el-icon-document"></i>
            <span slot="title">讲师管理</span>
          </el-menu-item>
          <el-menu-item index="/user/helper">
            <i class="el-icon-setting"></i>
            <span slot="title">助教管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
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

<style lang="scss" scoped></style>
