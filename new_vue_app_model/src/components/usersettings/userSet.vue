<template>
   <div >
      用户设置
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
