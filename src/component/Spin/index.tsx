import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd';

interface IProps {
    size?: number
}

export function Loading({ size }: IProps) {
    return (
        <Spin indicator={<LoadingOutlined style={{ fontSize: size }} spin />} />
    )
}

const MSpin = {
    Loading
}

export default MSpin;