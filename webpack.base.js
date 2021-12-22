const path = require('path');
module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                    plugins:[
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                    ]
                }
            }
        ]
    }
}