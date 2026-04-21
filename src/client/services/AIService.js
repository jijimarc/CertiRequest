export const AIService = {
    /**
     * Takes an image file, converts it to Base64, and sends it to the AI endpoint.
     * @param {File} file - The image file uploaded by the student.
     * @returns {Promise<Object>} - The extracted student data.
     */
    extractFromID: async (file) => {
      return new Promise((resolve, reject) => {
        // 1. We need to convert the image into a string (Base64) so it can be sent via JSON
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onload = async () => {
          // Strip out the data URL prefix to get just the raw base64 string
          const base64Image = reader.result.split(',')[1];
          
          try {
            // 2. Send it to your ServiceNow Server Endpoint
            const response = await fetch('/api/x_2001423_certireq/ai/extract', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-UserToken': window.g_ck || '' // ServiceNow security token
              },
              body: JSON.stringify({ image: base64Image })
            });
  
            if (!response.ok) {
              throw new Error('AI processing failed on the server.');
            }
            
            const data = await response.json();
            // 3. Return the extracted data to NewRequest.jsx
            resolve(data.result); 
          } catch (err) {
            console.error("AIService Error:", err);
            reject(err);
          }
        };
        
        reader.onerror = (error) => {
          reject(error);
        };
      });
    }
  };