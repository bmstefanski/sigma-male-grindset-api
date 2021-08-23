export default function getRandomItemFromArray(items) {
  return items[Math.floor(Math.random() * items.length)] || items[4] // chosen by fair dice roll
}
