# eight-ball
A Node.JS package that brings the almighty 8ball to your project, and your command line.

## installation
```
npm i --save @noneissome/eight-ball
```

## usage
```js
const ball = require('eight-ball')();
console.log(`Are we all doomed? ${ball}`); 
// Are we all doomed? it is decidedly so
```

## cli
8ball, ball, eightball or eight-ball
```
$ npm i -g @noneissome/eight-ball
```

```
$ 8ball Can I ever be happy again?
my sources say no
```

```
$ ball Can I ever be happy again?
very doubtful
```