<template>
 <div>
   <button @click="dou">防抖</button>
   <button @click="jl">节流</button>
   计算后的值：{{isNan}}
   <div class="next_node ub ub-pc ub-ac w100" @click="nextNode">下一节</div>
 </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>