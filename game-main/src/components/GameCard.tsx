import React from 'react';
import { ArrowRight, Users, Clock3 } from 'lucide-react';
import type { GameMode } from '../types';

export function GameCard({ mode, onPlay }: { mode: GameMode; onPlay: () => void }) {
  return <article className="game-card" style={{'--accent': mode.color} as React.CSSProperties}>
    <div className="game-icon">{mode.icon}</div>
    <div className="game-card-content">
      <div className="eyebrow">{mode.family.toUpperCase()}</div>
      <h3>{mode.name}</h3>
      <p>{mode.description}</p>
      <div className="game-meta"><span><Users size={14}/>{mode.minPlayers}–{mode.maxPlayers}</span><span><Clock3 size={14}/>{mode.durationMinutes[0]}–{mode.durationMinutes[1]} phút</span></div>
    </div>
    <button className="round-arrow" onClick={onPlay} aria-label={`Chơi ${mode.name}`}><ArrowRight/></button>
  </article>;
}
