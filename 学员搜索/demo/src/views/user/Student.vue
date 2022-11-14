<template>
  <div>
    <h1>学员管理</h1>
    <el-form :inline="true" :model="val" class="demo-form-inline">
      <el-form-item label="学员状态"
        ><el-select v-model="val.status" placeholder="状态">
          <el-option label="请选择状态" :value="-1"></el-option>
          <el-option label="启用" :value="1"></el-option>
          <el-option label="禁用" :value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="val.mobile" placeholder="电话"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="val.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  @click="search">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button  @click="cz">重置</el-button>
      </el-form-item>
      <!-- 引入组件 -->
      <div>
         <el-button type="primary">新增学院</el-button>
         <el-button type="primary">批量导入</el-button>
         <el-button type="primary">批量导出</el-button>
         <el-button type="primary">查看报表</el-button>
      </div>
      <!-- 引入按钮 -->
    </el-form>
    <el-table :data="resList" border style="width: 100%">
      <el-table-column prop="date" label="学生名称" width="150">
        <template slot-scope="scope">
          <img
            style="width: 50px; height: 50px"
            :src="scope.row.avatar"
            alt=""
          />
          <span>{{ scope.row.nickname }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号码" width="120">
      </el-table-column>
      <el-table-column label="状态" width="120">
        <template slot-scope="scope">
          {{ scope.row.status ? "启用" : "禁用" }}
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="120">
        <template slot-scope="scope">
          <div>
            {{ scope.row.created_at | filtime }}
            <!-- 引出过滤器 -->
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4, 6, 8, 10]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="list.length"
    >
    </el-pagination>
    <!-- 引入分页 -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      //列表数据
      copylist: [],
      //为了搜索备份一个数据 防止越搜越少
      pagesize: 5,
      //每页多少条
      pagenum: 1,
      //页码
      val: {
        name: "",
        mobile: "",
        status: -1
      }
      //定义数据
    };
  },
  methods: {
    getList() {
      axios.get("/list.json").then(res => {
        console.log(res);
        this.list = res.data;
        this.copylist = res.data;
      });
      // 多定一个变量防止越搜越少
    },
    //列表获取数据

    handleSizeChange(val) {
      console.log(val);
      this.pagesize = val;
    },
    // 每页多少条改变自动触发
    handleCurrentChange(val) {
      console.log(val);
      this.pagenum = val;
    },
    //页码发生改变自动触发
    search() {
      if (this.val.status == -1) {
        this.list = this.copylist.filter(i => {
          return (
            i.mobile.includes(this.val.mobile) &&
            i.nickname.includes(this.val.name)
          );
        });
        //如果没选状态 那么 就只搜 姓名和电话
      } else {
        this.list = this.copylist.filter(i => {
          return (
            i.mobile.includes(this.val.mobile) &&
            i.nickname.includes(this.val.name) &&
            i.status == this.val.status
          );
        });
      }
      //有状态的时候 就三个都搜
    },
    //搜索方法
    cz() {
      this.list = this.copylist;
      this.val.name = "";
      this.val.mobile = "";
      this.val.status = -1;
    }
    //重置把数据还原搜索条件也清空
  },
  created() {
    this.getList();
  },
  mounted() {},
  components: {},
  computed: {
    resList() {
      return this.list.slice(
        this.pagesize * (this.pagenum - 1),
        this.pagesize * this.pagenum
      );
      // 分页方法
    }
  },
  watch: {},
  filters: {
    filtime(val) {
      return new Date(val * 1000).toLocaleString();
    }
    //过滤时间 先把他变成 时间对象再转化为字符串*1000即可
  }
};
</script>

<style lang="scss" scoped></style>
