import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import {
    IonCard,
    IonCardContent,
    IonLabel
} from '@ionic/react';
import Chevron from '../Chevron/Chevron';
import Divider from "../Divider/Divider";

import './Card.scss';
import data from '../../utils/mockData/mockWebinars';


const Card = () => {

    const [setActive, setActiveState] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {

        elementRef.current.style.maxHeight = setActive ? `${elementRef.current.scrollHeight}px` : '0px';
        elementRef.current.style.marginBottom = setActive ? `20px` : '0px';

    }, [elementRef, setActive])


    const toggleActive = () => {
        setActiveState(!setActive);
    }

    return (


        <IonCard class="card-container">
            <div className="card-img">
                <IonCard class="inner-card-status">
                    <IonLabel>
                        {data.webinar1.activeStatus}
                    </IonLabel>
                </IonCard>

            </div>
            <ion-card-header class="card-header">
                <ion-card-subtitle class="card-subtitle">{`Start: ${moment.unix(data.webinar1.scheduledTime).format('DD/MM/YY, h:mm:ss A')}`}</ion-card-subtitle>
                <ion-card-title class="card-title">{data.webinar1.title}</ion-card-title>

                <IonCardContent class="card-header-content">
                    {`Host: ${data.webinar1.host}`}
                    <button className="chevron-button" onClick={toggleActive}>
                        <Chevron className={setActive ? "chevron_icon rotate" : "chevron_icon"} width={13} fill={"#777"} />
                    </button>
                </IonCardContent>

            </ion-card-header>

            <div ref={elementRef} className="expandable-region">
                <Divider />
                <div className="expandable-region-content" style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                    <IonLabel style={{ marginBottom: "1rem", marginTop: "0.2rem", fontSize: "1rem", fontWeight: "400" }}>
                        {data.webinar1.title}
                    </IonLabel>
                    <IonLabel style={{ fontSize: "0.8rem", fontWeight: "300", textAlign: "center" }}>
                        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                   </IonLabel>
                </div>
            </div >
        </IonCard >
    )
}

export default Card;