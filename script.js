const productInfo = [
  {
    url: "./Images/1.png",
  },
  {
    url: "./Images/2.png",
  },
];

function showMore() {
  const productMore = document.querySelector("#product");
  const buttonLess = document.querySelector("#btn-1");
  const buttonMore = document.querySelector("#btn-2");

  

  productMore.classList.remove("product-more");
  buttonLess.classList.add('product-more');
  buttonMore.classList.remove('product-more');
}

function showLess() {
  const productMore = document.querySelector("#product");
  const buttonLess = document.querySelector("#btn-1");
  const buttonMore = document.querySelector("#btn-2");

  productMore.classList.add("product-more");
  buttonLess.classList.remove('product-more');
  buttonMore.classList.add('product-more');
}


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('emailForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the page from refreshing

    console.log('Form submitted'); // Debugging

    const input = document.createElement('div');
    input.innerText = `Subscribed`;
    input.classList.add('news-letter-add');

    document.querySelector('.output').appendChild(input); // Append message
    document.querySelector('#submitBtn').disabled = true; // Disable the submit button
  });
});

