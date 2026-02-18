
import { MenuItem } from '../types';
import { formatCurrency } from './format';

export const generateWhatsAppLink = (
  items: MenuItem[], 
  restaurantName: string, 
  currencySymbol: string = '$'
): string => {
  // 1. Phone Number (Hardcoded for Demo - In production this comes from RestaurantConfig)
  const PHONE_NUMBER = '573001234567'; // Ejemplo Colombia

  // 2. Build Message
  let message = `Hola *${restaurantName}*, me gustaría ordenar:\n\n`;
  let total = 0;

  items.forEach(item => {
    const qty = item.quantity || 1;
    const price = item.finalPrice || (item.price * qty);
    total += price;

    message += `▪️ *${qty}x ${item.name}*\n`;
    
    // Add Modifiers details if any
    if (item.selectedOptions && item.selectedOptions.length > 0) {
        const details = item.selectedOptions.map(o => o.optionName).join(', ');
        message += `   _(${details})_\n`;
    }
  });

  const tax = total * 0.08;
  const grandTotal = total + tax;

  message += `\n*Subtotal:* ${currencySymbol}${formatCurrency(total)}`;
  message += `\n*Impoconsumo (8%):* ${currencySymbol}${formatCurrency(tax)}`;
  message += `\n\n*TOTAL A PAGAR: ${currencySymbol}${formatCurrency(grandTotal)}*`;
  message += `\n\nGracias.`;

  // 3. Encode
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};
