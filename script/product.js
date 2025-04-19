// Product

// Product Size

let btnSize = document.getElementById("btn-size");

let btns = btnSize.getElementsByClassName("product-size-btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("product-size-btn-active");
    current[0].className = current[0].className.replace("-active", "");
    this.className += "-active";
  });
}
