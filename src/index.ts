import { Main as Module1 } from "./module_1";
import { Main as Module2 } from "./module_2";
import { Main as Module3 } from "./module_3";
import { Main as Module4 } from "./module_4";
import { Main as Module5 } from "./module_5";
import { Main as Module6 } from "./module_6";
import { Main as Module7 } from "./module_7";

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
  case "module4":
    app = new Module4();
    break;
  case "module5":
    app = new Module5();
    break;
  case "module6":
    app = new Module6();
    break;
  case "module7":
    app = new Module7();
    break;
  default:
    throw new Error(`Module ${moduleName} not found`);
}

app.start();
