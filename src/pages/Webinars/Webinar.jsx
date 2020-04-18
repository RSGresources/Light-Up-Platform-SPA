import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,

} from '@ionic/react';
import React from 'react';
import { withRouter } from 'react-router';

import WebinarControlModule from '../../components/ControlModules/WebinarControlModule/WebinarControlModule';
import './Webinar.scss'

import SpecialistPageHeader from '../../components/SpecialistPageHeader/SpecialistPageHeader'
import Card from '../../components/Card/Card';

const Webinar = () => {

    const branchTitle = 'Specialist';
    const pageTitle = "Webinars";
    const pageDescription = "Stay Connected: Find all the latest and upcoming live chats accross Light Up network";

    return (
        <IonPage>
            <SpecialistPageHeader
                branchTitle={branchTitle}
                pageTitle={pageTitle}
                pageDescription={pageDescription}
                ControlModule={WebinarControlModule}
            />

            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>

                            <Card />

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    )

};

export default withRouter(Webinar);
