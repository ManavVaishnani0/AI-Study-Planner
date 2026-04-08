import { useState } from "react";

function TaskForm({ addTask }) {
  const [subject, setSubject] = useState("");
  const [deadline, setDeadline] = useState("");

  const [topics, setTopics] = useState([
    { name: "", difficulty: "easy" }
  ]);

  const handleTopicChange = (index, field, value) => {
    const updated = [...topics];
    updated[index][field] = value;
    setTopics(updated);
  };

  const addTopic = () => {
    setTopics([...topics, { name: "", difficulty: "easy" }]);
  };

  const handleSubmit = () => {
    if (!subject || !deadline) return;

    addTask(subject, topics, deadline);

    setSubject("");
    setDeadline("");
    setTopics([{ name: "", difficulty: "easy" }]);
  };

  return (
    <div>
      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <h3>Topics</h3>

      {topics.map((topic, index) => (
        <div key={index}>
          <input
            placeholder="Topic name"
            value={topic.name}
            onChange={(e) =>
              handleTopicChange(index, "name", e.target.value)
            }
          />

          <select
            value={topic.difficulty}
            onChange={(e) =>
              handleTopicChange(index, "difficulty", e.target.value)
            }
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      ))}

      <button onClick={addTopic}>+ Add Topic</button>

      <button onClick={handleSubmit}>Add Subject</button>
    </div>
  );
}

export default TaskForm;