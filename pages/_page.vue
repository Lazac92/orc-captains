<template>
  <v-row justify="center" align="center">
    <v-col md="10">
      <v-card class="mx-auto">
        <v-container fluid v-if="page">
         <h1>{{page.pageTitle}}</h1>
          <div v-for="(content, key) in page.content" :key="key">
            <component
              :is="getComponentName(content.__component)"
              v-model="page.content[key]"></component>
          </div>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    async asyncData({params, $axios, redirect}) {
      const page = await $axios.$get('pages?url=' + params.page)
      if(!page[0]) {
        redirect('/');
      }
      return { page: page[0] };
    },
    methods: {
      getComponentName(name) {
        return {
          'page-content.short-text': 'custom-text',
          'page-content.single-image': 'custom-image'
        }[name];
      }
    }
  }
</script>
