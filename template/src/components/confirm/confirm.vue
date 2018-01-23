<template>
    <div :class="classes" v-show="show">
        <div class="masker" @touchmove.prevent.stop>
            <div class=" confirm">
                <div class="confirm-title">{{text}}
                    <p class="stress-text" v-html="content"></p>
                </div>
                <div class="choose bd-top" v-if="!onlySure">
                    <div class="choose-text cancel half-width bd-right" @click="cancel" v-html="">{{cancelTxt}}</div>
                    <div class="choose-text sure half-width" @click="confirm">{{sureTxt}}</div>
                </div>
                <div class="choose bd-top border-top-1px" v-if="onlySure">
                    <div class="choose-text sure" @click="confirm">{{sureTxt}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {ccsPrefix} from '../../custom'
    export default{
        props: {
            show: {
                type: Boolean,
                default: false
            },
            //显示的文字
            text: '',
            //强调文字
            content: {
                type: String,
                default: ''
            },
            cancelTxt: {
                type: String,
                default: '取消'
            },
            sureTxt: {
                type: String,
                default: '确认'
            },
            onlySure: {
                type: Boolean,
                default: false
            },
            //需要选择回调函数时的函数名标识
            type: String
        },
        methods: {
            cancel(){
                this.$emit('on-cancel');
            },
            confirm() {
                this.$emit('on-confirm', this.type);
            },
        },
        computed: {
            classes () {
                return [
                    `${ccsPrefix}confirm`
                ];
            }
        }
    }
</script>
