import * as MetricTypes from "../components/metrics-dashboard/types";
import { IMG_SERVER } from "../img/cmd";

const data: MetricTypes.Data = {
    "primaryMeasureName": "Cool KPI",
    "tiles": [
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345678,
                        "MTD": 12354678,
                        "WTD": 3456789,
                        "DAY": 789012
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 15.3,
                        "MTD": 25.8,
                        "WTD": 5.6,
                        "DAY": -28.2
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 1234567,
                        "MTD": 234567,
                        "WTD": 89012,
                        "DAY": 12345
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 15347678,
                        "MTD": 12354678,
                        "WTD": 3456789,
                        "DAY": 789012
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 47.8,
                        "MTD": 34.3,
                        "WTD": -8.5,
                        "DAY": 58.2
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 1234567,
                        "MTD": 234567,
                        "WTD": 89012,
                        "DAY": 12345
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345678,
                        "MTD": 12354678,
                        "WTD": 3456789,
                        "DAY": 789012
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 20.5,
                        "MTD": -10.2,
                        "WTD": 70.6,
                        "DAY": -48.2
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 1234567,
                        "MTD": 234567,
                        "WTD": 89012,
                        "DAY": 12345
                    },
                    "unit": "pc"
                }
            }
        }
    ],
    "ticker": [
        {
            "tickerItemParent": {
                "key": "R2",
                "text": "Region 2"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "01",
                "text": "Ticker 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R2",
                "text": "Region 2"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "02",
                "text": "Ticker 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R2",
                "text": "Region 2"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "03",
                "text": "Ticker 3"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R1",
                "text": "Region 1"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "04",
                "text": "Ticker 4"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R1",
                "text": "Region 1"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "05",
                "text": "Ticker 5"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R1",
                "text": "Region 1"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "06",
                "text": "Ticker 6"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R7",
                "text": "Region 7"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "07",
                "text": "Ticker 7"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R7",
                "text": "Region 7"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "08",
                "text": "Ticker 8"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R7",
                "text": "Region 7"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "09",
                "text": "Ticker 9"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R8",
                "text": "Region 8"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "10",
                "text": "Ticker 10"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R8",
                "text": "Region 8"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "11",
                "text": "Ticker 11"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "tickerItemParent": {
                "key": "R8",
                "text": "Region 8"
            },
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "tickerItem": {
                "key": "12",
                "text": "Ticker 12"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 23455,
                        "WTD": 5678,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 12.3,
                        "MTD": -12.3,
                        "WTD": 29,
                        "DAY": -23.4
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 9123,
                        "MTD": 1234,
                        "WTD": 234,
                        "DAY": 79
                    },
                    "unit": "pc"
                }
            }
        }
    ],
    "charts": [
        {
            "characteristicName": "Geographic",
            "characteristicNameShort": "GEO",
            "data": [
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "R2",
                        "text": "Region 2"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 24456789,
                                "MTD": 4667890,
                                "WTD": 11345677,
                                "DAY": 2045678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "R2",
                        "text": "Region 2"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 20456789,
                                "MTD": 4267890,
                                "WTD": 19345677,
                                "DAY": 2845678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "R1",
                        "text": "Region 1"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 25456789,
                                "MTD": 4067890,
                                "WTD": 17345677,
                                "DAY": 2445678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "R1",
                        "text": "Region 1"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 27456789,
                                "MTD": 4067890,
                                "WTD": 16345677,
                                "DAY": 2945678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "R1",
                        "text": "Region 1"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 20756789,
                                "MTD": 4237890,
                                "WTD": 14745677,
                                "DAY": 2215678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "R7",
                        "text": "Region 7"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 8756789,
                                "MTD": 4487890,
                                "WTD": 13645677,
                                "DAY": 2015678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "R7",
                        "text": "Region 7"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 20966789,
                                "MTD": 4097890,
                                "WTD": 20145677,
                                "DAY": 300678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "R7",
                        "text": "Region 7"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 15856789,
                                "MTD": 3037890,
                                "WTD": 10345677,
                                "DAY": 291678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "R8",
                        "text": "Region 8"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 18156789,
                                "MTD": 3367890,
                                "WTD": 9345677,
                                "DAY": 1745678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "R8",
                        "text": "Region 8"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 16756789,
                                "MTD": 3027890,
                                "WTD": 955677,
                                "DAY": 55678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "R8",
                        "text": "Region 8"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 6756789,
                                "MTD": 1267890,
                                "WTD": 8645677,
                                "DAY": 1255678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 10.1,
                                "MTD": -5.3,
                                "WTD": 2.6,
                                "DAY": 45.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "R5",
                        "text": "Region 5"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 9256789,
                                "MTD": 3067890,
                                "WTD": 9045677,
                                "DAY": 1145678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -10.1,
                                "MTD": 5.3,
                                "WTD": -2.6,
                                "DAY": -41.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "R5",
                        "text": "Region 5"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 18356789,
                                "MTD": 3427890,
                                "WTD": 255677,
                                "DAY": 24678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 5.1,
                                "MTD": 65.3,
                                "WTD": 45.2,
                                "DAY": 65.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "R5",
                        "text": "Region 5"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 2356789,
                                "MTD": 1510890,
                                "WTD": 10045677,
                                "DAY": 1755678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 50.1,
                                "MTD": -12.3,
                                "WTD": -23.1,
                                "DAY": -1.6
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "R3",
                        "text": "Region 4"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 6086789,
                                "MTD": 3477890,
                                "WTD": 7945677,
                                "DAY": 845678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -89.1,
                                "MTD": -9,
                                "WTD": 12.6,
                                "DAY": 41.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "R3",
                        "text": "Region 4"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 10356789,
                                "MTD": 3187890,
                                "WTD": 204677,
                                "DAY": 44678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -61.1,
                                "MTD": 65.3,
                                "WTD": -12.4,
                                "DAY": -12.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 35678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "R3",
                        "text": "Region 4"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1856789,
                                "MTD": 1310890,
                                "WTD": 12045677,
                                "DAY": 1355678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 32.1,
                                "MTD": 22.3,
                                "WTD": -23.1,
                                "DAY": -1.6
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "R3",
                        "text": "Region 3"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 9256789,
                                "MTD": 2567890,
                                "WTD": 9045677,
                                "DAY": 1145678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -10.1,
                                "MTD": 45.3,
                                "WTD": -2.6,
                                "DAY": -41.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "R3",
                        "text": "Region 3"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 8356789,
                                "MTD": 3427890,
                                "WTD": 255677,
                                "DAY": 24678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -34.6,
                                "MTD": 65.3,
                                "WTD": 45.2,
                                "DAY": 65.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "R3",
                        "text": "Region 3"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 2356789,
                                "MTD": 1510890,
                                "WTD": 10045677,
                                "DAY": 1755678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 50.1,
                                "MTD": -12.3,
                                "WTD": -23.1,
                                "DAY": -1.6
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "R6",
                        "text": "Region 6"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 9256789,
                                "MTD": 3067890,
                                "WTD": 9045677,
                                "DAY": 1145678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -10.1,
                                "MTD": 5.3,
                                "WTD": -2.6,
                                "DAY": -41.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "R6",
                        "text": "Region 6"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 18356789,
                                "MTD": 3427890,
                                "WTD": 255677,
                                "DAY": 24678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 5.1,
                                "MTD": 65.3,
                                "WTD": 45.2,
                                "DAY": 65.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "R6",
                        "text": "Region 6"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 2356789,
                                "MTD": 1510890,
                                "WTD": 10045677,
                                "DAY": 1755678
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 50.1,
                                "MTD": -12.3,
                                "WTD": -23.1,
                                "DAY": -1.6
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 567890,
                                "MTD": 123456,
                                "WTD": 45678,
                                "DAY": 9012
                            },
                            "unit": "pc"
                        }
                    }
                }
            ]
        },
        {
            "characteristicName": "Business",
            "characteristicNameShort": "BUS",
            "data": [
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "B1",
                        "text": "Business 1",
                        "shortText": "BUS_1",
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 51278901,
                                "MTD": 6989012,
                                "WTD": 1645678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1934567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "B2",
                        "text": "Business 2",
                        "shortText": "BUS_2"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1678901,
                                "MTD": 4389012,
                                "WTD": 1245678,
                                "DAY": 1367889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "B1",
                        "text": "Business 1",
                        "shortText": "BUS_1"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 28478901,
                                "MTD": 4389012,
                                "WTD": 1255678,
                                "DAY": 3227889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "B5",
                        "text": "Business 6"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 29078901,
                                "MTD": 4309012,
                                "WTD": 1505678,
                                "DAY": 3757889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "B2",
                        "text": "Business 2",
                        "shortText": "BUS_2"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 94378901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -32.3,
                                "MTD": -2.9,
                                "WTD": -40.2,
                                "DAY": 78.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "B5",
                        "text": "Business 6"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 39078901,
                                "MTD": 6089012,
                                "WTD": 1945678,
                                "DAY": 4027889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 42.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 245678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "B3",
                        "text": "Business 3",
                        "shortText": "BUS_3"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "B4",
                        "text": "Business 4"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "B7",
                        "text": "Business 5"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "B7",
                        "text": "Business 5"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "B3",
                        "text": "Business 3",
                        "shortText": "BUS_3"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "B4",
                        "text": "Business 4"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 2",
                        "text": "Column Name 2"
                    },
                   "characteristicValue": {
                        "key": "B8",
                        "text": "Business 7"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 23678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -42.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 1",
                        "text": "Column Name 1"
                    },
                   "characteristicValue": {
                        "key": "B8",
                        "text": "Business 7"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B1",
                        "text": "Business 1",
                        "shortText": "BUS_1"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 37678901,
                                "MTD": 6909012,
                                "WTD": 2955678,
                                "DAY": 4477889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -42.3,
                                "MTD": -2.9,
                                "WTD": -70.2,
                                "DAY": 16.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 395678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B1",
                        "text": "Business 14",
                        "shortText": "BUS_14"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 37678901,
                                "MTD": 6909012,
                                "WTD": 2955678,
                                "DAY": 4477889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -42.3,
                                "MTD": -2.9,
                                "WTD": -70.2,
                                "DAY": 16.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 395678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B5",
                        "text": "Business 6"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 12878901,
                                "MTD": 6129012,
                                "WTD": 2065678,
                                "DAY": 3127889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -62.3,
                                "MTD": 2.9,
                                "WTD": 90.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B12",
                        "text": "Business 12"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 12878901,
                                "MTD": 6129012,
                                "WTD": 2065678,
                                "DAY": 3127889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": -62.3,
                                "MTD": 2.9,
                                "WTD": 90.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B2",
                        "text": "Business 2",
                        "shortText": "BUS_2"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 12678901,
                                "MTD": 4889012,
                                "WTD": 1835678,
                                "DAY": 927889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": -2.9,
                                "WTD": -50.2,
                                "DAY": -50.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B2",
                        "text": "Business 11",
                        "shortText": "BUS_11"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 12678901,
                                "MTD": 4889012,
                                "WTD": 1835678,
                                "DAY": 927889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": -2.9,
                                "WTD": -50.2,
                                "DAY": -50.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B7",
                        "text": "Business 5"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B10",
                        "text": "Business 10"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B4",
                        "text": "Business 4"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B9",
                        "text": "Business 9"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B3",
                        "text": "Business 3",
                        "shortText": "BUS_3"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B3",
                        "text": "Business 9",
                        "shortText": "BUS_9"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B7",
                        "text": "Business 7"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                },
                {
                    "columnName": {
                        "key": "Column Name 3",
                        "text": "Column Name 3"
                    },
                   "characteristicValue": {
                        "key": "B8",
                        "text": "Business 8"
                    },
                    "measures": {
                        "primaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 45678901,
                                "MTD": 6789012,
                                "WTD": 2345678,
                                "DAY": 4567889
                            },
                            "showUnitBefore": true,
                            "scaling": 1000,
                            "decimals": 0,
                            "unit": "$"
                        },
                        "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                            "valueByTimebox": {
                                "YTD": 12.3,
                                "MTD": 2.9,
                                "WTD": -10.2,
                                "DAY": 10.2
                            }
                        },
                        "secondaryMeasure": {
                            "valueByTimebox": {
                                "YTD": 1234567,
                                "MTD": 345678,
                                "WTD": 56789,
                                "DAY": 12345
                            },
                            "unit": "pc"
                        }
                    }
                }
            ]
        }
    ],
    "products": [
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3",
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-01.png`,
                "text": `${IMG_SERVER}/products/product-01.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "1",
                "text": "Row 1"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "01",
                "text": "Business 1",
                "shortText": "BUS 1"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "02",
                "text": "Business 2",
                "shortText": "BUS 2"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 2",
                "text": "Column Name 2"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 1",
                "text": "Column Name 1"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        },
        {
            "columnName": {
                "key": "Column Name 3",
                "text": "Column Name 3"
            },
            "slideName": {
                "key": "03",
                "text": "Business 3",
                "shortText": "BUS 3"
            },
            "attributePrimary": {
                "key": "AAAAAAAAAA",
                "text": "Cool Product"
            },
            "imageURL": {
                "key": `${IMG_SERVER}/products/product-02.png`,
                "text": `${IMG_SERVER}/products/product-02.png`
            },
            "attributeSecondary": {
                "key": "01",
                "text": "Product Column Name 1"
            },
            "rowName": {
                "key": "2",
                "text": "Row 2"
            },
            "measures": {
                "primaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 123456,
                        "MTD": 123456,
                        "WTD": 12345,
                        "DAY": 1234
                    },
                    "showUnitBefore": true,
                    "scaling": 1000,
                    "decimals": 0,
                    "unit": "$"
                },
                "primaryMeasureDelta": {
                    "suffix": "VS LY",
                    "unit": "%",
                    "valueByTimebox": {
                        "YTD": 0,
                        "MTD": 0,
                        "WTD": 0,
                        "DAY": 0
                    }
                },
                "secondaryMeasure": {
                    "valueByTimebox": {
                        "YTD": 12345,
                        "MTD": 2345,
                        "WTD": 123,
                        "DAY": 123
                    },
                    "unit": "pc"
                }
            }
        }
    ]
};

export default data;
