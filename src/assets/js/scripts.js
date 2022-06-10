/*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // include api for currency change
    const api = "https://api.exchangerate-api.com/v4/latest/USD";

    // for selecting different controls
    var search = document.querySelector(".searchBox");
    var convert = document.querySelector(".convert");
    var fromCurrency = document.querySelector(".from");
    var toCurrency = document.querySelector(".to");
    var finalValue = document.querySelector(".finalValue");
    var finalAmount = document.getElementById("finalAmount");
    var resultFrom;
    var resultTo;
    var searchValue;

    // Event when currency is changed
    fromCurrency.addEventListener('change', (event) => {
    	resultFrom = `${event.target.value}`;
    });

    // Event when currency is changed
    toCurrency.addEventListener('change', (event) => {
    	resultTo = `${event.target.value}`;
    });

    search.addEventListener('input', updateValue);

    // function for updating value
    function updateValue(e) {
    	searchValue = e.target.value;
    }

    // when user clicks, it calls function getresults
    convert.addEventListener("click", getResults);

    // function getresults
    function getResults() {
    	fetch(`${api}`)
    		.then(currency => {
    			return currency.json();
    		}).then(displayResults);
    }

    // display results after convertion
    function displayResults(currency) {
    	let fromRate = currency.rates[resultFrom];
    	let toRate = currency.rates[resultTo];
    	finalValue.innerHTML =
    	((toRate / fromRate) * searchValue).toFixed(2);
    	finalAmount.style.display = "block";
    }

});

// when user click on reset button
    function clearVal() {
    	window.location.reload();
    	document.getElementsByClassName("finalValue").innerHTML = "";
    };

