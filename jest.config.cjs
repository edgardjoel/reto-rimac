module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Cambia a 'node' si no usas React
  setupFiles: ['./jest.setup.cjs'], // Asegúrate de que este archivo existe

  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utilities/(.*)$': '<rootDir>/src/utilities/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@adapters/(.*)$': '<rootDir>/src/adapters/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@dto/(.*)$': '<rootDir>/src/dto/$1',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.(test|spec).{ts,tsx}', // Excluye archivos de prueba
    '!src/**/*index.{ts,tsx}', // Excluye archivos index de la cobertura
    '!src/data/**', // Excluye data
    '!src/dto/**', // Excluye dto
    '!src/config/**', // Excluye config
    '!src/interfaces/**', // Excluye interfaces
  ],
  testPathIgnorePatterns: ['/__tests__/.*index.ts$'],
};
