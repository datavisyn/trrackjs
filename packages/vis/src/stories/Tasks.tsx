import { faCheck, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionIcon, Button, Center, Group, Stack, Text } from '@mantine/core';
import React, { useMemo } from 'react';
import { State, Task } from './setup';

export function Tasks({
    state,
    completeCallback,
}: {
    state: State;
    completeCallback: (task: Task) => void;
}) {
    return (
        <Stack spacing={2}>
            {state.tasks.map((task) => {
                return (
                    <Group spacing={'xs'}>
                        <Text style={{ marginRight: 'auto' }}>{task.id}</Text>
                        <ActionIcon>
                            <FontAwesomeIcon
                                icon={faCheck}
                                color={task.complete ? 'green' : 'lightgray'}
                                onClick={() => {
                                    if (!task.complete) {
                                        completeCallback(task);
                                    }
                                }}
                            ></FontAwesomeIcon>
                        </ActionIcon>
                        <ActionIcon>
                            <FontAwesomeIcon
                                icon={faX}
                                color={task.complete ? 'lightgray' : 'red'}
                                onClick={() => {
                                    if (task.complete) {
                                        completeCallback(task);
                                    }
                                }}
                            ></FontAwesomeIcon>
                        </ActionIcon>
                        <ActionIcon>
                            <FontAwesomeIcon
                                icon={faTrash}
                                color={'gray'}
                                onClick={() => {
                                    if (task.complete) {
                                        completeCallback(task);
                                    }
                                }}
                            ></FontAwesomeIcon>
                        </ActionIcon>
                    </Group>
                );
            })}
            <Center>
                    <Button>Add</Button>
            </Center>
        </Stack>
    );
}
