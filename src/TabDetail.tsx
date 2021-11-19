import { IonPage, IonToolbar, IonHeader, IonButtons, IonContent, IonTitle, IonBackButton } from "@ionic/react";


const TabDetail = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Tab Detail</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <h2>TAB TO DETAIL</h2>
            </IonContent>
        </IonPage>
    )
}

export default TabDetail;
