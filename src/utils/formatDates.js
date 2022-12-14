export function dateFormatted() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}

export function hourFormatted() {
  const today = new Date();
  const hour = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes() + 1).padStart(2, '0');

  return `${hour}:${minutes}`;
}
