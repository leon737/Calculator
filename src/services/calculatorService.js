export default class CalculatorService {
    execute(buffer, display, operator) {
        const leftOperant = parseFloat(buffer);
        const rightOperand = parseFloat(display);
        switch(operator) {
            case '+':
                return leftOperant + rightOperand;
            case '-':
                return leftOperant - rightOperand;
            case 'x':
                return leftOperant * rightOperand;
            case '÷':            
                return leftOperant / rightOperand;
            case '%':
                return leftOperant / rightOperand * 100;            
        }
    }

    sqrt(value) {
        const operand = parseFloat(value);
        return Math.sqrt(operand);
    }
}