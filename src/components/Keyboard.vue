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
<style scoped>
    .keyboard {
        display: grid;
        grid-template-rows: repeat(5, 100px);
        grid-template-columns: repeat(5, 100px);
        user-select: none;
    }
</style>


