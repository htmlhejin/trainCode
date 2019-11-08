
<template>
  <div class="list">
    <div class="top">
      <el-input type="text" style="width:30%;margin:15px 5px;height:40px" v-model="searchUser"></el-input>
      <el-button  style="background:#49a9df;border:#49a9df;" 
      @click="search"
       >查询</el-button>
      <el-button style="background:#49a9df;border:#49a9df;" @click="add">导入用户</el-button>
    </div>
    <div class="table_container">
      <el-table border style="width: 100%;" :data="formData">

        <el-table-column prop="" label="" width="110" align="center">
          <input type="checkbox">
        </el-table-column>

        <el-table-column prop="" label="#" width="110" align="center">
        </el-table-column>

        <el-table-column prop="username" label="用户名" align="center">
        </el-table-column>
        <el-table-column
          prop="idnumber"
          label="证件"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="tpnumber"
          label="电话"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="score"
          label="积分"
          align="center"
          width="120"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width=""
        >
        <template>
          <el-button type="danger" size="mini">启用</el-button>
          <el-button type="primary" size="mini">密码重置</el-button>
        </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-row>
        <el-col :span="24">
          <div class="pagination">
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
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "用户列表",
    data() {
      return {
        searchUser:"",
        formData: [],
        tableData: [],
        allTableData: [],
        filterTableData: [],
        // 需要给分页传递的信息
        pagination:{
          page_index:1,  //当前页
          page_size:3,    // 一页显示多少条
          total:0,        // 总页数
          page_sizes:[5,10,15,20],  // 每页显示多少条
          layout:"total,sizes,prev,pager,next,jumper"   //翻页属性
        }
      }
    },
    methods: {
      getList() {
        this.$axios.get("http://localhost:3000/api/userlist/lists").then(res => {
          // console.log(res.data)
          this.formData = res.data
          this.allTableData=res.data
          this.filterTableData=res.data
          // 设置分页数据
          this.setPaginations()
        })
      },
      handleCurrentChange(page){
        // 当前页
        let sortnum=this.pagination.page_size * (page-1)
        let table=this.allTableData.filter((item,index)=>{
          return index>=sortnum
        })
        // 设置分页数据
        this.tableData=table.filter((item,index)=>{
          return index < this.pagination.page_size
        })
      },
      handleSizeChange(page_size){
        // 切换size
        this.pagination.page_index=1
        this.pagination.page_size=page_size
        this.tableData=this.allTableData.filter((item,index)=>{
          return index<page_size
        })
      },
      setPaginations(){
        // 得到总页数
        this.pagination.total=this.allTableData.length
        this.pagination.page_index=1
        this.pagination.page_size=3
        // 设置默认分页数据
        this.tableData=this.allTableData.filter((item,index)=>{
          return index<this.pagination.page_size
        })
      },
      // 查询
      search(){
        this.$axios.get("http://localhost:3000/api/userlist/list",{params:{username:this.searchUser}}).then(res=>{
          // console.log("查询成功")
          // console.log(res.data)   // [{…}]
          let searchData=res.data
          this.$router.push({name:'查询用户',params:{username:searchData}})
        })
      },
      add(){
        this.$router.push("/user/add")
      }   
    },
    created() {
      this.getList()
      
    }
  }
</script>

<style scoped>
  .page {
    float: right;
    margin-top: 10px;
  }
</style>