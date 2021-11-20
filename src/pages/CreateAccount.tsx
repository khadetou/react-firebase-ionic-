import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonLabel, IonInput, IonLoading, IonToast } from "@ionic/react";
import { useContext, useState } from "react";
import AuthContext from "../my-context";
import { useHistory } from "react-router";

const CreateAccount: React.FC = () => {
    const { login, authValue: { user, errors } } = useContext(AuthContext);
    const history = useHistory();
    const doCreateAccount = async () => {
        setShowLoading(true);
        alert(displayName + " " + email + " " + password);
        setShowLoading(false);
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Create Account Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLoading
                    isOpen={showLoading}
                    message="Create a user"
                    onDidDismiss={() => user !== null ?? history.replace("/tab1")}
                />
                <IonItem>
                    <IonLabel position="floating">
                        Display Name
                    </IonLabel>
                    <IonInput
                        type="text"
                        name="displayName"
                        onIonChange={(e: any) => setDisplayName(e.detail.value as any)}
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">
                        Email Address
                    </IonLabel>
                    <IonInput
                        type="email"
                        name="email"
                        onIonChange={(e: any) => setEmail(e.detail.value as any)}
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">
                        Password
                    </IonLabel>
                    <IonInput
                        type="password"
                        name="password"
                        onIonChange={(e: any) => setPassword(e.detail.value as any)}
                    />
                </IonItem>
                <IonButton onClick={() => doCreateAccount()}>CreateAccount</IonButton>
                <IonButton onClick={() => history.goBack()} color="danger">Cancel</IonButton>
            </IonContent>
            <IonToast
                isOpen={showErrors}
                message={errors?.message}
                onDidDismiss={() => setShowErrors(false)}
                duration={2000}
                color="danger"
            />
        </IonPage>
    )
}

export default CreateAccount;


