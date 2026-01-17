import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonFab, 
  IonFabButton, 
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg, 
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { photos, addNewToGallery } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ whiteSpace: 'normal', fontSize: '20px', textAlign: 'left', height: 'auto', padding: '10px 0', paddingLeft: '20px' }}>
            Photo Gallery
            <div style={{ fontSize: '14px', fontWeight: 'normal', marginTop: '4px' }}>
              Lab 05 - โดย เมธัส ผดุงพงษ์ รหัส 673380260-8
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" style={{ whiteSpace: 'normal', height: 'auto', textAlign: 'left', paddingLeft: '20px' }}>
              Photo Gallery
              <div style={{ fontSize: '16px', fontWeight: 'normal', marginTop: '5px', lineHeight: '1.2' }}>
                 Lab 05 - โดย เมธัส ผดุงพงษ์ รหัส 673380260-8
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => addNewToGallery()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;