import { HTMLAttributes, ReactNode } from 'react';

export interface ItemProps extends HTMLAttributes<HTMLHeadingElement>{
    children: ReactNode,
    filter: 'star' | 'rub'
}