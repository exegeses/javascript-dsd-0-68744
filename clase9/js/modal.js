    let modal = document.getElementById("myModal");

    let btnOpen = document.getElementById("btnOpen");

    let btnClose = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    btnOpen.onclick = function() {
      modal.style.display = "block";
    }

    btnClose.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }