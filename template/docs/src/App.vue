<template>
<div>
    <doc-nav :navs="navs"></doc-nav>
    <doc-simulator :src="simulatorSrc"></doc-simulator>
    <router-view class="markdown-body" />
</div>
</template>

<script>
import docConfig from '../doc.config'
export default {
    name: 'app',
    data() {
        return {
            navs: docConfig.nav || [],
            simulatorSrc: `/demos${location.hash}`,
        }
    },
    methods: {}
}
</script>

<style lang="less">
body,
html {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
}
html {
    &::-webkit-scrollbar {
        height: 6px;
        width: 6px;
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: rgba(69,90,100,.2);
    }
}
@import './style/markdown.less';
</style>
