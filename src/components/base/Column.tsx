import React, { FunctionComponent } from "react"
import { Component as Props } from '../../lib/interfaces';

const Column : FunctionComponent<Props> = ({className, children, onClick}) => {
    return ( 
        <div className={`flex flex-col ${className}`} {...{onClick}}>
            {children}
        </div>
     );
}
 
export default Column;