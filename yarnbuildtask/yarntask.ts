import path = require('path');
import tl = require('vsts-task-lib/task');

tl.setResourcePath(path.join( __dirname, 'task.json'));

var yarn = tl.tool(tl.which('yarn', true));

var cwd = tl.getPathInput('cwd', true, false);
tl.mkdirP(cwd);
tl.cd(cwd);

var command = tl.getInput('command', true);
if (command.indexOf(' ') >= 0) {
	tl.setResult(tl.TaskResult.Failed, tl.loc("InvalidCommand"));
}
yarn.arg('install');

yarn.arg(tl.getInput('arguments', false));

yarn.exec()
.then(function(code) {
	tl.setResult(code, tl.loc('YarnReturnCode', code));
})
.fail(function(err) {
	tl.debug('taskRunner fail');
	tl.setResult(tl.TaskResult.Failed, tl.loc('YarnFailed', err.message));
})