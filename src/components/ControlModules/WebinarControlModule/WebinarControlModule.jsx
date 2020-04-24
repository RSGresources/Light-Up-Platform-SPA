import {
    IonLabel,
    IonSegment,
    IonSegmentButton,
} from '@ionic/react';
import React, { useState } from 'react';

import status from '../../../utils/constants/webinarActiveStatuses';
import './WebinarcontrolModule.scss'

export const controlModuleStates = {
    inital: status.active,
    active: status.active,
    scheduled: status.scheduled,
}

export const WebinarControlModule = ({ controlModuleHandler }) => {

    const [active, setActive] = useState(true);
    const [globalValue, setGlobalValue] = useState();

    const onClickHandler = (buttonValue) => {

        if (globalValue !== buttonValue) {
            setActive(!active);
            setGlobalValue(buttonValue);
        }

        controlModuleHandler(buttonValue);

    }

    return (

        <div className="segment-controller-container">
            <button className={active ? "segment-button active" : "segment-button"} style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }} onClick={e => onClickHandler(controlModuleStates.active)}>
                <IonLabel>
                    {controlModuleStates.active.toUpperCase()}
                </IonLabel>
            </button>
            <button className={!active ? "segment-button active" : "segment-button"} style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} onClick={e => onClickHandler(controlModuleStates.scheduled)}>
                <IonLabel>
                    {controlModuleStates.scheduled.toUpperCase()}
                </IonLabel>
            </button>

        </div>

    )
}

// <IonSegment className="page-control-bar" value={controlModuleStates.inital} onIonChange={h} mode="md">

// <IonSegmentButton className="control-button1" value={controlModuleStates.active} >
//     <IonLabel className="page-control-button-text1">
//         {status.active.charAt(0).toUpperCase() + status.active.substring(1)}
//     </IonLabel>
// </IonSegmentButton>
// <IonSegmentButton className="control-button3" value={controlModuleStates.scheduled}>
//     <IonLabel className="page-control-button-text2">
//         {status.shceduled.charAt(0).toUpperCase() + status.shceduled.substring(1)}

//     </IonLabel>
// </IonSegmentButton>
// </IonSegment>

