let promises = [];
const container = document.getElementById("output");

for(let i=1; i<=5; i++){
	let randomDuration = Math.floor(Math.random()*5)+1;
	let prom = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(`fastest promise ${randomDuration} sec`);
		},randomDuration*1000);
	});
	promises.push(prom);
}

let result = Promise.any(promises);
  result.then((data)=>{
	  container.innerText = data;
  })

// Do not change the code above this
// add your promises to the array `promises`
