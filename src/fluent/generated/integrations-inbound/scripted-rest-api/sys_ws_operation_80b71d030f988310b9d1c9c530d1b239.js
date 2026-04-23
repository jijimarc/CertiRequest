(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    // 1. Grab the image sent from your React frontend
    var requestBody = request.body.data;
    var base64Image = requestBody.image;

    // Paste your NEW Google Gemini API Key right here
    var GEMINI_API_KEY = "AIzaSyAJkBq19Ph8Lxlr9dkc-ebXGKAyDRvftac";

    if (!base64Image) {
        response.setStatus(400);
        response.setBody({ error: "No image provided." });
        return;
    }

    try {
        // 2. Setup the "Telephone" to call Google Gemini
        var restMessage = new sn_ws.RESTMessageV2();
        restMessage.setEndpoint("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + GEMINI_API_KEY);
        restMessage.setHttpMethod("POST");
        restMessage.setRequestHeader("Content-Type", "application/json");

        // 3. Write the prompt and attach the image
        var payload = {
            "contents": [{
                "parts": [
                    {
                        "text": "Extract the student's Name, ID Number, and Department from this ID card. Return ONLY a valid JSON object with the exact keys: name, studentId, department. Do not include markdown blocks or any other text."
                    },
                    {
                        "inline_data": {
                            "mime_type": "image/jpeg",
                            "data": base64Image
                        }
                    }
                ]
            }]
        };

        restMessage.setRequestBody(JSON.stringify(payload));

        // 4. Send the message and wait for the response
        var res = restMessage.execute();
        var responseBody = res.getBody();
        var httpStatus = res.getStatusCode();

        if (httpStatus === 200) {
            // 5. Parse the weird Google formatting to get to your data
            var googleResponse = JSON.parse(responseBody);
            var rawText = googleResponse.candidates[0].content.parts[0].text;
            
            // Clean up the response just in case Gemini includes markdown tags
            var cleanText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
            var extractedData = JSON.parse(cleanText);

            // Send it back to the React UI!
            response.setStatus(200);
            response.setBody(extractedData);
        } else {
            // If Google gets mad, log it and tell React
            gs.error("Gemini API Error: " + responseBody);
            response.setStatus(httpStatus);
            response.setBody({ error: "Failed to connect to AI engine." });
        }

    } catch (error) {
        gs.error("Extraction Script Error: " + error.message);
        response.setStatus(500);
        response.setBody({ error: "Server processing failed." });
    }

})(request, response);