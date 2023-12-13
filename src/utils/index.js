export function getTime() {
  const now = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[now.getMonth()];
  const day = now.Date();
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedTime = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;

  return formattedTime;
}

export function getDifference(time) {
  const now = new Date();

  const secondTime = new Date(time);

  const timeDifference = secondTime - now;

  const seconds = timeDifference / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;

  return Math.abs(hours) < 24;
}
