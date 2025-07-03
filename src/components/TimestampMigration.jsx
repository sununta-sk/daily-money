import React from 'react';

const TimestampMigration = ({ user }) => {
  if (!user) return null;
  return (
    <div className="my-2 p-3 rounded-xl bg-yellow-100 text-yellow-800 text-center text-sm shadow">
      Timestamp migration tool (dev only)
    </div>
  );
};

export default TimestampMigration; 