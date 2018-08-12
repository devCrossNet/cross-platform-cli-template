import * as commander  from 'commander';
import { ExampleTask } from '../tasks/example';

commander
.command('example')
.alias('e')
.option('-f, --foo <foo>', 'print value of foo')
.description('run example task')
.action(ExampleTask);
