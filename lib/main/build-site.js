const log = require('ololog')
const _ = require('lodash')
const cheerio = require('cheerio')
const fs = require('fs')
const marky = require('marky-markdown')
const path = require('path')
const util = require('../common/util')

const basePath = path.join(__dirname, '..', '..')
const docPath = path.join(basePath, 'doc')
const readmePath = path.join(docPath, 'README.md')

const highlights = {
	html: ['string'],
	js: [
		'import',
		'from',
		'comment',
		'console',
		'delimiter',
		'method',
		'modifier',
		'name',
		'numeric',
		'string',
		'support',
		'type'
	]
}

const exts = _.keys(highlights)

/**
 * Converts Datedash method references into documentation links.
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function autoLink($) {
	$('.doc-container code').each(function() {
		const $code = $(this)
		const html = $code.html()
		if (/^_\.\w+$/.test(html)) {
			const id = html.split('.')[1]
			$code.replaceWith(`<a href="#${id}"><code>_.${id}</code></a>`)
		}
	})
}

/**
 * Removes horizontal rules from the document.
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function removeHorizontalRules($) {
	$('#importModules').parent(() => {
			console.log(this)
	})

}

/**
 * Removes marky-markdown specific ids and class names.
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function removeMarkyAttributes($) {
	$('[id^="user-content-"]')
		.attr('class', null)
		.attr('id', null)

	$(':header:not(h3) > a').each(function() {
		const $a = $(this)
		$a.replaceWith($a.html())
	})
}

/**
 * Renames "_" id and anchor references to "Datedash".
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function renameDatedashId($) {
	$('#_').attr('id', 'Datedash')
	$('[href="#_"]').attr('href', '#Datedash')
}

/**
 * Repairs broken marky-markdown headers.
 * See https://github.com/npm/marky-markdown/issues/217 for more details.
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function repairMarkyHeaders($) {
	$('p:empty + h3')
		.prev()
		.remove()

	$('h3 ~ p:empty').each(function() {
		const $p = $(this)
		let node = this.prev
		while ((node = node.prev) && node.name != 'h3' && node.name != 'p') {
			$p.prepend(node.next)
		}
	})

	$('h3 code em')
		.parent()
		.each(function() {
			const $code = $(this)
			$code.html($code.html().replace(/<\/?em>/g, '_'))
		})
}

/**
 * Cleans up highlights blocks by removing extraneous class names and elements.
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function tidyHighlights($) {
	$('.highlight').each(function(key, val) {
		let $spans

		const $parent = $(this)


		const classes = $parent

			.find('.source,.text')
			.first()
			.attr('class')
			.split(' ')

		const ext = _(classes)
			.intersection(exts)
			.last()

		$parent.addClass(ext)

		// Remove line indicators for single line snippets.
		$parent.children('pre').each((obj, i) => {
			const $divs = ($(this).children('div').addClass = `div-balls-${i}`)
			if ($divs.length == 1) {
				$divs.replaceWith($divs.html())
			}
		})

		// Collapse nested comment highlights.
		$parent.find(`[class~="comment"]`).each(function() {
			const $element = $(this)
			$element.text($element.text().trim())
		})

		// Collapse nested string highlights.
		$parent.find(`[class~="string"]`).each(function() {
			const $element = $(this)
			$element.text($element.text())
		})

		// Collapse nested spans.
		while (($spans = $parent.find('span:not([class])')).length) {
			$spans.each(function() {
				let $span = $(this)
				while ($span[0] && $span[0].name == 'span' && !$span.attr('class')) {
					const $parent = $span.parent()
					$span.replaceWith($span.html())
					$span = $parent
				}
			})
		}
	})
}

/*----------------------------------------------------------------------------*/

/**
 * Creates the documentation HTML.
 *
 * @private
 */
function build() {
	const markdown = fs
		// Load markdown.
		.readFileSync(readmePath, 'utf8')
		// Uncomment docdash HTML hints.
		.replace(/(<)!--\s*|\s*--(>)/g, '$1$2')
		// Convert source and npm package links to anchors.
		.replace(
			/\[source\]\(([^)]+)\) \[npm package\]\(([^)]+)\)/g,
			(match, href1, href2) =>
				`<p class="pee-balls"><a class="a-balls" href="${href1}">source</a><a href="${href2}">npm package</a></p>`
		)

	const $ = cheerio.load(
		marky(markdown, {
			enableHeadingLinkIcons: false,
			sanitize: false
		})
	)

	const $header = $('h1')
		.first()
		.remove()
	const version = $header
		.find('span')
		.first()
		.text()
		.trim()
		.slice(1)

	// Auto-link Datedash method references.
	autoLink($)
	// Rename "_" id references to "Datedash".
	renameDatedashId($)
	// Remove docdash horizontal rules.
	removeHorizontalRules($)
	// Remove marky-markdown attribute additions.
	removeMarkyAttributes($)
	// Repair marky-markdown wrapping around headers.
	repairMarkyHeaders($)
	// Cleanup highlights.
	tidyHighlights($)

	const _html = () => {
		return /* html */ `
			<!DOCTYPE html>
			<html class="docs gr__Datedash_com" style="overflow: auto;">
				<head>
					<meta charset="utf-8">
					<meta content="IE=edge" http-equiv="X-UA-Compatible">
					<title>Datedash Docs</title>
					<meta content="width=device-width, initial-scale=1" name="viewport">
					<link href="assets/css/main.css" rel="stylesheet" type="text/css">
					<script src="../vendor/lodash/lodash.min.js"></script>
					<script src="../vendor/g/fuse@2.6.1,react@15.4.0(react.min.js+react-dom.min.js"></script>
					<script async src="../assets/js/docs.js"></script>
					<link href="https://cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
					<script async src="../assets/js/boot.js"></script>
					<script async src="https://embed.runkit.com" async></script>
				</head>
				<body class="layout-docs">
					<header>
						<div class="container">
								<div class="header-section logo-section">
										<div class="logo">
												<a href="../index.html" title="Datedash">Datedash</a>
										</div>
										<div class="header-group">
												<h1>Datedash</h1>
										</div>
								</div>
								<div class="header-section mobile-menu">
      							<a href="#"><i class="fa fa-bars" aria-hidden="true"></i>Menu</a>
    						</div>
						</div>
					</header>
					<div class="doc-main">
						${$.html().trim()}
					</div>
				</body>
			</html>
		`
	}

	const __html = /* html */ `${_html()}`

	fs.writeFile(path.join(docPath, 'doc' + '.html'), __html, util.pitch)

}

build()
