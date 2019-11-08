
<template>
  <div class="list">
    <el-table
      :data="fromData"
      border
      style="width: 100%;"
    >
      <el-table-column
        prop=""
        label="#"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <img
            :src="scope.row.pic"
            alt=""
            style="max-height:150px;width:150px;display:block"
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="pic"
        label="轮播图"
        width="220"
        align="center"
      >
        <template slot-scope="scope">
          <img
            :src="scope.row.pic"
            alt=""
            style="max-height:150px;width:150px;display:block"
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="sort"
        label="顺序"
        width="220"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="220"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="360"
        align="center"
      >
      </el-table-column>

      <el-table-column
        label="操作"
        width="200"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="handleEdit(scope.row._id)"
          >修改</el-button>
          <el-button
            type="danger"
            size="mini"
            @click="handleDelete(scope.$index,scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      type=""
      style="width:10%;margin-top:20px; background-color: #49a9df;
    border-color:#49a9df;}"
      @click="add"
    >添加</el-button>
    <el-button
      type=""
      style="width:15%;margin-top:20px"
    >批量删除</el-button>
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
    add(){
      this.$router.push({name:'add'})
    },
    getData() {
      this.$axios.get("http://localhost:3000/api/focus/lists").then(res => {
        this.fromData = res.data;
        this.allTableData = res.data
          this.filterTableData = res.data
          // 设置分页数据
          this.setPaginations()
      });
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
      handleDelete(index,row) {
      // console.log(row)
      // console.log(index)
      this.$confirm("此操作将撤下这个轮播图, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
        this.$axios.get(`http://localhost:3000/api/focus/delete/${row._id}`).then((res)=>{
           if(res.status ==200){
              this.$message({
                type: 'success',
                message: '删除成功'
              });
              setTimeout(()=>{
                this.$router.go(0) //前进一页写1，后退一页写-1 ，刷新当前页面写0
              })
            }
           
          }) 
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          },);          
        });
         
      },
  },
   
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.page {
  float: right;
  margin-top: 10px;
}
</style>

