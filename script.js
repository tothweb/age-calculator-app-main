function calculateAge() {
  // Reading from input fields
  const birthDay = document.getElementById('day').value;
  const birthMonth = document.getElementById('month').value;
  const birthYear = document.getElementById('year').value;

  // Get current date
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  // difference
  let ageInYears = currentYear - birthYear;
  let ageInMonths = currentMonth - birthMonth;
  let ageInDays = currentDay - birthDay;

  if (ageInDays < 0) {
    ageInMonths--;
    const lastMonthDays = new Date(currentYear, currentMonth - 1, 0).getDate();
    ageInDays += lastMonthDays;
  }

  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }

  // writing result into the span elements
  document.getElementById('years').textContent = ageInYears;
  document.getElementById('months').textContent = ageInMonths;
  document.getElementById('days').textContent = ageInDays;
}