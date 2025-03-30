describe('_import', () => {
	it(`should import @flavioespinoza/log_log`, done => {
		import(`@flavioespinoza/log_log`).then((_log) => {
			_log.blue('import @flavioespinoza/log_log Success!')
		})
		done()
	})
})
