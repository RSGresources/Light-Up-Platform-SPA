import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonSearchbar,
    IonLabel,
    IonPage,

} from '@ionic/react';
import React, { useState } from 'react';

import './SpecialistPageHeader.scss'

const SpecialistPageHeader = ({ branchTitle, pageTitle, pageDescription, ControlModule, controlModuleHandler, searchBarHandler }) => {

    const [searchText, setSearchText] = useState('');


    return (
        <IonHeader className="header-page" >
            <IonToolbar className="header-toolbar1" mode="md" >
                <div className="container">
                    <div className="container-toolbar-main">
                        <div className="menu-title-contents">
                            <IonButtons slot="start">
                                <IonMenuButton></IonMenuButton>
                            </IonButtons>
                            <IonLabel className="menu-title">
                                {branchTitle}
                            </IonLabel>
                        </div>

                        <div className="search-bar-container">
                            <input
                                className="search-bar"
                                placeholder="Search..."
                                value={searchText}
                                onChange={e => { setSearchText(e.target.value) }}
                                onKeyDown={(e) => e.type === 'keydown' && (e.key === 'Enter' || e.key === 'done') && searchBarHandler(searchText)}
                            />

                            <IonLabel class="search-bar-clear-label">
                                clear
                        </IonLabel>
                        </div>
                    </div>
                    <div className="container-toolbar-sub">
                        <IonTitle className="page-title">
                            {pageTitle}
                        </IonTitle>
                        <IonLabel className="page-discription">
                            {pageDescription}
                        </IonLabel>

                        <ControlModule controlModuleHandler={controlModuleHandler} />

                    </div>
                </div>
            </IonToolbar>
        </IonHeader>
    )

};

export default SpecialistPageHeader;

{/* <IonSearchbar

                            value={searchText}
                            autocomplete="on"

                            spellCheck={true}
                            placeholder="Search..."
                            inputMode="search"
                            mode="ios"
                            searchIcon={undefined}
                            type="text"
                        ></IonSearchbar> */}

// onKeyDown={
//     (e) => e.type === 'keydown' &&
//         (e.key === 'Enter' || e.key === 'done') &&
//         handleSearchBarClick()
// }

// onIonChange={e => {
//     console.log(searchText)
//     setSearchText(e.target.value)
// }}


// Stay Connected: Find all the latest and upcoming live chats accross Light Up network

// <IonSegment className="page-control-bar" value="Live" mode="md">
// <IonSegmentButton className="control-button1" value="Live">
//     <IonLabel className="page-control-button-text1">
//         Live
//     </IonLabel>
// </IonSegmentButton>
// <IonSegmentButton className="control-button3" value="scheduled">
//     <IonLabel className="page-control-button-text2">
//         Scheduled
//     </IonLabel>
// </IonSegmentButton>
// </IonSegment>