<template>
 <div>
   <input type="text" :class="{'error':isError}" placeholder="请输入" v-model="itcode" maxlength="23">
  <div class="next_node ub ub-pc ub-ac w100" @click="nextNode">下一节</div>
 </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>