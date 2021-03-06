import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonLabel, IonRoute, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import TabDetail from './TabDetail';
import AuthContext from './my-context';
import LoginPage from './pages/LoginPage';
import { useContext } from 'react';
import CreateAccount from './pages/CreateAccount';


const App: React.FC = () => {
  const { authValue } = useContext(AuthContext);
  return (
    <IonApp>
      {!authValue.isAuthenticated ? (
        <IonReactRouter>
          <Route path="/login" component={LoginPage} exact={true} />
          <Route path="/create-account" component={CreateAccount} exact={true} />
          <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
          <Route path="*" render={() => <Redirect to="/login" />} exact={true} />
        </IonReactRouter>
      )
        :
        (<IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/tab1" component={Tab1} exact={true} />
              <Route path="/tab2" component={Tab2} exact={true} />
              <Route path="/tab2/tab-detail" component={TabDetail} />
              <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />

            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonLabel>{"Tab One"}</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonLabel>{"Tab Two"}</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
        )
      }
    </IonApp>
  )
};

export default App;
