import { yarg } from "./plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(yarg.b);

(async () => {
    await main();
})();

async function main() {
    const { s: show, l: limit, b: base, n:name, d:destination } = yarg;
    ServerApp.run({base, limit, show, name, destination});  
}