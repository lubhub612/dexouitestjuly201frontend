import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import { useTranslation } from 'contexts/Localization'
import {  SearchDexoIcon, IconButton } from '@pancakeswap/uikit'



const StyledInput = styled.div`
  position: relative;
  & > svg {
    position: absolute;
    left: 0;
    top: 0px;
    padding: 9px 8px;
    fill: white;
    transition: 0.3s;
  }

  input:focus + svg {
    fill: ${({ theme }) => theme.colors.background};
  }

  &.inputWithIcon {
    position: relative;
  }

  `;


const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.backgroundBlue};
  border: 0;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 16px;
  height: 40px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.violet};
    padding-left : 40px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;



const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const SearchInput: React.FC<Props> = ({ onChange: onChangeCallback, placeholder = 'Search' }) => {
  const [searchText, setSearchText] = useState('')

  const { t } = useTranslation()

  const debouncedOnChange = useMemo(
    () => debounce((e: React.ChangeEvent<HTMLInputElement>) => onChangeCallback(e), 500),
    [onChangeCallback],
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    debouncedOnChange(e)
  }

  return (
    <InputWrapper>
      <StyledInput className="inputWithIcon">
      <Input 
       value={searchText} 
       onChange={onChange} 
       placeholder={t(placeholder)} 
       />
      <svg
    width="40"
    height="40"
    viewBox="0 0 13 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.19727 10.4082L11.9449 13.737"
      stroke="#8F9BB7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 5.98016C11.25 8.86635 8.90184 11.2103 6 11.2103C3.09816 11.2103 0.75 8.86635 0.75 5.98016C0.75 3.09396 3.09816 0.75 6 0.75C8.90184 0.75 11.25 3.09396 11.25 5.98016Z"
      stroke="#8F9BB7"
      strokeWidth="1.5"
    />
  </svg>
        </StyledInput> 
    </InputWrapper>
  )
}

export default SearchInput
