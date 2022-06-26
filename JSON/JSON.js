/* №1 task. Отправка сообщения */

/**
 * @param {string} status
 * @param {string} location
 */
 const prepareStatus = (status, location) => {
  const userId = 42;
  const data = {
    userId,
    status,
    location
  };
	return JSON.stringify(data);
}

// Sample usage - do not modify
console.log(prepareStatus("My first post!", "Amsterdam")); // '{"userId":42,"status":"My first post!","location":"Amsterdam"}'
console.log(prepareStatus("Hello World!", "Berlin")); // '{"userId":42,"status":"Hello World!","location":"Berlin"}'

/* №2 task. Получение уведомлений */
const checkForNewNotifications = () => {
	return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
  .then(response => response.json())
  .then(data => console.log(data));
}
// Sample usage - do not modify
console.log(checkForNewNotifications());


/* №3 Перед нами стоит задача получения конечной точки (endpoint) API и вывести в консоль email каждого пользователя. */

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data); // visualize it then realize it's an array of objects
    data.forEach(user => {
      // console.log(user); // visualize the item of the array
      console.log(user.email); // log the email
    });
  });


 /* №4 task. Показать новые уведомления(c обработкой ошибок) */
  const checkForNewNotifications = () => {
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json)
    .then(json => showNewNotifications(json.count))
    .catch(error => {
      console.error(error);
    })
  }  
  // do NOT modify this function
  function showNewNotifications(count) {
    console.log(`You have ${count} new notifications. Would you like to read them?`);
  }  
  // Sample usage - do not modify
  checkForNewNotifications(); // You have 3 new notifications. Would you like to read them?


  /* #5 task. Получить завершенные главы */
  const getChapters = () => {
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json')
    .then(response => response.json)
    .then(data => {
      console.log(data); // visualize it
      const completedChapters = data.filter(chapter => chapter.isCompleted);
      displayCompletedChapters(completedChapters);
    .catch(error => {
      console.error(error);
    })
  }  
  // do NOT modify this function
  function displayCompletedChapters(chapters) {
    console.log("Received", chapters);
  }  
  // Sample usage - do not modify
  getChapters();