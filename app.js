/*
1. Get the cubeContainer
2. Create an empty aray
3. Create a count and set it to 1
4. Add  cubes elements to the aray
5. add the aray to the dom
6. Get the add()/remove() btns
7. Create two functions, one for adding, 
   and one for subtrackting from the aray

	 7.1 Add an event listener to the add btn 
	 		 that runs the add() function

       7.1.1 Create if else statement that checks if the 
			       length of the aray is less than 5
						 if its less than 5, add element
						 if its more than 5, elements do nothing (null) 
						 
				7.1.2 set the count to the Aray
				7.1.3 set the innerHTML to the Aray		 

		7.2	add an eventListener to the remove btn
		    that runs the remove() function	

				7.2.1 Create if els statement that check if the 
				length of the aray is less that 5
				if its less than 5, add element
				if its more than 5, elements do nothing (null) 
				*/


const cubeContainer = document.querySelector(".cube-container"); // getting the cubeContainer.
const add = document.querySelector(".addElement"); // adding the add element btn.
const remove = document.querySelector(".removeElement"); // adding the remove elment btn.

const cubes = [`<span>1</span>`]; // Creating the aray and adding the cubes element to it (<span></span>).
let count = 1; // Creating the count for the aray and setting it to 1.
console.log("cubes");
cubeContainer.innerHTML = `<span>${count}</span>`;

const adding = () => {
	console.log("testing");
	count ++;
	if (cubes.length < 5) {
		cubes.push(`<span>${count}</span>`);
		cubeContainer.innerHTML = cubes;
	} else if(cubes.length > 5) {
		null;
	}
}

const removing = () => {
	if (cubes.length >= 1) {
		cubes.pop(`<span>${count}</span>`);
		cubeContainer.innerHTML = cubes;
	}else if(cubes.length < 1) {
		null;
	}
}

add.addEventListener("click", () => {
	adding()	
})

remove.addEventListener("click", () => {
	removing()
})



// const cubeContainer = document.querySelector(".cube-container"),
//   add = document.querySelector(".addElement"),
// 	remove = document.querySelector(".removeElement");

// let count = 1;
// const elements = 5;

// const cubes = [`<span>1</span>`];
// cubes.forEach((cube, i) => {
//   const el = document.createElement("span");
//   el.innerText = `${count}`;
//   cubeContainer.innerHTML = cubes;
// });

// console.log(cubeContainer, cubes);




// const maxElements = (elements) => {
//   if (cubes.length < 5) {
//     count++;
//   } else if (cubes.length > 5) {
//     count--;
//   }
// };

// add.addEventListener("click", () => {
//   count++;
//   cubes.push(`<span>${count}</span>`);
//   console.log(cubeContainer, cubes);
//   cubeContainer.innerHTML = cubes;
	
// });

// remove.addEventListener("click", () => {
//   count--;
//   cubes.pop(`<span>${count}</span>`);
//   console.log(cubeContainer, cubes);
//   cubeContainer.innerHTML = cubes;
// });

/************************************************************************ */
/************************ RADIO BTN LOGIC ******************************* */

/*** This code is very messy, and not the correct way to do it, but it works. 
 * I will update the logic as I learn to use javascript better.....*/



const jcFlexStart = document.querySelector(".jc-flexStart");
const jcCenter = document.querySelector(".jc-center");
const jcFlexEnd = document.querySelector(".jc-flexEnd");
const aiFlexStart = document.querySelector(".ai-flexStart");
const aiCenter = document.querySelector(".ai-center");
const aiFlexEnd = document.querySelector(".ai-flexEnd");
const fdRow = document.querySelector(".fd-row");
const fdRowReverse = document.querySelector(".fd-rowReverse");
const fdColumn = document.querySelector(".fd-column");
const fdColumnReverse = document.querySelector(".fd-columnReverse");
const code = document.querySelector(".jc-fs");


const showCodeJcFs = () => {
	
	if (!code.classList.contains ("show-jc-fs")) {
		console.log("");
		cubeContainer.style. justifyContent = "flex-start"
		code.classList.add("show-jc-fs")
	} else {
		code.classList.toggle("show-jc-fs")
	} 
}

jcFlexStart. addEventListener("click", () => {
	showCodeJcFs()
})






jcCenter. addEventListener("click", () => {
	console.log("working");
	cubeContainer.style. justifyContent = "center"
})
jcFlexEnd. addEventListener("click", () => {
	console.log("working");
	cubeContainer.style. justifyContent = "flex-end"
})
aiFlexStart. addEventListener("click", () => {
	console.log("working");
	cubeContainer.style. alignItems = "flex-start"
})
aiCenter. addEventListener("click", () => {
	console.log("working");
	cubeContainer.style. alignItems = "center"
})
aiFlexEnd. addEventListener("click", () => {
	console.log("working");
	cubeContainer.style. alignItems = "flex-end"
})
fdRow. addEventListener("click", () => {
	console.log("working");
	cubeContainer.style. flexDirection = "row"
})
fdRowReverse. addEventListener("click", () => {
	console.log("working");
	cubeContainer.style. flexDirection = "row-reverse"
})
fdColumn. addEventListener("click", () => {
	console.log("working");
	cubeContainer.style. flexDirection = "column"
})
fdColumnReverse. addEventListener("click", () => {
	console.log("working");
	cubeContainer.style. flexDirection = "column-reverse"
})
