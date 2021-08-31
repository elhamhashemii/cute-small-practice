import { createStore } from 'vuex'

export default createStore({
  state: {
    feeling: '',
  },
  mutations: {
    theMood(state, mood) {
      state.feeling = mood.value;
      if(state.feeling == 'anx'){
        state.feeling = 'Your anxity is lying to you, you are loved! Trust Me'
      }else if(state.feeling == 'aln'){
        state.feeling = 'Oh sweetie, Actually YOU ARE NOT! I do care about u ... :D '
      }
      else if(state.feeling == 'dis'){
        state.feeling = 'Give yourself ANOTHER DAY, ANOTHER CHANCE! u will find your courage eventually ... Just dont give up!'
      }
      else if(state.feeling == 'dep'){
        state.feeling = 'You Know? In fact there is nothing worthy in the world ... take it easy and enjoy ur moments!'
      }
      else if(state.feeling == 'brd'){
        state.feeling = 'Just Take a deep breath ... Everything is gonna be AMAZING soon !'
      }
    }
  }
})
