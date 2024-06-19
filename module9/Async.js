async function fetchDataFromFirstServer(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка при получении данных с первого сервера: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Функция для отправки данных на второй сервер
async function fetchDataFromSecondServer(url, payload) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            throw new Error(`Ошибка при отправке данных на второй сервер: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Основная асинхронная функция
async function main() {
    const firstServerUrl = 'https://jsonplaceholder.typicode.com/posts/1';  // URL первого сервера
    const secondServerUrl = 'https://jsonplaceholder.typicode.com/posts';  // URL второго сервера

    try {
        // Получаем данные с первого сервера
        let firstData = await fetchDataFromFirstServer(firstServerUrl);

        if (!firstData) {
            throw new Error('Не удалось получить данные с первого сервера');
        }

        console.log('Data from the first server:', firstData);

        // Используем полученные данные для запроса ко второму серверу
        let secondData = await fetchDataFromSecondServer(secondServerUrl, firstData);

        if (secondData) {
            console.log('Data from the second server:', secondData);
        } else {
            throw new Error('Не удалось получить данные со второго сервера');
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Запускаем основную функцию
main();