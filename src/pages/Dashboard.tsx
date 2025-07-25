import { useState } from "react";
import { PenTool, Mic, Calculator } from "lucide-react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ChatWindow from "../components/ChatWindow";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("writing");

  const tabs = [
    { id: "writing", label: "Writing", icon: PenTool },
    { id: "speaking", label: "Speaking", icon: Mic },
    { id: "math", label: "Math", icon: Calculator },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showAuth={false} />
      
      <div className="flex-1 flex flex-col">
        {/* Desktop/Tablet Tabs */}
        <div className="hidden md:block border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-7xl mx-auto w-full">
          <div className="h-full pb-16 md:pb-0">
            <ChatWindow subject={activeTab} />
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Dashboard;