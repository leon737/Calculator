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
                case 'digit':
                    this.$store.dispatch('appendDigit', {digit: this.button.symbol});
                    break;
                case 'clear':
                case 'clearEntry':
                case 'memoryPlus':
                case 'memoryMinus':
                case 'memoryRecall':
                case 'sqrt':
                case 'equal':
                    this.$store.dispatch(this.button.action);
                    break;
                case 'decimal':
                    this.$store.dispatch('appendDecimal');
                    break;
                case 'plusMinus':
                    this.$store.dispatch('appendMinus');
                    break;
                case 'operator':
                    this.$store.dispatch('operator', {operator: this.button.symbol});
                    break;
            }
        }
    }
}
</script>
<style scoped>
    .button {
        cursor: pointer;
        border: solid 1px #777;                
        margin: auto auto;
        vertical-align: middle;
        line-height: 100px; 
        width: 100px;
        height: 100px;
        font-size: 36px;
        background-color: #aaa;
        color: #fff;
    }

    .button-2-rows {
        grid-row-end: span 2;
        line-height: 200px; 
        height: 200px;
    }

    .red {
        background-color: #bd1f1f;
    }

    .blue {
        background-color: #36369c;
    }

    .red-down {
        background-color: #831515;
    }

    .blue-down {
        background-color: #1d1d5a;
    }

    .gray-down {
        background-color: #817f7f;
    }

</style>


