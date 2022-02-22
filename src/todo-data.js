import Alpine from "alpinejs";
import gsap from "gsap";

export function todoData() {
  return {
    pageTitle: "Alpine.js animated todo app",
    todos: ["First task", "Second task", "Third task"],
    newTodo: "",
    loadHidden() {
      const el = this.$el;
      el.style.display = "none";
      Alpine.nextTick(() => el.style.removeProperty("display"));
    },
    addTodo() {
      if (this.newTodo === "") return;
      const newTodo = this.newTodo;
      this.newTodo = "";

      const add = () => {
        this.todos.push(newTodo);
        Alpine.nextTick(() => {
          const newTodoEl = document.querySelector(
            "[data-todo-index]:last-of-type"
          );
          gsap.fromTo(
            newTodoEl,
            { height: 0, opacity: 0 },
            { height: "auto", opacity: 1, duration: 0.2 }
          );
        });
      };

      if (this.todos.length === 0) {
        gsap.to(this.$refs["empty-message"], {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            add();
          }
        });
      } else {
        add();
      }
    },
    removeTodo(index) {
      const el = document.querySelector(`[data-todo-index="${index}"]`);
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          // Remove item.
          this.todos.splice(index, 1);

          // This list is keyed by index, so we must remove these
          // properties so the item that takes that index will
          // not be hidden.
          el.style.removeProperty("height");
          el.style.removeProperty("opacity");
        }
      });
    }
  };
}
