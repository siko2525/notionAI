import TextAreaAutoSize from "react-textarea-autosize";
import { useState } from "react";
import { Note } from "@/modules/notes/note.model";

interface TitleInputProps {
  initialData: Note;
  onTitleChange: (val: string) => void;
}

export function TitleInput({ initialData, onTitleChange }: TitleInputProps) {
  const [value, setValue] = useState(initialData.title ?? "Untitled");

  const handleInputChange = (value: string) => {
    setValue(value);
    onTitleChange(value);
  };
  return (
    <div className="pl-[54px] group relative">
      <TextAreaAutoSize
        className="text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F 
        resize-none"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
}
