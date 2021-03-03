<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          v-for="item in menuTab"
          :key="item.index"
          :class="{ current: isActive }"
        >
          {{ item.txt }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      menuTab: [{ txt: "登录" }, { txt: "注册" }],
      isActive: false
    };
  },
  created() {},
  mounted() {},
  methods: {},
  props: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
