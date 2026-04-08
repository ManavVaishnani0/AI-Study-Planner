import { useState } from "react";

function TaskForm({ addTask }) {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");
  const [deadline, setDeadline] = useState("");

  const [topics, setTopics] = useState([
    { name: "", difficulty: "easy" }
  ]);

  // Handle topic changes
  const handleTopicChange = (index, field, value) => {
    const updated = [...topics];
    updated[index][field] = value;
    setTopics(updated);
  };

  // Add new topic
  const addTopic = () => {
    setTopics([...topics, { name: "", difficulty: "easy" }]);
  };

  // Submit form
  const handleSubmit = () => {
    if (!subject || !deadline || !hours) return;

    // Remove empty topics
    const validTopics = topics.filter(
      (t) => t.name.trim() !== ""
    );

    addTask(subject, hours, validTopics, deadline);

    // Reset fields
    setSubject("");
    setHours("");
    setDeadline("");
    setTopics([{ name: "", difficulty: "easy" }]);
  };

  return (
    <div>
      {/* Subject */}
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      {/* Hours */}
      <input
        type="number"
        placeholder="Total Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      {/* Deadline */}
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <h3>Topics</h3>

      {/* Topics list */}
      {topics.map((topic, index) => (
        <div
          key={index}
          style={{ display: "flex", gap: "10px", marginBottom: "5px" }}
        >
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

      {/* Buttons */}
      <button onClick={addTopic}>+ Add Topic</button>
      <button onClick={handleSubmit}>Add Subject</button>
    </div>
  );
}

export default TaskForm;