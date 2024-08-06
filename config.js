const dashboardUrl = process.env.looker_env;
document.addEventListener("DOMContentLoaded", () => {
  const dashboardIframe = document.getElementById('dashboard');
  const userEmail = getUserEmail(); // Assume this function gets the logged-in user's email
  applyFilter(userEmail, dashboardUrl);
});

function applyFilter(userEmail, dashboardUrl) {
  const filteredUrl = `${dashboardUrl}?email=${encodeURIComponent(userEmail)}`;
  document.getElementById('dashboard').src = filteredUrl;
}
