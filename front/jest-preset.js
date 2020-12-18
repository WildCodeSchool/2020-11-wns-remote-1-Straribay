module.exports = {
  preset: 'jest',
  testEnvironment: 'react',
  modulePathIgnorePatterns: ['<rootDir>/back'],
  globals: {
    'jest': {
      isolatedModules: true,
    },
  },
};