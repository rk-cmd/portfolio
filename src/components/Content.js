import React from 'react'
import styled from 'styled-components'

import BannerSheet from './Content/BannerSheet'
import Sheet from './Content/Sheet'

function Content({sheets}) {
    return (
        <>
            <BannerSheet />

            {sheets.map((sheet) => (
                <Sheet key={sheet.id} sheet={sheet} />
            ))}

            {/* <Sheet /> */}
            
            {/* <Sheet /> */}
        </>
    )
}


export default Content
