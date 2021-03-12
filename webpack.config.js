const path = require('path');// Para trabajar con archivos y rutas de directorios

//añadir el autocompletado para nuestro archivo de webpack @type
/** @type {import('webpack').Configuration} */ 
module.exports = {
   // Entry nos permite decir el punto de entrada de nuestra aplicación
  entry: './src/index.js',
  // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
  output: {
    // path es donde estará la carpeta donde se guardará los archivos
    // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
    path: path.resolve(__dirname, 'dist'),
    // filename le pone el nombre al archivo final
    filename: 'main.js'
  },
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        // Test declara que extensión de archivos aplicara el loader
        test: /\.m?js$/,
        // Exclude permite omitir archivos o carpetas especificas
        exclude: /(node_modules|bower_components)/,
        // Use es un arreglo u objeto donde dices que loader aplicaras
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  } 
}