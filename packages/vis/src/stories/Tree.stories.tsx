import { Meta } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import { ProvVis } from '../components/ProvVis';

import {
    initializeTrrack,
    NodeId,
    Registry,
    ConfigureTrrackOptions,
} from '@trrack/core';

export type Task = {
    id: string;
};

const initialState = {
    tasks: [] as Task[],
};

function createTrrack() {
    const { registry, actions } = useMemo(() => {
        const reg = Registry.create();

        const addTask = reg.register('add-task', (state, task: Task) => {
            state.tasks.push(task);
        });

        const removeTask = reg.register('remove-task', (state, task: Task) => {
            state.tasks = state.tasks.filter((t: Task) => t.id !== task.id);
        });

        const markTaskComplete = reg.register(
            'complete-task',
            (state, task: Task) => {
                const idx = state.tasks.findIndex((d: any) => d.id === task.id);
                state.tasks[idx].completed = true;
            }
        );

        const markTaskIncomplete = reg.register(
            'incomplete-task',
            (state, task: Task) => {
                const idx = state.tasks.findIndex((d: any) => d.id === task.id);
                state.tasks[idx].completed = false;
            }
        );

        return {
            registry: reg,
            actions: {
                addTask,
                removeTask,
                markTaskComplete,
                markTaskIncomplete,
            },
        };
    }, []);

    const trrack = useMemo(() => {
        const t = initializeTrrack({ registry, initialState });

        return t;
    }, []);

    return { trrack, actions };
}

type State = typeof initialState;

const Graph = ({
    trrack,
}: {
    trrack: ReturnType<typeof initializeTrrack<State>>;
}) => {
    const [currNode, setCurrNode] = useState<NodeId>();

    console.log(trrack);

    trrack.currentChange(() => {
        setCurrNode(trrack.current.id);
    });

    return (
        <ProvVis
            root={trrack.root.id}
            config={{
                changeCurrent: (node: NodeId) => trrack.to(node),
                verticalSpace: 25,
                marginTop: 25,
                gutter: 25,
            }}
            nodeMap={trrack.graph.backend.nodes}
            currentNode={currNode || trrack.root.id}
        ></ProvVis>
    );
};

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
    t.undo();
    t.undo();
    t.apply('add-task', actions.addTask({ id: '10' }));
    t.apply('add-task', actions.addTask({ id: '11' }));
    t.apply('add-task', actions.addTask({ id: '12' }));
    t.apply('add-task', actions.addTask({ id: '13' }));


    return t ? <Graph trrack={t} /> : <div></div>;
};


export default {
    component: LinearExample,
    title: 'Components/TrrackVis',
} as Meta;
// export const AnotherNameYouLike: React.FC = () => <First />;
// export const SomeOtherNameYouLike: React.FC = () => <First />;
