import { BaseArtifactType } from '@trrack/core';
import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import { ProvVisConfig } from './ProvVis';

export function AnimatedLine<T, S extends string, A extends BaseArtifactType<any>>({
  x1Width,
  x2Width,
  y1Depth,
  y2Depth,
  y1Offset,
  y2Offset,
  config,
  xOffset,
}: {
  x1Width: number;
  x2Width: number;
  y1Depth: number;
  y2Depth: number;
  y1Offset: number;
  y2Offset: number;
  config: ProvVisConfig<T, S, A>;
  xOffset: number;
}) {
  const style = useSpring({
    config: {
      duration: config.animationDuration,
      easing: easings.easeInOutSine,
    },
    from: {

      y1: (y1Depth - 1) * config.verticalSpace + y1Offset,
      y2: (y2Depth - 1) * config.verticalSpace + y2Offset,
    },
    to: {
      x1: -x1Width * config.gutter + xOffset,
      x2: -x2Width * config.gutter + xOffset,
      y1: y1Depth * config.verticalSpace + y1Offset,
      y2: y2Depth * config.verticalSpace + y2Offset,
    }
  });

  return <animated.line {...style} stroke="black" pointerEvents="none" />;
}
