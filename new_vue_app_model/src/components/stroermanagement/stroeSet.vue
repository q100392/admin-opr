<template>
   <div >

       <el-tabs   v-model="editableTabsValue" type="card"  @tab-remove="removeTab">

           <el-tab-pane
             label="店铺详情"
             name="1"
           >
             <check-stroe @parentByClick="childClick" :msg="fuzujianData"></check-stroe>
           </el-tab-pane>


           <el-tab-pane v-if="falseTab"  closable
             label="店铺商品"
             name="2"
           >
                <check-stroes  @parFn="delitFn"></check-stroes>
           </el-tab-pane>

       </el-tabs>






   </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CheckStroe from '@/components/stroermanagement/checkstroe/checkstroe'
import CheckStroes from '@/components/stroermanagement/checkstroe/checkstroes'
export default {
  props:["",],//接受父组件传过来的参数
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: { CheckStroe, CheckStroes, },
  data() {
//这里存放数据
        return {
          editableTabsValue:"1",    //加载页面出现的第一个Tabd店铺详情 根据name来显示
           falseTab:false,    //控制店铺商品的布尔值
           fuzujianData:"父组件传给子组件的数据"
        }
  },
  //监听属性 类似于data概念
  computed: {

  },
  //监控data中的数据变化
 watch: {

  },
//方法集合 专门存放方法比如点击事件
  methods: {

    childClick(data,bool,goTabsValue){    //店铺详情组件中的方法
      this.falseTab=bool                  //点击店铺详情中的这个方法把店铺详情中的布尔值传到父组件 然后控制店铺商品的显示
      this.editableTabsValue=goTabsValue      //修改显示店铺商品的Tab内容
        console.log(data,"店铺商品的布尔值", bool,"goTabsValue显示店铺商品",goTabsValue)
    },

    delitFn(bool,editableTabsValue){    //店铺商品组件中的方法
        this.falseTab=bool
        this.editableTabsValue=editableTabsValue
    },
     removeTab(targetName) {
       
       
       
       
            let tabs = this.editableTabsValue;
                if (tabs === targetName) {
                  console.log(targetName)
                    this.editableTabsValue=String(Number(targetName)-1)
                      if (targetName==2) {
                           this.falseTab=false
                      }


                }

          }
 // this.store.commit('footIndexFn',index)  //vuex上的footIndexFn方法

},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
 // this.navlist[0].url='/home/123'

},
//生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

 //this.store.state.footIndex //获取vuex上的状态
//this.getData();//加载完后执行getData这个函数
 },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>

<style scoped>

</style>
