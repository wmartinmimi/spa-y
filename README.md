# spa-y

A simple and lightweight js library for creating dynamic html from json endpoints using html templates.

```html
<div id="out"></div>

<template id="template">
  <p>${body}</p>
</template>

<script>
  spay.get("/example.json", "#out", "#template");
</script>
```

## Imports

```html
<!-- this library uses jquery -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/wmartinmimi/spa-y@1.0.0/spay.js"></script>
```

## Example usage

```html
<!-- html to append in -->
<div id="example"></div>

<!-- template to use -->
<!-- uses string templating syntax -->
<!-- avoid/escape backticks (`) -->
<template id="template">
  <h2>${header}</h2>
  <p>${body}</p>
</template>

<!-- usage -->
<script>
  // spay.get( url, destination, template )
  // IMPORTANT: JSON ENDPOINT SHOULD HAVE SANITIZED OUTPUT
  spay.get("/example.json", "#example", "#template");

  /* example.json
  {
    "header": "Hello dev",
    "body": "Welcome to SPA-Y"
  }
  */

  /* outputs
    <h2>Hello dev</h2>
    <p>Welcome to SPA-Y</p>
  */
</script>
```

For full html, see [/example.html](/example.html).

For more advanced usage, see [/advanced.html](/advanced.html).

## Issues and Pull Requests

Any issues or pull requests are welcomed.

## License

Licensed under ```MIT License```.
