// MIT Licensed https://github.com/wmartinmimi/spa-y
let spay = {

  get: function (url, dest, template) {
    spay.ajax("GET", url, dest, template);
  },

  ajax: function (method, url, dest, template) {
    let $ = globalThis.$;
    $.ajax({
      type: method,
      url: url,
      contentType: "application/json",
      dataType: "json",
      success: function (json) {
        let html = render($(template).html(), json);
        $(dest).append(html);
      }
    });
    
    // WARNING: INPUT SHOULD BE SANITIZED
    // BACKTICKS (`) SHOULD BE ESCAPED AND AVOIDED
    function render(str, map) {
      return new Function(...Object.keys(map), `return \`${str}\`;`)(...Object.values(map));
    }
  }
  
}