import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React, { useMemo } from "react"
import AuthContext from "./my-context"
import { useHistory } from "react-router"

// Language: typescript
const Tab1 = () => {
    const history = useHistory();
    const { logout, authValue } = React.useContext(AuthContext);
    // const renderContents = useMemo(() => {
    //     console.log("Tab 1 render contents" + new Date());
    //     return (
    //         <>

    //         </>
    //     );
    // }, []);

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
                <div>{JSON.stringify(authValue.user)}</div>

                <IonButton
                    onClick={() => { logout(); history.replace("/login"); }}
                >LOGOUT</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Tab1
