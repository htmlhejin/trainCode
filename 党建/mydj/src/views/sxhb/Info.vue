<template>
    <div>
        <el-table :data="Data">
            <el-table-column prop="userName" label="用户名" width="" align="center">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="" align="center">
            </el-table-column>
            <el-table-column prop="createTime" label="时间" width="" align="center">
            </el-table-column>
            <el-table-column prop="reason" label="理由" align="center">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'info',
        data() {
            return {
                Data: this.$route.params.abc
            }
        }
    }
</script>