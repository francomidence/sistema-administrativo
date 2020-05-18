// in src/posts.js
import * as React from 'react';
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  SelectInput,
  NumberField,
  NumberInput,
  DateInput
} from 'react-admin';

const ArticuloFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source="codigo" alwaysOn />
  </Filter>
);

export const ArticuloList = props => (
  <List {...props} filters={<ArticuloFilter />}>
    <Datagrid>
      <TextField label="Código" source="codigo" />
      <ReferenceField
        label="Tipo de Artículo"
        source="idTipoArticulo"
        reference="tipo_articulos"
      >
        <TextField source="nombre" />
      </ReferenceField>{' '}
      <TextField source="nombre" />
      <NumberField source="precio" />
      <TextField source="comentario" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const ArticuloShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField label="Código" source="codigo" />
      <ReferenceField
        label="Tipo de Artículo"
        source="idTipoArticulo"
        reference="tipo_articulos"
      >
        <TextField source="nombre" />
      </ReferenceField>{' '}
      <TextField source="nombre" />
      <NumberField source="precio" />
      <TextField source="comentario" />
      <TextField label="Fecha de Creación" source="createdate" />
      <TextField label="Fecha de Modificación" source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const ArticuloCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Código" source="codigo" />
      <ReferenceInput
        label="Tipo de Artículo"
        source="idTipoArticulo"
        reference="tipo_articulos"
      >
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <TextInput source="nombre" />
      <NumberInput source="precio" />
      <TextInput source="comentario" />
    </SimpleForm>
  </Create>
);

export const ArticuloEdit = props => (
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
      <ReferenceInput
        label="Tipo de Artículo"
        source="idTipoArticulo"
        reference="tipo_articulos"
      >
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <TextInput label="Código" source="codigo" />
      <TextInput source="nombre" />
      <NumberInput source="precio" />
      <TextInput source="comentario" />
    </SimpleForm>
  </Edit>
);
