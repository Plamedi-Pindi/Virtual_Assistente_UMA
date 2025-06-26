// Components
import botImage from "/bot.jpg";
import Header from "./layouts/components/Header";
import ReactMarkdown from "react-markdown";

// Hooks 
import { useChat } from "../contexts/ChatContext";
import {  useRef } from "react";

export default function Home() {
  const { chatMessages } = useChat();
  const reversedMessage = [...chatMessages].reverse();
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  console.log(chatMessages);


  return (
    <div className="  ">
      {/* Header */}
      <Header />

      {/* Main content start */}
      <div ref={messagesContainerRef} className="flex flex-col-reverse h-screen min-h-0 p-4 overflow-y-auto  text-sm pt-[5rem] pb-[7rem] m-auto sm:w-[90%] scrollbarHidden lg:w-[50rem] ">
        {reversedMessage.map((msg, index) => (
          msg.sender === 'user' ? (

            <div key={index} className="bg-black text-white mt-2 p-3 mb-2  rounded-se-xl rounded-s-xl max-w-[87%] lg:max-w-[70%] ml-auto   ">  {msg.message} </div>

          ) : msg.sender === 'bot' ? (

            <div key={index} className=" mt-2 mb-2 w-fit max-w-[88%] lg:max-w-[70%]  mr-auto flex">
              {/* Bot img */}
              <img src={botImage} className="w-[1.4rem] h-[1.4rem] object-cover rounded-full mr-2" />
              {/* Bot message */}
              <div className="bg-zinc-200  text-neutral-800 p-4  rounded-es-xl rounded-e-xl ">
                {msg.message &&
                  <ReactMarkdown
                    components={{
                      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                      ul: ({ children }) => <ul className="list-disc pl-5 text-sm">{children}</ul>,
                      p: ({ children }) => <p className="mb-2 mt-2">{children}</p>,
                      a: ({ children }) => <a className="text-blue-700">{children}</a>,
                      h1: ({ children }) => <h1 className="font-bold mb-2">{children}</h1>,
                      h2: ({ children }) => <h1 className="font-semibold mb-1 mt-2">{children}</h1>,
                    }}
                  >
                    {msg.message}
                  </ReactMarkdown>}
              </div>
            </div>

          ) : null
        ))}

        {/* <div ref={messagesEndRef} /> */}
      </div>
      {/* Main content end */}

      {/* Input */}
    </div>
  )
}
