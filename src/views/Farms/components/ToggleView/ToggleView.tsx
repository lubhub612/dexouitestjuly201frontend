import React from 'react'
import styled from 'styled-components'
import { ListViewIcon, CardViewIcon, ListViewDexoIcon, CardViewDexoIcon, IconButton } from '@pancakeswap/uikit'
import { ViewMode } from 'state/user/actions'

interface ToggleViewProps {
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

const Container = styled.div`

margin-right: 0px;
margin-left: 100px;



  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 10;
  }
`

const ToggleView: React.FunctionComponent<ToggleViewProps> = ({ viewMode, onToggle }) => {
  const handleToggle = (mode: ViewMode) => {
    if (viewMode !== mode) {
      onToggle(mode)
    }
  }

  return (
    <Container>
      <IconButton variant="text" scale="sm" id="clickFarmCardView" onClick={() => handleToggle(ViewMode.CARD)}>
       <CardViewDexoIcon  width="32px" color={viewMode === ViewMode.CARD ? 'violet' : 'text'}   /> 
      </IconButton>
      <IconButton variant="text" scale="sm" id="clickFarmTableView" onClick={() => handleToggle(ViewMode.TABLE)}>
         <ListViewDexoIcon width="32px" color={viewMode === ViewMode.TABLE ? 'violet' : 'text'} />
      </IconButton>
    </Container>
  )
}

export default ToggleView
