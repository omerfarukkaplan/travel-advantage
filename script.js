function generateReport() {
  let city = document.getElementById("city").value;
  let days = document.getElementById("days").value;
  let budget = document.getElementById("budget").value;

  let markupScore = Math.floor(Math.random() * 5) + 5;
  let estimatedSpend = days * budget;
  let optimizedSpend = estimatedSpend * 0.75;
  let savings = estimatedSpend - optimizedSpend;

  document.getElementById("report").classList.remove("hidden");
  document.getElementById("report").innerHTML = `
    <h2>${city} Travel Risk Report</h2>
    <p>Tourist Markup Score: ${markupScore}/10</p>
    <p>Estimated Spend: $${estimatedSpend}</p>
    <p>Optimized Spend: $${optimizedSpend}</p>
    <p>Potential Savings: $${savings}</p>
    <button onclick="unlock()">Unlock Full Insider Guide – $29</button>
  `;
}

function unlock() {
  window.location.href = "https://buy.stripe.com/test_link_here";
}
