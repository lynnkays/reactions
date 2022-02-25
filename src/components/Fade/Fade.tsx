import React from 'react'
import { FadeProps } from './Fade.types'

interface Props {
    label?: string;
}

export const Fade: React.FC<Props> = ({label}) => {
    return (
        <div>
            <button>{label}</button>
        </div>
    )
}