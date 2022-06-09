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

});

const select = document.querySelectorAll('.currency');
    const number = document.getElementById("number");
    const output = document.getElementById("output");


    fetch('https://api.frankfurter.app/currencies').then((data) => data.json())
      .then((data) => {
        display(data);
      });


    function display(data) {
      const entries = Object.entries(data);
      for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
      }
    }



    function updatevalue() {
      let currency1 = select[0].value;
      let currency2 = select[1].value;

      let value = number.value;


      if (currency1 != currency2) {
        convert(currency1, currency2, value);
      } else {
        alert("Choose Diffrent Currency");
      }
    }


    function convert(currency1, currency2, value) {
      const host = "api.frankfurter.app";

      fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
        .then((val) => val.json())
        .then((val) => {
          console.log(Object.values(val.rates)[0]);
          output.value = Object.values(val.rates)[0];
        });

    }

