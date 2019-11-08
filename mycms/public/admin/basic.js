// 封装一些公用的方法

let app={
    // 改变状态
    f1:function(el,collectionName,attr,id){
        // alert("更改状态")

        // 在后端开一个api接口，利用ajax去请求这个接口，这个接口就可以给你返回是否更新成功
        $.get("/admin/changeStatus",{collectionName:collectionName,attr:attr,id:id},function(data){
            // 如果后端给你返回的data中有success，表示成功
            // console.log(data)
            if(data.success){
                // 如果要检索的字符串值没有出现，则该方法返回 -1。
                // stringObject.indexOf(searchvalue,fromindex)
                if(el.src.indexOf("yes") != -1){
                    el.src="/admin/images/no.gif"
                }else{
                    el.src="/admin/images/yes.gif"
                }
            }
        })
    },

    // 实现排序的公用方法
    changeSort(el,collectionName,id){
        let sortValue=el.value  //value是排序的条件，通过value进行排序
        // 请求接口，接口 给我们返回数据，返回success表示排序成功
        $.get("/admin/changeSort",{collectionName,id,sortValue},function(data){   //data是调完接口返回的结果
            if(data){
                console.log(data)
            }
        })
    }
}