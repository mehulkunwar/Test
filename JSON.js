let obj = {
  data : {
    let obj = {
      "interaction_id": "903af89b-984b-4bba-aea3-86c195af1554",
      "source": "+17029131269",
      "destination": "+18332602467",
      "start_utc": "2023-07-26T07:19:03.828161",
      "end_utc": "",
      "features": {
          "spoof_detection": {
              "strength": 13,
              "generated_utc": "2023-07-26T07:19:03.069227775",
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
              "generated_utc": "2023-07-26T07:19:03.848302315Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "adaptive_whitelist": {
              "score": 0,
              "inputs": "{\"genuines\":0,\"last_fraud_date\":null}",
              "generated_utc": "2023-07-26T07:19:03.848302315Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "calibrated_risk_score": {
              "score": 0.0915308,
              "reasons": [
                  "ani_reputation",
                  "carrier_risk"
              ],
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.559402092Z",
              "reason_details": {
                  "ani_reputation": "1.000000",
                  "behavior": "0.091531",
                  "calling_pattern": "0.000000",
                  "carrier_risk": "1.000000",
                  "device": "0.091531",
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
              "generated_utc": "2023-07-26T07:19:03.845323086Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "consortium_source_whitelist": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:03.845323086Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "ensemble": {
              "score": 0.0915308,
              "reasons": [
                  "ani_reputation",
                  "carrier_risk"
              ],
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.559402092Z",
              "reason_details": {
                  "ani_reputation": "1.000000",
                  "behavior": "0.091531",
                  "calling_pattern": "0.000000",
                  "carrier_risk": "1.000000",
                  "device": "0.091531",
                  "on_allowlist": "1.000000",
                  "on_blocklist": "0.000000",
                  "spoofing_risk": "0.700000",
                  "valid_ani": "0.700000"
              },
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "fraud_risk_grouper": {
              "score": 0.0915308,
              "reasons": [
                  "adaptive_blacklist",
                  "pos_is_international",
                  "pos_is_voip",
                  "source_blacklist",
                  "ups",
                  "ani_reputation_reason",
                  "calling_pattern_reason",
                  "carrier_risk_reason",
                  "spoof_detection",
                  "neg_adaptive_whitelist",
                  "neg_source_whitelist"
              ],
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.559402092Z",
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
                  "ups": "0.091531"
              },
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "pd_carrier_unknown": {
              "score": 1,
              "inputs": "1",
              "generated_utc": "2023-07-26T07:19:04.15356031Z",
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "prs_ani_invalid": {
              "score": 0,
              "inputs": "{\"Scale\":1,\"Field\":\"prs_ani_invalid\",\"Value\":0}",
              "generated_utc": "2023-07-26T07:19:04.070718625Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "prs_risk_score": {
              "score": 0.99999976,
              "inputs": "{\"Scale\":0.01,\"Field\":\"prs_risk_score\",\"Value\":99.99998}",
              "generated_utc": "2023-07-26T07:19:04.069696831Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "risky_ani_blacklist": {
              "score": 0,
              "inputs": "{\"Scale\":1,\"Field\":\"risky_ani_blacklist\",\"Value\":0}",
              "generated_utc": "2023-07-26T07:19:04.147016898Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000000400000001": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147179258Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000000500000101": {
              "score": 0.4830675,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147191663Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000000500000102": {
              "score": 0.9753,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147180471Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000000500000103": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.14718712Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000001100000001": {
              "score": 0.97197384,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147188282Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000001200000001": {
              "score": 0.9666401,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147183721Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000001300000001": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147163214Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000001600000001": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147190098Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000001700000001": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.14715668Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000001800000001": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147158156Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000001900000001": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147159332Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002000000001": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147181565Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002000000002": {
              "score": 0.020556588,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147192932Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002000000101": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147182739Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002000000102": {
              "score": 0.015082915,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147160655Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002100000001": {
              "score": 5.1262,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147172247Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002100000002": {
              "score": 1,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147165446Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002200000001": {
              "score": 0.9903,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147167537Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002200000002": {
              "score": 1,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147154333Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002300000001": {
              "score": 3.0582,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147175719Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002300000002": {
              "score": 1,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147169017Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002400000003": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147184786Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002500000001": {
              "score": 3.546191,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147174358Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002600000001": {
              "score": 31.069283,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147176875Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002700000001": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147185898Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002800000001": {
              "score": 0.98097754,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147170769Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002800000002": {
              "score": 0.9153078,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.147178132Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002900000001": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.184414668Z",
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002900000002": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.184418227Z",
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "rsc-0000002900000003": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:04.184418815Z",
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "source_blacklist": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:03.845323086Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "source_whitelist": {
              "score": 0,
              "inputs": "",
              "generated_utc": "2023-07-26T07:19:03.845323086Z",
              "phase": "PRE_RING",
              "error": "UNKNOWN_BOOL"
          },
          "spoof_detection": {
              "score": 0.11,
              "reasons": [
                  "CARRIER_MODEL_VALID",
                  "Spoof_Detection Mismatch"
              ],
              "inputs": "1",
              "generated_utc": "2023-07-26T07:19:04.553036",
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "spoof_detection_bayes": {
              "score": 0.0024587826,
              "reasons": [
                  "Spoof_Detection Mismatch"
              ],
              "inputs": "1",
              "generated_utc": "2023-07-26T07:19:04.553085",
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "spoof_detection_carrier_nw": {
              "score": 0.0071099238,
              "reasons": [
                  "Spoof_Detection Mismatch"
              ],
              "inputs": "1",
              "generated_utc": "2023-07-26T07:19:04.553106",
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "spoof_detection_ensemble": {
              "score": 0.049768236,
              "reasons": [
                  "Spoof_Detection Mismatch"
              ],
              "inputs": "1",
              "generated_utc": "2023-07-26T07:19:04.553127",
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "spoof_detection_legacy": {
              "score": 0.11,
              "reasons": [
                  "CARRIER_MODEL_VALID",
                  "Spoof_Detection Mismatch"
              ],
              "inputs": "1",
              "generated_utc": "2023-07-26T07:19:04.553063",
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "spoof_detection_nc": {
              "score": 0.7,
              "reasons": [
                  "NON_FIXED_VOIP"
              ],
              "inputs": "1",
              "generated_utc": "2023-07-26T07:19:04.552985",
              "reason_details": {
                  "NON_FIXED_VOIP": "NON_FIXED_VOIP"
              },
              "phase": "IVR",
              "error": "UNKNOWN_BOOL"
          },
          "spoofprint": {
              "score": 0.01,
              "reasons": [
                  "Spoofprint Mismatch"
              ],
              "inputs": "1",
              "generated_utc": "2023-07-26T07:19:04.349796",
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
          "e164": "+17029131269",
          "geo": "DOMESTIC",
          "localcallingguide_ocn": "253F",
          "localcallingguide_region": "NV",
          "network": "LANDLINE",
          "phone_type": "FIXED_LINE_OR_MOBILE",
          "prs_ani_invalid": "0.000000",
          "prs_risk_score": "99.999977",
          "region": "US",
          "risk_reasons": "pindrop_client_reported_bad",
          "risky_ani_blacklist": "0.000000"
      },
      "raw_reputation_data": "{\"cid_info\":{\"area\":\"Nevada\",\"carrier\":\"HD CARRIER LLC\",\"country\":\"United States\",\"geo\":\"DOMESTIC\",\"network\":\"LANDLINE\",\"phone_type\":\"FIXED_LINE_OR_MOBILE\",\"region\":\"US\"},\"libphonenumber\":{\"area\":\"Nevada\",\"carrier\":\"\",\"country\":\"United States\",\"e164\":\"+17029131269\",\"e164_cc\":\"1\",\"e164_ndc\":\"702\",\"e164_sn\":\"9131269\",\"e164_valid\":true,\"phone_type\":\"FIXED_LINE_OR_MOBILE\",\"region\":\"US\"},\"localcallingguide\":{\"company_name\":\"WIDE VOICE, LLC - NV\",\"company_type\":\"C\",\"lata\":\"721\",\"npanxxx\":\"7029131\",\"ocn\":\"253F\",\"rc\":\"Las Vegas\",\"region\":\"NV\"},\"pd_info\":{\"cluster\":[],\"history\":[],\"tags\":[]},\"risk_detail\":{\"geographic_complaint\":{\"fips_complaints\":0,\"max_fips_complaints\":19.5184},\"inactive_number\":{\"active_telephone_number\":0},\"invalid_number\":{},\"phone_number_complaint\":{\"pindrop\":{\"max_complaints\":19580,\"num_complaints\":0}},\"phone_type\":{\"is_voip\":false},\"pindrop_client_reported_bad\":{\"client_weight\":0,\"max_client_weight\":23,\"min_client_weight\":-5},\"provider_complaint\":{\"company_complaints\":0,\"max_company_complaints\":11950.99358436,\"prepaid\":0},\"spam_complaint\":{}},\"risk_reasons\":{\"geographic_complaint\":0,\"inactive_number\":0,\"invalid_number\":0,\"phone_number_complaint\":0,\"phone_type\":0,\"pindrop_client_reported_bad\":1,\"provider_complaint\":0,\"spam_complaint\":0},\"risk_score\":{\"confidence\":100,\"customer_override\":null,\"value\":99.99997749296759},\"score_factors\":{\"0000000400000001\":{\"value\":0},\"0000000500000101\":{\"description\":\"1.1.7-2023-05-29T00:59:04.329969Z\",\"metadata\":{\"id\":\"100\"},\"value\":0.4830674992778053},\"0000000500000102\":{\"metadata\":{\"id\":\"glob\",\"version\":\"0.0.0\"},\"value\":0.9753},\"0000000500000103\":{\"metadata\":{\"id\":\"glob\",\"version\":\"0.0.0\"},\"value\":0},\"0000001100000001\":{\"description\":\"1.0.4 2023-05-30T07:12:22Z\",\"value\":0.9719738524087909},\"0000001200000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0.9666401413855507},\"0000001300000001\":{\"description\":\"2.1.0 2019-09-05T12:00:01Z\",\"value\":0},\"0000001600000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000001700000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000001800000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000001900000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000002000000001\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0},\"0000002000000002\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0.020556587439641307},\"0000002000000101\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0},\"0000002000000102\":{\"description\":\"v1.1.0 2023-05-30T08:30:25Z\",\"value\":0.01508291559450843},\"0000002100000001\":{\"description\":\"Score v2.0.0 2023-05-30T09:12:56Z\",\"value\":5.1262},\"0000002100000002\":{\"description\":\"Class v2.0.0 2023-05-30T09:12:56Z\",\"value\":1},\"0000002200000001\":{\"description\":\"Score v2.0.0 2023-05-30T09:12:56Z\",\"value\":0.9902999997138977},\"0000002200000002\":{\"description\":\"Class v2.0.0 2023-05-30T09:12:56Z\",\"value\":1},\"0000002300000001\":{\"description\":\"Score v2.0.0 2023-05-30T09:12:56Z\",\"value\":3.0582},\"0000002300000002\":{\"description\":\"Class v2.0.0 2023-05-30T09:12:56Z\",\"value\":1},\"0000002400000003\":{\"description\":\"Count v2.0.0 2023-05-30T09:12:56Z\",\"value\":0},\"0000002500000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":3.5461909863259002},\"0000002600000001\":{\"intensities\":{\"12\":7.259688084689678,\"120\":49.35546455577781,\"2\":1.103233044059866,\"24\":12.458518329880798,\"360\":135.15151362985313,\"4\":2.3251245331914157,\"48\":21.725267174630755,\"72\":31.069282255946426},\"value\":31.069282255946426},\"0000002700000001\":{\"description\":\"v1.0.4 2023-05-30T07:12:22Z\",\"value\":0},\"0000002800000001\":{\"description\":\"Score v1.0.0 2023-05-29T06:15:01Z\",\"reasons\":[\"ANI_REPUTATION\",\"CARRIER_RISK\"],\"secondary\":0,\"value\":0.9809775609066926},\"0000002800000002\":{\"description\":\"Class v1.0.0 2023-05-29T06:15:01Z\",\"reasons\":[\"ANI_REPUTATION\",\"CARRIER_RISK\"],\"secondary\":0,\"value\":0.9153078242196344}},\"voice_bio\":{\"excluded\":false}}\n",
      "customer_id": "569f7a78-1f23-4e3c-be80-90ab46097488",
      "fraud_risk_reasons": [
          "ani_reputation",
          "carrier_risk"
      ],
      "fraud_score": 0.0915308,
      "alternate_ids": {
          "1222": "Customer Correlation Alternate Id",
          "6e8c3bcd-6bae-450d-863a-3205e4420625": "PRS_UUID"
      },
      "notes": "",
      "phase_times": {
          "IVR": {
              "start_utc": "2023-07-26T07:19:03.873202239",
              "end_utc": ""
          },
          "PRE_RING": {
              "start_utc": "2023-07-26T07:19:03.835039488",
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
              "total_emitted": 6,
              "total_evaluated": 6
          },
          "spoofprint": {
              "threshold": 0,
              "total_emitted": 1,
              "total_evaluated": 1
          }
      },
      "analysis_status": "IN_PROGRESS",
      "country_code": "US",
      "express": false,
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
      "termination_source": "NOOP_SOURCE",
      "termination_note": "NOOP_NOTE",
      "auth_method": "",
      "exclusion": "NONE"
    };
  }
}

//obj = JSON.parse(obj);
let res = {};
//res.phoneprint_strength = obj.data.features.phoneprint.strength;

res.spoof_detection = {};
res.spoof_detection.strength = obj.data.features.spoof_detection.strength; 
res.spoof_detection.phase = obj.data.features.spoof_detection.phase; 

res.fraud_predictions_spoof_detection = {};
res.fraud_predictions_spoof_detection.score = obj.data.fraud_predictions.spoof_detection.score;
res.fraud_predictions_spoof_detection.reasons = obj.data.fraud_predictions.spoof_detection.reasons;

res.voice_print = {};
//res.voice_print.strength = obj.data.features.voiceprint_3_0.strength; 
//res.voice_print.phase = obj.data.features.voiceprint_3_0.phase; 

res.fraud_risk_grouper = {};
res.fraud_risk_grouper.score = obj.data.fraud_predictions.fraud_risk_grouper.score;
//res.fraud_risk_grouper.reasons = obj.data.fraud_predictions.fraud_risk_grouper.strength; 

res.reputation_facts = {};
res.reputation_facts.area = obj.data.reputation_facts.area;
res.reputation_facts.carrier = obj.data.reputation_facts.carrier;
res.reputation_facts.network = obj.data.reputation_facts.network;
res.reputation_facts.phone_type = obj.data.reputation_facts.phone_type;
res.reputation_facts.risk_reasons = obj.data.reputation_facts.risk_reasons;

res.line_of_business = {};
res.line_of_business.name = obj.data.line_of_business.name;

res.analysis_status = obj.data.analysis_status;

console.error(res);
return obj;
