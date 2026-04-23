(function process(request, response) {
    var body = request.body.data;
    var prompt = body.prompt;
    
    if (!prompt) return { error: "No prompt provided" };
    var apiKey = gs.getProperty('x_2001423_certireq.gemini_api_key');
    
    try {
        var sm = new sn_ws.RESTMessageV2();
        sm.setHttpMethod('POST');
        // Trying 1.5 Flash again - it is the most reliable "Free" model
        sm.setEndpoint('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + apiKey);
        sm.setRequestHeader('Content-Type', 'application/json');
        
        var payload = {
            "contents": [{
                "parts": [{
                    "text": "You are a helpful assistant for CertiRequest. Answer this: " + prompt
                }]
            }]
        };
        
        sm.setRequestBody(JSON.stringify(payload));
        
        var restResponse = sm.execute();
        var responseBody = restResponse.getBody();
        var result = JSON.parse(responseBody);
        
        if (result.error) {
            // If 1.5 Flash fails, let's try 2.0 Flash as a fallback
            return { answer: "Google is still setting up your free quota. Error: " + result.error.message };
        }
        
        if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts) {
            return { answer: result.candidates[0].content.parts[0].text };
        }
        return { answer: "I'm ready! How else can I help?" };
    } catch (ex) {
        return { answer: "System Error: " + ex.message };
    }
})(request, response);