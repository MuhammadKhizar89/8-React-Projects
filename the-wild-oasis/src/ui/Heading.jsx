import styled from "styled-components";
const Heading = styled.h1`
    ${(props) =>
        props.as === "h1" &&
        `
            font-size: 30px;
            font-weight: 600;
        `
        }
    ${(props) =>
        props.type === "h2" &&
        `
            font-size: 30px;
            font-weight: 600;
        `
        }

${(props) =>
        props.type === "h4" &&
        `
            font-size: 3rem;
            font-weight: 600;
            text-align: center;
        `
        }


        line-height: 1.4;
`;
export default Heading;
