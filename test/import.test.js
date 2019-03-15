import assert from 'assert'

describe('_import', () => {
	it(`should import @flavioespinoza/log_log`, done => {
		import(`@flavioespinoza/log_log`).then((ns) => {
			const _log = ns.default
			_log.alert('Boobies!')
		})
		done()
	})
})
