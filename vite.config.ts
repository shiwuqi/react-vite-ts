import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const useDevMode = false;

export default ({ mode }) => {
    return defineConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '~antd': path.resolve(path.resolve(__dirname), 'node_modules/antd/'),
            },
        },
        plugins: [
            ...(
                useDevMode
                    ? []
                    : [
                        react(),
                    ]
            ),
        ],
        css: {
            modules: {
                scopeBehaviour: 'local',
                localsConvention: 'camelCase',
            },
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        '@root-entry-name': 'variable',
                    },
                    javascriptEnabled: true,
                },
            },
        },
        server: {
            host: '0.0.0.0',
            proxy: {
                
            },
            cors: true,
        },
        build: {
            //sourcemap: "inline"
            commonjsOptions: {
                ignoreTryCatch: false,
            },
        },
    });
};

