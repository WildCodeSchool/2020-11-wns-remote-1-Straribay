module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};