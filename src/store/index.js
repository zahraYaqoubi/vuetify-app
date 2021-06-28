import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    details: [
      {
        title: "job type",
        menuItems: ["Homecare", "Developer", "Nurse", "Doctor"],
        size: 9
      }, {
        title: "Address",
        menuItems: ["Kowloon - Kowloon City", "Oxford City", "Enghelab - Qom City", "Poonak - Tehran City"],
        size: 9

      },
      {
        title: "CG rank",
        menuItems: ["Healthcare worker (HCW)", "Hospital worker", "Clinic worker"],
        size: 6,
        countButton: true
      },
      {
        title: "Topic",
        menuItems: ["Mobility aid and feeding", "Healthcare", "IT", "Enviroment"],
        size: 7
      },
      {
        title: "CG Gender",
        menuItems: ["Female", "Male", "Don't want to clarify"],
        size: 7
      } ]
  },
  getters: {
    details: state => {
      return state.details;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
