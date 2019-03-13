const file = '<% if (name == "templateSettings" || !/^(?:methods|properties|seq)$/i.test(category)) { console.log("name", name) } %>'

module.exports = file
