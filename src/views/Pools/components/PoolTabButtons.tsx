import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { ViewMode } from 'state/user/actions'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem, Toggle, Text, NotificationDot } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ToggleView from './ToggleView/ToggleView'

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color : ${({ theme }) => theme.colors.backgroundBlue};
  a {
    padding-left: 12px;
    padding-right: 12px;
    margin-top:12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius : 15px;
  margin-left: 20px;
  margin-right : 20px;
`


const WrapperDL = styled.div`
 
  margin-left: 20px;
  margin-right : 20px;
`


const WrapperDL1 = styled.div`
 
  margin-left: 200px;
`
const WrapperDL11 = styled.span`
  margin-top: 80px;
`


const PoolTabButtons = ({ stakedOnly, setStakedOnly, hasStakeInFinishedPools, viewMode, setViewMode }) => {
  const { url, isExact } = useRouteMatch()
  const { t } = useTranslation()

  const viewModeToggle = <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} />

  const liveOrFinishedSwitch = (
    <Wrapper>
    <WrapperDL>
      <ButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="subtle"  >
        <ButtonMenuItem as={Link} to={`${url}`} style={{marginTop: "5px" , marginBottom: "5px", color : "white", backgroundColor: "#060b27", border:"1px solid #ffffff" }}>
          {t('Live')}  
        </ButtonMenuItem>
        <NotificationDot show={hasStakeInFinishedPools}>
          <ButtonMenuItem id="finished-pools-button" as={Link} to={`${url}/history`}  style={{marginTop: "5px" , marginBottom: "5px", color : "#7b61ff" }}>
            <WrapperDL11>  {t('Finished')}  </WrapperDL11>
          </ButtonMenuItem>
        </NotificationDot>
      </ButtonMenu>
      </WrapperDL>
    </Wrapper>
  )

  const stakedOnlySwitch = (
    <ToggleWrapper>
      <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} scale="sm" />
      <Text color="white" fontSize='16px'> {t('Staked only')}</Text>
    </ToggleWrapper>
  )

  return (
    <ViewControls>
    {liveOrFinishedSwitch}
    {stakedOnlySwitch}
    <WrapperDL1>  {viewModeToggle}     </WrapperDL1> 
    </ViewControls>
  )
}

export default PoolTabButtons
