<template>
  <div class="list">
    <el-table :data="fromData" border style="width: 100%;">
      <el-table-column prop="title" width="100" align="center">
        <input type="checkbox">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="" align="center">
      </el-table-column>
      <el-table-column prop="description.htmlspecialchars_decode()" label="描述" width="" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="100" align="center">
      </el-table-column>
      <el-table-column prop="add_time" label="时间" width="" align="center">
      </el-table-column>
      <el-table-column label="操作" width="400" align="center">
        <template slot-scope="scope">
              <el-button
              plain
                size="mini"
                @click="handleEdit(scope.row._id)"
              >编辑</el-button>
              <el-button
                type="danger"
                size="mini"
                @click="handleDelete(scope.$index,scope.row)"
              >删除</el-button>
              <el-button
                type="primary"
                size="mini"
                @click="handleSlider(scope.row._id)"
              >生成轮播图</el-button>
</template>
      </el-table-column>
    </el-table>
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
      handleDelete(index,row){
        this.$confirm('此操作将永久删除这条评议, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
        this.$axios.get(`http://localhost:3000/api/comments/delete/${row._id}`).then((res)=>{
           console.log(res)
           if(res.status ==200){
              this.$message({
                type: 'success',
                message: '删除成功'
              });
              setTimeout(()=>{
                this.$router.go(0) //前进一页写1，后退一页写-1 ，刷新当前页面写0
              },1500)
            }
           
          }) 
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          },);          
        });
      },
      getData() {
        this.$axios.get("http://localhost:3000/api/comments/lists").then(res => {
          // console.log(res.data)
          this.fromData = res.data
          this.allTableData = res.data
          this.filterTableData = res.data
          // 设置分页数据
          this.setPaginations()
        })
      },
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
        this.$router.push({
          path: "/news/update",
          query: {
            _id
          }
        });
      },
     
      handleSlider(_id) {
        this.$axios.post("addSlider", {
          _id: _id
        }).then(res => {
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

