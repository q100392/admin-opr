<template>
   <div class="left" >

         <el-row >
           <el-col :span="12">
             <el-menu router
               @select="handleSelect"
               :default-active="$route.path"

               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               >

<!-- 导航一 -->
               <el-menu-item index="/stroeset" >
                 <i class="el-icon-menu"></i>
                 <span slot="title" >店铺管理</span>
               </el-menu-item>
<!-- 导航二 -->
              <el-submenu index="/ordermanagement" >
                 <template slot="title">
                   <i class="el-icon-location"></i>
                   <span>订单管理</span>
                 </template>
                 <el-menu-item-group>
                           <el-menu-item index="/ordermanagement/checkorder">订单查看</el-menu-item>
                           <el-menu-item index="/ordermanagement/revieworder">订单审核</el-menu-item>
                  </el-menu-item-group>
               </el-submenu>
<!-- 导航三 -->
               <el-menu-item index="/productmanagement" >
                     <i class="el-icon-document"></i>
                     <span slot="title">产品管理</span>
               </el-menu-item>
<!-- 导航四 -->
               <el-menu-item index="/userset">
                 <i class="el-icon-setting"></i>
                 <span slot="title">设　　置</span>
               </el-menu-item>
             </el-menu>
           </el-col>
          </el-row>




   </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//import Swiper from 'swiper';
export default {
  props:["",],//接受父组件传过来的参数
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
//这里存放数据
        return {


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
          handleOpen(key, keyPath) {

            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          handleSelect(key, keyPath) {
             console.log(key, keyPath);
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
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .left{
      /* width: 200px; */
    background: #0000FF;
  }
</style>
