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
            {test: /\.html$/, loaders: ["html-loader"]},
            {
                test    : /\.(scss|sass|css)$/,
                loaders :
                    [
                        'style-loader',
                        'css-loader?importLoaders=2&sourceMap'
                    ]
            },
            {
                test    : /\.(jpg|png|gif)$/,
                loaders :
                    [
                        'url-loader' // Any png-image or woff-font below or equal to 10K will be converted to inline base64 instead
                    ]
            }
        ]
    },
    watch: true,
    devtool: "source-map"
}