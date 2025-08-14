
document.getElementById("roasForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const revenue = parseFloat(document.getElementById("revenue").value);
  const spend = parseFloat(document.getElementById("spend").value);
  const resultDiv = document.getElementById("result");
  const ctaBtn = document.getElementById("cta-button");

  if (isNaN(revenue) || isNaN(spend) || spend === 0) {
    resultDiv.textContent = "Please enter valid numbers.";
    ctaBtn.classList.add("hidden");
    return;
  }

  const roas = revenue / spend;
  resultDiv.textContent = `Your ROAS is: ${roas.toFixed(2)}x`;

  ctaBtn.classList.remove("hidden");
});
