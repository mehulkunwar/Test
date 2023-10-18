let obj = {
    "data": {
        "interaction_id": "271e2453-3ff9-4342-a234-13c3b459df6a",
        "source": "+17029131444",
        "destination": "+18332602467",
        "start_utc": "2023-07-27T09:38:17.871049",
        "end_utc": "2023-07-27T09:38:35.517665",
        "features": {
            "phoneprint": {
                "strength": 121344,
                "generated_utc": "2023-07-27T09:38:36.152854",
                "input": "282432",
                "internal_state": "",
                "vector": "",
                "encoding_type": "BASE64",
                "encryption_key_name": "",
                "phase": "UNKNOWN"
            },
            "spoof_detection": {
                "strength": 12,
                "generated_utc": "2023-07-27T09:38:17.039874046",
                "input": "1",
                "internal_state": "",
                "vector": "",
                "encoding_type": "BASE64",
                "encryption_key_name": "",
                "phase": "PRE_RING"
            }
        },
        "fraud_predictions": {
            "adaptive_blacklist": {
                "score": 0,
                "inputs": "{\"genuines\":0,\"frauds\":0,\"epsilon\":0.5}",
                "generated_utc": "2023-07-27T09:38:17.887090104Z",
                "phase": "PRE_RING",
                "error": "UNKNOWN_BOOL"
            },
            "adaptive_whitelist": {
                "score": 0,
                "inputs": "{\"genuines\":0,\"last_fraud_date\":null}",
                "generated_utc": "2023-07-27T09:38:17.887090104Z",
                "phase": "PRE_RING",
                "error": "UNKNOWN_BOOL"
            },
            "calibrated_risk_score": {
                "score": 0.09096694,
                "reasons": [
                    "ani_reputation",
                    "carrier_risk"
                ],
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:18.329819313Z",
                "reason_details": {
                    "ani_reputation": "1.000000",
                    "behavior": "0.090967",
                    "calling_pattern": "0.000000",
                    "carrier_risk": "1.000000",
                    "device": "0.090967",
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
                "generated_utc": "2023-07-27T09:38:17.88259734Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "consortium_source_whitelist": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.88259734Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "ensemble": {
                "score": 0.09096694,
                "reasons": [
                    "ani_reputation",
                    "carrier_risk"
                ],
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:18.329819313Z",
                "reason_details": {
                    "ani_reputation": "1.000000",
                    "behavior": "0.090967",
                    "calling_pattern": "0.000000",
                    "carrier_risk": "1.000000",
                    "device": "0.090967",
                    "on_allowlist": "1.000000",
                    "on_blocklist": "0.000000",
                    "spoofing_risk": "0.700000",
                    "valid_ani": "0.700000"
                },
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "fraud_risk_grouper": {
                "score": 0.09096694,
                "reasons": [
                    "carrier_risk_reason",
                    "adaptive_blacklist",
                    "ani_reputation_reason",
                    "calling_pattern_reason",
                    "pos_is_international",
                    "pos_is_voip",
                    "source_blacklist",
                    "spoof_detection",
                    "ups",
                    "neg_adaptive_whitelist",
                    "neg_source_whitelist"
                ],
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:18.329819313Z",
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
                    "ups": "0.090967"
                },
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "pd_carrier_unknown": {
                "score": 1,
                "inputs": "1",
                "generated_utc": "2023-07-27T09:38:17.962515369Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "prs_ani_invalid": {
                "score": 0,
                "inputs": "{\"Scale\":1,\"Field\":\"prs_ani_invalid\",\"Value\":0}",
                "generated_utc": "2023-07-27T09:38:17.956882298Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "prs_risk_score": {
                "score": 1,
                "inputs": "{\"Scale\":0.01,\"Field\":\"prs_risk_score\",\"Value\":100}",
                "generated_utc": "2023-07-27T09:38:17.955823945Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "risky_ani_blacklist": {
                "score": 0,
                "inputs": "{\"Scale\":1,\"Field\":\"risky_ani_blacklist\",\"Value\":0}",
                "generated_utc": "2023-07-27T09:38:17.957070198Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000000400000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957185515Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000000500000101": {
                "score": 0.49458078,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957206696Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000000500000102": {
                "score": 0.9764,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957222256Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000000500000103": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957246547Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001100000001": {
                "score": 0.97197384,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957233547Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001200000001": {
                "score": 0.9881277,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957236205Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001300000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957211695Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001600000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957224962Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001700000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957263988Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001800000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957191529Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000001900000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957249085Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002000000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957194607Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002000000002": {
                "score": 0.020556588,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957251629Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002000000101": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957227755Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002000000102": {
                "score": 0.015082915,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.95723048Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002100000001": {
                "score": 3.3932,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957197211Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002100000002": {
                "score": 1,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957199654Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002200000001": {
                "score": 0.9903,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957238703Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002200000002": {
                "score": 1,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.95725421Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002300000001": {
                "score": 2.1917,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.95721422Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002300000002": {
                "score": 1,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957209226Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002400000003": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957241242Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002500000001": {
                "score": 3.546191,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957202936Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002600000001": {
                "score": 72.763245,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957243913Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002700000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957217105Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002800000001": {
                "score": 0.9778861,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957258541Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002800000002": {
                "score": 0.9096697,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.957261325Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002900000001": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:18.035702651Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002900000002": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:18.035706167Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "rsc-0000002900000003": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:18.035707005Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "source_blacklist": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.88259734Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "source_whitelist": {
                "score": 0,
                "inputs": "",
                "generated_utc": "2023-07-27T09:38:17.88259734Z",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection": {
                "score": 0.7,
                "inputs": "1",
                "generated_utc": "2023-07-27T09:38:18.322900",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection_bayes": {
                "score": 0.3152236,
                "reasons": [
                    "Spoof_Detection Mismatch"
                ],
                "inputs": "1",
                "generated_utc": "2023-07-27T09:38:35.565362",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection_carrier_nw": {
                "score": 0.5883811,
                "inputs": "1",
                "generated_utc": "2023-07-27T09:38:35.565385",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection_ensemble": {
                "score": 0.19722563,
                "reasons": [
                    "Spoof_Detection Mismatch"
                ],
                "inputs": "1",
                "generated_utc": "2023-07-27T09:38:35.565403",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection_legacy": {
                "score": 0.7,
                "inputs": "1",
                "generated_utc": "2023-07-27T09:38:35.565342",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoof_detection_nc": {
                "score": 0.7,
                "inputs": "1",
                "generated_utc": "2023-07-27T09:38:35.565303",
                "phase": "IVR",
                "error": "UNKNOWN_BOOL"
            },
            "spoofprint": {
                "score": 0.01,
                "reasons": [
                    "Spoofprint Mismatch"
                ],
                "inputs": "1",
                "generated_utc": "2023-07-27T09:38:18.371804",
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
            "e164": "+17029131444",
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
        "raw_reputation_data": "{\"cid_info\":{\"area\":\"Nevada\",\"carrier\":\"HD CARRIER LLC\",\"country\":\"United States\",\"geo\":\"DOMESTIC\",\"network\":\"LANDLINE\",\"phone_type\":\"FIXED_LINE_OR_MOBILE\",\"region\":\"US\"},\"libphonenumber\":{\"area\":\"Nevada\",\"carrier\":\"\",\"country\":\"United States\",\"e164\":\"+17029131444\",\"e164_cc\":\"1\",\"e164_ndc\":\"702\",\"e164_sn\":\"9131444\",\"e164_valid\":true,\"phone_type\":\"FIXED_LINE_OR_MOBILE\",\"region\":\"US\"},\"localcallingguide\":{\"company_name\":\"WIDE VOICE, LLC - NV\",\"company_type\":\"C\",\"lata\":\"721\",\"npanxxx\":\"7029131\",\"ocn\":\"253F\",\"rc\":\"Las Vegas\",\"region\":\"NV\"},\"pd_info\":{\"cluster\":[],\"history\":[],\"tags\":[]},\"risk_detail\":{\"geographic_complaint\":{\"fips_complaints\":0,\"max_fips_complaints\":19.5184},\"inactive_number\":{\"active_telephone_number\":0},\"invalid_number\":{},\"phone_number_complaint\":{\"pindrop\":{\"max_complaints\":19580,\"num_complaints\":0}},\"phone_type\":{\"is_voip\":false},\"pindrop_client_reported_bad\":{\"client_weight\":0,\"max_client_weight\":23,\"min_client_weight\":-5},\"provider_complaint\":{\"company_complaints\":0,\"max_company_complaints\":11950.99358436,\"prepaid\":0},\"spam_complaint\":{}},\"risk_reasons\":{\"geographic_complaint\":0,\"inactive_number\":0,\"invalid_number\":0,\"phone_number_complaint\":0,\"phone_type\":0,\"pindrop_client_reported_bad\":1,\"provider_complaint\":0,\"spam_complaint\":0},\"risk_score\":{\"confidence\":100,\"customer_override\":null,\"value\":99.99999958776927},\"score_factors\":{\"0000000400000001\":{\"value\":0},\"0000000500000101\":{\"description\":\"1.1.7-2023-05-29T00:59:04.329969Z\",\"metadata\":{\"id\":\"100\"},\"value\":0.49458076455671013},\"0000000500000102\":{\"metadata\":{\"id\":\"glob\",\"version\":\"0.0.0\"},\"value\":0.9764},\"0000000500000103\":{\"metadata\":{\"id\":\"glob\",\"version\":\"0.0.0\"},\"value\":0},\"0000001100000001\":{\"description\":\"1.0.4 2023-05-30T07:12:22Z\",\"value\":0.9719738524087909},\"0000001200000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0.9881277312080488},\"0000001300000001\":{\"description\":\"2.1.0 2019-09-05T12:00:01Z\",\"value\":0},\"0000001600000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000001700000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000001800000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000001900000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000002000000001\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0},\"0000002000000002\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0.020556587439641307},\"0000002000000101\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0},\"0000002000000102\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0.01508291559450843},\"0000002100000001\":{\"description\":\"Score v2.0.0 2023-05-30T09:12:56Z\",\"value\":3.3932},\"0000002100000002\":{\"description\":\"Class v2.0.0 2023-05-30T09:12:56Z\",\"value\":1},\"0000002200000001\":{\"description\":\"Score v2.0.0 2023-05-30T09:12:56Z\",\"value\":0.9902999997138977},\"0000002200000002\":{\"description\":\"Class v2.0.0 2023-05-30T09:12:56Z\",\"value\":1},\"0000002300000001\":{\"description\":\"Score v2.0.0 2023-05-30T09:12:56Z\",\"value\":2.1917},\"0000002300000002\":{\"description\":\"Class v2.0.0 2023-05-30T09:12:56Z\",\"value\":1},\"0000002400000003\":{\"description\":\"Count v2.0.0 2023-05-30T09:12:56Z\",\"value\":0},\"0000002500000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":3.5461909863259002},\"0000002600000001\":{\"intensities\":{\"12\":14.293553833407561,\"120\":112.96267503493057,\"2\":2.7675221188438144,\"24\":27.97419493705806,\"360\":282.30088080115127,\"4\":4.872343154928048,\"48\":51.42360873893295,\"72\":72.76324529627173},\"value\":72.76324529627173},\"0000002700000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000002800000001\":{\"description\":\"Score v1.0.0 2023-05-29T06:15:01Z\",\"reasons\":[\"ANI_REPUTATION\",\"CARRIER_RISK\"],\"secondary\":0,\"value\":0.9778860709448057},\"0000002800000002\":{\"description\":\"Class v1.0.0 2023-05-29T06:15:01Z\",\"reasons\":[\"ANI_REPUTATION\",\"CARRIER_RISK\"],\"secondary\":0,\"value\":0.9096697189979571}},\"voice_bio\":{\"excluded\":false}}\n",
        "customer_id": "569f7a78-1f23-4e3c-be80-90ab46097488",
        "fraud_risk_reasons": [
            "ani_reputation",
            "carrier_risk"
        ],
        "fraud_score": 0.09096694,
        "alternate_ids": {
            "1233": "Customer Correlation Alternate Id",
            "422e2c6b-1da4-45c6-897e-3304b9bec25d": "PRS_UUID"
        },
        "notes": "",
        "phase_times": {
            "IVR": {
                "start_utc": "2023-07-27T09:38:17.906949486",
                "end_utc": ""
            },
            "PRE_RING": {
                "start_utc": "2023-07-27T09:38:17.877938915",
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
//console.error("Call Interaction Data from Pindrop",obj);
let res = {};
res.spoof_detection = {};
res.fraud_predictions_spoof_detection = {};
res.voice_print = {};
res.line_of_business = {};
res.reputation_facts = {};
res.fraud_risk_grouper = {};

if(Object.keys(obj.data).includes('features.phoneprint.strength')){
  res.phoneprint_strength = obj.data.features.phoneprint.strength;
}
else{
  res.phoneprint_strength = "";
}

// if(Object.keys(obj.data).includes(keysArray['features.spoof_detection.strength'])){
//   res.spoof_detection.strength = obj.data.features.spoof_detection.strength;
// }
// else{
//   res.spoof_detection.strength = "";
// }

// if(Object.keys(obj.data).includes(keysArray['features.spoof_detection.phase'])){
//   res.spoof_detection.phase  = obj.data.features.spoof_detection.phase;
// }
// else{
//   res.spoof_detection.phase  = "";
// }

// if(Object.keys(obj.data).includes(keysArray['fraud_predictions.spoof_detection.score'])){
//   res.fraud_predictions_spoof_detection.score = obj.data.fraud_predictions.spoof_detection.score;
// }
// else{
//   res.fraud_predictions_spoof_detection.score = "";
// }

// if(Object.keys(obj.data).includes(keysArray['fraud_predictions.spoof_detection.reasons'])){
//   res.fraud_predictions_spoof_detection.reasons  = obj.data.fraud_predictions.spoof_detection.reasons;
// }
// else{
//   res.fraud_predictions_spoof_detection.reasons = "";
// }
  
// if(Object.keys(obj.data).includes(keysArray[key]){
//   res.phoneprint_strength = obj.data.features.phoneprint.strength;
// }else{
//   res.phoneprint_strength = "";
// }

// res.voice_print.strength = obj.data.features.voiceprint_3_0.strength;
// res.voice_print.phase = obj.data.features.voiceprint_3_0.phase;


// res.fraud_risk_grouper.score =
//   obj.data.fraud_predictions.fraud_risk_grouper.score;
// res.fraud_risk_grouper.reasons =
//   obj.data.fraud_predictions.fraud_risk_grouper.strength;


// res.reputation_facts.area = obj.data.reputation_facts.area;
// res.reputation_facts.carrier = obj.data.reputation_facts.carrier;
// res.reputation_facts.network = obj.data.reputation_facts.network;
// res.reputation_facts.phone_type = obj.data.reputation_facts.phone_type;
// res.reputation_facts.risk_reasons = obj.data.reputation_facts.risk_reasons;


// res.line_of_business.name = obj.data.line_of_business.name;

// res.analysis_status = obj.data.analysis_status;

console.log("RESULT INTERACTION DATA",res);
return res;
