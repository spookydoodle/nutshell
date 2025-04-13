import React from "react";
import { Img } from "react-image";

interface Position {
  x: number;
  y: number;
}

interface CatProps {
  mouse: Position
}

const Cat: React.FC<CatProps> = ({ mouse }) => {
  const size = 100;

  const style: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    left: mouse.x - size / 2,
    top: mouse.y - size / 2,
  };

  return (
    <Img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZzuDEGS99qEhuG_nz8SZBv9HTcF-vdfTjq3xWxOS1rRxhHnVPlQcfV7n-Q&amp;s`} style={style} />
  );
};

interface MouseProps {
  componentToRender: React.ComponentType<Position>;
  className?: string;
  style?: React.CSSProperties;
}

const Mouse: React.FC<MouseProps> = (props) => {
  const [position, setPosition] = React.useState<Position | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div onMouseMove={handleMouseMove} className={props.className}>
      {position ? <props.componentToRender x={position.x} y={position.y} /> : null}
    </div>
  );
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse componentToRender={(position) => <Cat mouse={position} />} style={{ width: '100vw', height: '100vh' }} />
      </div>
    );
  }
}

export default MouseTracker;
