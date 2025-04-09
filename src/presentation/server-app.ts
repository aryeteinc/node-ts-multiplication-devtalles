import { CreateTable } from "../domain/use-case/create-table.use-case";
import { SaveFile } from "../domain/use-case/save-file.use-case";

interface runOptions {
    base       :number;
    limit      :number;
    show       :boolean;
    name       :string;
    destination:string;
}

export class ServerApp {
    static run({base, limit, show, name, destination}: runOptions) {
        console.log('Server is running...');   
        
        //Usamos nuestro caso de uso para crear la tabla 
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({
            fileContent    : table, 
            fileDestination: destination,
            fileName       : name
        });
        show && console.log(table);
        (wasCreated) 
        ? console.log(`Table ${base} created`) 
        : console.log(`Table ${base} not created`);
    }
}