---
to: packages/<%= h.inflection.pluralize(type) %>/<%= h.inflection.dasherize(name) %>/package.json
---

{
  "name": "@dusk-network/<%= h.inflection.dasherize(name) %>",
  "version": "0.0.0",
  "description": "Dusk UI Kit - <%= h.inflection.classify(name) %>",
  "bugs": {
    "url": "https://github.com/dusk-network/dusk-ui-kit/issues"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:dusk-network/dusk-ui-kit.git",
    "directory": "packages/<%= h.inflection.pluralize(type) %>/<%= h.inflection.dasherize(name) %>"
  },
  "type": "module",
  "main": "index.js",
  "module": "index.js",
  "scripts": {
    "test": "echo \"Work in progress...\" && exit 1"
  }
}