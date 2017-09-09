const chokidar = require('chokidar');
const shell = require('shelljs');


const watcher = chokidar.watch('./index.js');

const log = console.log.bind(console);

function modify() {
  log('-------------------------->>>>>');
  shell.exec('npm run build');
  log('-------------------------->>>>>');
}

watcher
  .on('add', function(path) { log('File', path, 'has been added'); })
  .on('addDir', function(path) {  log('Directory', path, 'has been added'); })
  .on('change', function(path) { modify();})
  .on('unlink', function(path) {  log('File', path, 'has been removed'); })
  .on('unlinkDir', function(path) {  log('Directory', path, 'has been removed'); })
  .on('error', function(error) { log('Error happened', error); })
  .on('ready', function() {   log('Initial scan complete. Ready for changes.'); });
// .on('raw', function(event, path, details) { log('Raw event info:', event, path, details); })

// modify();
