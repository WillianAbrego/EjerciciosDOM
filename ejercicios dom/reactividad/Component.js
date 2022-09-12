const Component = (function () {
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  //agregar los metodos al prototipo del constructor del componente

  //Render UI
  Constructor.prototype.render = function () {
    const $el = d.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);

    console.log(this.data);
  };

  //Actualizat el saate de forma reactiva
  Constructor.prototype.setState = function (obj) {
    for (const key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };

  //Obteer una copia inmutable del state
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };
  return Constructor;
})();
