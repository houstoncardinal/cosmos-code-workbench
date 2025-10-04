import { useEffect } from 'react';
import { useIdeStore } from '@/store/ideStore';
import { ActivityBar } from '@/components/ide/ActivityBar';
import { FileExplorer } from '@/components/ide/FileExplorer';
import { EditorArea } from '@/components/ide/EditorArea';
import { AiPanel } from '@/components/ide/AiPanel';
import { GitPanel } from '@/components/ide/GitPanel';
import { TerminalPanel } from '@/components/ide/TerminalPanel';
import { CommandPalette } from '@/components/ide/CommandPalette';

const Index = () => {
  const { 
    theme, 
    fileExplorerOpen, 
    gitPanelOpen, 
    aiPanelOpen, 
    terminalOpen 
  } = useIdeStore();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove('theme-solar', 'theme-aurora');
    if (theme === 'solar-dawn') {
      document.documentElement.classList.add('theme-solar');
    } else if (theme === 'aurora-mint') {
      document.documentElement.classList.add('theme-aurora');
    }
  }, [theme]);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <ActivityBar />
      
      <div className="flex flex-1 overflow-hidden">
        {fileExplorerOpen && <FileExplorer />}
        {gitPanelOpen && <GitPanel />}
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <EditorArea />
          {terminalOpen && <TerminalPanel />}
        </div>
        
        {aiPanelOpen && <AiPanel />}
      </div>

      <CommandPalette />
    </div>
  );
};

export default Index;
