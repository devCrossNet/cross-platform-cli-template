import * as fs from 'fs';
import * as path from 'path';
import * as commander from 'commander';
import './commands/example';

const pkg: any = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json')).toString());

commander
    .name('myCLI')
    .version(pkg.version)
    .description(pkg.description);

commander.parse(process.argv);
