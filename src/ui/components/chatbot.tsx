import { useState, useCallback } from "react";
import { BsChatRightText } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

interface Message {
  sender: "user" | "bot";
  text: string;
  products?: Product[];
}

interface Product {
  name: string;
  description: string;
  price: string;
  notes: string[];
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! Looking for the perfect fragrance? Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false); // New state

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setIsBotTyping(true); // Show typing indicator

    try {
      const response = await fetch(
        "http://localhost:5100/api/chatbot/recommend",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();
      const botMessage: Message = {
        sender: "bot",
        text: "Here are some recommended fragrances:",
        products: data.reply || [],
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Something went wrong. Please try again later.",
        },
      ]);
    }

    setInput("");
    setIsLoading(false);
    setIsBotTyping(false); // Hide typing indicator
  }, [input, isLoading]);

  return (
    <div>
      {/* AI Button */}
      <button
        className="fixed bottom-10 right-10 bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white p-4 border-[0.25rem] border-white rounded-full shadow-lg transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsChatRightText className="text-xl" />
      </button>

      {/* Chatbot UI */}
      {/* Chatbot UI */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-5 bg-white p-5 shadow-2xl rounded-lg 
    w-[90%] sm:w-[70%] sm:bottom-2 sm:right-[6.5rem] sm:z-50 md:w-[60%] md:bottom-20 md:right-[1.25rem] lg:w-[50%] xl:w-[30%] xl:bottom-20 xl:right-20
    max-h-[80vh] border border-gray-300"
        >
          <div className="flex justify-between items-center mb-3">
            <h2 className="xl:text-[1.05rem] xs:text-sm  font-semibold text-gray-800">
              Fragrance Recommendations
            </h2>
            <RxCross1
              size={18}
              className="cursor-pointer transition-transform duration-300 hover:rotate-180 text-gray-600"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="h-80 overflow-y-auto bg-[var(--theme-light)] rounded-md xl:p-2 xs:p-0">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`py-1 px-3 my-2 rounded-md w-fit max-w-xs ${
                  msg.sender === "user"
                    ? "bg-[var(--theme-brown)] text-white ml-auto text-sm"
                    : "text-left text-gray-700 bg-gray-200 mr-auto xl:text-sm xs:text-xs"
                }`}
              >
                <p className="p-2 xs:p-1 rounded xs:text-xs xl:text-sm">
                  {msg.text}
                </p>
                {msg.products && (
                  <div className="mt-0">
                    {msg.products.map((product, i) => (
                      <div key={i} className="rounded-lg p-2 xs:p-1 mb-0">
                        <p className="block text-sm xs:text-xs xl:text-sm text-gray-700 font-semibold">
                          Product Name: {product.name}
                        </p>
                        <p className="text-gray-600">
                          Description: {product.description}
                        </p>
                        <p className="text-gray-600">Price: {product.price}</p>
                        <p className="text-gray-600 text-sm xs:text-xs xl:text-sm">
                          Notes: {product.notes.join(", ")}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Show typing indicator when bot is typing */}
            {isBotTyping && (
              <div className="flex items-center text-gray-600 bg-gray-200 w-fit max-w-xs px-3 py-1 rounded-md mr-auto text-sm">
                <PiDotsThreeOutlineLight size={24} className="animate-pulse" />
              </div>
            )}
          </div>

          <div className="mt-2 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isLoading) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              className="border-[1.55px] border-gray-300 p-2 pr-16 w-full rounded-lg focus:outline-none placeholder:xl:text-sm placeholder:xs:text-xs placeholder:text-gray-400 text-gray-500"
              placeholder="Searching for a fragrance? Ask away"
            />
            <button
              onClick={sendMessage}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white px-3 py-[0.4rem] rounded xl:text-sm disabled:opacity-50 xs:text-xs"
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
