<template>
  <img class="grid-gallery__image" :src="srcImage" />
</template>

<script>
export default {
  props: {
    srcImage: String,
  },
};
</script>

<style lang="scss" scoped>
.grid-gallery__image {
  margin: 1rem;
}
</style>
