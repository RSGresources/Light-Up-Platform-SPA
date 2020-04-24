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
import Fuse from 'fuse.js';
import { WebinarControlModule, controlModuleStates } from '../../components/ControlModules/WebinarControlModule/WebinarControlModule';
import './Webinar.scss'
import status from '../../utils/constants/webinarActiveStatuses';

import SpecialistPageHeader from '../../components/SpecialistPageHeader/SpecialistPageHeader'
import ImageCard from '../../components/Card/ImageCard';
import mockData from '../../utils/mockData/mockWebinars';


const Webinar = () => {
    const [data, setData] = useState(mockData);

    const [activeDisplay, setActiveDisplay] = useState(data);
    const [fallBackDisplay, setFallBackDisplay] = useState();

    const [searchString, setSearchString] = useState();

    const [filterByControlModule, setFilterByControlModule] = useState(true);
    const [controlModuleValue, setControlModuleValue] = useState(controlModuleStates.inital);


    const branchTitle = 'Specialist';
    const pageTitle = "Webinars";
    const pageDescription = "Stay Connected: Find all the latest and upcoming live chats accross Light Up network";

    const searchBarHandler = (text) => {
        setSearchString(text);
    }

    const controlModuleHandler = (state) => {
        setControlModuleValue(state);
        setFilterByControlModule(true);

    };

    const exeuteControlModuleSearch = (state) => {

        const h = controlModuleStates.scheduled;
        const searchResults = data.filter(i => {

            if (controlModuleValue === controlModuleStates.active) {

                if (i.activeStatus === status.active || i.activeStatus === status.upComing) {
                    return i;
                }

            } else if (controlModuleValue === controlModuleStates.scheduled) {

                if (i.activeStatus === status.scheduled) {
                    return i;
                }
            }
        });

        setActiveDisplay(searchResults);
        setFilterByControlModule(false);
    }

    const exeuteSearch = () => {

        const options = {
            keys: ['host', 'title', 'description', 'scheduledTime', 'expiredTime', 'activeStatus'],
            isCaseSensitive: false,
            includeScore: false,
            shouldSort: true,
            findAllMatches: true
        }

        const searcher = new Fuse(data, options);
        const searchResults = searcher.search(searchString);


        // console.log('search results', searchResults)
        searchResults.length === 0 ? setFallBackDisplay(<h4>No content found</h4>) : setActiveDisplay(searchResults)
        setSearchString(undefined)
    }

    if (searchString) {

        setFallBackDisplay(undefined)
        exeuteSearch();

    } else if (filterByControlModule) {

        setFallBackDisplay(undefined);
        exeuteControlModuleSearch();
    }

    console.log('re-render')


    return (
        <IonPage>
            <SpecialistPageHeader
                branchTitle={branchTitle}
                pageTitle={pageTitle}
                pageDescription={pageDescription}
                searchBarHandler={searchBarHandler}
                ControlModule={WebinarControlModule}
                controlModuleHandler={controlModuleHandler}
            />


            <IonContent class="content-master">
                {fallBackDisplay ? fallBackDisplay : prepareGridComponents(activeDisplay)}
            </IonContent>
        </IonPage>
    )

};


const prepareGridComponents = (data) => {

    const image = "/images/cards/backgrounds/spring-276014_1920.jpg"

    return (
        <IonGrid class="content-grid-overlay" style={{ paddingTop: '20px' }}>
            <IonRow>


                {data.map((i, index) => {
                    return (
                        <IonCol key={index} size-sm="6" style={{ padding: "0px" }}>
                            <ImageCard
                                key={index}
                                marginTop="0px"
                                marginBottom="20px"
                                redirectUrl={i.redirectUrl}
                                background={`linear-gradient(to bottom, rgba(0, 0, 0, 0.17) 56%, #36373885), url(${image})`}
                                activeStatus={i.activeStatus === status.active ? i.activeStatus : undefined}
                                subtitle={`Start: ${moment.unix(i.scheduledTime).format('DD/MM/YY, h:mm:ss A')}`}
                                title={i.title}
                                headerContent={i.host}
                                expandableContentTitle={i.title}
                                expandableContent={i.description}
                            />
                        </IonCol>
                    )
                })}
            </IonRow>

        </IonGrid>
    )

}


export default withRouter(Webinar);



