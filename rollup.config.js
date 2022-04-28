import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourceMap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourceMap: true
            }
        ],
        plugins: [
            peerDepsExternalPlugin(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                config: {
                    path: './postcss.config.js'
                },
                extensions: ['.css'],
                extract: false
            }),
        ]
    }, {
        input: 'src/Base.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourceMap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourceMap: true
            }
        ],
        plugins: [
            peerDepsExternalPlugin(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                config: {
                    path: './postcss.config.js'
                },
                extensions: ['.css'],
                extract: false
            }),
        ]
    },
    {
        input: 'src/Utilities.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourceMap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourceMap: true
            }
        ],
        plugins: [
            peerDepsExternalPlugin(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                config: {
                    path: './postcss.config.js'
                },
                extensions: ['.css'],
                extract: false
            }),
        ]
    }, {
        input: 'src/Widgets.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourceMap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourceMap: true
            }
        ],
        plugins: [
            peerDepsExternalPlugin(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                config: {
                    path: './postcss.config.js'
                },
                extensions: ['.css'],
                extract: false
            }),
        ]
    }, {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [
            dts()
        ],
        external:[/\.css$/]
    }
]