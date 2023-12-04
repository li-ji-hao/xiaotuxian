<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router';
const router = useRouter()
const userStore = useUserStore()
const confirm = () => {
  // alert('退出登录了')
  userStore.clearUserInfo()
  router.push('/login')
}
</script>
<template>
  <nav class="app-topnav">
    <div class="container">
      <ul class="clearfix">
        <!-- 登录与非登录状态渲染 -->
        <template v-if="userStore.userInfo.token">
          <li id="first">
            <a href="javascript:;"><i class="iconfont icon-user"></i>{{ userStore.userInfo.nickname }}</a>
          </li>
          <li>
            <el-popconfirm @confirm="confirm" title="确认退出吗？" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;" @click="$router.push('/member/order')">我的订单</a></li>
          <li><a href="javascript:;" @click="$router.push('/member')">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
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
  height: 78px;
  width: auto;
  .container{
    padding-top: 10px;
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