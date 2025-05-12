export type Animal = {
  id: string;
  name: string;
  pawPrintImage: string;
  animalImage: string;
  clues: string[];
  fact: string;
  habitat: string;
  eliminated: boolean;
};

export type GameLevel = {
  id: string;
  name: string;
  animals: Animal[];
  correctAnimalId: string;
  difficulty: 'easy' | 'normal' | 'hard';
  completed: boolean;
};

export type GameState = {
  currentLevel: GameLevel | null;
  levels: GameLevel[];
  revealedClues: number;
  score: number;
  gameStatus: 'playing' | 'success' | 'failure' | 'complete';
};

export type GameAction =
  | { type: 'START_LEVEL'; payload: { levelId: string } }
  | { type: 'REVEAL_CLUE' }
  | { type: 'ELIMINATE_ANIMAL'; payload: { animalId: string } }
  | { type: 'GUESS_ANIMAL'; payload: { animalId: string } }
  | { type: 'NEXT_LEVEL' }
  | { type: 'RESET_GAME' };