/**
 * Created by User on 02.02.2017.
 */
module.exports = {
    entry: "./app/index.js",
    output: {
        filename: "./build/index.js"
    },
    module: {
        loaders: [
            {test: /\.html$/, loaders: ["html-loader"]}
        ]
    },
    watch: true,
    devtool: "source-map"
}