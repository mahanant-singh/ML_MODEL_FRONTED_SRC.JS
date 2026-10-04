


//  promises

// app ek promise banaate ho jo ki do states me jata sakta hai and wo yaa to resolve hoga reject ab wo kya hofa ye waqt bataaya  per humein dono ke liya code likan padaka 
let pr = new Promise(function (res, rej) {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if (rn > 5) res("resolved with" + rn);
        else rej("rejected with" + rn);
        
    },3000)
})
// resolve kar diya to then and chalga agr reject hoga to catch chlga

async function abcd() {
    try {
        let val = await pr
        console.log(val);
    } catch (err) {
        console.log(err);
        
    }
    
    
}
abcd()