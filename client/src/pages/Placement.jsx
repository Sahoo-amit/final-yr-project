import React, { useState, useEffect } from "react";

const languageMapping = {
  1: "HTML",
  2: "CSS",
  3: "JavaScript",
  4: "Python",
  5: "C",
  6: "React JS",
  7: "Next JS",
  8: "MongoDB",
  9: "SQL",
  10: "Java",
  11: "C++",
  12: "Node.js",
  13: "Express",
};

function App() {
  const [questionsData, setQuestionData] = useState([]);
  const [selectedLanguageId, setSelectedLanguageId] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getQuestions = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `http://localhost:4000/api/question/${selectedLanguageId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch questions.");
      }
      const data = await response.json();
      setQuestionData(data);
    } catch (error) {
      setError(error.message);
      setQuestionData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, [selectedLanguageId]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Placement Questions and Answers
      </h1>

      <div className="flex justify-center mb-6 items-center">
        <label
          htmlFor="language-select"
          className="text-lg font-medium text-gray-700 mr-4"
        >
          Select Language:
        </label>
        <select
          id="language-select"
          onChange={(e) => setSelectedLanguageId(e.target.value)}
          value={selectedLanguageId}
          className="p-2 border border-gray-300 rounded-lg text-black"
        >
          {Object.entries(languageMapping).map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {loading ? (
          <div className="text-center text-purple-500 font-medium">
            Loading questions...
          </div>
        ) : error ? (
          <div className="text-center text-red-500 font-medium">{error}</div>
        ) : questionsData.length === 0 ? (
          <div className="text-center text-gray-500 font-medium">
            No questions found for the selected language.
          </div>
        ) : (
          <div className="space-y-4">
            {questionsData.map((item, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-purple-600">
                  {item.question}
                </h3>
                <p className="text-gray-700 mt-2">{item.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
