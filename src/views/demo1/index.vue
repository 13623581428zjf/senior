<template>
  <div>
  <div>Component value transmission</div>
  <!-- 父组件传子组件 -->
  <!-- 在父组件html绑定deData，后面跟字符串，在子组件通过 props接收------------------------------- -->
  <div>it's  father============================</div>
  <div class="itemContiner w100 ub ub-ac">
    <div v-for="(item,index) in this.deData" :key="index">
       <div>{{item.type}}</div>
    </div>
  </div>
  <div>it's  Son================================</div>
  <comdemo1 :deData = 'deData'></comdemo1>
  <div class="next_node ub ub-pc ub-ac w100" @click="nextNode">下一节</div>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>