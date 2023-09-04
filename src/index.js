import { DialogController } from "./dialog-controller.js";
import { Project } from "./project.js";
import { SidebarController } from "./sidebar-controller.js";
import { Todo } from "./todo.js";

import "./style.css";

let today = new Date().toISOString().substring(0, 10);

let todoOne = Todo.new("Eat breakfast", "Eat some breakfast to begin the day", today, 3);
let todoTwo = Todo.new("Study", "Study", today, 3);
let todoThree = Todo.new("Complete this project", "Complete this beautiful project.", today, 1);

let defaultProject = Project.new("Default Project", [todoOne, todoTwo]);
let projectOne = Project.new("The Odin Project", [todoThree]);
let projectTwo = Project.new("The Euler Project");

let projects = [defaultProject, projectOne, projectTwo];

let sidebarController = SidebarController.new(projects);
let dialogController = DialogController.new(projects);

sidebarController.populateSidebar();

// Select and click first project button to update main
// content and update current project index
document.querySelector(".project-button").click();

// Optional?:
// For every project, it should be nice to show them
// according to... (priority, name, deadline, or created date)
