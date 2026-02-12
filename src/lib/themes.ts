export interface DefaultTheme {
  name: string;
  slug: string;
  searchQuery: string;
  icon: string;
}

export const defaultThemes: DefaultTheme[] = [
  {
    name: 'Hogwarts',
    slug: 'hogwarts',
    searchQuery: 'Hogwarts castle window rain ambience',
    icon: '🏰',
  },
  {
    name: 'Medieval Castle',
    slug: 'medieval',
    searchQuery: 'medieval castle window rain thunderstorm ambience',
    icon: '🗡️',
  },
  {
    name: 'Lord of the Rings',
    slug: 'lotr',
    searchQuery: 'Lord of the Rings ambience Rivendell Shire cosy',
    icon: '💍',
  },
  {
    name: 'Zelda',
    slug: 'zelda',
    searchQuery: 'Zelda ambience cosy rain fireplace',
    icon: '🧝',
  },
  {
    name: 'D&D Tavern',
    slug: 'dnd-tavern',
    searchQuery: 'D&D tavern ambience medieval fantasy inn',
    icon: '🍺',
  },
  {
    name: 'Hufflepuff Common Room',
    slug: 'hufflepuff',
    searchQuery: 'Hufflepuff common room ambience cosy fireplace rain',
    icon: '🦡',
  },
  {
    name: 'Cosy Autumn',
    slug: 'autumn',
    searchQuery: 'cosy autumn rain window UK ambience',
    icon: '🍂',
  },
  {
    name: 'Rainy Day',
    slug: 'rainy',
    searchQuery: 'rainy day window ambience UK cosy',
    icon: '🌧️',
  },
  {
    name: 'Winter Cabin',
    slug: 'winter',
    searchQuery: 'winter cabin snow fireplace ambience cosy',
    icon: '❄️',
  },
  {
    name: 'Fantasy Library',
    slug: 'library',
    searchQuery: 'fantasy library ambience rain thunder books',
    icon: '📚',
  },
  {
    name: 'Gryffindor Common Room',
    slug: 'gryffindor',
    searchQuery: 'Gryffindor common room ambience fireplace rain',
    icon: '🦁',
  },
  {
    name: 'FanTaisia Ambience',
    slug: 'fantaisia',
    searchQuery: 'FanTaisia Ambience dark fantasy castle window',
    icon: '🌙',
  },
  {
    name: 'Ambient Worlds',
    slug: 'ambient-worlds',
    searchQuery: 'Ambient Worlds Harry Potter LOTR ambience',
    icon: '🌍',
  },
  {
    name: 'Seasonal Ambience',
    slug: 'seasonal-ambience',
    searchQuery: 'Seasonal Ambience cosy autumn winter rain',
    icon: '🌿',
  },
];

// Curated video IDs - refreshed Feb 2026
export const curatedVideos = [
  '4H23SVTauHU', // Hogwarts castle window
  'HwLhOapx4dE', // Medieval castle rain
  'whgZ07DeEX4', // D&D tavern ambience
  'ZW01JFx7E1w', // Cozy fireplace
  'JXmde9n2Dm4', // Fantasy library
  'q_8FXTPDj-A', // Gryffindor Common Room
  'eGZh_RlGPXo', // Hobbit Hole cozy
  'V4z4DE8LHzQ', // Winter cabin snow
  '7v3F8W9Y8hI', // LOTR Rivendell
];
