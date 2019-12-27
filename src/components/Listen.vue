<template>
</template>

<script>
export default {
  name: "listen",
  created: function() {
    let that = this;
    that.vHandler.$on("searching", function() {
      console.log("我这边侦听到一个事件了！！");
    });
  }
};
</script>

<style>
</style>
