import React, { useState, useEffect, useRef } from 'react';
import { Play, Database, RefreshCw, Trash2, Cpu } from 'lucide-react';

const PIPELINES = {
  docker: [
    { type: 'command', text: 'docker build -t net-core-api:latest .' },
    { type: 'output', text: 'Sending build context to Docker daemon  2.45MB' },
    { type: 'output', text: 'Step 1/7 : FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build' },
    { type: 'output', text: ' ---> 4a2d7f8812c3' },
    { type: 'output', text: 'Step 2/7 : WORKDIR /src' },
    { type: 'output', text: 'Step 3/7 : COPY ["EmployeeAPI.csproj", "./"]' },
    { type: 'output', text: 'Step 4/7 : RUN dotnet restore' },
    { type: 'output', text: '  Restore completed in 4.25 sec' },
    { type: 'output', text: 'Step 5/7 : COPY . .' },
    { type: 'output', text: 'Step 6/7 : RUN dotnet publish -c Release -o /app' },
    { type: 'output', text: '  EmployeeAPI -> /app/EmployeeAPI.dll' },
    { type: 'output', text: 'Step 7/7 : FROM mcr.microsoft.com/dotnet/aspnet:8.0' },
    { type: 'output', text: 'Successfully built 9d8c7010f3c5' },
    { type: 'output', text: 'Successfully tagged net-core-api:latest' },
    { type: 'success', text: '🐳 Container build complete! Image: net-core-api:latest (184MB)' }
  ],
  db: [
    { type: 'command', text: 'dotnet ef database update' },
    { type: 'output', text: 'Build started...' },
    { type: 'output', text: 'Build succeeded.' },
    { type: 'output', text: 'Applying migration: 20260619_AddSalaryFields...' },
    { type: 'output', text: 'ConnectionString: Server=mssql_db;Database=EmpDB;User Id=sa;' },
    { type: 'output', text: 'Executing: ALTER TABLE Employees ADD CurrentSalary DECIMAL(18,2)...' },
    { type: 'output', text: 'Executing: CREATE INDEX IX_Employees_DepartmentId ON Employees(DeptId)...' },
    { type: 'success', text: '🛢️ Entity Framework Core: Migration successfully applied to MS SQL Server!' }
  ],
  git: [
    { type: 'command', text: 'git commit -m "feat: setup dockerfile" && git push origin main' },
    { type: 'output', text: '[main d7c2f0a] feat: setup dockerfile' },
    { type: 'output', text: ' 2 files changed, 24 insertions(+)' },
    { type: 'output', text: 'Enumerating objects: 5, done.' },
    { type: 'output', text: 'Writing objects: 100% (3/3), 642 bytes | 642.00 KiB/s, done.' },
    { type: 'output', text: 'To github.com/ramuchallapalli/portfolio.git' },
    { type: 'output', text: '   b8a1c9e..d7c2f0a  main -> main' },
    { type: 'output', text: 'GitHub Actions: Run ID 992817293 triggered.' },
    { type: 'output', text: 'Pipeline: Build (Success) -> Code Quality (Success) -> Deploy (Staging: Success)' },
    { type: 'success', text: '⚡ CI/CD Pipeline completed: Deploy to Azure Staging successful!' }
  ]
};

export function DevOpsTerminal() {
  const [history, setHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activePipeline, setActivePipeline] = useState(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    runPipeline('docker');
  }, []);

  const runPipeline = async (type) => {
    if (isTyping) return;
    setIsTyping(true);
    setActivePipeline(type);
    
    setHistory([]);
    const lines = PIPELINES[type];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.type === 'command') {
        let typedText = '';
        for (let charIndex = 0; charIndex < line.text.length; charIndex++) {
          typedText += line.text[charIndex];
          setHistory([
            ...lines.slice(0, 0),
            { type: 'command', text: typedText }
          ]);
          await new Promise(resolve => setTimeout(resolve, 25 + Math.random() * 25));
        }
      } else {
        const delay = line.type === 'success' ? 700 : 150 + Math.random() * 200;
        await new Promise(resolve => setTimeout(resolve, delay));
        setHistory(prev => [...prev, line]);
      }
    }
    
    setIsTyping(false);
    setActivePipeline(null);
  };

  const clearTerminal = () => {
    if (isTyping) return;
    setHistory([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-card border border-slate-200/50 dark:border-white/5 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
      <div className="bg-slate-200/60 dark:bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-slate-300/40 dark:border-slate-800/50 select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer" />
          <span className="text-slate-600 dark:text-slate-400 text-xs ml-2 flex items-center gap-1.5">
            <Cpu size={12} className="text-neon-cyan dark:text-cyan-400" /> devops-pipeline.sh
          </span>
        </div>
        <div className="text-[10px] text-slate-500 dark:text-slate-500 select-none">
          bash 5.2
        </div>
      </div>

      <div className="bg-slate-100/90 dark:bg-slate-950/90 p-5 h-72 overflow-y-auto custom-scrollbar flex flex-col space-y-2 select-text">
        <div className="text-slate-500 dark:text-slate-400 text-xs mb-1">
          Last login: {new Date().toLocaleDateString()} on ttys001
        </div>
        
        {history.map((line, index) => {
          if (line.type === 'command') {
            return (
              <div key={index} className="flex items-start text-slate-800 dark:text-slate-200">
                <span className="text-neon-purple dark:text-purple-400 mr-2 select-none">raghava@port:~$</span>
                <span>{line.text}</span>
              </div>
            );
          } else if (line.type === 'success') {
            return (
              <div key={index} className="text-emerald-600 dark:text-emerald-400 font-semibold py-1">
                {line.text}
              </div>
            );
          } else {
            return (
              <div key={index} className="text-slate-600 dark:text-slate-400 pl-4">
                {line.text}
              </div>
            );
          }
        })}

        {isTyping && activePipeline && (
          <div className="w-2 h-4 bg-slate-700 dark:bg-cyan-400 animate-pulse ml-0.5 inline-block" />
        )}

        {!isTyping && history.length === 0 && (
          <div className="flex items-center text-slate-800 dark:text-slate-200">
            <span className="text-neon-purple dark:text-purple-400 mr-2 select-none">raghava@port:~$</span>
            <span className="w-2 h-4 bg-slate-700 dark:bg-cyan-400 animate-pulse" />
          </div>
        )}

        <div ref={terminalEndRef} />
      </div>

      <div className="bg-slate-200/40 dark:bg-slate-900/40 px-4 py-3 flex flex-wrap gap-2 border-t border-slate-300/40 dark:border-slate-800/50 justify-center sm:justify-start">
        <button
          onClick={() => runPipeline('docker')}
          disabled={isTyping}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activePipeline === 'docker'
              ? 'bg-cyan-500/20 text-cyan-500 border border-cyan-500/30'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-300/40 dark:hover:bg-slate-800/50 border border-transparent'
          } disabled:opacity-50`}
        >
          <Play size={12} />
          Docker Build
        </button>
        <button
          onClick={() => runPipeline('db')}
          disabled={isTyping}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activePipeline === 'db'
              ? 'bg-purple-500/20 text-purple-500 border border-purple-500/30'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-300/40 dark:hover:bg-slate-800/50 border border-transparent'
          } disabled:opacity-50`}
        >
          <Database size={12} />
          EF Migration
        </button>
        <button
          onClick={() => runPipeline('git')}
          disabled={isTyping}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activePipeline === 'git'
              ? 'bg-pink-500/20 text-pink-500 border border-pink-500/30'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-300/40 dark:hover:bg-slate-800/50 border border-transparent'
          } disabled:opacity-50`}
        >
          <RefreshCw size={12} />
          Git Deploy
        </button>
        <button
          onClick={clearTerminal}
          disabled={isTyping || history.length === 0}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-500 dark:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/20 border border-transparent ml-auto transition-all disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
        >
          <Trash2 size={12} />
          Clear
        </button>
      </div>
    </div>
  );
}
