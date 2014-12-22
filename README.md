grunt-template
==============

> A grunt template for frontend application building
> This template currently use AngularJS, but can be use with just a little modification for any frameworks

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

- Clean dist
- Create dist & subfolders
- Compile *.less into one styles.css
- Adds vendor prefixes to styles.css
- Copy JS dependencies from bower
- Copy JS application files
- Create an angular constant module with config properties
- Create an empty templatecache for angular (just to avoid breaking dependency)
- Copy Html views from application
- Copy index.html file
- Add JS & CSS tags into index.html file
- Copy application misc files (images, robots.txt, favicon.ico, ...)

**grunt build**

- Clean .build & dist folder
- Create .build & dist & subfolders
- Copy images to .build folder
- Minify images
- Revision images
- Copy output images to dist
- Compile *.less into one styles.css in .build folder
- Concat all css files into styles.css
- Adds vendor prefixes to styles.css
- Replace image references with rev version into styles.css
- Minify styles.css
- Revision styles.css
- Copy output styles.css to dist
- Copy Html views from application to .build folder
- Replace image references with rev version
- Remove devcode
- Put views into angular template cache module
- Copy JS dependencies from bower to .build folder
- Copy JS application files to .build folder
- Create an angular constant module with config properties
- Annotate angular dependencies
- Concat all js files into scripts.js
- Uglify/minify scripts.js
- Revision scripts.js
- Copy output scripts.js to dist
- Copy index.html file to dist folder
- Add JS & CSS tags into index.html file
- Remove devcode
- Copy application misc files (robots.txt, favicon.ico, ...)
- Output the filesize and gzip size of files

**grunt serve**

- Compile for dev (cf grunt compile)
- Starts a connect server with livereload
- Watch files and run their tasks on changes for livereloading in browser

**grunt serve:prod**

- Build for prod (cf grunt build)
- Starts a connect server with keepalive

Contributing
------------

Anyone is welcome to submit issues and pull requests

Thanks
------

Special thanks to [Tim Carry](https://github.com/pixelastic) who greatly helps me understanding almost everything with Grunt.

License
------------

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2014 Jérémy Buisson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
