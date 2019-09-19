<template>
  <div class="home-container">
    <div class="menu">
      <!-- 545c64 -->

      <el-menu
        default-active="1-4"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        unique-opened
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <h2 class="manage-center">
          <i class="el-icon-star-on"></i>
          <span v-if="!isCollapse">后台管理中心</span>
        </h2>
        <template v-for="(item,index) in menuList">
          <template v-if="menuList[index].children">
            <el-submenu
              :key="index"
              class="menu-item"
              :index="(index+1)+''"
              @mouseenter.native="hoverBar($event)"
              @click.native.stop="oneMenu(item.title)"
            >
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title" class="menu-title">{{ item.title }}</span>
              </template>
              <el-menu-item-group v-for="(cell,i) in item.children" :key="i" class="menu-item-cell">
                <el-menu-item
                  :index="(index+1)+'-'+ (i+1)+''"
                  @click.native.stop="twoMenu(cell.option)"
                  class="menu-item-text"
                >{{ cell.option }}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :key="index" :index="(index+1)+''" 
            @mouseenter.native="hoverBar($event)" 
            @click.native.stop="oneMenu(item.title)"
            >
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>

        <div ref="bar" class="bar"></div>
      </el-menu>
    </div>

    <div class="content">
      <div class="nav-top">
        <span class="collapse" @click="isCollapse = !isCollapse">
          <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
          <span v-for="(item,index) in nav" :key="index">{{item}}</span>
        </span>
        
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      nav: [],
      menuList: [
        {
          title: "首页",
          p: 101,
          icon: "el-icon-s-tools",
          children: [{ option: "运营汇总", path: "/manage" }]
        },
        {
          title: "系统管理",
          icon: "el-icon-user-solid",
          p: 104,
          children: [
            { option: "角色管理", path: "/manage" },
            { option: "权限管理", path: "/access" },
            { option: "后台操作日志", path: "/backstage-log" },
            { option: "会员操作日志", path: "/member-log" },
            { option: "系统错误日志", path: "/error-log" }
          ]
        },
        {
          title: "退佣管理",
          icon: "el-icon-star-on",
          p: 105,
          children: [
            { option: "角色管理" },
            { option: "权限管理" },
            { option: "后台操作日志" },
            { option: "会员操作日志" },
            { option: "系统错误日志" }
          ]
        },
        {
          title: "彩票管理",
          icon: "el-icon-s-goods",
          p: 106,
          children: [
            { option: "角色管理" },
            { option: "权限管理" },
            { option: "后台操作日志" },
            { option: "会员操作日志" },
            { option: "系统错误日志" }
          ]
        },
        {
          title: "注单管理",
          icon: "el-icon-warning",
          p: 107,
          children: [
            { option: "角色管理" },
            { option: "权限管理" },
            { option: "后台操作日志" },
            { option: "会员操作日志" },
            { option: "系统错误日志" }
          ]
        },
        {
          title: "报表管理",
          icon: "el-icon-zoom-in",
          p: 108,
          children: [
            { option: "角色管理" },
            { option: "权限管理" },
            { option: "后台操作日志" },
            { option: "会员操作日志" },
            { option: "系统错误日志" }
          ]
        },
        {
          title: "游戏管理",
          icon: "el-icon-s-help",
          p: 109,
          children: [
            { option: "角色管理" },
            { option: "权限管理" },
            { option: "后台操作日志" },
            { option: "会员操作日志" },
            { option: "系统错误日志" }
          ]
        },
        {
          title: "站点设置",
          icon: "el-icon-s-shop",
          p: 110
        },
        {
          title: "会员管理",
          icon: "el-icon-menu",
          p: 111
        },
        {
          title: "支付设置",
          icon: "el-icon-s-marketing",
          p: 112
        },
        {
          title: "运营管理",
          icon: "el-icon-s-management",
          p: 113,
          children: [
            { option: "角色管理" },
            { option: "权限管理" },
            { option: "后台操作日志" },
            { option: "会员操作日志" },
            { option: "系统错误日志" }
          ]
        },
        {
          title: "现金管理",
          icon: "el-icon-s-order",
          p: 114
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    hoverBar(evevt) {
      let top = evevt.target.offsetTop;
      if (this.$refs["bar"]) this.$refs["bar"].style.top = top + "px";
    },
    oneMenu(path) {
      this.nav = [path]
      console.log(1111111,this.nav);
    },
    twoMenu(path) {
      if(this.nav.length>1){
        this.nav.pop();
      }
      this.nav.push(path);
    },
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  .menu {
    // width: 220px;
    height: 100%;
    background: #545c64;
    .manage-center {
      background: rgb(115, 97, 116);
      text-align: center;
      line-height: 50px;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 100%;
    }

    // .menu-item:hover .menu-title {
    //   color: #f60 !important;
    // }
    .menu-item-cell {
      &:hover .menu-item-text {
        color: #fff !important;
      }
    }
    .bar {
      position: absolute;
      left: 0;
      width: 5px;
      height: 56px;
      background: #009688;
      transition: top 0.3s;
      display: none;
    }
    &:hover .bar {
      display: block;
    }
  }
  .el-submenu {
    background-color: rgb(67, 74, 80);
  }
  .content {
    width: 100%;
    background: #ecf5ff;
    .nav-top {
      height: 50px;
      background: #f60;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      .collapse {
        font-size: 20px;
      }
    }
  }
}
</style>