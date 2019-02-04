<template>
    <div class="calculator">
        <div class="display-container">
            <display/>
        </div>
        <div class="buttons-container">
            <keyboard/>
        </div>        
    </div>
</template>
<script>

import Display from '@/components/Display.vue'
import Keyboard from '@/components/Keyboard.vue'

export default {
   components: {
       Display,
       Keyboard
   } 
}
</script>
<style lang="less" scoped>

    @import './../styles/common.less';

    .calculator {
        margin: 0 auto;
        width: @button-size * @button-columns + 1;
        height: @button-size * @button-rows + 112;
        background-color: light-gray;
        border: 2px solid @button-border-color;
        border-radius: 5px;
    }

    .display-container {
        width: 100%;
    };

    .buttons-container {
        width: 100%;        
    }

</style>


