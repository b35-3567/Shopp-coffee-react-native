import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useState, useReducer } from 'react'

const Sc3_8_3_24 = () => {
    const initialTasks = [
        { id: 0, text: 'Visit Kafka Museum', done: true },
        { id: 1, text: 'Watch a puppet show', done: false },
        { id: 2, text: 'Lennon Wall pic', done: false },
    ];
    // Sử dụng useState để lưu trữ giá trị của nextId
    const [nextId, setNextId] = useState(3);
// koo sử dụng let =nextId++ là nó sẽ báo lỗi 
    function tasksReducer(tasks, action) {
        switch (action.type) {
            case 'added': {
                return [
                    ...tasks,
                    {
                        id: nextId, // Sử dụng nextId hiện tại
                        text: action.text,
                        done: false,
                    },
                ];
            }
            case 'changed': {
                return tasks.map((t) => {
                    if (t.id === action.task.id) {
                        return action.task;
                    } else {
                        return t;
                    }
                });
            }
            case 'deleted': {
                return tasks.filter((t) => t.id !== action.id);
            }
            default: {
                throw Error('Unknown action: ' + action.type);
            }
        }
    }

    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    function handleAddTask() {
        // Tăng giá trị của nextId sau khi sử dụng nó
        dispatch({ type: 'added', text: 'New Task' });
        setNextId(nextId + 1);
    }

    function handleChangeTask(task) {
        dispatch({ type: 'changed', task });
    }

    function handleDeleteTask(taskId) {
        dispatch({ type: 'deleted', id: taskId });
    }

    const Task = ({ task }) => {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>{task.text}</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>ScreenSc3_8_3_24</Text>
            <Button
                title="Add Task"
                onPress={handleAddTask}
            />
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <Task task={item} />
                )}
                keyExtractor={(item, index) => index.toString()} 
            />
        </View>
    );
}

export default Sc3_8_3_24;
