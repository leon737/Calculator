import Vue from 'vue'
import Vuex from 'vuex'
import KeyboardService from '@/services/keyboardService'
import CalculatorService from '@/services/calculatorService'
import MemoryService from '@/services/memoryService'

Vue.use(Vuex)

const keyboardService = new KeyboardService()
const calculatorService = new CalculatorService()
const memoryService = new MemoryService()

export default new Vuex.Store({
  state: {
      display: 0,
      operator: '',
      tempBuffer: '',
      buffer: '',
      newEntry: false,
      memory: 0,
      clearMemory: false
  },
  mutations: {
    clearEntry(state) {
      state.display = 0;
    },
    clearBuffer(state) {
      state.buffer = '';
      state.newEntry = false;
      state.operator = '';
    },
    appendDigit(state, payload) {     
      state.display = keyboardService.appendDigit(state.display, payload.digit);
      state.newEntry = false;
    },    
    appendDecimal(state) {
      state.display = keyboardService.appendDecimal(state.display);
      state.newEntry = false;
    },
    appendMinus(state) {
      state.display = keyboardService.appendMinus(state.display);
      state.newEntry = false;
    },
    operator(state, payload) {
      if (state.buffer) {
        state.display = calculatorService.execute(state.buffer, state.display, state.operator);        
      }
      state.operator = payload.operator;
      state.newEntry = true;      
    },
    sqrt(state) {
      state.display = calculatorService.sqrt(state.display);
    },
    copyDisplayToTempBuffer(state) {
      state.tempBuffer = state.display;
    },
    copyTempBufferToBuffer(state) {
      state.buffer = state.tempBuffer;
    },
    equal(state) {
      if (state.buffer || state.tempBuffer) {
        if (!state.buffer)
          state.buffer = state.tempBuffer;
        state.display = calculatorService.execute(state.buffer, state.display, state.operator);        
      }
    },
    clearOperator(state) {
      state.operator = '';
    },
    setReadyForNewEntry(state) {
      state.tempBuffer = '';      
      state.newEntry = true;
    },
    memory(state, payload) {
      state.memory = memoryService.set(state.display, state.memory, payload.action);
    },
    memoryRecall(state) {
      state.display = state.memory;      
      state.clearMemory = true;
    },
    clearMemory(state) {
      state.memory = 0;
    },
    resetClearMemoryFlag(state) {
      state.clearMemory = false;
    }
  },
  actions: {
      clear({commit}) {
        commit('clearEntry');
        commit('clearBuffer');
        commit('resetClearMemoryFlag');
      },
      clearEntry({commit}) {
        commit('clearEntry');
        commit('resetClearMemoryFlag');
      },
      appendDigit({commit, state}, payload) {
        if (state.newEntry) {
          commit('copyTempBufferToBuffer');
          commit('clearEntry');
        }
        commit('appendDigit', payload);
        commit('resetClearMemoryFlag');
      },    
      appendDecimal({commit, state}) {
        if (state.newEntry) {
          commit('copyTempBufferToBuffer');
          commit('clearEntry');
        }
        commit('appendDecimal');
        commit('resetClearMemoryFlag');
      },
      appendMinus({commit, state}) {
        if (state.newEntry) {
          commit('copyTempBufferToBuffer');
          commit('clearEntry');
        }
        commit('appendMinus');
        commit('resetClearMemoryFlag');
      },
      operator({commit}, payload) {
        commit('copyDisplayToTempBuffer');
        commit('operator', payload);
        commit('resetClearMemoryFlag');
      },
      sqrt({commit}) {
        commit('sqrt');
        commit('clearOperator');
        commit('setReadyForNewEntry');
        commit('resetClearMemoryFlag');
      },
      equal({commit}) {
        commit('equal');
        commit('setReadyForNewEntry');
        commit('resetClearMemoryFlag');
      },
      memoryPlus({commit}) {
        commit('memory', {action: '+'});
        commit('resetClearMemoryFlag');
      },
      memoryMinus({commit}) {
        commit('memory', {action: '-'});
        commit('resetClearMemoryFlag');
      },
      memoryRecall({commit, state}) {
        if (state.clearMemory) {
          commit('clearMemory');
          commit('resetClearMemoryFlag');
        }
        else {
          commit('memoryRecall');
          commit('setReadyForNewEntry');
        }
      }        
  }
})
