import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    siteName: 'movee',
    telNum: '8(800)-080-12-13',
    socialNetworks: {
      YOUTUBE: {
        name: "youtube",
        icon: "static/svg/youtube.svg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      VK: {
        name: "vkontakte",
        icon: "static/svg/vk.svg",
        link: "https://vk.com/id0?7361243"
      },
      FACEBOOK: {
        name: "facebook",
        icon: "static/svg/facebook.svg",
        link: "https://www.facebook.com/"
      },
      INSTAGRAM: {
        name: "instagram",
        icon: "static/svg/instagram.svg",
        link: "https://www.instagram.com/"
      }
    }
  },
  getters: {
    siteName(state) {
      return state.siteName.toUpperCase();
    },
    // telNum(state) {
    //   return state.telNum;
    // }
  },
  mutations: {

  },
  actions: {

  }
})
