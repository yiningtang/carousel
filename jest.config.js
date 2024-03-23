
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./setupTests.ts'],
  "transform": {
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    "^.+\\.svg$": "<rootDir>/svgTransform.js" 
 },
  moduleNameMapper: {
  '@components/(.*)$': '<rootDir>/src/components/$1',
  '@/(.*)$': '<rootDir>/src/$1',
  '^@assets/(.*)$': '<rootDir>/assets/$1',
  '^@src/(.*)$': '<rootDir>/src/$1'
},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
};