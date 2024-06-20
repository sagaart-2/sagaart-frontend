const styleLintConfig = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
  },
};

export default styleLintConfig;
