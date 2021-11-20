import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonLabel, IonInput, IonLoading, IonToast } from "@ionic/react";
import { useContext, useState } from "react";
import AuthContext from "../my-context";
import { useHistory } from "react-router";

const LoginPage: React.FC = () => {
    const { login, authValue: { user, errors } } = useContext(AuthContext);
    const [showErrors, setShowErrors] = useState(false);
    const history = useHistory();
    const doLogin = async () => {
        setShowLoading(true);
        let result = await login({ user: email, password: password });
        setShowLoading(false);
        if (result) {
            history.replace("/tab1");
        }
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLoading
                    isOpen={showLoading}
                    message="Loggin in user"
                    onDidDismiss={() => user !== null ?? history.replace("/tab1")}
                />
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
                <IonButton onClick={() => doLogin()}>Login</IonButton>
                <IonButton onClick={() => history.push("/create-account")}>Create Account</IonButton>
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

export default LoginPage;


