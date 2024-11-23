import React, { useState } from 'react';

const IndexMl = () => {
    const [caretakers, setCaretakers] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
    
        try {
            const response = await fetch("http://localhost:5000/recommend", {
                method: "POST",
                body: formData,
            });
    
            if (response.ok) {
                const result = await response.json();
                setCaretakers(result.caretakers);
                setErrorMessage("");
            } else {
                const error = await response.json();
                setErrorMessage(error.error || error.message);
                setCaretakers([]);
            }
        } catch (error) {
            setErrorMessage("An error occurred while fetching the recommendation.");
            setCaretakers([]);
        }
    };

    return (
        <div 
            style={{
                fontFamily: "'Poppins', sans-serif", 
                backgroundImage: 'url(https://img.freepik.com/free-photo/asian-young-caregiver-caring-her-elderly-patient-senior-daycare-handicap-patient-wheelchair-hospital-talking-friendly-nurse-looking-cheerful-nurse-wheeling-senior-patient_609648-3125.jpg?semt=ais_hybrid)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', // Centering the content vertically and horizontally
                position: 'relative',
                opacity: '0.7'
            }}
            className='flex flex-col items-center p-5 bg-gray-100 min-h-screen'
        >
            <div className="container" style={{
                position: 'relative',
                zIndex: 2,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                width: '100%',
                maxWidth: '600px',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
                margin: '0', // Ensuring no margin for perfect centering
            }}>
                <h1 style={{
                    fontSize: '32px',
                    marginBottom: '20px',
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '3px'
                }}>Caretaker Recommendation</h1>
                <form id="recommendationForm" onSubmit={handleSubmit}>
                    <label htmlFor="issue1" style={{ display: 'block', textAlign: 'left', fontWeight: 'bold', margin: '15px 0 5px', color: '#ddd' }}>Medical Issue 1:</label>
                    <input type="text" id="issue1" name="issue1" placeholder="e.g., Diabetes" required style={{
                        width: '100%', padding: '12px 15px', marginBottom: '15px', border: 'none', borderRadius: '10px', fontSize: '14px', color: '#fff', backgroundColor: '#6f4f28'
                    }} />

                    <label htmlFor="issue2" style={{ display: 'block', textAlign: 'left', fontWeight: 'bold', margin: '15px 0 5px', color: '#ddd' }}>Medical Issue 2:</label>
                    <input type="text" id="issue2" name="issue2" placeholder="e.g., Hypertension" style={{
                        width: '100%', padding: '12px 15px', marginBottom: '15px', border: 'none', borderRadius: '10px', fontSize: '14px', color: '#fff', backgroundColor: '#6f4f28'
                    }} />

                    <label htmlFor="issue3" style={{ display: 'block', textAlign: 'left', fontWeight: 'bold', margin: '15px 0 5px', color: '#ddd' }}>Medical Issue 3:</label>
                    <input type="text" id="issue3" name="issue3" placeholder="e.g., Arthritis" style={{
                        width: '100%', padding: '12px 15px', marginBottom: '15px', border: 'none', borderRadius: '10px', fontSize: '14px', color: '#fff', backgroundColor: '#6f4f28'
                    }} />

                    <label htmlFor="specialty" style={{ display: 'block', textAlign: 'left', fontWeight: 'bold', margin: '15px 0 5px', color: '#ddd' }}>Preferred Caretaker Specialty:</label>
                    <select id="specialty" name="specialty" required style={{
                        width: '100%', padding: '12px 15px', marginBottom: '15px', border: 'none', borderRadius: '10px', fontSize: '14px', color: '#fff', backgroundColor: '#6f4f28'
                    }}>
                        <option value="">-- Select a Specialty --</option>
                        <option value="Nurse">Nurse</option>
                        <option value="General Practitioner">General Practitioner</option>
                        <option value="Geriatric Specialist">Geriatric Specialist</option>
                        <option value="Nutritionist">Nutritionist</option>
                        <option value="Physiotherapist">Physiotherapist</option>
                    </select>

                    <button type="submit" style={{
                        width: '100%', padding: '15px 20px', background: '#3d8a6e', color: '#fff', border: 'none', borderRadius: '15px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase', transition: 'transform 0.2s, background 0.3s'
                    }}>Get Recommendations</button>
                </form>

                {errorMessage && <div style={{ color: 'red', marginTop: '20px' }}>{errorMessage}</div>}

                <div className="result" id="result" style={{ display: caretakers.length > 0 ? 'block' : 'none', marginTop: '20px' }}>
                    <h2 style={{ fontSize: '22px', marginBottom: '15px', color: '#fff' }}>Recommended Caretakers</h2>
                    <div id="caretakerList">
                        {caretakers.map((caretaker, index) => (
                            <div key={index} className="caretaker" style={{
                                textAlign: 'left', background: 'rgba(255, 255, 255, 0.3)', padding: '15px 20px', borderRadius: '15px', marginBottom: '10px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)', color: '#fff'
                            }}>
                                <strong style={{ color: '#ffdd59' }}>Name:</strong> {caretaker.Caretaker_Name}<br />
                                <strong style={{ color: '#ffdd59' }}>Specialty:</strong> {caretaker.Caretaker_Expertise}<br />
                                <strong style={{ color: '#ffdd59' }}>Rating:</strong> {caretaker.Rating}/5
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer style={{
                position: 'absolute', right: '30px', bottom: '30px', fontSize: '12px', color: '#bbb', zIndex: 2
            }}>
                Powered by Caretaker Recommendation System © 2024
            </footer>
        </div>
    );
};

export default IndexMl;
