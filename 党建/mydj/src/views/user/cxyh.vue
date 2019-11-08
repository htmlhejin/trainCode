<template>
    <div>
        <el-table border style="width: 100%;" :data="formData">

        <el-table-column prop="username" label="用户名" >
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
          width=""
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width=""
          align="center"
        >
        <template>
          <el-button type="danger" size="mini">启用</el-button>
          <el-button type="primary" size="mini">密码重置</el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
    name:"查询用户",
    data(){
      return {
        formData:this.$route.params.username
      }
    }
}
</script>