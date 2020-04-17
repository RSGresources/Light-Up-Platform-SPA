import {
    IonPage,
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
        </IonPage>
    )

};

export default withRouter(Webinar);
