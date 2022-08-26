module.exports = (plugin) => {
  plugin.controllers.pod.findOne = (ctx) => {
    console.log('test');
  };

  return plugin;
};
