const stdin = process.stdin

stdin.resume()
stdin.setEncoding('utf-8')

const arg = process.argv[2],
      ball = require('./')(),
      ask = () => output('Please ask a question.'),
      output = (str) => process.stdout.write(`${str}\n`) && process.exit(),
      check = (str) => (str && str.match((/\?\s*$/))) ? output(ball) : ask()

if (stdin.isTTY) check(arg)

stdin.on('data', check)