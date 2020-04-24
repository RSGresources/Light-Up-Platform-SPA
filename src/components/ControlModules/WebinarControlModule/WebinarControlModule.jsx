import {
    IonLabel,
    IonSegment,
    IonSegmentButton,
} from '@ionic/react';
import React from 'react';

import status from '../../../utils/constants/webinarActiveStatuses';
import './WebinarcontrolModule.scss'

export const controlModuleStates = {
    inital: status.active,
    active: status.active,
    scheduled: status.shceduled,
}

export const WebinarControlModule = ({ controlModuleHandler }) => {

    return (
        <IonSegment className="page-control-bar" value={controlModuleStates.inital} onIonChange={controlModuleHandler} mode="md">

            <IonSegmentButton className="control-button1" value={controlModuleStates.active} >
                <IonLabel className="page-control-button-text1">
                    {status.active.charAt(0).toUpperCase() + status.active.substring(1)}
                </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton className="control-button3" value={controlModuleStates.scheduled}>
                <IonLabel className="page-control-button-text2">
                    {status.shceduled.charAt(0).toUpperCase() + status.shceduled.substring(1)}

                </IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}

