<template>
<div class="demo-home">
    <demo-nav :navs="navs"></demo-nav>
</div>
</template>

<script>
import docConfig from '../doc.config'
export default {
    data() {
        return {
            navs: docConfig.nav || []
        }
    },
    mounted() {}
}
</script>
