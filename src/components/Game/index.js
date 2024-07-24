import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Matter from 'matter-js';
import { GameEngine } from 'react-native-game-engine';
import { MoveObject } from './systems';

// Create a ball entity
const Ball = Matter.Bodies.circle(100, 100, 30, { frictionAir: 0.005 });

const Game = () => {
    useEffect(() => {
        // Initialize Matter.js physics engine
        const engine = Matter.Engine.create();
        const world = engine.world;
        Matter.World.add(world, [Ball]);

        // Create and run the runner for the engine
        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);

        return () => {
            Matter.World.clear(world);
            Matter.Runner.stop(runner);
            Matter.Engine.clear(engine);
        };
    }, []);

    // Game loop function (currently empty)
    const updateHandler = () => {
        // Update game state here
    };

    return (
        <View style={styles.container}>
            <Text>SSSSSSS</Text>
            <View style={styles.gameContainer} />
            <GameEngine
                style={styles.gameContainer}
                systems={[MoveObject]}
                entities={{
                    object: {
                        renderer: (
                            <View style={{
                                backgroundColor: '#0D0D0D',
                                width: 25,
                                height: 25,
                            }}>
                                <Text>Hi</Text>
                            </View>
                        ),
                    }
                }}
                onEvent={updateHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffddddf',
    },
    gameContainer: {

        flex: 1
    },
});

export default Game;
