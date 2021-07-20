const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	entry: {
		bundle: "./src/index.js"
		// app2: "./src/index2.js"
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist")
	},
	optimization: {
		// splitChunks: {
		// 	chunks: "all"
		// },
		minimizer: [ new UglifyjsWebpackPlugin() ]
	},
	watch: false,
	watchOptions: {
  		ignored: /node_modules/
	},
	plugins: [
		new HtmlWebpackPlugin() // Auto-generate index.html page
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 1717
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/,
				use: { 
					loader: "babel-loader", 
					options: {
						presets: [ "@babel/preset-env", "@babel/preset-react" ] 
					}
				} 
			},
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|bmp)$/,
        use: { loader: "url-loader" }
      }
		]
	}
}