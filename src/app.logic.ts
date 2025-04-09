import { mkdirSync, writeFileSync } from 'node:fs';
import { yarg } from "./plugins/yargs.plugin";


//Variable que detrmina si mostramos o no la tabla or pantalla
const {s:mostrar, l:limite, b:base} = yarg;

let salida = '';

salida += `
=============================
  Tabla del ${base}
=============================
`;


for (let i = 1; i <= limite; i++) {
  const resultado = base * i;
  salida += (`${base} x ${i} = ${resultado} \n`);
}
salida += ('=============================\n\n');
salida += ('Fin de la tabla');

const outputPath = `outputs`;

mkdirSync(`./outputs`, { recursive: true });
writeFileSync(`${outputPath}/tabla-${base}.txt`, salida);
console.log(`Tabla del ${base} creada`);


mostrar && console.log(salida);
