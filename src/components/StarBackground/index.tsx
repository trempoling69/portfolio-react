import { ReactNode } from 'react';
import './index.scss';

const StarBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sky">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="comet" style={{ animationDelay: `${Math.random() * 30}s` }}></div>
      {children}
    </div>
  );
};

export default StarBackground;
