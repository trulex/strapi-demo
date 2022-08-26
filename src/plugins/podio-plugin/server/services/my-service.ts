import '@strapi/strapi';

export default ({ strapi }: { strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },
});
