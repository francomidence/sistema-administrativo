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
  DateInput,
  DateField,
  ArrayField,
  ChipField,
  ArrayInput,
  SimpleFormIterator,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceArrayField,
  SingleFieldList
} from 'react-admin';

const OrdenFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source="codigo" alwaysOn />
  </Filter>
);

const TotalField = ({ source, record = {} }) => {
  let total = 0;

  if (record) {
    if (record.articulos_orden) {
      record.articulos_orden.forEach(articulo => {
        let subTotal = articulo.precio * articulo.cantidad;
        total += subTotal;
      });
    }
    return <span>{total}</span>;
  }
};

export const OrdenList = props => (
  <List {...props} filters={<OrdenFilter />}>
    <Datagrid>
      <TextField label="Código" source="codigo" />
      <TextField source="cliente" />
      <TextField source="telefono" />
      <TextField source="direccion" />
      <DateField source="fechaVenta" label="Fecha de Venta" />
      <DateField source="fechaEntrega" label="Fecha de Entrega" />
      {/* Articulos */}
      <ArrayField source="articulos_orden">
        <Datagrid>
          <ChipField source="cantidad" />
          <ReferenceArrayField
            label="Producto"
            source="idArticulo"
            reference="articulos"
          >
            <SingleFieldList>
              <ChipField source="nombre" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ChipField source="precio" />
          <ChipField source="comentarios" />
        </Datagrid>
      </ArrayField>
      {/* Articulos */}
      <TotalField></TotalField>
      <ReferenceField label="Local" source="idLocal" reference="locales">
        <TextField source="nombre" />
      </ReferenceField>{' '}
      <ReferenceField
        label="Motorista"
        source="idMotorista"
        reference="motoristas"
      >
        <TextField source="nombre" />
      </ReferenceField>{' '}
      <ReferenceField
        label="Estado de Entrega"
        source="idEstadoEntrega"
        reference="estado_entrega"
      >
        <TextField source="estado" />
      </ReferenceField>{' '}
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const OrdenShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField label="Código" source="codigo" />
      <ReferenceField label="Local" source="idLocal" reference="locales">
        <TextField source="nombre" />
      </ReferenceField>{' '}
      <ReferenceField
        label="Motorista"
        source="idMotorista"
        reference="motoristas"
      >
        <TextField source="nombre" />
      </ReferenceField>{' '}
      <ReferenceField
        label="Estado de Entrega"
        source="idEstadoEntrega"
        reference="estado_entrega"
      >
        <TextField source="estado" />
      </ReferenceField>{' '}
      <TextField source="cliente" />
      <TextField source="telefono" />
      <TextField source="direccion" />
      <ArrayField source="articulos_orden">
        <Datagrid>
          <ChipField source="cantidad" />
          <ReferenceArrayField
            label="Producto"
            source="idArticulo"
            reference="articulos"
          >
            <SingleFieldList>
              <ChipField source="nombre" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ChipField source="precio" />
          <ChipField source="comentarios" />
        </Datagrid>
      </ArrayField>
      <TotalField></TotalField>
      <DateField label="Fecha de Creación" source="createdate" />
      <DateField label="Fecha de Modificación" source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const OrdenCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Código" source="codigo" />
      <TextInput source="cliente" />
      <TextInput source="telefono" />
      <TextInput source="direccion" />
      <DateInput source="fechaVenta" label="Fecha de Venta" />
      <DateInput source="fechaEntrega" label="Fecha de Entrega" />
      {/* Articulos */}
      <ArrayInput source="articulos_orden" label="Artículos">
        <SimpleFormIterator>
          <NumberInput source="cantidad" label="Cantidad" />

          <ReferenceInput source="idArticulo" reference="articulos">
            <SelectArrayInput optionText="nombre" />
          </ReferenceInput>

          <ReferenceInput source="idArticulo" reference="articulos">
            <SelectArrayInput optionText="precio" />
          </ReferenceInput>

          <TextInput label="Precio" source="precio" />

          <TextInput source="comentarios" label="Comentarios" />
        </SimpleFormIterator>
      </ArrayInput>

      {/* Articulos */}
      <NumberInput source="total" />
      <ReferenceInput label="Local" source="idLocal" reference="locales">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput
        label="Motorista"
        source="idMotorista"
        reference="motoristas"
      >
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput
        label="Estado de Entrega"
        source="idEstadoEntrega"
        reference="estado_entrega"
      >
        <SelectInput optionText="estado" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const OrdenEdit = props => (
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
      <TextInput source="cliente" />
      <TextInput source="telefono" />
      <TextInput source="direccion" />
      <DateInput source="fechaVenta" label="Fecha de Venta" />
      <DateInput source="fechaEntrega" label="Fecha de Entrega" />
      {/* Articulos */}
      <ArrayInput source="articulos_orden" label="Artículos">
        <SimpleFormIterator>
          <NumberInput source="cantidad" label="Cantidad" />

          <ReferenceInput
            label="Articulo"
            source="idArticulo"
            reference="articulos"
          >
            <SelectArrayInput optionText="nombre" />
          </ReferenceInput>

          <ReferenceInput
            label="Precio"
            source="idArticulo"
            reference="articulos"
          >
            <SelectArrayInput optionText="precio" />
          </ReferenceInput>

          <TextInput label="Precio" source="precio" />

          <TextInput source="comentarios" label="Comentarios" />
        </SimpleFormIterator>
      </ArrayInput>

      {/* Articulos */}
      <ReferenceInput label="Local" source="idLocal" reference="locales">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput
        label="Motorista"
        source="idMotorista"
        reference="motoristas"
      >
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput
        label="Estado de Entrega"
        source="idEstadoEntrega"
        reference="estado_entrega"
      >
        <SelectInput optionText="estado" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
