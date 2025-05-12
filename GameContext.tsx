import React, { createContext, useContext, useReducer } from 'react';
import { GameState, GameAction, GameLevel } from '@/types/game';
import { initialLevels } from '@/data/levels';

const initialState: GameState = {
  currentLevel: null,
  levels: initialLevels,
  revealedClues: 0,
  score: 0,
  gameStatus: 'playing',
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_LEVEL':
      const level = state.levels.find((l) => l.id === action.payload.levelId);
      if (!level) return state;
      return {
        ...state,
        currentLevel: {
          ...level,
          animals: level.animals.map((animal) => ({
            ...animal,
            eliminated: false,
          })),
        },
        revealedClues: 0,
        gameStatus: 'playing',
      };

    case 'REVEAL_CLUE':
      if (!state.currentLevel) return state;
      return {
        ...state,
        revealedClues: state.revealedClues + 1,
      };

    case 'ELIMINATE_ANIMAL':
      if (!state.currentLevel) return state;
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          animals: state.currentLevel.animals.map((animal) =>
            animal.id === action.payload.animalId
              ? { ...animal, eliminated: true }
              : animal
          ),
        },
      };

    case 'GUESS_ANIMAL':
      if (!state.currentLevel) return state;
      const isCorrect = action.payload.animalId === state.currentLevel.correctAnimalId;
      const scoreIncrease = isCorrect ? 10 - state.revealedClues : 0;
      
      return {
        ...state,
        score: state.score + scoreIncrease,
        gameStatus: isCorrect ? 'success' : 'failure',
        levels: state.levels.map((level) =>
          level.id === state.currentLevel?.id
            ? { ...level, completed: isCorrect }
            : level
        ),
      };

    case 'NEXT_LEVEL':
      if (!state.currentLevel) return state;
      const currentIndex = state.levels.findIndex((l) => l.id === state.currentLevel?.id);
      const nextLevel = state.levels[currentIndex + 1];
      
      if (!nextLevel) {
        return {
          ...state,
          gameStatus: 'complete',
          currentLevel: null,
        };
      }
      
      return {
        ...state,
        currentLevel: {
          ...nextLevel,
          animals: nextLevel.animals.map((animal) => ({
            ...animal,
            eliminated: false,
          })),
        },
        revealedClues: 0,
        gameStatus: 'playing',
      };

    case 'RESET_GAME':
      return {
        ...initialState,
        levels: initialLevels,
      };

    default:
      return state;
  }
}

type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}