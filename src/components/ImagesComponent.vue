<template>
  <img class="grid-gallery__image responsive" :src="srcImage" />
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

.responsive {
  width: 80%;
  max-width: 600px;
  height: auto;
}
</style>
