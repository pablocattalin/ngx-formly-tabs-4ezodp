import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  model = { email: 'email@gmail.com' };
  configItemsBD = {
    tabs: [
      {
        label: 'Principal',
        disabled: false,
        fields: [
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                key: 'tipoId',
                type: 'select',
                className: 'col col-lg-3',
                templateOptions: {
                  label: 'Tipo',
                  required: true,
                  options: [
                    { label: 'OC COMPRAS', value: '1' },
                    { label: 'OC VENTAS', value: '2' },
                    { label: 'CONTRATO DE ALQUILER', value: '3' },
                  ],
                },
              },
              {
                key: 'razonSocial',
                type: 'input',
                className: 'col col-lg-4',
                templateOptions: {
                  label: 'Nombre o Razón Social',
                  required: true,
                },
              },
              //solo mostrar de acuerdo al cliente proveedor
              {
                key: 'cuit',
                type: 'input',
                className: 'col col-lg-2',
                templateOptions: {
                  label: 'DNI/CUIT',
                  type: 'number',
                  minLength: 7,
                  maxLength: 11,
                  enableWorkCount: true,
                  expressionProperties: {
                    'templateOptions.disabled': 'model.razonSocial',
                  },
                },
              },
              {
                key: 'fechaCbte',
                type: 'input',
                className: 'col col-lg-2',
                templateOptions: {
                  label: 'Fecha',
                  type: 'date',
                  required: true,
                },
              },
              //Readonly a excepción de las ordenes de venta
              {
                key: 'nroComprobante',
                type: 'input',
                className: 'col col-lg-1',
                templateOptions: {
                  label: 'N°',
                  required: true,
                },
              },
            ],
          },
          { template: '<hr />' },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              //solo en ordenes
              {
                key: 'monedaId',
                type: 'select',
                className: 'col col-lg-2',
                templateOptions: {
                  label: 'Moneda',
                  required: true,
                  options: [
                    { label: 'PESO ARG', value: 'PES' },
                    { label: 'DOLAR', value: 'DOL' },
                  ],
                },
              },
              {
                key: 'cotizacion',
                type: 'input',
                className: 'col col-lg-1',
                defaultValue: 1,
                expressionProperties: {
                  'templateOptions.disabled': 'model.monedaId === "PES"',
                },
                templateOptions: {
                  label: 'Cotización',
                  type: 'number',
                  required: true,
                  placeholder: '',
                },
                hideExpression: 'model.monedaId === "PES"',
              },
              // solo en ventas
              {
                key: 'listaPrecioId',
                type: 'select',
                className: 'col col-lg-4',
                templateOptions: {
                  label: 'Lista de Precios',
                  required: true,
                },
              },
              {
                key: 'descuento',
                type: 'input',
                className: 'col col-lg-1',
                templateOptions: {
                  label: 'Descuento',
                  required: false,
                },
              },
            ],
          },
          { template: '<hr />' },
          {
            type: 'tabset',
            fieldGroup: [
              {
                templateOptions: {
                  tabTitle: 'Items',
                },
                fieldGroup: [
                  {
                    key: 'detalles',
                    type: 'arrayRepeat',
                    templateOptions: {
                      addText: 'Item',
                    },
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      fieldGroup: [
                        {
                          key: 'nombre',
                          type: 'input',
                          className: 'col col-lg-3',
                          templateOptions: {
                            label: 'Item',
                            required: true,
                          },
                        },
                        {
                          key: 'descripcion',
                          type: 'input',
                          className: 'col col-lg-3',
                          templateOptions: {
                            label: 'Descripción',
                          },
                        },
                        {
                          key: 'cantidad',
                          type: 'input',
                          className: 'col col-lg-1',
                          templateOptions: {
                            label: 'Cantidad',
                            type: 'number',
                            required: true,
                          },
                        },
                        {
                          key: 'precio',
                          type: 'input',
                          className: 'col col-lg-1',
                          templateOptions: {
                            label: 'Precio',
                            type: 'number',
                            required: true,
                          },
                        },
                        {
                          key: 'iva',
                          type: 'input',
                          className: 'col col-lg-1',
                          templateOptions: {
                            label: 'IVA',
                            type: 'number',
                            required: true,
                          },
                        },
                        {
                          key: 'descuento',
                          type: 'input',
                          className: 'col col-lg-1',
                          templateOptions: {
                            label: 'Descuento',
                            type: 'number',
                            required: true,
                          },
                        },
                        {
                          key: 'subtotal',
                          type: 'input',
                          className: 'col col-lg-1',
                          templateOptions: {
                            label: 'Subtotal',
                            type: 'number',
                            required: true,
                          },
                        },
                      ],
                    },
                  },
                ],
              },
              {
                templateOptions: {
                  tabTitle: 'Fechas',
                },
                expressionProperties: {
                  'templateOptions.tabDisabled': 'false',
                  'templateOptions.tabHidden': 'false',
                },
                fieldGroupClassName: 'row',
                fieldGroup: [
                  //Solo en contrato
                  {
                    key: 'fechaRetiro',
                    type: 'input',
                    className: 'col col-lg-2',
                    templateOptions: {
                      label: 'Fecha de retiro:',
                      type: 'date',
                      required: true,
                    },
                  },
                  //Solo en contrato
                  {
                    key: 'fechaUso',
                    type: 'input',
                    className: 'col col-lg-2',
                    templateOptions: {
                      label: 'Fecha de uso:',
                      type: 'date',
                      required: true,
                    },
                  },
                  {
                    key: 'fechaEntrega',
                    type: 'input',
                    className: 'col col-lg-2',
                    templateOptions: {
                      label: 'Fecha de entrega:',
                      type: 'date',
                      required: true,
                    },
                  },
                ],
              },
              {
                templateOptions: {
                  tabTitle: 'Condiciones',
                },
                expressionProperties: {
                  'templateOptions.tabDisabled': 'false',
                  'templateOptions.tabHidden': 'false',
                },
                fieldGroupClassName: 'row',
                fieldGroup: [
                  {
                    key: 'condiciones',
                    type: 'textarea',
                    className: 'col col-lg-6',
                    templateOptions: {
                      label: 'Terminos y Condiciones',
                    },
                  },
                  {
                    key: 'penalidades',
                    type: 'textarea',
                    className: 'col col-lg-3',
                    templateOptions: {
                      label: 'Penalidades',
                    },
                  },
                  // solo en contrato
                  {
                    key: 'garantia',
                    type: 'textarea',
                    className: 'col col-lg-3',
                    templateOptions: {
                      label: 'Garantia',
                    },
                  },
                ],
              },
              {
                templateOptions: {
                  tabTitle: 'Pago',
                },
                expressionProperties: {
                  'templateOptions.tabDisabled': 'false',
                  'templateOptions.tabHidden': 'false',
                },
                fieldGroup: [
                  {
                    key: 'pagos',
                    type: 'arrayRepeat',
                    templateOptions: {
                      addText: 'Agregar',
                    },
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      fieldGroup: [
                        {
                          key: 'concepto',
                          type: 'input',
                          className: 'col col-lg-3',
                          templateOptions: {
                            label: 'En concepto de:',
                            required: true,
                          },
                        },
                        {
                          key: 'importe',
                          type: 'input',
                          className: 'col col-lg-2',
                          templateOptions: {
                            label: 'Importe',
                            type: 'number',
                            required: true,
                          },
                        },
                        {
                          key: 'fecha',
                          type: 'input',
                          className: 'col col-lg-2',
                          templateOptions: {
                            label: 'Fecha',
                            type: 'date',
                            required: true,
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  form = new FormArray(this.configItemsBD.tabs.map(() => new FormGroup({})));
  options = this.configItemsBD.tabs.map(() => ({}));

  submit(model) {
    console.log(model);
  }
}
