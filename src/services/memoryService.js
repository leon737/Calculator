export default class MemoryService {
    set(display, memory, action) {
        const displayOperand = parseFloat(display);
        switch(action) {
            case "+":
              return memory + displayOperand;
            case "-":
              return memory - displayOperand;
          }
    }
}