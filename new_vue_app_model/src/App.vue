<template>
  <div id="app">
    <el-container v-if="$route.meta.keepalive">

     <el-header class="header">
        <keep-alive>
        <header-mf></header-mf>
        </keep-alive>
      </el-header>
      <el-container>
        <!-- <el-aside style="width:200px; height:600px;border-right: 1px solid #2C3E50;box-sizing: border-box;"> -->
       <el-aside style="width:201px;box-sizing: border-box;">
          <keep-alive>
            <left-menu></left-menu>
          </keep-alive>
        </el-aside>
       <el-container>
         <el-main>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
        <!--  <el-footer style=" padding-left: 0px;padding-right: 0px;">
            <footer-mf></footer-mf>
         </el-footer> -->
        </el-container>
      </el-container>
    </el-container>
    <router-view v-if="!$route.meta.keepalive"></router-view>
  </div>
</template>

<script>
import LeftMenu from "./components/common/LeftMenu"
import HeaderMf from "./components/common/Header"
import  FooterMf from './components/common/Footer'

export default {
  name: 'App',
  components: {
    HeaderMf,
    LeftMenu,
    FooterMf
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
 .header{
    line-height: 60px;
    background-color: #67C23A;
    color: white;
    padding: 0;
    margin: 0;
  }
</style>
