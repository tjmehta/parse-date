# parse-date  [![Build Status](https://travis-ci.org/tjmehta/parse-date.svg?branch=master)](https://travis-ci.org/tjmehta/parse-date) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
Basic date parse util, throws error or returns null if date is invalid

# Installation
```bash
npm i --save parse-date
```

# Usage
Example: throw error for invalid dates
```js
var parse = require('parse-date')

var date
date = parse(1465335409856)
// [Date: Tue Jun 07 2016 14:36:49 GMT-0700 (PDT)]
date = parse('Tue Jun 07 2016 14:36:29 GMT-0700 (PDT)')
// [Date: Tue Jun 07 2016 14:37:09 GMT-0700 (PDT)]
try {
  date = parse('foo')
} catch (e) {
  // [Error: Invalid date: foo]
}
```

Example: return null for invalid dates
```js
var parse = require('parse-date/silent')

var date
date = parse(1465335409856)
// [Date: Tue Jun 07 2016 14:36:49 GMT-0700 (PDT)]
date = parse('Tue Jun 07 2016 14:36:29 GMT-0700 (PDT)')
// [Date: Tue Jun 07 2016 14:37:09 GMT-0700 (PDT)]
date = parse('foo')
// null
```

# License
MIT
