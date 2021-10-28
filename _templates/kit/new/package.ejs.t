---
to: packages/<%=type%>/<%=name%>/package.json
---

{
  "name": "@dusk-network/<%=name%>",
  "version": "4.0.0",
  "description": "Dusk UI Kit - <%=Name%>",
  "bugs": {
    "url": "https://github.com/dusk-network/dusk-ui-kit/issues"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:dusk-network/dusk-ui-kit.git",
    "directory": "packages/<%=type%>/<%=name%>"
  },
  "type": "module",
  "module": "index.js",
  "scripts": {
    "test": "echo \"Work in progress...\" && exit 1"
  }
}