import React from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import "../styling/ChatBot.css";

const PARAMS = {
  max_tokens: 256,
  temperature: 1,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

const config = new Configuration({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
});
console.log(process.env.REACT_APP_OPEN_AI_KEY)

const openai = new OpenAIApi(config);

function ChatBot() {
  const [cbResponse, setCbResponse] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSendData(event) {
    event.preventDefault();
    setIsLoading(true);

    const prompt = getInstructions(userInput);

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        ...PARAMS,
      });

      const data = response.data;
      console.log(data);

      // Extract the chatbot's response from the data and update the state
      const chatbotResponse = data.choices[0].message.content;
      setCbResponse(chatbotResponse);
    } catch (error) {
      console.error("Error communicating with OpenAI API:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function getInstructions(input) {
    return `translate this text to specified language: ${input}`;
  }

  return (
    <div className='body'>

   
    <div className="container">
      <h1>ChatBot</h1>

      <h4 style={{font_weight: 'normal'}}>
        Our ChatBot is designed to help you learn on the go! Designed with AI
        technology, it accurately helps you translate to your heart's desire.
        Whether you're looking for a word you've forgotten, or translating a
        whole paragraph, our ChatBot is here to help!
        <br></br>
        <br></br>
         — Simply enter your message and specify what language you'd like!
      </h4>
      <br></br>
      <br></br>
      

      <div class="input__container input__container--variant">
        <div class="shadow__input shadow__input--variant"></div>
        <input
          type="text"
          name="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          class="input__search input__search--variant"
          placeholder="Search..."
        />
        <button
          onClick={handleSendData}
          class="input__button__shadow input__button__shadow--variant"
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            height="1.5em"
            width="13em"
          >
            <path
              d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
              fill-rule="evenodd"
              fill="#FFF"
            ></path>
          </svg>
        </button>
      </div>
      

      {isLoading && (
            <div class="loader">
            <span class="loader-text">loading</span>
            <span class="load"></span>
            </div>
      )}

      {cbResponse && (
        <div className="chatbot-response">
          <h2>Chatbot Response:</h2>
          <p>{cbResponse}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default ChatBot;
