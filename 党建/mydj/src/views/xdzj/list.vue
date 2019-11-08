<template>
  <div class="list">

    <el-table
      :data="fromData"
      border
      style="width: 100%;"
    >
      <el-table-column
        prop=""
        label=""
        width="110"
        align="center"
      >
        <input type="checkbox">
      </el-table-column>
      <el-table-column
        prop=""
        label="#"
        width="110"
        type="index"
         align="center"
      >
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名"
        width=""
         align="center"
      >
      </el-table-column>
      <el-table-column
        
        label="状态"
        width=""
         align="center"
      >1
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="时间"
        width=""
         align="center"
      >
      </el-table-column>
      <el-table-column
        prop="reason"
        label="理由"
         align="center"
      >
      </el-table-column>
      <el-table-column
        label="操作"
        width=""
         align="center"
      >
        <template slot-scope="scope" >
          <el-button
            type="primary"
            size="mini"
            @click="watch(scope.$index,scope.row)"
          >查看</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-button
      type=""
      style="width:10%;margin-top:20px"
      @click="handleAddRole"
    >批量审核</el-button>
    <div class="page">
      <el-pagination
        v-if="pagination.total>0"
                background
                :total="pagination.total"
                :layout="pagination.layout"
                :current-page.sync="pagination.page_index"
                :page_size="pagination.page_size"
                :page_sizes="pagination.page_sizes"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      fromData: [],
      tableData: [],
        allTableData: [],
        filterTableData: [],
        // 需要给分页传递的信息
        pagination: {
          page_index: 1, //当前页
          page_size: 3, // 一页显示多少条
          total: 0, // 总页数
          page_sizes: [5, 10, 15, 20], // 每页显示多少条
          layout: "total,sizes,prev,pager,next,jumper" //翻页属性
        }
    };
  },
  methods: {
    // 查看个人心得总结
    watch(index,row){
      this.$axios(`http://localhost:3000/api/summary/summaryListsin.do/${row._id}`).then(res=>{
        // console.log(res.data)
        let Data=res.data
        // console.log(Data)
        this.$router.push({name:'info',params:{abc:Data}})
      })
    },
    // 获取数据列表
    getData() {
      this.$axios.get("http://localhost:3000/api/summary/summaryList.do").then(res => {
        this.fromData = res.data;
        this.allTableData = res.data
          this.filterTableData = res.data
          // 设置分页数据
          this.setPaginations()
      });
    },
    // 处理分页
    handleCurrentChange(page) {
        // 当前页
        let sortnum = this.pagination.page_size * (page - 1)
        let table = this.allTableData.filter((item, index) => {
          return index >= sortnum
        })
        // 设置分页数据
        this.tableData = table.filter((item, index) => {
          return index < this.pagination.page_size
        })
      },
      handleSizeChange(page_size) {
        // 切换size
        this.pagination.page_index = 1
        this.pagination.page_size = page_size
        this.tableData = this.allTableData.filter((item, index) => {
          return index < page_size
        })
      },
      setPaginations() {
        // 得到总页数
        this.pagination.total = this.allTableData.length
        this.pagination.page_index = 1
        this.pagination.page_size = 3
        // 设置默认分页数据
        this.tableData = this.allTableData.filter((item, index) => {
          return index < this.pagination.page_size
        })
      },
    handleEdit(_id) {
      this.$router.push({ path: "/news/update", query: { _id } });
    },
    handleDelete(_id) {
      this.$confirm("此操作将永久删除这条新闻, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios.post("delNews", { _id: _id }).then(res => {
            //  console.log(res)
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: "删除成功"
              });
              setTimeout(() => {
                this.$router.go(0); //前进一页写1，后退一页写-1 ，刷新当前页面写0
              }, 1500);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleSlider(_id) {
      this.$axios.post("addSlider", { _id: _id }).then(res => {
        if (res.code == 200) {
          this.$message({
            type: "success",
            message: "添加轮播图成功"
          });
          setTimeout(() => {
            this.$router.go(0); //前进一页写1，后退一页写-1 ，刷新当前页面写0
          }, 1500);
        }
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.kind {
  padding: 15px 15px;
  height: 50px;
  line-height: 50px;
  margin-bottom: 13px;
}
.kind span {
  font-size: 25px;
}
.page {
  float: right;
  margin-top: 10px;
}
</style>

