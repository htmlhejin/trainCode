<template>
    <div>
     <el-table :data="info">
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
     </el-table>
    </div>
</template>

<script>
export default {
    name:'info',
    data(){
        return {
            // 由于模板问题，接收的数据必须是一个数组，正常情况下就是this.$route.params.abc
            info:[this.$route.params.abc]
        }
    }
}
</script>