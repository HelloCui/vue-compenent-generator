<template>
    <div>
        <button type="button" name="button" @click="confirmShow = true">显示</button>
        <confirm-modal :show="confirmShow" :content="confirmTxt" @on-cancel="confirmShow = false" @on-confirm="confirmShow = false"></confirm-modal>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                confirmTxt: '呵呵',
                confirmShow: false
            }
        }
    }
</script>
