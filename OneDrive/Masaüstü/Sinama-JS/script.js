const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener("click", function(e) {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected"); // eleman içerisinde selected klasörü varsa siler yoksa eker.
        
         
         selectedSeatCount = container.querySelectorAll(".seat.selected").length;
         let price = select.value;
         count.innerText = selectedSeatCount;
         amount.innerText = selectedSeatCount * price; 
    }
});

select.addEventListener("change", function(e) {
    calculateTotal()
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll(".seat.selected");

   const selectedSeatsArr = [];
   const seatsArr = [];

   selectedSeats.forEach(function(seat) {
    selectedSeatsArr.push(seat);
   });

   seats.forEach(function(seat) {
    seatsArr.push(push);
   })

   let selectedSeatsIndexs = selectedSeatsArr.map(function(seat) {
      return seatsArr .indexOf(seat);
   })

   console.log(selectedSeatsIndexs);

    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStroge(selectedSeatIndexs);
}

function saveToLocalStroge(index) {
    localStorage.setItem("selectedSeats", JSON.stringify(index));
}