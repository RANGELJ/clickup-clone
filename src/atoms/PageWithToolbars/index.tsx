import React from 'react'
import { PageFrame } from './style'

type Props = {
    leftToolbarWidth: number;
    topToolbarHeight: number;
}

const PageWithToolbars: React.FC<Props> = ({
    leftToolbarWidth,
    topToolbarHeight,
}) => (
    <PageFrame
        leftToolbarWidth={leftToolbarWidth}
        topToolbarHeight={topToolbarHeight}
    >
        <div></div>
        <div></div>
    </PageFrame>
)

export default PageWithToolbars
