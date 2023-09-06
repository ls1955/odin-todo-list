import { LocalStorageHandler } from "./local-storage-handler";

import "./style.css";

LocalStorageHandler.new().init();

// Select and click first project button to update main
// content and update current project index
document.querySelector(".project-button")?.click();

// Optional?:
// For every project, it should be nice to show them
// according to... (priority, name, deadline, or created date)
