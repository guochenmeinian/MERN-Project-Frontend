import {css} from "styled-components"

export const mobile = (props) => {
    return css`
        // function when the browser window is 820px wide or less (820px wide == size of iPad Air)
        @media only screen and (max-width:820px) {
            ${props}
        }
    `;
};
