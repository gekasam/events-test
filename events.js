console.log('Start'); // Синхронный код выполняется первым

// 1. Макрозадача: setTimeout
setTimeout(() => {
  console.log('Macro task 1');
}, 0);

// 2. Микрозадача: Promise
Promise.resolve('Micro task 1').then((value) => {
  console.log(value);
});

// 3. Микрозадача: queueMicrotask
queueMicrotask(() => {
  console.log('Micro task 2');
});

// 4. Макрозадача: setInterval
// setInterval(() => {
//   console.log('Macro task 4');
// }, 0);

// 4. Макрозадача: setTimeout
setTimeout(() => {
  console.log('Macro task 4');
}, 0);

// 5. Микрозадача: Promise
Promise.resolve('Micro task 6').then((value) => {
  console.log(value);
});

// Синхронный код
console.log('Sync code 1');

// Создание и использование воркера
const worker1 = new Worker('worker.js');
worker1.postMessage('Hello from main thread');
worker1.onmessage = (event) => {
  console.log('Message from worker 1:', event.data);
};

// 7. Макрозадача: requestAnimationFrame
// Этот метод связан с циклом отрисовки и будет выполнен перед отрисовкой следующего кадра
requestAnimationFrame(() => {
  console.log('Macro task 2 (before frame)');

  // 8. Микрозадача: Promise
  // Эта микрозадача будет выполнена перед отрисовкой следующего кадра
  Promise.resolve('Micro task 3').then((value) => {
    console.log(value);
  });
});

// 9. Макрозадача: requestIdleCallback
// Этот метод связан с циклом отрисовки и будет выполнен после отрисовки следующего кадра
requestIdleCallback(() => {
  console.log('Macro task 3 (after frame)');

  // 10. Микрозадача: queueMicrotask
  queueMicrotask(() => {
    console.log('Micro task 7');
  });
});

// Синхронный код
console.log('Sync code 2');

// 11. Микрозадача: queueMicrotask
queueMicrotask(() => {
  console.log('Micro task 5');
});

// 12. Макрозадача: setTimeout
setTimeout(() => {
  console.log('Macro task 5');
}, 0);

// Создание и использование другого воркера
const worker2 = new Worker('worker.js');
worker2.postMessage('Hello from main thread');
worker2.onmessage = (event) => {
  console.log('Message from worker 2:', event.data);
};

// 6. Макрозадача: MessageEvent
// Этот метод связан с циклом отрисовки и будет выполнен перед отрисовкой следующего кадра
window.dispatchEvent(
  new MessageEvent('message', { data: 'Hello from main thread' })
);
const handler = (event) => {
  console.log('Message event:', event.data);
  removeEventListener('message', handler);
};
window.addEventListener('message', handler);

// Синхронный код
console.log('Sync code 3');

console.log('End'); // Синхронный код выполняется последним
