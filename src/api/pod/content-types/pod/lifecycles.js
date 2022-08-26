strapi.db.lifecycles.subscribe((event) => {
  strapi.log.info("Pod event.", event);
});

