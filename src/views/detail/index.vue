<template>
    <div>
        <div class="bg" v-if="this.$getCookie('openid')" :style="{backgroundImage:'url('+bgImgdetail+')'}">
            <div class="bulletChat w100">
                <talk />
            </div>
            <div class="w100 ub ub-ac ub-pc">
                <div class="detailImg">
                    <img :src="$getsessionStorage('bgimg')">
                </div>
            </div>
            <div class="SmallTarget w100" v-if="detail.target">
                <h2>小目标</h2>
                <div>{{detail.target}}</div>
            </div>
            <div class="btn ub ub ub-pj">
                <div class="bj ub ub-ac ub-pc" @click.stop="lightUp">
                    <div><img :src="require('../../assets/img/bigImg/dz.png')"></div>
                    <div>&nbsp;&nbsp;为我点亮标签</div>
                </div>
                <div class="bj ub ub-ac ub-pc" @click="giveTheThumbsUp">
                    <div><img :src="require('../../assets/img/bigImg/zan.png')"></div>
                    <div>&nbsp;&nbsp;为我点赞</div>
                </div>
            </div>
            <alert :ids="detail.tag_list" v-if="Isshow"></alert>
            <div class="bottomList">
                <!-- 点赞 -->
                <div class="item_top_zanList border-bottom" v-if="detail.like_list && detail.like_list.length>0">
                    <div class="item_left">
                        <div class="Img">
                            <img src="../../assets/img/bigImg/icon1.png">
                        </div>
                    </div>
                    <div class="item_right">
                        <div class="Img" v-for="(item,index) in detail.like_list" :key="index">
                            <img :src="item.headimgurl">
                        </div>
                    </div>
                </div>
                <!-- 评论 -->
                <div class="item_top_message" v-if="detail.comment_list&&detail.comment_list.length>0">
                    <div class="item_top_message_left">
                        <div class="Img">
                            <img src="../../assets/img/bigImg/icon2.png">
                        </div>
                    </div>
                    <div class="ub ub-ver item_top_message_right">
                        <div class="ub w100 border-bottom"  v-for="(item,index) in detail.comment_list" :key="index">
                            <div class="Img">
                                <img :src="item.headimgurl">
                            </div>
                            <div class="ub ub-f1 ub-ver right">
                                <div class="rightName">{{item.nickname}}</div>
                                <div class="rightMess">{{item.comment}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="talkMessage ub ub-ac ub-pj ub-pc w100">
                    <div>留言：</div>
                    <input type="text" placeholder="请留下你想说的话" v-model="comment">
                    <div class="sendBtn ub ub-pc">
                        <lx-button class="send" @click="send()" title="发送"></lx-button>
                    </div>
                </div>
            </div>
            <div class="bottomRutern ub ub-pc" :class="{'haveLike': bottomBtn}">
                <lx-button border class="returnBtn" @click="return_home()" title="返回同学录"></lx-button>
            </div>
        </div>
        <div class="jurisdiction ub ub-pc ub-ac" v-else-if="!this.$getCookie('openid')">
            抱歉，您没有访问该活动的权限！
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

