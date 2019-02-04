<template>
    <div :class="buttonClass" @click="click" @mousedown="mousedown" @mouseup="mouseup">
        {{button.symbol}}
    </div>
</template>
<script>

export default {
    data() {
        return {
            down: false
        }
    },
    props: {
        button: Object
    },
    computed: {
        buttonClass() {
            return `button ${this.button.spanRows ? 'button-2-rows' : ''} ${this.button.color ? this.button.color: 'gray'}${this.down ? '-down': ''}`
        }
    },
    methods: {   
        mousedown() { this.down = true },
        mouseup() { this.down = false },
        click() {
            switch(this.button.action) {                
                case 'function':
                    this.$store.dispatch(this.button.function);
                    break;
                case 'digit':
                    this.$store.dispatch('appendDigit', {digit: this.button.symbol});
                    break;
                case 'operator':
                    this.$store.dispatch('operator', {operator: this.button.symbol});
                    break;
            }
        }
    }
}
</script>

<style lang="less" scoped>

    @import './../styles/common.less';

    .button { 
        cursor: pointer;
        border: solid 1px @button-border-color;                
        margin: auto auto;
        vertical-align: middle;
        line-height: @button-size; 
        width: @button-size;
        height: @button-size;
        font-size: @button-font-size;
        background-color: @button-background-color;
        color: @button-text-color;
    }

    .button-2-rows {
        grid-row-end: span 2;
        line-height: @button-size * 2; 
        height: @button-size * 2;
    }

     .red {
        background-color: @button-red;
    }

    .blue {
        background-color: @button-blue;
    }

    .red-down {
        background-color: darken(@button-red, 20%);
    }

    .blue-down {
        background-color: darken(@button-blue, 20%);
    }

    .gray-down {
        background-color: darken(@button-background-color, 20%);
    }
</style>


