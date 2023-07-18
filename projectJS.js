document.addEventListener('DOMContentLoaded', function() {
  const mealPlanForm = document.getElementById('mealPlanForm');
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const goalInput = document.getElementById('goalInput');
  const clearButton = document.getElementById('clearButton');

  // Handle form submission
  mealPlanForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const goal = goalInput.value.trim();

    if (isValidEmail(email)) {
      // Update the personal information display
      document.getElementById('name').textContent = name;
      document.getElementById('email').textContent = email;
      document.getElementById('goal').textContent = goal;

      generateMealPlan();
    } else {
      alert('Please enter a valid email address.');
    }
  });

  // Handle clear button click
  clearButton.addEventListener('click', function() {
    mealPlanForm.reset();
    clearMealPlan();
  });

  // Generate the meal plan in a new window
  function generateMealPlan() {
    const nameOutput = document.getElementById('nameInput').value.trim();
    const emailOutput = document.getElementById('emailInput').value.trim();
    const goalOutput = document.getElementById('goalInput').value.trim();
    const mealPlanWindow = window.open('', '_blank');
    mealPlanWindow.document.write('<html><head><title>Your Meal Plan</title>');

    // ... (CSS styles for the table)

    mealPlanWindow.document.write('</style></head><body>');

    mealPlanWindow.document.write('<h1>Your Meal Plan</h1>');
    mealPlanWindow.document.write('<div class="personal-info">');

    // ... (Personal information display)
    mealPlanWindow.document.write('<p>Name: ' + nameOutput + '<p>');
    mealPlanWindow.document.write('<p>Email: ' + emailOutput + '<p>');
    mealPlanWindow.document.write('<p>Goal: ' + goalOutput + '<p>');

    mealPlanWindow.document.write('</div>');

    mealPlanWindow.document.write('<h2>Meal Plan</h2>');

    const mealInputs = document.getElementsByClassName('meal-input');
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    mealPlanWindow.document.write('<table>');
    mealPlanWindow.document.write('<tr><th>Day</th><th>Breakfast</th><th>Snack 1</th><th>Lunch</th><th>Snack 2</th><th>Dinner</th></tr>');

    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const breakfast = mealInputs[i * 5].value.trim();
      const snack1 = mealInputs[i * 5 + 1].value.trim();
      const lunch = mealInputs[i * 5 + 2].value.trim();
      const snack2 = mealInputs[i * 5 + 3].value.trim();
      const dinner = mealInputs[i * 5 + 4].value.trim();

      mealPlanWindow.document.write(`<tr><td>${day}</td><td>${breakfast}</td><td>${snack1}</td><td>${lunch}</td><td>${snack2}</td><td>${dinner}</td></tr>`);
    }

    mealPlanWindow.document.write('</table>');
    mealPlanWindow.document.write('</body></html>');
    mealPlanWindow.document.close();
  }


  // Clear the displayed meal plan
  function clearMealPlan() {
    document.getElementById('name').textContent = '';
    document.getElementById('email').textContent = '';
    document.getElementById('goal').textContent = '';
  }

  // Validate the email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to download form
  downloadButton.addEventListener('click', function() {
    // Retrieve table element
    var table = document.getElementById("planTable");
    var rows = table.rows;

    var tableData = [];

    // Iterate through the rows of the table
    for (var i = 0; i < rows.length; i++) {
      var rowData = [];
      var cells = rows[i].cells;

      // Iterate through the cells of each row
      for (var j = 0; j < cells.length; j++) {
        var inputField = cells[j].querySelector("input[type='text']");
        rowData.push(inputField.value);
      }

      // Add the row data to the table data array
      tableData.push(rowData);
    }

    // Convert table data to CSV format
    var csvContent = "data:text/csv;charset=utf-8,";

    tableData.forEach(function(rowArray) {
      var row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    // Create a Blob object
    var blob = new Blob([csvContent], { type: "text/csv" });

    // Create a URL for the Blob
    var url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "table.csv";
    downloadLink.click();

    // Cleanup: Revoke the URL object to free up memory
    URL.revokeObjectURL(url);
  });

  printButton.addEventListener('click', function() {
    var table = document.getElementById("planTable");
  
    table.classList.add("print-table");
  
    // Trigger the print functionality of the browser
    window.print();
  
    // Remove the added styles or formatting after printing is done
    table.classList.remove("print-table");
  });
});