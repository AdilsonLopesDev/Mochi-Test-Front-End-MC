import styled from 'styled-components'

export const Separator = styled.hr`
  width: 100%;
  height: 2px;
  background-color: #666;
  margin-bottom: 1rem;
  margin-top: 0.6rem;
`

export const Container = styled.div`
  display: flex;
`
export const Output = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 4px;
  :first-of-type {
    margin-right: 1rem;
  }
  span.showmore {
    font-size: 13px;
    text-align: center;
    margin-top: 20px;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`
export const UsersOrOrginazationList = styled.ul`
  li {
    list-style: none;
    display: flex;
    align-items: center;
    border-top: 0.4px solid #666;
    padding: 10px 0px;
    color: ${props => props.theme.colors.text};
    :first-child {
      border: 0;
      margin-top: 10px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      span {
        margin-left: 0;
      }
    }
    :last-child {
      border-bottom: 0.4px solid #666;
    }
    div.userInfo {
      display: flex;
      justify-content: space-between;
      width: 100%;

      span {
        display: flex;
        margin-left: 20px;
        justify-content: space-between;
        flex-direction: column;
        small {
          color: #797373;
          font-size: 10pt;
        }
      }
      small {
        float: right;
        position: relative;
      }
    }
  }
`

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  font-size: 0.875rem;
  color: #fff;
  background-color: #adb5bd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50% !important;
  img {
    width: 36px;
    height: 36px;
    border-radius: 50% !important;
  }
`
export const NoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  flex-direction: column;
  svg {
    font-size: 88px;
    color: #ccc;
  }
  h4 {
    font-size: 18px;
  }
`
