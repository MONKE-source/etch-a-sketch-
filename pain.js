document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.classList.add('container');
    
    document.body.appendChild(container);

    function getGridSize() {
        let gridSize = prompt("What grid size do you want? (max 99)");
        return gridSize;
      }
      
      function getCorrectGridSize() {
        let gridSize = getGridSize(); 
      
        while (gridSize.length > 2 || isNaN(gridSize) || gridSize < 1 || gridSize > 99) {
          alert("Invalid size. Please enter a number between 1 and 99.");
          gridSize = getGridSize(); 
        }
      
        return gridSize;
      }

      var gridSize = getCorrectGridSize()
      var correctGridSize = gridSize * gridSize
      container.style.setProperty('--grid-size', gridSize);
      

    
    for (i = 0; i < correctGridSize; i++){
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        container.appendChild(gridDiv);

        gridDiv.addEventListener('mouseover', function(){
            gridDiv.classList.add('trail');

        });
    }
});
