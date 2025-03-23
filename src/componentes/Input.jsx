function Input(props) {
  return (
    /**
     * Ao invés de pegar cada props, como abaixo, é possível fazer o spread, que pega todos os props, conforme o input não comentado
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      value={props.value}
      onChange={props.onChange}
    />
    */
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props} //Desta forma
    />
  );
}

export default Input;
