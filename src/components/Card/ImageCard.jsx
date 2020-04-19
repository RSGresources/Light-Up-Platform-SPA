import React, { useState, useRef, useEffect } from 'react';
import {
    IonCard,
    IonCardContent,
    IonLabel
} from '@ionic/react';
import Chevron from '../Chevron/Chevron';
import Divider from '../Divider/Divider';

import './ImageCard.scss';


const ImageCard = ({ background, redirectUrl, activeStatus, subtitle, title, headerContent, expandableContentTitle, expandableContent, marginBottom, marginTop }) => {


    const [setActive, setActiveState] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {

        elementRef.current.style.maxHeight = setActive ? `${elementRef.current.scrollHeight}px` : '0px';
        elementRef.current.style.marginBottom = setActive ? `20px` : '0px';

    }, [elementRef, setActive])


    const toggleActive = () => {
        setActiveState(!setActive);
    }

    const backgroundImgStyles = {
        background: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "10rem",
        padding: "20px"

    }

    const redirectToWebinarDomain = () => {
        if (activeStatus) {
            window.open(redirectUrl, '_blank');
        }
    }

    console.log(activeStatus)
    return (

        <IonCard class="card-container" style={{ marginBottom: marginBottom, marginTop: marginTop }} button={true}>
            {background &&
                <div className="card-img" style={backgroundImgStyles} onClick={redirectToWebinarDomain}>
                    {activeStatus &&
                        <IonCard class="inner-card-status">
                            <IonLabel>
                                {activeStatus}
                            </IonLabel>
                        </IonCard>
                    }
                </div>
            }

            <ion-card-header class="card-header">
                <div className="clickable-region" onClick={redirectToWebinarDomain}>
                    <ion-card-subtitle class="card-subtitle">
                        {subtitle}
                    </ion-card-subtitle>
                    <ion-card-title class="card-title">
                        {title}
                    </ion-card-title>
                </div>

                <IonCardContent class="card-header-content">
                    {headerContent}
                    <button className="chevron-button" onClick={toggleActive}>
                        <Chevron className={setActive ? "chevron_icon rotate" : "chevron_icon"} width={13} fill={"#777"} />
                    </button>
                </IonCardContent>
            </ion-card-header>

            <div ref={elementRef} className="expandable-region">
                <Divider />
                <div className="expandable-region-content" style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                    <IonLabel style={{ marginBottom: "1rem", marginTop: "0.2rem", fontSize: "1rem", fontWeight: "400" }}>
                        {expandableContentTitle}
                    </IonLabel>
                    <IonLabel style={{ fontSize: "0.8rem", fontWeight: "300", textAlign: "center" }}>
                        {expandableContent}
                    </IonLabel>
                </div>
            </div >
        </IonCard >

    )
}

export default ImageCard;
