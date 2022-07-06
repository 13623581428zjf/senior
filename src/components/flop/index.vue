<template>
    <div>
        <button @click="stopTime()">停止</button>
        <button @click="beginTime()">开始</button>
        <p @click="em()">触发EventBus</p>
    </div>
</template>
<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

