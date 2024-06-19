async function fetchDataWithTimeout(url, timeout) {
    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error(`Запрос превысил время ожидания в ${timeout} мс.`)), timeout)
    );
    const fetchPromise = fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
    });
    try {
        const data = await Promise.race([fetchPromise, timeoutPromise]);
        return data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
const url = "https://jsonplaceholder.typicode.com/todos/1";
const timeout = 5000; 
fetchDataWithTimeout(url, timeout)
    .then(data => {
        if (data) {
            console.log("Данные успешно получены:", data);
        } else {
            console.log("Не удалось получить данные.");
        }
    });