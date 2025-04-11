export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'], // Updated path
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-react', { runtime: 'automatic' }]
        ]
      }]
    },
    extensionsToTreatAsEsm: ['.jsx']
  };