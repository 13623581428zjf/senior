<template>
  <div>
    <!-- 子 -->
    <div>{{FaNum}}</div>
    <comdemo2 @refreshJaja = 'refreshJaja'></comdemo2>
    <div class="next_node ub ub-pc ub-ac w100" @click="nextNode">下一节</div>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>