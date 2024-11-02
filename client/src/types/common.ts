import React from 'react';
export type INav =  {
    name : string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    path : string
}
export type INavList = INav[]