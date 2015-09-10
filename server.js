var express     = require('express'),
	app         = express(),
	compileSass = require('express-compile-sass'),
	root        = process.cwd();

app.use(compileSass({
    root: root,
    sourceMap: true, // Includes Base64 encoded source maps in output css
    sourceComments: true, // Includes source comments in output css
    watchFiles: true, // Watches sass files and updates mtime on main files for each change
    logToConsole: false // If true, will log to console.error on errors
}));

app.use(express.static('dist/'));

var server = app.listen('3000', function () {
});

console.log('Listening on port: 3000');