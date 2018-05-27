<template>
<div class="nav">
    <div v-for="nav in navs">
        <div class="nav-name">{{nav.name}}</div>
        <div class="group" v-for="group in nav.groups">
            <div class="group-name">
                {{group.name}}
            </div>
            <div class="nav-item" :class="{'actived': item.path == currentPath}" v-for="item in group.list" @click="selectItem(item)">
                <div v-if="!/^(http|https)/.test(item.path)">
                    <span class="title">{{item.title.split('-')[0]}}</span>
                    <span class="sub">{{item.title.split('-')[1] || ''}}</span>
                </div>
                <a :href="item.path" v-if="/^(http|https)/.test(item.path)" target="_blank">
                    <span class="title">{{item.title.split('-')[0]}}</span>
                    <span class="sub">{{item.title.split('-')[1] || ''}}</span>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'doc-nav',
    data() {
        return {
            currentPath: location.hash.replace('#', '')
        }
    },
    props: {
        navs: Array
    },
    methods: {
        selectItem(item) {
            if (!/^(http|https)/.test(item.path)) {
                this.$router.push(item.path)
            }
        }
    },
    watch: {
        $route(to, from) {
            this.currentPath = location.hash.replace('#', '')
        }
    }
}
</script>

<style lang="less" scoped>
.nav {
    a {
        &:active,
        &:hover,
        &:link,
        &:visited {
            color: inherit;
            text-decoration: none;
        }
    }
    position: fixed;
    top: 50px;
    bottom: 0;
    width: 250px;
    overflow-y: scroll;
    .nav-item,
    .nav-name {
        line-height: 22px;
        padding: 10px 0 10px 50px;
        color: #666;
    }
    .nav-name {
        font-size: 18px;
        font-weight: 700;
    }
    .group-name {
        padding-left: 50px;
        line-height: 40px;
        font-size: 14px;
        color: #999;
    }
    .nav-item {
        font-size: 16px;
        cursor: pointer;
        .sub {
            padding-left: 2px;
            font-size: 14px;
            color: #999;
        }
        &.actived,
        &:hover {
            color: #fff;
            background-color: rgba(51,51,51,.8);
            .sub {
                color: rgba(255,255,255,.9);
            }
        }
    }
    &::-webkit-scrollbar {
        height: 2px;
        width: 2px;
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: transparent;
    }
    &:hover::-webkit-scrollbar-thumb {
        background-color: rgba(69,90,100,.2);
    }
}
</style>
