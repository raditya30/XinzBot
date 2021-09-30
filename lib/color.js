const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.red(text) : chalk.bgKeyword(bgcolor)(text)
}

const XinzLog = (text, color) => {
	return !color ? chalk.magenta('[ SYSTEM ] ') + chalk.green(text) : chalk.magenta('[ SYSTEM ] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	XinzLog
}
