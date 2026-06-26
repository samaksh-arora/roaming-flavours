export type MenuItem = {
  name: string
  description: string
}

export type MenuCategory = {
  id: string
  label: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'quick-bites',
    label: 'Quick Bites',
    items: [
      { name: 'Fries', description: 'Crispy golden fries seasoned to perfection.' },
      { name: 'Samosas', description: 'Flaky pastry filled with spiced potatoes and peas.' },
      { name: 'Fried Pickles', description: 'Tangy pickles in a light, crunchy batter.' },
      { name: 'Chicken Strips', description: 'Tender strips of chicken, golden fried.' },
    ],
  },
  {
    id: 'hand-helds',
    label: 'Hand Helds',
    items: [
      { name: 'Crispy Chicken Sandwich', description: 'Juicy crispy chicken with fresh toppings on a toasted bun.' },
      { name: 'Smash Beef Burger', description: 'Double smashed patties with melted cheese and house sauce.' },
      { name: 'Chicken Caesar Wrap', description: 'Grilled chicken, romaine, parmesan and caesar dressing in a flour tortilla.' },
      { name: 'Grilled Cheese Sandwich', description: 'Buttery toasted bread with gooey melted cheese.' },
    ],
  },
]
