// @todo: refactor to use html-loader with multiple entry points / hbs
// https://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder
// require('file-loader?name=[name].[ext]!../index.html');

import TweenMax from "greensock";
import '../scss/index.scss';

(function () {
    TweenMax.to(".mast__image", 5, { autoAlpha: 1 });
}());
