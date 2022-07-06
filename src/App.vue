<template>
    <div id="app">
        <router-view></router-view>
        <!-- 全局loading -->
        {{this.pageLoading}}
        <loading v-if="this.pageLoading"></loading>
    </div>
</template>

<script>
import store from '@/store'
import loading from '../src/views/loading/loading.vue'
export default {
    name: 'App',
    components: {
        loading
    },
    computed: {
        pageLoading() {
            return store.state.demo2.loading
        }
    },
    data() {
        return {}
    },
    created() {
        if (!this.$isMobile()) {
            document.body.style.maxWidth = '750px'
            document.body.style.margin = '0 auto'
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
html,body,#app{
    width: 100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</style>
