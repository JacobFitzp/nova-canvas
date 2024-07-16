let mix = require('laravel-mix')

require('./nova.mix')

mix
    .setPublicPath('dist')
    .js('resources/js/field.js', 'js')
    .vue({version: 3})
    .sass('resources/scss/field.scss', 'css')
    .nova('jacobfitzp/nova-canvas')
