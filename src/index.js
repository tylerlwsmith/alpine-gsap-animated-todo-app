import Alpine from "alpinejs";
import { todoData } from "./todo-data";
import gsap from "gsap";
import "./styles.css";

window.gsap = gsap;

window.todoData = todoData;

window.Alpine = Alpine;
Alpine.start();
