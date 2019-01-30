<template>
    <div :class="buttonClass" @click="click">
        {{button.symbol}}
    </div>
</template>
<script>
export default {
    props: {
        button: Object
    },
    computed: {
        buttonClass() {
            return `button ${this.button.spanRows ? 'button-2-rows' : ''} ${this.button.color ? this.button.color: ''}`
        }
    },
    methods: {        
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

</style>


