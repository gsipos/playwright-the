import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
    preset: 'ts-jest',
    moduleFileExtensions: ['js', 'json', 'ts', 'jsx', 'tsx'],
    rootDir: './src',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    coverageDirectory: '../.tmp/coverage',
    collectCoverageFrom: ['./**/*.ts', './**/*.tsx'],
    coverageReporters: ['text', 'text-summary', 'lcov', 'html'],
});
