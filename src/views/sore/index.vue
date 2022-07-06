<template>
    <div>
        <div v-if="this.$getCookie('openid')">
            <div class="main" v-if="suc_pon===0">
                <h1 class="ub ub-pc ub-ac">您对本次CET管理沙龙的整体满意度</h1>
                <div class="satisfaction" v-for="(item,index) in formData.list" :key="index">
                    <div class="title"><sup>*</sup>&nbsp;{{item.name}}</div>
                    <van-radio-group v-model="item.val">
                        <van-radio name="5" icon-size="16px"><span>5</span></van-radio>
                        <van-radio name="4" icon-size="16px"><span>4</span></van-radio>
                        <van-radio name="3" icon-size="16px"><span>3</span></van-radio>
                        <van-radio name="2" icon-size="16px"><span>2</span></van-radio>
                        <van-radio name="1" icon-size="16px"><span>1</span></van-radio>
                    </van-radio-group>
                </div>
                <div class="satisfaction">
                    <div class="title"><sup>*</sup>&nbsp;12.您对本次CET沙龙有哪些意见和建议</div>
                    <van-field
                        v-model="formData.message"
                        rows="2"
                        autosize
                        type="textarea"
                        maxlength="300"
                        placeholder="请输入建议"
                        clearable
                        show-word-limit/>
                </div>
                <div class="ub ub-pc ub-ac">
                    <lx-button border class="btn" @click="submit()" title="提交"></lx-button>
                </div>
            </div>
            <div v-else-if="suc_pon===1">
                <div class="success_ths ub ub-pc ub-ac ub-ver">
                    <div>您的问卷已提交完成，</div>
                    <div>感谢您的反馈！</div>
                </div>
                <lx-button border class="returnBtn" @click="return_home()" title="返回首页"></lx-button>
            </div>
        </div>
        <div class="jurisdiction ub ub-pc ub-ac" v-else-if="!this.$getCookie('openid')">
            抱歉，您没有访问该活动的权限！
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

