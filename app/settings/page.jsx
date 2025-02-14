import TodoList from "../components/todo-list/TodoList";

export default function SettingsPage() {
    return (
        <main className="max-w-4xl mx-auto p-5">
            <h2
            data-id="settings-header"
            className="text-3xl text-gray-800 dark:text-gray-200 font-bold mb-4"
            >
            Settings
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed m-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque doloremque delectus quis! Consectetur quae sint nesciunt dolor expedita nostrum, numquam amet. Molestias nemo veniam corrupti at dicta architecto accusamus a?
            </p>
            <TodoList />
        </main>
    );
}