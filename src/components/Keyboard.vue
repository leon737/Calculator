<template>
    <div class="keyboard">
        <key v-for="key in keys" :button="key" :key="key.symbol"/>
    </div>
</template>
<script>

import keys from '@/models/keys.json'
import Key from '@/components/Key.vue'

export default {
    components: {
        Key
    },
    data() {
        return {
            keys
        }
    }
}
</script>
<style lang="less" scoped>

     @import './../styles/common.less';

    .keyboard {
        display: grid;
        grid-template-rows: repeat(@button-rows, @button-size);
        grid-template-columns: repeat(@button-columns, @button-size);
        user-select: none;
    }
</style>


