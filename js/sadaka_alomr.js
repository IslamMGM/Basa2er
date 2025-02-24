function calculateDays() {
  const date_of_birth = document.getElementById("date_of_birth").value;
  if (!date_of_birth) {
    alert("من فضلك إختار تاؤيخ صحيح");
    return;
  }
  const birthDate = new Date(date_of_birth);
  const currentDate = new Date();
  const diffTime = currentDate - birthDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("number_of_days").textContent = diffDays;
}
