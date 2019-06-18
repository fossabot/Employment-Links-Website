const md = require( 'markdown-it' )()
const yaml = require( 'js-yaml' )

const fs = require( 'fs' )
const attrs = require( 'markdown-it-attrs' )

md.use( attrs )
console.log( process.argv[2] )

const fileContent = fs.readFileSync( process.argv[2], {
	'encoding': 'utf8'
} )

const frontMatter = fileContent.split( '...' )[0]
const config = yaml.load( frontMatter )

const content = fileContent
	.split( '...' )
	.slice( 1 )
	.join( '...' )

const output = md.render( content )

console.log( config )

console.log( output )
