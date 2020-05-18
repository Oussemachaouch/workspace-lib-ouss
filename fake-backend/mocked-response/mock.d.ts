import { Role } from '@palmyra-devkit/core-api/shared';
export declare const COMPONENT_LIBRARY: {
    id: number;
    name: string;
    version: string;
    categories: ({
        name: string;
        components: ({
            name: string;
            category: string;
            icon: string;
            scope: string[];
            rules: {
                includedScreens: string[];
                excludedUseCases: any[];
                includedTypes: string[];
                excludedTypes: any[];
                includedRelation: any[];
                excludedRelation: any[];
            }[];
            container: boolean;
            fieldRequired: boolean;
            schema: {
                type: string;
                properties: {
                    styleName: {
                        type: string;
                        description: string;
                    };
                    label: {
                        type: string;
                        description: string;
                    };
                    readOnly: {
                        type: string;
                        description: string;
                    };
                    readOnlyCondition: {
                        type: string;
                        description: string;
                    };
                    visibilityCondition: {
                        type: string;
                        description: string;
                    };
                    wordSize: {
                        type: string;
                        minimum: number;
                        description: string;
                    };
                    mandatory: {
                        type: string;
                        description: string;
                    };
                    role?: undefined;
                    maxLength?: undefined;
                    prefix?: undefined;
                    suffix?: undefined;
                    mask?: undefined;
                    max?: undefined;
                    screen?: undefined;
                    feature?: undefined;
                    hideOperator?: undefined;
                    keys?: undefined;
                    caseSensitive?: undefined;
                    defaultOperator?: undefined;
                    format?: undefined;
                    showLabel?: undefined;
                    datePrecision?: undefined;
                    displayFilter?: undefined;
                    lazy?: undefined;
                    sortType?: undefined;
                };
                required: string[];
            };
            layout: {
                items: ({
                    key: string;
                    type?: undefined;
                } | {
                    key: string;
                    type: string;
                })[];
            }[];
        } | {
            name: string;
            category: string;
            scope: string[];
            icon: string;
            rules: ({
                includedScreens: string[];
                includedTypes: string[];
                excludedUseCases?: undefined;
            } | {
                excludedUseCases: string[];
                includedTypes: string[];
                includedScreens?: undefined;
            })[];
            container: boolean;
            fieldRequired: boolean;
            schema: {
                type: string;
                properties: {
                    styleName: {
                        type: string;
                        description: string;
                    };
                    readOnly: {
                        type: string;
                        description: string;
                    };
                    readOnlyCondition: {
                        type: string;
                        description: string;
                    };
                    role: {
                        type: string;
                        description: string;
                    };
                    maxLength: {
                        type: string;
                        minimum: number;
                    };
                    prefix: {
                        type: string;
                    };
                    suffix: {
                        type: string;
                    };
                    mask: {
                        type: string;
                    };
                    max: {
                        type: string;
                        minimum: number;
                    };
                    label: {
                        type: string;
                        description: string;
                    };
                    screen: {
                        type: string;
                        enum: string[];
                        description: string;
                    };
                    feature: {
                        type: string;
                        enum: string[];
                        description: string;
                    };
                    hideOperator: {
                        type: string;
                        description: string;
                    };
                    keys: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            properties: {
                                key: {
                                    type: string;
                                };
                            };
                            required: string[];
                        };
                    };
                    caseSensitive: {
                        type: string;
                        enum: string[];
                    };
                    defaultOperator: {
                        type: string;
                        description: string;
                    };
                    visibilityCondition?: undefined;
                    wordSize?: undefined;
                    mandatory?: undefined;
                    format?: undefined;
                    showLabel?: undefined;
                    datePrecision?: undefined;
                    displayFilter?: undefined;
                    lazy?: undefined;
                    sortType?: undefined;
                };
                required: string[];
            };
            layout: {
                items: ({
                    key: string;
                    value: string;
                    deps: string;
                    type?: undefined;
                    rules?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    value: string;
                    deps?: undefined;
                    type?: undefined;
                    rules?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    type: string;
                    value?: undefined;
                    deps?: undefined;
                    rules?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    rules: {
                        includedScreens: string[];
                        excludedUseCases: any[];
                        includedTypes: any[];
                        excludedTypes: any[];
                        includedRelation: any[];
                        excludedRelation: any[];
                    }[];
                    value?: undefined;
                    deps?: undefined;
                    type?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    value?: undefined;
                    deps?: undefined;
                    type?: undefined;
                    rules?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    type: string;
                    rules: {
                        includedScreens: any[];
                        excludedUseCases: any[];
                        includedTypes: string[];
                        excludedTypes: any[];
                        includedRelation: string[];
                        excludedRelation: any[];
                    }[];
                    items: {
                        key: string;
                        notitle: boolean;
                        placeholder: string;
                    }[];
                    value?: undefined;
                    deps?: undefined;
                })[];
            }[];
        } | {
            name: string;
            category: string;
            scope: string[];
            icon: string;
            rules: {
                includedScreens: any[];
                excludedUseCases: any[];
                includedTypes: string[];
                excludedTypes: any[];
                includedRelation: any[];
                excludedRelation: any[];
            }[];
            container: boolean;
            fieldRequired: boolean;
            schema: {
                type: string;
                properties: {
                    styleName: {
                        type: string;
                        description: string;
                    };
                    format: {
                        type: string;
                        description: string;
                    };
                    readOnly: {
                        type: string;
                        description: string;
                    };
                    readOnlyCondition: {
                        type: string;
                        description: string;
                    };
                    visibilityCondition: {
                        type: string;
                        description: string;
                    };
                    label: {
                        type: string;
                        description: string;
                    };
                    mandatory: {
                        type: string;
                        description: string;
                    };
                    showLabel: {
                        type: string;
                        description: string;
                    };
                    datePrecision: {
                        type: string;
                    };
                    wordSize?: undefined;
                    role?: undefined;
                    maxLength?: undefined;
                    prefix?: undefined;
                    suffix?: undefined;
                    mask?: undefined;
                    max?: undefined;
                    screen?: undefined;
                    feature?: undefined;
                    hideOperator?: undefined;
                    keys?: undefined;
                    caseSensitive?: undefined;
                    defaultOperator?: undefined;
                    displayFilter?: undefined;
                    lazy?: undefined;
                    sortType?: undefined;
                };
                required: string[];
            };
            layout: {
                items: ({
                    key: string;
                    type?: undefined;
                } | {
                    key: string;
                    type: string;
                })[];
            }[];
        } | {
            name: string;
            category: string;
            scope: string[];
            icon: string;
            rules: {
                includedScreens: string[];
                excludedUseCases: any[];
                includedTypes: string[];
                excludedTypes: any[];
                includedRelation: string[];
                excludedRelation: any[];
            }[];
            container: boolean;
            fieldRequired: boolean;
            schema: {
                type: string;
                properties: {
                    styleName: {
                        type: string;
                        description: string;
                    };
                    displayFilter: {
                        type: string;
                        description: string;
                    };
                    lazy: {
                        type: string;
                        description: string;
                    };
                    readOnly: {
                        type: string;
                        description: string;
                    };
                    readOnlyCondition: {
                        type: string;
                        description: string;
                    };
                    visibilityCondition: {
                        type: string;
                        description: string;
                    };
                    label: {
                        type: string;
                        description: string;
                    };
                    sortType: {
                        type: string;
                        enum: string[];
                    };
                    mandatory: {
                        type: string;
                        description: string;
                    };
                    showLabel: {
                        type: string;
                        description: string;
                    };
                    keys: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            properties: {
                                key: {
                                    type: string;
                                };
                            };
                            required: string[];
                        };
                    };
                    wordSize?: undefined;
                    role?: undefined;
                    maxLength?: undefined;
                    prefix?: undefined;
                    suffix?: undefined;
                    mask?: undefined;
                    max?: undefined;
                    screen?: undefined;
                    feature?: undefined;
                    hideOperator?: undefined;
                    caseSensitive?: undefined;
                    defaultOperator?: undefined;
                    format?: undefined;
                    datePrecision?: undefined;
                };
                required: string[];
            };
            layout: {
                items: ({
                    key: string;
                    type?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    type: string;
                    items?: undefined;
                } | {
                    key: string;
                    type: string;
                    items: {
                        key: string;
                        notitle: boolean;
                        placeholder: string;
                    }[];
                })[];
            }[];
        } | {
            name: string;
            category: string;
            scope: string[];
            icon: string;
            rules: {
                includedScreens: string[];
                excludedUseCases: any[];
                includedTypes: string[];
                excludedTypes: any[];
                includedRelation: any[];
                excludedRelation: any[];
            }[];
            container: boolean;
            fieldRequired: boolean;
            schema: {
                type: string;
                properties: {
                    styleName: {
                        type: string;
                        description: string;
                    };
                    readOnly: {
                        type: string;
                        description: string;
                    };
                    label: {
                        type: string;
                        description: string;
                    };
                    mandatory: {
                        type: string;
                        description: string;
                    };
                    showLabel: {
                        type: string;
                        description: string;
                    };
                    readOnlyCondition: {
                        type: string;
                        description: string;
                    };
                    visibilityCondition: {
                        type: string;
                        description: string;
                    };
                    wordSize?: undefined;
                    role?: undefined;
                    maxLength?: undefined;
                    prefix?: undefined;
                    suffix?: undefined;
                    mask?: undefined;
                    max?: undefined;
                    screen?: undefined;
                    feature?: undefined;
                    hideOperator?: undefined;
                    keys?: undefined;
                    caseSensitive?: undefined;
                    defaultOperator?: undefined;
                    format?: undefined;
                    datePrecision?: undefined;
                    displayFilter?: undefined;
                    lazy?: undefined;
                    sortType?: undefined;
                };
                required: string[];
            };
            layout: {
                items: ({
                    key: string;
                    type?: undefined;
                } | {
                    key: string;
                    type: string;
                })[];
            }[];
        } | {
            name: string;
            category: string;
            scope: string[];
            icon: string;
            rules: {
                includedScreens: string[];
                excludedUseCases: any[];
                includedTypes: string[];
                excludedTypes: any[];
                includedRelation: any[];
                excludedRelation: any[];
            }[];
            container: boolean;
            fieldRequired: boolean;
            schema: {
                type: string;
                properties: {
                    styleName: {
                        type: string;
                        description: string;
                    };
                    readOnly: {
                        type: string;
                        description: string;
                    };
                    label: {
                        type: string;
                        description: string;
                    };
                    sortType: {
                        type: string;
                        enum: string[];
                    };
                    showLabel: {
                        type: string;
                        description: string;
                    };
                    readOnlyCondition: {
                        type: string;
                        description?: undefined;
                    };
                    visibilityCondition: {
                        type: string;
                        description: string;
                    };
                    mandatory: {
                        type: string;
                        description?: undefined;
                    };
                    wordSize?: undefined;
                    role?: undefined;
                    maxLength?: undefined;
                    prefix?: undefined;
                    suffix?: undefined;
                    mask?: undefined;
                    max?: undefined;
                    screen?: undefined;
                    feature?: undefined;
                    hideOperator?: undefined;
                    keys?: undefined;
                    caseSensitive?: undefined;
                    defaultOperator?: undefined;
                    format?: undefined;
                    datePrecision?: undefined;
                    displayFilter?: undefined;
                    lazy?: undefined;
                };
                required: string[];
            };
            layout: {
                items: ({
                    key: string;
                    type?: undefined;
                } | {
                    key: string;
                    type: string;
                })[];
            }[];
        })[];
    } | {
        name: string;
        components: ({
            name: string;
            scope: string[];
            icon: string;
            include: string[];
            fieldRequired: boolean;
            exclude: any[];
            properties: {};
            container?: undefined;
        } | {
            name: string;
            container: boolean;
            icon: string;
            include: string[];
            fieldRequired: boolean;
            exclude: any[];
            properties: {};
            scope?: undefined;
        })[];
    } | {
        name: string;
        components: {
            name: string;
            icon: string;
            include: string[];
            exclude: any[];
            properties: {};
        }[];
    } | {
        name: string;
        components: ({
            name: string;
            icon: string;
            container: boolean;
            include: string[];
            childs: string[];
            exclude: any[];
            properties: {};
        } | {
            name: string;
            icon: string;
            container: boolean;
            include: string[];
            exclude: any[];
            properties: {};
            childs?: undefined;
        })[];
    })[];
};
export declare const TEMPLATE_LIBRARY: {
    name: string;
    version: string;
    templates: ({
        name: string;
        template: string;
        title: string;
        sections: {
            name: string;
            title: string;
        }[];
        icon: string;
        schema: {
            type: string;
            properties: {
                title: {
                    type: string;
                };
                showTitle: {
                    type: string;
                };
                labelAlignement: {
                    type: string;
                    enum: string[];
                };
                featureName: {
                    type: string;
                };
                actions: {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            template: {
                                type: string;
                            };
                            servicePaths: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        url: {
                                            type: string;
                                        };
                                        httpMethod: {
                                            type: string;
                                            enum: string[];
                                        };
                                        includeBody: {
                                            type: string;
                                        };
                                        condition: {
                                            type: string;
                                            properties: {
                                                expression: {
                                                    type: string;
                                                };
                                                evaluationType: {
                                                    type: string;
                                                    enum: string[];
                                                };
                                                calculationBase: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            screens: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        path: {
                                            type: string;
                                        };
                                        navigationType: {
                                            type: string;
                                            enum: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                componentsBreakpoints: {
                    type: string;
                    properties: {
                        xs: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        sm: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        md: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        lg: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                    };
                };
                showCheckBoxOnRow?: undefined;
                fitWidth?: undefined;
                enableSorting?: undefined;
                pagination?: undefined;
                defaultCriteria?: undefined;
                hideOperators?: undefined;
            };
            required: any[];
        };
        layout: {
            items: ({
                key: string;
                type?: undefined;
                items?: undefined;
            } | {
                key: string;
                type: string;
                items: ({
                    key: string;
                    notitle: boolean;
                    placeholder: string;
                    type?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    type: string;
                    items: ({
                        key: string;
                        notitle: boolean;
                        placeholder: string;
                        type?: undefined;
                        items?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        type: string;
                        items: {
                            key: string;
                            notitle: boolean;
                            placeholder: string;
                        }[];
                        notitle?: undefined;
                        placeholder?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        title: string;
                        placeholder: string;
                        notitle?: undefined;
                        type?: undefined;
                        items?: undefined;
                    })[];
                    notitle?: undefined;
                    placeholder?: undefined;
                })[];
            })[];
        }[];
    } | {
        template: string;
        name: string;
        sections: {
            name: string;
            title: string;
            sections: {
                name: string;
                title: string;
            }[];
        }[];
        icon: string;
        schema: {
            type: string;
            properties: {
                title: {
                    type: string;
                };
                showTitle: {
                    type: string;
                };
                labelAlignement: {
                    type: string;
                    enum: string[];
                };
                featureName: {
                    type: string;
                };
                actions: {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            template: {
                                type: string;
                            };
                            servicePaths: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        url: {
                                            type: string;
                                        };
                                        httpMethod: {
                                            type: string;
                                            enum: string[];
                                        };
                                        includeBody: {
                                            type: string;
                                        };
                                        condition: {
                                            type: string;
                                            properties: {
                                                expression: {
                                                    type: string;
                                                };
                                                evaluationType: {
                                                    type: string;
                                                    enum: string[];
                                                };
                                                calculationBase: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            screens: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        path: {
                                            type: string;
                                        };
                                        navigationType: {
                                            type: string;
                                            enum: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                componentsBreakpoints: {
                    type: string;
                    properties: {
                        xs: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        sm: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        md: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        lg: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                    };
                };
                showCheckBoxOnRow?: undefined;
                fitWidth?: undefined;
                enableSorting?: undefined;
                pagination?: undefined;
                defaultCriteria?: undefined;
                hideOperators?: undefined;
            };
            required: any[];
        };
        layout: {
            items: ({
                key: string;
                type?: undefined;
                items?: undefined;
            } | {
                key: string;
                type: string;
                items: ({
                    key: string;
                    notitle: boolean;
                    placeholder: string;
                    type?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    type: string;
                    items: ({
                        key: string;
                        notitle: boolean;
                        placeholder: string;
                        type?: undefined;
                        items?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        type: string;
                        items: {
                            key: string;
                            notitle: boolean;
                            placeholder: string;
                        }[];
                        notitle?: undefined;
                        placeholder?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        title: string;
                        placeholder: string;
                        notitle?: undefined;
                        type?: undefined;
                        items?: undefined;
                    })[];
                    notitle?: undefined;
                    placeholder?: undefined;
                })[];
            })[];
        }[];
        title?: undefined;
    } | {
        template: string;
        name: string;
        sections: {
            name: string;
            title: string;
        }[];
        icon: string;
        schema: {
            type: string;
            properties: {
                title: {
                    type: string;
                };
                showTitle: {
                    type: string;
                };
                showCheckBoxOnRow: {
                    type: string;
                };
                fitWidth: {
                    type: string;
                };
                enableSorting: {
                    type: string;
                };
                pagination: {
                    type: string;
                    properties: {
                        pageSize: {
                            type: string;
                        };
                        showCombo: {
                            type: string;
                        };
                        position: {
                            type: string;
                        };
                        pagePossibleSizes: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                    };
                };
                featureName: {
                    type: string;
                };
                actions: {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            template: {
                                type: string;
                            };
                            servicePaths: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        url: {
                                            type: string;
                                        };
                                        httpMethod: {
                                            type: string;
                                            enum: string[];
                                        };
                                        includeBody: {
                                            type: string;
                                        };
                                        condition: {
                                            type: string;
                                            properties: {
                                                expression: {
                                                    type: string;
                                                };
                                                evaluationType: {
                                                    type: string;
                                                    enum: string[];
                                                };
                                                calculationBase: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            screens: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        path: {
                                            type: string;
                                        };
                                        navigationType: {
                                            type: string;
                                            enum: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                labelAlignement?: undefined;
                componentsBreakpoints?: undefined;
                defaultCriteria?: undefined;
                hideOperators?: undefined;
            };
            required: any[];
        };
        layout: {
            items: ({
                key: string;
                type?: undefined;
                items?: undefined;
            } | {
                key: string;
                type: string;
                items: {
                    key: string;
                    placeholder: string;
                }[];
            } | {
                key: string;
                type: string;
                items: ({
                    key: string;
                    notitle: boolean;
                    placeholder: string;
                    type?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    type: string;
                    items: ({
                        key: string;
                        notitle: boolean;
                        placeholder: string;
                        type?: undefined;
                        items?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        type: string;
                        items: {
                            key: string;
                            notitle: boolean;
                            placeholder: string;
                        }[];
                        notitle?: undefined;
                        placeholder?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        title: string;
                        placeholder: string;
                        notitle?: undefined;
                        type?: undefined;
                        items?: undefined;
                    })[];
                    notitle?: undefined;
                    placeholder?: undefined;
                })[];
            })[];
        }[];
        title?: undefined;
    } | {
        name: string;
        title: string;
        sections: {
            name: string;
            title: string;
        }[];
        icon: string;
        schema: {
            type: string;
            properties: {
                title: {
                    type: string;
                };
                defaultCriteria: {
                    type: string;
                };
                featureName: {
                    type: string;
                };
                showTitle: {
                    type: string;
                };
                hideOperators: {
                    type: string;
                };
                labelAlignement: {
                    type: string;
                    enum: string[];
                };
                actions: {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            template: {
                                type: string;
                            };
                            servicePaths: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        url: {
                                            type: string;
                                        };
                                        httpMethod: {
                                            type: string;
                                            enum: string[];
                                        };
                                        includeBody: {
                                            type: string;
                                        };
                                        condition: {
                                            type: string;
                                            properties: {
                                                expression: {
                                                    type: string;
                                                };
                                                evaluationType: {
                                                    type: string;
                                                    enum: string[];
                                                };
                                                calculationBase: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            screens: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        path: {
                                            type: string;
                                        };
                                        navigationType: {
                                            type: string;
                                            enum: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                componentsBreakpoints: {
                    type: string;
                    properties: {
                        xs: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        sm: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        md: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        lg: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                    };
                };
                showCheckBoxOnRow?: undefined;
                fitWidth?: undefined;
                enableSorting?: undefined;
                pagination?: undefined;
            };
            required: any[];
        };
        layout: {
            items: ({
                key: string;
                type?: undefined;
                items?: undefined;
            } | {
                key: string;
                type: string;
                items: ({
                    key: string;
                    notitle: boolean;
                    placeholder: string;
                    type?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    type: string;
                    items: ({
                        key: string;
                        notitle: boolean;
                        placeholder: string;
                        type?: undefined;
                        items?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        type: string;
                        items: {
                            key: string;
                            notitle: boolean;
                            placeholder: string;
                        }[];
                        notitle?: undefined;
                        placeholder?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        title: string;
                        placeholder: string;
                        notitle?: undefined;
                        type?: undefined;
                        items?: undefined;
                    })[];
                    notitle?: undefined;
                    placeholder?: undefined;
                })[];
            })[];
        }[];
        template?: undefined;
    } | {
        name: string;
        title: string;
        sections: {
            name: string;
            title: string;
        }[];
        icon: string;
        schema: {
            type: string;
            properties: {
                title: {
                    type: string;
                };
                showTitle: {
                    type: string;
                };
                showCheckBoxOnRow: {
                    type: string;
                };
                fitWidth: {
                    type: string;
                };
                enableSorting: {
                    type: string;
                };
                pagination: {
                    type: string;
                    properties: {
                        pageSize: {
                            type: string;
                        };
                        showCombo: {
                            type: string;
                        };
                        position: {
                            type: string;
                        };
                        pagePossibleSizes: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                    };
                };
                featureName: {
                    type: string;
                };
                actions: {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            template: {
                                type: string;
                            };
                            servicePaths: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        url: {
                                            type: string;
                                        };
                                        httpMethod: {
                                            type: string;
                                            enum: string[];
                                        };
                                        includeBody: {
                                            type: string;
                                        };
                                        condition: {
                                            type: string;
                                            properties: {
                                                expression: {
                                                    type: string;
                                                };
                                                evaluationType: {
                                                    type: string;
                                                    enum: string[];
                                                };
                                                calculationBase: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            screens: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        path: {
                                            type: string;
                                        };
                                        navigationType: {
                                            type: string;
                                            enum: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                labelAlignement?: undefined;
                componentsBreakpoints?: undefined;
                defaultCriteria?: undefined;
                hideOperators?: undefined;
            };
            required: any[];
        };
        layout: {
            items: ({
                key: string;
                type?: undefined;
                items?: undefined;
            } | {
                key: string;
                type: string;
                items: {
                    key: string;
                    placeholder: string;
                }[];
            } | {
                key: string;
                type: string;
                items: ({
                    key: string;
                    notitle: boolean;
                    placeholder: string;
                    type?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    type: string;
                    items: ({
                        key: string;
                        notitle: boolean;
                        placeholder: string;
                        type?: undefined;
                        items?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        type: string;
                        items: {
                            key: string;
                            notitle: boolean;
                            placeholder: string;
                        }[];
                        notitle?: undefined;
                        placeholder?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        title: string;
                        placeholder: string;
                        notitle?: undefined;
                        type?: undefined;
                        items?: undefined;
                    })[];
                    notitle?: undefined;
                    placeholder?: undefined;
                })[];
            })[];
        }[];
        template?: undefined;
    } | {
        name: string;
        title: string;
        icon: string;
        sections: {
            name: string;
            title: string;
        }[];
        schema: {
            type: string;
            properties: {
                title: {
                    type: string;
                };
                showTitle: {
                    type: string;
                };
                labelAlignement: {
                    type: string;
                    enum: string[];
                };
                featureName: {
                    type: string;
                };
                actions: {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            template: {
                                type: string;
                            };
                            servicePaths: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        url: {
                                            type: string;
                                        };
                                        httpMethod: {
                                            type: string;
                                            enum: string[];
                                        };
                                        includeBody: {
                                            type: string;
                                        };
                                        condition: {
                                            type: string;
                                            properties: {
                                                expression: {
                                                    type: string;
                                                };
                                                evaluationType: {
                                                    type: string;
                                                    enum: string[];
                                                };
                                                calculationBase: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            screens: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        path: {
                                            type: string;
                                        };
                                        navigationType: {
                                            type: string;
                                            enum: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                componentsBreakpoints: {
                    type: string;
                    properties: {
                        xs: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        sm: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        md: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        lg: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                    };
                };
                showCheckBoxOnRow?: undefined;
                fitWidth?: undefined;
                enableSorting?: undefined;
                pagination?: undefined;
                defaultCriteria?: undefined;
                hideOperators?: undefined;
            };
            required: any[];
        };
        layout: {
            items: ({
                key: string;
                type?: undefined;
                items?: undefined;
            } | {
                key: string;
                type: string;
                items: ({
                    key: string;
                    notitle: boolean;
                    placeholder: string;
                    type?: undefined;
                    items?: undefined;
                } | {
                    key: string;
                    type: string;
                    items: ({
                        key: string;
                        notitle: boolean;
                        placeholder: string;
                        type?: undefined;
                        items?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        type: string;
                        items: {
                            key: string;
                            notitle: boolean;
                            placeholder: string;
                        }[];
                        notitle?: undefined;
                        placeholder?: undefined;
                        title?: undefined;
                    } | {
                        key: string;
                        title: string;
                        placeholder: string;
                        notitle?: undefined;
                        type?: undefined;
                        items?: undefined;
                    })[];
                    notitle?: undefined;
                    placeholder?: undefined;
                })[];
            })[];
        }[];
        template?: undefined;
    })[];
};
export declare const ROLES: Role[];
