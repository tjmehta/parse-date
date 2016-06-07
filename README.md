# date-parse  [![Build Status](https://travis-ci.org/tjmehta/date-parse.svg?branch=master)](https://travis-ci.org/tjmehta/date-parse) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
Basic date parse util, throws if date is invalid

# Installation
```bash
npm i --save date-parse
```

# Usage
```js
var parse = require('date-parse')

var date
date = parse(1465335409856)
// Date: Tue Jun 07 2016 14:36:49 GMT-0700 (PDT)
date = parse('Tue Jun 07 2016 14:36:29 GMT-0700 (PDT)')
// Date: Tue Jun 07 2016 14:37:09 GMT-0700 (PDT)
try {
  date = parse('foo')
} catch (e) {
  // Error: Invalid date: foo
}
```

# License
MIT