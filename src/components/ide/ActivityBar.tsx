import { Files, GitBranch, Terminal, Sparkles, Palette, Command, Monitor, Code2 } from 'lucide-react';
import { useIdeStore } from '@/store/ideStore';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export const ActivityBar = () => {
  const { 
    fileExplorerOpen, 
    gitPanelOpen, 
    terminalOpen, 
    aiPanelOpen,
    simulatorOpen,
    codeGeneratorOpen,
    toggleFileExplorer,
    toggleGitPanel,
    toggleTerminal,
    toggleAiPanel,
    toggleCommandPalette,
    toggleSimulator,
    toggleCodeGenerator
  } = useIdeStore();

  return (
    <div className="hidden md:flex w-12 metal-panel border-r flex-col items-center py-4 gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`w-10 h-10 smooth-transition ${
              fileExplorerOpen ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={toggleFileExplorer}
          >
            <Files className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Files</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`w-10 h-10 smooth-transition ${
              gitPanelOpen ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={toggleGitPanel}
          >
            <GitBranch className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Git</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`w-10 h-10 smooth-transition metal-shine ${
              aiPanelOpen ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={toggleAiPanel}
          >
            <Sparkles className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">AI Copilot</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`w-10 h-10 smooth-transition metal-shine ${
              codeGeneratorOpen ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={toggleCodeGenerator}
          >
            <Code2 className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Code Generator</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`w-10 h-10 smooth-transition metal-shine ${
              simulatorOpen ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={toggleSimulator}
          >
            <Monitor className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Device Simulator</TooltipContent>
      </Tooltip>

      <div className="flex-1" />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 text-muted-foreground hover:text-foreground smooth-transition"
            onClick={toggleCommandPalette}
          >
            <Command className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Command Palette (⌘K)</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`w-10 h-10 smooth-transition ${
              terminalOpen ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={toggleTerminal}
          >
            <Terminal className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Terminal</TooltipContent>
      </Tooltip>

      <ThemeSelector />
    </div>
  );
};

const ThemeSelector = () => {
  const { theme, setTheme } = useIdeStore();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 text-muted-foreground hover:text-foreground smooth-transition"
          onClick={() => {
            const themes: ('obsidian' | 'pearl' | 'titanium')[] = ['obsidian', 'pearl', 'titanium'];
            const currentIndex = themes.indexOf(theme);
            const nextTheme = themes[(currentIndex + 1) % themes.length];
            setTheme(nextTheme);
          }}
        >
          <Palette className="w-5 h-5" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">Switch Theme</TooltipContent>
    </Tooltip>
  );
};
