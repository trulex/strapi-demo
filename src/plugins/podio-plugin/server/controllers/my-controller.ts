import '@strapi/strapi';

export default ({ strapi }: { strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('podio-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
