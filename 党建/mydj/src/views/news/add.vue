<template>
  <div
    class="app-container"
    style="color:grey"
  >
    <div class="item">
      新闻标题
      <el-input
        v-model="fromData.title"
        style="width:80%; margin-left:10px"
      />
    </div>
    <div class="item">
      新闻作者
      <el-input
        v-model="fromData.author"
        style="width:80%; margin-left:10px"
      />
    </div>
    <div
      class="item"
      style="display:flex"
    >
      <div style="width:7%">新闻描述:</div>
      <textarea
        name=""
        id=""
        cols="70"
        rows="10"
        v-model="fromData.description"
      ></textarea>
    </div>
    <div class="item">
      新闻类型
      <el-select
        v-model="value"  
        style="width:20%; margin-left:10px"
        placeholder="请选择新闻类型"
      >
      <!-- v-model的值当前被选中的el-option的value值 -->
        <el-option
          v-for="item in Data"
          :key="item.value"
          :label="item.type"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div
      class="item"
      style="display:flex"
    >
      <div style="width:8%">新闻图片:</div>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img
          v-if="imageUrl"
          :src="fromData.pic"
          class="avatar"

        >
        <i
          v-else
          class="el-icon-plus avatar-uploader-icon"
        ></i>
      </el-upload>

    </div>
    <div
      class="item"
      style="display:flex"
    >
      <div style="width:8%">新闻内容:</div>
      <div style="width:86%;margin-left:10px;">
        <quill-editor
          v-model="fromData.content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        >
        </quill-editor>
      </div>
    </div>
    <el-button style="background:rgb(24, 144, 255);color:#ffffff;margin-left:88px;margin-top:15px;width:90px;height:40px"
    @click="getData"
    >立即创建</el-button>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      fromData:{
        title:"",
        author:"",
        type:"",
        description:"",
        content:"",
        type:"",
        pic:""
      },
      Data:[],        
      imageUrl: '',
      editorOption: {}
    };
  },
  created(){
    this.getType()
  },
  methods: {
    getType(){
      this.$axios("http://localhost:3000/api/news/lists").then(res=>{
        this.Data=res.data
      })
    },
    getData(){
      this.$axios.post("http://localhost:3000/api/news/add",{
        title:this.fromData.title,
        author:this.fromData.author,
        type:this.fromData.type,
        description:this.fromData.description,
        content:this.fromData.content,
        type:this.fromData.type
      })
      .then(res=>{
        console.log(res.data)
        this.$router.push("/news/list",this.fromData)
      })
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
    }
  }
};
</script> 
<style  scoped>
.app-container .item {
  margin-top: 20px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar-uploader-icon[data-v-2d79c2ff]{
    border:1px solid #8c939d;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>