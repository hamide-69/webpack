const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
entry: "./src/index.js",
output: {
path: path.join(__dirname, "/dist"),
filename: "index-bundle.js"
},
module: {
rules: [
    {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
        }
    },
{
test: /\.css$/,
use: ["style-loader", "css-loader"]
}
]
},
plugins: [
new HtmlWebpackPlugin({
template: "./src/index.html"
})
]
};
