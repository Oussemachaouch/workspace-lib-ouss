/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const COMPONENT_LIBRARY = {
    id: 0,
    name: 'PrimeNG Lib',
    version: '1.0.1',
    categories: [
        {
            name: 'input',
            components: [
                {
                    name: 'Label',
                    category: 'Input',
                    icon: '',
                    scope: [
                        'view.components',
                        'edit.components',
                        'selector.filter.components',
                        'selector.grid.components'
                    ],
                    rules: [
                        {
                            includedScreens: ['edit'],
                            excludedUseCases: [],
                            includedTypes: ['numeric', 'boolean'],
                            excludedTypes: [],
                            includedRelation: [],
                            excludedRelation: []
                        },
                        {
                            includedScreens: ['selector'],
                            excludedUseCases: [],
                            includedTypes: ['numeric', 'boolean', 'date'],
                            excludedTypes: [],
                            includedRelation: [],
                            excludedRelation: []
                        }
                    ],
                    container: false,
                    fieldRequired: false,
                    schema: {
                        type: 'object',
                        properties: {
                            styleName: {
                                type: 'string',
                                description: 'can be used to customize the style'
                            },
                            label: {
                                type: 'string',
                                description: 'The label key of the displayed label menu item'
                            },
                            readOnly: {
                                type: 'boolean',
                                description: 'Specify if the field is read only or not'
                            },
                            readOnlyCondition: {
                                type: 'string',
                                description: 'If the condition is verified, it specifies that the component should be disabled'
                            },
                            visibilityCondition: {
                                type: 'string',
                                description: "makes the component visible if the expression's evaluation is true."
                            },
                            wordSize: {
                                type: 'integer',
                                minimum: 0,
                                description: ''
                            },
                            mandatory: {
                                type: 'boolean',
                                description: 'To indicate whether the field is mandatory or no'
                            }
                        },
                        required: ['label']
                    },
                    layout: [
                        {
                            items: [
                                {
                                    key: 'label'
                                },
                                {
                                    key: 'mandatory'
                                },
                                {
                                    key: 'readOnly'
                                },
                                {
                                    key: 'readOnlyCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'visibilityCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'wordSize'
                                },
                                {
                                    key: 'styleName'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'TextField',
                    category: 'Input',
                    scope: ['edit.components'],
                    icon: 'M16 32h416c8.837 0 16 7.163 16 16v96c0 8.837-7.163 16-16 16h-35.496c-8.837 0-16-7.163-16-16V96H261.743v128H296c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H152c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h34.257V96H67.496v48c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16zm427.315 340.682l-80.001-79.995C353.991 283.365 336 288.362 336 304v48H112v-47.99c0-14.307-17.307-21.319-27.314-11.313L4.685 372.692c-6.245 6.245-6.247 16.379 0 22.626l80.001 79.995C94.009 484.635 112 479.638 112 464v-48h224v47.99c0 14.307 17.307 21.319 27.314 11.313l80.001-79.995c6.245-6.245 6.248-16.379 0-22.626z',
                    rules: [
                        {
                            includedScreens: ['searchInput', 'edit'],
                            includedTypes: ['numeric', 'string', 'relation']
                        },
                        {
                            includedScreens: ['searchInput'],
                            includedTypes: ['double']
                        },
                        {
                            includedScreens: ['edit', 'view'],
                            includedTypes: ['numeric', 'string', 'date']
                        },
                        {
                            excludedUseCases: ['searchInput'],
                            includedTypes: ['long']
                        }
                    ],
                    container: false,
                    fieldRequired: true,
                    schema: {
                        type: 'object',
                        properties: {
                            styleName: {
                                type: 'string',
                                description: 'can be used to customize the style'
                            },
                            readOnly: {
                                type: 'boolean',
                                description: 'Specify if the field is read only or not'
                            },
                            readOnlyCondition: {
                                type: 'string',
                                description: 'If the condition is verified, it specifies that the component should be disabled'
                            },
                            role: {
                                type: 'string',
                                description: "makes the component visible if the expression's evaluation is true."
                            },
                            maxLength: {
                                type: 'integer',
                                minimum: 0
                            },
                            prefix: {
                                type: 'string'
                            },
                            suffix: {
                                type: 'string'
                            },
                            mask: {
                                type: 'string'
                            },
                            max: {
                                type: 'integer',
                                minimum: 0
                            },
                            label: {
                                type: 'string',
                                description: 'The label key of the displayed Text menu item'
                            },
                            screen: {
                                type: 'string',
                                enum: [''],
                                description: 'To indicate whether the field is mandatory or not'
                            },
                            feature: {
                                type: 'string',
                                enum: ['Hello'],
                                description: 'To specify whether to set the field label visible or not.'
                            },
                            hideOperator: {
                                type: 'boolean',
                                description: 'To indicate that the operator can be hidden'
                            },
                            keys: {
                                type: 'array',
                                description: 'key of the field',
                                items: {
                                    type: 'object',
                                    properties: {
                                        key: {
                                            type: 'string'
                                        }
                                    },
                                    required: ['key']
                                }
                            },
                            caseSensitive: {
                                type: 'string',
                                enum: ['uppercase', 'lowercase', 'default']
                            },
                            defaultOperator: {
                                type: 'string',
                                description: 'To default operator when the option hideOperator is enabled '
                            }
                        },
                        required: ['label', 'keys']
                    },
                    layout: [
                        {
                            items: [
                                {
                                    key: 'label',
                                    value: '$screensByFeature',
                                    deps: 'field'
                                },
                                {
                                    key: 'feature',
                                    value: '$Features'
                                },
                                {
                                    key: 'screen',
                                    value: '$Screens',
                                    deps: 'feature'
                                },
                                {
                                    key: 'readOnlyCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'role',
                                    value: '$Roles',
                                    deps: 'feature'
                                },
                                {
                                    key: 'hideOperator',
                                    rules: [
                                        {
                                            includedScreens: ['searchInput'],
                                            excludedUseCases: [],
                                            includedTypes: [],
                                            excludedTypes: [],
                                            includedRelation: [],
                                            excludedRelation: []
                                        }
                                    ]
                                },
                                {
                                    key: 'defaultOperator',
                                    rules: [
                                        {
                                            includedScreens: ['searchInput'],
                                            excludedUseCases: [],
                                            includedTypes: [],
                                            excludedTypes: [],
                                            includedRelation: [],
                                            excludedRelation: []
                                        }
                                    ]
                                },
                                {
                                    key: 'caseSensitive'
                                },
                                {
                                    key: 'maxLength'
                                },
                                {
                                    key: 'max'
                                },
                                {
                                    key: 'prefix'
                                },
                                {
                                    key: 'suffix'
                                },
                                {
                                    key: 'mask'
                                },
                                {
                                    key: 'keys',
                                    type: 'array',
                                    rules: [
                                        {
                                            includedScreens: [],
                                            excludedUseCases: [],
                                            includedTypes: ['relation'],
                                            excludedTypes: [],
                                            includedRelation: ['composition'],
                                            excludedRelation: []
                                        }
                                    ],
                                    items: [
                                        {
                                            key: 'keys[].key',
                                            notitle: true,
                                            placeholder: 'key'
                                        }
                                    ]
                                },
                                {
                                    key: 'styleName'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Password',
                    category: 'Input',
                    scope: ['edit.components'],
                    icon: 'M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z',
                    rules: [
                        {
                            includedScreens: ['searchInput', 'edit'],
                            excludedUseCases: [],
                            includedTypes: [],
                            excludedTypes: [],
                            includedRelation: [],
                            excludedRelation: []
                        }
                    ],
                    container: false,
                    fieldRequired: true,
                    schema: {
                        type: 'object',
                        properties: {
                            styleName: {
                                type: 'string',
                                description: 'can be used to customize the style'
                            },
                            readOnly: {
                                type: 'boolean',
                                description: 'Specify if the field is read only or not'
                            },
                            label: {
                                type: 'string',
                                description: 'The label key of the displayed ComboBox menu item '
                            },
                            readOnlyCondition: {
                                type: 'string',
                                description: 'If the condition is verified, it specifies that the component should be disabled'
                            },
                            visibilityCondition: {
                                type: 'string',
                                description: "makes the component visible if the expression's evaluation is true."
                            },
                            mandatory: {
                                type: 'boolean',
                                description: '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form'
                            },
                            showLabel: {
                                type: 'boolean',
                                description: 'To specify whether to set the field label visible or not.'
                            }
                        },
                        required: ['label']
                    },
                    layout: [
                        {
                            items: [
                                {
                                    key: 'label'
                                },
                                {
                                    key: 'showLabel'
                                },
                                {
                                    key: 'mandatory'
                                },
                                {
                                    key: 'readOnly'
                                },
                                {
                                    key: 'readOnlyCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'visibilityCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'styleName'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'DateField',
                    category: 'Input',
                    scope: ['edit.components'],
                    icon: 'M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm116 204c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40z',
                    rules: [
                        {
                            includedScreens: [],
                            excludedUseCases: [],
                            includedTypes: ['string', 'date'],
                            excludedTypes: [],
                            includedRelation: [],
                            excludedRelation: []
                        }
                    ],
                    container: false,
                    fieldRequired: true,
                    schema: {
                        type: 'object',
                        properties: {
                            styleName: {
                                type: 'string',
                                description: 'can be used to customize the style'
                            },
                            format: {
                                type: 'string',
                                description: 'Applicable in case of TextFieldCalendarLayout and FromToLayout'
                            },
                            readOnly: {
                                type: 'boolean',
                                description: 'Specify if the field is read only or not'
                            },
                            readOnlyCondition: {
                                type: 'string',
                                description: 'If the condition is verified, it specifies that the component should be disabled'
                            },
                            visibilityCondition: {
                                type: 'string',
                                description: "makes the component visible if the expression's evaluation is true."
                            },
                            label: {
                                type: 'string',
                                description: 'The label key of the displayed ComboBox menu item '
                            },
                            mandatory: {
                                type: 'boolean',
                                description: '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form'
                            },
                            showLabel: {
                                type: 'boolean',
                                description: 'To specify whether to set the field label visible or not.'
                            },
                            datePrecision: {
                                type: 'string'
                            }
                        },
                        required: ['label', 'format']
                    },
                    layout: [
                        {
                            items: [
                                {
                                    key: 'label'
                                },
                                {
                                    key: 'showLabel'
                                },
                                {
                                    key: 'mandatory'
                                },
                                {
                                    key: 'readOnly'
                                },
                                {
                                    key: 'readOnlyCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'visibilityCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'datePrecision'
                                },
                                {
                                    key: 'style'
                                },
                                {
                                    key: 'format'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Combobox',
                    category: 'Input',
                    scope: ['edit.components'],
                    icon: 'M576 80v40c0 6.6-5.4 12-12 12H160v8c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-8H12c-6.6 0-12-5.4-12-12V80c0-6.6 5.4-12 12-12h84v-8c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v8h404c6.6 0 12 5.4 12 12zm-12 148h-84v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h404v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0 160H288v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h212v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h276c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12z',
                    rules: [
                        {
                            includedScreens: ['searchInput', 'edit'],
                            excludedUseCases: [],
                            includedTypes: ['numeric', 'string', 'relation', 'boolean'],
                            excludedTypes: [],
                            includedRelation: ['composition one', 'aggregation one'],
                            excludedRelation: []
                        }
                    ],
                    container: false,
                    fieldRequired: true,
                    schema: {
                        type: 'object',
                        properties: {
                            styleName: {
                                type: 'string',
                                description: 'can be used to customize the style'
                            },
                            displayFilter: {
                                type: 'boolean',
                                description: '*true- displays an input field to filter the items on keyup.*false - displays an input field to filter the items on keyup. (The filter mode is always Contains mode.)'
                            },
                            lazy: {
                                type: 'boolean',
                                description: 'true - retrieved values only when the user click on the Combox. (onFocus Event).* false -  retrieved values when initializing the screen (ngOnInit)'
                            },
                            readOnly: {
                                type: 'boolean',
                                description: 'Specify if the field is read only or not'
                            },
                            readOnlyCondition: {
                                type: 'string',
                                description: 'If the condition is verified, it specifies that the component should be disabled'
                            },
                            visibilityCondition: {
                                type: 'string',
                                description: "makes the component visible if the expression's evaluation is true."
                            },
                            label: {
                                type: 'string',
                                description: 'The label key of the displayed ComboBox menu item '
                            },
                            sortType: {
                                type: 'string',
                                enum: ['Asc', 'Desc', 'None']
                            },
                            mandatory: {
                                type: 'boolean',
                                description: '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form '
                            },
                            showLabel: {
                                type: 'boolean',
                                description: 'To specify whether to set the field label visible or not.'
                            },
                            keys: {
                                type: 'array',
                                description: 'key of the field',
                                items: {
                                    type: 'object',
                                    properties: {
                                        key: {
                                            type: 'string'
                                        }
                                    },
                                    required: ['key']
                                }
                            }
                        },
                        required: [
                            'label',
                            'readOnlyCondition',
                            'autoWidth',
                            'displayFilter'
                        ]
                    },
                    layout: [
                        {
                            items: [
                                {
                                    key: 'label'
                                },
                                {
                                    key: 'showLabel'
                                },
                                {
                                    key: 'mandatory'
                                },
                                {
                                    key: 'readOnly'
                                },
                                {
                                    key: 'readOnlyCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'visibilityCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'sortType'
                                },
                                {
                                    key: 'styleName'
                                },
                                {
                                    key: 'lazy'
                                },
                                {
                                    key: 'displayFilter'
                                },
                                {
                                    key: 'keys',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'keys[].key',
                                            notitle: true,
                                            placeholder: 'key'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Checkbox',
                    category: 'Input',
                    scope: ['edit.components'],
                    icon: 'M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z',
                    rules: [
                        {
                            includedScreens: ['edit', 'searchInput'],
                            excludedUseCases: [],
                            includedTypes: ['boolean'],
                            excludedTypes: [],
                            includedRelation: [],
                            excludedRelation: []
                        }
                    ],
                    container: false,
                    fieldRequired: true,
                    schema: {
                        type: 'object',
                        properties: {
                            styleName: {
                                type: 'string',
                                description: 'can be used to customize the style'
                            },
                            readOnly: {
                                type: 'boolean',
                                description: 'Specify if the field is read only or not'
                            },
                            label: {
                                type: 'string',
                                description: 'The label key of the displayed ComboBox menu item '
                            },
                            mandatory: {
                                type: 'boolean',
                                description: '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form '
                            },
                            showLabel: {
                                type: 'boolean',
                                description: 'To specify whether to set the field label visible or not.'
                            },
                            readOnlyCondition: {
                                type: 'string',
                                description: 'If the condition is verified, it specifies that the component should be disabled'
                            },
                            visibilityCondition: {
                                type: 'string',
                                description: "makes the component visible if the expression's evaluation is true."
                            }
                        },
                        required: ['readOnly', 'mandatory']
                    },
                    layout: [
                        {
                            items: [
                                {
                                    key: 'label'
                                },
                                {
                                    key: 'showLabel'
                                },
                                {
                                    key: 'mandatory'
                                },
                                {
                                    key: 'readOnly'
                                },
                                {
                                    key: 'readOnlyCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'visibilityCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'styleName'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Radio',
                    category: 'Input',
                    scope: ['edit.components'],
                    icon: 'M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z',
                    rules: [
                        {
                            includedScreens: ['searchInput', 'edit'],
                            excludedUseCases: [],
                            includedTypes: ['boolean'],
                            excludedTypes: [],
                            includedRelation: [],
                            excludedRelation: []
                        }
                    ],
                    container: false,
                    fieldRequired: true,
                    schema: {
                        type: 'object',
                        properties: {
                            styleName: {
                                type: 'string',
                                description: 'can be used to customize the style'
                            },
                            readOnly: {
                                type: 'boolean',
                                description: 'Specify if the field is read only or not'
                            },
                            label: {
                                type: 'string',
                                description: 'The label key of the displayed ComboBox menu item '
                            },
                            sortType: {
                                type: 'string',
                                enum: ['Asc', 'Desc', 'None']
                            },
                            showLabel: {
                                type: 'boolean',
                                description: 'To specify whether to set the field label visible or not.'
                            },
                            readOnlyCondition: {
                                type: 'string'
                            },
                            visibilityCondition: {
                                type: 'string',
                                description: "makes the component visible if the expression's evaluation is true."
                            },
                            mandatory: {
                                type: 'boolean'
                            }
                        },
                        required: ['readOnly']
                    },
                    layout: [
                        {
                            items: [
                                {
                                    key: 'label'
                                },
                                {
                                    key: 'showLabel'
                                },
                                {
                                    key: 'mandatory'
                                },
                                {
                                    key: 'readOnly'
                                },
                                {
                                    key: 'readOnlyCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'visibilityCondition',
                                    type: 'textarea'
                                },
                                {
                                    key: 'sortType'
                                },
                                {
                                    key: 'styleName'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'actions',
            components: [
                {
                    name: 'Button',
                    scope: [
                        'edit.actions',
                        'selector.filter.actions',
                        'selector.grid.actions'
                    ],
                    icon: 'M 2.898438 8 C 1.316406 8 0 9.316406 0 10.902344 L 0 22.097656 C 0 23.632813 1.253906 25 2.898438 25 L 29.097656 25 C 30.632813 25 32 23.746094 32 22.097656 L 32 10.902344 C 32 9.316406 30.683594 8 29.097656 8 Z M 2.898438 10 L 29.097656 10 C 29.714844 10 30 10.285156 30 10.902344 L 30 22.097656 C 30 22.652344 29.566406 23 29.097656 23 L 2.898438 23 C 2.347656 23 2 22.566406 2 22.097656 L 2 10.902344 C 2 10.285156 2.285156 10 2.898438 10 Z M 9.5 15 C 8.671875 15 8 15.671875 8 16.5 C 8 17.328125 8.671875 18 9.5 18 C 10.328125 18 11 17.328125 11 16.5 C 11 15.671875 10.328125 15 9.5 15 Z M 15.5 15 C 14.671875 15 14 15.671875 14 16.5 C 14 17.328125 14.671875 18 15.5 18 C 16.328125 18 17 17.328125 17 16.5 C 17 15.671875 16.328125 15 15.5 15 Z M 21.5 15 C 20.671875 15 20 15.671875 20 16.5 C 20 17.328125 20.671875 18 21.5 18 C 22.328125 18 23 17.328125 23 16.5 C 23 15.671875 22.328125 15 21.5 15 Z ',
                    include: ['edit', 'view', 'search-input', 'searchResult'],
                    fieldRequired: false,
                    exclude: [],
                    properties: {}
                },
                {
                    name: 'ButtonContainer',
                    container: true,
                    icon: 'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z',
                    include: ['edit', 'view', 'search-input', 'searchResult'],
                    fieldRequired: false,
                    exclude: [],
                    properties: {}
                }
            ]
        },
        {
            name: 'data',
            components: [
                {
                    name: 'DataTable',
                    icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z',
                    include: ['searchResult'],
                    exclude: [],
                    properties: {}
                }
            ]
        },
        {
            name: 'panel',
            components: [
                {
                    name: 'TabPanel',
                    icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                    container: true,
                    include: ['edit', 'view'],
                    childs: ['TabItem', 'TabItem'],
                    exclude: [],
                    properties: {}
                },
                {
                    name: 'Group',
                    icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
                    container: true,
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                }
            ]
        },
        {
            name: 'other',
            components: [
                {
                    name: 'TabPanel',
                    icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                },
                {
                    name: 'Group',
                    icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                }
            ]
        },
        {
            name: 'other1',
            components: [
                {
                    name: 'TabPanel',
                    icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                },
                {
                    name: 'Group',
                    icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                }
            ]
        },
        {
            name: 'other2',
            components: [
                {
                    name: 'TabPanel',
                    icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                },
                {
                    name: 'Group',
                    icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112',
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                }
            ]
        },
        {
            name: 'other3',
            components: [
                {
                    name: 'TabPanel',
                    icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                },
                {
                    name: 'Group',
                    icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                }
            ]
        },
        {
            name: 'other4',
            components: [
                {
                    name: 'TabPanel',
                    icon: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                },
                {
                    name: 'Group',
                    icon: 'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
                    include: ['edit', 'view'],
                    exclude: [],
                    properties: {}
                }
            ]
        }
    ]
};
/** @type {?} */
export const TEMPLATE_LIBRARY = {
    name: 'PalmyraAngularTemplates',
    version: '1.0.1',
    templates: [
        {
            name: 'Edit',
            template: 'edit',
            title: 'Edit',
            sections: [
                {
                    name: 'components',
                    title: 'Components'
                },
                {
                    name: 'actions',
                    title: 'Actions'
                }
            ],
            icon: '',
            schema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    showTitle: {
                        type: 'boolean'
                    },
                    labelAlignement: {
                        type: 'string',
                        enum: ['horizontal', 'vertical']
                    },
                    featureName: {
                        type: 'string'
                    },
                    actions: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string'
                                },
                                template: {
                                    type: 'string'
                                },
                                servicePaths: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            url: {
                                                type: 'string'
                                            },
                                            httpMethod: {
                                                type: 'string',
                                                enum: [
                                                    'GET',
                                                    'POST',
                                                    'PUT',
                                                    'HEAD',
                                                    'DELETE',
                                                    'CONNECT',
                                                    'OPTIONS'
                                                ]
                                            },
                                            includeBody: {
                                                type: 'boolean'
                                            },
                                            condition: {
                                                type: 'object',
                                                properties: {
                                                    expression: {
                                                        type: 'string'
                                                    },
                                                    evaluationType: {
                                                        type: 'string',
                                                        enum: ['client', 'server']
                                                    },
                                                    calculationBase: {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                screens: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            path: {
                                                type: 'string'
                                            },
                                            navigationType: {
                                                type: 'string',
                                                enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    componentsBreakpoints: {
                        type: 'object',
                        properties: {
                            xs: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            sm: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            md: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            lg: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            }
                        }
                    }
                },
                required: []
            },
            layout: [
                {
                    items: [
                        {
                            key: 'title'
                        },
                        {
                            key: 'labelAlignement'
                        },
                        {
                            key: 'componentsBreakpoints.xs'
                        },
                        {
                            key: 'componentsBreakpoints.sm'
                        },
                        {
                            key: 'componentsBreakpoints.md'
                        },
                        {
                            key: 'componentsBreakpoints.lg'
                        },
                        {
                            key: 'actions',
                            type: 'array',
                            items: [
                                {
                                    key: 'actions[].name',
                                    notitle: true,
                                    placeholder: 'name'
                                },
                                {
                                    key: 'actions[].template',
                                    notitle: true,
                                    placeholder: 'template'
                                },
                                {
                                    key: 'actions[].servicePaths',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].servicePaths[].url',
                                            notitle: true,
                                            placeholder: 'url'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].httpMethod',
                                            notitle: true,
                                            placeholder: 'http Method'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.expression',
                                            notitle: true,
                                            placeholder: 'condition expression'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.evaluationType',
                                            notitle: true,
                                            placeholder: 'condition evaluation Type'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.calculationBase',
                                            type: 'array',
                                            items: [
                                                {
                                                    key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                    notitle: true,
                                                    placeholder: 'calculation Base'
                                                }
                                            ]
                                        },
                                        {
                                            key: 'actions[].servicePaths[].includeBody',
                                            title: 'include Body',
                                            placeholder: 'include Body'
                                        }
                                    ]
                                },
                                {
                                    key: 'actions[].screens',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].screens[].path',
                                            notitle: true,
                                            placeholder: 'Screen Path'
                                        },
                                        {
                                            key: 'actions[].screens[].navigationType',
                                            notitle: true,
                                            placeholder: 'Navigation Type'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            key: 'showTitle'
                        }
                    ]
                }
            ]
        },
        {
            template: 'selector',
            name: 'Selector',
            sections: [
                {
                    name: 'filter',
                    title: 'Filter',
                    sections: [
                        {
                            name: 'components',
                            title: 'Components'
                        },
                        {
                            name: 'actions',
                            title: 'Actions'
                        }
                    ]
                },
                {
                    name: 'grid',
                    title: 'Grid',
                    sections: [
                        {
                            name: 'columns',
                            title: 'Columns'
                        },
                        {
                            name: 'actions',
                            title: 'Actions'
                        }
                    ]
                }
            ],
            icon: '',
            schema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    showTitle: {
                        type: 'boolean'
                    },
                    labelAlignement: {
                        type: 'string',
                        enum: ['horizontal', 'vertical']
                    },
                    featureName: {
                        type: 'string'
                    },
                    actions: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string'
                                },
                                template: {
                                    type: 'string'
                                },
                                servicePaths: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            url: {
                                                type: 'string'
                                            },
                                            httpMethod: {
                                                type: 'string',
                                                enum: [
                                                    'GET',
                                                    'POST',
                                                    'PUT',
                                                    'HEAD',
                                                    'DELETE',
                                                    'CONNECT',
                                                    'OPTIONS'
                                                ]
                                            },
                                            includeBody: {
                                                type: 'boolean'
                                            },
                                            condition: {
                                                type: 'object',
                                                properties: {
                                                    expression: {
                                                        type: 'string'
                                                    },
                                                    evaluationType: {
                                                        type: 'string',
                                                        enum: ['client', 'server']
                                                    },
                                                    calculationBase: {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                screens: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            path: {
                                                type: 'string'
                                            },
                                            navigationType: {
                                                type: 'string',
                                                enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    componentsBreakpoints: {
                        type: 'object',
                        properties: {
                            xs: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            sm: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            md: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            lg: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            }
                        }
                    }
                },
                required: []
            },
            layout: [
                {
                    items: [
                        {
                            key: 'title'
                        },
                        {
                            key: 'labelAlignement'
                        },
                        {
                            key: 'componentsBreakpoints.xs'
                        },
                        {
                            key: 'componentsBreakpoints.sm'
                        },
                        {
                            key: 'componentsBreakpoints.md'
                        },
                        {
                            key: 'componentsBreakpoints.lg'
                        },
                        {
                            key: 'actions',
                            type: 'array',
                            items: [
                                {
                                    key: 'actions[].name',
                                    notitle: true,
                                    placeholder: 'name'
                                },
                                {
                                    key: 'actions[].template',
                                    notitle: true,
                                    placeholder: 'template'
                                },
                                {
                                    key: 'actions[].servicePaths',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].servicePaths[].url',
                                            notitle: true,
                                            placeholder: 'url'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].httpMethod',
                                            notitle: true,
                                            placeholder: 'http Method'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.expression',
                                            notitle: true,
                                            placeholder: 'condition expression'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.evaluationType',
                                            notitle: true,
                                            placeholder: 'condition evaluation Type'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.calculationBase',
                                            type: 'array',
                                            items: [
                                                {
                                                    key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                    notitle: true,
                                                    placeholder: 'calculation Base'
                                                }
                                            ]
                                        },
                                        {
                                            key: 'actions[].servicePaths[].includeBody',
                                            title: 'include Body',
                                            placeholder: 'include Body'
                                        }
                                    ]
                                },
                                {
                                    key: 'actions[].screens',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].screens[].path',
                                            notitle: true,
                                            placeholder: 'Screen Path'
                                        },
                                        {
                                            key: 'actions[].screens[].navigationType',
                                            notitle: true,
                                            placeholder: 'Navigation Type'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            key: 'showTitle'
                        }
                    ]
                }
            ]
        },
        {
            template: 'search',
            name: 'Search',
            sections: [
                {
                    name: 'columns',
                    title: 'Columns'
                },
                {
                    name: 'actions',
                    title: 'Actions'
                }
            ],
            icon: '',
            schema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    showTitle: {
                        type: 'boolean'
                    },
                    showCheckBoxOnRow: {
                        type: 'boolean'
                    },
                    fitWidth: {
                        type: 'boolean'
                    },
                    enableSorting: {
                        type: 'boolean'
                    },
                    pagination: {
                        type: 'object',
                        properties: {
                            pageSize: {
                                type: 'string'
                            },
                            showCombo: {
                                type: 'boolean'
                            },
                            position: {
                                type: 'string'
                            },
                            pagePossibleSizes: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                }
                            }
                        }
                    },
                    featureName: {
                        type: 'string'
                    },
                    actions: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string'
                                },
                                template: {
                                    type: 'string'
                                },
                                servicePaths: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            url: {
                                                type: 'string'
                                            },
                                            httpMethod: {
                                                type: 'string',
                                                enum: [
                                                    'GET',
                                                    'POST',
                                                    'PUT',
                                                    'HEAD',
                                                    'DELETE',
                                                    'CONNECT',
                                                    'OPTIONS'
                                                ]
                                            },
                                            includeBody: {
                                                type: 'boolean'
                                            },
                                            condition: {
                                                type: 'object',
                                                properties: {
                                                    expression: {
                                                        type: 'string'
                                                    },
                                                    evaluationType: {
                                                        type: 'string',
                                                        enum: ['client', 'server']
                                                    },
                                                    calculationBase: {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                screens: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            path: {
                                                type: 'string'
                                            },
                                            navigationType: {
                                                type: 'string',
                                                enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                required: []
            },
            layout: [
                {
                    items: [
                        {
                            key: 'title'
                        },
                        {
                            key: 'pagination.pageSize'
                        },
                        {
                            key: 'pagination.position'
                        },
                        {
                            key: 'pagination.pagePossibleSizes',
                            type: 'array',
                            items: [
                                {
                                    key: 'pagination.pagePossibleSizes[]',
                                    placeholder: 'Page Possible Size'
                                }
                            ]
                        },
                        {
                            key: 'actions',
                            type: 'array',
                            items: [
                                {
                                    key: 'actions[].name',
                                    notitle: true,
                                    placeholder: 'name'
                                },
                                {
                                    key: 'actions[].template',
                                    notitle: true,
                                    placeholder: 'template'
                                },
                                {
                                    key: 'actions[].servicePaths',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].servicePaths[].url',
                                            notitle: true,
                                            placeholder: 'url'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].httpMethod',
                                            notitle: true,
                                            placeholder: 'http Method'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.expression',
                                            notitle: true,
                                            placeholder: 'condition expression'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.evaluationType',
                                            notitle: true,
                                            placeholder: 'condition evaluation Type'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.calculationBase',
                                            type: 'array',
                                            items: [
                                                {
                                                    key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                    notitle: true,
                                                    placeholder: 'calculation Base'
                                                }
                                            ]
                                        },
                                        {
                                            key: 'actions[].servicePaths[].includeBody',
                                            title: 'include Body',
                                            placeholder: 'include Body'
                                        }
                                    ]
                                },
                                {
                                    key: 'actions[].screens',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].screens[].path',
                                            notitle: true,
                                            placeholder: 'Screen Path'
                                        },
                                        {
                                            key: 'actions[].screens[].navigationType',
                                            notitle: true,
                                            placeholder: 'Navigation Type'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            key: 'pagination.showCombo'
                        },
                        {
                            key: 'showCheckBoxOnRow'
                        },
                        {
                            key: 'fitWidth'
                        },
                        {
                            key: 'enableSorting'
                        }
                    ]
                }
            ]
        },
        {
            name: 'searchInput',
            title: 'Search Input',
            sections: [
                {
                    name: 'components',
                    title: 'Components'
                },
                {
                    name: 'actions',
                    title: 'Actions'
                }
            ],
            icon: '',
            schema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    defaultCriteria: {
                        type: 'string'
                    },
                    featureName: {
                        type: 'string'
                    },
                    showTitle: {
                        type: 'boolean'
                    },
                    hideOperators: {
                        type: 'boolean'
                    },
                    labelAlignement: {
                        type: 'string',
                        enum: ['horizontal', 'vertical']
                    },
                    actions: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string'
                                },
                                template: {
                                    type: 'string'
                                },
                                servicePaths: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            url: {
                                                type: 'string'
                                            },
                                            httpMethod: {
                                                type: 'string',
                                                enum: [
                                                    'GET',
                                                    'POST',
                                                    'PUT',
                                                    'HEAD',
                                                    'DELETE',
                                                    'CONNECT',
                                                    'OPTIONS'
                                                ]
                                            },
                                            includeBody: {
                                                type: 'boolean'
                                            },
                                            condition: {
                                                type: 'object',
                                                properties: {
                                                    expression: {
                                                        type: 'string'
                                                    },
                                                    evaluationType: {
                                                        type: 'string',
                                                        enum: ['client', 'server']
                                                    },
                                                    calculationBase: {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                screens: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            path: {
                                                type: 'string'
                                            },
                                            navigationType: {
                                                type: 'string',
                                                enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    componentsBreakpoints: {
                        type: 'object',
                        properties: {
                            xs: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            sm: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            md: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            lg: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            }
                        }
                    }
                },
                required: []
            },
            layout: [
                {
                    items: [
                        {
                            key: 'title'
                        },
                        {
                            key: 'defaultCriteria'
                        },
                        {
                            key: 'labelAlignement'
                        },
                        {
                            key: 'componentsBreakpoints.xs'
                        },
                        {
                            key: 'componentsBreakpoints.sm'
                        },
                        {
                            key: 'componentsBreakpoints.md'
                        },
                        {
                            key: 'componentsBreakpoints.lg'
                        },
                        {
                            key: 'actions',
                            type: 'array',
                            items: [
                                {
                                    key: 'actions[].name',
                                    notitle: true,
                                    placeholder: 'name'
                                },
                                {
                                    key: 'actions[].template',
                                    notitle: true,
                                    placeholder: 'template'
                                },
                                {
                                    key: 'actions[].servicePaths',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].servicePaths[].url',
                                            notitle: true,
                                            placeholder: 'url'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].httpMethod',
                                            notitle: true,
                                            placeholder: 'http Method'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.expression',
                                            notitle: true,
                                            placeholder: 'condition expression'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.evaluationType',
                                            notitle: true,
                                            placeholder: 'condition evaluation Type'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.calculationBase',
                                            type: 'array',
                                            items: [
                                                {
                                                    key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                    notitle: true,
                                                    placeholder: 'calculation Base'
                                                }
                                            ]
                                        },
                                        {
                                            key: 'actions[].servicePaths[].includeBody',
                                            title: 'include Body',
                                            placeholder: 'include Body'
                                        }
                                    ]
                                },
                                {
                                    key: 'actions[].screens',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].screens[].path',
                                            notitle: true,
                                            placeholder: 'Screen Path'
                                        },
                                        {
                                            key: 'actions[].screens[].navigationType',
                                            notitle: true,
                                            placeholder: 'Navigation Type'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            key: 'showTitle'
                        },
                        {
                            key: 'hideOperators'
                        }
                    ]
                }
            ]
        },
        {
            name: 'edit-collection',
            title: 'Edit Collection',
            sections: [
                {
                    name: 'columns',
                    title: 'Columns'
                },
                {
                    name: 'actions',
                    title: 'Actions'
                }
            ],
            icon: '',
            schema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    showTitle: {
                        type: 'boolean'
                    },
                    showCheckBoxOnRow: {
                        type: 'boolean'
                    },
                    fitWidth: {
                        type: 'boolean'
                    },
                    enableSorting: {
                        type: 'boolean'
                    },
                    pagination: {
                        type: 'object',
                        properties: {
                            pageSize: {
                                type: 'string'
                            },
                            showCombo: {
                                type: 'boolean'
                            },
                            position: {
                                type: 'string'
                            },
                            pagePossibleSizes: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                }
                            }
                        }
                    },
                    featureName: {
                        type: 'string'
                    },
                    actions: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string'
                                },
                                template: {
                                    type: 'string'
                                },
                                servicePaths: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            url: {
                                                type: 'string'
                                            },
                                            httpMethod: {
                                                type: 'string',
                                                enum: [
                                                    'GET',
                                                    'POST',
                                                    'PUT',
                                                    'HEAD',
                                                    'DELETE',
                                                    'CONNECT',
                                                    'OPTIONS'
                                                ]
                                            },
                                            includeBody: {
                                                type: 'boolean'
                                            },
                                            condition: {
                                                type: 'object',
                                                properties: {
                                                    expression: {
                                                        type: 'string'
                                                    },
                                                    evaluationType: {
                                                        type: 'string',
                                                        enum: ['client', 'server']
                                                    },
                                                    calculationBase: {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                screens: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            path: {
                                                type: 'string'
                                            },
                                            navigationType: {
                                                type: 'string',
                                                enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                required: []
            },
            layout: [
                {
                    items: [
                        {
                            key: 'title'
                        },
                        {
                            key: 'pagination.pageSize'
                        },
                        {
                            key: 'pagination.position'
                        },
                        {
                            key: 'pagination.pagePossibleSizes',
                            type: 'array',
                            items: [
                                {
                                    key: 'pagination.pagePossibleSizes[]',
                                    placeholder: 'Page Possible Size'
                                }
                            ]
                        },
                        {
                            key: 'actions',
                            type: 'array',
                            items: [
                                {
                                    key: 'actions[].name',
                                    notitle: true,
                                    placeholder: 'name'
                                },
                                {
                                    key: 'actions[].template',
                                    notitle: true,
                                    placeholder: 'template'
                                },
                                {
                                    key: 'actions[].servicePaths',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].servicePaths[].url',
                                            notitle: true,
                                            placeholder: 'url'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].httpMethod',
                                            notitle: true,
                                            placeholder: 'http Method'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.expression',
                                            notitle: true,
                                            placeholder: 'condition expression'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.evaluationType',
                                            notitle: true,
                                            placeholder: 'condition evaluation Type'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.calculationBase',
                                            type: 'array',
                                            items: [
                                                {
                                                    key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                    notitle: true,
                                                    placeholder: 'calculation Base'
                                                }
                                            ]
                                        },
                                        {
                                            key: 'actions[].servicePaths[].includeBody',
                                            title: 'include Body',
                                            placeholder: 'include Body'
                                        }
                                    ]
                                },
                                {
                                    key: 'actions[].screens',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].screens[].path',
                                            notitle: true,
                                            placeholder: 'Screen Path'
                                        },
                                        {
                                            key: 'actions[].screens[].navigationType',
                                            notitle: true,
                                            placeholder: 'Navigation Type'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            key: 'pagination.showCombo'
                        },
                        {
                            key: 'showCheckBoxOnRow'
                        },
                        {
                            key: 'fitWidth'
                        },
                        {
                            key: 'enableSorting'
                        }
                    ]
                }
            ]
        },
        {
            name: 'view-collection',
            title: 'View Collection',
            sections: [
                {
                    name: 'columns',
                    title: 'Columns'
                },
                {
                    name: 'actions',
                    title: 'Actions'
                }
            ],
            icon: '',
            schema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    showTitle: {
                        type: 'boolean'
                    },
                    showCheckBoxOnRow: {
                        type: 'boolean'
                    },
                    fitWidth: {
                        type: 'boolean'
                    },
                    enableSorting: {
                        type: 'boolean'
                    },
                    pagination: {
                        type: 'object',
                        properties: {
                            pageSize: {
                                type: 'string'
                            },
                            showCombo: {
                                type: 'boolean'
                            },
                            position: {
                                type: 'string'
                            },
                            pagePossibleSizes: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                }
                            }
                        }
                    },
                    featureName: {
                        type: 'string'
                    },
                    actions: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string'
                                },
                                template: {
                                    type: 'string'
                                },
                                servicePaths: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            url: {
                                                type: 'string'
                                            },
                                            httpMethod: {
                                                type: 'string',
                                                enum: [
                                                    'GET',
                                                    'POST',
                                                    'PUT',
                                                    'HEAD',
                                                    'DELETE',
                                                    'CONNECT',
                                                    'OPTIONS'
                                                ]
                                            },
                                            includeBody: {
                                                type: 'boolean'
                                            },
                                            condition: {
                                                type: 'object',
                                                properties: {
                                                    expression: {
                                                        type: 'string'
                                                    },
                                                    evaluationType: {
                                                        type: 'string',
                                                        enum: ['client', 'server']
                                                    },
                                                    calculationBase: {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                screens: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            path: {
                                                type: 'string'
                                            },
                                            navigationType: {
                                                type: 'string',
                                                enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                required: []
            },
            layout: [
                {
                    items: [
                        {
                            key: 'title'
                        },
                        {
                            key: 'pagination.pageSize'
                        },
                        {
                            key: 'pagination.position'
                        },
                        {
                            key: 'pagination.pagePossibleSizes',
                            type: 'array',
                            items: [
                                {
                                    key: 'pagination.pagePossibleSizes[]',
                                    placeholder: 'Page Possible Size'
                                }
                            ]
                        },
                        {
                            key: 'actions',
                            type: 'array',
                            items: [
                                {
                                    key: 'actions[].name',
                                    notitle: true,
                                    placeholder: 'name'
                                },
                                {
                                    key: 'actions[].template',
                                    notitle: true,
                                    placeholder: 'template'
                                },
                                {
                                    key: 'actions[].servicePaths',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].servicePaths[].url',
                                            notitle: true,
                                            placeholder: 'url'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].httpMethod',
                                            notitle: true,
                                            placeholder: 'http Method'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.expression',
                                            notitle: true,
                                            placeholder: 'condition expression'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.evaluationType',
                                            notitle: true,
                                            placeholder: 'condition evaluation Type'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.calculationBase',
                                            type: 'array',
                                            items: [
                                                {
                                                    key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                    notitle: true,
                                                    placeholder: 'calculation Base'
                                                }
                                            ]
                                        },
                                        {
                                            key: 'actions[].servicePaths[].includeBody',
                                            title: 'include Body',
                                            placeholder: 'include Body'
                                        }
                                    ]
                                },
                                {
                                    key: 'actions[].screens',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].screens[].path',
                                            notitle: true,
                                            placeholder: 'Screen Path'
                                        },
                                        {
                                            key: 'actions[].screens[].navigationType',
                                            notitle: true,
                                            placeholder: 'Navigation Type'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            key: 'pagination.showCombo'
                        },
                        {
                            key: 'showCheckBoxOnRow'
                        },
                        {
                            key: 'fitWidth'
                        },
                        {
                            key: 'enableSorting'
                        }
                    ]
                }
            ]
        },
        {
            name: 'view',
            title: 'View',
            icon: '',
            sections: [
                {
                    name: 'components',
                    title: 'Components'
                },
                {
                    name: 'actions',
                    title: 'Actions'
                }
            ],
            schema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    showTitle: {
                        type: 'boolean'
                    },
                    labelAlignement: {
                        type: 'string',
                        enum: ['horizontal', 'vertical']
                    },
                    featureName: {
                        type: 'string'
                    },
                    actions: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string'
                                },
                                template: {
                                    type: 'string'
                                },
                                servicePaths: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            url: {
                                                type: 'string'
                                            },
                                            httpMethod: {
                                                type: 'string',
                                                enum: [
                                                    'GET',
                                                    'POST',
                                                    'PUT',
                                                    'HEAD',
                                                    'DELETE',
                                                    'CONNECT',
                                                    'OPTIONS'
                                                ]
                                            },
                                            includeBody: {
                                                type: 'boolean'
                                            },
                                            condition: {
                                                type: 'object',
                                                properties: {
                                                    expression: {
                                                        type: 'string'
                                                    },
                                                    evaluationType: {
                                                        type: 'string',
                                                        enum: ['client', 'server']
                                                    },
                                                    calculationBase: {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                screens: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            path: {
                                                type: 'string'
                                            },
                                            navigationType: {
                                                type: 'string',
                                                enum: ['forward', 'back', 'dialog', 'switch', 'call']
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    componentsBreakpoints: {
                        type: 'object',
                        properties: {
                            xs: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            sm: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            md: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            },
                            lg: {
                                type: 'number',
                                minimum: 1,
                                maximum: 12
                            }
                        }
                    }
                },
                required: []
            },
            layout: [
                {
                    items: [
                        {
                            key: 'title'
                        },
                        {
                            key: 'labelAlignement'
                        },
                        {
                            key: 'componentsBreakpoints.xs'
                        },
                        {
                            key: 'componentsBreakpoints.sm'
                        },
                        {
                            key: 'componentsBreakpoints.md'
                        },
                        {
                            key: 'componentsBreakpoints.lg'
                        },
                        {
                            key: 'actions',
                            type: 'array',
                            items: [
                                {
                                    key: 'actions[].name',
                                    notitle: true,
                                    placeholder: 'name'
                                },
                                {
                                    key: 'actions[].template',
                                    notitle: true,
                                    placeholder: 'template'
                                },
                                {
                                    key: 'actions[].servicePaths',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].servicePaths[].url',
                                            notitle: true,
                                            placeholder: 'url'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].httpMethod',
                                            notitle: true,
                                            placeholder: 'http Method'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.expression',
                                            notitle: true,
                                            placeholder: 'condition expression'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.evaluationType',
                                            notitle: true,
                                            placeholder: 'condition evaluation Type'
                                        },
                                        {
                                            key: 'actions[].servicePaths[].condition.calculationBase',
                                            type: 'array',
                                            items: [
                                                {
                                                    key: 'actions[].servicePaths[].condition.calculationBase[]',
                                                    notitle: true,
                                                    placeholder: 'calculation Base'
                                                }
                                            ]
                                        },
                                        {
                                            key: 'actions[].servicePaths[].includeBody',
                                            title: 'include Body',
                                            placeholder: 'include Body'
                                        }
                                    ]
                                },
                                {
                                    key: 'actions[].screens',
                                    type: 'array',
                                    items: [
                                        {
                                            key: 'actions[].screens[].path',
                                            notitle: true,
                                            placeholder: 'Screen Path'
                                        },
                                        {
                                            key: 'actions[].screens[].navigationType',
                                            notitle: true,
                                            placeholder: 'Navigation Type'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            key: 'showTitle'
                        }
                    ]
                }
            ]
        }
    ]
};
/** @type {?} */
export const ROLES = [
    { name: 'admin' },
    { name: 'vermeg_user' },
    { name: 'simple_user' },
    { name: 'role1' },
    { name: 'role2' },
    { name: 'role3' },
    { name: 'role4' },
    { name: 'role5' },
    { name: 'role6' },
    { name: 'role7' },
    { name: 'role8' },
    { name: 'role9' },
    { name: 'role10' },
    { name: 'role11' },
    { name: 'role12' },
    { name: 'role13' },
    { name: 'role14' },
    { name: 'role15' },
    { name: 'role16' },
    { name: 'role17' },
    { name: 'role18' },
    { name: 'role19' },
    { name: 'role20' },
    { name: 'role21' },
    { name: 'role22' },
    { name: 'role23' }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbImZha2UtYmFja2VuZC9tb2NrZWQtcmVzcG9uc2UvbW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sT0FBTyxpQkFBaUIsR0FBRztJQUMvQixFQUFFLEVBQUUsQ0FBQztJQUNMLElBQUksRUFBRSxhQUFhO0lBQ25CLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFVBQVUsRUFBRTtRQUNWO1lBQ0UsSUFBSSxFQUFFLE9BQU87WUFDYixVQUFVLEVBQUU7Z0JBQ1Y7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLElBQUksRUFBRSxFQUFFO29CQUNSLEtBQUssRUFBRTt3QkFDTCxpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsNEJBQTRCO3dCQUM1QiwwQkFBMEI7cUJBQzNCO29CQUNELEtBQUssRUFBRTt3QkFDTDs0QkFDRSxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7NEJBQ3pCLGdCQUFnQixFQUFFLEVBQUU7NEJBQ3BCLGFBQWEsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7NEJBQ3JDLGFBQWEsRUFBRSxFQUFFOzRCQUNqQixnQkFBZ0IsRUFBRSxFQUFFOzRCQUNwQixnQkFBZ0IsRUFBRSxFQUFFO3lCQUNyQjt3QkFDRDs0QkFDRSxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUM7NEJBQzdCLGdCQUFnQixFQUFFLEVBQUU7NEJBQ3BCLGFBQWEsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDOzRCQUM3QyxhQUFhLEVBQUUsRUFBRTs0QkFDakIsZ0JBQWdCLEVBQUUsRUFBRTs0QkFDcEIsZ0JBQWdCLEVBQUUsRUFBRTt5QkFDckI7cUJBQ0Y7b0JBQ0QsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLGFBQWEsRUFBRSxLQUFLO29CQUNwQixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFFBQVE7d0JBQ2QsVUFBVSxFQUFFOzRCQUNWLFNBQVMsRUFBRTtnQ0FDVCxJQUFJLEVBQUUsUUFBUTtnQ0FDZCxXQUFXLEVBQUUsb0NBQW9DOzZCQUNsRDs0QkFDRCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUFFLGdEQUFnRDs2QkFDOUQ7NEJBQ0QsUUFBUSxFQUFFO2dDQUNSLElBQUksRUFBRSxTQUFTO2dDQUNmLFdBQVcsRUFBRSwwQ0FBMEM7NkJBQ3hEOzRCQUNELGlCQUFpQixFQUFFO2dDQUNqQixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxXQUFXLEVBQ1Qsa0ZBQWtGOzZCQUNyRjs0QkFDRCxtQkFBbUIsRUFBRTtnQ0FDbkIsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUNULHFFQUFxRTs2QkFDeEU7NEJBQ0QsUUFBUSxFQUFFO2dDQUNSLElBQUksRUFBRSxTQUFTO2dDQUNmLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFdBQVcsRUFBRSxFQUFFOzZCQUNoQjs0QkFDRCxTQUFTLEVBQUU7Z0NBQ1QsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsV0FBVyxFQUFFLGtEQUFrRDs2QkFDaEU7eUJBQ0Y7d0JBQ0QsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDO3FCQUNwQjtvQkFDRCxNQUFNLEVBQUU7d0JBQ047NEJBQ0UsS0FBSyxFQUFFO2dDQUNMO29DQUNFLEdBQUcsRUFBRSxPQUFPO2lDQUNiO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxXQUFXO2lDQUNqQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsVUFBVTtpQ0FDaEI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtvQ0FDeEIsSUFBSSxFQUFFLFVBQVU7aUNBQ2pCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxxQkFBcUI7b0NBQzFCLElBQUksRUFBRSxVQUFVO2lDQUNqQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsVUFBVTtpQ0FDaEI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLFdBQVc7aUNBQ2pCOzZCQUNGO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxXQUFXO29CQUNqQixRQUFRLEVBQUUsT0FBTztvQkFDakIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQzFCLElBQUksRUFDRixxbkJBQXFuQjtvQkFDdm5CLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxlQUFlLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDOzRCQUN4QyxhQUFhLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQzt5QkFDakQ7d0JBQ0Q7NEJBQ0UsZUFBZSxFQUFFLENBQUMsYUFBYSxDQUFDOzRCQUNoQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBQzFCO3dCQUNEOzRCQUNFLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7NEJBQ2pDLGFBQWEsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO3lCQUM3Qzt3QkFDRDs0QkFDRSxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzs0QkFDakMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO3lCQUN4QjtxQkFDRjtvQkFDRCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsYUFBYSxFQUFFLElBQUk7b0JBQ25CLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsUUFBUTt3QkFDZCxVQUFVLEVBQUU7NEJBQ1YsU0FBUyxFQUFFO2dDQUNULElBQUksRUFBRSxRQUFRO2dDQUNkLFdBQVcsRUFBRSxvQ0FBb0M7NkJBQ2xEOzRCQUNELFFBQVEsRUFBRTtnQ0FDUixJQUFJLEVBQUUsU0FBUztnQ0FDZixXQUFXLEVBQUUsMENBQTBDOzZCQUN4RDs0QkFDRCxpQkFBaUIsRUFBRTtnQ0FDakIsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUNULGtGQUFrRjs2QkFDckY7NEJBQ0QsSUFBSSxFQUFFO2dDQUNKLElBQUksRUFBRSxRQUFRO2dDQUNkLFdBQVcsRUFDVCxxRUFBcUU7NkJBQ3hFOzRCQUNELFNBQVMsRUFBRTtnQ0FDVCxJQUFJLEVBQUUsU0FBUztnQ0FDZixPQUFPLEVBQUUsQ0FBQzs2QkFDWDs0QkFDRCxNQUFNLEVBQUU7Z0NBQ04sSUFBSSxFQUFFLFFBQVE7NkJBQ2Y7NEJBQ0QsTUFBTSxFQUFFO2dDQUNOLElBQUksRUFBRSxRQUFROzZCQUNmOzRCQUNELElBQUksRUFBRTtnQ0FDSixJQUFJLEVBQUUsUUFBUTs2QkFDZjs0QkFDRCxHQUFHLEVBQUU7Z0NBQ0gsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsT0FBTyxFQUFFLENBQUM7NkJBQ1g7NEJBQ0QsS0FBSyxFQUFFO2dDQUNMLElBQUksRUFBRSxRQUFRO2dDQUNkLFdBQVcsRUFBRSwrQ0FBK0M7NkJBQzdEOzRCQUNELE1BQU0sRUFBRTtnQ0FDTixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ1YsV0FBVyxFQUFFLG1EQUFtRDs2QkFDakU7NEJBQ0QsT0FBTyxFQUFFO2dDQUNQLElBQUksRUFBRSxRQUFRO2dDQUNkLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztnQ0FDZixXQUFXLEVBQ1QsMkRBQTJEOzZCQUM5RDs0QkFDRCxZQUFZLEVBQUU7Z0NBQ1osSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsV0FBVyxFQUFFLDZDQUE2Qzs2QkFDM0Q7NEJBQ0QsSUFBSSxFQUFFO2dDQUNKLElBQUksRUFBRSxPQUFPO2dDQUNiLFdBQVcsRUFBRSxrQkFBa0I7Z0NBQy9CLEtBQUssRUFBRTtvQ0FDTCxJQUFJLEVBQUUsUUFBUTtvQ0FDZCxVQUFVLEVBQUU7d0NBQ1YsR0FBRyxFQUFFOzRDQUNILElBQUksRUFBRSxRQUFRO3lDQUNmO3FDQUNGO29DQUNELFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQztpQ0FDbEI7NkJBQ0Y7NEJBQ0QsYUFBYSxFQUFFO2dDQUNiLElBQUksRUFBRSxRQUFRO2dDQUNkLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDOzZCQUM1Qzs0QkFDRCxlQUFlLEVBQUU7Z0NBQ2YsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUNULDhEQUE4RDs2QkFDakU7eUJBQ0Y7d0JBQ0QsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztxQkFDNUI7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOOzRCQUNFLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxHQUFHLEVBQUUsT0FBTztvQ0FDWixLQUFLLEVBQUUsbUJBQW1CO29DQUMxQixJQUFJLEVBQUUsT0FBTztpQ0FDZDtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsU0FBUztvQ0FDZCxLQUFLLEVBQUUsV0FBVztpQ0FDbkI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLFFBQVE7b0NBQ2IsS0FBSyxFQUFFLFVBQVU7b0NBQ2pCLElBQUksRUFBRSxTQUFTO2lDQUNoQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsbUJBQW1CO29DQUN4QixJQUFJLEVBQUUsVUFBVTtpQ0FDakI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLE1BQU07b0NBQ1gsS0FBSyxFQUFFLFFBQVE7b0NBQ2YsSUFBSSxFQUFFLFNBQVM7aUNBQ2hCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxjQUFjO29DQUNuQixLQUFLLEVBQUU7d0NBQ0w7NENBQ0UsZUFBZSxFQUFFLENBQUMsYUFBYSxDQUFDOzRDQUNoQyxnQkFBZ0IsRUFBRSxFQUFFOzRDQUNwQixhQUFhLEVBQUUsRUFBRTs0Q0FDakIsYUFBYSxFQUFFLEVBQUU7NENBQ2pCLGdCQUFnQixFQUFFLEVBQUU7NENBQ3BCLGdCQUFnQixFQUFFLEVBQUU7eUNBQ3JCO3FDQUNGO2lDQUNGO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxpQkFBaUI7b0NBQ3RCLEtBQUssRUFBRTt3Q0FDTDs0Q0FDRSxlQUFlLEVBQUUsQ0FBQyxhQUFhLENBQUM7NENBQ2hDLGdCQUFnQixFQUFFLEVBQUU7NENBQ3BCLGFBQWEsRUFBRSxFQUFFOzRDQUNqQixhQUFhLEVBQUUsRUFBRTs0Q0FDakIsZ0JBQWdCLEVBQUUsRUFBRTs0Q0FDcEIsZ0JBQWdCLEVBQUUsRUFBRTt5Q0FDckI7cUNBQ0Y7aUNBQ0Y7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLGVBQWU7aUNBQ3JCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxXQUFXO2lDQUNqQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsS0FBSztpQ0FDWDtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsUUFBUTtpQ0FDZDtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsUUFBUTtpQ0FDZDtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsTUFBTTtpQ0FDWjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsTUFBTTtvQ0FDWCxJQUFJLEVBQUUsT0FBTztvQ0FDYixLQUFLLEVBQUU7d0NBQ0w7NENBQ0UsZUFBZSxFQUFFLEVBQUU7NENBQ25CLGdCQUFnQixFQUFFLEVBQUU7NENBQ3BCLGFBQWEsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0Q0FDM0IsYUFBYSxFQUFFLEVBQUU7NENBQ2pCLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDOzRDQUNqQyxnQkFBZ0IsRUFBRSxFQUFFO3lDQUNyQjtxQ0FDRjtvQ0FDRCxLQUFLLEVBQUU7d0NBQ0w7NENBQ0UsR0FBRyxFQUFFLFlBQVk7NENBQ2pCLE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxLQUFLO3lDQUNuQjtxQ0FDRjtpQ0FDRjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsV0FBVztpQ0FDakI7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFFBQVEsRUFBRSxPQUFPO29CQUNqQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDMUIsSUFBSSxFQUNGLDRjQUE0YztvQkFDOWMsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLGVBQWUsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7NEJBQ3hDLGdCQUFnQixFQUFFLEVBQUU7NEJBQ3BCLGFBQWEsRUFBRSxFQUFFOzRCQUNqQixhQUFhLEVBQUUsRUFBRTs0QkFDakIsZ0JBQWdCLEVBQUUsRUFBRTs0QkFDcEIsZ0JBQWdCLEVBQUUsRUFBRTt5QkFDckI7cUJBQ0Y7b0JBQ0QsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLGFBQWEsRUFBRSxJQUFJO29CQUNuQixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFFBQVE7d0JBQ2QsVUFBVSxFQUFFOzRCQUNWLFNBQVMsRUFBRTtnQ0FDVCxJQUFJLEVBQUUsUUFBUTtnQ0FDZCxXQUFXLEVBQUUsb0NBQW9DOzZCQUNsRDs0QkFDRCxRQUFRLEVBQUU7Z0NBQ1IsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsV0FBVyxFQUFFLDBDQUEwQzs2QkFDeEQ7NEJBQ0QsS0FBSyxFQUFFO2dDQUNMLElBQUksRUFBRSxRQUFRO2dDQUNkLFdBQVcsRUFDVCxvREFBb0Q7NkJBQ3ZEOzRCQUNELGlCQUFpQixFQUFFO2dDQUNqQixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxXQUFXLEVBQ1Qsa0ZBQWtGOzZCQUNyRjs0QkFDRCxtQkFBbUIsRUFBRTtnQ0FDbkIsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUNULHFFQUFxRTs2QkFDeEU7NEJBQ0QsU0FBUyxFQUFFO2dDQUNULElBQUksRUFBRSxTQUFTO2dDQUNmLFdBQVcsRUFDVCw2S0FBNks7NkJBQ2hMOzRCQUNELFNBQVMsRUFBRTtnQ0FDVCxJQUFJLEVBQUUsU0FBUztnQ0FDZixXQUFXLEVBQ1QsMkRBQTJEOzZCQUM5RDt5QkFDRjt3QkFDRCxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUM7cUJBQ3BCO29CQUNELE1BQU0sRUFBRTt3QkFDTjs0QkFDRSxLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsR0FBRyxFQUFFLE9BQU87aUNBQ2I7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLFdBQVc7aUNBQ2pCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxXQUFXO2lDQUNqQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsVUFBVTtpQ0FDaEI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtvQ0FDeEIsSUFBSSxFQUFFLFVBQVU7aUNBQ2pCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxxQkFBcUI7b0NBQzFCLElBQUksRUFBRSxVQUFVO2lDQUNqQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsV0FBVztpQ0FDakI7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLFFBQVEsRUFBRSxPQUFPO29CQUNqQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDMUIsSUFBSSxFQUNGLHM0QkFBczRCO29CQUN4NEIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLGVBQWUsRUFBRSxFQUFFOzRCQUNuQixnQkFBZ0IsRUFBRSxFQUFFOzRCQUNwQixhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDOzRCQUNqQyxhQUFhLEVBQUUsRUFBRTs0QkFDakIsZ0JBQWdCLEVBQUUsRUFBRTs0QkFDcEIsZ0JBQWdCLEVBQUUsRUFBRTt5QkFDckI7cUJBQ0Y7b0JBQ0QsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLGFBQWEsRUFBRSxJQUFJO29CQUNuQixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFFBQVE7d0JBQ2QsVUFBVSxFQUFFOzRCQUNWLFNBQVMsRUFBRTtnQ0FDVCxJQUFJLEVBQUUsUUFBUTtnQ0FDZCxXQUFXLEVBQUUsb0NBQW9DOzZCQUNsRDs0QkFDRCxNQUFNLEVBQUU7Z0NBQ04sSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUNULGdFQUFnRTs2QkFDbkU7NEJBQ0QsUUFBUSxFQUFFO2dDQUNSLElBQUksRUFBRSxTQUFTO2dDQUNmLFdBQVcsRUFBRSwwQ0FBMEM7NkJBQ3hEOzRCQUNELGlCQUFpQixFQUFFO2dDQUNqQixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxXQUFXLEVBQ1Qsa0ZBQWtGOzZCQUNyRjs0QkFDRCxtQkFBbUIsRUFBRTtnQ0FDbkIsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUNULHFFQUFxRTs2QkFDeEU7NEJBQ0QsS0FBSyxFQUFFO2dDQUNMLElBQUksRUFBRSxRQUFRO2dDQUNkLFdBQVcsRUFDVCxvREFBb0Q7NkJBQ3ZEOzRCQUNELFNBQVMsRUFBRTtnQ0FDVCxJQUFJLEVBQUUsU0FBUztnQ0FDZixXQUFXLEVBQ1QsNktBQTZLOzZCQUNoTDs0QkFDRCxTQUFTLEVBQUU7Z0NBQ1QsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsV0FBVyxFQUNULDJEQUEyRDs2QkFDOUQ7NEJBQ0QsYUFBYSxFQUFFO2dDQUNiLElBQUksRUFBRSxRQUFROzZCQUNmO3lCQUNGO3dCQUNELFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7cUJBQzlCO29CQUNELE1BQU0sRUFBRTt3QkFDTjs0QkFDRSxLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsR0FBRyxFQUFFLE9BQU87aUNBQ2I7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLFdBQVc7aUNBQ2pCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxXQUFXO2lDQUNqQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsVUFBVTtpQ0FDaEI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtvQ0FDeEIsSUFBSSxFQUFFLFVBQVU7aUNBQ2pCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxxQkFBcUI7b0NBQzFCLElBQUksRUFBRSxVQUFVO2lDQUNqQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsZUFBZTtpQ0FDckI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLE9BQU87aUNBQ2I7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLFFBQVE7aUNBQ2Q7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFFBQVEsRUFBRSxPQUFPO29CQUNqQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDMUIsSUFBSSxFQUNGLGtuQkFBa25CO29CQUNwbkIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLGVBQWUsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7NEJBQ3hDLGdCQUFnQixFQUFFLEVBQUU7NEJBQ3BCLGFBQWEsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQzs0QkFDM0QsYUFBYSxFQUFFLEVBQUU7NEJBQ2pCLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7NEJBQ3hELGdCQUFnQixFQUFFLEVBQUU7eUJBQ3JCO3FCQUNGO29CQUNELFNBQVMsRUFBRSxLQUFLO29CQUNoQixhQUFhLEVBQUUsSUFBSTtvQkFDbkIsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxRQUFRO3dCQUNkLFVBQVUsRUFBRTs0QkFDVixTQUFTLEVBQUU7Z0NBQ1QsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUFFLG9DQUFvQzs2QkFDbEQ7NEJBQ0QsYUFBYSxFQUFFO2dDQUNiLElBQUksRUFBRSxTQUFTO2dDQUNmLFdBQVcsRUFDVCx1S0FBdUs7NkJBQzFLOzRCQUNELElBQUksRUFBRTtnQ0FDSixJQUFJLEVBQUUsU0FBUztnQ0FDZixXQUFXLEVBQ1QscUpBQXFKOzZCQUN4Sjs0QkFDRCxRQUFRLEVBQUU7Z0NBQ1IsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsV0FBVyxFQUFFLDBDQUEwQzs2QkFDeEQ7NEJBQ0QsaUJBQWlCLEVBQUU7Z0NBQ2pCLElBQUksRUFBRSxRQUFRO2dDQUNkLFdBQVcsRUFDVCxrRkFBa0Y7NkJBQ3JGOzRCQUNELG1CQUFtQixFQUFFO2dDQUNuQixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxXQUFXLEVBQ1QscUVBQXFFOzZCQUN4RTs0QkFDRCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUNULG9EQUFvRDs2QkFDdkQ7NEJBQ0QsUUFBUSxFQUFFO2dDQUNSLElBQUksRUFBRSxRQUFRO2dDQUNkLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDOzZCQUM5Qjs0QkFDRCxTQUFTLEVBQUU7Z0NBQ1QsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsV0FBVyxFQUNULDhLQUE4Szs2QkFDakw7NEJBQ0QsU0FBUyxFQUFFO2dDQUNULElBQUksRUFBRSxTQUFTO2dDQUNmLFdBQVcsRUFDVCwyREFBMkQ7NkJBQzlEOzRCQUNELElBQUksRUFBRTtnQ0FDSixJQUFJLEVBQUUsT0FBTztnQ0FDYixXQUFXLEVBQUUsa0JBQWtCO2dDQUMvQixLQUFLLEVBQUU7b0NBQ0wsSUFBSSxFQUFFLFFBQVE7b0NBQ2QsVUFBVSxFQUFFO3dDQUNWLEdBQUcsRUFBRTs0Q0FDSCxJQUFJLEVBQUUsUUFBUTt5Q0FDZjtxQ0FDRjtvQ0FDRCxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUNBQ2xCOzZCQUNGO3lCQUNGO3dCQUNELFFBQVEsRUFBRTs0QkFDUixPQUFPOzRCQUNQLG1CQUFtQjs0QkFDbkIsV0FBVzs0QkFDWCxlQUFlO3lCQUNoQjtxQkFDRjtvQkFDRCxNQUFNLEVBQUU7d0JBQ047NEJBQ0UsS0FBSyxFQUFFO2dDQUNMO29DQUNFLEdBQUcsRUFBRSxPQUFPO2lDQUNiO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxXQUFXO2lDQUNqQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsV0FBVztpQ0FDakI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLFVBQVU7aUNBQ2hCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxtQkFBbUI7b0NBQ3hCLElBQUksRUFBRSxVQUFVO2lDQUNqQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUscUJBQXFCO29DQUMxQixJQUFJLEVBQUUsVUFBVTtpQ0FDakI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLFVBQVU7aUNBQ2hCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxXQUFXO2lDQUNqQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsTUFBTTtpQ0FDWjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsZUFBZTtpQ0FDckI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLE1BQU07b0NBQ1gsSUFBSSxFQUFFLE9BQU87b0NBQ2IsS0FBSyxFQUFFO3dDQUNMOzRDQUNFLEdBQUcsRUFBRSxZQUFZOzRDQUNqQixPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsS0FBSzt5Q0FDbkI7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFFBQVEsRUFBRSxPQUFPO29CQUNqQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFFMUIsSUFBSSxFQUNGLHNhQUFzYTtvQkFDeGEsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUM7NEJBQ3hDLGdCQUFnQixFQUFFLEVBQUU7NEJBQ3BCLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDMUIsYUFBYSxFQUFFLEVBQUU7NEJBQ2pCLGdCQUFnQixFQUFFLEVBQUU7NEJBQ3BCLGdCQUFnQixFQUFFLEVBQUU7eUJBQ3JCO3FCQUNGO29CQUNELFNBQVMsRUFBRSxLQUFLO29CQUNoQixhQUFhLEVBQUUsSUFBSTtvQkFDbkIsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxRQUFRO3dCQUNkLFVBQVUsRUFBRTs0QkFDVixTQUFTLEVBQUU7Z0NBQ1QsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUFFLG9DQUFvQzs2QkFDbEQ7NEJBQ0QsUUFBUSxFQUFFO2dDQUNSLElBQUksRUFBRSxTQUFTO2dDQUNmLFdBQVcsRUFBRSwwQ0FBMEM7NkJBQ3hEOzRCQUNELEtBQUssRUFBRTtnQ0FDTCxJQUFJLEVBQUUsUUFBUTtnQ0FDZCxXQUFXLEVBQ1Qsb0RBQW9EOzZCQUN2RDs0QkFDRCxTQUFTLEVBQUU7Z0NBQ1QsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsV0FBVyxFQUNULDhLQUE4Szs2QkFDakw7NEJBQ0QsU0FBUyxFQUFFO2dDQUNULElBQUksRUFBRSxTQUFTO2dDQUNmLFdBQVcsRUFDVCwyREFBMkQ7NkJBQzlEOzRCQUNELGlCQUFpQixFQUFFO2dDQUNqQixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxXQUFXLEVBQ1Qsa0ZBQWtGOzZCQUNyRjs0QkFDRCxtQkFBbUIsRUFBRTtnQ0FDbkIsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUNULHFFQUFxRTs2QkFDeEU7eUJBQ0Y7d0JBQ0QsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztxQkFDcEM7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOOzRCQUNFLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxHQUFHLEVBQUUsT0FBTztpQ0FDYjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsV0FBVztpQ0FDakI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLFdBQVc7aUNBQ2pCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxVQUFVO2lDQUNoQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsbUJBQW1CO29DQUN4QixJQUFJLEVBQUUsVUFBVTtpQ0FDakI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLHFCQUFxQjtvQ0FDMUIsSUFBSSxFQUFFLFVBQVU7aUNBQ2pCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxXQUFXO2lDQUNqQjs2QkFDRjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixRQUFRLEVBQUUsT0FBTztvQkFDakIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQzFCLElBQUksRUFDRixxU0FBcVM7b0JBQ3ZTLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxlQUFlLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDOzRCQUN4QyxnQkFBZ0IsRUFBRSxFQUFFOzRCQUNwQixhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQzFCLGFBQWEsRUFBRSxFQUFFOzRCQUNqQixnQkFBZ0IsRUFBRSxFQUFFOzRCQUNwQixnQkFBZ0IsRUFBRSxFQUFFO3lCQUNyQjtxQkFDRjtvQkFDRCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsYUFBYSxFQUFFLElBQUk7b0JBQ25CLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsUUFBUTt3QkFDZCxVQUFVLEVBQUU7NEJBQ1YsU0FBUyxFQUFFO2dDQUNULElBQUksRUFBRSxRQUFRO2dDQUNkLFdBQVcsRUFBRSxvQ0FBb0M7NkJBQ2xEOzRCQUNELFFBQVEsRUFBRTtnQ0FDUixJQUFJLEVBQUUsU0FBUztnQ0FDZixXQUFXLEVBQUUsMENBQTBDOzZCQUN4RDs0QkFDRCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsV0FBVyxFQUNULG9EQUFvRDs2QkFDdkQ7NEJBQ0QsUUFBUSxFQUFFO2dDQUNSLElBQUksRUFBRSxRQUFRO2dDQUNkLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDOzZCQUM5Qjs0QkFDRCxTQUFTLEVBQUU7Z0NBQ1QsSUFBSSxFQUFFLFNBQVM7Z0NBQ2YsV0FBVyxFQUNULDJEQUEyRDs2QkFDOUQ7NEJBQ0QsaUJBQWlCLEVBQUU7Z0NBQ2pCLElBQUksRUFBRSxRQUFROzZCQUNmOzRCQUNELG1CQUFtQixFQUFFO2dDQUNuQixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxXQUFXLEVBQ1QscUVBQXFFOzZCQUN4RTs0QkFDRCxTQUFTLEVBQUU7Z0NBQ1QsSUFBSSxFQUFFLFNBQVM7NkJBQ2hCO3lCQUNGO3dCQUNELFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQztxQkFDdkI7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOOzRCQUNFLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxHQUFHLEVBQUUsT0FBTztpQ0FDYjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsV0FBVztpQ0FDakI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLFdBQVc7aUNBQ2pCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxVQUFVO2lDQUNoQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsbUJBQW1CO29DQUN4QixJQUFJLEVBQUUsVUFBVTtpQ0FDakI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLHFCQUFxQjtvQ0FDMUIsSUFBSSxFQUFFLFVBQVU7aUNBQ2pCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxVQUFVO2lDQUNoQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsV0FBVztpQ0FDakI7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLFVBQVUsRUFBRTtnQkFDVjtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUU7d0JBQ0wsY0FBYzt3QkFDZCx5QkFBeUI7d0JBQ3pCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsSUFBSSxFQUNGLDA0QkFBMDRCO29CQUM1NEIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO29CQUN6RCxhQUFhLEVBQUUsS0FBSztvQkFDcEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsVUFBVSxFQUFFLEVBQUU7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsSUFBSSxFQUNGLGtNQUFrTTtvQkFDcE0sT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO29CQUN6RCxhQUFhLEVBQUUsS0FBSztvQkFDcEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsVUFBVSxFQUFFLEVBQUU7aUJBQ2Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRTtnQkFDVjtvQkFDRSxJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUNGLDZNQUE2TTtvQkFDL00sT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjthQUNGO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsVUFBVSxFQUFFO2dCQUNWO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQ0Ysa0tBQWtLO29CQUNwSyxTQUFTLEVBQUUsSUFBSTtvQkFDZixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO29CQUM5QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQ0YsczBCQUFzMEI7b0JBQ3gwQixTQUFTLEVBQUUsSUFBSTtvQkFDZixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjthQUNGO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsVUFBVSxFQUFFO2dCQUNWO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQ0Ysa0tBQWtLO29CQUNwSyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQ0YsczBCQUFzMEI7b0JBQ3gwQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjthQUNGO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFO2dCQUNWO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQ0Ysa0tBQWtLO29CQUNwSyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQ0YsczBCQUFzMEI7b0JBQ3gwQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjthQUNGO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFO2dCQUNWO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQ0Ysa0tBQWtLO29CQUNwSyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQ0YscTBCQUFxMEI7b0JBQ3YwQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjthQUNGO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFO2dCQUNWO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQ0Ysa0tBQWtLO29CQUNwSyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQ0YsczBCQUFzMEI7b0JBQ3gwQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjthQUNGO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFO2dCQUNWO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQ0Ysa0tBQWtLO29CQUNwSyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQ0YsczBCQUFzMEI7b0JBQ3gwQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO29CQUN6QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDZjthQUNGO1NBQ0Y7S0FDRjtDQUNGOztBQUVELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRztJQUM5QixJQUFJLEVBQUUseUJBQXlCO0lBQy9CLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFNBQVMsRUFBRTtRQUNUO1lBQ0UsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxJQUFJLEVBQUUsWUFBWTtvQkFDbEIsS0FBSyxFQUFFLFlBQVk7aUJBQ3BCO2dCQUNEO29CQUNFLElBQUksRUFBRSxTQUFTO29CQUNmLEtBQUssRUFBRSxTQUFTO2lCQUNqQjthQUNGO1lBQ0QsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsUUFBUTtxQkFDZjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNELGVBQWUsRUFBRTt3QkFDZixJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO3FCQUNqQztvQkFDRCxXQUFXLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLFFBQVE7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRTs0QkFDTCxJQUFJLEVBQUUsUUFBUTs0QkFDZCxVQUFVLEVBQUU7Z0NBQ1YsSUFBSSxFQUFFO29DQUNKLElBQUksRUFBRSxRQUFRO2lDQUNmO2dDQUNELFFBQVEsRUFBRTtvQ0FDUixJQUFJLEVBQUUsUUFBUTtpQ0FDZjtnQ0FDRCxZQUFZLEVBQUU7b0NBQ1osSUFBSSxFQUFFLE9BQU87b0NBQ2IsS0FBSyxFQUFFO3dDQUNMLElBQUksRUFBRSxRQUFRO3dDQUNkLFVBQVUsRUFBRTs0Q0FDVixHQUFHLEVBQUU7Z0RBQ0gsSUFBSSxFQUFFLFFBQVE7NkNBQ2Y7NENBQ0QsVUFBVSxFQUFFO2dEQUNWLElBQUksRUFBRSxRQUFRO2dEQUNkLElBQUksRUFBRTtvREFDSixLQUFLO29EQUNMLE1BQU07b0RBQ04sS0FBSztvREFDTCxNQUFNO29EQUNOLFFBQVE7b0RBQ1IsU0FBUztvREFDVCxTQUFTO2lEQUNWOzZDQUNGOzRDQUNELFdBQVcsRUFBRTtnREFDWCxJQUFJLEVBQUUsU0FBUzs2Q0FDaEI7NENBQ0QsU0FBUyxFQUFFO2dEQUNULElBQUksRUFBRSxRQUFRO2dEQUNkLFVBQVUsRUFBRTtvREFDVixVQUFVLEVBQUU7d0RBQ1YsSUFBSSxFQUFFLFFBQVE7cURBQ2Y7b0RBQ0QsY0FBYyxFQUFFO3dEQUNkLElBQUksRUFBRSxRQUFRO3dEQUNkLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7cURBQzNCO29EQUNELGVBQWUsRUFBRTt3REFDZixJQUFJLEVBQUUsT0FBTzt3REFDYixLQUFLLEVBQUU7NERBQ0wsSUFBSSxFQUFFLFFBQVE7eURBQ2Y7cURBQ0Y7aURBQ0Y7NkNBQ0Y7eUNBQ0Y7cUNBQ0Y7aUNBQ0Y7Z0NBQ0QsT0FBTyxFQUFFO29DQUNQLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTCxJQUFJLEVBQUUsUUFBUTt3Q0FDZCxVQUFVLEVBQUU7NENBQ1YsSUFBSSxFQUFFO2dEQUNKLElBQUksRUFBRSxRQUFROzZDQUNmOzRDQUNELGNBQWMsRUFBRTtnREFDZCxJQUFJLEVBQUUsUUFBUTtnREFDZCxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDOzZDQUN0RDt5Q0FDRjtxQ0FDRjtpQ0FDRjs2QkFDRjt5QkFDRjtxQkFDRjtvQkFDRCxxQkFBcUIsRUFBRTt3QkFDckIsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsVUFBVSxFQUFFOzRCQUNWLEVBQUUsRUFBRTtnQ0FDRixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxPQUFPLEVBQUUsQ0FBQztnQ0FDVixPQUFPLEVBQUUsRUFBRTs2QkFDWjs0QkFDRCxFQUFFLEVBQUU7Z0NBQ0YsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsT0FBTyxFQUFFLEVBQUU7NkJBQ1o7NEJBQ0QsRUFBRSxFQUFFO2dDQUNGLElBQUksRUFBRSxRQUFRO2dDQUNkLE9BQU8sRUFBRSxDQUFDO2dDQUNWLE9BQU8sRUFBRSxFQUFFOzZCQUNaOzRCQUNELEVBQUUsRUFBRTtnQ0FDRixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxPQUFPLEVBQUUsQ0FBQztnQ0FDVixPQUFPLEVBQUUsRUFBRTs2QkFDWjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRCxRQUFRLEVBQUUsRUFBRTthQUNiO1lBQ0QsTUFBTSxFQUFFO2dCQUNOO29CQUNFLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxHQUFHLEVBQUUsT0FBTzt5QkFDYjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsaUJBQWlCO3lCQUN2Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMEJBQTBCO3lCQUNoQzt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMEJBQTBCO3lCQUNoQzt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMEJBQTBCO3lCQUNoQzt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMEJBQTBCO3lCQUNoQzt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsU0FBUzs0QkFDZCxJQUFJLEVBQUUsT0FBTzs0QkFDYixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsR0FBRyxFQUFFLGdCQUFnQjtvQ0FDckIsT0FBTyxFQUFFLElBQUk7b0NBQ2IsV0FBVyxFQUFFLE1BQU07aUNBQ3BCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxvQkFBb0I7b0NBQ3pCLE9BQU8sRUFBRSxJQUFJO29DQUNiLFdBQVcsRUFBRSxVQUFVO2lDQUN4QjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsd0JBQXdCO29DQUM3QixJQUFJLEVBQUUsT0FBTztvQ0FDYixLQUFLLEVBQUU7d0NBQ0w7NENBQ0UsR0FBRyxFQUFFLDhCQUE4Qjs0Q0FDbkMsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLEtBQUs7eUNBQ25CO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxxQ0FBcUM7NENBQzFDLE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxhQUFhO3lDQUMzQjt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUsK0NBQStDOzRDQUNwRCxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsc0JBQXNCO3lDQUNwQzt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUsbURBQW1EOzRDQUN4RCxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsMkJBQTJCO3lDQUN6Qzt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUsb0RBQW9EOzRDQUN6RCxJQUFJLEVBQUUsT0FBTzs0Q0FDYixLQUFLLEVBQUU7Z0RBQ0w7b0RBQ0UsR0FBRyxFQUNELHNEQUFzRDtvREFDeEQsT0FBTyxFQUFFLElBQUk7b0RBQ2IsV0FBVyxFQUFFLGtCQUFrQjtpREFDaEM7NkNBQ0Y7eUNBQ0Y7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLHNDQUFzQzs0Q0FDM0MsS0FBSyxFQUFFLGNBQWM7NENBQ3JCLFdBQVcsRUFBRSxjQUFjO3lDQUM1QjtxQ0FDRjtpQ0FDRjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsbUJBQW1CO29DQUN4QixJQUFJLEVBQUUsT0FBTztvQ0FDYixLQUFLLEVBQUU7d0NBQ0w7NENBQ0UsR0FBRyxFQUFFLDBCQUEwQjs0Q0FDL0IsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLGFBQWE7eUNBQzNCO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxvQ0FBb0M7NENBQ3pDLE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxpQkFBaUI7eUNBQy9CO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxXQUFXO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7UUFDRDtZQUNFLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLElBQUksRUFBRSxVQUFVO1lBQ2hCLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsUUFBUTtvQkFDZixRQUFRLEVBQUU7d0JBQ1I7NEJBQ0UsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLEtBQUssRUFBRSxZQUFZO3lCQUNwQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsU0FBUzs0QkFDZixLQUFLLEVBQUUsU0FBUzt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLE1BQU07b0JBQ2IsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLElBQUksRUFBRSxTQUFTOzRCQUNmLEtBQUssRUFBRSxTQUFTO3lCQUNqQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsU0FBUzs0QkFDZixLQUFLLEVBQUUsU0FBUzt5QkFDakI7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLFVBQVUsRUFBRTtvQkFDVixLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLFFBQVE7cUJBQ2Y7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztxQkFDakM7b0JBQ0QsV0FBVyxFQUFFO3dCQUNYLElBQUksRUFBRSxRQUFRO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUU7NEJBQ0wsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsVUFBVSxFQUFFO2dDQUNWLElBQUksRUFBRTtvQ0FDSixJQUFJLEVBQUUsUUFBUTtpQ0FDZjtnQ0FDRCxRQUFRLEVBQUU7b0NBQ1IsSUFBSSxFQUFFLFFBQVE7aUNBQ2Y7Z0NBQ0QsWUFBWSxFQUFFO29DQUNaLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTCxJQUFJLEVBQUUsUUFBUTt3Q0FDZCxVQUFVLEVBQUU7NENBQ1YsR0FBRyxFQUFFO2dEQUNILElBQUksRUFBRSxRQUFROzZDQUNmOzRDQUNELFVBQVUsRUFBRTtnREFDVixJQUFJLEVBQUUsUUFBUTtnREFDZCxJQUFJLEVBQUU7b0RBQ0osS0FBSztvREFDTCxNQUFNO29EQUNOLEtBQUs7b0RBQ0wsTUFBTTtvREFDTixRQUFRO29EQUNSLFNBQVM7b0RBQ1QsU0FBUztpREFDVjs2Q0FDRjs0Q0FDRCxXQUFXLEVBQUU7Z0RBQ1gsSUFBSSxFQUFFLFNBQVM7NkNBQ2hCOzRDQUNELFNBQVMsRUFBRTtnREFDVCxJQUFJLEVBQUUsUUFBUTtnREFDZCxVQUFVLEVBQUU7b0RBQ1YsVUFBVSxFQUFFO3dEQUNWLElBQUksRUFBRSxRQUFRO3FEQUNmO29EQUNELGNBQWMsRUFBRTt3REFDZCxJQUFJLEVBQUUsUUFBUTt3REFDZCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO3FEQUMzQjtvREFDRCxlQUFlLEVBQUU7d0RBQ2YsSUFBSSxFQUFFLE9BQU87d0RBQ2IsS0FBSyxFQUFFOzREQUNMLElBQUksRUFBRSxRQUFRO3lEQUNmO3FEQUNGO2lEQUNGOzZDQUNGO3lDQUNGO3FDQUNGO2lDQUNGO2dDQUNELE9BQU8sRUFBRTtvQ0FDUCxJQUFJLEVBQUUsT0FBTztvQ0FDYixLQUFLLEVBQUU7d0NBQ0wsSUFBSSxFQUFFLFFBQVE7d0NBQ2QsVUFBVSxFQUFFOzRDQUNWLElBQUksRUFBRTtnREFDSixJQUFJLEVBQUUsUUFBUTs2Q0FDZjs0Q0FDRCxjQUFjLEVBQUU7Z0RBQ2QsSUFBSSxFQUFFLFFBQVE7Z0RBQ2QsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQzs2Q0FDdEQ7eUNBQ0Y7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7b0JBQ0QscUJBQXFCLEVBQUU7d0JBQ3JCLElBQUksRUFBRSxRQUFRO3dCQUNkLFVBQVUsRUFBRTs0QkFDVixFQUFFLEVBQUU7Z0NBQ0YsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsT0FBTyxFQUFFLEVBQUU7NkJBQ1o7NEJBQ0QsRUFBRSxFQUFFO2dDQUNGLElBQUksRUFBRSxRQUFRO2dDQUNkLE9BQU8sRUFBRSxDQUFDO2dDQUNWLE9BQU8sRUFBRSxFQUFFOzZCQUNaOzRCQUNELEVBQUUsRUFBRTtnQ0FDRixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxPQUFPLEVBQUUsQ0FBQztnQ0FDVixPQUFPLEVBQUUsRUFBRTs2QkFDWjs0QkFDRCxFQUFFLEVBQUU7Z0NBQ0YsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsT0FBTyxFQUFFLEVBQUU7NkJBQ1o7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7YUFDYjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsR0FBRyxFQUFFLE9BQU87eUJBQ2I7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLGlCQUFpQjt5QkFDdkI7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDBCQUEwQjt5QkFDaEM7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDBCQUEwQjt5QkFDaEM7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDBCQUEwQjt5QkFDaEM7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDBCQUEwQjt5QkFDaEM7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLFNBQVM7NEJBQ2QsSUFBSSxFQUFFLE9BQU87NEJBQ2IsS0FBSyxFQUFFO2dDQUNMO29DQUNFLEdBQUcsRUFBRSxnQkFBZ0I7b0NBQ3JCLE9BQU8sRUFBRSxJQUFJO29DQUNiLFdBQVcsRUFBRSxNQUFNO2lDQUNwQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsb0JBQW9CO29DQUN6QixPQUFPLEVBQUUsSUFBSTtvQ0FDYixXQUFXLEVBQUUsVUFBVTtpQ0FDeEI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLHdCQUF3QjtvQ0FDN0IsSUFBSSxFQUFFLE9BQU87b0NBQ2IsS0FBSyxFQUFFO3dDQUNMOzRDQUNFLEdBQUcsRUFBRSw4QkFBOEI7NENBQ25DLE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxLQUFLO3lDQUNuQjt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUscUNBQXFDOzRDQUMxQyxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsYUFBYTt5Q0FDM0I7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLCtDQUErQzs0Q0FDcEQsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLHNCQUFzQjt5Q0FDcEM7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLG1EQUFtRDs0Q0FDeEQsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLDJCQUEyQjt5Q0FDekM7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLG9EQUFvRDs0Q0FDekQsSUFBSSxFQUFFLE9BQU87NENBQ2IsS0FBSyxFQUFFO2dEQUNMO29EQUNFLEdBQUcsRUFDRCxzREFBc0Q7b0RBQ3hELE9BQU8sRUFBRSxJQUFJO29EQUNiLFdBQVcsRUFBRSxrQkFBa0I7aURBQ2hDOzZDQUNGO3lDQUNGO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxzQ0FBc0M7NENBQzNDLEtBQUssRUFBRSxjQUFjOzRDQUNyQixXQUFXLEVBQUUsY0FBYzt5Q0FDNUI7cUNBQ0Y7aUNBQ0Y7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtvQ0FDeEIsSUFBSSxFQUFFLE9BQU87b0NBQ2IsS0FBSyxFQUFFO3dDQUNMOzRDQUNFLEdBQUcsRUFBRSwwQkFBMEI7NENBQy9CLE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxhQUFhO3lDQUMzQjt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUsb0NBQW9DOzRDQUN6QyxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsaUJBQWlCO3lDQUMvQjtxQ0FDRjtpQ0FDRjs2QkFDRjt5QkFDRjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsV0FBVzt5QkFDakI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxRQUFRLEVBQUUsUUFBUTtZQUNsQixJQUFJLEVBQUUsUUFBUTtZQUNkLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsU0FBUztpQkFDakI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2FBQ0Y7WUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFO3dCQUNMLElBQUksRUFBRSxRQUFRO3FCQUNmO29CQUNELFNBQVMsRUFBRTt3QkFDVCxJQUFJLEVBQUUsU0FBUztxQkFDaEI7b0JBQ0QsaUJBQWlCLEVBQUU7d0JBQ2pCLElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRCxRQUFRLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNELGFBQWEsRUFBRTt3QkFDYixJQUFJLEVBQUUsU0FBUztxQkFDaEI7b0JBQ0QsVUFBVSxFQUFFO3dCQUNWLElBQUksRUFBRSxRQUFRO3dCQUNkLFVBQVUsRUFBRTs0QkFDVixRQUFRLEVBQUU7Z0NBQ1IsSUFBSSxFQUFFLFFBQVE7NkJBQ2Y7NEJBQ0QsU0FBUyxFQUFFO2dDQUNULElBQUksRUFBRSxTQUFTOzZCQUNoQjs0QkFDRCxRQUFRLEVBQUU7Z0NBQ1IsSUFBSSxFQUFFLFFBQVE7NkJBQ2Y7NEJBQ0QsaUJBQWlCLEVBQUU7Z0NBQ2pCLElBQUksRUFBRSxPQUFPO2dDQUNiLEtBQUssRUFBRTtvQ0FDTCxJQUFJLEVBQUUsUUFBUTtpQ0FDZjs2QkFDRjt5QkFDRjtxQkFDRjtvQkFDRCxXQUFXLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLFFBQVE7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRTs0QkFDTCxJQUFJLEVBQUUsUUFBUTs0QkFDZCxVQUFVLEVBQUU7Z0NBQ1YsSUFBSSxFQUFFO29DQUNKLElBQUksRUFBRSxRQUFRO2lDQUNmO2dDQUNELFFBQVEsRUFBRTtvQ0FDUixJQUFJLEVBQUUsUUFBUTtpQ0FDZjtnQ0FDRCxZQUFZLEVBQUU7b0NBQ1osSUFBSSxFQUFFLE9BQU87b0NBQ2IsS0FBSyxFQUFFO3dDQUNMLElBQUksRUFBRSxRQUFRO3dDQUNkLFVBQVUsRUFBRTs0Q0FDVixHQUFHLEVBQUU7Z0RBQ0gsSUFBSSxFQUFFLFFBQVE7NkNBQ2Y7NENBQ0QsVUFBVSxFQUFFO2dEQUNWLElBQUksRUFBRSxRQUFRO2dEQUNkLElBQUksRUFBRTtvREFDSixLQUFLO29EQUNMLE1BQU07b0RBQ04sS0FBSztvREFDTCxNQUFNO29EQUNOLFFBQVE7b0RBQ1IsU0FBUztvREFDVCxTQUFTO2lEQUNWOzZDQUNGOzRDQUNELFdBQVcsRUFBRTtnREFDWCxJQUFJLEVBQUUsU0FBUzs2Q0FDaEI7NENBQ0QsU0FBUyxFQUFFO2dEQUNULElBQUksRUFBRSxRQUFRO2dEQUNkLFVBQVUsRUFBRTtvREFDVixVQUFVLEVBQUU7d0RBQ1YsSUFBSSxFQUFFLFFBQVE7cURBQ2Y7b0RBQ0QsY0FBYyxFQUFFO3dEQUNkLElBQUksRUFBRSxRQUFRO3dEQUNkLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7cURBQzNCO29EQUNELGVBQWUsRUFBRTt3REFDZixJQUFJLEVBQUUsT0FBTzt3REFDYixLQUFLLEVBQUU7NERBQ0wsSUFBSSxFQUFFLFFBQVE7eURBQ2Y7cURBQ0Y7aURBQ0Y7NkNBQ0Y7eUNBQ0Y7cUNBQ0Y7aUNBQ0Y7Z0NBQ0QsT0FBTyxFQUFFO29DQUNQLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTCxJQUFJLEVBQUUsUUFBUTt3Q0FDZCxVQUFVLEVBQUU7NENBQ1YsSUFBSSxFQUFFO2dEQUNKLElBQUksRUFBRSxRQUFROzZDQUNmOzRDQUNELGNBQWMsRUFBRTtnREFDZCxJQUFJLEVBQUUsUUFBUTtnREFDZCxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDOzZDQUN0RDt5Q0FDRjtxQ0FDRjtpQ0FDRjs2QkFDRjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRCxRQUFRLEVBQUUsRUFBRTthQUNiO1lBQ0QsTUFBTSxFQUFFO2dCQUNOO29CQUNFLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxHQUFHLEVBQUUsT0FBTzt5QkFDYjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUscUJBQXFCO3lCQUMzQjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUscUJBQXFCO3lCQUMzQjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsOEJBQThCOzRCQUNuQyxJQUFJLEVBQUUsT0FBTzs0QkFDYixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsR0FBRyxFQUFFLGdDQUFnQztvQ0FDckMsV0FBVyxFQUFFLG9CQUFvQjtpQ0FDbEM7NkJBQ0Y7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLFNBQVM7NEJBQ2QsSUFBSSxFQUFFLE9BQU87NEJBQ2IsS0FBSyxFQUFFO2dDQUNMO29DQUNFLEdBQUcsRUFBRSxnQkFBZ0I7b0NBQ3JCLE9BQU8sRUFBRSxJQUFJO29DQUNiLFdBQVcsRUFBRSxNQUFNO2lDQUNwQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsb0JBQW9CO29DQUN6QixPQUFPLEVBQUUsSUFBSTtvQ0FDYixXQUFXLEVBQUUsVUFBVTtpQ0FDeEI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLHdCQUF3QjtvQ0FDN0IsSUFBSSxFQUFFLE9BQU87b0NBQ2IsS0FBSyxFQUFFO3dDQUNMOzRDQUNFLEdBQUcsRUFBRSw4QkFBOEI7NENBQ25DLE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxLQUFLO3lDQUNuQjt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUscUNBQXFDOzRDQUMxQyxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsYUFBYTt5Q0FDM0I7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLCtDQUErQzs0Q0FDcEQsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLHNCQUFzQjt5Q0FDcEM7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLG1EQUFtRDs0Q0FDeEQsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLDJCQUEyQjt5Q0FDekM7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLG9EQUFvRDs0Q0FDekQsSUFBSSxFQUFFLE9BQU87NENBQ2IsS0FBSyxFQUFFO2dEQUNMO29EQUNFLEdBQUcsRUFDRCxzREFBc0Q7b0RBQ3hELE9BQU8sRUFBRSxJQUFJO29EQUNiLFdBQVcsRUFBRSxrQkFBa0I7aURBQ2hDOzZDQUNGO3lDQUNGO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxzQ0FBc0M7NENBQzNDLEtBQUssRUFBRSxjQUFjOzRDQUNyQixXQUFXLEVBQUUsY0FBYzt5Q0FDNUI7cUNBQ0Y7aUNBQ0Y7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtvQ0FDeEIsSUFBSSxFQUFFLE9BQU87b0NBQ2IsS0FBSyxFQUFFO3dDQUNMOzRDQUNFLEdBQUcsRUFBRSwwQkFBMEI7NENBQy9CLE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxhQUFhO3lDQUMzQjt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUsb0NBQW9DOzRDQUN6QyxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsaUJBQWlCO3lDQUMvQjtxQ0FDRjtpQ0FDRjs2QkFDRjt5QkFDRjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsc0JBQXNCO3lCQUM1Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsbUJBQW1CO3lCQUN6Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsVUFBVTt5QkFDaEI7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLGVBQWU7eUJBQ3JCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGFBQWE7WUFDbkIsS0FBSyxFQUFFLGNBQWM7WUFDckIsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFBRSxZQUFZO29CQUNsQixLQUFLLEVBQUUsWUFBWTtpQkFDcEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2FBQ0Y7WUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFO3dCQUNMLElBQUksRUFBRSxRQUFRO3FCQUNmO29CQUNELGVBQWUsRUFBRTt3QkFDZixJQUFJLEVBQUUsUUFBUTtxQkFDZjtvQkFDRCxXQUFXLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLFFBQVE7cUJBQ2Y7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRCxhQUFhLEVBQUU7d0JBQ2IsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNELGVBQWUsRUFBRTt3QkFDZixJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO3FCQUNqQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsSUFBSSxFQUFFLE9BQU87d0JBQ2IsS0FBSyxFQUFFOzRCQUNMLElBQUksRUFBRSxRQUFROzRCQUNkLFVBQVUsRUFBRTtnQ0FDVixJQUFJLEVBQUU7b0NBQ0osSUFBSSxFQUFFLFFBQVE7aUNBQ2Y7Z0NBQ0QsUUFBUSxFQUFFO29DQUNSLElBQUksRUFBRSxRQUFRO2lDQUNmO2dDQUNELFlBQVksRUFBRTtvQ0FDWixJQUFJLEVBQUUsT0FBTztvQ0FDYixLQUFLLEVBQUU7d0NBQ0wsSUFBSSxFQUFFLFFBQVE7d0NBQ2QsVUFBVSxFQUFFOzRDQUNWLEdBQUcsRUFBRTtnREFDSCxJQUFJLEVBQUUsUUFBUTs2Q0FDZjs0Q0FDRCxVQUFVLEVBQUU7Z0RBQ1YsSUFBSSxFQUFFLFFBQVE7Z0RBQ2QsSUFBSSxFQUFFO29EQUNKLEtBQUs7b0RBQ0wsTUFBTTtvREFDTixLQUFLO29EQUNMLE1BQU07b0RBQ04sUUFBUTtvREFDUixTQUFTO29EQUNULFNBQVM7aURBQ1Y7NkNBQ0Y7NENBQ0QsV0FBVyxFQUFFO2dEQUNYLElBQUksRUFBRSxTQUFTOzZDQUNoQjs0Q0FDRCxTQUFTLEVBQUU7Z0RBQ1QsSUFBSSxFQUFFLFFBQVE7Z0RBQ2QsVUFBVSxFQUFFO29EQUNWLFVBQVUsRUFBRTt3REFDVixJQUFJLEVBQUUsUUFBUTtxREFDZjtvREFDRCxjQUFjLEVBQUU7d0RBQ2QsSUFBSSxFQUFFLFFBQVE7d0RBQ2QsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztxREFDM0I7b0RBQ0QsZUFBZSxFQUFFO3dEQUNmLElBQUksRUFBRSxPQUFPO3dEQUNiLEtBQUssRUFBRTs0REFDTCxJQUFJLEVBQUUsUUFBUTt5REFDZjtxREFDRjtpREFDRjs2Q0FDRjt5Q0FDRjtxQ0FDRjtpQ0FDRjtnQ0FDRCxPQUFPLEVBQUU7b0NBQ1AsSUFBSSxFQUFFLE9BQU87b0NBQ2IsS0FBSyxFQUFFO3dDQUNMLElBQUksRUFBRSxRQUFRO3dDQUNkLFVBQVUsRUFBRTs0Q0FDVixJQUFJLEVBQUU7Z0RBQ0osSUFBSSxFQUFFLFFBQVE7NkNBQ2Y7NENBQ0QsY0FBYyxFQUFFO2dEQUNkLElBQUksRUFBRSxRQUFRO2dEQUNkLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7NkNBQ3REO3lDQUNGO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGO3FCQUNGO29CQUNELHFCQUFxQixFQUFFO3dCQUNyQixJQUFJLEVBQUUsUUFBUTt3QkFDZCxVQUFVLEVBQUU7NEJBQ1YsRUFBRSxFQUFFO2dDQUNGLElBQUksRUFBRSxRQUFRO2dDQUNkLE9BQU8sRUFBRSxDQUFDO2dDQUNWLE9BQU8sRUFBRSxFQUFFOzZCQUNaOzRCQUNELEVBQUUsRUFBRTtnQ0FDRixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxPQUFPLEVBQUUsQ0FBQztnQ0FDVixPQUFPLEVBQUUsRUFBRTs2QkFDWjs0QkFDRCxFQUFFLEVBQUU7Z0NBQ0YsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsT0FBTyxFQUFFLEVBQUU7NkJBQ1o7NEJBQ0QsRUFBRSxFQUFFO2dDQUNGLElBQUksRUFBRSxRQUFRO2dDQUNkLE9BQU8sRUFBRSxDQUFDO2dDQUNWLE9BQU8sRUFBRSxFQUFFOzZCQUNaO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNELFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRCxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLEdBQUcsRUFBRSxPQUFPO3lCQUNiO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxpQkFBaUI7eUJBQ3ZCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxpQkFBaUI7eUJBQ3ZCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSwwQkFBMEI7eUJBQ2hDO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSwwQkFBMEI7eUJBQ2hDO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSwwQkFBMEI7eUJBQ2hDO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSwwQkFBMEI7eUJBQ2hDO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxTQUFTOzRCQUNkLElBQUksRUFBRSxPQUFPOzRCQUNiLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxHQUFHLEVBQUUsZ0JBQWdCO29DQUNyQixPQUFPLEVBQUUsSUFBSTtvQ0FDYixXQUFXLEVBQUUsTUFBTTtpQ0FDcEI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLG9CQUFvQjtvQ0FDekIsT0FBTyxFQUFFLElBQUk7b0NBQ2IsV0FBVyxFQUFFLFVBQVU7aUNBQ3hCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSx3QkFBd0I7b0NBQzdCLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTDs0Q0FDRSxHQUFHLEVBQUUsOEJBQThCOzRDQUNuQyxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsS0FBSzt5Q0FDbkI7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLHFDQUFxQzs0Q0FDMUMsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLGFBQWE7eUNBQzNCO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSwrQ0FBK0M7NENBQ3BELE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxzQkFBc0I7eUNBQ3BDO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxtREFBbUQ7NENBQ3hELE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSwyQkFBMkI7eUNBQ3pDO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxvREFBb0Q7NENBQ3pELElBQUksRUFBRSxPQUFPOzRDQUNiLEtBQUssRUFBRTtnREFDTDtvREFDRSxHQUFHLEVBQ0Qsc0RBQXNEO29EQUN4RCxPQUFPLEVBQUUsSUFBSTtvREFDYixXQUFXLEVBQUUsa0JBQWtCO2lEQUNoQzs2Q0FDRjt5Q0FDRjt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUsc0NBQXNDOzRDQUMzQyxLQUFLLEVBQUUsY0FBYzs0Q0FDckIsV0FBVyxFQUFFLGNBQWM7eUNBQzVCO3FDQUNGO2lDQUNGO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxtQkFBbUI7b0NBQ3hCLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTDs0Q0FDRSxHQUFHLEVBQUUsMEJBQTBCOzRDQUMvQixPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsYUFBYTt5Q0FDM0I7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLG9DQUFvQzs0Q0FDekMsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLGlCQUFpQjt5Q0FDL0I7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLFdBQVc7eUJBQ2pCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxlQUFlO3lCQUNyQjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNEO29CQUNFLElBQUksRUFBRSxTQUFTO29CQUNmLEtBQUssRUFBRSxTQUFTO2lCQUNqQjthQUNGO1lBQ0QsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsUUFBUTtxQkFDZjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNELGlCQUFpQixFQUFFO3dCQUNqQixJQUFJLEVBQUUsU0FBUztxQkFDaEI7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSLElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRCxhQUFhLEVBQUU7d0JBQ2IsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNELFVBQVUsRUFBRTt3QkFDVixJQUFJLEVBQUUsUUFBUTt3QkFDZCxVQUFVLEVBQUU7NEJBQ1YsUUFBUSxFQUFFO2dDQUNSLElBQUksRUFBRSxRQUFROzZCQUNmOzRCQUNELFNBQVMsRUFBRTtnQ0FDVCxJQUFJLEVBQUUsU0FBUzs2QkFDaEI7NEJBQ0QsUUFBUSxFQUFFO2dDQUNSLElBQUksRUFBRSxRQUFROzZCQUNmOzRCQUNELGlCQUFpQixFQUFFO2dDQUNqQixJQUFJLEVBQUUsT0FBTztnQ0FDYixLQUFLLEVBQUU7b0NBQ0wsSUFBSSxFQUFFLFFBQVE7aUNBQ2Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7b0JBQ0QsV0FBVyxFQUFFO3dCQUNYLElBQUksRUFBRSxRQUFRO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUU7NEJBQ0wsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsVUFBVSxFQUFFO2dDQUNWLElBQUksRUFBRTtvQ0FDSixJQUFJLEVBQUUsUUFBUTtpQ0FDZjtnQ0FDRCxRQUFRLEVBQUU7b0NBQ1IsSUFBSSxFQUFFLFFBQVE7aUNBQ2Y7Z0NBQ0QsWUFBWSxFQUFFO29DQUNaLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTCxJQUFJLEVBQUUsUUFBUTt3Q0FDZCxVQUFVLEVBQUU7NENBQ1YsR0FBRyxFQUFFO2dEQUNILElBQUksRUFBRSxRQUFROzZDQUNmOzRDQUNELFVBQVUsRUFBRTtnREFDVixJQUFJLEVBQUUsUUFBUTtnREFDZCxJQUFJLEVBQUU7b0RBQ0osS0FBSztvREFDTCxNQUFNO29EQUNOLEtBQUs7b0RBQ0wsTUFBTTtvREFDTixRQUFRO29EQUNSLFNBQVM7b0RBQ1QsU0FBUztpREFDVjs2Q0FDRjs0Q0FDRCxXQUFXLEVBQUU7Z0RBQ1gsSUFBSSxFQUFFLFNBQVM7NkNBQ2hCOzRDQUNELFNBQVMsRUFBRTtnREFDVCxJQUFJLEVBQUUsUUFBUTtnREFDZCxVQUFVLEVBQUU7b0RBQ1YsVUFBVSxFQUFFO3dEQUNWLElBQUksRUFBRSxRQUFRO3FEQUNmO29EQUNELGNBQWMsRUFBRTt3REFDZCxJQUFJLEVBQUUsUUFBUTt3REFDZCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO3FEQUMzQjtvREFDRCxlQUFlLEVBQUU7d0RBQ2YsSUFBSSxFQUFFLE9BQU87d0RBQ2IsS0FBSyxFQUFFOzREQUNMLElBQUksRUFBRSxRQUFRO3lEQUNmO3FEQUNGO2lEQUNGOzZDQUNGO3lDQUNGO3FDQUNGO2lDQUNGO2dDQUNELE9BQU8sRUFBRTtvQ0FDUCxJQUFJLEVBQUUsT0FBTztvQ0FDYixLQUFLLEVBQUU7d0NBQ0wsSUFBSSxFQUFFLFFBQVE7d0NBQ2QsVUFBVSxFQUFFOzRDQUNWLElBQUksRUFBRTtnREFDSixJQUFJLEVBQUUsUUFBUTs2Q0FDZjs0Q0FDRCxjQUFjLEVBQUU7Z0RBQ2QsSUFBSSxFQUFFLFFBQVE7Z0RBQ2QsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQzs2Q0FDdEQ7eUNBQ0Y7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7YUFDYjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsR0FBRyxFQUFFLE9BQU87eUJBQ2I7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLHFCQUFxQjt5QkFDM0I7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLHFCQUFxQjt5QkFDM0I7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDhCQUE4Qjs0QkFDbkMsSUFBSSxFQUFFLE9BQU87NEJBQ2IsS0FBSyxFQUFFO2dDQUNMO29DQUNFLEdBQUcsRUFBRSxnQ0FBZ0M7b0NBQ3JDLFdBQVcsRUFBRSxvQkFBb0I7aUNBQ2xDOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxTQUFTOzRCQUNkLElBQUksRUFBRSxPQUFPOzRCQUNiLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxHQUFHLEVBQUUsZ0JBQWdCO29DQUNyQixPQUFPLEVBQUUsSUFBSTtvQ0FDYixXQUFXLEVBQUUsTUFBTTtpQ0FDcEI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLG9CQUFvQjtvQ0FDekIsT0FBTyxFQUFFLElBQUk7b0NBQ2IsV0FBVyxFQUFFLFVBQVU7aUNBQ3hCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSx3QkFBd0I7b0NBQzdCLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTDs0Q0FDRSxHQUFHLEVBQUUsOEJBQThCOzRDQUNuQyxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsS0FBSzt5Q0FDbkI7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLHFDQUFxQzs0Q0FDMUMsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLGFBQWE7eUNBQzNCO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSwrQ0FBK0M7NENBQ3BELE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxzQkFBc0I7eUNBQ3BDO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxtREFBbUQ7NENBQ3hELE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSwyQkFBMkI7eUNBQ3pDO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxvREFBb0Q7NENBQ3pELElBQUksRUFBRSxPQUFPOzRDQUNiLEtBQUssRUFBRTtnREFDTDtvREFDRSxHQUFHLEVBQ0Qsc0RBQXNEO29EQUN4RCxPQUFPLEVBQUUsSUFBSTtvREFDYixXQUFXLEVBQUUsa0JBQWtCO2lEQUNoQzs2Q0FDRjt5Q0FDRjt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUsc0NBQXNDOzRDQUMzQyxLQUFLLEVBQUUsY0FBYzs0Q0FDckIsV0FBVyxFQUFFLGNBQWM7eUNBQzVCO3FDQUNGO2lDQUNGO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxtQkFBbUI7b0NBQ3hCLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTDs0Q0FDRSxHQUFHLEVBQUUsMEJBQTBCOzRDQUMvQixPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsYUFBYTt5Q0FDM0I7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLG9DQUFvQzs0Q0FDekMsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLGlCQUFpQjt5Q0FDL0I7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLHNCQUFzQjt5QkFDNUI7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLG1CQUFtQjt5QkFDekI7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLFVBQVU7eUJBQ2hCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxlQUFlO3lCQUNyQjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNEO29CQUNFLElBQUksRUFBRSxTQUFTO29CQUNmLEtBQUssRUFBRSxTQUFTO2lCQUNqQjthQUNGO1lBQ0QsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsUUFBUTtxQkFDZjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNELGlCQUFpQixFQUFFO3dCQUNqQixJQUFJLEVBQUUsU0FBUztxQkFDaEI7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSLElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRCxhQUFhLEVBQUU7d0JBQ2IsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNELFVBQVUsRUFBRTt3QkFDVixJQUFJLEVBQUUsUUFBUTt3QkFDZCxVQUFVLEVBQUU7NEJBQ1YsUUFBUSxFQUFFO2dDQUNSLElBQUksRUFBRSxRQUFROzZCQUNmOzRCQUNELFNBQVMsRUFBRTtnQ0FDVCxJQUFJLEVBQUUsU0FBUzs2QkFDaEI7NEJBQ0QsUUFBUSxFQUFFO2dDQUNSLElBQUksRUFBRSxRQUFROzZCQUNmOzRCQUNELGlCQUFpQixFQUFFO2dDQUNqQixJQUFJLEVBQUUsT0FBTztnQ0FDYixLQUFLLEVBQUU7b0NBQ0wsSUFBSSxFQUFFLFFBQVE7aUNBQ2Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7b0JBQ0QsV0FBVyxFQUFFO3dCQUNYLElBQUksRUFBRSxRQUFRO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUU7NEJBQ0wsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsVUFBVSxFQUFFO2dDQUNWLElBQUksRUFBRTtvQ0FDSixJQUFJLEVBQUUsUUFBUTtpQ0FDZjtnQ0FDRCxRQUFRLEVBQUU7b0NBQ1IsSUFBSSxFQUFFLFFBQVE7aUNBQ2Y7Z0NBQ0QsWUFBWSxFQUFFO29DQUNaLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTCxJQUFJLEVBQUUsUUFBUTt3Q0FDZCxVQUFVLEVBQUU7NENBQ1YsR0FBRyxFQUFFO2dEQUNILElBQUksRUFBRSxRQUFROzZDQUNmOzRDQUNELFVBQVUsRUFBRTtnREFDVixJQUFJLEVBQUUsUUFBUTtnREFDZCxJQUFJLEVBQUU7b0RBQ0osS0FBSztvREFDTCxNQUFNO29EQUNOLEtBQUs7b0RBQ0wsTUFBTTtvREFDTixRQUFRO29EQUNSLFNBQVM7b0RBQ1QsU0FBUztpREFDVjs2Q0FDRjs0Q0FDRCxXQUFXLEVBQUU7Z0RBQ1gsSUFBSSxFQUFFLFNBQVM7NkNBQ2hCOzRDQUNELFNBQVMsRUFBRTtnREFDVCxJQUFJLEVBQUUsUUFBUTtnREFDZCxVQUFVLEVBQUU7b0RBQ1YsVUFBVSxFQUFFO3dEQUNWLElBQUksRUFBRSxRQUFRO3FEQUNmO29EQUNELGNBQWMsRUFBRTt3REFDZCxJQUFJLEVBQUUsUUFBUTt3REFDZCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO3FEQUMzQjtvREFDRCxlQUFlLEVBQUU7d0RBQ2YsSUFBSSxFQUFFLE9BQU87d0RBQ2IsS0FBSyxFQUFFOzREQUNMLElBQUksRUFBRSxRQUFRO3lEQUNmO3FEQUNGO2lEQUNGOzZDQUNGO3lDQUNGO3FDQUNGO2lDQUNGO2dDQUNELE9BQU8sRUFBRTtvQ0FDUCxJQUFJLEVBQUUsT0FBTztvQ0FDYixLQUFLLEVBQUU7d0NBQ0wsSUFBSSxFQUFFLFFBQVE7d0NBQ2QsVUFBVSxFQUFFOzRDQUNWLElBQUksRUFBRTtnREFDSixJQUFJLEVBQUUsUUFBUTs2Q0FDZjs0Q0FDRCxjQUFjLEVBQUU7Z0RBQ2QsSUFBSSxFQUFFLFFBQVE7Z0RBQ2QsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQzs2Q0FDdEQ7eUNBQ0Y7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7YUFDYjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsR0FBRyxFQUFFLE9BQU87eUJBQ2I7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLHFCQUFxQjt5QkFDM0I7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLHFCQUFxQjt5QkFDM0I7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDhCQUE4Qjs0QkFDbkMsSUFBSSxFQUFFLE9BQU87NEJBQ2IsS0FBSyxFQUFFO2dDQUNMO29DQUNFLEdBQUcsRUFBRSxnQ0FBZ0M7b0NBQ3JDLFdBQVcsRUFBRSxvQkFBb0I7aUNBQ2xDOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxTQUFTOzRCQUNkLElBQUksRUFBRSxPQUFPOzRCQUNiLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxHQUFHLEVBQUUsZ0JBQWdCO29DQUNyQixPQUFPLEVBQUUsSUFBSTtvQ0FDYixXQUFXLEVBQUUsTUFBTTtpQ0FDcEI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLG9CQUFvQjtvQ0FDekIsT0FBTyxFQUFFLElBQUk7b0NBQ2IsV0FBVyxFQUFFLFVBQVU7aUNBQ3hCO2dDQUNEO29DQUNFLEdBQUcsRUFBRSx3QkFBd0I7b0NBQzdCLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTDs0Q0FDRSxHQUFHLEVBQUUsOEJBQThCOzRDQUNuQyxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsS0FBSzt5Q0FDbkI7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLHFDQUFxQzs0Q0FDMUMsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLGFBQWE7eUNBQzNCO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSwrQ0FBK0M7NENBQ3BELE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxzQkFBc0I7eUNBQ3BDO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxtREFBbUQ7NENBQ3hELE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSwyQkFBMkI7eUNBQ3pDO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxvREFBb0Q7NENBQ3pELElBQUksRUFBRSxPQUFPOzRDQUNiLEtBQUssRUFBRTtnREFDTDtvREFDRSxHQUFHLEVBQ0Qsc0RBQXNEO29EQUN4RCxPQUFPLEVBQUUsSUFBSTtvREFDYixXQUFXLEVBQUUsa0JBQWtCO2lEQUNoQzs2Q0FDRjt5Q0FDRjt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUsc0NBQXNDOzRDQUMzQyxLQUFLLEVBQUUsY0FBYzs0Q0FDckIsV0FBVyxFQUFFLGNBQWM7eUNBQzVCO3FDQUNGO2lDQUNGO2dDQUNEO29DQUNFLEdBQUcsRUFBRSxtQkFBbUI7b0NBQ3hCLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTDs0Q0FDRSxHQUFHLEVBQUUsMEJBQTBCOzRDQUMvQixPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsYUFBYTt5Q0FDM0I7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLG9DQUFvQzs0Q0FDekMsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLGlCQUFpQjt5Q0FDL0I7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLHNCQUFzQjt5QkFDNUI7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLG1CQUFtQjt5QkFDekI7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLFVBQVU7eUJBQ2hCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxlQUFlO3lCQUNyQjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxJQUFJLEVBQUUsWUFBWTtvQkFDbEIsS0FBSyxFQUFFLFlBQVk7aUJBQ3BCO2dCQUNEO29CQUNFLElBQUksRUFBRSxTQUFTO29CQUNmLEtBQUssRUFBRSxTQUFTO2lCQUNqQjthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLFVBQVUsRUFBRTtvQkFDVixLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLFFBQVE7cUJBQ2Y7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztxQkFDakM7b0JBQ0QsV0FBVyxFQUFFO3dCQUNYLElBQUksRUFBRSxRQUFRO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUU7NEJBQ0wsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsVUFBVSxFQUFFO2dDQUNWLElBQUksRUFBRTtvQ0FDSixJQUFJLEVBQUUsUUFBUTtpQ0FDZjtnQ0FDRCxRQUFRLEVBQUU7b0NBQ1IsSUFBSSxFQUFFLFFBQVE7aUNBQ2Y7Z0NBQ0QsWUFBWSxFQUFFO29DQUNaLElBQUksRUFBRSxPQUFPO29DQUNiLEtBQUssRUFBRTt3Q0FDTCxJQUFJLEVBQUUsUUFBUTt3Q0FDZCxVQUFVLEVBQUU7NENBQ1YsR0FBRyxFQUFFO2dEQUNILElBQUksRUFBRSxRQUFROzZDQUNmOzRDQUNELFVBQVUsRUFBRTtnREFDVixJQUFJLEVBQUUsUUFBUTtnREFDZCxJQUFJLEVBQUU7b0RBQ0osS0FBSztvREFDTCxNQUFNO29EQUNOLEtBQUs7b0RBQ0wsTUFBTTtvREFDTixRQUFRO29EQUNSLFNBQVM7b0RBQ1QsU0FBUztpREFDVjs2Q0FDRjs0Q0FDRCxXQUFXLEVBQUU7Z0RBQ1gsSUFBSSxFQUFFLFNBQVM7NkNBQ2hCOzRDQUNELFNBQVMsRUFBRTtnREFDVCxJQUFJLEVBQUUsUUFBUTtnREFDZCxVQUFVLEVBQUU7b0RBQ1YsVUFBVSxFQUFFO3dEQUNWLElBQUksRUFBRSxRQUFRO3FEQUNmO29EQUNELGNBQWMsRUFBRTt3REFDZCxJQUFJLEVBQUUsUUFBUTt3REFDZCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO3FEQUMzQjtvREFDRCxlQUFlLEVBQUU7d0RBQ2YsSUFBSSxFQUFFLE9BQU87d0RBQ2IsS0FBSyxFQUFFOzREQUNMLElBQUksRUFBRSxRQUFRO3lEQUNmO3FEQUNGO2lEQUNGOzZDQUNGO3lDQUNGO3FDQUNGO2lDQUNGO2dDQUNELE9BQU8sRUFBRTtvQ0FDUCxJQUFJLEVBQUUsT0FBTztvQ0FDYixLQUFLLEVBQUU7d0NBQ0wsSUFBSSxFQUFFLFFBQVE7d0NBQ2QsVUFBVSxFQUFFOzRDQUNWLElBQUksRUFBRTtnREFDSixJQUFJLEVBQUUsUUFBUTs2Q0FDZjs0Q0FDRCxjQUFjLEVBQUU7Z0RBQ2QsSUFBSSxFQUFFLFFBQVE7Z0RBQ2QsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQzs2Q0FDdEQ7eUNBQ0Y7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7b0JBQ0QscUJBQXFCLEVBQUU7d0JBQ3JCLElBQUksRUFBRSxRQUFRO3dCQUNkLFVBQVUsRUFBRTs0QkFDVixFQUFFLEVBQUU7Z0NBQ0YsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsT0FBTyxFQUFFLEVBQUU7NkJBQ1o7NEJBQ0QsRUFBRSxFQUFFO2dDQUNGLElBQUksRUFBRSxRQUFRO2dDQUNkLE9BQU8sRUFBRSxDQUFDO2dDQUNWLE9BQU8sRUFBRSxFQUFFOzZCQUNaOzRCQUNELEVBQUUsRUFBRTtnQ0FDRixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxPQUFPLEVBQUUsQ0FBQztnQ0FDVixPQUFPLEVBQUUsRUFBRTs2QkFDWjs0QkFDRCxFQUFFLEVBQUU7Z0NBQ0YsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsT0FBTyxFQUFFLEVBQUU7NkJBQ1o7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7YUFDYjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsR0FBRyxFQUFFLE9BQU87eUJBQ2I7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLGlCQUFpQjt5QkFDdkI7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDBCQUEwQjt5QkFDaEM7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDBCQUEwQjt5QkFDaEM7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDBCQUEwQjt5QkFDaEM7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDBCQUEwQjt5QkFDaEM7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLFNBQVM7NEJBQ2QsSUFBSSxFQUFFLE9BQU87NEJBQ2IsS0FBSyxFQUFFO2dDQUNMO29DQUNFLEdBQUcsRUFBRSxnQkFBZ0I7b0NBQ3JCLE9BQU8sRUFBRSxJQUFJO29DQUNiLFdBQVcsRUFBRSxNQUFNO2lDQUNwQjtnQ0FDRDtvQ0FDRSxHQUFHLEVBQUUsb0JBQW9CO29DQUN6QixPQUFPLEVBQUUsSUFBSTtvQ0FDYixXQUFXLEVBQUUsVUFBVTtpQ0FDeEI7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLHdCQUF3QjtvQ0FDN0IsSUFBSSxFQUFFLE9BQU87b0NBQ2IsS0FBSyxFQUFFO3dDQUNMOzRDQUNFLEdBQUcsRUFBRSw4QkFBOEI7NENBQ25DLE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxLQUFLO3lDQUNuQjt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUscUNBQXFDOzRDQUMxQyxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsYUFBYTt5Q0FDM0I7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLCtDQUErQzs0Q0FDcEQsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLHNCQUFzQjt5Q0FDcEM7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLG1EQUFtRDs0Q0FDeEQsT0FBTyxFQUFFLElBQUk7NENBQ2IsV0FBVyxFQUFFLDJCQUEyQjt5Q0FDekM7d0NBQ0Q7NENBQ0UsR0FBRyxFQUFFLG9EQUFvRDs0Q0FDekQsSUFBSSxFQUFFLE9BQU87NENBQ2IsS0FBSyxFQUFFO2dEQUNMO29EQUNFLEdBQUcsRUFDRCxzREFBc0Q7b0RBQ3hELE9BQU8sRUFBRSxJQUFJO29EQUNiLFdBQVcsRUFBRSxrQkFBa0I7aURBQ2hDOzZDQUNGO3lDQUNGO3dDQUNEOzRDQUNFLEdBQUcsRUFBRSxzQ0FBc0M7NENBQzNDLEtBQUssRUFBRSxjQUFjOzRDQUNyQixXQUFXLEVBQUUsY0FBYzt5Q0FDNUI7cUNBQ0Y7aUNBQ0Y7Z0NBQ0Q7b0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtvQ0FDeEIsSUFBSSxFQUFFLE9BQU87b0NBQ2IsS0FBSyxFQUFFO3dDQUNMOzRDQUNFLEdBQUcsRUFBRSwwQkFBMEI7NENBQy9CLE9BQU8sRUFBRSxJQUFJOzRDQUNiLFdBQVcsRUFBRSxhQUFhO3lDQUMzQjt3Q0FDRDs0Q0FDRSxHQUFHLEVBQUUsb0NBQW9DOzRDQUN6QyxPQUFPLEVBQUUsSUFBSTs0Q0FDYixXQUFXLEVBQUUsaUJBQWlCO3lDQUMvQjtxQ0FDRjtpQ0FDRjs2QkFDRjt5QkFDRjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsV0FBVzt5QkFDakI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRjs7QUFFRCxNQUFNLE9BQU8sS0FBSyxHQUFXO0lBQzNCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7SUFDdkIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDakIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDakIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDakIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUNsQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUNsQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUNsQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUNsQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUNsQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Q0FDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHsgRmVhdHVyZSwgRW50aXR5LCBSb2xlIH0gZnJvbSAnQHBhbG15cmEtZGV2a2l0L2NvcmUtYXBpL3NoYXJlZCc7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfTElCUkFSWSA9IHtcbiAgaWQ6IDAsXG4gIG5hbWU6ICdQcmltZU5HIExpYicsXG4gIHZlcnNpb246ICcxLjAuMScsXG4gIGNhdGVnb3JpZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0xhYmVsJyxcbiAgICAgICAgICBjYXRlZ29yeTogJ0lucHV0JyxcbiAgICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgICBzY29wZTogW1xuICAgICAgICAgICAgJ3ZpZXcuY29tcG9uZW50cycsXG4gICAgICAgICAgICAnZWRpdC5jb21wb25lbnRzJyxcbiAgICAgICAgICAgICdzZWxlY3Rvci5maWx0ZXIuY29tcG9uZW50cycsXG4gICAgICAgICAgICAnc2VsZWN0b3IuZ3JpZC5jb21wb25lbnRzJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW5jbHVkZWRTY3JlZW5zOiBbJ2VkaXQnXSxcbiAgICAgICAgICAgICAgZXhjbHVkZWRVc2VDYXNlczogW10sXG4gICAgICAgICAgICAgIGluY2x1ZGVkVHlwZXM6IFsnbnVtZXJpYycsICdib29sZWFuJ10sXG4gICAgICAgICAgICAgIGV4Y2x1ZGVkVHlwZXM6IFtdLFxuICAgICAgICAgICAgICBpbmNsdWRlZFJlbGF0aW9uOiBbXSxcbiAgICAgICAgICAgICAgZXhjbHVkZWRSZWxhdGlvbjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGluY2x1ZGVkU2NyZWVuczogWydzZWxlY3RvciddLFxuICAgICAgICAgICAgICBleGNsdWRlZFVzZUNhc2VzOiBbXSxcbiAgICAgICAgICAgICAgaW5jbHVkZWRUeXBlczogWydudW1lcmljJywgJ2Jvb2xlYW4nLCAnZGF0ZSddLFxuICAgICAgICAgICAgICBleGNsdWRlZFR5cGVzOiBbXSxcbiAgICAgICAgICAgICAgaW5jbHVkZWRSZWxhdGlvbjogW10sXG4gICAgICAgICAgICAgIGV4Y2x1ZGVkUmVsYXRpb246IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBjb250YWluZXI6IGZhbHNlLFxuICAgICAgICAgIGZpZWxkUmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgIHNjaGVtYToge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIHN0eWxlTmFtZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBzdHlsZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBsYWJlbCBrZXkgb2YgdGhlIGRpc3BsYXllZCBsYWJlbCBtZW51IGl0ZW0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlYWRPbmx5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSBpZiB0aGUgZmllbGQgaXMgcmVhZCBvbmx5IG9yIG5vdCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVhZE9ubHlDb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdJZiB0aGUgY29uZGl0aW9uIGlzIHZlcmlmaWVkLCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IHNob3VsZCBiZSBkaXNhYmxlZCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eUNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgXCJtYWtlcyB0aGUgY29tcG9uZW50IHZpc2libGUgaWYgdGhlIGV4cHJlc3Npb24ncyBldmFsdWF0aW9uIGlzIHRydWUuXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgd29yZFNpemU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgICAgICAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVG8gaW5kaWNhdGUgd2hldGhlciB0aGUgZmllbGQgaXMgbWFuZGF0b3J5IG9yIG5vJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFsnbGFiZWwnXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGF5b3V0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnbGFiZWwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdtYW5kYXRvcnknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdyZWFkT25seSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3JlYWRPbmx5Q29uZGl0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3Zpc2liaWxpdHlDb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHRhcmVhJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnd29yZFNpemUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdzdHlsZU5hbWUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1RleHRGaWVsZCcsXG4gICAgICAgICAgY2F0ZWdvcnk6ICdJbnB1dCcsXG4gICAgICAgICAgc2NvcGU6IFsnZWRpdC5jb21wb25lbnRzJ10sXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNMTYgMzJoNDE2YzguODM3IDAgMTYgNy4xNjMgMTYgMTZ2OTZjMCA4LjgzNy03LjE2MyAxNi0xNiAxNmgtMzUuNDk2Yy04LjgzNyAwLTE2LTcuMTYzLTE2LTE2Vjk2SDI2MS43NDN2MTI4SDI5NmM4LjgzNyAwIDE2IDcuMTYzIDE2IDE2djMyYzAgOC44MzctNy4xNjMgMTYtMTYgMTZIMTUyYy04LjgzNyAwLTE2LTcuMTYzLTE2LTE2di0zMmMwLTguODM3IDcuMTYzLTE2IDE2LTE2aDM0LjI1N1Y5Nkg2Ny40OTZ2NDhjMCA4LjgzNy03LjE2MyAxNi0xNiAxNkgxNmMtOC44MzcgMC0xNi03LjE2My0xNi0xNlY0OGMwLTguODM3IDcuMTYzLTE2IDE2LTE2em00MjcuMzE1IDM0MC42ODJsLTgwLjAwMS03OS45OTVDMzUzLjk5MSAyODMuMzY1IDMzNiAyODguMzYyIDMzNiAzMDR2NDhIMTEydi00Ny45OWMwLTE0LjMwNy0xNy4zMDctMjEuMzE5LTI3LjMxNC0xMS4zMTNMNC42ODUgMzcyLjY5MmMtNi4yNDUgNi4yNDUtNi4yNDcgMTYuMzc5IDAgMjIuNjI2bDgwLjAwMSA3OS45OTVDOTQuMDA5IDQ4NC42MzUgMTEyIDQ3OS42MzggMTEyIDQ2NHYtNDhoMjI0djQ3Ljk5YzAgMTQuMzA3IDE3LjMwNyAyMS4zMTkgMjcuMzE0IDExLjMxM2w4MC4wMDEtNzkuOTk1YzYuMjQ1LTYuMjQ1IDYuMjQ4LTE2LjM3OSAwLTIyLjYyNnonLFxuICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGluY2x1ZGVkU2NyZWVuczogWydzZWFyY2hJbnB1dCcsICdlZGl0J10sXG4gICAgICAgICAgICAgIGluY2x1ZGVkVHlwZXM6IFsnbnVtZXJpYycsICdzdHJpbmcnLCAncmVsYXRpb24nXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW5jbHVkZWRTY3JlZW5zOiBbJ3NlYXJjaElucHV0J10sXG4gICAgICAgICAgICAgIGluY2x1ZGVkVHlwZXM6IFsnZG91YmxlJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGluY2x1ZGVkU2NyZWVuczogWydlZGl0JywgJ3ZpZXcnXSxcbiAgICAgICAgICAgICAgaW5jbHVkZWRUeXBlczogWydudW1lcmljJywgJ3N0cmluZycsICdkYXRlJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGV4Y2x1ZGVkVXNlQ2FzZXM6IFsnc2VhcmNoSW5wdXQnXSxcbiAgICAgICAgICAgICAgaW5jbHVkZWRUeXBlczogWydsb25nJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgICAgZmllbGRSZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBzdHlsZU5hbWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgc3R5bGUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlYWRPbmx5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSBpZiB0aGUgZmllbGQgaXMgcmVhZCBvbmx5IG9yIG5vdCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVhZE9ubHlDb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdJZiB0aGUgY29uZGl0aW9uIGlzIHZlcmlmaWVkLCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IHNob3VsZCBiZSBkaXNhYmxlZCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcm9sZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgXCJtYWtlcyB0aGUgY29tcG9uZW50IHZpc2libGUgaWYgdGhlIGV4cHJlc3Npb24ncyBldmFsdWF0aW9uIGlzIHRydWUuXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJlZml4OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWFzazoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1heDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbGFiZWwga2V5IG9mIHRoZSBkaXNwbGF5ZWQgVGV4dCBtZW51IGl0ZW0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNjcmVlbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGVudW06IFsnJ10sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUbyBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBmaWVsZCBpcyBtYW5kYXRvcnkgb3Igbm90J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmZWF0dXJlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZW51bTogWydIZWxsbyddLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgJ1RvIHNwZWNpZnkgd2hldGhlciB0byBzZXQgdGhlIGZpZWxkIGxhYmVsIHZpc2libGUgb3Igbm90LidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaGlkZU9wZXJhdG9yOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVG8gaW5kaWNhdGUgdGhhdCB0aGUgb3BlcmF0b3IgY2FuIGJlIGhpZGRlbidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAga2V5czoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdrZXkgb2YgdGhlIGZpZWxkJyxcbiAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGtleToge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogWydrZXknXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2FzZVNlbnNpdGl2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGVudW06IFsndXBwZXJjYXNlJywgJ2xvd2VyY2FzZScsICdkZWZhdWx0J11cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVmYXVsdE9wZXJhdG9yOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAnVG8gZGVmYXVsdCBvcGVyYXRvciB3aGVuIHRoZSBvcHRpb24gaGlkZU9wZXJhdG9yIGlzIGVuYWJsZWQgJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFsnbGFiZWwnLCAna2V5cyddXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXlvdXQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJyRzY3JlZW5zQnlGZWF0dXJlJyxcbiAgICAgICAgICAgICAgICAgIGRlcHM6ICdmaWVsZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2ZlYXR1cmUnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICckRmVhdHVyZXMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICckU2NyZWVucycsXG4gICAgICAgICAgICAgICAgICBkZXBzOiAnZmVhdHVyZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3JlYWRPbmx5Q29uZGl0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3JvbGUnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICckUm9sZXMnLFxuICAgICAgICAgICAgICAgICAgZGVwczogJ2ZlYXR1cmUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdoaWRlT3BlcmF0b3InLFxuICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkU2NyZWVuczogWydzZWFyY2hJbnB1dCddLFxuICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVkVXNlQ2FzZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkVHlwZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVkVHlwZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkUmVsYXRpb246IFtdLFxuICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVkUmVsYXRpb246IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2RlZmF1bHRPcGVyYXRvcicsXG4gICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRTY3JlZW5zOiBbJ3NlYXJjaElucHV0J10sXG4gICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZWRVc2VDYXNlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRUeXBlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZWRUeXBlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRSZWxhdGlvbjogW10sXG4gICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZWRSZWxhdGlvbjogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnY2FzZVNlbnNpdGl2ZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ21heExlbmd0aCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ21heCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3ByZWZpeCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3N1ZmZpeCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ21hc2snXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdrZXlzJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRTY3JlZW5zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlZFVzZUNhc2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZFR5cGVzOiBbJ3JlbGF0aW9uJ10sXG4gICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZWRUeXBlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRSZWxhdGlvbjogWydjb21wb3NpdGlvbiddLFxuICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVkUmVsYXRpb246IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAna2V5c1tdLmtleScsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2tleSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnc3R5bGVOYW1lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdQYXNzd29yZCcsXG4gICAgICAgICAgY2F0ZWdvcnk6ICdJbnB1dCcsXG4gICAgICAgICAgc2NvcGU6IFsnZWRpdC5jb21wb25lbnRzJ10sXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNNTEyIDE3Ni4wMDFDNTEyIDI3My4yMDMgNDMzLjIwMiAzNTIgMzM2IDM1MmMtMTEuMjIgMC0yMi4xOS0xLjA2Mi0zMi44MjctMy4wNjlsLTI0LjAxMiAyNy4wMTRBMjMuOTk5IDIzLjk5OSAwIDAgMSAyNjEuMjIzIDM4NEgyMjR2NDBjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0aC00MHY0MGMwIDEzLjI1NS0xMC43NDUgMjQtMjQgMjRIMjRjLTEzLjI1NSAwLTI0LTEwLjc0NS0yNC0yNHYtNzguMDU5YzAtNi4zNjUgMi41MjktMTIuNDcgNy4wMjktMTYuOTcxbDE2MS44MDItMTYxLjgwMkMxNjMuMTA4IDIxMy44MTQgMTYwIDE5NS4yNzEgMTYwIDE3NiAxNjAgNzguNzk4IDIzOC43OTcuMDAxIDMzNS45OTkgMCA0MzMuNDg4LS4wMDEgNTEyIDc4LjUxMSA1MTIgMTc2LjAwMXpNMzM2IDEyOGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4czQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5LTQ4LTQ4LTQ4LTQ4IDIxLjQ5LTQ4IDQ4eicsXG4gICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW5jbHVkZWRTY3JlZW5zOiBbJ3NlYXJjaElucHV0JywgJ2VkaXQnXSxcbiAgICAgICAgICAgICAgZXhjbHVkZWRVc2VDYXNlczogW10sXG4gICAgICAgICAgICAgIGluY2x1ZGVkVHlwZXM6IFtdLFxuICAgICAgICAgICAgICBleGNsdWRlZFR5cGVzOiBbXSxcbiAgICAgICAgICAgICAgaW5jbHVkZWRSZWxhdGlvbjogW10sXG4gICAgICAgICAgICAgIGV4Y2x1ZGVkUmVsYXRpb246IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBjb250YWluZXI6IGZhbHNlLFxuICAgICAgICAgIGZpZWxkUmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgc2NoZW1hOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgc3R5bGVOYW1lOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjYW4gYmUgdXNlZCB0byBjdXN0b21pemUgdGhlIHN0eWxlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZWFkT25seToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgaWYgdGhlIGZpZWxkIGlzIHJlYWQgb25seSBvciBub3QnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAnVGhlIGxhYmVsIGtleSBvZiB0aGUgZGlzcGxheWVkIENvbWJvQm94IG1lbnUgaXRlbSAnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlYWRPbmx5Q29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAnSWYgdGhlIGNvbmRpdGlvbiBpcyB2ZXJpZmllZCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgZGlzYWJsZWQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHZpc2liaWxpdHlDb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgIFwibWFrZXMgdGhlIGNvbXBvbmVudCB2aXNpYmxlIGlmIHRoZSBleHByZXNzaW9uJ3MgZXZhbHVhdGlvbiBpcyB0cnVlLlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICcqIHRydWUgLSBzcGVjaWZpZXMgdGhhdCB0aGUgY29tYm9ib3ggbXVzdCBiZSBmaWxsZWQgb3V0IGJlZm9yZSBzdWJtaXR0aW5nIHRoZSBmb3JtLiAqZmFsc2UgLSAgc3BlY2lmaWVzIHRoYXQgdGhlIGNvbWJvYm94IG11c3Qgbm90IGJlIGZpbGxlZCBvdXQgYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGZvcm0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNob3dMYWJlbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdUbyBzcGVjaWZ5IHdoZXRoZXIgdG8gc2V0IHRoZSBmaWVsZCBsYWJlbCB2aXNpYmxlIG9yIG5vdC4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1aXJlZDogWydsYWJlbCddXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXlvdXQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3Nob3dMYWJlbCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ21hbmRhdG9yeSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3JlYWRPbmx5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAncmVhZE9ubHlDb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHRhcmVhJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAndmlzaWJpbGl0eUNvbmRpdGlvbicsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dGFyZWEnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdzdHlsZU5hbWUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0RhdGVGaWVsZCcsXG4gICAgICAgICAgY2F0ZWdvcnk6ICdJbnB1dCcsXG4gICAgICAgICAgc2NvcGU6IFsnZWRpdC5jb21wb25lbnRzJ10sXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNNDM2IDE2MEgxMmMtNi42IDAtMTItNS40LTEyLTEydi0zNmMwLTI2LjUgMjEuNS00OCA0OC00OGg0OFYxMmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjUyaDEyOFYxMmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjUyaDQ4YzI2LjUgMCA0OCAyMS41IDQ4IDQ4djM2YzAgNi42LTUuNCAxMi0xMiAxMnpNMTIgMTkyaDQyNGM2LjYgMCAxMiA1LjQgMTIgMTJ2MjYwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYyMDRjMC02LjYgNS40LTEyIDEyLTEyem0xMTYgMjA0YzAtNi42LTUuNC0xMi0xMi0xMkg3NmMtNi42IDAtMTIgNS40LTEyIDEydjQwYzAgNi42IDUuNCAxMiAxMiAxMmg0MGM2LjYgMCAxMi01LjQgMTItMTJ2LTQwem0wLTEyOGMwLTYuNi01LjQtMTItMTItMTJINzZjLTYuNiAwLTEyIDUuNC0xMiAxMnY0MGMwIDYuNiA1LjQgMTIgMTIgMTJoNDBjNi42IDAgMTItNS40IDEyLTEydi00MHptMTI4IDEyOGMwLTYuNi01LjQtMTItMTItMTJoLTQwYy02LjYgMC0xMiA1LjQtMTIgMTJ2NDBjMCA2LjYgNS40IDEyIDEyIDEyaDQwYzYuNiAwIDEyLTUuNCAxMi0xMnYtNDB6bTAtMTI4YzAtNi42LTUuNC0xMi0xMi0xMmgtNDBjLTYuNiAwLTEyIDUuNC0xMiAxMnY0MGMwIDYuNiA1LjQgMTIgMTIgMTJoNDBjNi42IDAgMTItNS40IDEyLTEydi00MHptMTI4IDEyOGMwLTYuNi01LjQtMTItMTItMTJoLTQwYy02LjYgMC0xMiA1LjQtMTIgMTJ2NDBjMCA2LjYgNS40IDEyIDEyIDEyaDQwYzYuNiAwIDEyLTUuNCAxMi0xMnYtNDB6bTAtMTI4YzAtNi42LTUuNC0xMi0xMi0xMmgtNDBjLTYuNiAwLTEyIDUuNC0xMiAxMnY0MGMwIDYuNiA1LjQgMTIgMTIgMTJoNDBjNi42IDAgMTItNS40IDEyLTEydi00MHonLFxuICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGluY2x1ZGVkU2NyZWVuczogW10sXG4gICAgICAgICAgICAgIGV4Y2x1ZGVkVXNlQ2FzZXM6IFtdLFxuICAgICAgICAgICAgICBpbmNsdWRlZFR5cGVzOiBbJ3N0cmluZycsICdkYXRlJ10sXG4gICAgICAgICAgICAgIGV4Y2x1ZGVkVHlwZXM6IFtdLFxuICAgICAgICAgICAgICBpbmNsdWRlZFJlbGF0aW9uOiBbXSxcbiAgICAgICAgICAgICAgZXhjbHVkZWRSZWxhdGlvbjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgICAgZmllbGRSZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBzdHlsZU5hbWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgc3R5bGUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgJ0FwcGxpY2FibGUgaW4gY2FzZSBvZiBUZXh0RmllbGRDYWxlbmRhckxheW91dCBhbmQgRnJvbVRvTGF5b3V0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZWFkT25seToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgaWYgdGhlIGZpZWxkIGlzIHJlYWQgb25seSBvciBub3QnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlYWRPbmx5Q29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAnSWYgdGhlIGNvbmRpdGlvbiBpcyB2ZXJpZmllZCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgZGlzYWJsZWQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHZpc2liaWxpdHlDb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgIFwibWFrZXMgdGhlIGNvbXBvbmVudCB2aXNpYmxlIGlmIHRoZSBleHByZXNzaW9uJ3MgZXZhbHVhdGlvbiBpcyB0cnVlLlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAnVGhlIGxhYmVsIGtleSBvZiB0aGUgZGlzcGxheWVkIENvbWJvQm94IG1lbnUgaXRlbSAnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICcqIHRydWUgLSBzcGVjaWZpZXMgdGhhdCB0aGUgY29tYm9ib3ggbXVzdCBiZSBmaWxsZWQgb3V0IGJlZm9yZSBzdWJtaXR0aW5nIHRoZSBmb3JtLiAqZmFsc2UgLSAgc3BlY2lmaWVzIHRoYXQgdGhlIGNvbWJvYm94IG11c3Qgbm90IGJlIGZpbGxlZCBvdXQgYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGZvcm0nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNob3dMYWJlbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdUbyBzcGVjaWZ5IHdoZXRoZXIgdG8gc2V0IHRoZSBmaWVsZCBsYWJlbCB2aXNpYmxlIG9yIG5vdC4nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGVQcmVjaXNpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFsnbGFiZWwnLCAnZm9ybWF0J11cbiAgICAgICAgICB9LFxuICAgICAgICAgIGxheW91dDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnc2hvd0xhYmVsJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnbWFuZGF0b3J5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAncmVhZE9ubHknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdyZWFkT25seUNvbmRpdGlvbicsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dGFyZWEnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICd2aXNpYmlsaXR5Q29uZGl0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2RhdGVQcmVjaXNpb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdzdHlsZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2Zvcm1hdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQ29tYm9ib3gnLFxuICAgICAgICAgIGNhdGVnb3J5OiAnSW5wdXQnLFxuICAgICAgICAgIHNjb3BlOiBbJ2VkaXQuY29tcG9uZW50cyddLFxuICAgICAgICAgIGljb246XG4gICAgICAgICAgICAnTTU3NiA4MHY0MGMwIDYuNi01LjQgMTItMTIgMTJIMTYwdjhjMCAxMy4zLTEwLjcgMjQtMjQgMjRoLTE2Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHYtOEgxMmMtNi42IDAtMTItNS40LTEyLTEyVjgwYzAtNi42IDUuNC0xMiAxMi0xMmg4NHYtOGMwLTEzLjMgMTAuNy0yNCAyNC0yNGgxNmMxMy4zIDAgMjQgMTAuNyAyNCAyNHY4aDQwNGM2LjYgMCAxMiA1LjQgMTIgMTJ6bS0xMiAxNDhoLTg0di04YzAtMTMuMy0xMC43LTI0LTI0LTI0aC0xNmMtMTMuMyAwLTI0IDEwLjctMjQgMjR2OEgxMmMtNi42IDAtMTIgNS40LTEyIDEydjQwYzAgNi42IDUuNCAxMiAxMiAxMmg0MDR2OGMwIDEzLjMgMTAuNyAyNCAyNCAyNGgxNmMxMy4zIDAgMjQtMTAuNyAyNC0yNHYtOGg4NGM2LjYgMCAxMi01LjQgMTItMTJ2LTQwYzAtNi42LTUuNC0xMi0xMi0xMnptMCAxNjBIMjg4di04YzAtMTMuMy0xMC43LTI0LTI0LTI0aC0xNmMtMTMuMyAwLTI0IDEwLjctMjQgMjR2OEgxMmMtNi42IDAtMTIgNS40LTEyIDEydjQwYzAgNi42IDUuNCAxMiAxMiAxMmgyMTJ2OGMwIDEzLjMgMTAuNyAyNCAyNCAyNGgxNmMxMy4zIDAgMjQtMTAuNyAyNC0yNHYtOGgyNzZjNi42IDAgMTItNS40IDEyLTEydi00MGMwLTYuNi01LjQtMTItMTItMTJ6JyxcbiAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbmNsdWRlZFNjcmVlbnM6IFsnc2VhcmNoSW5wdXQnLCAnZWRpdCddLFxuICAgICAgICAgICAgICBleGNsdWRlZFVzZUNhc2VzOiBbXSxcbiAgICAgICAgICAgICAgaW5jbHVkZWRUeXBlczogWydudW1lcmljJywgJ3N0cmluZycsICdyZWxhdGlvbicsICdib29sZWFuJ10sXG4gICAgICAgICAgICAgIGV4Y2x1ZGVkVHlwZXM6IFtdLFxuICAgICAgICAgICAgICBpbmNsdWRlZFJlbGF0aW9uOiBbJ2NvbXBvc2l0aW9uIG9uZScsICdhZ2dyZWdhdGlvbiBvbmUnXSxcbiAgICAgICAgICAgICAgZXhjbHVkZWRSZWxhdGlvbjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgICAgZmllbGRSZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBzdHlsZU5hbWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgc3R5bGUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRpc3BsYXlGaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAnKnRydWUtIGRpc3BsYXlzIGFuIGlucHV0IGZpZWxkIHRvIGZpbHRlciB0aGUgaXRlbXMgb24ga2V5dXAuKmZhbHNlIC0gZGlzcGxheXMgYW4gaW5wdXQgZmllbGQgdG8gZmlsdGVyIHRoZSBpdGVtcyBvbiBrZXl1cC4gKFRoZSBmaWx0ZXIgbW9kZSBpcyBhbHdheXMgQ29udGFpbnMgbW9kZS4pJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYXp5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgJ3RydWUgLSByZXRyaWV2ZWQgdmFsdWVzIG9ubHkgd2hlbiB0aGUgdXNlciBjbGljayBvbiB0aGUgQ29tYm94LiAob25Gb2N1cyBFdmVudCkuKiBmYWxzZSAtICByZXRyaWV2ZWQgdmFsdWVzIHdoZW4gaW5pdGlhbGl6aW5nIHRoZSBzY3JlZW4gKG5nT25Jbml0KSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVhZE9ubHk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IGlmIHRoZSBmaWVsZCBpcyByZWFkIG9ubHkgb3Igbm90J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZWFkT25seUNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgJ0lmIHRoZSBjb25kaXRpb24gaXMgdmVyaWZpZWQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGRpc2FibGVkJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2aXNpYmlsaXR5Q29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICBcIm1ha2VzIHRoZSBjb21wb25lbnQgdmlzaWJsZSBpZiB0aGUgZXhwcmVzc2lvbidzIGV2YWx1YXRpb24gaXMgdHJ1ZS5cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgJ1RoZSBsYWJlbCBrZXkgb2YgdGhlIGRpc3BsYXllZCBDb21ib0JveCBtZW51IGl0ZW0gJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzb3J0VHlwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGVudW06IFsnQXNjJywgJ0Rlc2MnLCAnTm9uZSddXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICcqIHRydWUgLSBzcGVjaWZpZXMgdGhhdCB0aGUgY29tYm9ib3ggbXVzdCBiZSBmaWxsZWQgb3V0IGJlZm9yZSBzdWJtaXR0aW5nIHRoZSBmb3JtLiAqZmFsc2UgLSAgc3BlY2lmaWVzIHRoYXQgdGhlIGNvbWJvYm94IG11c3Qgbm90IGJlIGZpbGxlZCBvdXQgYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGZvcm0gJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzaG93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAnVG8gc3BlY2lmeSB3aGV0aGVyIHRvIHNldCB0aGUgZmllbGQgbGFiZWwgdmlzaWJsZSBvciBub3QuJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2tleSBvZiB0aGUgZmllbGQnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbJ2tleSddXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFtcbiAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgJ3JlYWRPbmx5Q29uZGl0aW9uJyxcbiAgICAgICAgICAgICAgJ2F1dG9XaWR0aCcsXG4gICAgICAgICAgICAgICdkaXNwbGF5RmlsdGVyJ1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGF5b3V0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnbGFiZWwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdzaG93TGFiZWwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdtYW5kYXRvcnknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdyZWFkT25seSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3JlYWRPbmx5Q29uZGl0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3Zpc2liaWxpdHlDb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHRhcmVhJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnc29ydFR5cGUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdzdHlsZU5hbWUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdsYXp5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnZGlzcGxheUZpbHRlcidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2tleXMnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdrZXlzW10ua2V5JyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAna2V5J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0NoZWNrYm94JyxcbiAgICAgICAgICBjYXRlZ29yeTogJ0lucHV0JyxcbiAgICAgICAgICBzY29wZTogWydlZGl0LmNvbXBvbmVudHMnXSxcblxuICAgICAgICAgIGljb246XG4gICAgICAgICAgICAnTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHptMCA0MDBINDhWODBoMzUydjM1MnptLTM1Ljg2NC0yNDEuNzI0TDE5MS41NDcgMzYxLjQ4Yy00LjcwNSA0LjY2Ny0xMi4zMDMgNC42MzctMTYuOTctLjA2OGwtOTAuNzgxLTkxLjUxNmMtNC42NjctNC43MDUtNC42MzctMTIuMzAzLjA2OS0xNi45NzFsMjIuNzE5LTIyLjUzNmM0LjcwNS00LjY2NyAxMi4zMDMtNC42MzcgMTYuOTcuMDY5bDU5Ljc5MiA2MC4yNzcgMTQxLjM1Mi0xNDAuMjE2YzQuNzA1LTQuNjY3IDEyLjMwMy00LjYzNyAxNi45Ny4wNjhsMjIuNTM2IDIyLjcxOGM0LjY2NyA0LjcwNiA0LjYzNyAxMi4zMDQtLjA2OCAxNi45NzF6JyxcbiAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbmNsdWRlZFNjcmVlbnM6IFsnZWRpdCcsICdzZWFyY2hJbnB1dCddLFxuICAgICAgICAgICAgICBleGNsdWRlZFVzZUNhc2VzOiBbXSxcbiAgICAgICAgICAgICAgaW5jbHVkZWRUeXBlczogWydib29sZWFuJ10sXG4gICAgICAgICAgICAgIGV4Y2x1ZGVkVHlwZXM6IFtdLFxuICAgICAgICAgICAgICBpbmNsdWRlZFJlbGF0aW9uOiBbXSxcbiAgICAgICAgICAgICAgZXhjbHVkZWRSZWxhdGlvbjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgICAgZmllbGRSZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBzdHlsZU5hbWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgc3R5bGUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlYWRPbmx5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSBpZiB0aGUgZmllbGQgaXMgcmVhZCBvbmx5IG9yIG5vdCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdUaGUgbGFiZWwga2V5IG9mIHRoZSBkaXNwbGF5ZWQgQ29tYm9Cb3ggbWVudSBpdGVtICdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgJyogdHJ1ZSAtIHNwZWNpZmllcyB0aGF0IHRoZSBjb21ib2JveCBtdXN0IGJlIGZpbGxlZCBvdXQgYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGZvcm0uICpmYWxzZSAtICBzcGVjaWZpZXMgdGhhdCB0aGUgY29tYm9ib3ggbXVzdCBub3QgYmUgZmlsbGVkIG91dCBiZWZvcmUgc3VibWl0dGluZyB0aGUgZm9ybSAnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNob3dMYWJlbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdUbyBzcGVjaWZ5IHdoZXRoZXIgdG8gc2V0IHRoZSBmaWVsZCBsYWJlbCB2aXNpYmxlIG9yIG5vdC4nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlYWRPbmx5Q29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAnSWYgdGhlIGNvbmRpdGlvbiBpcyB2ZXJpZmllZCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgZGlzYWJsZWQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHZpc2liaWxpdHlDb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgIFwibWFrZXMgdGhlIGNvbXBvbmVudCB2aXNpYmxlIGlmIHRoZSBleHByZXNzaW9uJ3MgZXZhbHVhdGlvbiBpcyB0cnVlLlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1aXJlZDogWydyZWFkT25seScsICdtYW5kYXRvcnknXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGF5b3V0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnbGFiZWwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdzaG93TGFiZWwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdtYW5kYXRvcnknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdyZWFkT25seSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3JlYWRPbmx5Q29uZGl0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3Zpc2liaWxpdHlDb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHRhcmVhJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnc3R5bGVOYW1lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdSYWRpbycsXG4gICAgICAgICAgY2F0ZWdvcnk6ICdJbnB1dCcsXG4gICAgICAgICAgc2NvcGU6IFsnZWRpdC5jb21wb25lbnRzJ10sXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNMjU2IDE1MmMtNTcuMiAwLTEwNCA0Ni44LTEwNCAxMDRzNDYuOCAxMDQgMTA0IDEwNCAxMDQtNDYuOCAxMDQtMTA0LTQ2LjgtMTA0LTEwNC0xMDR6bTAtMTA0QzE0MS42MDEgNDggNDggMTQxLjYwMSA0OCAyNTZzOTMuNjAxIDIwOCAyMDggMjA4IDIwOC05My42MDEgMjA4LTIwOFMzNzAuMzk5IDQ4IDI1NiA0OHptMCAzNzQuNGMtOTEuNTE4IDAtMTY2LjQtNzQuODgzLTE2Ni40LTE2Ni40UzE2NC40ODIgODkuNiAyNTYgODkuNiA0MjIuNCAxNjQuNDgyIDQyMi40IDI1NiAzNDcuNTE4IDQyMi40IDI1NiA0MjIuNHonLFxuICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGluY2x1ZGVkU2NyZWVuczogWydzZWFyY2hJbnB1dCcsICdlZGl0J10sXG4gICAgICAgICAgICAgIGV4Y2x1ZGVkVXNlQ2FzZXM6IFtdLFxuICAgICAgICAgICAgICBpbmNsdWRlZFR5cGVzOiBbJ2Jvb2xlYW4nXSxcbiAgICAgICAgICAgICAgZXhjbHVkZWRUeXBlczogW10sXG4gICAgICAgICAgICAgIGluY2x1ZGVkUmVsYXRpb246IFtdLFxuICAgICAgICAgICAgICBleGNsdWRlZFJlbGF0aW9uOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgICBmaWVsZFJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIHNjaGVtYToge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIHN0eWxlTmFtZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBzdHlsZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVhZE9ubHk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IGlmIHRoZSBmaWVsZCBpcyByZWFkIG9ubHkgb3Igbm90J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgJ1RoZSBsYWJlbCBrZXkgb2YgdGhlIGRpc3BsYXllZCBDb21ib0JveCBtZW51IGl0ZW0gJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzb3J0VHlwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGVudW06IFsnQXNjJywgJ0Rlc2MnLCAnTm9uZSddXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNob3dMYWJlbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdUbyBzcGVjaWZ5IHdoZXRoZXIgdG8gc2V0IHRoZSBmaWVsZCBsYWJlbCB2aXNpYmxlIG9yIG5vdC4nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlYWRPbmx5Q29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eUNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgXCJtYWtlcyB0aGUgY29tcG9uZW50IHZpc2libGUgaWYgdGhlIGV4cHJlc3Npb24ncyBldmFsdWF0aW9uIGlzIHRydWUuXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1aXJlZDogWydyZWFkT25seSddXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXlvdXQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3Nob3dMYWJlbCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ21hbmRhdG9yeSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3JlYWRPbmx5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAncmVhZE9ubHlDb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHRhcmVhJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAndmlzaWJpbGl0eUNvbmRpdGlvbicsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dGFyZWEnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdzb3J0VHlwZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3N0eWxlTmFtZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdhY3Rpb25zJyxcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdCdXR0b24nLFxuICAgICAgICAgIHNjb3BlOiBbXG4gICAgICAgICAgICAnZWRpdC5hY3Rpb25zJyxcbiAgICAgICAgICAgICdzZWxlY3Rvci5maWx0ZXIuYWN0aW9ucycsXG4gICAgICAgICAgICAnc2VsZWN0b3IuZ3JpZC5hY3Rpb25zJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNIDIuODk4NDM4IDggQyAxLjMxNjQwNiA4IDAgOS4zMTY0MDYgMCAxMC45MDIzNDQgTCAwIDIyLjA5NzY1NiBDIDAgMjMuNjMyODEzIDEuMjUzOTA2IDI1IDIuODk4NDM4IDI1IEwgMjkuMDk3NjU2IDI1IEMgMzAuNjMyODEzIDI1IDMyIDIzLjc0NjA5NCAzMiAyMi4wOTc2NTYgTCAzMiAxMC45MDIzNDQgQyAzMiA5LjMxNjQwNiAzMC42ODM1OTQgOCAyOS4wOTc2NTYgOCBaIE0gMi44OTg0MzggMTAgTCAyOS4wOTc2NTYgMTAgQyAyOS43MTQ4NDQgMTAgMzAgMTAuMjg1MTU2IDMwIDEwLjkwMjM0NCBMIDMwIDIyLjA5NzY1NiBDIDMwIDIyLjY1MjM0NCAyOS41NjY0MDYgMjMgMjkuMDk3NjU2IDIzIEwgMi44OTg0MzggMjMgQyAyLjM0NzY1NiAyMyAyIDIyLjU2NjQwNiAyIDIyLjA5NzY1NiBMIDIgMTAuOTAyMzQ0IEMgMiAxMC4yODUxNTYgMi4yODUxNTYgMTAgMi44OTg0MzggMTAgWiBNIDkuNSAxNSBDIDguNjcxODc1IDE1IDggMTUuNjcxODc1IDggMTYuNSBDIDggMTcuMzI4MTI1IDguNjcxODc1IDE4IDkuNSAxOCBDIDEwLjMyODEyNSAxOCAxMSAxNy4zMjgxMjUgMTEgMTYuNSBDIDExIDE1LjY3MTg3NSAxMC4zMjgxMjUgMTUgOS41IDE1IFogTSAxNS41IDE1IEMgMTQuNjcxODc1IDE1IDE0IDE1LjY3MTg3NSAxNCAxNi41IEMgMTQgMTcuMzI4MTI1IDE0LjY3MTg3NSAxOCAxNS41IDE4IEMgMTYuMzI4MTI1IDE4IDE3IDE3LjMyODEyNSAxNyAxNi41IEMgMTcgMTUuNjcxODc1IDE2LjMyODEyNSAxNSAxNS41IDE1IFogTSAyMS41IDE1IEMgMjAuNjcxODc1IDE1IDIwIDE1LjY3MTg3NSAyMCAxNi41IEMgMjAgMTcuMzI4MTI1IDIwLjY3MTg3NSAxOCAyMS41IDE4IEMgMjIuMzI4MTI1IDE4IDIzIDE3LjMyODEyNSAyMyAxNi41IEMgMjMgMTUuNjcxODc1IDIyLjMyODEyNSAxNSAyMS41IDE1IFogJyxcbiAgICAgICAgICBpbmNsdWRlOiBbJ2VkaXQnLCAndmlldycsICdzZWFyY2gtaW5wdXQnLCAnc2VhcmNoUmVzdWx0J10sXG4gICAgICAgICAgZmllbGRSZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgZXhjbHVkZTogW10sXG4gICAgICAgICAgcHJvcGVydGllczoge31cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdCdXR0b25Db250YWluZXInLFxuICAgICAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgICBpY29uOlxuICAgICAgICAgICAgJ000MDAgMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MHYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tNiA0MDBINTRjLTMuMyAwLTYtMi43LTYtNlY4NmMwLTMuMyAyLjctNiA2LTZoMzQwYzMuMyAwIDYgMi43IDYgNnYzNDBjMCAzLjMtMi43IDYtNiA2eicsXG4gICAgICAgICAgaW5jbHVkZTogWydlZGl0JywgJ3ZpZXcnLCAnc2VhcmNoLWlucHV0JywgJ3NlYXJjaFJlc3VsdCddLFxuICAgICAgICAgIGZpZWxkUmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgICAgICAgIHByb3BlcnRpZXM6IHt9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdkYXRhJyxcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdEYXRhVGFibGUnLFxuICAgICAgICAgIGljb246XG4gICAgICAgICAgICAnTTQ2NCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoNDE2YzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHpNMjI0IDQxNkg2NHYtOTZoMTYwdjk2em0wLTE2MEg2NHYtOTZoMTYwdjk2em0yMjQgMTYwSDI4OHYtOTZoMTYwdjk2em0wLTE2MEgyODh2LTk2aDE2MHY5NnonLFxuICAgICAgICAgIGluY2x1ZGU6IFsnc2VhcmNoUmVzdWx0J10sXG4gICAgICAgICAgZXhjbHVkZTogW10sXG4gICAgICAgICAgcHJvcGVydGllczoge31cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3BhbmVsJyxcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdUYWJQYW5lbCcsXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNNDY0IDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGg0MTZjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4ek0yMjQgNDE2SDY0VjE2MGgxNjB2MjU2em0yMjQgMEgyODhWMTYwaDE2MHYyNTZ6JyxcbiAgICAgICAgICBjb250YWluZXI6IHRydWUsXG4gICAgICAgICAgaW5jbHVkZTogWydlZGl0JywgJ3ZpZXcnXSxcbiAgICAgICAgICBjaGlsZHM6IFsnVGFiSXRlbScsICdUYWJJdGVtJ10sXG4gICAgICAgICAgZXhjbHVkZTogW10sXG4gICAgICAgICAgcHJvcGVydGllczoge31cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNNTAwIDEyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyVjQ0YzAtNi42MjctNS4zNzMtMTItMTItMTJoLTcyYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEySDk2VjQ0YzAtNi42MjctNS4zNzMtMTItMTItMTJIMTJDNS4zNzMgMzIgMCAzNy4zNzMgMCA0NHY3MmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDEydjI1NkgxMmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnY3MmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDcyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTEyaDMyMHYxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDcyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTcyYzAtNi42MjctNS4zNzMtMTItMTItMTJoLTEyVjEyOGgxMnptLTUyLTY0aDMydjMyaC0zMlY2NHpNMzIgNjRoMzJ2MzJIMzJWNjR6bTMyIDM4NEgzMnYtMzJoMzJ2MzJ6bTQxNiAwaC0zMnYtMzJoMzJ2MzJ6bS00MC02NGgtMTJjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTJIOTZ2LTEyYzAtNi42MjctNS4zNzMtMTItMTItMTJINzJWMTI4aDEyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTEyaDMyMHYxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDEydjI1NnptLTM2LTE5MmgtODR2LTUyYzAtNi42MjgtNS4zNzMtMTItMTItMTJIMTA4Yy02LjYyNyAwLTEyIDUuMzcyLTEyIDEydjE2OGMwIDYuNjI4IDUuMzczIDEyIDEyIDEyaDg0djUyYzAgNi42MjggNS4zNzMgMTIgMTIgMTJoMjAwYzYuNjI3IDAgMTItNS4zNzIgMTItMTJWMjA0YzAtNi42MjgtNS4zNzMtMTItMTItMTJ6bS0yNjgtMjRoMTQ0djExMkgxMzZWMTY4em0yNDAgMTc2SDIzMnYtMjRoNzZjNi42MjcgMCAxMi01LjM3MiAxMi0xMnYtNzZoNTZ2MTEyeicsXG4gICAgICAgICAgY29udGFpbmVyOiB0cnVlLFxuICAgICAgICAgIGluY2x1ZGU6IFsnZWRpdCcsICd2aWV3J10sXG4gICAgICAgICAgZXhjbHVkZTogW10sXG4gICAgICAgICAgcHJvcGVydGllczoge31cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ290aGVyJyxcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdUYWJQYW5lbCcsXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNNDY0IDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGg0MTZjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4ek0yMjQgNDE2SDY0VjE2MGgxNjB2MjU2em0yMjQgMEgyODhWMTYwaDE2MHYyNTZ6JyxcbiAgICAgICAgICBpbmNsdWRlOiBbJ2VkaXQnLCAndmlldyddLFxuICAgICAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgICAgICAgIHByb3BlcnRpZXM6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR3JvdXAnLFxuICAgICAgICAgIGljb246XG4gICAgICAgICAgICAnTTUwMCAxMjhjNi42MjcgMCAxMi01LjM3MyAxMi0xMlY0NGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyaC03MmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMkg5NlY0NGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDEyQzUuMzczIDMyIDAgMzcuMzczIDAgNDR2NzJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgxMnYyNTZIMTJjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2NzJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmg3MmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi0xMmgzMjB2MTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmg3MmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi03MmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyaC0xMlYxMjhoMTJ6bS01Mi02NGgzMnYzMmgtMzJWNjR6TTMyIDY0aDMydjMySDMyVjY0em0zMiAzODRIMzJ2LTMyaDMydjMyem00MTYgMGgtMzJ2LTMyaDMydjMyem0tNDAtNjRoLTEyYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEySDk2di0xMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDcyVjEyOGgxMmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi0xMmgzMjB2MTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgxMnYyNTZ6bS0zNi0xOTJoLTg0di01MmMwLTYuNjI4LTUuMzczLTEyLTEyLTEySDEwOGMtNi42MjcgMC0xMiA1LjM3Mi0xMiAxMnYxNjhjMCA2LjYyOCA1LjM3MyAxMiAxMiAxMmg4NHY1MmMwIDYuNjI4IDUuMzczIDEyIDEyIDEyaDIwMGM2LjYyNyAwIDEyLTUuMzcyIDEyLTEyVjIwNGMwLTYuNjI4LTUuMzczLTEyLTEyLTEyem0tMjY4LTI0aDE0NHYxMTJIMTM2VjE2OHptMjQwIDE3NkgyMzJ2LTI0aDc2YzYuNjI3IDAgMTItNS4zNzIgMTItMTJ2LTc2aDU2djExMnonLFxuICAgICAgICAgIGluY2x1ZGU6IFsnZWRpdCcsICd2aWV3J10sXG4gICAgICAgICAgZXhjbHVkZTogW10sXG4gICAgICAgICAgcHJvcGVydGllczoge31cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ290aGVyMScsXG4gICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnVGFiUGFuZWwnLFxuICAgICAgICAgIGljb246XG4gICAgICAgICAgICAnTTQ2NCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoNDE2YzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHpNMjI0IDQxNkg2NFYxNjBoMTYwdjI1NnptMjI0IDBIMjg4VjE2MGgxNjB2MjU2eicsXG4gICAgICAgICAgaW5jbHVkZTogWydlZGl0JywgJ3ZpZXcnXSxcbiAgICAgICAgICBleGNsdWRlOiBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7fVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0dyb3VwJyxcbiAgICAgICAgICBpY29uOlxuICAgICAgICAgICAgJ001MDAgMTI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJWNDRjMC02LjYyNy01LjM3My0xMi0xMi0xMmgtNzJjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTJIOTZWNDRjMC02LjYyNy01LjM3My0xMi0xMi0xMkgxMkM1LjM3MyAzMiAwIDM3LjM3MyAwIDQ0djcyYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMTJ2MjU2SDEyYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjcyYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoNzJjNi42MjcgMCAxMi01LjM3MyAxMi0xMnYtMTJoMzIwdjEyYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoNzJjNi42MjcgMCAxMi01LjM3MyAxMi0xMnYtNzJjMC02LjYyNy01LjM3My0xMi0xMi0xMmgtMTJWMTI4aDEyem0tNTItNjRoMzJ2MzJoLTMyVjY0ek0zMiA2NGgzMnYzMkgzMlY2NHptMzIgMzg0SDMydi0zMmgzMnYzMnptNDE2IDBoLTMydi0zMmgzMnYzMnptLTQwLTY0aC0xMmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMkg5NnYtMTJjMC02LjYyNy01LjM3My0xMi0xMi0xMkg3MlYxMjhoMTJjNi42MjcgMCAxMi01LjM3MyAxMi0xMnYtMTJoMzIwdjEyYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMTJ2MjU2em0tMzYtMTkyaC04NHYtNTJjMC02LjYyOC01LjM3My0xMi0xMi0xMkgxMDhjLTYuNjI3IDAtMTIgNS4zNzItMTIgMTJ2MTY4YzAgNi42MjggNS4zNzMgMTIgMTIgMTJoODR2NTJjMCA2LjYyOCA1LjM3MyAxMiAxMiAxMmgyMDBjNi42MjcgMCAxMi01LjM3MiAxMi0xMlYyMDRjMC02LjYyOC01LjM3My0xMi0xMi0xMnptLTI2OC0yNGgxNDR2MTEySDEzNlYxNjh6bTI0MCAxNzZIMjMydi0yNGg3NmM2LjYyNyAwIDEyLTUuMzcyIDEyLTEydi03Nmg1NnYxMTJ6JyxcbiAgICAgICAgICBpbmNsdWRlOiBbJ2VkaXQnLCAndmlldyddLFxuICAgICAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgICAgICAgIHByb3BlcnRpZXM6IHt9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdvdGhlcjInLFxuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1RhYlBhbmVsJyxcbiAgICAgICAgICBpY29uOlxuICAgICAgICAgICAgJ000NjQgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDQxNmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6TTIyNCA0MTZINjRWMTYwaDE2MHYyNTZ6bTIyNCAwSDI4OFYxNjBoMTYwdjI1NnonLFxuICAgICAgICAgIGluY2x1ZGU6IFsnZWRpdCcsICd2aWV3J10sXG4gICAgICAgICAgZXhjbHVkZTogW10sXG4gICAgICAgICAgcHJvcGVydGllczoge31cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNNTAwIDEyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyVjQ0YzAtNi42MjctNS4zNzMtMTItMTItMTJoLTcyYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEySDk2VjQ0YzAtNi42MjctNS4zNzMtMTItMTItMTJIMTJDNS4zNzMgMzIgMCAzNy4zNzMgMCA0NHY3MmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDEydjI1NkgxMmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnY3MmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDcyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTEyaDMyMHYxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDcyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTcyYzAtNi42MjctNS4zNzMtMTItMTItMTJoLTEyVjEyOGgxMnptLTUyLTY0aDMydjMyaC0zMlY2NHpNMzIgNjRoMzJ2MzJIMzJWNjR6bTMyIDM4NEgzMnYtMzJoMzJ2MzJ6bTQxNiAwaC0zMnYtMzJoMzJ2MzJ6bS00MC02NGgtMTJjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTJIOTZ2LTEyYzAtNi42MjctNS4zNzMtMTItMTItMTJINzJWMTI4aDEyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTEyaDMyMHYxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDEydjI1NnptLTM2LTE5MmgtODR2LTUyYzAtNi42MjgtNS4zNzMtMTItMTItMTJIMTA4Yy02LjYyNyAwLTEyIDUuMzcyLTEyIDEydjE2OGMwIDYuNjI4IDUuMzczIDEyIDEyIDEyaDg0djUyYzAgNi42MjggNS4zNzMgMTIgMTIgMTJoMjAwYzYuNjI3IDAgMTItNS4zNzIgMTItMTJWMjA0YzAtNi42MjgtNS4zNzMtMTItMTItMTJ6bS0yNjgtMjRoMTQ0djExMkgxMzZWMTY4em0yNDAgMTc2SDIzMnYtMjRoNzZjNi42MjcgMCAxMi01LjM3MiAxMi0xMnYtNzZoNTZ2MTEyJyxcbiAgICAgICAgICBpbmNsdWRlOiBbJ2VkaXQnLCAndmlldyddLFxuICAgICAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgICAgICAgIHByb3BlcnRpZXM6IHt9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdvdGhlcjMnLFxuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1RhYlBhbmVsJyxcbiAgICAgICAgICBpY29uOlxuICAgICAgICAgICAgJ000NjQgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDQxNmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6TTIyNCA0MTZINjRWMTYwaDE2MHYyNTZ6bTIyNCAwSDI4OFYxNjBoMTYwdjI1NnonLFxuICAgICAgICAgIGluY2x1ZGU6IFsnZWRpdCcsICd2aWV3J10sXG4gICAgICAgICAgZXhjbHVkZTogW10sXG4gICAgICAgICAgcHJvcGVydGllczoge31cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNNTAwIDEyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyVjQ0YzAtNi42MjctNS4zNzMtMTItMTItMTJoLTcyYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEySDk2VjQ0YzAtNi42MjctNS4zNzMtMTItMTItMTJIMTJDNS4zNzMgMzIgMCAzNy4zNzMgMCA0NHY3MmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDEydjI1NkgxMmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnY3MmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDcyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTEyaDMyMHYxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDcyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTcyYzAtNi42MjctNS4zNzMtMTItMTItMTJoLTEyVjEyOGgxMnptLTUyLTY0aDMydjMyaC0zMlY2NHpNMzIgNjRoMzJ2MzJIMzJWNjR6bTMyIDM4NEgzMnYtMzJoMzJ2MzJ6bTQxNiAwaC0zMnYtMzJoMzJ2MzJ6bS00MC02NGgtMTJjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTJIOTZ2LTEyYzAtNi42MjctNS4zNzMtMTItMTItMTJINzJWMTI4aDEyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTEyaDMyMHYxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDEydjI1NnptLTM2LTE5MmgtODR2LTUyYzAtNi42MjgtNS4zNzMtMTItMTItMTJIMTA4Yy02LjYyNyAwLTEyIDUuMzcyLTEyIDEydjE2OGMwIDYuNjI4IDUuMzczIDEyIDEyIDEyaDg0djUyYzAgNi42MjggNS4zNzMgMTIgMTIgMTJoMjAwYzYuNjI3IDAgMTItNS4zNzIgMTItMTJWMjA0YzAtNi42MjgtNS4zNzMtMTItMTItMTJ6bS0yNjgtMjRoMTQ0djExMkgxMzZWMTY4em0yNDAgMTc2SDIzMnYtMjRoNzZjNi42MjcgMCAxMi01LjM3MiAxMi0xMnYtNzZoNTZ2MTEyeicsXG4gICAgICAgICAgaW5jbHVkZTogWydlZGl0JywgJ3ZpZXcnXSxcbiAgICAgICAgICBleGNsdWRlOiBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7fVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnb3RoZXI0JyxcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdUYWJQYW5lbCcsXG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgICdNNDY0IDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGg0MTZjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4ek0yMjQgNDE2SDY0VjE2MGgxNjB2MjU2em0yMjQgMEgyODhWMTYwaDE2MHYyNTZ6JyxcbiAgICAgICAgICBpbmNsdWRlOiBbJ2VkaXQnLCAndmlldyddLFxuICAgICAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgICAgICAgIHByb3BlcnRpZXM6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR3JvdXAnLFxuICAgICAgICAgIGljb246XG4gICAgICAgICAgICAnTTUwMCAxMjhjNi42MjcgMCAxMi01LjM3MyAxMi0xMlY0NGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyaC03MmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMkg5NlY0NGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDEyQzUuMzczIDMyIDAgMzcuMzczIDAgNDR2NzJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgxMnYyNTZIMTJjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2NzJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmg3MmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi0xMmgzMjB2MTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmg3MmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi03MmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyaC0xMlYxMjhoMTJ6bS01Mi02NGgzMnYzMmgtMzJWNjR6TTMyIDY0aDMydjMySDMyVjY0em0zMiAzODRIMzJ2LTMyaDMydjMyem00MTYgMGgtMzJ2LTMyaDMydjMyem0tNDAtNjRoLTEyYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEySDk2di0xMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDcyVjEyOGgxMmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi0xMmgzMjB2MTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgxMnYyNTZ6bS0zNi0xOTJoLTg0di01MmMwLTYuNjI4LTUuMzczLTEyLTEyLTEySDEwOGMtNi42MjcgMC0xMiA1LjM3Mi0xMiAxMnYxNjhjMCA2LjYyOCA1LjM3MyAxMiAxMiAxMmg4NHY1MmMwIDYuNjI4IDUuMzczIDEyIDEyIDEyaDIwMGM2LjYyNyAwIDEyLTUuMzcyIDEyLTEyVjIwNGMwLTYuNjI4LTUuMzczLTEyLTEyLTEyem0tMjY4LTI0aDE0NHYxMTJIMTM2VjE2OHptMjQwIDE3NkgyMzJ2LTI0aDc2YzYuNjI3IDAgMTItNS4zNzIgMTItMTJ2LTc2aDU2djExMnonLFxuICAgICAgICAgIGluY2x1ZGU6IFsnZWRpdCcsICd2aWV3J10sXG4gICAgICAgICAgZXhjbHVkZTogW10sXG4gICAgICAgICAgcHJvcGVydGllczoge31cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcblxuZXhwb3J0IGNvbnN0IFRFTVBMQVRFX0xJQlJBUlkgPSB7XG4gIG5hbWU6ICdQYWxteXJhQW5ndWxhclRlbXBsYXRlcycsXG4gIHZlcnNpb246ICcxLjAuMScsXG4gIHRlbXBsYXRlczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdFZGl0JyxcbiAgICAgIHRlbXBsYXRlOiAnZWRpdCcsXG4gICAgICB0aXRsZTogJ0VkaXQnLFxuICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdjb21wb25lbnRzJyxcbiAgICAgICAgICB0aXRsZTogJ0NvbXBvbmVudHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYWN0aW9ucycsXG4gICAgICAgICAgdGl0bGU6ICdBY3Rpb25zJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgaWNvbjogJycsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3dUaXRsZToge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbEFsaWduZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZW51bTogWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ11cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZlYXR1cmVOYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VydmljZVBhdGhzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBodHRwTWV0aG9kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW06IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BVVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdIRUFEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdDT05ORUNUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ09QVElPTlMnXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlQm9keToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbHVhdGlvblR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtOiBbJ2NsaWVudCcsICdzZXJ2ZXInXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGlvbkJhc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NyZWVuczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25UeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW06IFsnZm9yd2FyZCcsICdiYWNrJywgJ2RpYWxvZycsICdzd2l0Y2gnLCAnY2FsbCddXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wb25lbnRzQnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICB4czoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogMTJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc206IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICAgICAgICAgIG1heGltdW06IDEyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1kOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiAxMlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsZzoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogMTJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZWQ6IFtdXG4gICAgICB9LFxuICAgICAgbGF5b3V0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICd0aXRsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2xhYmVsQWxpZ25lbWVudCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2NvbXBvbmVudHNCcmVha3BvaW50cy54cydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2NvbXBvbmVudHNCcmVha3BvaW50cy5zbSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2NvbXBvbmVudHNCcmVha3BvaW50cy5tZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2NvbXBvbmVudHNCcmVha3BvaW50cy5sZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2FjdGlvbnMnLFxuICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5uYW1lJyxcbiAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ25hbWUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10udGVtcGxhdGUnLFxuICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndGVtcGxhdGUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLnVybCcsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ3VybCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5odHRwTWV0aG9kJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnaHR0cCBNZXRob2QnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmV4cHJlc3Npb24nLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjb25kaXRpb24gZXhwcmVzc2lvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5jb25kaXRpb24uZXZhbHVhdGlvblR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjb25kaXRpb24gZXZhbHVhdGlvbiBUeXBlJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmNvbmRpdGlvbi5jYWxjdWxhdGlvbkJhc2UnLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmNhbGN1bGF0aW9uQmFzZVtdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjYWxjdWxhdGlvbiBCYXNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5pbmNsdWRlQm9keScsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdpbmNsdWRlIEJvZHknLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnaW5jbHVkZSBCb2R5J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2NyZWVucycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zY3JlZW5zW10ucGF0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NjcmVlbiBQYXRoJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNjcmVlbnNbXS5uYXZpZ2F0aW9uVHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ05hdmlnYXRpb24gVHlwZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnc2hvd1RpdGxlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGVtcGxhdGU6ICdzZWxlY3RvcicsXG4gICAgICBuYW1lOiAnU2VsZWN0b3InLFxuICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgIHRpdGxlOiAnRmlsdGVyJyxcbiAgICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnY29tcG9uZW50cycsXG4gICAgICAgICAgICAgIHRpdGxlOiAnQ29tcG9uZW50cydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdhY3Rpb25zJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdBY3Rpb25zJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdncmlkJyxcbiAgICAgICAgICB0aXRsZTogJ0dyaWQnLFxuICAgICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdjb2x1bW5zJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdDb2x1bW5zJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2FjdGlvbnMnLFxuICAgICAgICAgICAgICB0aXRsZTogJ0FjdGlvbnMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgaWNvbjogJycsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3dUaXRsZToge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbEFsaWduZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZW51bTogWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ11cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZlYXR1cmVOYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VydmljZVBhdGhzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBodHRwTWV0aG9kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW06IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BVVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdIRUFEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdDT05ORUNUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ09QVElPTlMnXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlQm9keToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbHVhdGlvblR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtOiBbJ2NsaWVudCcsICdzZXJ2ZXInXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGlvbkJhc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NyZWVuczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25UeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW06IFsnZm9yd2FyZCcsICdiYWNrJywgJ2RpYWxvZycsICdzd2l0Y2gnLCAnY2FsbCddXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wb25lbnRzQnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICB4czoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogMTJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc206IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICAgICAgICAgIG1heGltdW06IDEyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1kOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiAxMlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsZzoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogMTJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZWQ6IFtdXG4gICAgICB9LFxuICAgICAgbGF5b3V0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICd0aXRsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2xhYmVsQWxpZ25lbWVudCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2NvbXBvbmVudHNCcmVha3BvaW50cy54cydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2NvbXBvbmVudHNCcmVha3BvaW50cy5zbSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2NvbXBvbmVudHNCcmVha3BvaW50cy5tZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2NvbXBvbmVudHNCcmVha3BvaW50cy5sZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2FjdGlvbnMnLFxuICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5uYW1lJyxcbiAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ25hbWUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10udGVtcGxhdGUnLFxuICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndGVtcGxhdGUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLnVybCcsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ3VybCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5odHRwTWV0aG9kJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnaHR0cCBNZXRob2QnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmV4cHJlc3Npb24nLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjb25kaXRpb24gZXhwcmVzc2lvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5jb25kaXRpb24uZXZhbHVhdGlvblR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjb25kaXRpb24gZXZhbHVhdGlvbiBUeXBlJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmNvbmRpdGlvbi5jYWxjdWxhdGlvbkJhc2UnLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmNhbGN1bGF0aW9uQmFzZVtdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjYWxjdWxhdGlvbiBCYXNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5pbmNsdWRlQm9keScsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdpbmNsdWRlIEJvZHknLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnaW5jbHVkZSBCb2R5J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2NyZWVucycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zY3JlZW5zW10ucGF0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NjcmVlbiBQYXRoJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNjcmVlbnNbXS5uYXZpZ2F0aW9uVHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ05hdmlnYXRpb24gVHlwZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnc2hvd1RpdGxlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGVtcGxhdGU6ICdzZWFyY2gnLFxuICAgICAgbmFtZTogJ1NlYXJjaCcsXG4gICAgICBzZWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NvbHVtbnMnLFxuICAgICAgICAgIHRpdGxlOiAnQ29sdW1ucydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhY3Rpb25zJyxcbiAgICAgICAgICB0aXRsZTogJ0FjdGlvbnMnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBpY29uOiAnJyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvd1RpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3dDaGVja0JveE9uUm93OiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZpdFdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVuYWJsZVNvcnRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIHBhZ2VTaXplOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2hvd0NvbWJvOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcGFnZVBvc3NpYmxlU2l6ZXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmVhdHVyZU5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlUGF0aHM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgIHVybDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGh0dHBNZXRob2Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnUFVUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0hFQUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnREVMRVRFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NPTk5FQ1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnT1BUSU9OUydcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVCb2R5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsdWF0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW06IFsnY2xpZW50JywgJ3NlcnZlciddXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0aW9uQmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY3JlZW5zOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvblR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bTogWydmb3J3YXJkJywgJ2JhY2snLCAnZGlhbG9nJywgJ3N3aXRjaCcsICdjYWxsJ11cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkOiBbXVxuICAgICAgfSxcbiAgICAgIGxheW91dDogW1xuICAgICAgICB7XG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAndGl0bGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdwYWdpbmF0aW9uLnBhZ2VTaXplJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAncGFnaW5hdGlvbi5wb3NpdGlvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ3BhZ2luYXRpb24ucGFnZVBvc3NpYmxlU2l6ZXMnLFxuICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3BhZ2luYXRpb24ucGFnZVBvc3NpYmxlU2l6ZXNbXScsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BhZ2UgUG9zc2libGUgU2l6ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2FjdGlvbnMnLFxuICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5uYW1lJyxcbiAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ25hbWUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10udGVtcGxhdGUnLFxuICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndGVtcGxhdGUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLnVybCcsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ3VybCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5odHRwTWV0aG9kJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnaHR0cCBNZXRob2QnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmV4cHJlc3Npb24nLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjb25kaXRpb24gZXhwcmVzc2lvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5jb25kaXRpb24uZXZhbHVhdGlvblR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjb25kaXRpb24gZXZhbHVhdGlvbiBUeXBlJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmNvbmRpdGlvbi5jYWxjdWxhdGlvbkJhc2UnLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmNhbGN1bGF0aW9uQmFzZVtdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjYWxjdWxhdGlvbiBCYXNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5pbmNsdWRlQm9keScsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdpbmNsdWRlIEJvZHknLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnaW5jbHVkZSBCb2R5J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2NyZWVucycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zY3JlZW5zW10ucGF0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NjcmVlbiBQYXRoJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNjcmVlbnNbXS5uYXZpZ2F0aW9uVHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ05hdmlnYXRpb24gVHlwZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAncGFnaW5hdGlvbi5zaG93Q29tYm8nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdzaG93Q2hlY2tCb3hPblJvdydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2ZpdFdpZHRoJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnZW5hYmxlU29ydGluZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdzZWFyY2hJbnB1dCcsXG4gICAgICB0aXRsZTogJ1NlYXJjaCBJbnB1dCcsXG4gICAgICBzZWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NvbXBvbmVudHMnLFxuICAgICAgICAgIHRpdGxlOiAnQ29tcG9uZW50cydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhY3Rpb25zJyxcbiAgICAgICAgICB0aXRsZTogJ0FjdGlvbnMnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBpY29uOiAnJyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmYXVsdENyaXRlcmlhOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmVhdHVyZU5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93VGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGlkZU9wZXJhdG9yczoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbEFsaWduZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZW51bTogWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ11cbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcnZpY2VQYXRoczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgaHR0cE1ldGhvZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdQVVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnSEVBRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdERUxFVEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnQ09OTkVDVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdPUFRJT05TJ1xuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUJvZHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV2YWx1YXRpb25UeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bTogWydjbGllbnQnLCAnc2VydmVyJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRpb25CYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjcmVlbnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtOiBbJ2ZvcndhcmQnLCAnYmFjaycsICdkaWFsb2cnLCAnc3dpdGNoJywgJ2NhbGwnXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcG9uZW50c0JyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgeHM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICAgICAgICAgIG1heGltdW06IDEyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiAxMlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogMTJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGc6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICAgICAgICAgIG1heGltdW06IDEyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkOiBbXVxuICAgICAgfSxcbiAgICAgIGxheW91dDogW1xuICAgICAgICB7XG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAndGl0bGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdkZWZhdWx0Q3JpdGVyaWEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdsYWJlbEFsaWduZW1lbnQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdjb21wb25lbnRzQnJlYWtwb2ludHMueHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdjb21wb25lbnRzQnJlYWtwb2ludHMuc20nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdjb21wb25lbnRzQnJlYWtwb2ludHMubWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdjb21wb25lbnRzQnJlYWtwb2ludHMubGcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10ubmFtZScsXG4gICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICduYW1lJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnRlbXBsYXRlJyxcbiAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ3RlbXBsYXRlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRocycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS51cmwnLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd1cmwnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uaHR0cE1ldGhvZCcsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2h0dHAgTWV0aG9kJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmNvbmRpdGlvbi5leHByZXNzaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnY29uZGl0aW9uIGV4cHJlc3Npb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmV2YWx1YXRpb25UeXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnY29uZGl0aW9uIGV2YWx1YXRpb24gVHlwZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5jb25kaXRpb24uY2FsY3VsYXRpb25CYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmNvbmRpdGlvbi5jYWxjdWxhdGlvbkJhc2VbXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnY2FsY3VsYXRpb24gQmFzZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uaW5jbHVkZUJvZHknLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnaW5jbHVkZSBCb2R5JyxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2luY2x1ZGUgQm9keSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNjcmVlbnMnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2NyZWVuc1tdLnBhdGgnLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTY3JlZW4gUGF0aCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zY3JlZW5zW10ubmF2aWdhdGlvblR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdOYXZpZ2F0aW9uIFR5cGUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ3Nob3dUaXRsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2hpZGVPcGVyYXRvcnMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZWRpdC1jb2xsZWN0aW9uJyxcbiAgICAgIHRpdGxlOiAnRWRpdCBDb2xsZWN0aW9uJyxcbiAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnY29sdW1ucycsXG4gICAgICAgICAgdGl0bGU6ICdDb2x1bW5zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2FjdGlvbnMnLFxuICAgICAgICAgIHRpdGxlOiAnQWN0aW9ucydcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGljb246ICcnLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93VGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvd0NoZWNrQm94T25Sb3c6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZml0V2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZW5hYmxlU29ydGluZzoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgcGFnZVNpemU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzaG93Q29tYm86IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwYWdlUG9zc2libGVTaXplczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmZWF0dXJlTmFtZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcnZpY2VQYXRoczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgaHR0cE1ldGhvZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdQVVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnSEVBRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdERUxFVEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnQ09OTkVDVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdPUFRJT05TJ1xuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUJvZHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV2YWx1YXRpb25UeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bTogWydjbGllbnQnLCAnc2VydmVyJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRpb25CYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjcmVlbnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtOiBbJ2ZvcndhcmQnLCAnYmFjaycsICdkaWFsb2cnLCAnc3dpdGNoJywgJ2NhbGwnXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZWQ6IFtdXG4gICAgICB9LFxuICAgICAgbGF5b3V0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICd0aXRsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ3BhZ2luYXRpb24ucGFnZVNpemUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdwYWdpbmF0aW9uLnBvc2l0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAncGFnaW5hdGlvbi5wYWdlUG9zc2libGVTaXplcycsXG4gICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAncGFnaW5hdGlvbi5wYWdlUG9zc2libGVTaXplc1tdJyxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGFnZSBQb3NzaWJsZSBTaXplJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnYWN0aW9ucycsXG4gICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLm5hbWUnLFxuICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnbmFtZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS50ZW1wbGF0ZScsXG4gICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd0ZW1wbGF0ZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHMnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10udXJsJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndXJsJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmh0dHBNZXRob2QnLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdodHRwIE1ldGhvZCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5jb25kaXRpb24uZXhwcmVzc2lvbicsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2NvbmRpdGlvbiBleHByZXNzaW9uJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmNvbmRpdGlvbi5ldmFsdWF0aW9uVHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2NvbmRpdGlvbiBldmFsdWF0aW9uIFR5cGUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmNhbGN1bGF0aW9uQmFzZScsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5jb25kaXRpb24uY2FsY3VsYXRpb25CYXNlW10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2NhbGN1bGF0aW9uIEJhc2UnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmluY2x1ZGVCb2R5JyxcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2luY2x1ZGUgQm9keScsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdpbmNsdWRlIEJvZHknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zY3JlZW5zJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNjcmVlbnNbXS5wYXRoJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2NyZWVuIFBhdGgnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2NyZWVuc1tdLm5hdmlnYXRpb25UeXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTmF2aWdhdGlvbiBUeXBlJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdwYWdpbmF0aW9uLnNob3dDb21ibydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ3Nob3dDaGVja0JveE9uUm93J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnZml0V2lkdGgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdlbmFibGVTb3J0aW5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3ZpZXctY29sbGVjdGlvbicsXG4gICAgICB0aXRsZTogJ1ZpZXcgQ29sbGVjdGlvbicsXG4gICAgICBzZWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NvbHVtbnMnLFxuICAgICAgICAgIHRpdGxlOiAnQ29sdW1ucydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhY3Rpb25zJyxcbiAgICAgICAgICB0aXRsZTogJ0FjdGlvbnMnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBpY29uOiAnJyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvd1RpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3dDaGVja0JveE9uUm93OiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZpdFdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVuYWJsZVNvcnRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIHBhZ2VTaXplOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2hvd0NvbWJvOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcGFnZVBvc3NpYmxlU2l6ZXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmVhdHVyZU5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlUGF0aHM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgIHVybDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGh0dHBNZXRob2Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnUFVUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0hFQUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnREVMRVRFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NPTk5FQ1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnT1BUSU9OUydcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVCb2R5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsdWF0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW06IFsnY2xpZW50JywgJ3NlcnZlciddXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0aW9uQmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY3JlZW5zOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvblR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bTogWydmb3J3YXJkJywgJ2JhY2snLCAnZGlhbG9nJywgJ3N3aXRjaCcsICdjYWxsJ11cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkOiBbXVxuICAgICAgfSxcbiAgICAgIGxheW91dDogW1xuICAgICAgICB7XG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAndGl0bGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdwYWdpbmF0aW9uLnBhZ2VTaXplJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAncGFnaW5hdGlvbi5wb3NpdGlvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ3BhZ2luYXRpb24ucGFnZVBvc3NpYmxlU2l6ZXMnLFxuICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3BhZ2luYXRpb24ucGFnZVBvc3NpYmxlU2l6ZXNbXScsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BhZ2UgUG9zc2libGUgU2l6ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2FjdGlvbnMnLFxuICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5uYW1lJyxcbiAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ25hbWUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10udGVtcGxhdGUnLFxuICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndGVtcGxhdGUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLnVybCcsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ3VybCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5odHRwTWV0aG9kJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnaHR0cCBNZXRob2QnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmV4cHJlc3Npb24nLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjb25kaXRpb24gZXhwcmVzc2lvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5jb25kaXRpb24uZXZhbHVhdGlvblR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjb25kaXRpb24gZXZhbHVhdGlvbiBUeXBlJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmNvbmRpdGlvbi5jYWxjdWxhdGlvbkJhc2UnLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmNhbGN1bGF0aW9uQmFzZVtdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdjYWxjdWxhdGlvbiBCYXNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5pbmNsdWRlQm9keScsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdpbmNsdWRlIEJvZHknLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnaW5jbHVkZSBCb2R5J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2NyZWVucycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zY3JlZW5zW10ucGF0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NjcmVlbiBQYXRoJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNjcmVlbnNbXS5uYXZpZ2F0aW9uVHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ05hdmlnYXRpb24gVHlwZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAncGFnaW5hdGlvbi5zaG93Q29tYm8nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdzaG93Q2hlY2tCb3hPblJvdydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ2ZpdFdpZHRoJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnZW5hYmxlU29ydGluZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd2aWV3JyxcbiAgICAgIHRpdGxlOiAnVmlldycsXG4gICAgICBpY29uOiAnJyxcbiAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnY29tcG9uZW50cycsXG4gICAgICAgICAgdGl0bGU6ICdDb21wb25lbnRzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2FjdGlvbnMnLFxuICAgICAgICAgIHRpdGxlOiAnQWN0aW9ucydcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvd1RpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsQWxpZ25lbWVudDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBlbnVtOiBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmVhdHVyZU5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlUGF0aHM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgIHVybDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGh0dHBNZXRob2Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnUFVUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0hFQUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnREVMRVRFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NPTk5FQ1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnT1BUSU9OUydcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVCb2R5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsdWF0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW06IFsnY2xpZW50JywgJ3NlcnZlciddXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0aW9uQmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY3JlZW5zOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvblR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bTogWydmb3J3YXJkJywgJ2JhY2snLCAnZGlhbG9nJywgJ3N3aXRjaCcsICdjYWxsJ11cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBvbmVudHNCcmVha3BvaW50czoge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIHhzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiAxMlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzbToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogMTJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICAgICAgICAgIG1heGltdW06IDEyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxnOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiAxMlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW11cbiAgICAgIH0sXG4gICAgICBsYXlvdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ3RpdGxlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnbGFiZWxBbGlnbmVtZW50J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnY29tcG9uZW50c0JyZWFrcG9pbnRzLnhzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnY29tcG9uZW50c0JyZWFrcG9pbnRzLnNtJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnY29tcG9uZW50c0JyZWFrcG9pbnRzLm1kJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnY29tcG9uZW50c0JyZWFrcG9pbnRzLmxnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnYWN0aW9ucycsXG4gICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLm5hbWUnLFxuICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnbmFtZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS50ZW1wbGF0ZScsXG4gICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd0ZW1wbGF0ZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHMnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10udXJsJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndXJsJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmh0dHBNZXRob2QnLFxuICAgICAgICAgICAgICAgICAgICAgIG5vdGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdodHRwIE1ldGhvZCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5jb25kaXRpb24uZXhwcmVzc2lvbicsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2NvbmRpdGlvbiBleHByZXNzaW9uJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmNvbmRpdGlvbi5ldmFsdWF0aW9uVHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgbm90aXRsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2NvbmRpdGlvbiBldmFsdWF0aW9uIFR5cGUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2VydmljZVBhdGhzW10uY29uZGl0aW9uLmNhbGN1bGF0aW9uQmFzZScsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGlvbnNbXS5zZXJ2aWNlUGF0aHNbXS5jb25kaXRpb24uY2FsY3VsYXRpb25CYXNlW10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2NhbGN1bGF0aW9uIEJhc2UnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNlcnZpY2VQYXRoc1tdLmluY2x1ZGVCb2R5JyxcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2luY2x1ZGUgQm9keScsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdpbmNsdWRlIEJvZHknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2FjdGlvbnNbXS5zY3JlZW5zJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnYWN0aW9uc1tdLnNjcmVlbnNbXS5wYXRoJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2NyZWVuIFBhdGgnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY3Rpb25zW10uc2NyZWVuc1tdLm5hdmlnYXRpb25UeXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICBub3RpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTmF2aWdhdGlvbiBUeXBlJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdzaG93VGl0bGUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuXG5leHBvcnQgY29uc3QgUk9MRVM6IFJvbGVbXSA9IFtcbiAgeyBuYW1lOiAnYWRtaW4nIH0sXG4gIHsgbmFtZTogJ3Zlcm1lZ191c2VyJyB9LFxuICB7IG5hbWU6ICdzaW1wbGVfdXNlcicgfSxcbiAgeyBuYW1lOiAncm9sZTEnIH0sXG4gIHsgbmFtZTogJ3JvbGUyJyB9LFxuICB7IG5hbWU6ICdyb2xlMycgfSxcbiAgeyBuYW1lOiAncm9sZTQnIH0sXG4gIHsgbmFtZTogJ3JvbGU1JyB9LFxuICB7IG5hbWU6ICdyb2xlNicgfSxcbiAgeyBuYW1lOiAncm9sZTcnIH0sXG4gIHsgbmFtZTogJ3JvbGU4JyB9LFxuICB7IG5hbWU6ICdyb2xlOScgfSxcbiAgeyBuYW1lOiAncm9sZTEwJyB9LFxuICB7IG5hbWU6ICdyb2xlMTEnIH0sXG4gIHsgbmFtZTogJ3JvbGUxMicgfSxcbiAgeyBuYW1lOiAncm9sZTEzJyB9LFxuICB7IG5hbWU6ICdyb2xlMTQnIH0sXG4gIHsgbmFtZTogJ3JvbGUxNScgfSxcbiAgeyBuYW1lOiAncm9sZTE2JyB9LFxuICB7IG5hbWU6ICdyb2xlMTcnIH0sXG4gIHsgbmFtZTogJ3JvbGUxOCcgfSxcbiAgeyBuYW1lOiAncm9sZTE5JyB9LFxuICB7IG5hbWU6ICdyb2xlMjAnIH0sXG4gIHsgbmFtZTogJ3JvbGUyMScgfSxcbiAgeyBuYW1lOiAncm9sZTIyJyB9LFxuICB7IG5hbWU6ICdyb2xlMjMnIH1cbl07XG4iXX0=