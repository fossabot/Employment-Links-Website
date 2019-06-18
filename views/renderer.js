const path = require( 'path' )
const yaml = require( 'js-yaml' )
const fs = require( 'fs' )

const md = require( 'markdown-it' )( {
	'linkify': true,
	'html': true
} )
const attrs = require( 'markdown-it-attrs' )
const containers = require( 'markdown-it-container' )

const [
	target, dryRun
] = process.argv.slice( 2, 4 )

md.use( attrs )
md.use( containers, 'fdb-block' )

console.log( target )

const fileContent = fs.readFileSync( target, {
	'encoding': 'utf8'
} )

const frontMatter = fileContent.split( '...' )[0].split( '---' )[1]
const config = yaml.load( frontMatter )

const outputPath = path.join( path.resolve( __dirname, '../public/pages' ), config.file.path, config.file.filename )

console.log( outputPath )

const content = fileContent
	.split( '...' ) /*           Holyyyyyy shit. */
	.slice( 1 ) /*        Would ya look at that? */
	.join( '...' ) /*           Just look at it. */
	.split( '\n' ) /*                      ...   */
	.slice( 2 ) /*                   Horrendous. */
	.join( '\n' ) /*              Yet effective. */

const output = md.render( content )

const docHead = require( './components/head' )( config.page.title, config.page.name, config.page.description )

const document = require( './document' )( docHead, output )

console.log( '\n' )
if ( dryRun ) {
	console.group( '--- Dry-run option selected.' )
	console.log( '- Create / overwrite file: ' + outputPath )
	console.log()
	console.log( '- Browser-window title: ' + config.page.name + ' | ' + config.page.title )
	console.log( '- Description: ' + config.page.description )
	console.log()
	console.groupEnd()
	console.group( '** Rendered Ouptut: **' )
	console.log()
	console.log( document )
	console.log()
	console.groupEnd()
} else {
	console.log( 'Writing file...' )
	fs.writeFileSync( outputPath, document )
	console.log( 'Finished: ' + outputPath )
}
