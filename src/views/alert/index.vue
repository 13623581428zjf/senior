<template>
    <div class="menu" @click.stop>
        <div class="menuItem">
            <div>
                <div :class="{'active':item.isActive}" v-for="(item,index) in sletMenu" :key="index" @click="selectTag(item)">{{item.concent}}</div>
            </div>
        </div>
        <div class="menuBtn ub ub-ac">
            <lx-button :disabled="isTag" class="seccessmenu" @click="seccess()" :title="isTag?'已经点亮':'确认点亮'"></lx-button>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

