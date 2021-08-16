import Vue from "vue";

if (!Vue.getBestImageSrc) {
  Vue.getBestImageSrc = true
  Vue.mixin({
    methods: {
      getBestImageSrc(imageFormats) {
        return this.$config.baseImageURL +
          (imageFormats.large?.url || imageFormats.medium?.url || imageFormats.small?.url || imageFormats.thumbnail?.url);
      }
    }
  });
}
