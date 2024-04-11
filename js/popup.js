let popup = document.getElementById("popup");

      function openpopup() {
         popup.classList.add("open-popup");
         document.body.classList.add('noscroll');
        }
        function closepopup() {
            popup.classList.remove("open-popup");
            document.body.classList.remove('noscroll');
      }