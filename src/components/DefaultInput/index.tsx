import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  type,
  id,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} {...rest} className={styles.input} />
    </>
  );
}
