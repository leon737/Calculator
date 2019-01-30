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
<style scoped>
    .calculator {
        margin: 0 auto;
        width: 501px;
        height: 612px;
        background-color: light-gray;
        border: 2px solid #777;
        border-radius: 5px;
    }

    .display-container {
        width: 100%;
    };

    .buttons-container {
        width: 100%;        
    }

</style>


