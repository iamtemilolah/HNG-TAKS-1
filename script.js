const dateTime = () => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  document.querySelector('[data-testid="currentDay"]').textContent =
    formattedDate;
};

setInterval(dateTime, 1000);

dateTime();
