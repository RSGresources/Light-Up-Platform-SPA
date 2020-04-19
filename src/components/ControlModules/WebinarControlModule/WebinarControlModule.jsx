import {
    IonLabel,
    IonSegment,
    IonSegmentButton,
} from '@ionic/react';
import React from 'react';

const WebinarControlModule = () => {

    return (
        <IonSegment className="page-control-bar" value="Live" mode="md">
            <IonSegmentButton className="control-button1" value="Live">
                <IonLabel className="page-control-button-text1">
                    Active
                </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton className="control-button3" value="scheduled">
                <IonLabel className="page-control-button-text2">
                    Scheduled
                </IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}

export default WebinarControlModule;