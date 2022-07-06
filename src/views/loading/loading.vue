<template>
    <div class="loading ub ub-ac ub-pc ub-ver" :class="{'isalpha':alpha === 1}">
        <div class="loadIcon">
            <img src="@/assets/img/loading.gif">
        </div>
        <div class="text">{{this.loadingText}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapState({
            alpha: state => state.demo2.alpha,
            fullScreen: state => state.demo2.fullScreen
        }),
        loadingText() {
            return this.$store.state.demo2.loadingText
        }
    },
    created() {},
    mounted() {}
}
</script>

<style lang="scss" scoped>
.loading{
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
    position: fixed;
    top: 0;
    left: 0;
    &.isalpha{
    background-color: rgba(150, 32, 32, 0.3);
    }
}
.loadIcon{
    width: 80px;
    height: 80px;
}
.loadIcon img{
     width: 100%;
}
.loading .text{
    margin-top: 20px;
}
</style>
