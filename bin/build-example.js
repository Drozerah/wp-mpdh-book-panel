#!/usr/bin/env node

'use strict'

/**
 * Node Modules
 */

const { execSync } = require('child_process')

/**
 * Build Tasks
 */
// create example/js subfolder
execSync('mkdirp example/js')
// create example/css subfolder
execSync('mkdirp example/css')
// create example/img subfolder
execSync('mkdirp example/img')

// import/copy img files to example folder
execSync('cp -r book-panel/img example')
// import/copy css files to example folder
execSync('cp -r book-panel/css example')
// import/copy js files to example folder
execSync('cp -r book-panel/js example')

// execSync('npm run babel')
console.log('build example done!')
