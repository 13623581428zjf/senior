<template>
    <div>
        <div  v-if="this.$getCookie('openid')">
            <div class="bg" :style="{backgroundImage:'url('+bgImgAlumniBook+')'}">
                <div class="wrapper">
                    <div class="myhome ub w100" @click="clickDetail($getsessionStorage('info').data.cid)">
                        <div>我的主页</div>
                        <div><van-icon name="arrow" /></div>
                    </div>
                    <div class="list-wrapper-top" :style="{backgroundImage:'url('+bgImgTopda+')'}">
                        <div class="firstList ub ub-ver ub-ac" @click="clickDetail(topThree[0].cid)">
                            <div class="firstListImg">
                                <img :src="topThree[0]?topThree[0].img:''">
                            </div>
                            <div class="firstListfont">{{topThree[0] ? topThree[0].name:''}}</div>
                            <div class="firstListlike ub ub-pc ub-ac">
                                <div class="like_item">
                                    <img src="../../assets/img/bigImg/zan.png">
                                </div>
                                <div class="like_text">
                                    {{topThree[0] ? topThree[0].zan_num:''}}
                                </div>
                            </div>
                        </div>
                        <div class="secondList ub ub-ver ub-ac" @click="clickDetail(topThree[1].cid)">
                            <div class="firstListImg">
                                <img :src="topThree[1]?topThree[1].img:''">
                            </div>
                            <div class="firstListfont">{{topThree[1] ? topThree[1].name:''}}</div>
                            <div class="firstListlike ub ub-pc ub-ac">
                                <div class="like_item">
                                    <img src="../../assets/img/bigImg/zan.png">
                                </div>
                                <div class="like_text">
                                    {{topThree[1] ? topThree[1].zan_num:''}}
                                </div>
                            </div>
                        </div>
                        <div class="thirdList ub ub-ver ub-ac" @click="clickDetail(topThree[2].cid)">
                            <div class="firstListImg">
                                <img :src="topThree[2]?topThree[2].img:''">
                            </div>
                            <div class="firstListfont">{{topThree[2] ? topThree[2].name:''}}</div>
                            <div class="firstListlike ub ub-pc ub-ac">
                                <div class="like_item">
                                    <img src="../../assets/img/bigImg/zan.png">
                                </div>
                                <div class="like_text">
                                    {{topThree[2] ? topThree[2].zan_num:''}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list-wrapper">
                        <div class="wrapper_item ub ub-ver ub-pc ub-ac" v-for="(item,index) in studentList" :key="index" @click="clickDetail(item.cid)">
                            <div class="firstListImg">
                                <img :src="item.img">
                            </div>
                            <div class="firstListfont">{{item.name}}</div>
                            <div class="firstListlike ub ub-pc ub-ac">
                                <div class="like_item">
                                    <img src="../../assets/img/bigImg/zan.png">
                                </div>
                                <div class="like_text">
                                    {{item.zan_num}}
                                </div>
                            </div>
                        </div>
                    </div>
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

