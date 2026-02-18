
/**
 * Formateador de moneda exclusivo para Colombia (COP).
 * Elimina decimales y usa separadores de miles (punto).
 */
export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
