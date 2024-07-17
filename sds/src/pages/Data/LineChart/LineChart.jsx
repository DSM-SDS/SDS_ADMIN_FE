import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import useLine from './useLine';
import { color } from "../../../styles/theme";

const LineChart = ({ points, data }) => {
    const [lines] = useLine(points);
    const [result, setResult] = useState();

    return (
        <Box>
            <Svg viewBox="0 0 700 350">
                {lines.map(({ x1, x2, y1, y2 }, index) => (
                    <GraphLine x1={x1} x2={x2} y1={y1} y2={y2} stroke={color.Red[2]} strokeWidth="1" />
                ))}
                {points.map(({ x, y }, index) => {
                    const time = data[index].time.substring(11, 16);
                    return(
                    <>
                        <GraphCircle cx={x} cy={y} r="1"></GraphCircle>
                        <Text x={x} y={310}>
                            {time}
                        </Text>
                    </>
                    );
                })}
            </Svg>
        </Box>
    );
}

const Box = styled.div`
    width: 700px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
`;

const Svg = styled.svg`
    width: 100%;
    height: 100%;
`;

const GraphLine = styled.line`
  stroke: ${color.Red[2]};
  stroke-width: 1;
`;

const GraphCircle = styled.circle`
  fill: ${color.Red[2]};
`;

const Text = styled.text`
  font-size: 8px;
  color: ${color.Black};
`;


export default LineChart;