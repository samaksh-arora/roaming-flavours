export type MenuItem = {
  name: string
  description: string
  image: string
  fallbackEmoji: string
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
      {
        name: 'Fries',
        description: 'Crispy golden fries seasoned to perfection.',
        image: 'https://roamingflavours.com/images/french-fries.png',
        fallbackEmoji: '🍟',
      },
      {
        name: 'Samosas',
        description: 'Flaky pastry filled with spiced potatoes and peas.',
        image: 'https://roamingflavours.com/images/Saosa.png',
        fallbackEmoji: '🥟',
      },
      {
        name: 'Fried Pickles',
        description: 'Tangy pickles in a light, crunchy batter.',
        image: 'https://roamingflavours.com/images/french-fries2.png',
        fallbackEmoji: '🥒',
      },
      {
        name: 'Chicken Strips',
        description: 'Tender strips of chicken, golden fried.',
        image: 'https://roamingflavours.com/images/Chicken-Strips.png',
        fallbackEmoji: '🍗',
      },
    ],
  },
  {
    id: 'hand-helds',
    label: 'Hand Helds',
    items: [
      {
        name: 'Crispy Chicken Sandwich',
        description: 'Juicy crispy chicken with fresh toppings on a toasted bun.',
        image: 'https://roamingflavours.com/images/Sandwich-non-veg.png',
        fallbackEmoji: '🥪',
      },
      {
        name: 'Smash Beef Burger',
        description: 'Double smashed patties with melted cheese and house sauce.',
        image: 'https://roamingflavours.com/images/burger.png',
        fallbackEmoji: '🍔',
      },
      {
        name: 'Chicken Caesar Wrap',
        description: 'Grilled chicken, romaine, parmesan and caesar dressing in a flour tortilla.',
        image: 'https://roamingflavours.com/images/Chicken-wrap.png',
        fallbackEmoji: '🌯',
      },
      {
        name: 'Grilled Cheese Sandwich',
        description: 'Buttery toasted bread with gooey melted cheese.',
        image: 'https://roamingflavours.com/images/sandwich.png',
        fallbackEmoji: '🧀',
      },
    ],
  },
]
