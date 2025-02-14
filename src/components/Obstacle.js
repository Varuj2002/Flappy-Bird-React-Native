import Matter from "matter-js";
import React from "react";
import { View, Image } from "react-native";
import { Pipe } from "../images/index";

const Obstacle = (props) => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - widthBody / 2;
    const yBody = props.body.position.y - heightBody / 2;

    const color = props.color;

    console.log(widthBody);

    return (
        <Image
            source={Pipe}
            style={{
                // borderWidth: 1,
                // borderColor: color,
                // borderStyle: "solid",
                position: "absolute",
                left: xBody,
                top: yBody,
                width: widthBody,
                height: heightBody
            }}
        />
        // <View

        // ></View>
    );
};

export default (world, label, color, pos, size) => {
    const initialObstacle = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label,
            isStatic: true
        },
        {
            render: {
                sprite: {
                    texture:
                        "https://images.pexels.com/photos/7440281/pexels-photo-7440281.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                }
            }
        }
    );
    Matter.World.add(world, initialObstacle);

    return {
        body: initialObstacle,
        color,
        pos,
        renderer: <Obstacle />
    };
};
