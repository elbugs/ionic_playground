import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItemDivider, IonListHeader, IonLabel, IonModal, IonDatetime, setupIonicReact } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

setupIonicReact({
  mode: 'ios',
});

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />

        <IonList>
          <IonItemDivider className="arrivals-Divider" sticky>
              <IonLabel>
                  <IonLabel>
                      <IonListHeader id="_arrivalsTodaySelector" className="headerDate-Arrivals">
                      Today. Click to choose date.
                      </IonListHeader>
                      <IonLabel>
                      <h2 className="arrivals-Date"></h2>
                      <IonModal className="modalDateTime" trigger="_arrivalsTodaySelector">
                          <IonContent force-overscroll="false">
                              <IonDatetime></IonDatetime>
                          </IonContent>
                      </IonModal>
                      </IonLabel>
                  </IonLabel>
              </IonLabel>
          </IonItemDivider>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;
