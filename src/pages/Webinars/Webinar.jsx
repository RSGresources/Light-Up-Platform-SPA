import {
    IonPage,
    IonContent
} from '@ionic/react';
import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader'
import { withRouter } from 'react-router';

import WebinarControlModule from '../../components/ControlModules/WebinarControlModule/WebinarControlModule';
import './Webinar.scss'

const Webinar = () => {

    const branchTitle = 'Specialist';
    const pageTitle = "Webinars";
    const pageDescription = "Stay Connected: Find all the latest and upcoming live chats accross Light Up network";

    return (
        <IonPage>
            <PageHeader
                branchTitle={branchTitle}
                pageTitle={pageTitle}
                pageDescription={pageDescription}
                ControlModule={WebinarControlModule}
            />

            <IonContent>
                Content Goes Here!
            </IonContent>
        </IonPage>
    )

};

export default withRouter(Webinar);
