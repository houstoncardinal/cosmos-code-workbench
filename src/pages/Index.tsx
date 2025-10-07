import { useEffect } from 'react';
import { useIdeStore } from '@/store/ideStore';
import { ActivityBar } from '@/components/ide/ActivityBar';
import { FileExplorer } from '@/components/ide/FileExplorer';
import { EditorArea } from '@/components/ide/EditorArea';
import { EnhancedAiPanel } from '@/components/ide/EnhancedAiPanel';
import { GitPanel } from '@/components/ide/GitPanel';
import { TerminalPanel } from '@/components/ide/TerminalPanel';
import { CommandPalette } from '@/components/ide/CommandPalette';
import { DeviceSimulator } from '@/components/ide/DeviceSimulator';
import { CodeGenerator } from '@/components/ide/CodeGenerator';

const Index = () => {
  const { 
    theme, 
    fileExplorerOpen, 
    gitPanelOpen, 
    aiPanelOpen, 
    terminalOpen,
    simulatorOpen,
    codeGeneratorOpen,
    toggleSimulator,
    toggleCodeGenerator
  } = useIdeStore();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove('theme-pearl', 'theme-titanium');
    if (theme === 'pearl') {
      document.documentElement.classList.add('theme-pearl');
    } else if (theme === 'titanium') {
      document.documentElement.classList.add('theme-titanium');
    }
  }, [theme]);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <ActivityBar />
      
      {simulatorOpen && <DeviceSimulator onClose={toggleSimulator} />}

      <div className="flex flex-1 overflow-hidden">
        {fileExplorerOpen && <FileExplorer />}
        {gitPanelOpen && <GitPanel />}
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {codeGeneratorOpen ? <CodeGenerator /> : <EditorArea />}
          {terminalOpen && <TerminalPanel />}
        </div>
        
        {aiPanelOpen && <EnhancedAiPanel />}
      </div>

      <CommandPalette />
    </div>
  );
};

export default Index;
