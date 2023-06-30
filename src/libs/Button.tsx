import styled, { css } from "styled-components"
import { color, radius, space } from "./constants"

type ButtonType = 'primary' | 'secondary' | 'error'

type Props = {
    title: string
    onClick: () => void
    type?: ButtonType
    width: number
}

export const Button: VFC<Props> = ({
    title,
    onClick,
    width = 80,
    type = 'primary'
}) => {
    return (
        <Wrapper onClick={onClick} width={width} className={type}>
            {title}
        </Wrapper>
    )
}

const Wrapper = styled.button<{width: number}>`
    ${props =>
        css`width: ${props.width}px;`
    }
    padding: ${space.m}
    border-radius: ${radius.m}
    border: solid 1px ${color.green}
    background: ${color.green}
    color: ${color.white}
    text-align: center
    cursol: pointer
    box-sizing: border-box
    &.secondary {
        border: solid 1px ${color.gray};
        background: ${color.white};
        color: ${color.black};
    }
    &.error {
        border: none;
        background: ${color.red};
        color: ${color.white};
    }
`