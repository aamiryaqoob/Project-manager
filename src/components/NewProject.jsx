import { useRef } from "react";
import Input from "./Input";
import Model from "./Model";

export default function NewProject({ onAdd, onCancel }) {
  const model = useRef();

  const title = useRef();
  const des = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDes = des.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredDes.trim() === "" ||
      enteredTitle.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      model.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      des: enteredDes,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Model ref={model} btnCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 mb-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          OOPS... looks like you enter wrong value.
        </p>
        <p className="text-stone-600 mb-4">Please Enter a valid value.</p>
      </Model>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-600"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label="Title" />
          <Input ref={des} label="Description" textarea />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}
