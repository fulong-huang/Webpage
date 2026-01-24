import { useEffect } from 'react'
import './draw.css'
import { managerInit, managerCleanUp } from './features/manager';
import Canvas from './features/display/canvas/canvas';

function Draw() {
  useEffect(() => {
    managerInit();
    return () => managerCleanUp();
  }, [])
  return (
    <span className="draw">
      <Canvas />
    </span>
  )

}

export default Draw
