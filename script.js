// Simulated sensor data
const healthData = {
    temperature: 36.5,
    heartRate: 72,
  };
  
  // Display simulated readings
  function updateReadings() {
    document.getElementById("temperature").textContent = healthData.temperature.toFixed(1);
    document.getElementById("heartRate").textContent = healthData.heartRate;
  }
  
  // Search for medicines based on user input
  function searchMedicines() {
    const symptom = document.getElementById("searchInput").value.toLowerCase();
    const medicines = {
      cough: ["Cough Syrup", "Lozenges", "Honey Tea"],
      fever: ["Paracetamol", "Ibuprofen", "Cold Compress"],
      headache: ["Aspirin", "Acetaminophen", "Caffeine"],
    };
  
    const results = medicines[symptom] || ["No suggestions found for this symptom."];
    const resultDiv = document.getElementById("medicineResults");
  
    resultDiv.innerHTML = `<h3>Medicines for ${symptom || "symptom"}:</h3>`;
    resultDiv.innerHTML += `<ul>${results.map(med => `<li>${med}</li>`).join("")}</ul>`;
  }
  
  // Initialize readings on page load
  window.onload = updateReadings;
  