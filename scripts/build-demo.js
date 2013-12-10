var path = require('path');
var fs = require('fs');
var stylizer = require('stylizer');
var jade = require('jade');
var demoDir = path.join(__dirname, '..', 'public');


// Build css
var inStyl = path.join(demoDir, 'css', 'demo.styl');
var outCss = path.join(demoDir, 'css', 'demo.css');

stylizer(inStyl, outCss, function (err) {
    if (err) throw(err);
    console.log('Built ', inStyl, '->', outCss);
});


// Build HTML
var inJade = path.join(demoDir, 'templates', 'index.jade');
var outHtml = path.join(demoDir, 'index.html');

jade.renderFile(inJade, { pretty: true }, function (err, html) {
    fs.writeFileSync(outHtml, html);
});
