import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom'
    },
})


// export default {
//     // Specify the pattern for test files, including those in the __tests__ directory
//     testMatch: ['**/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}'],
// };