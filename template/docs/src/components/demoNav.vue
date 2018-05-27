<template>
<div class="nav">
    <div v-for="nav in navsShow">
        <div class="nav-name">{{nav.name}}</div>
        <div class="group" v-for="group in nav.groups">
            <div class="group-name">
                {{group.name}}
            </div>
            <div class="nav-item" v-for="item in group.list">
                <div class="item-inner" @click="selectItem(item)" v-if="!/^(http|https)/.test(item.path)">
                    <span class="title">{{item.title.split('-')[0]}}</span>
                    <span class="sub">{{item.title.split('-')[1] || ''}}</span>
                </div>
                <a class="item-inner" :href="item.path" v-if="/^(http|https)/.test(item.path)" target="_blank">
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
    name: 'demo-nav',
    data() {
        return {
            navsShow: []
        }
    },
    props: {
        navs: Array
    },
    methods: {
        selectItem(item) {
            this.$router.push(item.path)
        }
    },
    mounted() {
        let navs = this.navs.slice()
        for (let i = navs.length - 1; i >= 0; i--) {
            let groups = navs[i].groups
            if (groups && groups.length) {
                for (let j = groups.length - 1; j >= 0; j--) {
                    let list = groups[j].list
                    if (list && list.length) {
                        list = list.filter(item => !item.noExample)
                    }
                    if (!list || !list.length) groups.splice(j, 1)
                }
            }
            if (!groups || !groups.length) navs.splice(i, 1)
        }
        this.navsShow = navs
    }
}
</script>

<style lang="less" scoped>
@border-base: #f0f0f0;
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
    .nav-name {
        line-height: 22px;
        padding: 10px 0 10px 10px;
        color: #666;
    }
    .nav-name {
        font-size: 18px;
        font-weight: 700;
    }
    .group {
        border-top: solid 1px @border-base;
        border-bottom: solid 1px @border-base;
    }
    .group-name {
        padding-left: 50px;
        line-height: 40px;
        font-size: 14px;
        color: #999;
    }
    .nav-item {
        position: relative;
        padding-left: 10px;
        line-height: 50px;
        background-color: #fff;
        font-size: 16px;
        cursor: pointer;
        .sub {
            padding-left: 2px;
            font-size: 14px;
            color: #999;
        }
        &:after {
            content: '';
            position: absolute;
            right: 10px;
            top: 50%;
            margin-top: -6px;
            display: block;
            width: 10px;
            height: 10px;
            border: solid #999;
            border-width: 2px 2px 0 0;
            transform: rotate(45deg);
        }
        .item-inner {
            display: block;
            height: 100%;
            border-bottom: solid 1px @border-base;
        }
        &:last-child {
            .item-inner {
                border-bottom: 0;
            }
        }
    }
}
</style>
