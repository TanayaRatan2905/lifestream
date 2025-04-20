export const addSampleBloodRequests = async () => {
  const sampleRequests = [
    {
      patient_name: "John Smith",
      blood_group: "A+",
      hospital_name: "City General Hospital",
      hospital_address: "123 Medical Center Drive, Cityville",
      contact_number: "+1 555-123-4567",
      required_units: 2,
      urgency_level: "high"
    },
    {
      patient_name: "Sarah Johnson",
      blood_group: "O-",
      hospital_name: "Regional Medical Center",
      hospital_address: "456 Health Avenue, Townsville",
      contact_number: "+1 555-987-6543",
      required_units: 3,
      urgency_level: "critical"
    }
  ];

  try {
    for (const request of sampleRequests) {
      const response = await fetch('http://localhost:5000/blood-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Failed to create request for ${request.patient_name}`);
      }

      const data = await response.json();
      console.log(`Created blood request for ${request.patient_name}:`, data);
    }
  } catch (error) {
    console.error('Error creating sample requests:', error);
    throw error;
  }
}; 