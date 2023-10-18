

obj = JSON.parse(obj);
let res = {};
res.phoneprint_strength = obj.data.features.phoneprint.strength;

res.spoof_detection = {};
res.spoof_detection.strength = obj.data.features.spoof_detection.strength;
res.spoof_detection.phase = obj.data.features.spoof_detection.phase;

res.fraud_predictions_spoof_detection = {};
res.fraud_predictions_spoof_detection.score = obj.data.fraud_predictions.spoof_detection.score;
res.fraud_predictions_spoof_detection.reasons = obj.data.fraud_predictions.spoof_detection.reasons;

res.voice_print = {};
res.voice_print.strength = obj.data.features.voiceprint_3_0.strength;
res.voice_print.phase = obj.data.features.voiceprint_3_0.phase;

res.fraud_risk_grouper = {};
res.fraud_risk_grouper.score = obj.data.fraud_predictions.fraud_risk_grouper.score;
res.fraud_risk_grouper.reasons = obj.data.fraud_predictions.fraud_risk_grouper.strength;

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