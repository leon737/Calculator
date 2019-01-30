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
<style scoped>
    .display {
        background-color: #8489c2;
        padding: 25px;        
    }

    .memory {
        font-size: 18px;
        text-align: left;
        height: 5px;
        font-weight: bold;
    }

    .number {        
        text-align: right;   
        font-size: 48px;
    }
   
</style>


