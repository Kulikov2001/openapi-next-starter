// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      'nuxt-openapi-docs-module',
      {
        folder: './docs',
        name: 'Api Docs',
        debug: true,
        list: true,
        footer:
          '<div><b>Nuxt OpenApi doc panel</b> - [<a href="https://on-org.github.io/nuxt-openapi-docs-module/docs/petstore-extended/components">Example</a>] [<a href="https://github.com/on-org/nuxt-openapi-docs-module">Info</a>] by <a href="https://github.com/s00d">s00d</a></div>',
        files: function () {
          return {
            petstore: 'petstore',
          };
        },
      },
    ],
  ],
});
