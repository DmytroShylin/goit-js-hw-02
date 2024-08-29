function calculateGiftDelivery(giftName, recipientCountry, weight) {
  const deliveryPrice = 20;
  const weightOneKg = 5;
  let totalCost = weight * weightOneKg + deliveryPrice;

  if (weight > 10) {
    totalCost *= 0.95;
  }
  totalCost = Math.round(totalCost);

  return `Delivering ${giftName} to ${recipientCountry} will cost ${totalCost} dollars`;
}

console.log(calculateGiftDelivery("Teddy Bear", "USA", 2.3));

// Уявіть, що ви розробляєте програмне забезпечення для міжнародної служби доставки подарунків. Вам потрібно створити функцію для розрахунку вартості доставки подарунка та генерації повідомлення для клієнта.
// Оголосіть функцію calculateGiftDelivery, яка очікує три параметри:

// giftName — перший параметр, рядок, що містить назву подарунка
// recipientCountry — другий параметр, рядок, що містить країну отримувача
// weight — третій параметр, число, що містить вагу подарунка в кілограмах

// Доповніть код функції так, щоб вона повертала рядок з повідомленням про доставку подарунка:
// "Delivering <giftName> to <recipientCountry> will cost <totalCost> dollars", де:

// <giftName> — це назва подарунка
// <recipientCountry> — це країна отримувача
// <totalCost> — це загальна вартість доставки

// Для розрахунку вартості доставки використовуйте наступну формулу:

// Базова вартість доставки: 20 доларів
// Додаткова вартість за кожен кілограм ваги: 5 доларів
// Якщо вага подарунка перевищує 10 кг, застосуйте знижку 5% до загальної вартості

// Округліть загальну вартість до цілого числа.
// Використайте наступний код для перевірки вашої функції:
