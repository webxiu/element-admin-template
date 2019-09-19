<template>
  <div class="home-container">
    <div class="menu">
      <!-- 545c64 -->

      <template>
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      </template>
    </div>

    <div class="content">
      <div class="nav-top">
        <span class="collapse" @click="isCollapse = !isCollapse">
          <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
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
    switchMenu(path) {
      console.log(9999, path);

      this.$router.push(path);
    },
    getRouter() {
      alert(3);
      console.log(this.$router);
    }
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
    //   color: #fff !important;
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