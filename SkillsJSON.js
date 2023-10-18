let obj = {
    "data": {
        "interaction_id": "7aeb0e6e-c375-4c87-9234-bb4437e8439f",
        "source": "+17029131574",
        "destination": "+18332602467",
        "start_utc": "2023-07-31T08:21:28.096893",
        "end_utc": "2023-07-31T08:21:53.184658",
        "features": {
            "phoneprint": {
                "strength": 187904,
                "generated_utc": "2023-07-31T08:21:53.732969",
                "input": "401520",
                "internal_state": "",
                "vector": "",
                "encoding_type": "BASE64",
                "encryption_key_name": "",
                "phase": "UNKNOWN"
            },
            "spoof_detection": {
                "strength": 12,
                "generated_utc": "2023-07-31T08:21:27.267201699",
                "input": "1",
                "internal_state": "",
                "vector": "",
                "encoding_type": "BASE64",
                "encryption_key_name": "",
                "phase": "PRE_RING"
            },
            "voiceprint_3_0": {
                "strength": 0.362,
                "generated_utc": "2023-07-31T08:21:53.231112",
                "input": "401520",
                "internal_state": "",
                "vector": "",
                "encoding_type": "BASE64",
                "encryption_key_name": "",
                "phase": "UNKNOWN",
                "metrics": {
                    "net_speech_seconds": 3.62
                }
            }
        },
        "fraud_predictions": {
            "adaptive_blacklist": {
                "score": 0,
                "inputs": "{\"genuines\":0,\"frauds\":0,\"epsilon\":0.5}",
                "generated_utc": "2023-07-31T08:21:28.181476047Z",
                "phase": "PRE_RING",
                "error": "UNKNOWN_BOOL"
            },
            "adaptive_whitelist": {
                "score": 0,
                "inputs": "{\"genuines\":0,\"last_fraud_date\":null}",
                "generated_utc": "2023-07-31T08:21:28.181476047Z",
                "phase": "PRE_RING",
                "error": "UNKNOWN_BOOL"
            },
            "calibrated_risk_score": {
                "score": 0.09147674,
                "reasons": [
                    "ani_reputation",
                    "carrier_risk"
                ],
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.467311139Z",
                "reason_details": {
                    "ani_reputation": "1.000000",
                    "behavior": "0.091477",
                    "calling_pattern": "0.000000",
                    "carrier_risk": "1.000000",
                    "device": "0.091477",
                    "on_allowlist": "1.000000",
                    "on_blocklist": "0.000000",
                    "spoofing_risk": "0.700000",
                    "valid_ani": "0.700000"
                },
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "consortium_source_blacklist": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.1571386Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "consortium_source_whitelist": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.1571386Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "ensemble": {
                "score": 0.09147674,
                "reasons": [
                    "ani_reputation",
                    "carrier_risk"
                ],
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.467311139Z",
                "reason_details": {
                    "ani_reputation": "1.000000",
                    "behavior": "0.091477",
                    "calling_pattern": "0.000000",
                    "carrier_risk": "1.000000",
                    "device": "0.091477",
                    "on_allowlist": "1.000000",
                    "on_blocklist": "0.000000",
                    "spoofing_risk": "0.700000",
                    "valid_ani": "0.700000"
                },
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "fraud_risk_grouper": {
                "score": 0.09147674,
                "reasons": [
                    "calling_pattern_reason",
                    "carrier_risk_reason",
                    "pos_is_international",
                    "source_blacklist",
                    "adaptive_blacklist",
                    "ani_reputation_reason",
                    "pos_is_voip",
                    "spoof_detection",
                    "ups",
                    "neg_adaptive_whitelist",
                    "neg_source_whitelist"
                ],
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.467311139Z",
                "reason_details": {
                    "adaptive_blacklist": "0.000000",
                    "ani_reputation_reason": "1.000000",
                    "calling_pattern_reason": "0.000000",
                    "carrier_risk_reason": "1.000000",
                    "neg_adaptive_whitelist": "0.000000",
                    "neg_source_whitelist": "0.000000",
                    "pos_is_international": "0.000000",
                    "pos_is_voip": "0.000000",
                    "source_blacklist": "0.000000",
                    "spoof_detection": "0.700000",
                    "ups": "0.091477"
                },
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "pd_carrier_unknown": {
                "score": 1,
                "inputs": "1",
                "generated_utc": "2023-07-31T08:21:28.279391234Z",
                "phase": "PRE_RING",
                "error": "UNKNOWN_BOOL"
            },
            "prs_ani_invalid": {
                "score": 0,
                "inputs": "{\"Scale\":1,\"Field\":\"prs_ani_invalid\",\"Value\":0}",
                "generated_utc": "2023-07-31T08:21:28.271561585Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "prs_risk_score": {
                "score": 1,
                "inputs": "{\"Scale\":0.01,\"Field\":\"prs_risk_score\",\"Value\":100}",
                "generated_utc": "2023-07-31T08:21:28.270479176Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "risky_ani_blacklist": {
                "score": 0,
                "inputs": "{\"Scale\":1,\"Field\":\"risky_ani_blacklist\",\"Value\":0}",
                "generated_utc": "2023-07-31T08:21:28.27187748Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000000400000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272069911Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000000500000101": {
                "score": 0.46580535,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272094528Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000000500000102": {
                "score": 0.9735,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272099261Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000000500000103": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272073845Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001100000001": {
                "score": 0.97197384,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272043142Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001200000001": {
                "score": 0.96786803,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272114423Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001300000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272086395Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001600000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.27205307Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001700000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272076642Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001800000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272111399Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001900000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272101952Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002000000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.27204753Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002000000002": {
                "score": 0.020556588,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272104612Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002000000101": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272088823Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002000000102": {
                "score": 0.015082915,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272091175Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002100000001": {
                "score": 5.1262,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.27205565Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002100000002": {
                "score": 1,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272059389Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002200000001": {
                "score": 0.9922,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272079074Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002200000002": {
                "score": 1,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272062038Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002300000001": {
                "score": 3.0592,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272050434Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002300000002": {
                "score": 1,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272064945Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002400000003": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272117288Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002500000001": {
                "score": 3.546191,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272067374Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002600000001": {
                "score": 64.87527,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272038452Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002700000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272083936Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002800000001": {
                "score": 0.9806813,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272081519Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002800000002": {
                "score": 0.91476756,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.272107339Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002900000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.302825282Z",
                "phase": "PRE_RING",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002900000002": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.302828353Z",
                "phase": "PRE_RING",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002900000003": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.302829065Z",
                "phase": "PRE_RING",
                "error": "UNKNOWN_BOOL"
            },
            "source_blacklist": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.1571386Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "source_whitelist": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-31T08:21:28.1571386Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection": {
                "score": 0.7,
                "inputs": "1",
                "generated_utc": "2023-07-31T08:21:28.460675",
                "phase": "PRE_RING",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection_bayes": {
                "score": 0.3152236,
                "reasons": [
                    "Spoof_Detection Mismatch"
                ],
                "inputs": "1",
                "generated_utc": "2023-07-31T08:21:53.362548",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection_carrier_nw": {
                "score": 0.5883811,
                "inputs": "1",
                "generated_utc": "2023-07-31T08:21:53.362587",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection_ensemble": {
                "score": 0.19722563,
                "reasons": [
                    "Spoof_Detection Mismatch"
                ],
                "inputs": "1",
                "generated_utc": "2023-07-31T08:21:53.362621",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection_legacy": {
                "score": 0.7,
                "inputs": "1",
                "generated_utc": "2023-07-31T08:21:53.362515",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection_nc": {
                "score": 0.7,
                "inputs": "1",
                "generated_utc": "2023-07-31T08:21:53.362459",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoofprint": {
                "score": 0.01,
                "reasons": [
                    "Spoofprint Mismatch"
                ],
                "inputs": "1",
                "generated_utc": "2023-07-31T08:21:28.650888",
                "phase": "PRE_RING",
                "error": "UNKNOWN_BOOL"
            }
        },
        "is_fraud": false,
        "reputation_facts": {
            "ani_reputation": "TRUE",
            "area": "Nevada",
            "calling_pattern": "FALSE",
            "carrier": "HD CARRIER LLC",
            "carrier_risk": "TRUE",
            "country": "United States",
            "e164": "+17029131574",
            "geo": "DOMESTIC",
            "localcallingguide_ocn": "253F",
            "localcallingguide_region": "NV",
            "network": "LANDLINE",
            "phone_type": "FIXED_LINE_OR_MOBILE",
            "prs_ani_invalid": "0.000000",
            "prs_risk_score": "100.000000",
            "region": "US",
            "risk_reasons": "pindrop_client_reported_bad",
            "risky_ani_blacklist": "0.000000"
        },
        "raw_reputation_data": "{\"cid_info\":{\"area\":\"Nevada\",\"carrier\":\"HD CARRIER LLC\",\"country\":\"United States\",\"geo\":\"DOMESTIC\",\"network\":\"LANDLINE\",\"phone_type\":\"FIXED_LINE_OR_MOBILE\",\"region\":\"US\"},\"libphonenumber\":{\"area\":\"Nevada\",\"carrier\":\"\",\"country\":\"United States\",\"e164\":\"+17029131574\",\"e164_cc\":\"1\",\"e164_ndc\":\"702\",\"e164_sn\":\"9131574\",\"e164_valid\":true,\"phone_type\":\"FIXED_LINE_OR_MOBILE\",\"region\":\"US\"},\"localcallingguide\":{\"company_name\":\"WIDE VOICE, LLC - NV\",\"company_type\":\"C\",\"lata\":\"721\",\"npanxxx\":\"7029131\",\"ocn\":\"253F\",\"rc\":\"Las Vegas\",\"region\":\"NV\"},\"pd_info\":{\"cluster\":[],\"history\":[],\"tags\":[]},\"risk_detail\":{\"geographic_complaint\":{\"fips_complaints\":0,\"max_fips_complaints\":19.5184},\"inactive_number\":{\"active_telephone_number\":0},\"invalid_number\":{},\"phone_number_complaint\":{\"pindrop\":{\"max_complaints\":19580,\"num_complaints\":0}},\"phone_type\":{\"is_voip\":false},\"pindrop_client_reported_bad\":{\"client_weight\":0,\"max_client_weight\":23,\"min_client_weight\":-5},\"provider_complaint\":{\"company_complaints\":0,\"max_company_complaints\":11950.99358436,\"prepaid\":0},\"spam_complaint\":{}},\"risk_reasons\":{\"geographic_complaint\":0,\"inactive_number\":0,\"invalid_number\":0,\"phone_number_complaint\":0,\"phone_type\":0,\"pindrop_client_reported_bad\":1,\"provider_complaint\":0,\"spam_complaint\":0},\"risk_score\":{\"confidence\":100,\"customer_override\":null,\"value\":99.9999999996241},\"score_factors\":{\"0000000400000001\":{\"value\":0},\"0000000500000101\":{\"description\":\"1.1.7-2023-05-29T00:59:04.329969Z\",\"metadata\":{\"id\":\"100\"},\"value\":0.46580535011021934},\"0000000500000102\":{\"metadata\":{\"id\":\"glob\",\"version\":\"0.0.0\"},\"value\":0.9735},\"0000000500000103\":{\"metadata\":{\"id\":\"glob\",\"version\":\"0.0.0\"},\"value\":0},\"0000001100000001\":{\"description\":\"1.0.4 2023-05-30T07:12:22Z\",\"value\":0.9719738524087909},\"0000001200000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0.9678680420770824},\"0000001300000001\":{\"description\":\"2.1.0 2019-09-05T12:00:01Z\",\"value\":0},\"0000001600000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000001700000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000001800000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000001900000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000002000000001\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0},\"0000002000000002\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0.020556587439641307},\"0000002000000101\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0},\"0000002000000102\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0.01508291559450843},\"0000002100000001\":{\"description\":\"Score v2.0.0 2023-05-30T09:12:56Z\",\"value\":5.1262},\"0000002100000002\":{\"description\":\"Class v2.0.0 2023-05-30T09:12:56Z\",\"value\":1},\"0000002200000001\":{\"description\":\"Score v2.0.0 2023-05-30T09:12:56Z\",\"value\":0.9922000169754028},\"0000002200000002\":{\"description\":\"Class v2.0.0 2023-05-30T09:12:56Z\",\"value\":1},\"0000002300000001\":{\"description\":\"Score v2.0.0 2023-05-30T09:12:56Z\",\"value\":3.0592},\"0000002300000002\":{\"description\":\"Class v2.0.0 2023-05-30T09:12:56Z\",\"value\":1},\"0000002400000003\":{\"description\":\"Count v2.0.0 2023-05-30T09:12:56Z\",\"value\":0},\"0000002500000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":3.5461909863259002},\"0000002600000001\":{\"intensities\":{\"12\":8.300551433343566,\"120\":111.386030049863,\"2\":0.7836243984167225,\"24\":18.5093855795811,\"360\":323.43627731204845,\"4\":2.38061640896532,\"48\":41.44382931159801,\"72\":64.87527016720215},\"value\":64.87527016720215},\"0000002700000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000002800000001\":{\"description\":\"Score v1.0.0 2023-05-29T06:15:01Z\",\"reasons\":[\"ANI_REPUTATION\",\"CARRIER_RISK\"],\"secondary\":0,\"value\":0.9806813297442124},\"0000002800000002\":{\"description\":\"Class v1.0.0 2023-05-29T06:15:01Z\",\"reasons\":[\"ANI_REPUTATION\",\"CARRIER_RISK\"],\"secondary\":0,\"value\":0.9147675725983794}},\"voice_bio\":{\"excluded\":false}}\n",
        "customer_id": "569f7a78-1f23-4e3c-be80-90ab46097488",
        "fraud_risk_reasons": [
            "ani_reputation",
            "carrier_risk"
        ],
        "fraud_score": 0.09147674,
        "alternate_ids": {
            "1319": "Customer Correlation Alternate Id",
            "cfc77b1e-eeff-4e2c-a24b-dbf0464807e1": "PRS_UUID"
        },
        "notes": "",
        "phase_times": {
            "IVR": {
                "start_utc": "2023-07-31T08:21:28.302305197",
                "end_utc": ""
            },
            "PRE_RING": {
                "start_utc": "2023-07-31T08:21:28.152570877",
                "end_utc": ""
            }
        },
        "analysis_version": {
            "FraudGrouperConfig": {
                "id": 1857808,
                "is_empty": false
            },
            "SafeprintBlacklistModelConfigs": {
                "id": 464547,
                "is_empty": false
            },
            "VoiceprintBlacklistModelConfigs": {
                "id": 464551,
                "is_empty": false
            },
            "CarrierRiskLabels": {
                "id": 464537,
                "is_empty": false
            },
            "EnsembleConfigs": {
                "id": 464538,
                "is_empty": false
            },
            "SafeLabelModelConfigs": {
                "id": 464545,
                "is_empty": false
            },
            "AdaptiveListConfig": {
                "id": 464535,
                "is_empty": false
            },
            "SpoofprintModelConfigs": {
                "id": 464549,
                "is_empty": false
            },
            "ScoreReportingThresholdConfigs": {
                "id": 0,
                "is_empty": true
            },
            "SafeExtractionConfigs": {
                "id": 464540,
                "is_empty": false
            },
            "SvarExtractionConfig": {
                "id": 464541,
                "is_empty": false
            },
            "SvarFactoryConfig": {
                "id": 1731866,
                "is_empty": false
            }
        },
        "is_high_risk": "FALSE",
        "line_of_business": {
            "lob_id": "3b4c0e13-e103-437b-8157-d30aec3fd71a",
            "name": "Five9 VCC"
        },
        "blacklist_reports": {
            "spoof_detection": {
                "threshold": 0,
                "total_emitted": 5,
                "total_evaluated": 5
            },
            "spoofprint": {
                "threshold": 0,
                "total_emitted": 1,
                "total_evaluated": 1
            }
        },
        "analysis_status": "FINALIZED",
        "country_code": "US",
        "express": false,
        "es_indexes": {
            "interaction": "569f7a78-1f23-4e3c-be80-90ab46097488.interactions-2021.03.25-000001",
            "report": "569f7a78-1f23-4e3c-be80-90ab46097488.reports-2022.07.27-000002"
        },
        "infra_partition": "",
        "graph_risks": {
            "no_account_referenced": {
                "score_factors": {
                    "0000002900000001": {
                        "description": "GrModel",
                        "metadata": {
                            "raw_score": 0,
                            "is_default": true
                        },
                        "value": 0
                    },
                    "0000002900000002": {
                        "description": "",
                        "metadata": {
                            "raw_score": 0,
                            "is_default": false
                        },
                        "value": 0
                    },
                    "0000002900000003": {
                        "description": "",
                        "metadata": {
                            "raw_score": 0,
                            "is_default": false
                        },
                        "value": 0
                    }
                }
            }
        },
        "has_custom_attributes": "UNKNOWN_BOOL",
        "termination_source": "SIPREC",
        "termination_note": "NORMAL",
        "auth_method": "",
        "exclusion": "NONE"
    }
}

//obj = JSON.parse(obj);

let arr = [];

if (Object.keys(obj.data.features).includes('phoneprint')) {
    if (Object.keys(obj.data.features.phoneprint).includes('strength')) {
        arr[0] = obj.data.features.phoneprint.strength;
    }
    else {
        arr[0] = "NA";
    }
}
else {
    arr[0] = "NA";
}

if (Object.keys(obj.data.features).includes('spoof_detection')) {
    if (Object.keys(obj.data.features.spoof_detection).includes('strength')) {
        arr[1] = obj.data.features.spoof_detection.strength;
    } else {
        arr[1] = "NA";
    }

    if (Object.keys(obj.data.features.spoof_detection).includes('phase')) {
        arr[2] = obj.data.features.spoof_detection.phase;
    } else {
        arr[2] = "NA";
    }

} else {
    arr[1] = "NA";
    arr[2] = "NA";
}

if (Object.keys(obj.data.fraud_predictions).includes('spoof_detection')) {
    if (Object.keys(obj.data.fraud_predictions.spoof_detection).includes('score')) {
        arr[3] = obj.data.fraud_predictions.spoof_detection.score;
    } else {
        arr[3] = "NA";
    }

    if (Object.keys(obj.data.fraud_predictions.spoof_detection).includes('reasons')) {
        arr[4] = obj.data.fraud_predictions.spoof_detection.reasons;
    } else {
        arr[4] = "NA";
    }

} 
else {
    arr[3] = "NA";
    arr[4] = "NA";
}

if (Object.keys(obj.data.features).includes('voiceprint_3_0')) {
    if (Object.keys(obj.data.features.voiceprint_3_0).includes('strength')) {
        arr[5] = obj.data.features.voiceprint_3_0.strength;
    } else {
        arr[5] = "NA";
    }

    if (Object.keys(obj.data.features.voiceprint_3_0).includes('phase')) {
        arr[6] = obj.data.features.voiceprint_3_0.phase;
    } else {
        arr[6] = "NA";
    }

} else {
    arr[5] = "NA";
    arr[6] = "NA";
}

try{
    arr[7] = obj.data.reputation_facts.area;
    arr[8] = obj.data.reputation_facts.carrier;
    arr[9] = obj.data.reputation_facts.network;
    arr[10] = obj.data.reputation_facts.phone_type;
    arr[11] = obj.data.reputation_facts.risk_reasons;
}
catch{
    arr[7] = "NA";
    arr[8] ="NA";
    arr[9] = "NA";
    arr[10] = "NA";
    arr[11] = "NA";
}


arr[12] = obj.data.line_of_business.name;
arr[13] = obj.data.analysis_status;

let res = {};
res.phoneprint_strength = arr[0];

res.spoof_detection = {};
res.spoof_detection.strength = arr[1];
res.spoof_detection.phase = arr[2];

res.fraud_predictions_spoof_detection = {};
res.fraud_predictions_spoof_detection.score = arr[3];
res.fraud_predictions_spoof_detection.reasons = arr[4];

res.voice_print = {};
res.voice_print.strength = arr[5];
res.voice_print.phase = arr[6];

res.reputation_facts = {};
res.reputation_facts.area = arr[7];
res.reputation_facts.carrier = arr[8];
res.reputation_facts.network = arr[9];
res.reputation_facts.phone_type = arr[10];
res.reputation_facts.risk_reasons = arr[11];

res.line_of_business = arr[12];
res.analysis_status = arr[13];

console.log("RESULT FOR INTERACTION DATA",res);
//return res;