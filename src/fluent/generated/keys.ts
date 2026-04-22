import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '5f8755030f988310b9d1c9c530d1b2b5': {
                        table: 'sys_ws_definition'
                        id: '5f8755030f988310b9d1c9c530d1b2b5'
                    }
                    'App.css': {
                        table: 'sys_ux_theme_asset'
                        id: '371ab407ff024d309e9762645c5c90db'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '7bad51b065974f06a95449218db6e21e'
                    }
                    'document-request-portal': {
                        table: 'sys_ui_page'
                        id: 'ec8a70d8f5eb4d039c3c6598ff1bb128'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7418af9b01a94931806eb622fb8d498f'
                    }
                    'sample-request-1': {
                        table: 'x_2001423_certireq_document_request'
                        id: '8ba6c9dcb8f54da2a119520b2814fd8f'
                        deleted: true
                    }
                    'sample-request-2': {
                        table: 'x_2001423_certireq_document_request'
                        id: '3885000d283447dba77d7f843e18cb51'
                        deleted: true
                    }
                    'sample-request-3': {
                        table: 'x_2001423_certireq_document_request'
                        id: '248e1cedb7c84ea89ef7bc3fc975dfab'
                        deleted: true
                    }
                    'sample-request-4': {
                        table: 'x_2001423_certireq_document_request'
                        id: '694ef68853b64946b9ab63e129070cdc'
                        deleted: true
                    }
                    'sample-request-5': {
                        table: 'x_2001423_certireq_document_request'
                        id: 'd55d5fe524d84ae1866476c3f3882063'
                        deleted: true
                    }
                    src_server_AIExtractor_js: {
                        table: 'sys_module'
                        id: '10f783bf937f433787e085cd4127ca95'
                        deleted: true
                    }
                    'x_2001423_certireq/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'f8797acf27b84e7baa4ff6d9db305f70'
                        deleted: true
                    }
                    'x_2001423_certireq/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '63d295c460cb46f3883944d636f70131'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '043ed949cc674e23aeaeacaebc8bbcfe'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0467a218de25435da360368bb02b915b'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'urgency_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '04f2b36ec647426d9592792d4bbc9a4e'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'delivery_mode'
                            value: 'courier'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '0ad2c0d8295d4381821319af0f196b08'
                        deleted: false
                        key: {
                            application_file: '0b236610aff348459e6009a323f43425'
                            source_artifact: '28daefe8f6e445769542be6969c84549'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0ae10a910dc94a0bb7a415327311f20f'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'is_regular'
                            value: 'yes'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '0b236610aff348459e6009a323f43425'
                        deleted: false
                        key: {
                            name: 'x_2001423_certireq/main.js.map'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b6ff04cb119441dbc858d346dcc5a4e'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'user_type'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '0c6a9e8f2adc46eda1766b66dd50b9f9'
                        deleted: false
                        key: {
                            endpoint: 'x_2001423_certireq_portal.do'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0d5da39dfb6a416ba2e7c30235204eec'
                        deleted: true
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'student_id'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '137ed12786e84749b0bc738e591053be'
                        deleted: false
                        key: {
                            application_file: 'd36935083ce94f2389856a1da904b1ce'
                            source_artifact: '28daefe8f6e445769542be6969c84549'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1622f8b34ca94a5c86413f689e0ded32'
                        key: {
                            name: 'x_2001423_certireq_customer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16908fffbf034dbe84ee6b1ac028aac0'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'personal_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16bf02ef34fe40909d12ea285d8676d0'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'completion_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '18d8697ae18848a5847b5edd8c883f7a'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b835f5872e74287b3386081bbf91371'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'submitted_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2143e8d13cc84f38b4dc1bf1f4ff3257'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'payment_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '28daefe8f6e445769542be6969c84549'
                        deleted: false
                        key: {
                            name: 'x_2001423_certireq_portal.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '295451160f1c8310b9d1c9c530d1b2bb'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29f56cfd6ebc49178f535c723c8601f0'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'personal_email'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2d5451160f1c8310b9d1c9c530d1b2d5'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e3bef1a2e81465c8cb63507445e1921'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '315451160f1c8310b9d1c9c530d1b2de'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'student_id'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '334aa760f7404906b90ea69614eb9c27'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'customer'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '355451160f1c8310b9d1c9c530d1b2db'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '38a39155ad2a48bdaf2e3d722175d014'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '395451160f1c8310b9d1c9c530d1b2d8'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'urgency_level'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b2250a5530249259ad3733534ff2c5d'
                        deleted: true
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3d5451160f1c8310b9d1c9c530d1b2e0'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '21'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3dceb63df99f4e47a9c995075d07e26d'
                        deleted: true
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3e34fccef7f344ddbd5056b5fe44eb89'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'document_type'
                            value: 'recommendation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3eb3beb1eb594d10beff76878c83691e'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'year_of_graduation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '415cc917265e4fcfb7ea7afe3b3c96eb'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'contact_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '42089dfcaae74c7a879db7c5b7d6b418'
                        key: {
                            name: 'x_2001423_certireq_customer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4476a8bc6f004758ac1cf5e9da3f771c'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'document_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47854965050341aa8bbe4d3b3687943f'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'program'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4850cbe27c654427ba038a8331055784'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'password'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e0327b4efb54ffe978776d762d5c686'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'payment_amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e9ac2bbe742486eaaec76f18f20ab8a'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'delivery_mode'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '506c1664aa4946f38cbaca0cdefd62ac'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'year_of_graduation'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5e7a25bc360e4c7daa05f3386af9e219'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e887dcd97bf436c8362238195f4c430'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '60d4153b80f04e649ecfc3e9d0aa7f66'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'document_type'
                            value: 'diploma'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '63095627838243f19b9b14d43f3c8e4a'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'payment_required'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '640c46265cec4a7abf2448bc3877ab02'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'is_regular'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '67963bfff686492a8bb4002bb49791f5'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'completion_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '695451160f1c8310b9d1c9c530d1b2b8'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6d5451160f1c8310b9d1c9c530d1b2ba'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '715451160f1c8310b9d1c9c530d1b2e0'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitted_date'
                            position: '20'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '739183d78bca41c492d67c1f8fd2a80a'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'user_type'
                            value: 'student'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '755451160f1c8310b9d1c9c530d1b2dd'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '766568e6f2674ae6b2a98abaad214f73'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '76e8c6712aa84f05a742657935509e1e'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'status'
                            value: 'processing'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7730e0de58e3474aa54d2ba87f6fc5b2'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'submitted_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '795451160f1c8310b9d1c9c530d1b2da'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'payment_amount'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c47dc8f57d443b9800ee3844da2fffc'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c5ae9ad38cd4eed9c1bdcfe92019d53'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'customer_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d5451160f1c8310b9d1c9c530d1b2d7'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f0c2a6632084337a1e403f736315e87'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82a58abf8d4c4f1eb60a6e38ca1be90a'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'document_type'
                            value: 'certificate'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '86de5aa33ef74c41af65aad021b70fbf'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'payment_required'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8986c81df7724c9bbafb7e5d3534648a'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a02fe614a634d408f4cbf2d8aea70a5'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'customer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a11053c630d4f4f9a99cbe9a499d362'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8fb482659de64614af13b256e93a2648'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'student_id_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9055a1ce921844d3bf5de89ff637fdfb'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'document_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '913dfea0d98d41cd82273007506be32f'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'user_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92716812b8e34ab381e0434aca3a8a22'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'delivery_mode'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '974d4b91fd1247c7b84402fe6dc4e906'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'password'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97a6cf6c936e4b1393f61cbd7a94af36'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97ea226dda0c46fb84d1eda864765b82'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'year_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a9a64d88bbc4d2f8af1215c7707f07b'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'is_regular'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9dce231013614d63b71fec254f907ef0'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'year_level'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9def5532c3e441abb1ec790baa01cbbb'
                        deleted: true
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'student_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9e3b3e694ada4e32a2baca14979f20d8'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'urgency_level'
                            value: 'standard'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a15451160f1c8310b9d1c9c530d1b2ba'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'document_type'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a15451160f1c8310b9d1c9c530d1b2d7'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'student_name'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a343717465fd4d78905bd6fded13711c'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'urgency_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a7ff65d1a5e94d068709ac5532484c40'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9ebd6cd3688474383ca86ed3ef6fb73'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'contact_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'acba6ad2265442599bc7bf95aa22be58'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'user_type'
                            value: 'alumni'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'af8df116365f49588dff26e7791b2691'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'document_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b233d3ed902e4a978e6272ee01f8c4c5'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'delivery_mode'
                            value: 'pickup'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b4a3a339bf744263a4d4bf881b6a5d6e'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b55451160f1c8310b9d1c9c530d1b2df'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8b031c49a534d108afb6703468e560a'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8b38760102243ab91cb47cba7176e55'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'payment_required'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b95451160f1c8310b9d1c9c530d1b2dc'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'purpose'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bafc0e51e06a4396b7dd3e977bd9fa94'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'program'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bb5bb768cba34b0e833ba5dfc6b8871e'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'fullname'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bbc780c8e2914034816b6ce9f5ecca97'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'is_regular'
                            value: 'no'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'bc8cb82fc8ca4eb8ae2b22e80035a423'
                        deleted: false
                        key: {
                            application_file: '0c6a9e8f2adc46eda1766b66dd50b9f9'
                            source_artifact: '28daefe8f6e445769542be6969c84549'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd5451160f1c8310b9d1c9c530d1b2d9'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c5506add48774f548220b9b72e7e0532'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'urgency_level'
                            value: 'rush'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c574faee0c1242cd8788d1e37f8ec1d3'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'payment_required'
                            value: 'no'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c709d2ce461a41c1be00a9ff48a8f1ec'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cdaacbf559824c86a872d97758932749'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ce7cbaff27ad4a9b9454771d60d8b222'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'urgency_level'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0f850daeafd4d389131e80c757a1d8a'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'payment_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd11074fbffa445309fb59c04beadeef9'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'payment_required'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd20fd939e4e2451b9c0703d5db20de6d'
                        deleted: true
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'student_name'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'd36935083ce94f2389856a1da904b1ce'
                        deleted: false
                        key: {
                            name: 'x_2001423_certireq/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd48b7c5787514bc28fca50e1914df9ca'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da78a1bb5bf5417c8b461f5707e37afa'
                        deleted: true
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dafc7e0b87d749fdaa763ac850f282f1'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db3711f7aad74ce3ab3c477d8f6a7360'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'document_type'
                            value: 'transcript'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dbd8582579a64fccbbb326eaf1d2b544'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'user_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e15451160f1c8310b9d1c9c530d1b2bc'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'completion_date'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e55451160f1c8310b9d1c9c530d1b2d6'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e82c01ccd68440fd94b12355ed610e3a'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'document_type'
                            value: 'enrollment'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e94d896257814ef4884586ea2ee25501'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'delivery_mode'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea289cd9348f4a67b04789a8479b855e'
                        deleted: true
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'student_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eb93a7f3824b4ee38cd59ca4b5c9e9b2'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'student_id_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee4f6d9527a44ece8b81b7946b98895f'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'is_regular'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f15451160f1c8310b9d1c9c530d1b2d9'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'payment_required'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2d397aa3c4e4cdea3ef8ca779291721'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'customer_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f3b0ae0e08f94fbe93af8660cdc5aab9'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'status'
                            value: 'ready'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f55451160f1c8310b9d1c9c530d1b2e1'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'department'
                            position: '22'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f703db0fd0db46058fd65d88e7d570bd'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'fullname'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f95451160f1c8310b9d1c9c530d1b2de'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'delivery_mode'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd5451160f1c8310b9d1c9c530d1b2db'
                        key: {
                            sys_ui_section: {
                                id: 'a15451160f1c8310b9d1c9c530d1b2b0'
                                key: {
                                    name: 'x_2001423_certireq_document_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'email'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe1dc6d067f447ca970a9861453e60d5'
                        deleted: true
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff224f62f4074c6f81d6064803959ab4'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
