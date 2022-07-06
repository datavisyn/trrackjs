import { Trrack } from '@trrack/core';
import { buildCategoricalColumn, builder as bld, buildNumberColumn, buildStringColumn } from 'lineupjs';

import { LineUpManager } from './lineup-manager';

const arr: any[] = [];
const cats = ['c1', 'c2', 'c3'];
for (let i = 0; i < 10000; ++i) {
  arr.push({
    a: Math.random() * 10,
    d: 'Row ' + i,
    cat: cats[Math.floor(Math.random() * 3)],
    cat2: cats[Math.floor(Math.random() * 3)],
  });
}

export function setup(node: HTMLElement) {
  const builder = bld(arr);

  builder
    .column(buildStringColumn('d'))
    .column(buildCategoricalColumn('cat', cats))
    .column(buildCategoricalColumn('cat2', cats))
    .column(buildNumberColumn('a'));

  let trrack = Trrack.init();

  const manager = LineUpManager.setup({
    initialInstance: {
      id: 'first',
      instance: builder.build(node),
    },
  });

  manager.all((inst) => {
    trrack = inst.register(trrack);
  });

  console.table((trrack as any).registry._registry);

  // lineup.trrackLineUpEvent(Ranking.EVENT_SORT_CRITERIA_CHANGED);

  document.querySelector<HTMLButtonElement>('#undo').onclick = (e) => {
    trrack.undo();
  };

  document.querySelector<HTMLButtonElement>('#redo').onclick = (e) => {
    trrack.undo();
  };

  document.querySelector<HTMLButtonElement>('#log').onclick = (e) => {
    console.table((trrack as any).graph.nodes);
  };
}