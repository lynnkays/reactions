import React from 'react'

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