document.getElementById('autofillButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: fillFormData,
        args: [{
          firstName: 'John',
          lastName: 'Doe',
          address: '123 Main St',
          phone: '555-1234',
          email: 'john.doe@example.com'
        }]
      });
    });
  });
  
  function fillFormData(data) {
    // Your autofill logic here using data.firstName, data.lastName, etc.
    // For example:
    document.getElementById('firstName').value = data.firstName;
    document.getElementById('lastName').value = data.lastName;
    document.getElementById('address').value = data.address;
    document.getElementById('phone').value = data.phone;
    document.getElementById('email').value = data.email;
  }
  