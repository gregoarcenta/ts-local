import { Main as Module1 } from "./module_1";
import { Main as Module2 } from "./module_2";
import { Main as Module3 } from "./module_3";
// import { Main as Module2 } from "./module_2";

const args = process.argv.slice(2);
const moduleName = args[0] || "module1";

let app;

switch (moduleName) {
  case "module1":
    app = new Module1();
    break;
  case "module2":
    app = new Module2();
    break;
  case "module3":
    app = new Module3();
    break;
  default:
    throw new Error(`Module ${moduleName} not found`);
}

app.start();
