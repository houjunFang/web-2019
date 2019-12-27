


<template>
  <div style="width: 400px;">
    <div  style="height: 40px;margin-bottom: 20px;">
      <input class="input" maxlength="8" placeholder="请输入验证码"/>
      <code-check :identifyCode="identifyCode" @click="refreshCode"></code-check>
      <div class="divIdentifyingCode" @click="refreshCode">
        <span  style="height:40px; width: 100px; cursor: pointer;" alt="点击更换">点击更换</span>
      </div>
    </div>
  </div>
</template>


<script>
import CodeCheck from "@/components/login/CodeCheck";

export default {
  name:"CodeMain",
  data() {
    return {
      identifyCodes: "1234567890abcdefjhijklinopqrsduvwxyz",
      identifyCode: ""
    };
  },
  components: {CodeCheck},
  created() {
    // 初始化验证码
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // 重置验证码
    refreshCode() {
       
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
}
</script>

<style scope>
body{
    background-color: dimgray;
}
</style>
