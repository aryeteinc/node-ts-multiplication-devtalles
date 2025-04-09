import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base number for multiplication table',
})
.option('l',{
    alias: 'list',
    type: 'number',
    default: 10,
    describe: 'List the multiplication table'
})
.option('s',{
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show Multiplication Table'
})
.option('n',{
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'File name for the multiplication table'
})
.option('d',{
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'File destination for the multiplication table'
})
.check((argv, options) => {
    if (argv.b < 1) throw new Error('Base must be a positive number greater than 0');
    return true;
})

.parseSync();