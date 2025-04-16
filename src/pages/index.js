import React, { useState } from "react";
import ClickHouseForm from "../components/ClickHouseForm";
import FlatFileForm from "../components/FlatFileForm";

const HomePage = () => {
  const [selectedSource, setSelectedSource] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">📡 Data Ingestion Tool</h1>
        <p className="text-gray-300">Select a data source to proceed:</p>
      </div>
      <div className="space-x-4">
        <button
          onClick={() => setSelectedSource("clickhouse")}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          ClickHouse
        </button>
        <button
          onClick={() => setSelectedSource("flatfile")}
          className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
        >
          Flat File
        </button>
      </div>

      {selectedSource === "clickhouse" && <ClickHouseForm />}
      {selectedSource === "flatfile" && <FlatFileForm />}
    </div>
  );
};

export default HomePage;
