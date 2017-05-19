const path = require("path")

module.exports = {
    entry: {
        react: "./docs/react/index.js",
        angular: "./docs/angular/index.ts",
        common: "./docs/common/index.js"
    },
    output: {
        filename: "[name]/[name].js",
        path: path.resolve(__dirname, "")
    },
    resolve: {
        extensions: [ ".js", ".ts" ]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { importLoaders: 1 }},
                    "postcss-loader"
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    configFileName: path.resolve(__dirname, "angular/tsconfig.json")
                }
            }
        ]
    }
}