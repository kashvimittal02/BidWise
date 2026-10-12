
import { useEffect, useState } from "react";

const Notifications = () => {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    // No real-time notification connection is used.
    // Notifications remain stored in the database.
  }, []);

  if (!msg) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <div className="bg-white p-5 rounded-2xl shadow-xl border-l-4 border-indigo-600 w-80">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-indigo-600">
            Notification
          </h4>
          <button
            onClick={() => setMsg(null)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-gray-600">{msg.message}</p>
      </div>
    </div>
  );
};

export default Notifications;
