'use strict';

const pkg = require('./package.json');

export default {
	input: 'dist/index.js',
	external: [
		'@angular/core',
		'@vchangal/leaflet',
		'@vchangal/leaflet.markercluster',
		'@vchangal/ngx-leaflet'
	],
	output: {
		banner: `/*! ${pkg.name} - ${pkg.version} - ${pkg.copyright} + */`,
		file: `./dist/bundles/${pkg.artifactName}.js`,
		format: 'umd',
		globals: {
			'@angular/core': 'ng.core',
			'@vchangal/ngx-leaflet': 'ngxLeaflet'
		},
		name: pkg.moduleName,
		sourcemap: true,
	},
	onwarn: ( warning, next ) => {
		if ( warning.code === 'THIS_IS_UNDEFINED' ) {
			return;
		}
		next( warning );
	}
};
