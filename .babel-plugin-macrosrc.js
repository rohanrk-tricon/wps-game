module.exports = {
  presets: ['@babel/preset-env'],
  styledComponents: {
    displayName: process.env.NODE_ENV !== 'production',
  },
};
