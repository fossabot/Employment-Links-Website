const md = require( 'markdown-it' )()

const path = require( 'path' )
const yaml = require( 'js-yaml' )

const fs = require( 'fs' )
const attrs = require( 'markdown-it-attrs' )

const [
	target, dryRun
] = process.argv.slice( 2, 4 )

md.use( attrs )
console.log( target )

const fileContent = fs.readFileSync( target, {
	'encoding': 'utf8'
} )

const frontMatter = fileContent.split( '...' )[0]
const config = yaml.load( frontMatter )

const outputPath = path.resolve( __dirname, '../public/', config.file.path, config.file.name )

const content = fileContent
	.split( '...' )
	.slice( 1 )
	.join( '...' )

const output = md.render( content )

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
	console.log( output )
	console.log()
	console.groupEnd()
} else {
	console.log( 'Writing file...' )
	fs.writeFileSync( outputPath, output )
	console.log( 'Finished: ' + outputPath )
}
