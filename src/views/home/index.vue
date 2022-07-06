<template>
    <div>
        <div>首页</div>
        <flop :get-data = 'getData' :get-obj = 'getobj.out' ref="flop" @stopTime = 'stopTime' @beginTime = 'beginTime'></flop>
        <!-- <div v-if="getdemo2.data">{{getdemo2.data[0].name}}</div> -->
    </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

