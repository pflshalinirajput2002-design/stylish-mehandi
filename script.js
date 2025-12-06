// Header Load
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

// Footer Load
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
function openFullImage(imgPath) {
  document.getElementById("fullImage").src = imgPath;
  $('#imageModal').modal('show');
}