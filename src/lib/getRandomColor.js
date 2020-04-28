export default function getRandomColor() {
  const colors = [
    '#495057',
    '#dad',
    '#faf',
    '#fed',
    '#aec'
  ];

  const random = Math.floor(Math.random() * 5);

  return colors[random];
}