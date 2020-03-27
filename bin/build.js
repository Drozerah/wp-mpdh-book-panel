#!/usr/bin/env node

'use strict'

/**
 * Node Modules
 */
const fs = require('fs')
const rimraf = require('rimraf')
const { execSync } = require('child_process')

/**
 * Build Tasks
 */
// remove distFolder
rimraf.sync('book-panel')
// create book-panel folder
execSync('mkdirp book-panel')
// create book-panel/js subfolder
execSync('mkdirp book-panel/js')
// create book-panel/css subfolder
execSync('mkdirp book-panel/css')
// create book-panel/img subfolder
execSync('mkdirp book-panel/img')
// import/copy img files to book-panel folder
execSync('cp -r src/img book-panel')
// import/copy minifyed css file to book-panel folder
execSync('cp src/css/main.min.css book-panel/css')
// read file
const data = fs.readFileSync('book-panel/css/main.min.css', 'utf-8')
// remove string from data
const newValue = data.replace(new RegExp(/\/\*# sourceMappingURL=main.min.css.map \*\//), '')
// write css file with newValue
fs.writeFileSync('book-panel/css/main.min.css', newValue, 'utf-8')
// rename css file
fs.renameSync('book-panel/css/main.min.css', 'book-panel/css/book-panel.min.css')

// import/copy css file to book-panel folder
execSync('cp src/css/main.css book-panel/css')
// rename css file
fs.renameSync('book-panel/css/main.css', 'book-panel/css/book-panel.css')

// read file
const data2 = fs.readFileSync('book-panel/css/book-panel.css', 'utf-8')
// remove string from data /*# sourceMappingURL=main.css.map */
const newValue2 = data2.replace(new RegExp(/\/\*# sourceMappingURL=main.css.map \*\//), '')
// write css file with newValue
fs.writeFileSync('book-panel/css/book-panel.css', newValue2, 'utf-8')

// run babel transpilator
execSync('npm run babel')
console.log('build done!')
