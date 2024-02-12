
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