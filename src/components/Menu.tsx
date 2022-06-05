import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { homeOutline,homeSharp,information,informationSharp,peopleCircleOutline,peopleCircleSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/dashbord',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Teachers',
    url: '/page/teachers',
    iosIcon: peopleCircleOutline,
    mdIcon: peopleCircleSharp
  },
  {
    title: 'About',
    url: '/page/about',
    iosIcon: information,
    mdIcon: informationSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" className='menustyle'>
      <IonContent >
        <IonList id="inbox-list" >
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle className=''  key={index} autoHide={false}>
                <IonItem id='menubg' className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
