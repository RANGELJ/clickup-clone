import styled from 'styled-components'

export const PageFrame = styled.div<{
    leftToolbarWidth: number;
    topToolbarHeight: number;
}>`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: ${({ leftToolbarWidth }) => `${leftToolbarWidth}px`} auto;
    grid-template-rows: ${({ topToolbarHeight }) => `${topToolbarHeight}px`} auto;

    grid-template-areas:
        "topToolbar topToolbar"
        "leftToolbar main";
`
