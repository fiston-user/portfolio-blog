"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or newsletter service
    console.log("Submitted email:", email);
    // Reset the email input
    setEmail("");
  };

  return (
    <div className="my-8 p-6 bg-neutral-100 dark:bg-black border border-neutral-300 dark:border-neutral-700 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Subscribe to my newsletter</h3>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        Get the best tips and tricks for building a clean and modern website.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md hover:bg-gray-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
