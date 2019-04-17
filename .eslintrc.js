module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "eol": ["never"], 
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "never",
          "normal": "always",
          "component": "always"
        },
    "svg": "always",
    "math": "always"
    }]
  } 
}   
