// worker.js
self.onmessage = function (event) {
  var messageFromMainThread = event.data;

  // Обработка сообщения от основного потока
  var response = 'Message received: ' + messageFromMainThread;

  // Отправка обратного сообщения в основной поток
  self.postMessage(response);
};
