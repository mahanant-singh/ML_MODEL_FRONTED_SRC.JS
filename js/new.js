function kuchhDerbaadChalunga(func) {
    setTimeout(func, Math.floor(Math.random() * 20) * 1000);
}
kuchhDerbaadChalunga(function () {
    console.log("hey")
})
// ek function ko agar  app ek aur function bhej de eahe ho parameter mein ,to wo parameter waal func kehlaata hai callback
