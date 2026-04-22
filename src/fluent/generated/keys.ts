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
                    package_json: {
                        table: 'sys_module'
                        id: '7418af9b01a94931806eb622fb8d498f'
                    }
                    'sample-request-1': {
                        table: 'x_2001423_certireq_document_request'
                        id: '8ba6c9dcb8f54da2a119520b2814fd8f'
                    }
                    'sample-request-2': {
                        table: 'x_2001423_certireq_document_request'
                        id: '3885000d283447dba77d7f843e18cb51'
                    }
                    'sample-request-3': {
                        table: 'x_2001423_certireq_document_request'
                        id: '248e1cedb7c84ea89ef7bc3fc975dfab'
                    }
                    'sample-request-4': {
                        table: 'x_2001423_certireq_document_request'
                        id: '694ef68853b64946b9ab63e129070cdc'
                    }
                    'sample-request-5': {
                        table: 'x_2001423_certireq_document_request'
                        id: 'd55d5fe524d84ae1866476c3f3882063'
                    }
                    src_server_AIExtractor_js: {
                        table: 'sys_module'
                        id: '10f783bf937f433787e085cd4127ca95'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '01875e4eb79b48079f3c52c8ef5187b1'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'year_of_graduation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '020b689de32244a38dac629b68465c50'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'user_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '02dbe0c54ca24c83949100e840a511b8'
                        key: {
                            name: 'x_2001423_certireq_customer'
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
                        key: {
                            application_file: '0b236610aff348459e6009a323f43425'
                            source_artifact: '28daefe8f6e445769542be6969c84549'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '0b236610aff348459e6009a323f43425'
                        key: {
                            name: 'x_2001423_certireq/main.js.map'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '0c6a9e8f2adc46eda1766b66dd50b9f9'
                        key: {
                            endpoint: 'x_2001423_certireq_portal.do'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0d5da39dfb6a416ba2e7c30235204eec'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'student_id'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '137ed12786e84749b0bc738e591053be'
                        key: {
                            application_file: 'd36935083ce94f2389856a1da904b1ce'
                            source_artifact: '28daefe8f6e445769542be6969c84549'
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
                        id: '19851f845f0e4405bda3048d7cad3af3'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'program'
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
                        id: '1d38128c9be54cae8a5b4881f2b4f0e9'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'contact_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1efa543a15a74abf8dff7b73009b3fee'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'is_regular'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1fcb72047a7f44e69e7c393242ff7146'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'email'
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
                        table: 'sys_dictionary'
                        id: '255a7c1eac3f433ea10379eb6907a0ae'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'customer_status'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '28daefe8f6e445769542be6969c84549'
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
                        id: '3efcc12de5f642c980aa84e33f36e47b'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'NULL'
                            language: 'en'
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
                        id: '4921f0f781ad4d0e8bd8076766492029'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'year_level'
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
                        id: '4f530558b76e4d2193d0555c1bf63dac'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'password'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '543c5b2ba9ee4fb290706f7c1ccb2fd8'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'fullname'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54fb3b1881f04a718dc98ee438bbe418'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'program'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5631e4af19ec4dcda5803b9e646c0376'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'NULL'
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
                        table: 'sys_dictionary'
                        id: '64e7faa0bc794de595d7159a71eb764c'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'contact_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '675567bdf7db413cab5ccea3e5189cbb'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'year_level'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '6e28340e55bb4251acb88b28b2b385a4'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'user_type'
                            value: 'student'
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
                        id: '79a3000462f2417e9eedab7cec7e5119'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'department'
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
                        table: 'sys_documentation'
                        id: '7fc413ad5da542339c7ee3391ab260d5'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'personal_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '803c7dd8a9a54313aa9d6c461d964f85'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'is_regular'
                            value: 'yes'
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
                        id: '8e9360b9d4d4485dbf4f0a7c88200b6e'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'department'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '92716812b8e34ab381e0434aca3a8a22'
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'delivery_mode'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '96e0a9f2c99d44f2be90c84291c80353'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'is_regular'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '97280e1c46ea4e0686673b744b9d45cf'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'user_type'
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
                        table: 'sys_dictionary'
                        id: '99517cbc880443dc8efe37e1ef51cb96'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'personal_email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '997330352d104e28a0be0914833ee9dd'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'user_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c1ef306622a4d2abcc2f5a6d5c6df74'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9def5532c3e441abb1ec790baa01cbbb'
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
                        table: 'sys_dictionary'
                        id: 'b5a8fa930b2741a78fd177ab36718d78'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'student_id_number'
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
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'bc8cb82fc8ca4eb8ae2b22e80035a423'
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
                        table: 'sys_documentation'
                        id: 'cba1fc47e8764292878d11d70b9a3e02'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'is_regular'
                            language: 'en'
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
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'student_name'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'd36935083ce94f2389856a1da904b1ce'
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
                        id: 'd717c34e361d443bb0a7fe0034b9014c'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'customer_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da78a1bb5bf5417c8b461f5707e37afa'
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
                        table: 'sys_dictionary'
                        id: 'ddcb2eaec85042249caf13985508652e'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'year_of_graduation'
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
                        table: 'sys_documentation'
                        id: 'e53994bd91f64a06a0db9f0496a6adc8'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'student_id_number'
                            language: 'en'
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
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'student_name'
                            language: 'en'
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
                        table: 'ua_table_licensing_config'
                        id: 'f6a1ad4eea7f4b20bd939836a30b76a4'
                        key: {
                            name: 'x_2001423_certireq_customer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f7dc5c250b9e41b99d0bdfddb071d7e3'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'password'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: 'f9d9ae44b7e64820817e5e4addb5fe1a'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'user_type'
                            value: 'alumni'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fc460d9b0c68413c9e8e11e725838950'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'is_regular'
                            value: 'no'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd2fc31e83f24f788ca4641bd0b9e63a'
                        key: {
                            name: 'x_2001423_certireq_customer'
                            element: 'fullname'
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
                        key: {
                            name: 'x_2001423_certireq_document_request'
                            element: 'department'
                        }
                    },
                ]
            }
        }
    }
}
