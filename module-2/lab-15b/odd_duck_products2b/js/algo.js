let productContainer = document.getElementById('products');// Define global variables for votes and views
console.log(productContainer)
productContainer.addEventListener('click', eventHandler); 

let votes = 0;
let views = 0;
let maxVotes = 25;
// Define a variable to store the name of the product that received a vote
// let votedProduct = '';

// // Define an object to store the total clicks for each product
// let productClicks = {};

// // Define an object to store the total votes for each product
// let productVotes = {};

// // Define an array to store the names of the products
// const productNames = [];

// // Define the Chart.js bar chart instance
// let barChart;

// // Function to increment votes
// function upvote(productName) {
//     if (votes < 25) {
//         votes++;
//         console.log("Vote recorded for " + productName);
//         // Update the votedProduct variable
//         votedProduct = productName;
//         // Increment the total votes for the product
//         if (productName in productVotes) {
//             productVotes[productName]++;
//         } else {
//             productVotes[productName] = 1;
//         }
//         updateBarChart(); // Update the bar chart
//         generateAndDisplayNewProducts(); // Generate and display new products after vote
//     } else {
//         console.log("You have reached the vote limit.");
//     }
// }

// // Function to increment views
// function incrementViews() {
//     if (views < 25) {
//         views++;
//         console.log("View recorded");
//         updateBarChart(); // Update the bar chart
//         generateAndDisplayNewProducts(); // Generate and display new products after view
//     } else {
//         console.log("You have reached the view limit.");
//     }
// }

// // Function to update the bar chart
// function updateBarChart() {
//     barChart.data.datasets[0].data = Object.values(productVotes);
//     barChart.data.datasets[1].data = Object.values(productClicks);
//     barChart.update();
// }

// // Function to display the statistics
// function displayStats() {
//     console.log("Votes: " + votes);
//     console.log("Views: " + views);
//     // Display the voted product along with the votes
//     document.querySelector('.votes-total').textContent = "Votes: " + votes + (votedProduct ? " for " + votedProduct : '');
//     document.querySelector('.views-total').textContent = "Views: " + views;

//     // Display the list of products and their total clicks
//     const clicksList = document.querySelector('.clicks-list');
//     clicksList.innerHTML = '';
//     for (const productName in productClicks) {
//         const listItem = document.createElement('li');
//         listItem.textContent = productName + ': ' + productClicks[productName] + ' clicks';
//         clicksList.appendChild(listItem);
//     }
// }

// // Function to generate and display new products
// function generateAndDisplayNewProducts() {
//     const newProducts = generateThreeUniqueProducts();
//     displayProducts(newProducts);
//     displayStats();
// }

// Define a constructor function for Product objects
function Product(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.timesShown = 0;
    this.timesClicked = 0;
}

// Define an array to hold all products
const products = [];

// Add product objects to the array
products.push(new Product('Bag', './images/bag.jpg'));
products.push(new Product('Banana', './images/banana.jpg'));
products.push(new Product('Bathroom', './images/bathroom.jpg'));
products.push(new Product('Boots', './images/boots.jpg'));
products.push(new Product('Breakfast', './images/breakfast.jpg'));
products.push(new Product('Bubblegum', './images/bubblegum.jpg'));
products.push(new Product('Chair', './images/chair.jpg'));
products.push(new Product('Cthulhu', './images/cthulhu.jpg'));
products.push(new Product('Dog-duck', './images/dog-duck.jpg'));
products.push(new Product('Dragon', './images/dragon.jpg'));
products.push(new Product('Pen', './images/pen.jpg'));
products.push(new Product('Pet-sweep', './images/pet-sweep.jpg'));
products.push(new Product('Scissors', './images/scissors.jpg'));
products.push(new Product('Shark', './images/shark.jpg'));
products.push(new Product('Sweep', './images/sweep.jpg'));
products.push(new Product('Tauntaun', './images/tauntaun.jpg'));
products.push(new Product('Unicorn', './images/unicorn.jpg'));
products.push(new Product('Water-can', './images/water-can.jpg'));
products.push(new Product('Wine-glass', './images/wine-glass.jpg'));
function getRandomNumber(){
    return Math.floor( Math.random() * products.length )
}
// Function to generate three unique product images
function generateThreeUniqueProducts() {
//     const uniqueProducts = [];
//     let tempProducts = [...products]; // Create a temporary copy of the products array

//     // If there are no remaining products to show, reset the temporary products array
//     if (tempProducts.length === 0) {
//         tempProducts = [...previousProducts];
//         previousProducts = [];
//     }

//     // Cycle through the remaining products until three unique ones are found
//     while (uniqueProducts.length < 3) {
//         const randomIndex = Math.floor(Math.random() * tempProducts.length);
//         const product = tempProducts[randomIndex];
// console.log(product)
//         // If the product is not already in the uniqueProducts array, add it
//         if (!uniqueProducts.includes(product)) {
//             uniqueProducts.push(product);
//             previousProducts.push(product); // Store the product in the previousProducts array
//             product.timesShown++; // Increment times shown
//         }
// console.log(tempProducts)
//         // Remove the selected product from the temporary array
//         tempProducts.splice(randomIndex, 1);
//         console.log('spliced products', tempProducts)
//     }

//     return uniqueProducts;
let product1 = getRandomNumber();
let product2 = getRandomNumber();
let product3 = getRandomNumber();

while (product1 === product2 || product1 === product3 || product2 === product3){
    product2 = getRandomNumber();
    product3 = getRandomNumber();
}
let duckProduct1 = products[product1]
let duckProduct2 = products[product2]
let duckProduct3 = products[product3]

duckProduct1.timesShown++;
duckProduct2.timesShown++;
duckProduct3.timesShown++;

let duck1Image = document.querySelector('.product1 img')
let duck2Image = document.querySelector('.product2 img')
let duck3Image = document.querySelector('.product3 img')

duck1Image.src = duckProduct1.imagePath
duck2Image.src = duckProduct2.imagePath
duck3Image.src = duckProduct3.imagePath

duck1Image.alt = duckProduct1.name
duck2Image.alt = duckProduct2.name
duck3Image.alt = duckProduct3.name
}

// // Function to display the products
// function displayProducts(products) {
//     const container = document.querySelector('.images-container');
//     container.innerHTML = ''; // Clear previous images
//     products.forEach((product, index) => {
//         const img = document.createElement('img');
//         img.src = product.imagePath;
//         img.alt = product.name;
//         img.id = `product-${index}`;
//         img.addEventListener('click', function () {
//             upvote(product.name); // Pass the product name to the upvote function
//             incrementViews(); // Increment views
//             product.timesClicked++;
//             // Increment the total clicks for the product
//             if (product.name in productClicks) {
//                 productClicks[product.name]++;
//             } else {
//                 productClicks[product.name] = 1;
//             }
//             displayStats(); // Update stats
//         });
//         container.appendChild(img);
//     });
// }
function eventHandler(event) {
    let productName = event.target.alt;
    console.log(productName);
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            products[i].timesClicked++;
            break;
        }
    }
    votes++;
    if (votes >= maxVotes) {
renderChart();
productContainer.removeEventListener('click', eventHandler);
    }
    else {
        generateThreeUniqueProducts();
    }
}
// Array to store the previous set of products
let previousProducts = [];
generateThreeUniqueProducts();
// Add event listener to the container for product images after DOM content is loaded
function renderChart() {
    // Populate productNames array with the names of products
    const productNames = products.map(product => product.name);

    // Create the bar chart using Chart.js
    const ctx = document.getElementById('bar-chart').getContext('2d');
    barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productNames, // Use productNames as labels
            datasets: [
                {
                    label: 'Votes',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    data: products.map(product => product.timesClicked)
                },
                {
                    label: 'Views',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    data: products.map(product => product.timesShown)
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
