import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "@radix-ui/react-icons";

export function SubjectSelect({ value, onChange }: { 
  value: string; 
  onChange: (val: string) => void; 
}) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger 
        className="inline-flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
        aria-label="Assunto"
      >
        <Select.Value placeholder="Selecione um assunto" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content 
          className="bg-white border border-gray-300 rounded-md shadow-md z-50"
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-gray-100">
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-2">
            <Select.Item value="Contratação de Saas" className="flex items-center px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100">
              <Select.ItemText>Contratação de SaaS</Select.ItemText>
              <Select.ItemIndicator className="ml-auto"><CheckIcon /></Select.ItemIndicator>
            </Select.Item>

            <Select.Item value="Automação de processos" className="flex items-center px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100">
              <Select.ItemText>Automação de processos</Select.ItemText>
              <Select.ItemIndicator className="ml-auto"><CheckIcon /></Select.ItemIndicator>
            </Select.Item>

            <Select.Item value="Desenvolvimento de sistema sob medida" className="flex items-center px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100">
              <Select.ItemText>Desenvolvimento de sistema sob medida</Select.ItemText>
              <Select.ItemIndicator className="ml-auto"><CheckIcon /></Select.ItemIndicator>
            </Select.Item>

            <Select.Item value="Consultoria especializada" className="flex items-center px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100">
              <Select.ItemText>Consultoria especializada</Select.ItemText>
              <Select.ItemIndicator className="ml-auto"><CheckIcon /></Select.ItemIndicator>
            </Select.Item>

            <Select.Item value="Outros" className="flex items-center px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100">
              <Select.ItemText>Outros</Select.ItemText>
              <Select.ItemIndicator className="ml-auto"><CheckIcon /></Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>

          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-gray-100">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
