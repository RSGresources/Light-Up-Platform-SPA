import React from 'react';
import { withRouter, useLocation } from 'react-router';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonToolbar, IonImg, IonToggle, IonHeader } from '@ionic/react';
import { videocam, people, bookmarks, library, chatboxEllipses, barbell, key, calendar, informationCircle, card, person, help } from 'ionicons/icons';
import './Menu.scss';



const routes = {

    specialist: [
        { active: true, name: 'Podcasts', path: '/specialist/podcasts', icon: videocam },
        { active: true, name: 'Webinars', path: '/specialist/webinars', icon: people },
        { active: false, name: 'Courses', path: '/specialist/Courses', icon: bookmarks },
    ],

    community: [
        { active: false, name: 'Library', path: '/community/library', icon: library },
        { active: false, name: 'Forums', path: '/community/Forum', icon: chatboxEllipses },
        { active: false, name: 'Training', path: '/community/training', icon: barbell },
        { active: false, name: 'Weekly Re-ignition', path: '/community/weekly-reignition', icon: key },
        { active: false, name: 'Events Board', path: '/community/events-board', icon: calendar },
        { active: false, name: 'About Light Up', path: '/community/about-light-up', icon: informationCircle }
    ],

    account: [
        { active: false, name: 'My Profile', path: '/account/my-profile', icon: person },
        { active: false, name: 'Subscriptions', path: '/account/subscriptions', icon: card },
        { active: false, name: 'Support', path: '/account/support', icon: help }
    ]
};

const image = '/images/backgrounds/sideMenu/nebula3.jpg'

const headerBackground = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.17) 56%, #36373885), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "16.2rem",
    padding: "20px"
}


const Menu = () => {

    const location = useLocation();

    function renderlistItems(pages) {
        return pages.map(p => (
            <IonMenuToggle key={p.name} auto-hide="false" mode="md">
                <IonItem detail={false} routerLink={p.path} routerDirection="none" className={p.active ? location.pathname.startsWith(p.path) ? 'active-selected' : 'active' : 'inactive'}>
                    <IonIcon slot="start" icon={p.icon} className={p.active ? location.pathname.startsWith(p.path) ? 'active-selected' : 'active' : 'inactive'} />
                    <IonLabel>{p.name}</IonLabel>
                </IonItem>
            </IonMenuToggle>
        ));
    }

    return (
        <IonMenu type="overlay" contentId="main" mode="md">
            <IonHeader className="header" mode="md">
                <IonToolbar mode="md">
                    <div className="container-header-content" style={headerBackground}>
                        <img className="profile-img" src='/images/profile_pic_placeholder.jpg' alt="profile pic" />
                        <IonLabel className="profile-text">Username: Bradamorg007</IonLabel>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent forceOverscroll={false} mode="md">
                <IonList lines="none">

                    <IonListHeader>Specialist</IonListHeader>
                    {renderlistItems(routes.specialist)}
                </IonList>
                <IonList lines="none">

                    <IonListHeader>Community</IonListHeader>
                    {renderlistItems(routes.community)}
                </IonList>
                <IonList lines="none">

                    <IonListHeader>Account</IonListHeader>
                    {renderlistItems(routes.account)}

                </IonList>

            </IonContent>
        </IonMenu>
    );
};

export default withRouter(Menu)