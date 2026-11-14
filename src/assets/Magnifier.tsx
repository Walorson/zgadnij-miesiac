import React, { useState, useRef } from 'react';
import type { MouseEvent } from "react";
import '../css/magnifier.css'

interface MagnifierProps {
  src: string;
  alt?: string;
  zoomLevel?: number;
  magnifierWidth?: number;
  magnifierHeight?: number;
  className?: string;
  imgRef?: React.RefObject<HTMLImageElement | null>;
}

const Magnifier: React.FC<MagnifierProps> = ({
  src,
  alt = 'Zdjęcie do zgadnięcia',
  zoomLevel = 2,
  magnifierWidth = 190,
  magnifierHeight = 120,
  className = 'photo',
  imgRef: externalImgRef,
}) => {
  const [showMagnifier, setShowMagnifier] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const internalImgRef = useRef<HTMLImageElement | null>(null);
  const imgRef = externalImgRef || internalImgRef;

  const handleMouseEnter = () => {
    if (imgRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect();
      setImgSize({ width, height });
      setShowMagnifier(true);
    }
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;

    const { left, top } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setPosition({ x, y });
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: showMagnifier ? 'none' : 'default',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={className}
      />

      {showMagnifier && (
        <div
          className='magnifier'
          style={{   
            width: `${magnifierWidth}px`,
            height: `${magnifierHeight}px`,
            left: `${position.x - magnifierWidth / 2}px`,
            top: `${position.y - magnifierHeight / 2}px`,
            backgroundImage: `url('${src}')`,
            backgroundSize: `${imgSize.width * zoomLevel}px ${imgSize.height * zoomLevel}px`,
            backgroundPositionX: `${-position.x * zoomLevel + magnifierWidth / 2}px`,
            backgroundPositionY: `${-position.y * zoomLevel + magnifierHeight / 2}px`,
          }}
        />
      )}
    </div>
  );
};

export default Magnifier;