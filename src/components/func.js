import { LOCAL_STORAGE_TASKS_KEY } from "../helpers/localStorage";

export function updateCurrentTasksList(tasks) {
    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
}