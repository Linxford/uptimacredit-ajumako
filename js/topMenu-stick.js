
                // jquery ready start
                document.addEventListener("DOMContentLoaded", function () {
                    window.addEventListener('scroll', function () {
                        if (window.scrollY > 190) {
                            document.getElementById('navbar_top').classList.add('fixed-top');
                            // add padding top to show content behind navbar
                            navbar_height = document.querySelector('.navbar').offsetHeight;
                            document.body.style.paddingTop = navbar_height + 'px';
                        } else {
                            document.getElementById('navbar_top').classList.remove('fixed-top');
                            // remove padding top from body
                            document.body.style.paddingTop = '0';
                        }
                    });
                });


                document.addEventListener("DOMContentLoaded", function () {
                    // make it as accordion for smaller screens
                    if (window.innerWidth > 992) {

                        document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

                            everyitem.addEventListener('mouseover', function (e) {

                                let el_link = this.querySelector('a[data-bs-toggle]');

                                if (el_link != null) {
                                    let nextEl = el_link.nextElementSibling;
                                    el_link.classList.add('show');
                                    nextEl.classList.add('show');
                                }

                            });
                            everyitem.addEventListener('mouseleave', function (e) {
                                let el_link = this.querySelector('a[data-bs-toggle]');

                                if (el_link != null) {
                                    let nextEl = el_link.nextElementSibling;
                                    el_link.classList.remove('show');
                                    nextEl.classList.remove('show');
                                }


                            })
                        });

                    }
                    // end of innerWidth
                });
                // DOMContentLoaded  end

                $('ul.navbar-nav li.dropdown').hover(function () {
                    $(this).find('.dropdown').stop(true, true).delay(200).fadeIn(500);
                }, function () {
                    $(this).find('.dropdown').stop(true, true).delay(200).fadeOut(500);
                });
            // <script>
        // Redirect to URLs without .html extension
        if (location.pathname.substr(-5) == '.html') {
            var newURL = location.pathname.slice(0, -5);
            window.history.replaceState({}, document.title, newURL);
        }
    // </script>

    //Darkmode
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

{/* <script> */}
  // Check if section should be hidden after 24 hours
  document.addEventListener("DOMContentLoaded", function() {
    var valBanner = document.getElementById("val_banner");
    var viewedTimestamp = localStorage.getItem("val_banner_viewed");
    if (!viewedTimestamp) {
      // If section has not been viewed, store current timestamp
      localStorage.setItem("val_banner_viewed", Date.now());
    } else {
      // If section has been viewed, check if 24 hours have elapsed
      var twentyFourHoursInMs = 11 * 60 * 60 * 1000; // 24 hours in milliseconds
      if (Date.now() - viewedTimestamp > twentyFourHoursInMs) {
        // If 24 hours have elapsed, hide the section
        valBanner.style.display = "none";
      }
    }
  });
{/* </script> */}
 // Hide elements with class names "val_banner" and "hide_after_five_seconds" after 5 seconds
//   document.addEventListener("DOMContentLoaded", function() {
//     var elementsToHide = document.querySelectorAll(".val_pop");
//     setTimeout(function() {
//       elementsToHide.forEach(function(element) {
//         element.style.display = "none";
//       });
//     }, 5000); // 5000 milliseconds = 5 seconds
//   });