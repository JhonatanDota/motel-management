import CurrencyInput from "react-currency-input-field";

type FormCurrencyProps = {
  label: string;
  setValue: (value: number) => void;
};

type CurrencyInputOnChangeValues = {
  float: number | null;
  formatted: string;
  value: string;
};

export default function FormCurrency(props: FormCurrencyProps) {
  const { label, setValue } = props;

  function handleValueChange(values: CurrencyInputOnChangeValues): void {
    const rawValue: number | null = values.float;
    rawValue ? setValue(rawValue) : setValue(0);
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold">{label}</label>
      <CurrencyInput
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
        className="rounded-md bg-gray-200 text-black p-4 outline-none"
        defaultValue={0}
        onValueChange={(_, __, values) =>
          values != undefined ? handleValueChange(values) : null
        }
      />
    </div>
  );
}
