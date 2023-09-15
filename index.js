
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => {
        appendIdToDOM(data.id);
      })
      .catch(error => {
        appendErrorToDOM(error.message);
      });
  }
  
  function appendIdToDOM(id) {
    const newElement = document.createElement("p");
    newElement.innerHTML = `ID: ${id}`;
    document.body.appendChild(newElement);
  }
  
  function appendErrorToDOM(error) {
    const errorElement = document.createElement("p");
    errorElement.innerHTML = `Error: ${error}`;
    document.body.appendChild(errorElement);
  }
  
  // Example usage:
  submitData("Chanel hamel", "chanelhamel@example.com");
  
