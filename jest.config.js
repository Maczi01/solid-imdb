// jest.config.js
module.exports = {
    // Other Jest configurations...
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        // Map image files to a mock file
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
};
