import React, { useMemo, useState } from 'react';
import { ProvVis } from '../components/ProvVis';

import { initializeTrrack, NodeId, Registry } from '@trrack/core';
import { iconConfig} from './customIcons/iconConfig'

export type Task = {
    id: string;
};

const initialState = {
    tasks: [] as Task[],
};

export type State = typeof initialState;

export function createTrrack() {
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

export const Graph = ({
    trrack,
    verticalSpace = 25,
    marginTop = 25,
    gutter = 25,
}: {
    trrack: ReturnType<typeof initializeTrrack<State>>;
    verticalSpace?: number;
    marginTop?: number;
    gutter?: number;
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
                verticalSpace: verticalSpace,
                marginTop: marginTop,
                gutter: gutter,
            }}
            nodeMap={trrack.graph.backend.nodes}
            currentNode={currNode || trrack.root.id}
        ></ProvVis>
    );
};

export const CustomIconsGraph = ({
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
                verticalSpace: 35,
                marginTop: 25,
                gutter: 25,
                iconConfig: iconConfig,
            }}
            nodeMap={trrack.graph.backend.nodes}
            currentNode={currNode || trrack.root.id}
        ></ProvVis>
    );
};
