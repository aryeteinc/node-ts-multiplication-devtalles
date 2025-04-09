const fs = require('node:fs');
//const { mkdirSync, writeFileSync } = fs;

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent : string;
    fileName?    : string;
    fileDestination?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /**
         * Dependency Injection
         */
    ){}

    execute({
        fileName, 
        fileContent,
        fileDestination
    }: SaveFileOptions): boolean {   
        try{
            //verifica que fileName tenga extension .txt
            if(!fileName?.endsWith('.txt')){
                fileName = `${fileName}.txt`;
            }
            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${fileDestination}/${fileName}`, fileContent);
            return true;
        }catch (error) {
            console.error('Error creating file:', error);
            return false;
        }      
    }
}