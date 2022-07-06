<template>
    <div>
        <div class="bg" v-if="this.$getCookie('openid')">
            <img src="../../assets/img/bigImg/yic.jpg">
            <div class="ub ub-pc ub-ac ub-ver return_home">
                <lx-button border class="return_home_click" @click="returnHome()" title="返回首页"></lx-button>
            </div>
        </div>
        <div class="jurisdiction ub ub-pc ub-ac" v-else-if="!this.$getCookie('openid')">
            抱歉，您没有访问该活动的权限！
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

