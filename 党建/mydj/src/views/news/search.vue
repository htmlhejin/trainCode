 <template>
 <el-table
        :data="fromData"
        border
        style="width: 100%;">
        <el-table-column
          prop="_id"
          label="id"
          align="center"
          width="330">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          align="center"
          width="200">
        </el-table-column>
        <el-table-column
          prop="add_time"
          label="发布时间"
          align="center"
          width="">
        </el-table-column>
        <el-table-column
          prop="type"
          label="新闻类别"
          align="center"
          width="160">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="">
        </el-table-column>
      </el-table>
     
 </template>

<script>
export default {
    name:'查询新闻',
    data(){
        return {
            fromData:this.$route.params.type
        }
    },
    methods:{
        // this.$axios.
    }
}
</script>