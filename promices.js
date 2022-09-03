// //Promises

 function executors(resolve, reject) {
       // I am calling server and I got data
     setTimeout(() => {
         resolve("Order Created");
     }, 2000);
 }
 var createOrder = new Promise(executors);
 var payment = new Promise((resolve, reject) => {
     setTimeout(() => {
         reject("Payment failed");
     }, 2000)
 })
  createOrder
      .then((data) => {
          if (data == "Order Created") {
              console.log("Order created");
              return payment;
          }
      })
      .then((data) => {
          if (data == "Payment Done") {
              console.log("Payment Done");
              console.log("Start Delivery");
          }
      })
      .catch(err => {
          console.log(err);
      })
 async function createOrderAsync() {
     try {
         var dataFromCreateOrderPromise =
             await createOrder;
         console.log(dataFromCreateOrderPromise);
         var dataFromPayment = await payment;
         console.log(dataFromPayment);
     }
     catch (exc) {
         console.log('catching error',exc);
     }
 }
 createOrderAsync();
 function notifyThroughEmail() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve("Sent Email");
         }, 2000)
     })
 };
 function notifyThroughSMS() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve("Sent SMS");
         }, 3000)
     })
 };
 var allPromises = Promise.all([notifyThroughEmail(), notifyThroughSMS()]);
 allPromises.then(arr => {
     console.log(arr);
 })
 // async await