import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React, { useMemo } from "react"
import AppContext from "./my-context"


// Language: typescript
const Tab1 = () => {
    const { sharedValue, setSharedValue } = React.useContext(AppContext);
    const renderContents = useMemo(() => {
        console.log("Tab 1 render contents" + new Date());
        return (
            <>
                <div>{JSON.stringify(sharedValue)}</div>
                <IonButton
                    onClick={() => setSharedValue({
                        value: new Date().getTime(),
                        changedBy: "tab1"
                    })}
                >UPDATE VALUE</IonButton>
                <IonButton
                    onClick={() => setSharedValue({
                        value: null,
                        changedBy: "tab1"
                    })}
                >RESET VALUE</IonButton>
            </>
        );
    }, [sharedValue, setSharedValue]);

    console.log("Render tab1")
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar>
                    <IonTitle>TAB ONE</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>TAB ONE</h2>
                {renderContents}
            </IonContent>
        </IonPage>
    )
}

export default Tab1
