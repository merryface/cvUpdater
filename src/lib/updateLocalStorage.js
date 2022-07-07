export default function updateLocalStorage(table_name, details) {
  const localStorageKey =`${table_name}_${details.id}`
  localStorage.setItem(localStorageKey, JSON.stringify(details))
}

