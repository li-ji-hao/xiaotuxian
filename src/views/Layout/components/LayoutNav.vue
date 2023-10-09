<script setup>

</script>
<template>
  <nav class="app-topnav">
    <div class="container">
      <ul class="clearfix">
        <template v-if="true">
          <li id="first">
            <a href="javascript:;"><i class="iconfont icon-user"></i>周杰伦</a>
          </li>
          <li>
            <el-popconfirm title="确认退出吗？" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;"></a>请先登录</li>
          <li><a href="">javascript:;</a>帮助中心</li>
          <li><a href="">javascript:;</a>关于我们</li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
div{
  width: auto;
}

.app-topnav{
  background-color: rgb(26, 24, 24);
  color: #fff;
  height: 50px;
  width: auto;
  .container{
    margin: 0px;
    width: auto;
    height: 50px;
  }
  #first{
    color: red;
    float:right;
    position: relative;
    left: -50%;
    border-left: solid 0px;
    a{
      color: red;
    }
  }
  ul{
    margin-right: 45px;
    width: auto;
    height: 20px;
    position: relative;
    transform: translateY(80%);
    li{
      float: right;
      color: #fff;
      padding: 0px 10px;
      margin: 0px;
      border-left: 2px solid #666;
      height: 20px;
    }
    a{
      color: #d8d0d0;
    }
  }
}

.clerfix::after{
clear: both;
content: '';
display: block;
}

</style>