import { suma, multiplica } from './controller.js';
import chalk from 'chalk';

const sum = suma(4, 5)
console.log(`El valor de la suma es: ${sum}`)

const mult = multiplica(1, 2)
console.log(chalk.green(`El valor de la multiplicacion es: ${mult}`))