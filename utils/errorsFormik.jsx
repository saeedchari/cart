export const errorsFormik = (errors) => {
  const result = Object.values(errors).map(item => <div key={item}>{item}</div>);

  return result
}