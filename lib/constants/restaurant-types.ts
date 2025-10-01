// lib/constants/restaurant-types.ts

export const RESTAURANT_TYPES = [
  { value: "restaurant_traditionnel", label: "Restaurant traditionnel" },
  { value: "maquis", label: "Maquis" },
  { value: "cafe_restaurant", label: "Café-restaurant" },
  { value: "fast_food", label: "Fast-food" },
  { value: "hotel_restaurant", label: "Hôtel-restaurant" },
  { value: "bar_restaurant", label: "Bar-restaurant" },
  { value: "autre", label: "Autre" },
] as const;

export type RestaurantType = typeof RESTAURANT_TYPES[number]['value'];

export const RESTAURANT_TYPE_LABELS: Record<RestaurantType, string> = {
  restaurant_traditionnel: 'Restaurant traditionnel',
  maquis: 'Maquis',
  cafe_restaurant: 'Café-restaurant',
  fast_food: 'Fast-food',
  hotel_restaurant: 'Hôtel-restaurant',
  bar_restaurant: 'Bar-restaurant',
  autre: 'Autre',
};
