import { prompt, Question } from 'inquirer';
import chalk                from 'chalk';

interface ApplyTaskResult {
    name: string;
    likesCLIs: boolean;
    food: string[];
    drink: string;
}

// See: https://github.com/SBoudrias/Inquirer.js/#question
const questions: Question[] = [
    {
        type:    'input',
        name:    'name',
        message: 'What\'s your name?',
    },
    {
        type:    'confirm',
        name:    'likesCLIs',
        message: 'Do you like CLIs?',
    },
    {
        type:    'checkbox',
        name:    'food',
        message: 'What kind of food do you like?',
        choices: ['Pizza', 'Burger', 'Veggie', 'Spaghetti'],
    },
    {
        type:    'list',
        name:    'drink',
        message: 'What do you want to trink?',
        choices: ['Water', 'Tee', 'Coffee', 'Softdrink'],
    },
];

export const ExampleTask = async (options: { foo: string }) => {
    const result: ApplyTaskResult = await prompt<ApplyTaskResult>(questions);

    console.log(chalk.green.bold('This is your result:'));
    console.log(result);

    if (options.foo) {
        console.log(chalk.blue(`option foo is: ${options.foo}`));
    }
};
