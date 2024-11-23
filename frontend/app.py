from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the model and caretaker dataset
model = joblib.load("model.pkl")  # Replace with the actual model path
caretaker_data = pd.read_csv("reshuffled_final_final_final.csv")  # Path to your caretaker dataset

# List of all possible one-hot encoded columns
ONE_HOT_COLUMNS = [
    "Medical_Issue1_Arthritis", "Medical_Issue1_Asthma",
       "Medical_Issue1_COPD", "Medical_Issue1_Cataracts",
       "Medical_Issue1_Chronic Pain", "Medical_Issue1_Dementia",
       "Medical_Issue1_Depression", "Medical_Issue1_Diabetes",
       "Medical_Issue1_Epilepsy", "Medical_Issue1_Glaucoma",
       "Medical_Issue1_Hearing Loss", "Medical_Issue1_Heart Disease",
       "Medical_Issue1_Hypertension", "Medical_Issue1_Obesity",
       "Medical_Issue1_Osteoporosis", "Medical_Issue1_Parkinson's",
       "Medical_Issue1_Respiratory Issues", "Medical_Issue1_Stroke",
       "Medical_Issue1_Urinary Incontinence", "Medical_Issue2_Arthritis",
       "Medical_Issue2_Asthma", "Medical_Issue2_COPD",
       "Medical_Issue2_Cataracts", "Medical_Issue2_Chronic Pain",
       "Medical_Issue2_Dementia", "Medical_Issue2_Depression",
       "Medical_Issue2_Diabetes", "Medical_Issue2_Epilepsy",
       "Medical_Issue2_Glaucoma", "Medical_Issue2_Hearing Loss",
       "Medical_Issue2_Heart Disease", "Medical_Issue2_Hypertension",
       "Medical_Issue2_Obesity", "Medical_Issue2_Osteoporosis",
       "Medical_Issue2_Parkinson's", "Medical_Issue2_Respiratory Issues",
       "Medical_Issue2_Stroke", "Medical_Issue2_Urinary Incontinence",
       "Medical_Issue3_Arthritis", "Medical_Issue3_Asthma",
       "Medical_Issue3_COPD", "Medical_Issue3_Cataracts",
       "Medical_Issue3_Chronic Pain", "Medical_Issue3_Dementia",
       "Medical_Issue3_Depression", "Medical_Issue3_Diabetes",
       "Medical_Issue3_Epilepsy", "Medical_Issue3_Glaucoma",
       "Medical_Issue3_Hearing Loss", "Medical_Issue3_Heart Disease",
       "Medical_Issue3_Hypertension", "Medical_Issue3_Obesity",
       "Medical_Issue3_Osteoporosis", "Medical_Issue3_Parkinson's",
       "Medical_Issue3_Respiratory Issues", "Medical_Issue3_Stroke",
       "Medical_Issue3_Urinary Incontinence",
       "Caretaker_Expertise_General Practitioner",
       "Caretaker_Expertise_Geriatric Specialist", "Caretaker_Expertise_Nurse",
       "Caretaker_Expertise_Nutritionist",
       "Caretaker_Expertise_Physiotherapist"]

@app.route("/recommend", methods=["POST"])
def recommend():
    try:
        # Extract form data
        issue1 = request.form.get("issue1")
        issue2 = request.form.get("issue2", "")  # Optional field
        issue3 = request.form.get("issue3", "")  # Optional field
        preferred_specialty = request.form.get("specialty")

        # Validate input
        if not issue1:
            return jsonify({"error": "At least one medical issue must be provided"}), 400
        if not preferred_specialty:
            return jsonify({"error": "Preferred caretaker specialty must be provided"}), 400

        # Create a dictionary to map inputs to one-hot encoded columns
        input_dict = {col: 0 for col in ONE_HOT_COLUMNS}  # Initialize all columns to 0

        # Update the dictionary with the user inputs
        if f"Medical_Issue1_{issue1}" in input_dict:
            input_dict[f"Medical_Issue1_{issue1}"] = 1
        if issue2 and f"Medical_Issue2_{issue2}" in input_dict:
            input_dict[f"Medical_Issue2_{issue2}"] = 1
        if issue3 and f"Medical_Issue3_{issue3}" in input_dict:
            input_dict[f"Medical_Issue3_{issue3}"] = 1
        if f"Caretaker_Expertise_{preferred_specialty}" in input_dict:
            input_dict[f"Caretaker_Expertise_{preferred_specialty}"] = 1

        # Convert dictionary to a format suitable for the model
        input_vector = np.array([input_dict[col] for col in ONE_HOT_COLUMNS]).reshape(1, -1)

        # Make a prediction
        prediction = model.predict(input_vector)

        # If the model predicts 1, filter caretakers by specialty
        if 1 in prediction:
            recommendations = caretaker_data[
                (caretaker_data["Caretaker_Expertise"] == preferred_specialty) & 
                (caretaker_data["Recommended"] == 1)
            ][["Caretaker_Name", "Caretaker_Expertise", "Rating"]].to_dict(orient="records")

            if not recommendations:
                return jsonify({"message": "No caretakers found for the given issues and specialty"}), 404

            return jsonify({"caretakers": recommendations})

        else:
            return jsonify({"message": "No caretakers available for prediction value other than '1'"}), 404

    except Exception as e:
        # Handle any unexpected errors
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
