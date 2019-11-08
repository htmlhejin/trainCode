<template>
  <div class="list">

    <el-table
      :data="fromData"
      border
      style="width: 100%;"
    >
      <el-table-column
        prop="title"
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
        prop="status"
        label="状态"
        width=""
        align="center"
      >
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
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="watch(scope.$index,scope.row)"
          >查看</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-button
      style="width:15%;margin-top:20px"
    >批量审核</el-button>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="40"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { constants } from 'crypto';
export default {
  data(){
    return {
      fromData:[]
    }
  },
  created(){
    this.getData()
  },
  methods:{
     // 查看个人思想汇报
    watch(index,row){
      this.$axios(`http://localhost:3000/api/report/reportList.do/${row._id}`).then(res=>{
        // console.log(res.data)
        let Data=res.data
        // console.log(Data)
        this.$router.push({name:'info',params:{abc:Data}})
      })
    },
       getData(){
         this.$axios.get("http://localhost:3000/api/report/reportList.do").then((res)=>{
           this.fromData=res.data
         }).catch((err)=>{
          console.log("出错了")
         })
       }
  }
}
</script>


<style scoped>
.page {
  float: right;
  margin-top: 10px;
}
</style>

