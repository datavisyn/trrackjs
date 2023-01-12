import { Meta } from '@storybook/react';
import React from 'react';

import { createTrrack, Graph } from './setup';

export const LinearExample: React.FC = () => {
    const { trrack: t, actions } = createTrrack();

    t.apply('add-task', actions.addTask({ id: '1' }));
    t.apply('add-task', actions.addTask({ id: '2' }));
    t.apply('add-task', actions.addTask({ id: '3' }));
    t.apply('add-task', actions.addTask({ id: '4' }));
    t.apply('add-task', actions.addTask({ id: '5' }));
    t.apply('add-task', actions.addTask({ id: '6' }));
    t.apply('add-task', actions.addTask({ id: '7' }));

    return t ? <Graph trrack={t} /> : <div></div>;
};

export const OneBranch: React.FC = () => {
    const { trrack: t, actions } = createTrrack();

    t.apply('add-task', actions.addTask({ id: '1' }));
    t.apply('add-task', actions.addTask({ id: '2' }));
    t.apply('add-task', actions.addTask({ id: '3' }));
    t.apply('add-task', actions.addTask({ id: '4' }));
    t.apply('add-task', actions.addTask({ id: '5' }));
    t.undo();
    t.undo();
    t.apply('add-task', actions.addTask({ id: '6' }));
    t.apply('add-task', actions.addTask({ id: '7' }));
    t.apply('add-task', actions.addTask({ id: '8' }));
    t.apply('add-task', actions.addTask({ id: '9' }));

    return t ? <Graph trrack={t} /> : <div></div>;
};

export const Complex: React.FC = () => {
    const { trrack: t, actions } = createTrrack();

    t.apply('add-task', actions.addTask({ id: '1' }));
    t.apply('add-task', actions.addTask({ id: '2' }));
    t.apply('add-task', actions.addTask({ id: '3' }));
    t.apply('add-task', actions.addTask({ id: '4' }));
    t.apply('add-task', actions.addTask({ id: '5' }));
    t.undo();
    t.undo();
    t.apply('add-task', actions.addTask({ id: '6' }));
    t.apply('add-task', actions.addTask({ id: '7' }));
    t.apply('add-task', actions.addTask({ id: '8' }));
    t.apply('add-task', actions.addTask({ id: '9' }));
    t.undo();
    t.apply('add-task', actions.addTask({ id: '14' }));
    t.undo();
    t.undo();
    t.apply('add-task', actions.addTask({ id: '10' }));
    t.apply('add-task', actions.addTask({ id: '11' }));
    t.apply('add-task', actions.addTask({ id: '12' }));
    t.apply('add-task', actions.addTask({ id: '13' }));

    return t ? <Graph trrack={t} /> : <div></div>;
};

export const LargeGutter: React.FC = () => {
    const { trrack: t, actions } = createTrrack();

    t.apply('add-task', actions.addTask({ id: '1' }));
    t.apply('add-task', actions.addTask({ id: '2' }));
    t.apply('add-task', actions.addTask({ id: '3' }));
    t.apply('add-task', actions.addTask({ id: '4' }));
    t.apply('add-task', actions.addTask({ id: '5' }));
    t.undo();
    t.undo();
    t.apply('add-task', actions.addTask({ id: '6' }));
    t.apply('add-task', actions.addTask({ id: '7' }));
    t.apply('add-task', actions.addTask({ id: '8' }));
    t.apply('add-task', actions.addTask({ id: '9' }));
    t.undo();
    t.apply('add-task', actions.addTask({ id: '14' }));
    t.undo();
    t.undo();
    t.apply('add-task', actions.addTask({ id: '10' }));
    t.apply('add-task', actions.addTask({ id: '11' }));
    t.apply('add-task', actions.addTask({ id: '12' }));
    t.apply('add-task', actions.addTask({ id: '13' }));

    return t ? <Graph gutter={50} trrack={t} /> : <div></div>;
};

export const LargeVertSpace: React.FC = () => {
    const { trrack: t, actions } = createTrrack();

    t.apply('add-task', actions.addTask({ id: '1' }));
    t.apply('add-task', actions.addTask({ id: '2' }));
    t.apply('add-task', actions.addTask({ id: '3' }));
    t.apply('add-task', actions.addTask({ id: '4' }));
    t.apply('add-task', actions.addTask({ id: '5' }));
    t.undo();
    t.undo();
    t.apply('add-task', actions.addTask({ id: '6' }));
    t.apply('add-task', actions.addTask({ id: '7' }));
    t.apply('add-task', actions.addTask({ id: '8' }));
    t.apply('add-task', actions.addTask({ id: '9' }));
    t.undo();
    t.apply('add-task', actions.addTask({ id: '14' }));
    t.undo();
    t.undo();
    t.apply('add-task', actions.addTask({ id: '10' }));
    t.apply('add-task', actions.addTask({ id: '11' }));
    t.apply('add-task', actions.addTask({ id: '12' }));
    t.apply('add-task', actions.addTask({ id: '13' }));

    return t ? <Graph verticalSpace={50} trrack={t} /> : <div></div>;
};

export const LargeMarginTop: React.FC = () => {
    const { trrack: t, actions } = createTrrack();

    t.apply('add-task', actions.addTask({ id: '1' }));
    t.apply('add-task', actions.addTask({ id: '2' }));
    t.apply('add-task', actions.addTask({ id: '3' }));
    t.apply('add-task', actions.addTask({ id: '4' }));
    t.apply('add-task', actions.addTask({ id: '5' }));
    t.undo();
    t.undo();
    t.apply('add-task', actions.addTask({ id: '6' }));
    t.apply('add-task', actions.addTask({ id: '7' }));
    t.apply('add-task', actions.addTask({ id: '8' }));
    t.apply('add-task', actions.addTask({ id: '9' }));
    t.undo();
    t.apply('add-task', actions.addTask({ id: '14' }));
    t.undo();
    t.undo();
    t.apply('add-task', actions.addTask({ id: '10' }));
    t.apply('add-task', actions.addTask({ id: '11' }));
    t.apply('add-task', actions.addTask({ id: '12' }));
    t.apply('add-task', actions.addTask({ id: '13' }));

    return t ? <Graph marginTop={50} trrack={t} /> : <div></div>;
};

export default {
    component: LinearExample,
    title: 'Components/Basic',
} as Meta;
