function slide(){
 console.log("called");
    var filterSlider = document.getElementById('filterSlider');
    if (filterSlider.style.right === '-300px' || filterSlider.style.right === '') {
        filterSlider.style.right = '0';
        filterSlider.style.display= "block";
    } else {
        filterSlider.style.right = '-300px';
    }
}




function toggleArrow(element) {
    element.classList.toggle('upside-down');
  }
  function filterF() {
    const levelRadios = document.getElementsByName('level');
    const durationRadios = document.getElementsByName('duration');
  
    let selectedLevel, selectedDuration;
  
    // Get the selected level
    for (const radio of levelRadios) {
      if (radio.checked) {
        selectedLevel = radio.id; // Use ID as the selected value
        break;
      }
    }
  
    // Get the selected duration
    for (const radio of durationRadios) {
      if (radio.checked) {
        selectedDuration = radio.id; // Use ID as the selected value
        break;
      }
    }
  
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const cardLevel = card.getAttribute('data-level');
      const cardDuration = card.getAttribute('data-duration');
  
      // If both level and duration match the selected filters, display the card
      if (cardLevel === selectedLevel || cardDuration === selectedDuration) {
        card.style.display = 'block'; // Show the card
      } else {
        card.style.display = 'none'; // Hide the card
      }
    });
  }
  function clearAll(){
    const cards = document.querySelectorAll('.card');
    cards.forEach(s=>{
      s.style.display='block';
    })
  }
  

