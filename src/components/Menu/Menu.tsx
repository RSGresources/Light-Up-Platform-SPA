import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonToggle, IonGrid, IonRow, IonCol } from '@ionic/react';
import { videocam, people, bookmarks, library, chatboxEllipses, barbell, key, calendar, informationCircle, card, person, help } from 'ionicons/icons';


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

interface Pages {
    active: boolean,
    name: string,
    path: string,
    icon: string
}
interface MenuProps extends RouteComponentProps { };

const Menu: React.FC<MenuProps> = () => {


    const renderMenuItems = (pages: Pages[]) => {

        return pages.map(pageItem => (
            <IonMenuToggle key={pageItem.name} autoHide={false} >
                <IonItem detail={false} routerLink={pageItem.active ? pageItem.path : undefined} routerDirection="none" className={pageItem.active ? 'selected' : undefined} >
                    <IonIcon slot="start" icon={pageItem.icon} />
                    <IonItem slot="start">
                        <IonLabel>{pageItem.name}</IonLabel>
                    </IonItem>

                </IonItem>
            </IonMenuToggle>
        ))
    };

    return (

        <IonMenu type="overlay" contentId="main">
            <IonContent forceOverscroll={false}>
                <IonList lines="none">
                    <IonListHeader>Specialist</IonListHeader>
                    {renderMenuItems(routes.specialist)}
                </IonList>
                <IonList lines="none">
                    <IonListHeader>Community</IonListHeader>
                    {renderMenuItems(routes.community)}
                </IonList>
                <IonList lines="none">
                    <IonListHeader>Account</IonListHeader>
                    {renderMenuItems(routes.account)}
                </IonList>
            </IonContent>
        </IonMenu>

    )
};

export default withRouter(Menu)