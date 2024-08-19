import { createStore } from 'vuex'
import axios from 'axios'
import {useCookies} from 'vue-cookies'
import router from '@/router'


axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')


/*eslint-disable */

export default createStore({
  state: {
    users:null,
    fruits:null

  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.peers = payload
    },
    setFruits(state, payload){
      state.fruits = payload
    }
  },
  actions: {
    async addUser({commit}, info){
      let data = await axios.post('http://localhost:5002/users/', info)
      console.log(data);
      
    }, 
    async login({commit}, info){
      let {data} = await axios.post('http://localhost:5002/users/login', info)
      console.log(data);
      $cookies.set('token', data.token)

      await router.push('/')
      location.reload()
      
    },
   async getFruits({commit}){
      let {data} = await axios.get('http://localhost:5002/fruits')
      commit('setFruits', data)
      console.log(data);
      
    },
    async addToCart({commit}, fruit_id){ 
      let {data} = await axios.post('http://localhost:5002/fruits/cart', {id:fruit_id}) 
      console.log(data);
      
    }
  },
  modules: {
  }
})
