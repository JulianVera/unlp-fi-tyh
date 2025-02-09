module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // Integración Prettier
  ],
  rules: {
    'prettier/prettier': ['error'], // Muestra errores de Prettier
  },
};
