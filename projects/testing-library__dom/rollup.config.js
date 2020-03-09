import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default [
    {
        input: require.resolve(
            '@testing-library/dom/dist/@testing-library/dom.esm.js'
        ),
        output: {
            file: './dom.js',
            format: 'es',
        },
        plugins: [
            resolve({
                browser: true,
                preferBuiltins: false,
            }),
            commonjs(),
            replace({
                querySelectorAll: 'querySelectorAllWithShadowDOM',
            }),
        ],
    },
];
