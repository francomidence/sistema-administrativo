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

export const MotoristaList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="nombre" />
      <TextField source="telefono" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const MotoristaShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="nombre" />
      <TextField source="telefono" />
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

export const MotoristaCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="telefono" />
    </SimpleForm>
  </Create>
);

export const MotoristaEdit = props => (
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
      <TextInput source="nombre" />
      <TextInput source="telefono" />
    </SimpleForm>
  </Edit>
);
