import React, { useState, useRef, useEffect } from 'react';
import './aichatbot.css';

const AIChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { role: 'ai', content: 'Hi! I\'m your CertiRequest Assistant. How can I help you today?' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        try {
            // This calls your ServiceNow Scripted REST API
            const response = await fetch('/api/x_2001423_certireq/ai/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-UserToken': window.g_ck || ''
                },
                body: JSON.stringify({ prompt: input })
            });

            if (!response.ok) throw new Error('AI Bridge Error');

            const result = await response.json();
            const aiResponse = result.result.answer || 'I encountered an error processing your request.';

            setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
        } catch (error) {
            console.error('AI Error:', error);
            setMessages(prev => [...prev, { 
                role: 'ai', 
                content: 'Sorry, I\'m having trouble connecting to my brain right now. Please make sure the ServiceNow AI Bridge is configured correctly.' 
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="ai-chatbot-container">
            {isOpen && (
                <div className="ai-chat-window">
                    <div className="ai-chat-header">
                        <div className="ai-avatar-small">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <div className="ai-header-info">
                            <h3>CertiBot</h3>
                            <span>Powered by Gemini AI</span>
                        </div>
                    </div>

                    <div className="ai-chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.role}`}>
                                {msg.content}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="typing-indicator">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="ai-chat-input-area">
                        <form className="ai-chat-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Ask about document requests..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={isTyping}
                            />
                            <button type="submit" className="ai-send-btn" disabled={isTyping || !input.trim()}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <button 
                className={`ai-chat-fab ${isOpen ? 'open' : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle AI Chat"
            >
                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>
        </div>
    );
};

export default AIChatBot;
