function profileLekarAao(username, cb) {
    setTimeout(() => {
       
        cb({ username ,age:23,email:"mahanantsingh@gmail.com"})
    }, 2000);
}

profileLekarAao("mahanantsingh", function (profileData) {
    console.log(profileData)
 });