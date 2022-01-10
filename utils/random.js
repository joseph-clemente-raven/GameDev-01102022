import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const getRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getPipeSizePosPair = (addToPosX = 0) => {
    let yPosTop = -getRandom(200, windowHeight - 100);

    const pipeTop = { pos: { x: windowWidth + addToPosX, y: yPosTop}, size: {height: windowHeight * 2, width: 50}}
    const pipeBottom = { pos: { x: windowWidth + addToPosX, y: windowHeight * 2 + 100 + yPosTop}, size: {height: windowHeight * 2, width: 50}}

    return { pipeTop, pipeBottom };
}