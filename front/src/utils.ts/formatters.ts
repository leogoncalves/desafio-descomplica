const formatter = ({
  value,
  pattern,
}: {
  value: string;
  pattern: string;
}): string => {
  let i = 0;
  return pattern.replace(/#/g, (_) => value[i++]);
};

export const formatterCPF = (cpf: string) =>
  formatter({ value: cpf, pattern: "###.###.###-##" });
