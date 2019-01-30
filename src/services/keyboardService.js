export default class KeyboardService {
    
    appendDigit(display, digit) {
        if (!this.canAppend(display)) return display;
        if (display + '' == '0')
            return digit;
        else
            return display += '' + digit;
    }

    appendDecimal(display) {
        if (!this.canAppend(display)) return display;
        if (('' + display).indexOf('.') < 1) {
            return display + '.';
        }
        return display;
    }

    appendMinus(display) {
        if (!this.canAppend(display)) return display;
        if (parseFloat(display) == 0) return display;
        if ((display + '').charAt(0) == '-')
            return (display + '').slice(1);
        else
            return '-' + display;
    }


    canAppend(display) {
        return (display + '').length < 16;
    }

}