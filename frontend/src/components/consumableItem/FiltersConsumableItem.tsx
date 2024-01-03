import { useEffect, useState } from "react";
import { URLSearchParams } from "url";
import FilterContainer from "../filters/FilterContainer";
import FormTextInput from "../commom/FormTextInput";
import { getSearchParamByKey } from "../../functions/pagination";

type FiltersConsumableItemProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  params: object;
  setParams: (params: object) => void;
  searchParams: URLSearchParams;
};

export default function FiltersConsumableItem(
  props: FiltersConsumableItemProps
) {
  const { isOpen, setIsOpen, params, setParams, searchParams } = props;

  const actualName: string = getSearchParamByKey("name", searchParams);
  const [name, setName] = useState<string>(actualName);

  useEffect(() => {
    if (actualName !== name) setParams({ ...params, name });
  }, [name]);

  return (
    <FilterContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormTextInput label="Nome" value={name} setValue={setName} />

    </FilterContainer>
  );
}
