// eslint-disable-next-line import/no-extraneous-dependencies
// const sprite = require('svg-sprite-loader/runtime/sprite.build')
// const spriteContent = sprite.stringify()

const DEFAULT_PATHS = {
  styles: { path: 'style.css', sri: '' },
  production: { path: 'bundle.js', sri: '' },
  vendor: { path: '404', sri: '' },
}

module.exports = (initialHtml = '', paths = DEFAULT_PATHS) =>
  `<!doctype html>
<html lang="en" class="h-100">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="theme-color" content="#FFFFFF">
  <title>Dusk UI Kit</title>
  <link rel="stylesheet" media="all" href="/${paths.styles.path}" integrity="${paths.styles.sri}" />
</head>
<body class="h-100">
  <div id="root">${initialHtml}</div>
  <script src="/${paths.vendor.path}"></script>
  <script src="/${paths.production.path}"></script>
  <noscript>
  Por favor, habilite o javascript no seu navegador.
  </noscript>
</body>
</html>`
