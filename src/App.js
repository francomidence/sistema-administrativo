import * as React from 'react';
//Components
import {
  OrdenList,
  OrdenShow,
  OrdenCreate,
  OrdenEdit
} from './components/orden';
import {
  TipoArticuloList,
  TipoArticuloShow,
  TipoArticuloCreate,
  TipoArticuloEdit
} from './components/tipoArticulo';
import {
  ArticuloList,
  ArticuloShow,
  ArticuloCreate,
  ArticuloEdit
} from './components/articulo';
import {
  LocalList,
  LocalShow,
  LocalCreate,
  LocalEdit
} from './components/local';
import {
  MotoristaList,
  MotoristaShow,
  MotoristaCreate,
  MotoristaEdit
} from './components/motorista';

//firebase and admin imports
import { Admin, Resource } from 'react-admin';
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from 'react-admin-firebase';
//Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ListIcon from '@material-ui/icons/List';
import CustomLoginPage from './components/CustomLoginPage';

import { firebaseConfig as config } from './FIREBASE_CONFIG';

import spanishMessages from '@blackbox-vision/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const i18nProvider = polyglotI18nProvider(() => spanishMessages, 'es');

const options = {
  logging: true
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        i18nProvider={i18nProvider}
        loginPage={CustomLoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          name="ordenes"
          icon={ShoppingCartIcon}
          list={OrdenList}
          show={OrdenShow}
          create={OrdenCreate}
          edit={OrdenEdit}
        />
        <Resource
          name="articulos"
          icon={AssignmentIcon}
          list={ArticuloList}
          show={ArticuloShow}
          create={ArticuloCreate}
          edit={ArticuloEdit}
        />
        <Resource
          name="tipo_articulos"
          icon={ListIcon}
          list={TipoArticuloList}
          show={TipoArticuloShow}
          create={TipoArticuloCreate}
          edit={TipoArticuloEdit}
        />
        <Resource
          name="locales"
          icon={StorefrontIcon}
          list={LocalList}
          show={LocalShow}
          create={LocalCreate}
          edit={LocalEdit}
        />
        <Resource
          name="motoristas"
          icon={MotorcycleIcon}
          list={MotoristaList}
          show={MotoristaShow}
          create={MotoristaCreate}
          edit={MotoristaEdit}
        />
        <Resource name="estado_entrega" />
      </Admin>
    );
  }
}

export default App;
