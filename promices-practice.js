function executors(resolve, reject){
    setTimeout(() => {
        resolve("Order Created, Please Pay t he Price");
    }, 2000);
}
var createOrder = new Promise(executors);
var payment = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Payment Failed, Please Pay Online or Choose COD");
    }, 2000)
})
 createOrder
    .then((data) => {
        if (data == "Order Created") {
            console.log("Order Created, Please GO through Payment Page.");
            return payment;
        }
    })
    .then((data) => {
        if (data == "Payment Done") {
            console.log("Payment Done !, Voila Your Order will reach you in XXXXXXXX Days. ");
            console.log("Started Delivery of your Consignment.");
        }
    })
    .catch(err => {
        console.log(err);
    })
async function createOrderAsync() {
    try {
        var dataFromCreateOrderPromice =
        await createOrder;
    console.log(dataFromCreateOrderPromice);
    var dataFromPayment = await payment;
    console.log(dataFromPayment);
    }
    catch (exc) {
        console.log('catching error', exc);
    }
}
createOrderAsync();
 function notifyThroughEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sent Email to Your Registered Email.");
        }, 2000)
    })
 };
 function notifyThroughSMS() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sent SMS to the USER.")
        }, 3000)
    })
 };
var allPromises =   Promise.all([notifyThroughEmail(), notifyThroughSMS()]);
allPromises.then(arr => {
    console.log(arr);
})
// async await