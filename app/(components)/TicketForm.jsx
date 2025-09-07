"use client";

import { useRouter } from "next/navigation";
import react, { useState } from "react";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    status: "Not started",
    progress: 0,
    priority: 1,
    category: "Hardware",
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("Submitted successfully!");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2 p-4"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>Create your ticket:</h3>
        <label htmlFor="">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label htmlFor="Description">Description</label>
        <textarea
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={4}
        />
        <label htmlFor="Categoy">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Projects">Projects</option>
        </select>

        <label htmlFor="Priority">Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priorirty"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1} //dont care about the type pls
          />
          <label htmlFor="priority-1">1</label>
          <input
            type="radio"
            id="priority-1"
            name="priorirty"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1} //dont care about the type pls
          />
          <label htmlFor="priority-2">2</label>
          <input
            type="radio"
            id="priority-1"
            name="priorirty"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2} //dont care about the type pls
          />
          <label htmlFor="priority-3">3</label>
          <input
            type="radio"
            id="priority-3"
            name="priorirty"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3} //dont care about the type pls
          />
          <label htmlFor="priority-4">4</label>
          <input
            type="radio"
            id="priority-4"
            name="priorirty"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4} //dont care about the type pls
          />
          <label htmlFor="priority-5">5</label>
          <input
            type="radio"
            id="priority-5"
            name="priorirty"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5} //dont care about the type pls
          />
        </div>
        <label htmlFor="">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        />
        <label htmlFor="Status">Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" value="Create Ticket" className="btn" />
      </form>
    </div>
  );
};

export default TicketForm;
