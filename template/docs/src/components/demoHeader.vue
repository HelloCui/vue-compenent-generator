<template>
<header class="demo-header">
    <div class="left" :class="hasBack ? '' : 'noBack'" @click="back">
        <slot name="left"></slot>
    </div>
    <div class="center">{{title}}</div>
    <div class="right">
        <slot name="right"></slot>
    </div>
</header>
</template>

<script>
export default {
    name: 'demoHeader',
    data() {
        return {}
    },
    props: {
        title: {
            type: String,
            default: '请使用title设置标题'
        },
        hasBack: {
            type: Boolean,
            default: true
        },
        backFun: {
            type: Function
        }
    },
    component: {},
    methods: {
        back() {
            if (this.backFun) {
                this.backFun();
            } else {
                this.$router.back();
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../style/mixins.less';
@header-color: #fff;
.demo-header {
    .row();
    background-color: #318bf5;
    position: fixed;
    top: 0;
    z-index: 100;
    left: 0;
    right: 0;
    div {
        .col();
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 18px;
    }
    .left {
        position: relative;
        font-size: 16px;
        color: @header-color;
        font-size: 16px;
    }
    .left:before {
        content: '';
        position: absolute;
        top: 15px;
        left: 12px;
        width: 10px;
        height: 10px;
        border-left: 2px solid @header-color;
        border-top: 2px solid @header-color;
        transform: rotate(-45deg);
    }
    .left.noBack:before {
        content: '';
        border: none;
    }
    .center {
        -webkit-flex: 3;
        flex: 3;
        font-size: 18px;
        color: @header-color;
    }
    .right {
        color: @header-color;
        font-size: 16px;
    }
}
</style>
