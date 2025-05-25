import { atom, useAtom } from "jotai";
import { Note } from "./note.entity";

const noteAtom = atom<Note[]>([]);

export const useNoteStore = () => {
  const [notes, setNotes] = useAtom(noteAtom);

  const set = (newNotes: Note[]) => {
    setNotes((oldNotes) => {
      const combineNotes = [...oldNotes, ...newNotes];
      // [note1, note2, note3, note3, note4, note5]

      const uniqueNotes: { [key: number]: Note } = {};
      for (const note of combineNotes) {
        uniqueNotes[note.id] = note;
      }
      // {1: note1, 2: note2, 3: note3, 4: note4, 5: note5}
      return Object.values(uniqueNotes);
    });
  };
  const getOne = (id: number) => notes.find((note) => note.id == id);

  return {
    getAll: () => notes,
    getOne,
    set,
  };
};
