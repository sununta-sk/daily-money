import React, { useState } from 'react';
import { analyzeUserTimestamps, migrateUserTimestamps } from '../utils/firebase';

const TimestampMigration = ({ user }) => {
  const [analysis, setAnalysis] = useState(null);
  const [migrationResult, setMigrationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAnalysis = async () => {
    if (!user?.uid) {
      alert('No user logged in');
      return;
    }

    setLoading(true);
    try {
      console.log('🔍 Analyzing timestamps for user:', user.uid);
      const result = await analyzeUserTimestamps(user.uid);
      setAnalysis(result);
    } catch (error) {
      console.error('Analysis failed:', error);
      alert('Analysis failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const runMigration = async (dryRun = true) => {
    if (!user?.uid) {
      alert('No user logged in');
      return;
    }

    if (!analysis) {
      alert('Run analysis first');
      return;
    }

    setLoading(true);
    try {
      console.log(`🔄 ${dryRun ? 'Dry run' : 'Live migration'} for user:`, user.uid);
      const result = await migrateUserTimestamps(user.uid, dryRun);
      setMigrationResult(result);
    } catch (error) {
      console.error('Migration failed:', error);
      alert('Migration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
        <p>Please log in to analyze timestamps</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">🔧 Timestamp Migration Tool</h2>
      <p className="text-sm text-gray-600 mb-4">
        This tool analyzes and fixes timestamp field inconsistencies in your data.
      </p>

      <div className="space-y-4">
        {/* Analysis Section */}
        <div>
          <button
            onClick={runAnalysis}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : '🔍 Analyze Timestamps'}
          </button>
        </div>

        {analysis && (
          <div className="bg-white p-4 rounded border">
            <h3 className="font-semibold mb-2">📊 Analysis Results</h3>
            <div className="text-sm space-y-1">
              <p><strong>Total Documents:</strong> {analysis.totalDocuments}</p>
              <p><strong>Documents using 'timestamp':</strong> {analysis.fieldCounts.timestamp}</p>
              <p><strong>Documents using 'createdAt':</strong> {analysis.fieldCounts.createdAt}</p>
              <p><strong>Documents using 'date':</strong> {analysis.fieldCounts.date}</p>
              <p><strong>Documents using 'created':</strong> {analysis.fieldCounts.created}</p>
              <p><strong>Documents missing timestamps:</strong> {analysis.fieldCounts.missing}</p>
              <p><strong>Documents needing migration:</strong> {analysis.documentsToMigrate.length}</p>
            </div>

            {analysis.documentsToMigrate.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">📝 Documents to migrate:</h4>
                <div className="max-h-40 overflow-y-auto text-xs">
                  {analysis.documentsToMigrate.slice(0, 10).map((doc, index) => (
                    <div key={index} className="py-1 border-b border-gray-200">
                      <span className="font-medium">{doc.collection}</span>: {doc.name} 
                      <span className="text-gray-500"> - {doc.action}</span>
                      {doc.currentField && <span className="text-blue-600"> ({doc.currentField} → timestamp)</span>}
                    </div>
                  ))}
                  {analysis.documentsToMigrate.length > 10 && (
                    <div className="py-1 text-gray-500">
                      ... and {analysis.documentsToMigrate.length - 10} more
                    </div>
                  )}
                </div>
              </div>
            )}

            {analysis.problemDocuments.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2 text-yellow-700">⚠️ Problem Documents:</h4>
                <div className="max-h-32 overflow-y-auto text-xs">
                  {analysis.problemDocuments.slice(0, 5).map((doc, index) => (
                    <div key={index} className="py-1 border-b border-gray-200">
                      <span className="font-medium">{doc.collection}</span>: {doc.name} 
                      <span className="text-red-600"> - {doc.issue}</span>
                    </div>
                  ))}
                  {analysis.problemDocuments.length > 5 && (
                    <div className="py-1 text-gray-500">
                      ... and {analysis.problemDocuments.length - 5} more
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Migration Section */}
        {analysis && analysis.documentsToMigrate.length > 0 && (
          <div className="space-y-2">
            <button
              onClick={() => runMigration(true)}
              disabled={loading}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50 mr-2"
            >
              {loading ? 'Running...' : '🧪 Dry Run Migration'}
            </button>
            
            <button
              onClick={() => runMigration(false)}
              disabled={loading}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
            >
              {loading ? 'Running...' : '🚀 Execute Migration'}
            </button>
            
            <p className="text-xs text-gray-600">
              Dry run shows what would happen. Execute migration makes actual changes.
            </p>
          </div>
        )}

        {migrationResult && (
          <div className="bg-white p-4 rounded border">
            <h3 className="font-semibold mb-2">
              {migrationResult.dryRun ? '🧪 Dry Run Results' : '🚀 Migration Results'}
            </h3>
            <div className="text-sm space-y-1">
              <p><strong>Status:</strong> {migrationResult.success ? '✅ Success' : '❌ Failed'}</p>
              <p><strong>Total Documents:</strong> {migrationResult.totalDocuments}</p>
              <p><strong>Migrated:</strong> {migrationResult.migrated}</p>
              <p><strong>Message:</strong> {migrationResult.message}</p>
              
              {migrationResult.errors.length > 0 && (
                <div className="mt-2">
                  <p className="text-red-600"><strong>Errors:</strong></p>
                  <div className="text-xs">
                    {migrationResult.errors.map((error, index) => (
                      <div key={index} className="py-1">
                        {error.doc.collection}/{error.doc.name}: {error.error}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
          <h4 className="font-medium text-blue-800">How to use:</h4>
          <ol className="text-sm text-blue-700 mt-1 ml-4 list-decimal">
            <li>Click "Analyze Timestamps" to scan your data</li>
            <li>Review the analysis results</li>
            <li>Run "Dry Run Migration" to see what would change</li>
            <li>Run "Execute Migration" to apply the changes</li>
            <li>Remove this component after migration is complete</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TimestampMigration; 