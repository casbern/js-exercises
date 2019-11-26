// var myPromise = function(){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/cah90');
//         xhr.send(null);

//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Error');
//                 }
//             }
//         }
//     });
// }

// console.log(result); // The console will show pending.

// myPromise();

axios.get('https://api.github.com/users/cah90');
    Promise.prototype.then(function(response.data.avatar_url) {
        console.log(response);
    });
    Promise.prototype.catch(function(error) {
        console.warn(error);
    });