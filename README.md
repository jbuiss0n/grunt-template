grunt-template
==============

> A grunt template for angular application building

Requirements
------------

* [node.js](http://nodejs.org/)

For Windows users (like me)
---------------------------
* [cwRsync](https://www.itefix.net/cwrsync) : fallback for unix rsync

Install
------------

  npm install

Grunt tasks
------------

**grunt compile**

- Clean *dist* directories to start fresh
- Creates *dist* directory structure
- Compiles Less to CSS
- Adds vendor prefixes to CSS files using caniuse.com database
- Intelligently sync (copy) files, with a diff algorithm (scripts, styles, views, misc)
- Generates an Angular *constant* service with the content of environment config JSON file
- Insert CSS and JS tags into *index* HTML files

**grunt serve**

- Compile for dev (cf grunt compile)
- Starts a connect server with livereload
- Watch files and run their tasks on changes for livereloading in browser

Contributing
------------

Anyone is welcome to submit issues and pull requests

License
------------

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2014 Jérémy Buisson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.