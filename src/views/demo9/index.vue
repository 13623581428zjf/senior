<template>
 <div>
   <input type="text" :class="{'error':isError}" placeholder="请输入" v-model="itcode" maxlength="23">
 </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>