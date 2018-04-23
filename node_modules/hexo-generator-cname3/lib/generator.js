var readCNAME;

module.exports = function(locals) {
  return {
    path: 'CNAME',
    data: readCNAME(this.config)
  };
};

readCNAME = function(config) {
  if ((config != null ? config.cname : void 0) == null) {
    throw new Error("You must add a cname property to _config.yml - i.e 'cname: hexo.io'");
  }
  return config.cname;
};
