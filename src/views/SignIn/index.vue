<template>
    <div>
        <div class="bg" v-if="this.$getCookie('openid')" :style="{backgroundImage:'url('+bgImgSignln+')'}">
            <div class="signin_suc" v-if="!isLook">
                <div class="ub ub-pc ub-ac ub-ver ub-pe firstchild">
                    <input type="text" :class="{'error':isError}" placeholder="请输入 itcode" v-model="itcode" maxlength="23">
                </div>
                <div class="ub ub-pc ub-ac ub-ver ub-pe lastchild">
                    <lx-button border class="public_go" @click="goQreid()" title="签到"></lx-button>
                </div>
            </div>
            <div v-else class="signin_no">
                <div class="ub ub-ac ub-pc ub-ver ub-pe success_side">&nbsp;签到成功！</div>
                <div class="ub ub-ac ub-pc ub-ver ub-pe Seat_number" v-if="seatInfo.cid !=='1'">您的会议分组</div>
                <div class="ub ub-ac ub-pc ub-ver ub-pe number_text">{{seatInfo.info}}</div>
                <div class="ub ub-pc ub-ac ub-ver ub-pe return_home">
                    <lx-button border class="return_home_click" @click="returnHome()" title="返回首页"></lx-button>
                </div>
            </div>
        </div>
        <div class="jurisdiction ub ub-pc ub-ac" v-else-if="!this.$getCookie('openid')">
            抱歉，您没有访问该活动的权限！
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

