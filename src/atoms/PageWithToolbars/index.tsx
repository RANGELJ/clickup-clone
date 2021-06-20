import React from 'react'
import {
    PageFrame,
    TopToolbarFrame,
    LeftToolbarFrame,
    ChildrenFrame,
} from './style'

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
        <TopToolbarFrame />
        <LeftToolbarFrame />
        <ChildrenFrame />
    </PageFrame>
)

export default PageWithToolbars
