interface TextfieldProp{
    kind: string;
    holder: string;
    name?: string;
    value?: string;
    onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Textfield({kind, holder, name, value, onchange }: TextfieldProp) {
  return (
    <>
      <div className="mt-10 mb-10">
        <input
          type={kind}
          placeholder={holder}
          name={name}
          value={value}
          onChange={onchange}
          className="border-b-2 w-full h-8 p-2"
        />
      </div>
    </>
  );
}
