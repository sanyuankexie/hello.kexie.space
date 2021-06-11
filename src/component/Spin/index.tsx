import React, { CSSProperties } from 'react';
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd';

interface IProps {
    size?: number
    style?: CSSProperties
}

export function Loading({ size, style }: IProps) {
    return (
        <Spin indicator={<LoadingOutlined style={{ fontSize: size, ...style }} spin />} />
    )
}

const MSpin = {
    Loading
}

export default MSpin;