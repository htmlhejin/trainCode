<template>
  <div class="app-container" style="color:grey">
    <div class="item">
         描述<el-input v-model="title"  style="width:91%; margin-left:10px"  />
    </div>
  <div class="item" style="display:flex">
    <div >内容</div>
    <div  style="width:90%;margin-left:10px">
       <quill-editor 
      v-model="description" 
      ref="myQuillEditor" 
      :options="editorOption" 
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
    </div>
  </div>
    <el-button @click="doCreate"
     style="background:rgb(24, 144, 255);color:#ffffff;margin-left:40px;margin-top:15px;width:90px;height:40px"
     >立即创建</el-button>
  </div>
</template>
<script>
    import { quillEditor } from 'vue-quill-editor'
    export default{
        data(){
            return {
                description:"",
                title:"",
                editorOption:{}
            }
        },
        methods:{
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            },
            doCreate(){
              this.$axios.post("http://localhost:3000/api/comments/add",{
                description:this.description,
                title:this.title
              }).then(res=>{
                this.$router.push("/mzpy/list")
              })
            }
        }
    }
</script>  
<style  scoped>
  .app-container .item{
    margin-top:20px
  }
</style>