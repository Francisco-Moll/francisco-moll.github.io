"use strict";

function toggleDiningOption() {
    var tableHidden = document.querySelector('.table_hidden');
    
    if (document.querySelector('input[name="diningOption"]:checked').value === 'payGo') {
      tableHidden.style.display = 'none';
    } else {
      tableHidden.style.display = 'flex';
    }
  }