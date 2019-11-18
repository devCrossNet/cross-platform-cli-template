import {Command, ICommandHandler, IRunOptions} from '../decorators/command';
import {prompt, QuestionCollection} from 'inquirer';
import * as chalk from 'chalk';

interface ApplyTaskResult {
    name: string;
    likesCLIs: boolean;
    food: string[];
    drink: string;
}

const questions: QuestionCollection = [
    {
        type: 'input',
        name: 'name',
        message: 'What\'s your name?',
    },
    {
        type: 'confirm',
        name: 'likesCLIs',
        message: 'Do you like CLIs?',
    },
    {
        type: 'checkbox',
        name: 'food',
        message: 'What kind of food do you like?',
        choices: ['Pizza', 'Burger', 'Veggie', 'Spaghetti'],
    },
    {
        type: 'list',
        name: 'drink',
        message: 'What do you want to trink?',
        choices: ['Water', 'Tee', 'Coffee', 'Softdrink'],
    },
];

@Command({
    name: 'example',
    alias: 'e',
    options: [
        {flags: '-f, --foo <foo>', description: 'print value of foo'},
    ],
    description: 'run example task',
})
export class Example implements ICommandHandler {
    public foo: string;

    public async run(args: string[], options: IRunOptions) {
        const result: ApplyTaskResult = await prompt<ApplyTaskResult>(questions);

        console.log(chalk.green.bold('This is your result:'));
        console.log(result);

        if (this.foo) {
            console.log(chalk.blue(`option foo is: ${this.foo}`));
        }
    }
}
