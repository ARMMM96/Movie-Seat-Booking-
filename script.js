const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const moviesSelect = document.querySelector('#movie');

// PS: the plus sign converting the value from string to number rather than useing parseint function
let ticketPrice = +moviesSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  total.innerText = selectedSeatsCount * ticketPrice;
}
// Movie select event
moviesSelect.addEventListener('change', (e) => {
  ticketPrice = e.target.value;
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
