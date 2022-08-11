<template>
  <div class="container-images">
    <div class="tabs">
      <button class="tab" @click="setTabSelect(1)">All</button>
      <button class="tab" @click="setTabSelect(2)">Pairs</button>
      <button class="tab" @click="setTabSelect(3)">Odd</button>
    </div>
    <div class="grid-gallery">
      <template v-for="image in getImagesForShow">
        <ImagesComponent :srcImage="image.url" :key="image.id">
        </ImagesComponent>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ImagesComponent from "../components/ImagesComponent";
export default {
  name: "GridImages",
  components: {
    ImagesComponent,
  },
  methods: {
    ...mapActions(["setTabSelect"]),
  },
  computed: {
    ...mapGetters(["getImagesForShow"]),
  },
};
</script>

<style lang="scss" scoped>
.container-images {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
}
.tabs {
  > button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #e31135d9;
    color: #fff;
  }
  > button:hover {
    background-color: #e3113447;
  }
}

.grid-gallery {
  margin-top: 2rem;
}
</style>
