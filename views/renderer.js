const path = require( 'path' )
const yaml = require( 'js-yaml' )
const fs = require( 'fs' )

const modal = require( './components/modal' )

const md = require( 'markdown-it' )( {
	'linkify': true,
	'html': true
} ).use( require( 'markdown-it-attrs' ) )

const [
	target, flag
] = process.argv.slice( 2, 4 )
const dryRun = flag === '--dry'

const fileContent = fs.readFileSync( target, {
	'encoding': 'utf8'
} )

const outputDir = path.resolve( __dirname, '../public/pages' )

const frontMatter = fileContent.split( '...' )[0].split( '---' )[1]
const config = yaml.load( frontMatter )
const outputPath = path.join( outputDir, config.file.path, config.file.filename )

const content = fileContent
	.split( '...' ) /*           Holyyyyyy shit. */
	.slice( 1 ) /*        Would ya look at that? */
	.join( '...' ) /*           Just look at it. */
	.split( '\n' ) /*                      ...   */
	.slice( 2 ) /*                   Horrendous. */
	.join( '\n' ) /*              Yet effective. */

const body = {
}

if ( config.body.modals ) {
	body.modals = config.body.modals.map( obj => modal( obj.title, obj.id, obj.icon || null, obj.body ) )
}

body.content = md.render( content )

const docHead = require( './components/head' )( config.page.title, config.page.name, config.page.description )

const document = require( './document' )( docHead, body )

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
