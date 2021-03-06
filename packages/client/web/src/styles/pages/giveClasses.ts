import styled from 'styled-components'

import { Container } from '../global'

export const PageTeacherForm = styled(Container)`
  width: 100vw;
  height: 100vh;
  .page-header .header-content {
    margin-bottom: 6.4rem;
    @media (min-width: 700px) {
      margin-bottom: 0;
    }
  }
  main {
    width: 100%;
    background: var(--color-box-base);
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;
    fieldset + fieldset {
      margin-top: 6.4rem;
    }
    fieldset {
      border: 0;
      padding: 0 2.4rem;
      label {
        color: var(--color-text-complement);
      }
      .input-block + .textarea-block {
        margin-top: 1.4rem;
      }
      legend {
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);
      }
      button {
        background: none;
        border: 0;
        color: var(--color-primary);
        font: 700 1.6rem Archivo;
        transition: color 0.2s;
        cursor: pointer;
      }
      @media (min-width: 700px) {
        padding: 0 6.4rem;
      }
    }
    footer {
      padding: 4rem 2.4rem;
      background: var(--color-box-footer);
      border-top: 1px solid var(--color-line-in-white);
      margin-top: 6.4rem;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--color-text-complement);
        img {
          margin-right: 2rem;
        }
      }
      button {
        outline: 0;
        width: 100%;
        height: 5.6rem;
        background: var(--color-secundary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.2s;
        margin-top: 3.2rem;
        &:hover {
          background: var(--color-secundary-dark);
        }
      }
      @media (min-width: 700px) {
        padding: 4rem 6.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          justify-content: space-between;
        }
        button {
          width: 20rem;
          margin-top: 0;
        }
      }
    }
  }
  @media (min-width: 700px) {
    max-width: 100vw;
  }
`
export const ScheduleItem = styled.div`
  & + & {
    margin-top: 4rem;
  }
  @media (min-width: 700px) {
    & + & {
      margin-top: 2.4rem;
    }
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }
`
