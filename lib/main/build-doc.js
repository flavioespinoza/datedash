'use strict'

const log = require('ololog')
const _ = require('lodash')
const docdash = require('../../../docdash/index')
const fs = require('fs-extra')
const path = require('path')

const util = require('../common/util')

const basePath = path.join(__dirname, '..', '..')
const docPath = path.join(basePath, 'doc')
const readmePath = path.join(docPath, 'README.md')

const pkg = require('../../package.json')
const version = pkg.version

const _path = path.join(basePath, 'datedash.js')

const config = {
	base: {
		path: _path,
		title: `<a href="https://github.com/flavioespinoza/datedash">datedash</a> <span>v${version}</span>`,
		toc: 'categories',
		url: npmLink()
	},
	site: {
		entryLink: '',
		sourceLink: `<a href="${npmLink()}">${title()}</a>`,
		tocHref: '',
		tocLink: '',
		sublinks: ''
	}
}

/**
 * Composes `title`.
 *
 * @private
 * @returns {string} Returns `name`
 */
function title() {
	return (
		'<% if (name == "templateSettings" || !/^(?:methods|properties|seq)$/i.test(category)) { print("" + name + ".js' +
		'");} %>'
	)
}

/**
 * Composes a npm link from `text` and optional `title`.
 *
 * @private
 * @returns {string} Returns the composed github `link` for each `method`.
 */
function npmLink() {
	return (
		'<% if (name == "templateSettings" || !/^(?:methods|properties|seq)$/i.test(category)) { print("https://github.com/flavioespinoza/datedash/blob/master/methods/" + name + ".js' +
		'");} %>'
	)
}

/**
 * Post-process `markdown` to make adjustments.
 *
 * @private
 * @param {string} markdown The markdown to process.
 * @returns {string} Returns the processed markdown.
 */
function postprocess(markdown) {
	// Wrap symbol property identifiers in brackets.
	return markdown.replace(/\.(Symbol\.(?:[a-z]+[A-Z]?)+)/g, '[$1]')
}

/*----------------------------------------------------------------------------*/

/**
 * Creates the documentation markdown formatted for 'github' or 'site'.
 *
 * @private
 * @param {string} type The format type.
 */
function build(type) {
	const options = _.defaults({}, config.base, config[type])
	const markdown = docdash(options)

	fs.writeFile(readmePath, postprocess(markdown), util.pitch)
}

build(_.last(process.argv))
