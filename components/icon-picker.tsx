"use client"

import * as Icons from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import { Search } from "lucide-react"

// List of commonly used icons for services
const AVAILABLE_ICONS = [
  "Server",
  "Cloud",
  "Sparkles",
  "Palette",
  "Code",
  "Zap",
  "Shield",
  "Smartphone",
  "Globe",
  "Database",
  "Settings",
  "Users",
  "MessageSquare",
  "TrendingUp",
  "Cpu",
  "Wifi",
  "Lock",
  "Layers",
  "Tool",
  "Package",
  "CheckCircle",
  "AlertCircle",
  "HelpCircle",
  "Info",
  "BookOpen",
  "Briefcase",
  "DollarSign",
  "Gift",
  "Heart",
  "Star",
  "Award",
  "Target",
  "Compass",
  "Map",
  "Navigation",
]

interface IconPickerProps {
  value: string
  onChange: (iconName: string) => void
}

export function IconPicker({ value, onChange }: IconPickerProps) {
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)

  const filteredIcons = AVAILABLE_ICONS.filter((icon) =>
    icon.toLowerCase().includes(search.toLowerCase()),
  )

  const getIcon = (iconName: string) => {
    return (Icons as any)[iconName] || Icons.Zap
  }

  const SelectedIcon = getIcon(value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-left font-normal">
          <div className="flex items-center gap-2">
            {value && <SelectedIcon className="w-4 h-4" />}
            <span>{value || "Select an icon..."}</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="start">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="grid grid-cols-6 gap-2 max-h-64 overflow-y-auto">
            {filteredIcons.map((iconName) => {
              const IconComponent = getIcon(iconName)
              return (
                <button
                  key={iconName}
                  type="button"
                  onClick={() => {
                    onChange(iconName)
                    setOpen(false)
                    setSearch("")
                  }}
                  className={`p-2 rounded-md hover:bg-accent transition-colors flex items-center justify-center ${
                    value === iconName ? "bg-primary/10 border border-primary" : ""
                  }`}
                  title={iconName}
                >
                  <IconComponent className="w-5 h-5" />
                </button>
              )
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
