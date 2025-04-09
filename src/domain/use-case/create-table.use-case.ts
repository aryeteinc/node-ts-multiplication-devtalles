//Este sera el caso de uso que se encargará de crear la tabla

export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}


export class CreateTable implements CreateTableUseCase {
    constructor(
        /**
         * Dependency Injection
         */
    ){}

    execute({base,limit = 10}: CreateTableOptions) {
        let outputMessage = '';
        for (let i = 1; i <= limit; i++) {
            const resultado = base * i;
            outputMessage += (`${base} x ${i} = ${resultado} \n`);
        }

        return outputMessage
    }
}