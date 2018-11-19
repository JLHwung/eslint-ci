module.exports = {
  "*.{js,json}": [
    "prettier --write",
    "git add"
  ],
  "README.md": [
    "yaspeller-ci"
  ]
}
