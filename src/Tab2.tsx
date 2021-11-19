import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React, { useCallback, useMemo } from "react";
import { useHistory } from "react-router";
import AppContext from "./my-context";

const Tab2 = () => {
    const history = useHistory();
    const { sharedValue, setSharedValue } = React.useContext(AppContext);


    const renderContents = useMemo(() => {
        console.log("Tab 2 render contents" + new Date());
        return (
            <>
                <div>{JSON.stringify(sharedValue)}</div>
                <IonButton
                    onClick={() => setSharedValue({
                        value: new Date().getTime(),
                        changedBy: "tab2"
                    })}
                >UPDATE VALUE</IonButton>
                <IonButton
                    onClick={() => setSharedValue({
                        value: null,
                        changedBy: "tab2"
                    })}
                >RESET VALUE</IonButton>
                <IonButton onClick={() => history.push("tab2/tab-detail")}>Detail Page</IonButton>
            </>
        );
    }, [sharedValue, setSharedValue]);

    console.log("Render tab2");
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar>
                    <IonTitle>TAB TWO</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>TAB TWO</h2>
                {renderContents}
            </IonContent>
        </IonPage>
    )
}

export default Tab2;



