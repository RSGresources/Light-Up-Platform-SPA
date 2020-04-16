import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import React from 'react';
import { withRouter } from 'react-router';


const Webinar: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>
                        Webinar
                   </IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    )

};

export default withRouter(Webinar);