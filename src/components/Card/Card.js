import React from 'react';
import moment from 'moment';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
} from '@ionic/react';

import './Card.scss';
import data from '../../utils/mockData/mockWebinars';


const Card = () => {

    return (
        <IonCard class="card-container">
            <div class="card-img">
                <IonCard class="inner-card-status">
                    {data.webinar1.activeStatus}
                </IonCard>

            </div>
            <ion-card-header class="card-header">
                <ion-card-subtitle class="card-subtitle">{`Start: ${moment.unix(data.webinar1.scheduledTime).format('DD/MM/YY, h:mm:ss A')}`}</ion-card-subtitle>
                <ion-card-title class="card-title">{data.webinar1.title}</ion-card-title>
                <IonCardContent class="card-header-content">
                    {`Host: ${data.webinar1.host}`}
                </IonCardContent>
            </ion-card-header>
            {/* <ion-card-content>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
        </ion-card-content> */}
        </IonCard>
    )
}

export default Card;