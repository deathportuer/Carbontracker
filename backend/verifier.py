from sklearn.ensemble import IsolationForest
import numpy as np

def calculate_trust_score(footprint):
    base_score = 100
    deductions = 0

    if footprint.emissions <= 0:
        deductions += 40
    if not footprint.activity:
        deductions += 20

    emissions_data = np.array([[footprint.emissions]])
    clf = IsolationForest(contamination=0.1)
    clf.fit([[50], [60], [55], [70], [80], [40]])
    prediction = clf.predict(emissions_data)[0]
    if prediction == -1:
        deductions += 30

    trust_score = max(0, base_score - deductions)
    return round(trust_score, 2)
