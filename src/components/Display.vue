<template>
    <div class="display">
        <div class="memory">
            {{memoryMark}}
        </div>
        <div class="number">
            {{display}}
        </div>
    </div>
</template>
<script>

import { mapState } from 'vuex';

export default {
    computed: mapState({
        display: 'display',
        memoryMark: state => state.memory ? 'M' : ''
    })
}
</script>
<style lang="less" scoped>

     @import './../styles/common.less';

    .display {
        background-color: @display-background-color;
        padding: 25px;        
    }

    .memory {
        font-size: @display-memory-font-size;
        text-align: left;
        height: 5px;
        font-weight: bold;
    }

    .number {        
        text-align: right;   
        font-size: @display-font-size;
    }
   
</style>


