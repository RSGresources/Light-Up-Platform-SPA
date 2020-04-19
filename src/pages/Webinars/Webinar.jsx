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


    const webinarData = prepareWebinarComponents(data);
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
                        <IonCol size-sm="6" style={{ padding: "0px" }}>

                            {webinarData.col1}

                        </IonCol>

                        <IonCol size-sm="6" style={{ padding: "0px" }}>

                            {webinarData.col2}


                        </IonCol>

                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    )

};

const prepareWebinarComponents = (data) => {

    const image = "/images/cards/backgrounds/spring-276014_1920.jpg"

    const dataToRender = { col1: [], col2: [] };

    data.map((webinar, index) => {

        if (index % 2 === 0) {

            const component = <ImageCard
                marginTop="20px"
                marginBottom="0px"
                key={index}
                background={`linear-gradient(to bottom, rgba(0, 0, 0, 0.17) 56%, #36373885), url(${image})`}
                activeStatus={webinar.activeStatus}
                subtitle={`Start: ${moment.unix(webinar.scheduledTime).format('DD/MM/YY, h:mm:ss A')}`}
                title={webinar.title}
                headerContent={`Host: ${webinar.host}`}
                expandableContentTitle={webinar.title}
                expandableContent="Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
            />

            dataToRender.col1.push(component)

        } else {

            const component = <ImageCard
                key={index}
                marginTop="20px"
                background={`linear-gradient(to bottom, rgba(0, 0, 0, 0.17) 56%, #36373885), url(${image})`}
                activeStatus={webinar.activeStatus === 'live' ? webinar.activeStatus : undefined}
                subtitle={`Start: ${moment.unix(webinar.scheduledTime).format('DD/MM/YY, h:mm:ss A')}`}
                title={webinar.title}
                headerContent={`Host: ${webinar.host}`}
                expandableContentTitle={webinar.title}
                expandableContent="Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
            />

            dataToRender.col2.push(component)

        }
    })

    return dataToRender
}


export default withRouter(Webinar);



{/* <ImageCard
marginTop="30px"
background={`linear-gradient(to bottom, rgba(0, 0, 0, 0.17) 56%, #36373885), url(${image})`}
activeStatus={data.webinar1.activeStatus}
subtitle={`Start: ${moment.unix(data.webinar1.scheduledTime).format('DD/MM/YY, h:mm:ss A')}`}
title={data.webinar1.title}
headerContent={`Host: ${data.webinar1.host}`}
expandableContentTitle={data.webinar1.title}
expandableContent="Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
/>

<ImageCard
background={`linear-gradient(to bottom, rgba(0, 0, 0, 0.17) 56%, #36373885), url(${image})`}
activeStatus={data.webinar1.activeStatus}
subtitle={`Start: ${moment.unix(data.webinar1.scheduledTime).format('DD/MM/YY, h:mm:ss A')}`}
title={data.webinar1.title}
headerContent={`Host: ${data.webinar1.host}`}
expandableContentTitle={data.webinar1.title}
expandableContent="Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
marginBottom="0px"
/> */}