// in src/Comments.js
import * as React from 'react';
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateInput,
  DateField,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton
} from 'react-admin';

export const TipoArticuloList = props => (
  <List {...props}>
    <Datagrid>
      <TextField label="Código" source="codigo" />
      <TextField source="nombre" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const TipoArticuloShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField label="Código" source="codigo" />
      <TextField source="nombre" />
      <DateField
        label="Fecha de Creación"
        source="createdate"
        options={{ disabled: true }}
      />
      <DateField
        label="Fecha de Modificación"
        source="lastupdate"
        options={{ disabled: true }}
      />
    </SimpleShowLayout>
  </Show>
);

export const TipoArticuloCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Código" source="codigo" />
      <TextInput source="nombre" />
    </SimpleForm>
  </Create>
);

export const TipoArticuloEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <DateInput
        label="Fecha de Creación"
        source="createdate"
        options={{ disabled: true }}
      />
      <DateInput
        label="Fecha de Modificación"
        source="lastupdate"
        options={{ disabled: true }}
      />
      <TextInput label="Código" source="codigo" />
      <TextInput source="nombre" />
    </SimpleForm>
  </Edit>
);
