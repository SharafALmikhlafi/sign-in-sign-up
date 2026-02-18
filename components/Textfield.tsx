interface TextfieldProp{
    kind: string;
    holder: string;
}

export default function Textfield({kind, holder }: TextfieldProp) {
  return (
    <>
      <div className="mt-10 mb-10">
        <input
          type={kind}
          placeholder={holder}
          className="border-b-2 w-full h-8"
        />
      </div>
    </>
  );
}
