<template>
  <v-row justify="center" align="center">
    <v-col md="10">
      <v-card class="mx-auto">
        <v-container fluid>
          <v-row dense v-if="captains">
            <v-col
              v-for="captain in captains"
              :key="captain.title"
              sm="6"
            >
              <v-card>
                <v-img
                  :src="getBestImageSrc(captain.Image.formats)"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
                >
                  <v-card-title v-text="captain.title"></v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    async asyncData({$axios}) {
      const captains = await $axios.$get('captains');
      return { captains };
    }
  }
</script>
