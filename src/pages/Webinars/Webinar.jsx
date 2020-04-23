import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,

} from '@ionic/react';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';
import FuzzySearch from 'fuzzy-search'
import WebinarControlModule from '../../components/ControlModules/WebinarControlModule/WebinarControlModule';
import './Webinar.scss'

import SpecialistPageHeader from '../../components/SpecialistPageHeader/SpecialistPageHeader'
import ImageCard from '../../components/Card/ImageCard';
import mockData from '../../utils/mockData/mockWebinars';


const Webinar = () => {
    const [data, setData] = useState(mockData);
    const [activeDisplay, setActiveDisplay] = useState(data);
    const [fallBackDisplay, setFallBackDisplay] = useState();
    const [searchString, setSearchString] = useState();

    const branchTitle = 'Specialist';
    const pageTitle = "Webinars";
    const pageDescription = "Stay Connected: Find all the latest and upcoming live chats accross Light Up network";

    const searchBarHandler = (text) => {
        setSearchString(text);
        console.log('hit')
    }


    const exeuteSearch = () => {

        const searcher = new FuzzySearch(data, ['host', 'title', 'description', 'scheduledTime', 'expiredTime', 'activeStatus'], {
            caseSensitive: false, sort: true
        });
        const result = searcher.search(searchString);
        console.log(result)
        result.length === 0 ? setFallBackDisplay(<h4>No content found</h4>) : setActiveDisplay(result)
        setSearchString(undefined)
    }

    if (searchString) {
        setFallBackDisplay(undefined)
        exeuteSearch();
    }



    return (
        <IonPage>
            <SpecialistPageHeader
                branchTitle={branchTitle}
                pageTitle={pageTitle}
                pageDescription={pageDescription}
                searchBarHandler={searchBarHandler}
                ControlModule={WebinarControlModule}
            />


            <IonContent class="content-master">

                {fallBackDisplay ? fallBackDisplay : prepareGridComponents(activeDisplay)}
            </IonContent>
        </IonPage>
    )

};


const prepareGridComponents = (data) => {

    const webinarData = prepareWebinarComponents(data);

    return (
        <IonGrid class="content-grid-overlay">
            <IonRow>
                <IonCol size-sm="6" style={{ padding: "0px" }}>

                    {webinarData.col1}

                </IonCol>

                <IonCol size-sm="6" style={{ padding: "0px" }}>

                    {webinarData.col2}

                </IonCol>

            </IonRow>
        </IonGrid>
    )

}


const prepareWebinarComponents = (data) => {

    const image = "/images/cards/backgrounds/spring-276014_1920.jpg"

    const dataToRender = { col1: [], col2: [] };

    data.map((webinar, index) => {

        let props = {
            marginTop: "20px",
            redirectUrl: webinar.url,
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.17) 56%, #36373885), url(${image})`,
            activeStatus: webinar.activeStatus === 'Live' ? webinar.activeStatus : undefined,
            subtitle: `Start: ${moment.unix(webinar.scheduledTime).format('DD/MM/YY, h:mm:ss A')}`,
            title: webinar.title,
            headerContent: webinar.host,
            expandableContentTitle: webinar.title,
            expandableContent: webinar.description
        }


        if (index % 2 === 0) {

            props.marginBottom = "0px"
            props.marginTop = "20px"

            const component = <ImageCard
                key={index}
                marginTop={props.marginTop}
                marginBottom={props.marginBottom}
                redirectUrl={props.redirectUrl}
                background={props.background}
                activeStatus={props.activeStatus}
                subtitle={props.subtitle}
                title={props.title}
                headerContent={props.headerContent}
                expandableContentTitle={props.expandableContentTitle}
                expandableContent={props.expandableContent}
            />

            dataToRender.col1.push(component)


        } else {

            const component = <ImageCard
                key={index}
                marginTop={props.marginTop}
                redirectUrl={props.redirectUrl}
                background={props.background}
                activeStatus={props.activeStatus}
                subtitle={props.subtitle}
                title={props.title}
                headerContent={props.headerContent}
                expandableContentTitle={props.expandableContentTitle}
                expandableContent={props.expandableContent}
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