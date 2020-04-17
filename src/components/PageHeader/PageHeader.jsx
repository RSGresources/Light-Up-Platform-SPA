import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonSearchbar,
    IonLabel,

} from '@ionic/react';
import React, { useState } from 'react';

import './PageHeader.scss'

const PageHeader = ({ branchTitle, pageTitle, pageDescription, ControlModule }) => {

    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    }

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
                        <IonSearchbar
                            onChange={handleSearchTextChange}
                            value={searchText}
                            autocomplete="on"
                            spellCheck={true}
                            placeholder="Search..."
                            inputMode="search"
                            mode="ios"
                            searchIcon={undefined}
                            type="text"
                        ></IonSearchbar>
                    </div>
                    <div className="container-toolbar-sub">
                        <IonTitle className="page-title">
                            {pageTitle}
                        </IonTitle>
                        <IonLabel className="page-discription">
                            {pageDescription}
                        </IonLabel>

                        <ControlModule />

                    </div>
                </div>
            </IonToolbar>
        </IonHeader>
    )

};

export default PageHeader;


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