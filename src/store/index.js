import Vue from "vue";
import Vuex from "vuex";
import ImageService from "@/services/imageService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    tabSelect: 1,
  },
  mutations: {
    getImages(state, payload) {
      state.images = payload;
    },
    setTabSelect(state, payload) {
      state.tabSelect = payload;
    },
  },
  actions: {
    async getImages({ commit }) {
      const { data } = await ImageService.GetImage();
      commit("getImages", data);
    },
    setTabSelect({ commit }, tabSelect) {
      commit("setTabSelect", tabSelect);
    },
  },
  getters: {
    getImagesForShow: (state) => {
      let images = state.images;
      if (state.tabSelect === 2) {
        images = state.images.filter((image) => {
          return image.id % 2 === 0;
        });
      } else if (state.tabSelect === 3) {
        images = state.images.filter((image) => {
          return image.id % 2 !== 0;
        });
      }
      return images;
    },
  },
  modules: {},
});
