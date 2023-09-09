import { DialogController } from "./dialog-controller";
import { LocalStorageHandler } from "./local-storage-handler";
import { SidebarController } from "./sidebar-controller";

import "./style.css";

let storageHandler = LocalStorageHandler.new();
storageHandler.init();
let dialogController = DialogController.new(storageHandler.projects, storageHandler);
dialogController.setDOMsEventListener();
let sidebarController = SidebarController.new(storageHandler.projects, storageHandler);
sidebarController.setDOMsEventListener();
sidebarController.populateSidebar();

// Select and click first project button to update main
// content and update current project index
document.querySelector(".project-button")?.click();

// Optional?:
// For every project, it should be nice to show them
// according to... (priority, name, deadline, or created date)
