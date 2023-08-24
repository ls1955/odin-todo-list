import { DialogController } from "./dialog-controller.js";
import { Project } from "./project.js";
import { SidebarController } from "./sidebar-controller.js";
import { Todo } from "./todo.js";

let todoOne = Todo.new("Eat breakfast", "Eat some breakfast to begin the day", Date.now(), 3);
let todoTwo = Todo.new("Study", "Study", Date.now(), 3);
let todoThree = Todo.new("Complete this project", "Complete this beautiful project.", Date.now(), 1);

let defaultProject = Project.new("Default Project", [todoOne, todoTwo]);
let projectOne = Project.new("The Odin Project", [todoThree]);
let projectTwo = Project.new("The Euler Project");

let projects = [defaultProject, projectOne, projectTwo];

let sidebarController = SidebarController.new(projects);
let dialogController = DialogController.new(projects);

sidebarController.populateSidebar();

// Select and click first project button to update main content and update current project index
document.querySelector(".projects-sidebar").querySelector("button").click();

// TODO:
// Include a button to create new project
