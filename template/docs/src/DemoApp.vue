<template>
<div>
    <demo-header :title="title"></demo-header>
    <router-view class="view" />
</div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            title: 'Demo'
        }
    },
    watch: {
        $route(newVal) {
            let arr = (newVal.meta.name || '').split('-'),
                title = arr.map(str => str.trim()).join(' ')
            this.title = title || 'Demo'
        }
    }
}
</script>

<style lang="less">
html {
    &::-webkit-scrollbar {
        height: 0;
        width: 0;
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 0;
        background-color: transparent;
    }
    &:hover {
        &::-webkit-scrollbar {
            height: 2px;
            width: 2px;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 2px;
            background-color: rgba(69,90,100,.5);
        }
    }
}
.view {
    padding-top: 44px;
}
.demo {
    &-title {
        padding: 20px 10px 10px;
        font-size: 14px;
        color: #333;
    }
    &-intro {
        padding: 0 10px 5px;
        font-size: 12px;
        color: #666;
    }
}
</style>
