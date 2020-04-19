import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel

} from '@ionic/react';
import React from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';
import WebinarControlModule from '../../components/ControlModules/WebinarControlModule/WebinarControlModule';
import './Webinar.scss'

import SpecialistPageHeader from '../../components/SpecialistPageHeader/SpecialistPageHeader'
import ImageCard from '../../components/Card/ImageCard';
import data from '../../utils/mockData/mockWebinars';

const Webinar = () => {

    const branchTitle = 'Specialist';
    const pageTitle = "Webinars";
    const pageDescription = "Stay Connected: Find all the latest and upcoming live chats accross Light Up network";

    const image = "/images/cards/backgrounds/horse-4810484_1920.jpg"

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

                            <ImageCard
                                background={`linear-gradient(to bottom, rgba(0, 0, 0, 0.17) 56%, #36373885), url(${image})`}
                                activeStatus={data.webinar1.activeStatus}
                                subtitle={`Start: ${moment.unix(data.webinar1.scheduledTime).format('DD/MM/YY, h:mm:ss A')}`}
                                title={data.webinar1.title}
                                headerContent={`Host: ${data.webinar1.host}`}
                                expandableContentTitle={data.webinar1.title}
                                expandableContent="Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
                            />

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    )

};

export default withRouter(Webinar);
